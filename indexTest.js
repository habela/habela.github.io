(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2990,1195);


(lib.Drzwi10001 = function() {
	this.initialize(img.Drzwi10001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,264);


(lib.Drzwi10002 = function() {
	this.initialize(img.Drzwi10002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,264);


(lib.Drzwi10003 = function() {
	this.initialize(img.Drzwi10003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,264);


(lib.Drzwi10004 = function() {
	this.initialize(img.Drzwi10004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,264);


(lib.drzwiglowapng0001 = function() {
	this.initialize(img.drzwiglowapng0001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,264);


(lib.drzwiglowapng0002 = function() {
	this.initialize(img.drzwiglowapng0002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,264);


(lib.drzwiglowapng0003 = function() {
	this.initialize(img.drzwiglowapng0003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,264);


(lib.drzwiglowapng0004 = function() {
	this.initialize(img.drzwiglowapng0004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,264);


(lib.drzwiglowapng0005 = function() {
	this.initialize(img.drzwiglowapng0005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,264);


(lib.drzwiglowapng0007 = function() {
	this.initialize(img.drzwiglowapng0007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,264);


(lib.drzwiglowapng0008 = function() {
	this.initialize(img.drzwiglowapng0008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,264);


(lib.drzwiglowapng0009 = function() {
	this.initialize(img.drzwiglowapng0009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,264);


(lib.drzwiglowapng0010 = function() {
	this.initialize(img.drzwiglowapng0010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,264);


(lib.drzwiglowapng0011 = function() {
	this.initialize(img.drzwiglowapng0011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,264);


(lib.drzwiglowapng0012 = function() {
	this.initialize(img.drzwiglowapng0012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,264);


(lib.DrzwiUchylone0001 = function() {
	this.initialize(img.DrzwiUchylone0001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,264);


(lib.DrzwiUchylone0002 = function() {
	this.initialize(img.DrzwiUchylone0002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,264);


(lib.DrzwiUchylone0003 = function() {
	this.initialize(img.DrzwiUchylone0003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,264);


(lib.DrzwiUchylone0004 = function() {
	this.initialize(img.DrzwiUchylone0004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,264);


(lib.kamienica = function() {
	this.initialize(img.kamienica);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1330,811);


(lib.latarnia = function() {
	this.initialize(img.latarnia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,343,458);


(lib.stelaz = function() {
	this.initialize(img.stelaz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,255);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Wygenerujklatkipośrednierekagrafi2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#744755").s().p("AgHAjQgHgRgDgSIgEghQgCgQAJgHQASAGgBAXQgCAPABAPQACARAMAMQALAMgHANQgRgBgKgVg");
	this.shape.setTransform(-6.6,-2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCCDCD").s().p("AgJAvQABgFADgBIACABQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAIABADQAAAEgEAAQgEgBgBgCgAgGgJIAAgRQAAgIADgGQACgHAEgCIABAAQADABACACIAAACQABADgEAEQgEAFABAGQAAAHACAFQACAHgDAFIgDABQgFAAgCgIg");
	this.shape_1.setTransform(-12.1,-16.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BEA09E").s().p("AAMA5IAAgIIABgCIgBAFIACAEIgCABgAAGA1QgFgHgNABIgCgBIABgJQgBgGABgHIABAAQAEACACAGQgBADACADIgCgBQgDABgBAEQABADAEABQAEgBAAgEIgBgCIAGADQADADAFgBIAAABIgCACIgCAIIgBgCgAgNgGIABgQQABgIgBgKQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAQACgHgCgEIABgEQAJADAEAAQgEACgCAGQgDAGAAAIIAAASQADAKAHgDQADgGgCgHQgCgEAAgIQgBgGAEgEQAEgFgBgDIAEAKQADAJABALQgBALgGAFQgJADgNADIABgJgAACg2IADgBIACAFQgCgCgDgCg");
	this.shape_2.setTransform(-11.9,-16.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D6B0A0").s().p("AgQAYIACgEIAGgHIAIgEIACgCIADgHQgBgEAAgFQABgFgBgDQgBgIAGgBIABAAQAIAHgCALQAAAJgFAIQgEAKgIAGQgDACgDAAQgFAAgEgDg");
	this.shape_3.setTransform(-9.6,-15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B28A7E").s().p("AgBAuIAAgBIAAgBQgBgEgEgBQgEgBgFgFIgEgHQgBgGgHgDQAIgCAKgBIADAAQAEgGACgGQADgKABgNQABgPgFgJIAEACIADACQAEANAIANQAJAKgCAOQgCALAAAMIABAGIABABIABABIABABIgDADIgBgBIgBAAQgGAAgHAAIAAABIgLACgAAMgSQgGABABAIQABADgBAFQAAAFABAEIgDAHIgDACIgHAEIgGAHIgCAEQAHAGAHgFQAJgFAEgLQAFgIAAgJQACgLgIgHg");
	this.shape_4.setTransform(-9.9,-16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#59373F").s().p("AAWCBQgFgJgKgLQgSgbgSgcQgVgfgNgmIgKghQgQgsAmgOIABACQAEAHAHADQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAIALANQAEAFACAHQAIAOANgDQARAWAXAUQAKAJAGAKQAIAPANAPQgDAGADAHIABAEIgBABIgPAXQAAAAgBAAQAAAAAAABQAAAAgBAAQAAABAAAAIgIAHIgLALQgIALgEAKQgEAJADACIgDAFIgEgFgAhIhMIAEAhQAEAUAHARQAKAUASAAQAHgNgMgLQgLgMgCgRQgBgPACgQQABgXgTgFQgKAHACAPgAhKhyIgBgEIABABIAAABQABADADABIABABQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBABQgBgDAAgDgAg2h2IADgDIAAABIACABIgBAAIgDABgAg5iFIABAAIAIABIABABIgHAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBg");
	this.shape_5.setTransform(-1.6,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4F3137").s().p("ABBDkIgNgHQgHgHgKgCQgMgNgJgQQgHgEgFgHQgEgHgCgIQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAIgMgVQgZglgUgpIgagzQgNgXgDgZQgDgPAHgPIAGgNIgDgEIgFgJIgDgHIgBgEIABgGIAEgGIAAABIABAAIAMgCIgBgBQAHAAAHABIAAAAQAEAFAHgBIAAABIgIAAIgBAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAABAAIAHgBIABAAQAAABAAAAQAAAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABIABABIAAACIABACIAMgDIADABQABAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAQAKAHAIANQAJAKALAIIARAMIAFAFIACgBIAAAAQBGBhA4BpIAAAFIgBAJQgGAZgSAXQgKAPgTAEIgLACQgLAAgJgGgAhZggIAKAgQANAnAVAfQASAcATAbQAJAKAFAJIAEAFIADgFQgDgCAEgIQAEgLAIgKIALgMIAIgGQABgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBIAPgXIABAAIgBgEQgDgHADgHQgNgPgIgOQgGgLgKgKQgXgSgQgXQgOAEgIgPQgCgGgEgGIgLgMQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgHgEgEgGIgBgCQgmANAQAtgAhahjQAAADABADQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIgBgCQgDAAgBgDIAAgCIgBAAIABADgAhGhnIABABIADgCIABAAIgCgBIAAAAIgDACgAiNhpQgDgFAAgIIABgNIACgKQgGABgCgEIAAgGIAAgJQABgDADAAIABgEIAAgDIACgWQACgMgCgLQgCgLAIgEIASABQAAgEAFgBIAEAGIAGAAQANAFAHAMQAIAPAHAQQAGAPgBARIgCAXIgGgBIgBgCIgBgBIgCgFQAAgMACgMQACgOgIgLQgIgNgFgNIgDgCIgEgCQAGAJgBAPQgBANgFALQgBAGgEAGIgEABQgJAAgIACQAHADABAHIADAGQAFAFAEABQAEABABAFIgHAFIABgBQgFABgEgDIgGgDQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBgCAAgDQgCgGgDgCIgCgBIABABQgBAHABAGIgBAJIABABQAOgCAGAIIAAACIAAADIgFABIgKACQgIAAgGgFgAiEjXQABAFgBAGQAAABAAAAQABAAAAABQAAAAAAAAQAAAAgBAAQABAJgBAJIgBAQIAAAJQANgCAKgEQAGgGAAgKQAAgMgEgIIgDgKIgBgCIgCgEIgDABIgBABQgFAAgIgDIgBADgAhrhpIABAAIgBADg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-23.3,30,46.7);


(lib.Wygenerujklatkipośrednie93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B54428").s().p("AjzA5QgThWAihNQAohaBQgaIADgBIAEgEIAEgDIAGgEIAKgEIAIgBQBGAYg5A4QgoAngSA1QgRA1gBA3QgBAqARAlQB0AbB4AFQANABgDAOQgNA9hMAJQgbADgXAAQi9AAgpi3gADLAkQgSgWgJgdQgehuhhg5QgggTAegZQAJgIAKAAQBtAeA2BkQAiBAgTBEQgHAXgLAAQgKAAgNgPg");
	this.shape.setTransform(-70.5,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2B87A").s().p("AFNDKQmYkPmwjlQi2hgishmIAEACQAKgaAXgPQNQG7NGIxQgHAigLAhQkBikj+iqg");
	this.shape_1.setTransform(-298.3,-112.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D1D11").s().p("AgSBmIgagIQgRgHgKgOQgNgTgLgUQgOgbAIgcQAHgfAUgZQAKAlgFAmQgEAmAdAaQAhAdAmgNQAJgDAHgHQAPgQAOgSIgcgCIALgTIgXgZIgNAEIgUAAIgIAdIAUAJIgaAEIgCAFIgDgFIgQgCIAAgCIAAgEIABgCIADgCIACgCIADgCIADgBQgIg+AXg7QAyAvAYBAIASgFIAEAKIARgWQADAmgRAiQgHAPgPAKQgcASgfAAQgNAAgOgDgAACgfIANgEIgMgUg");
	this.shape_2.setTransform(-72.7,20.4,2.332,2.281,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#762D1B").s().p("AhJBkQgqgmgCg6QgBgzAfgqQAOgTAVgIQAogNAmALQBIAWASBJQAEATgDATQgDAQgHAOQghA/hBANIgbADQgggFgXgTgAhugMQgIAcAOAbQALAUANATQAKAOARAHIAaAIQAuAKAogZQAPgKAHgPQARgigDgmIgRAWIgEgKIgSAFQgYhAgygvQgXA7AIA+IgDABIgDACIgCACIgDACIgBACIAAAEIAAACIAQACIADAFIACgFIAagEIgUgJIAIgeIAUAAIANgDIAXAZIgLATIAcACQgOASgPAQQgHAHgJADQgmANghgdQgdgaAEgnQAFglgKglQgUAZgHAfgAgFguIALAUIgMAEg");
	this.shape_3.setTransform(-70.2,18.9,2.332,2.281,10.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4CF79").s().p("A/UjEQmZkQmvjmQjnh6jXiDIAEgwQOvHiOgJyQEyDQE6DIQB9BPCBBJQDoCCDwBwQFGjOFUi7QGCjVGBjrQF7jnGTi3QD5hxD1hXQAqgqBHgWQBqghBjg3QBeg0Bcg3QAugcAugTIALgFIAKABIAKADIAFACQAEACAEAEIAEAIIADAHQhFBOhpAzQhcAthcAvQhmA1hjA2QgtAZgpAGQgyAdhGAXQmsCHl+DlQmBDkmEDXQmHDZl5DiQiBBNh1BaQvVo0u4p4g");
	this.shape_4.setTransform(-64.5,-72.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E3C293").s().p("ADDH5QlwgUkPjnQiEhwBeicQB2jEC0h9IAMgNQByhnCIg1QD4AcBJEIQAJAhAHAhQBJB3AcCkQApD8jhBcQg8AYg+AAIgPAAg");
	this.shape_5.setTransform(203.8,30.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E3C293").s().p("ABzKzQhjgShkgIQoIgmjsnGQg/h4ADiLQADiwAsimQAGhYAMhXQAKhNBRgOIAPgCQAygFAxgCIALgDQA9gIA5AMQBaAGBZARQJrgWGfHSQCECUArC9QAkCcg0CTQgSA1geAnQghCMiyApQiOAgiMAAQhtAAhqgTg");
	this.shape_6.setTransform(-301.4,-98.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E3C293").s().p("AiaC9Qj8iOC2jqQAlgvA2gIQELglCIDTQBFBqhSBiQheBxh8AAQhYAAhpg8g");
	this.shape_7.setTransform(-264.9,123.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9E2B0").s().p("AitbBUgt5gBcgFpAALQBRqiBFxGQAjogASmsQALgrgGhIQALkkACjpQAKg5ACg2UATFACJAkdABMQPKAgNfAKQInAGF9gEQAtgFAugDIAAgBQBfAABgAEIBOgDQhLMcgILfQgKQVB8NeUghDgBEgX6gAvg");
	this.shape_8.setTransform(-73.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-420.7,-184.4,694.4,368.9);


(lib.Wygenerujklatkipośrednie92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D1D11").s().p("AgiBjQgWgFgQgUQg/hPA+hHQAJAbgEAwQgEA0AyAZQAtAXAdgmIAUgbQgKACgRgDIgBgBQADgLAIgHQgMgMgLgNQgJAFgYgBQgDAPgFANQAsAMgyABIgCAFQgBADgCgIIgLAAQgGAAACgHIABgCQAEgHAHAAIAAAAQgLhDAag3QA0AzAVA8QAIgDAKgBIAFAKIAPgWQADgEgBAKQgDBshcAAQgTAAgZgGgAACgeIAOgEIgMgVIgCAZg");
	this.shape.setTransform(-72.7,20.3,2.332,2.281,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#762D1B").s().p("AhoBAQgJgTgEgWIgCgTQAAhFAmgiQAggdAxAGQAwAFAiAhQAmAkAAAvQAAAigmAsQgpAvgtAAQhHAAgdg8gAhTBTQAQAUAVAFQCIAeADiFQABgJgDAEIgPAWIgEgKQgLABgIADQgVg8g0gzQgaA3ALBDIAAAAQgHAAgEAHIgBACQgCAHAGAAIALAAQACAHACgCIACgFQAxgBgsgMQAFgOAEgPQAXABAJgEQALAMAMANQgIAHgDALIABABQARACALgBIgVAbQgdAmgtgXQgygZAEg1QAEgvgJgbQg+BGBABQgAgHguIALAVIgNAEIACgZg");
	this.shape_1.setTransform(-69.7,18.8,2.332,2.281,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2662").s().p("AgKB6QgLgBgGgGQgGgHAAgJIADgVQADgPADghQAEguADgTQADgMAAgIQgbAMggAiIgTBYQgBALgJAFQgKAGgMAAQgVgBABgZIADgUIANhHIAIgtQAEgcALgQQALgQANAAQAKAAAHAIQAHAHAAAKIgGAUQAkgiAbABQAdABAJAYQAcgUAiABQAvACgCA5QAAANgDAUIgDA6IgDAsQgBAOgLAHQgJAHgLgBQgNAAgFgHQgFgHABgTIAIhmQABgkgHAAQgEAAgUAJQgTAJgGAFQgEARgDAuQgFA7gEAKQgEAJgIAFQgHAGgJAAIgBAAg");
	this.shape_2.setTransform(203.2,110.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C2662").s().p("AgWBqQgjgBgVgXQgVgYACgjQABgwAlgoQAlgqA3ACQAgACARAWQASAWgBAkQgCAygjApQgiAmgvAAIgDAAgAgXgeQgTAYgBAXQAAARAIAKQAIAKAPABQAYABAQgVQAQgVABggQABgjgagBIgCAAQgXAAgSAYg");
	this.shape_3.setTransform(177.5,110.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C2662").s().p("AgMBtQgogBgYgWQgYgWACgiQABgsApgwQAqgwAqACQAVAAAaANQAZANAAAPQgBALgIAIQgKAJgLgBQgJAAgKgKQgKgJgXgBQgQAAgXAfQgZAfgBAVQAAAQALAKQAMALAWABQAMAAAUgKQAWgJAFAAQAJABAHAHQAFAHAAAIQgBARgjAOQghANgSAAIgDAAg");
	this.shape_4.setTransform(156.5,109.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2662").s().p("AgEAbQgMgBgIgHQgHgIAAgJQAAgKAMgJQALgJANAAQAMABAIAHQAIAGgBAKQAAALgLAJQgLAJgNAAIgBAAg");
	this.shape_5.setTransform(136.4,117.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C2662").s().p("AhNBrQgLAAgGgIQgFgIACgLIAZh+IAGgcQACgNADgGQAEgGAHgEQAGgDAJAAQAWABAAAWQAngZAqACQAgABgCAjQAAAIgCAJIgCANQgCALgIAJQgJAJgOAAQgVgBAAgTIACgGIACgUQgsAFgbAmIgSBgQgDALgIAHQgJAHgLAAIgBAAg");
	this.shape_6.setTransform(120.2,108);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C2662").s().p("AgIBqQgugCgYgVQgZgVACgiQABgvAkgsQAjgsA3ACQAlABAVANQAUANgBAWQgBAWgQAOQgRAOgvAQIhGAbQAQAUAgABQAaABAUgJQASgJAKAAQARABAAAOQgBAXgfAOQgeANggAAIgFAAgAgrgMIAvgRQAagKAUgLQgLgHgVgBIgCAAQgiAAgZAug");
	this.shape_7.setTransform(98.2,107.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2C2662").s().p("AA0BzQgXgBABgWQABgxAEgXQAEgXAIgbQADgLAAgFQAAgJgGgBQgTAAgVAUQgVAWgMAVQgLAXgEAjQgBARgCAGQgDAHgIAGQgIAGgMgBQgKAAgGgGQgGgHAAgJIACgVQADgWAMgsQAMgrACgRIAFgcQACgKAJgHQAJgGAMAAQAZAAgEAfIAAACQAhgbAgABQAxABgCA5QgBAQgEAVIgDANQgGAcAAAWQgBAbgCALQgCALgJAIQgIAHgLAAIgCAAg");
	this.shape_8.setTransform(77.2,106.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C2662").s().p("Ag1CZQhHgCABgbQABgKAHgIQAIgJANABQAJAAAQAEQARAEAMABQAcABAQgRQARgSAKglQgXATgdgBQgkgBgTgVQgTgVABgeQACg0AogqQAogpBCACQAlABAMATQAVADgBAUQAAALgMAgQgQArgNA0QgPBHggAbQgeAagzAAIgHAAgAgQhTQgWAbgBAhQgBAeAdACQANAAASgOQARgOAHgPQAHgPAQgyQgMgJgMAAIgCgBQgkAAgVAag");
	this.shape_9.setTransform(55.1,110.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C2662").s().p("AghCUQgLgBgGgGQgHgGABgKIAHgnQAGgpALgmQAIgcACgPQACgKAJgIQAJgHALAAQAKABAGAGQAGAGAAAKQgBAIgJAkQgKAlgFAiIgIAuQgCAMgKAGQgIAHgKAAIgBAAgAAVhaQgLgBgIgHQgGgIAAgKQABgNAKgJQAMgKANABQALAAAHAHQAIAIAAAKQgBANgMAKQgKAJgNAAIgBAAg");
	this.shape_10.setTransform(41.7,100.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C2662").s().p("AgcBsQgcgBgVgKQgVgKABgQQAAgZAbABQAJAAAQAGQARAHAIAAQApACABgSQAAgJgWgMQgogVgNgMQgOgNABgTQABgdAZgUQAagTBLADQAmABgBAXQAAANgHAOQgHAPgMAAQgUgBgBgRIgQgBQgwgCAAANQAAAIAYANQApAWANAOQANAOgBATQgBAdgcAUQgbATgrAAIgGgBg");
	this.shape_11.setTransform(24.5,104.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C2662").s().p("AgIBqQgugCgYgVQgZgVACgiQABgvAkgsQAjgsA3ACQAlABAVANQAUANgBAWQgBAWgQAOQgRAOgvAQIhGAbQAQAUAgABQAaABAUgJQASgJAKAAQARABAAAOQgBAXgfAOQgeANggAAIgFAAgAgrgMIAvgRQAagKAUgLQgLgHgVgBIgCAAQgiAAgZAug");
	this.shape_12.setTransform(3.3,103.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2C2662").s().p("AgoCdQgpgBgWgZQgWgZABgiQACgzAkgoQAlgpA4ACQAcABAPANQARhHAIgWQAGgUAXAAQAWABgBAVQAAAKgVBOQgSA/gIAvQgIAugBAPQAAAKgCAFQgBAGgJAGQgIAGgKAAQgPgBgFgNQgaAPgdAAIgEgBgAg2ANQgSAYgBAZQgBATANANQAMANATAAQAZABAZgVQABgHANhAQgIgYgbgBIgEAAQgiAAgPAWg");
	this.shape_13.setTransform(-17.3,97.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C2662").s().p("AgyAWQgNgBgIgFQgHgGAAgJQAAgKAMgIQAKgHAPABIBbABQANAAAIAGQAJAFgBAKQAAAKgIAHQgJAHgUABIhcgCg");
	this.shape_14.setTransform(-42.5,101.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2C2662").s().p("AgMBtQgogBgYgWQgYgWACgiQABgsApgwQAqgwAqACQAVAAAaANQAZANAAAPQgBALgIAIQgKAJgLgBQgJAAgKgKQgKgJgXgBQgQAAgXAfQgZAfgBAVQAAAQALAKQAMALAWABQAMAAAUgKQAWgJAFAAQAJABAHAHQAFAHAAAIQgBARgjAOQghANgSAAIgDAAg");
	this.shape_15.setTransform(-65.6,101.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C2662").s().p("AghCUQgLgBgGgGQgHgGAAgKIAIgnQAGgpALgmQAIgcACgPQABgKAKgIQAKgHAKAAQAKABAGAGQAGAGAAAKQgBAIgJAkQgKAlgGAiIgIAuQgCAMgJAGQgIAHgKAAIgBAAgAAVhaQgMgBgHgHQgGgIAAgKQABgNAKgJQAMgKANABQALAAAHAHQAIAJAAAJQgBANgLAKQgLAJgNAAIgBAAg");
	this.shape_16.setTransform(-79.4,96.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C2662").s().p("AA8CkQgOgBgFgJQgFgJABgjQACgnAKgoQADgPAAgHQABgLgIAAQgigCgoA4QgOBKgLANQgLANgPAAQgKAAgHgIQgHgGAAgJQABgGAEgIQADgGAPhKIAUhlIACgGQAIgbAAgVQABgSAEgIQADgHAJgFQAIgFAJAAQAXABgBAfQgBAXgLAqIgIAlQAggaAmABQAaABAMAMQANAMgBAbIgBALQgKA2gCAxIAAAZQABAIgJAKQgKAJgNAAIgBAAg");
	this.shape_17.setTransform(-98.5,94.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C2662").s().p("AhYCjQgLgBgGgGQgGgHAAgJIAQhNQAWhuAHhBQACgZAMgNQALgNAOABQALAAAGAIQAGAHgCAKIgBACQAcgNAaABQBDADgDBLQgCBEgjAgQgkAigsgBQgTgBgQgFIgPBPQgCAMgJAHQgIAHgLAAIgCAAgAgQhKIgOBPQARAGAQAAQAbABAOgWQAMgXABgfQACgfgVgBIgBAAQgYAAgdAWg");
	this.shape_18.setTransform(-121.3,103.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C2662").s().p("AA5BtQgIAAgRgVQgmAQgTgBQhQgCAChKQADg8AsgmQAsgmAzABQATABAYAMQAXAMgBAOQAAAJgGAHQgHAPgGAeQgGAcgBAPQAAAJACADIAEATIAEATQAAAHgJAJQgJAIgMAAIgBAAgAgUgnQgaAYgBAlQgBAjAeABQAYAAAVgPQAFhIANgcQgGgEgFAAIgDAAQgcAAgXAWg");
	this.shape_19.setTransform(-143.3,98.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C2662").s().p("AhNBrQgLAAgGgIQgFgIACgLIAZh+IAGgcQACgNADgGQAEgGAHgEQAGgDAJAAQAWABAAAWQAngZAqACQAgABgCAjQAAAIgCAJIgCANQgCALgIAJQgJAJgOAAQgVgBAAgTIACgGIACgUQgsAFgbAmIgSBgQgDALgIAHQgJAHgLAAIgBAAg");
	this.shape_20.setTransform(-162.3,98);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C2662").s().p("Ag1CZQhHgCABgbQABgKAHgIQAIgJANABQAJAAAQAEQARAEAMABQAcABAQgRQARgRAKgmQgXATgdgBQgkgBgTgVQgTgVABgeQACg0AogqQAogpBCACQAlACAMASQAVADgBAUQAAALgMAgQgQArgNA0QgPBHggAbQgeAagzAAIgHAAgAgQhTQgWAbgBAhQgBAfAdABQANAAASgOQARgPAHgOQAHgPAQgyQgMgJgMAAIgCgBQgkAAgVAag");
	this.shape_21.setTransform(-184.2,102.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2C2662").s().p("AgcCrQhDgCgogpQgogpACg6QAChOA7g+QA6g/BUADQBBACApAlQAoAlgCA0QgCAygdAhQgeAig3gCQgbgBgWgbQgaAWgXgBQgbgBgQgPQgPgQAAgWQACgkAmgiQAmgjAqABQAVABAAAPQgBAMgHAHQgIAGgbAJQgWAGgJAMQgJAMgBAMQAAAEAEAFQACAEAFAAQANABANgNIATgYQAKgNAPABQARAAgBARQAAAGgHARIgBAGQAAAKAXABQAUABANgPQAMgOABgdQACgigcgXQgcgYgrgBQg6gCgmAsQgnAtgCA2QgBAoAaAcQAaAcAvACQAOAAALgCQAMgCAfgLQAJgDAHAAQAKABAHAGQAGAIAAAJQgBAXgqALQgmALgcAAIgHgBg");
	this.shape_22.setTransform(-212.2,91.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2C2662").s().p("AA5BtQgIAAgRgVQgmAQgTgBQhQgCAChKQADg8AsgmQAsgmAzABQATABAYAMQAXAMgBAOQAAAJgGAHQgHAPgGAeQgGAcgBAPQAAAJACADIAEATIAEATQAAAHgJAJQgJAIgMAAIgBAAgAgUgnQgaAYgBAlQgBAjAeABQAYAAAVgPQAFhIANgcQgGgEgFAAIgDAAQgcAAgXAWg");
	this.shape_23.setTransform(-243.1,95.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2C2662").s().p("AgeCgQgMgBgGgIQgHgHADgMIA0kLQACgMAJgGQAKgGALAAQALAAAHAIQAFAHgCALIgyEBQgGAkgaAAIgBAAg");
	this.shape_24.setTransform(-257.2,89);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2C2662").s().p("AgIBqQgugCgYgVQgZgVACgiQABgvAkgsQAjgsA3ACQAlABAVANQAUANgBAWQgBAWgQAOQgRAOgvAQIhGAbQAQAUAgABQAaABAUgJQASgJAKAAQARABAAAOQgBAXgfAOQgeANggAAIgFAAgAgrgMIAvgRQAagKAUgLQgLgHgVgBIgCAAQgiAAgZAug");
	this.shape_25.setTransform(-275.8,93.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2C2662").s().p("AgUCeQgcgBgWgLQgIAHgKAAQgKgBgGgGQgGgGAAgJIAEgSIADgOIArjbQADgOAKgMQAJgMAOABQASAAgBARIgBAJQgDAIgBAFIgOBKQAegPAZABQAoACAWAaQAVAagBAkQgCA1goAlQgmAkgvAAIgEAAgAglAMIgQBSQAZANASAAQAbABAUgTQAVgUABggQAAgSgJgOQgKgMgVgBIgBAAQgUAAgjAUg");
	this.shape_26.setTransform(-298.4,87.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2C2662").s().p("AA5BtQgIAAgRgVQgmAQgTgBQhQgCAChKQADg8AsgmQAsgmAzABQATABAYAMQAXAMgBAOQAAAJgGAHQgHAPgGAeQgGAcgBAPQAAAJACADIAEATIAEATQAAAHgJAJQgJAIgMAAIgBAAgAgUgnQgaAYgBAlQgBAjAeABQAYAAAVgPQAFhIANgcQgGgEgFAAIgDAAQgcAAgXAWg");
	this.shape_27.setTransform(-322.2,92.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2C2662").s().p("AA8CkQgOgBgFgJQgFgJABgjQACgnAKgoQADgPAAgHQABgLgIAAQgigCgoA4QgOBKgLANQgLANgPAAQgKAAgHgIQgHgGAAgJQABgGAEgIQADgGAPhKIAUhlIACgGQAIgbAAgVQABgSAEgIQADgHAJgFQAIgFAJAAQAXABgBAfQgBAXgLAqIgIAlQAggaAmABQAaABAMAMQANAMgBAbIgBALQgKA2gCAxIAAAZQABAIgJAKQgKAJgNAAIgBAAg");
	this.shape_28.setTransform(-344,86.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F4CF79").s().p("A/UjEQmZkQmvjmQjnh6jXiDIAEgwQOvHiOgJyQEyDQE6DIQB9BPCBBJQDoCCDwBwQFGjOFUi7QGCjVGBjrQF7jnGTi3QD5hxD1hXQAqgqBHgWQBqghBjg3QBeg0Bcg3QAugcAugTIALgFIAKABIAKADIAFACQAEACAEAEIAEAIIADAHQhFBOhpAzQhcAthcAvQhmA1hjA2QgtAZgpAGQgyAdhGAXQmsCHl+DlQmBDkmEDXQmHDZl5DiQiBBNh1BaQvVo0u4p4g");
	this.shape_29.setTransform(-66.5,-73.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F9E2B0").s().p("AisbBUgt6gBcgFpAALQBRqiBFxGQAjogASmsQALgrgGhIQALkkACjpQAKg5ACg2UATFACJAkdABMQPKAgNfAKQLaAIGvgKQguAUguAcQhcA3heA0QhjA2hqAhQhHAXgqApQj1BXj5BxQmTC4l7DnQmBDsmCDUQlUC7lHDNQjvhwjoiBQiBhIh9hPQk6jJkyjPQugp0uvniIgEAxQDXCCDnB7QGvDlGZEQQO4J5PVI0QB1hbCBhNQF5jgGHjZQGEjXGBjlQF+jlGsiIQBGgWAygdQApgHAtgYQBjg3Bmg0QBcgvBcguQBpgzBFhNIgDgIIgEgHQgEgEgEgDIgFgCIBkgDQhLMcgILfQgKQVB8NeUghDgBEgX5gAvg");
	this.shape_30.setTransform(-73.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-420.7,-184.4,694.4,368.9);


(lib.Wygenerujklatkipośrednie89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D1D11").s().p("AgiBjQgWgFgQgUQg/hPA+hHQAJAbgEAwQgEA0AyAZQAtAXAdgmIAUgbQgKACgRgDIgBgBQADgLAIgHQgMgMgLgNQgJAFgYgBQgDAPgFANQAsAMgyABIgCAFQgBADgCgIIgLAAQgGAAACgHIABgCQAEgHAHAAIAAAAQgLhDAag3QA0AzAVA8QAIgDAKgBIAFAKIAPgWQADgEgBAKQgDBshcAAQgTAAgZgGgAACgeIAOgEIgMgVIgCAZg");
	this.shape.setTransform(-4,-3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#762D1B").s().p("AhoBAQgJgTgEgWIgCgTQAAhFAmgiQAggdAxAGQAwAFAiAhQAmAkAAAvQAAAigmAsQgpAvgtAAQhHAAgdg8gAhTBTQAQAUAVAFQCIAeADiFQABgJgDAEIgPAWIgEgKQgLABgIADQgVg8g0gzQgaA3ALBDIAAAAQgHAAgEAHIgBACQgCAHAGAAIALAAQACAHACgCIACgFQAxgBgsgMQAFgOAEgPQAXABAJgEQALAMAMANQgIAHgDALIABABQARACALgBIgVAbQgdAmgtgXQgygZAEg1QAEgvgJgbQg+BGBABQgAgHguIALAVIgNAEIACgZg");
	this.shape_1.setTransform(-2.8,-3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2662").s().p("AgGArQgDgCAAgEIAAgIIAAgSIABgYIgBgHQgJAFgKAOIgEAhQAAAEgDACQgEADgEABQgIAAgBgJIABgIIACgaIABgRQAAgLAEgHQADgGAFAAQAEgBACADQAEACAAAEIgCAIQAMgOAKgBQALgBAEAIQAKgIANgBQARgBACAVIAAAMIABAWIABAQQAAAFgDADQgEADgEABQgFAAgCgCQgCgDgBgHIgBgmQgBgNgDAAIgIAFIgJAGIAAAXQABAWgBAEQgBAEgDACQgDACgDAAIgBAAQgDAAgCgBg");
	this.shape_2.setTransform(95.3,24.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C2662").s().p("AgZAiQgJgIgBgNQgBgSAMgRQAMgQAUgCQAMgBAHAIQAIAHABAOQABASgLARQgLAQgSACIgDAAQgLAAgIgHgAAFgUQgIAAgGAKQgGAKABAIQAAAGADAEQAEADAFAAQAJgBAFgIQAFgJgBgLQgBgMgIAAIgCAAg");
	this.shape_3.setTransform(85.5,24.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C2662").s().p("AgXAjQgKgHgBgNQgBgPANgUQANgTAPgCQAIAAALAEQAKADAAAGQAAAEgCADQgEAEgEAAQgDAAgEgDQgEgDgJABQgFAAgIANQgIALABAJQAAAGAFADQAFAEAHgBQAFAAAHgFIAKgEQADAAADACQACACAAADQABAHgNAGQgMAHgHAAIgEABQgMAAgIgHg");
	this.shape_4.setTransform(77.6,25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2662").s().p("AgHAIQgEgCAAgEQgBgDAFgEQAEgEAEAAQAEgBAEADQADACAAADQAAAEgEAEQgEAEgEAAIgCAAQgDAAgCgCg");
	this.shape_5.setTransform(70.5,29.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C2662").s().p("AgeApQgDgDABgEIAEgvIABgLIABgIIAEgDQACgCADAAQAJgBAAAIQANgLAPgBQAMgBABANIAAAHIAAAFQAAAEgDAEQgCADgGABQgIAAAAgHIAAgCIAAgIQgPAEgJAPIgDAkQAAAFgDADQgDADgFAAQgEAAgCgCg");
	this.shape_6.setTransform(64.1,26.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C2662").s().p("AgZAjQgKgIgBgMQgBgRAMgSQALgSAUgBQAOgBAIAEQAIAEABAIQAAAIgGAGQgFAGgRAHIgYANQAHAHALgBQAKgBAHgEQAGgEAEgBQAHAAAAAFQABAJgMAGQgLAHgOABIgDAAQgOAAgJgFgAAFgVQgNABgHASIAQgIIAQgKQgDgCgFAAIgEABg");
	this.shape_7.setTransform(55.7,27);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2C2662").s().p("AgfApQgCgCgBgDIAAgIQAAgIADgSQADgQAAgGIAAgLQABgDADgDQADgDAEAAQAKgBAAALIAAABQAKgLAMgBQASgCACAVIgBAOIAAAFIAAATIAAAOQAAAEgDADQgDAEgEAAQgJABAAgJIgCgbIADgTIAAgGQAAgBAAAAQAAgBgBgBQAAAAgBAAQAAAAgBAAQgHAAgGAJQgHAJgDAIQgEAJAAANIAAAJIgEAFQgCACgEABQgEAAgDgCg");
	this.shape_8.setTransform(48,27.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C2662").s().p("AgoAzQAAgDACgEQADgDAFgBIAJABIALAAQAKgBAFgGQAGgHACgPQgIAIgKABQgNABgJgHQgIgHAAgLQgCgTANgRQAOgSAYgCQAOgBAFAHQAIAAAAAIQABAEgEAMQgEARgCATQgDAbgLAMQgLALgUACIgIABQgTAAAAgJgAALgpQgNABgHAKQgHALABAMQABALALAAQAEgBAGgFQAGgGACgGQACgGAEgTQgFgCgDAAIgCAAg");
	this.shape_9.setTransform(39.9,30.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C2662").s().p("AgMA3QgDgDAAgDIABgPIACgeIADgQQAAgEADgDQAEgDADAAQAEgBACACQACADABADIgCAQIgDAcIgBARQAAAEgEADQgCADgEABIgCAAQgDAAgBgCgAgDgkQgCgCgBgEQAAgFAEgEQADgEAFgBQAEAAADADQADACAAAEQABAEgEAFQgEAEgFAAIgCAAQgCAAgDgCg");
	this.shape_10.setTransform(34.6,26.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C2662").s().p("AgYAoQgIgDAAgGQgBgJAKgBQADAAAGACQAHACADgBQAPgBgBgGQAAgEgJgEQgPgGgFgDQgGgEgBgIQAAgKAIgJQAJgIAbgCQAPgBABAJQAAAEgCAGQgCAFgFABQgHAAgBgGIgGAAQgRACAAAFQAAADAJAEQAQAGAGAEQAGAFAAAHQABALgKAIQgKAJgRABIgFAAQgIAAgGgCg");
	this.shape_11.setTransform(28.2,28.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C2662").s().p("AgZAjQgKgIgBgMQgBgRAMgSQALgSAUgBQAOgBAIAEQAIAEABAIQAAAIgGAGQgFAGgRAHIgYANQAHAHALgBQAKgBAHgEQAGgEAEgBQAHAAAAAFQABAJgMAGQgLAHgOABIgDAAQgOAAgJgFgAAFgVQgNABgHASIAQgIIAQgKQgDgCgFAAIgEABg");
	this.shape_12.setTransform(20.2,29.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2C2662").s().p("AgfA3QgJgJgBgMQgCgUAMgPQAMgRAUgCQALgBAGAEQAEgbACgIQACgIAIgBQAIgBABAIIgFAiQgEAYgBARIgBAYIAAAGQAAACgDACQgDADgEABQgFAAgCgFQgLAHgKABIgEAAQgNAAgIgHgAAAgBQgMABgGAJQgFAJAAAKQABAHAFAEQAGAEAHAAQAIgBAJgJIACgbQgEgHgKAAIgBAAg");
	this.shape_13.setTransform(12.2,28.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C2662").s().p("AgZAJQgDgCgBgDQABgEADgDQAEgDAGAAIAhgDQAFgBADACQADACABADQgBADgCADQgDADgIACIgiACIgBAAQgEAAgCgBg");
	this.shape_14.setTransform(3.2,30.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2C2662").s().p("AgXAjQgKgHgBgNQgBgPANgUQANgTAPgCQAIAAALAEQAKADAAAGQAAAEgCADQgEAEgEAAQgDAAgEgDQgEgDgJABQgFAAgIANQgIALABAJQAAAGAFADQAFAEAHgBQAFAAAHgFIAKgEQADAAADACQACACAAADQABAHgNAGQgMAHgHAAIgEABQgMAAgIgHg");
	this.shape_15.setTransform(-5.5,31.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C2662").s().p("AgMA3QgDgDAAgDIABgPIACgeIADgQQAAgEADgDQAEgDADAAQAEgBACACQACADABADIgCAQIgDAcIgBARQAAAEgEADQgCADgEABIgCAAQgDAAgBgCgAgDgkQgCgCgBgEQAAgFAEgEQADgEAFgBQAEAAADADQADACAAAEQABAEgEAFQgEAEgFAAIgCAAQgCAAgDgCg");
	this.shape_16.setTransform(-10.8,30.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C2662").s().p("AghA6QgCgCgBgDIABgGIAEgeIADgmIABgCQABgLAAgIIAAgJIAEgGQADgCADAAQAJgBABAMQABAIgDARIgBAOQAKgMAOgBQAKAAAFAEQAFADABALIAAAEQgBAUABASIABAKQABADgEAEQgDAEgFAAQgFAAgDgDQgCgDgBgNQgBgPACgPIABgJQAAgBgBAAQAAAAAAgBQgBAAgBAAQAAAAgBAAQgMABgMAVQgCAcgEAFQgDAGgGAAIgCAAQgDAAgCgCg");
	this.shape_17.setTransform(-17.7,30.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C2662").s().p("AgiA8QgCgCAAgDIACgeQAEgpAAgZQgBgJAFgGQADgFAFAAQAEgBADADQADACgBAEIAAABQAJgGAKgBQAZgBACAcQACAZgMANQgMAPgPABQgHAAgHgBIgCAeQAAAFgDACQgEAEgEAAIgCAAQgDAAgCgCgAAJgnQgJABgKAJIgCAdQAHACAFAAQAKgBAEgIQAEgJgBgMQAAgLgIAAIAAAAg");
	this.shape_18.setTransform(-25.9,35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C2662").s().p("AgkAPQgBgWAPgQQAPgPASgCQAHAAAJADQAKADAAAGQAAADgCADQgCAGgBALIAAAQIAAAEIADAHIACAHQABADgEADQgCAEgFAAQgDABgHgHQgOAHgGABIgEAAQgbAAgCgagAgHgMQgJAKABANQABANALgBQAIgBAIgGQgBgbADgLIgEgBQgLABgHAKg");
	this.shape_19.setTransform(-34.6,33.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C2662").s().p("AgeApQgDgDABgEIAEgvIABgLIABgIIAEgDQACgCADAAQAJgBAAAIQANgLAPgBQAMgBABANIAAAHIAAAFQAAAEgDAEQgCADgGABQgIAAAAgHIAAgCIAAgIQgPAEgJAPIgDAkQAAAFgDADQgDADgFAAQgEAAgCgCg");
	this.shape_20.setTransform(-41.6,34.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C2662").s().p("AgoAzQAAgDACgEQADgDAFgBIAJABIALAAQAKgBAFgGQAGgHACgPQgIAIgKABQgNABgJgHQgIgHAAgLQgCgTANgRQAOgSAYgCQAOgBAFAHQAIAAAAAIQABAEgEAMQgEARgCATQgDAbgLAMQgLALgUACIgIABQgTAAAAgJgAALgpQgNABgHAKQgHALABAMQABALALAAQAEgBAGgFQAGgGACgGQACgGAEgTQgFgCgDAAIgCAAg");
	this.shape_21.setTransform(-49.6,36.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2C2662").s().p("AgsA2QgRgOgBgWQgDgcAUgaQASgaAggCQAYgCAQAMQARAMACAUQABATgKANQgJANgVACQgKAAgKgJQgHAKgJAAQgKABgHgFQgGgFgBgJQgBgNANgOQANgOAPgBQAIgBAAAGQAAAEgCADQgDADgJAEQgHADgEAFQgDAFABADQAAABAAAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAQAFAAAEgFIAFgKQAEgFAFAAQAGgBABAHIgCAIIAAACQAAAEAJgBQAHAAAEgFQAEgHAAgKQgBgNgMgIQgLgHgQABQgVACgMASQgNASABAUQACAOAKAKQALAJASgBIAJgCIAPgGIAGgCQAEAAADACQACADABADQAAAJgPAGQgPAFgLABIgHAAQgUAAgPgLg");
	this.shape_22.setTransform(-60.5,33.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2C2662").s().p("AgkAPQgBgWAPgQQAPgPASgCQAHAAAJADQAKADAAAGQAAADgCADQgCAGgBALIAAAQIAAAEIADAHIACAHQABADgEADQgCAEgFAAQgDABgHgHQgOAHgGABIgEAAQgbAAgCgagAgHgMQgJAKABANQABANALgBQAIgBAIgGQgBgbADgLIgEgBQgLABgHAKg");
	this.shape_23.setTransform(-71.9,36.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2C2662").s().p("AgLA7QgCgDgBgEIAJhmQAAgEAEgDQACgCAEgBQAEAAADACQADADgBAEIgIBhQgBAOgKABIgBAAQgDAAgCgCg");
	this.shape_24.setTransform(-77.3,34.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2C2662").s().p("AgZAjQgKgIgBgMQgBgRAMgSQALgSAUgBQAOgBAIAEQAIAEABAIQAAAIgGAGQgFAGgRAHIgYANQAHAHALgBQAKgBAHgEQAGgEAEgBQAHAAAAAFQABAJgMAGQgLAHgOABIgDAAQgOAAgJgFgAAFgVQgNABgHASIAQgIIAQgKQgDgCgFAAIgEABg");
	this.shape_25.setTransform(-84.2,37.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2C2662").s().p("AgkA6QgCgDgBgDIABgHIABgFIAHhTQAAgFADgFQADgFAGAAQAGgBABAHIgBADIAAAFIgDAcQALgHAJgBQAPgBAJAJQAJAJABANQACAUgOAQQgNAPgSABQgKABgJgDQgDADgEABQgDAAgDgCgAADgFQgHABgMAJIgDAfQAKAEAHgBQAKAAAGgJQAHgIgBgMQAAgHgFgEQgEgEgGAAIgCAAg");
	this.shape_26.setTransform(-92.4,36.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2C2662").s().p("AgkAPQgBgWAPgQQAPgPASgCQAHAAAJADQAKADAAAGQAAADgCADQgCAGgBALIAAAQIAAAEIADAHIACAHQABADgEADQgCAEgFAAQgDABgHgHQgOAHgGABIgEAAQgbAAgCgagAgHgMQgJAKABANQABANALgBQAIgBAIgGQgBgbADgLIgEgBQgLABgHAKg");
	this.shape_27.setTransform(-101.5,38.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2C2662").s().p("AghA6QgCgCgBgDIABgGIAEgeIADgmIABgCQABgLAAgIIAAgJIAEgGQADgCADAAQAJgBABAMQABAIgDARIgBAOQAKgMAOgBQAKAAAFAEQAFADABALIAAAEQgBAUABASIABAKQABADgEAEQgDAEgFAAQgFAAgDgDQgCgDgBgNQgBgPACgPIABgJQAAgBgBAAQAAAAAAgBQgBAAgBAAQAAAAgBAAQgMABgMAVQgCAcgEAFQgDAGgGAAIgCAAQgDAAgCgCg");
	this.shape_28.setTransform(-109.5,37.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F4CF79").s().p("AiEERQjihSjghaIgRgHQiRg7iChDIgtgXQg5ggg1ggIg1giQgugegrgfIgvgiIgCgCIgHgFIABgBIAIAEIAGADIAwAYQG+DeH/DHQEaBuEMh6QFzinFHjFIBQgyIAbgRIAogZIAogaIAAAAIgCAKIgEAfQgDAYgBAYIgEADIgMAHIgiAUIgxAcQh0BCh3A8Qh3A7h7A2QjmBmjzBTQhOAahLAAQhLAAhJgag");
	this.shape_29.setTransform(-10.6,-33.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F9E2B0").s().p("AyALOQhmhYg7jMQg0izgJjlQgIjUAfisQAYiGAng8QAAgQASgGIADgEIACACIAvAiQArAfAuAeIA1AiQA1AgA5AgIAtAXQCCBECRA7IARAHQDgBaDiBSQCTA0Cag0QDzhTDmhmQB7g2B3g8QB3g8B0hCIAxgcIAigUIAMgHIACAaIACgCQgGC2ApDoQAzEaB4FUQmmBKqiBAQq9BCn1AAQh5AAhugEgAj+iLQn/jIm+jeIgwgYIgGgDIADgDQGYBYMpgwQMMgtHOh9QgKAqgGAtIgoAaIgoAZIgbARIhQAyQlHDGlzCnQiNBAiRAAQiCAAiGg0g");
	this.shape_30.setTransform(-5.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.5,-72.2,275.3,144.4);


(lib.Wygenerujklatkipośrednie87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#80664D").s().p("AiWCoIAAAAIgogTQgigPgHgNQgEgGAAgVQAAgTAVg+IAZhBIAAAAQALglAjglQARgTAZgSQAFgDAVgFQASgDAPgBQBIgGAMAGIAAAAQACAAAEAEQACACAHAAIABABQA9AZAgArQASAZAYAyIAAAAQALATARA+QAPA5AAAIQAAAPgIAIQgLAMgfAEIhNALQhAAIgvAAIgBAAQhoAAgrgLgAhgiXQgXAMgSAaIAAAAQgeAhgNAlIgWA9QgVA9AAAPQABAsBrAVQA3ALA7ABQAkAABCgKIBDgLIAAAAQAmgDALgMIAAAAQAGgGAAgQQAAgGgRg3QgSg4gJgVQgNgegfgoIAAAAQgQgZgLgLQgVgUgigGQgvgHghAAQgtAAgYANg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#605039").s().p("AhzCcQhrgVAAgsQAAgQAUg8IAXg9QAMglAeghIAAAAQATgaAXgMQAqgXBrARQAiAGAVAUQALALAQAZIAAAAQAeAoAOAeQAIAVASA4QARA3AAAGQAAAQgFAGIAAAAQgLALgnAEIAAAAIhCALQhCAKglAAQg7gBg3gLg");
	this.shape_1.setTransform(0,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-17.9,47.3,35.8);


(lib.Wygenerujklatkipośrednie86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#593E37").s().p("AgDAAIgCAAIALAAQAAABgGAAg");
	this.shape.setTransform(6.7,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#725149").s().p("AgEAPIgBAAQgFgGgUgDQgMgCgHABIgBgCIAAgDQAAgJAaADQAJABAFACIgDgJIAAgFQAFgDAEgFQACAJACAPQAFAXAYAAQAKAAACgLIAAgLQAAgJgFgQIgCgHIACACQAGAIAIAEIABATQAAAggVAAQgYAAgKgSg");
	this.shape_1.setTransform(1,8.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#442F2B").s().p("AhCA3QgIgJAAgKQAAgIACgHQgFgKgKgZQgSgsgDAAIAAAAQgBAAgBAAQgBABAAAAQgBAAAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgGAAAAgHQgBAAAAgFIAAgDIAEABIABgBQASAIANAKIADAJQAGAIAFAPIAJAWIAAAEQAMgOAbgEQATgDAMAHQAPAHABAQIAAADQAKgDAHAFQADgeApgDQAigBAHAWQACAGABAJQAAAdgPAKQgGADgHABIgIABQgOAAgKgFQgIgEgHgHIgCgDIgEgFQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBgBAAAAIgBgCIgDgCIgGgBQgIAAgBACQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgCAGQgCAHgEAFQgEAEgFAEQgIAFgPAAQggAAgNgPgAgYAEQghAJAAAZQAAAGANAHQAMAGAKAAQARAAAIgTIAEgTQAAgSgQAAQgHAAgIADgABaACIgIABQgNACgKAOIgGAKQACAGAGAHQALANATAAQAOAAAGgQIACgPQAAgXgVAAIgCABgAgWAvQgEgEABgHQABgFACgDIACgBQALgEAHAIIACADIgBAFQgCAHgGADIgGABQgEAAgDgDgABDAsIgDgCQgEgDAAgFIABgEIAEgFQANgFAFAJQADAEgBAFIgHAGg");
	this.shape_2.setTransform(-0.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BC8A7E").s().p("AheBFQgPgdgDgeQgIgHgEgNIgFgbQAAgaATAHIAEACIADgHIAAAAQADAAASArQAKAaAGAKQgCAGAAAIQAAALAHAIQANAQAhAAQAOAAAIgGIAAAFIADAJQgFgCgIgBQgagDAAAKIAAADIABACQAHgBAMACQATACAFAHIABAAQALASAYAAQAVAAAAggIgBgUQAKAFAOAAIAIgBQAIgBAFgEQgOAagMAOQgeAhglAAQhTAAgig/gAAUBNQgCgPgCgJQAEgFACgHIACgFQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABgDAIAAIAGABIADACIABACQABABAAAAQAAABABAAQAAABABAAQAAAAABABIAEAGIACAHQAFAQAAAKIAAALQgCALgKAAQgYAAgGgYgAgnAvQgNgGAAgGQAAgZAhgKQAfgIAAAYIgEATQgIASgQAAQgLAAgMgGgAgPAYIgBABQgCACgCAGQgBAGAEAEQAFAGAIgEQAGgDACgGIAAgFIgBgEQgEgFgHAAIgHACgABCAnQgGgIgBgGIAGgKQAJgOANgBIAIgBQAXgBAAAWIgCAPQgGAQgOAAQgTAAgLgMgABGAWIgEAFIAAAEQAAAEADADIADACIACABIAEABQAGAAAAgCIAGgFQABgGgDgEQgDgGgGAAQgEAAgFADgAAaAPIAAgCQAAgQgPgHQgNgHgTADQgbAEgLANIAAgDIgJgXQgGgOgGgIIgDgKIAHAFIAAgCIAAgCIAHACQABAAAAAAQABAAABAAQAAgBABAAQAAAAAAgBIAAgCIAGACIABgCIAAgBIAEgCQgCgKgGgJIALAGIAAgCQgEgTgLgPQAfgXArABQAxAAAjAcIAIAHIgDAFQgCACAAAEIAAACIAEACIAAAAIACABIAIADQgMAKAAAGQAAABAAABQAAABAAAAQABABAAAAQAAAAAAABIAEABIAGgEIABAAQgBAIAFAHQgCAGAEAHQAIABAHgDIAAAJQAAAMgBAQQgIgWgiACQgpACgDAeQgHgFgKADg");
	this.shape_3.setTransform(-1.1,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C5A0A8").s().p("ABoA1QgEgHACgGQgFgHABgHIgBAAIgGADIgEgBQAAAAAAgBQAAAAgBAAQAAgBAAgBQAAgBAAgBQAAgFAMgLIgIgDIgCgBIAAAAIgEgCIAAgBQAAgEACgCIADgFQAFgGALgGQALgFAGACQAFABADAFIABACIgNAKIABAAIARgKIAGgQIACgBQADAIABAGIABAEQABAQgLAIQgEAHgHAFIABABIACgBQALgGAIADQAJABAEAJIABACQgVAGgUAPIgEADQgEACgFAAIgGgBgAheAcQgNgJgRgJIgCACIgEgBQgOgDgRgCQgCABAAgGQAAgDAFAAQgEgDAJgDQAJgBAIABQgMgMgJgPIACAAIAJADIAJAAIAAAAIACgBQAZADAQAMIgDgIIgCgCQgOgRAAgBIABgFIACgCQAGACAIAJQALAIAIAKQALAPAEASIAAACIgLgGQAGAJACAKIgEACIAAABIgBACIgGgCIAAACQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgHgCIAAACIAAACIgHgFg");
	this.shape_4.setTransform(0,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-13.4,32.8,27);


(lib.Wygenerujklatkipośrednie80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#69FF8F").s().p("AgmAvQgJgGAAgJQAAgFADgDQACgDAFAAQAHAAADAGQAEAJAPAAQALABAMgGQAMgFAAgIQAAgIgIgEQgFgCgPAAQgNAAgKgEQgNgFAAgMQAAgOAPgMQAPgMARAAQAHAAALAEQANAEAAAFQAAADgDADQgDAEgFAAIgKgBIgKgCQgJAAgIAFQgJAEAAAGQAAACADACIAIADIASABQAQAAAJAJQAKAHAAAQQAAATgVAJQgQAIgUAAQgTAAgKgJg");
	this.shape.setTransform(57.2,108.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69FF8F").s().p("AgnA2QgDgCAAgFIABgQIAAgQIAAg6QAAgFADgEQADgEAHAAIASABQAKACAGADQAfAQAAAXQAAAKgGAGQgHAHgNAFQAUALAJALQADADAAAEQAAAEgDADQgDADgEAAQgEAAgEgDQgWgVgZgIIABAXQAAAFgDACQgDADgEAAQgFAAgDgDgAgVACIADAAQASAAAHgDIAHgFQADgDAAgCQAAgIgKgIQgJgHgLgBIgIAAg");
	this.shape_1.setTransform(47.4,108.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#69FF8F").s().p("AghA4QgIgIAAgXIACgcIABgdIgBgIIgBgIQAAgLALAAQADAAADACIAQgDIANgBQASAAALAEQAHADAAAGQAAAEgDADQgDAEgEAAIgDgBQgMgDgLAAIgLABIgNACIgBAdIAcgDIARgBQAFAAADADQADACAAAFQAAAIgKABIgRABIgeADIgBAPQAAAOACACQABABAIAAIANAAIANAAIAFgBIAEAAQAEAAADACQAEADAAAFQAAAIgJACQgHABgWAAQgYAAgHgGg");
	this.shape_2.setTransform(38.1,108.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#69FF8F").s().p("AgmAsIACgYQACgeAAgnQAAgEACgDQADgDAFAAQAEAAADADQADADAAAEQAAAngCAfIgCASQASAAAagIIADgBQAEABADADQADADAAADQAAAHgGACQgJAFgSACQgPADgLAAQgSAAAAgPg");
	this.shape_3.setTransform(29.3,108.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#69FF8F").s().p("AgiA1QgDgDABgEQgBgFADgCQAEgDAEAAIAPgBIgBghQAAgTACgSIgQAAQgEABgEgDQgDgDABgFQgBgDADgDQADgCAEgBIAVgBQANAAAWADQAJACgBAIQAAAFgDADQgCACgEAAIgTgCIgBAiIAAAhIATAAQAFAAADADQACADAAAEQAAAEgDADQgCACgFAAIgMABIgNAAIgNABIgPABQgEAAgEgCg");
	this.shape_4.setTransform(20.9,108.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#69FF8F").s().p("AAlA3QgGAAgFgOQgEgIgDgLIgSABIgQACIgMAYQgDAFgGAAQgEAAgDgCQgDgDAAgEQAAgEAKgVIAAgFQAAgDAHgCIAXgkQARgcAEAAQAIAAADAKIAEAXIALAvIAEAKQACAGAAADQAAAEgDADQgCADgEAAIgBAAgAgFAHIAKgBIAKgBIgFgYIgPAag");
	this.shape_5.setTransform(11.3,108.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#69FF8F").s().p("AgnA2QgDgCAAgFIABgQIAAgQIAAg6QAAgFADgEQADgEAHAAIASABQAKACAGADQAfAQAAAXQAAAKgGAGQgHAHgNAFQAUALAJALQADADAAAEQAAAEgDADQgDADgEAAQgEAAgEgDQgWgVgZgIIABAXQAAAFgDACQgDADgEAAQgFAAgDgDgAgVACIADAAQASAAAHgDIAHgFQADgDAAgCQAAgIgKgIQgJgHgLgBIgIAAg");
	this.shape_6.setTransform(1.4,108.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#69FF8F").s().p("AgGA1QgEgDABgEIAAgDIABgEIgBgKIAAgKIgCgZIgCgbIgEAAQgQAAgKgCQgIgCAAgIQAAgDADgDQADgEAFABIAMABIALABIANgBIANAAIAQABIARABQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgSgBIgRgBIACAeIABAcIAAAIIABAHQAAAFgCAFQgDAFgGAAQgDAAgDgCg");
	this.shape_7.setTransform(-8.7,108.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#69FF8F").s().p("AghA4QgIgIAAgXIACgcIABgdIgBgIIgBgIQAAgLALAAQADAAADACIAQgDIANgBQASAAALAEQAHADAAAGQAAAEgDADQgDAEgEAAIgDgBQgMgDgLAAIgLABIgNACIgBAdIAcgDIARgBQAFAAADADQADACAAAFQAAAIgKABIgRABIgeADIgBAPQAAAOACACQABABAIAAIANAAIANAAIAFgBIAEAAQAEAAADACQAEADAAAFQAAAIgJACQgHABgWAAQgYAAgHgGg");
	this.shape_8.setTransform(-24.9,108.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#69FF8F").s().p("AAoAvIgFgRQgDgNgEgYIgLAeIgEANQgDAIgDAFQgEAHgGAAQgGAAgEgIIgFgOIgKgmIgJAjIgCAQQgDALgIAAQgGAAgCgEQgDgDAAgEQAAgMAFgRIAJgbIADgWQAEgPADgGQAEgFAGAAQAHAAADAHQADAGADAUQADATAHAVQAHgVAIgaIADgQQAFgLAIAAQAIAAAEAMIACASQAFAeAGAXIAHAYQAAAEgDADQgEADgEAAQgHAAgEgMg");
	this.shape_9.setTransform(-36.2,108.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#69FF8F").s().p("AAlA3QgGAAgFgOQgEgIgDgLIgSABIgQACIgMAYQgDAFgGAAQgEAAgDgCQgDgDAAgEQAAgEAKgVIAAgFQAAgDAHgCIAXgkQARgcAEAAQAIAAADAKIAEAXIALAvIAEAKQACAGAAADQAAAEgDADQgCADgEAAIgBAAgAgFAHIAKgBIAKgBIgFgYIgPAag");
	this.shape_10.setTransform(-48.4,108.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#69FF8F").s().p("AgnAyQgJgLAAgUQAAgTAJgSQAJgUAOgMQAKgJALAAQAHAAAMAGQAPAGAAAGQAAAEgDAEQgDADgFAAQgCAAgHgFQgIgEgGAAQgGAAgLAOQgQAVAAAXQAAAMAEAEQADAFALAAQAKAAAJgGQAJgHAEgNQgRABgLAGIgFABQgEAAgDgDQgDgDAAgEQAAgLAZgEQAPgCAUAAQAEAAADADQADACAAAEQAAAFgEADQgFAWgPANQgPANgUAAQgTAAgKgKg");
	this.shape_11.setTransform(-58.7,108.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FD6868").s().p("AgUAaQgKgIAAgPQAAgNAIgLQAJgNARAAQAMAAAIAKQAHAKAAANQAAAOgIAKQgJAMgOAAQgLAAgJgJgAgIgKQgEAGAAAHQAAAIAEAEQAEADAEAAQAFAAAEgDQAFgFAAgIQABgTgMAAIgBAAQgGAAgEAHg");
	this.shape_12.setTransform(24.2,92.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FD6868").s().p("AASAwQgFADgEAAIgJABQgOAAgKgJQgJgJAAgPQAAgRAKgJQAJgLAPAAIAIABQAEABADACIACgeQABgHAHAAQAEAAACACQACADAAADIgBAcIgBAbQAAAWABAIIAAACQAAAEgCACQgDACgDAAQgFAAgCgEgAgMADQgFAFAAALQAAAHAFAFQAFAFAHAAIAHgBIAFgEIADgCIAAgYQgDgEgDgBQgDgCgFAAQgIAAgFAFg");
	this.shape_13.setTransform(16.9,90.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FD6868").s().p("AgUAaQgJgIgBgPQAAgNAIgLQAKgNAQAAQAMAAAIAKQAHAKAAANQAAAOgIAKQgJAMgOAAQgMAAgIgJgAgJgKQgDAGAAAHQAAAIAEAEQAEADAEAAQAFAAAEgDQAFgFAAgIQABgTgMAAIgBAAQgGAAgFAHg");
	this.shape_14.setTransform(4.1,92.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FD6868").s().p("AgRAhQgJgEAAgGQgBgHAIABIAIABIAJACQAMAAAAgFQAAgEgJgDIgQgIQgJgGAAgJQAAgNANgFQAIgCAQAAQAGAAADACQAFACAAAGQgBAMgGgBQgGABgCgGIgEAAQgPgBAAAFQAAADAJADIARAJQAIAHABAIQgBAKgJAHQgJAEgLAAQgIAAgHgDg");
	this.shape_15.setTransform(-2.5,92.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FD6868").s().p("AgFAyQgDgCAAgEIAAhXQAAgEADgCQACgCADAAQAEAAACACQADACAAAEIAABTQAAAMgJAAQgDAAgCgCg");
	this.shape_16.setTransform(-7.5,90.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FD6868").s().p("AAPAeIgKADIgHACQgPAAgHgIQgIgIAAgRQAAgOALgLQALgLAPAAQAGAAAIADQAKAEAAAGQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgBAGIAAAJQAAALACAFIADAHIACAGQAAADgCADQgDACgDAAQgDAAgHgFgAgIgMQgHAHAAAIQAAAJADADQAEAFAGAAQADAAADgBIAHgFIgCgVIAAgFIABgFIgCgCIgCAAQgIAAgGAHg");
	this.shape_17.setTransform(-12.8,92.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FD6868").s().p("AgdAuQgDgCAAgEQAAgEADgCQACgDAEAAIANgBIAAgcQAAgRABgPIgOAAQgDAAgDgDQgDgCAAgEQAAgDADgDQACgCADAAIATgBQALAAAUADQAHABAAAIQAAAEgDACQgCACgDAAIgRgCIgBAeIAAAdIARAAQAEAAACACQADADAAADQAAAEgDADQgDACgDAAIgLAAIgLAAIgMABIgNACQgEAAgCgDg");
	this.shape_18.setTransform(-25.7,90.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#83DAE2").s().p("AghA1QgDgDgBgEQABgFADgCQACgDAGAAIANgBIAAghQAAgTABgSIgPAAQgEAAgDgCQgDgDgBgFQABgEADgCQACgCAEgBIAWgBQAMAAAWAEQAJABAAAJQAAAEgEADQgDACgDAAIgTgCIgBAiIAAAhIAUAAQAEAAADADQACADABAEQAAAEgEADQgDADgDgBIgNABIgMAAIgPABIgOACQgEAAgDgDg");
	this.shape_19.setTransform(4.6,69.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#83DAE2").s().p("AgdAyQgSgPgBgjIABgLIAAgKIAAgJIAAgIQABgGACgFQACgGAFAAQAEgBAEADQADADAAAEIAAAMIAAANIgBAKIAAAKQAAAKADAJQADAMAGAFQADACALAAQATAAAGghQAEgQAAgfQAAgEACgEQAEgEAGAAQAEgBADAEQABADABADQgBAcgCARQgEAYgMAQQgGAHgHAFQgJAGgJgBQgSABgKgHg");
	this.shape_20.setTransform(-4.9,69.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B983E7").s().p("AgmAvQgJgGAAgKQAAgEADgDQACgDAFAAQAHAAADAHQAEAIAPABQALAAAMgGQAMgGAAgGQAAgKgIgDQgFgCgPAAQgNAAgKgEQgNgFAAgMQAAgOAPgMQAPgMARAAQAHAAALAEQANAEAAAFQAAADgDADQgDAEgFAAIgKgBIgKgCQgJAAgIAEQgJAFAAAFQAAADADACIAIADIASAAQAQABAJAIQAKAIAAAQQAAATgVAJQgQAIgUAAQgTAAgKgJg");
	this.shape_21.setTransform(48.1,45.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B983E7").s().p("AgyA4QgDgDAAgEIAAgJIABgIIAAgNIAAgNIAAgNIAAgOIgBgNIgBgNQAAgEAEgEQAEgDAFAAQAFAAAHAJQAgAvAgAdIAAgLIgBgvIgBgIIgBgIQAAgKALAAQAMAAAAAkIAAAMIgBAtIgBALQgBAKgKAAQgFAAgGgGQgcgZgigtIgBAWIABASIAAARQAAAVgLAAQgFAAgDgDg");
	this.shape_22.setTransform(36.9,45.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B983E7").s().p("AgmAtQgQgNAAgVQAAgYAPgVQARgWAaAAQAZAAANALQANAMAAAXQAAAYgPAUQgQAXgaAAQgVAAgPgMgAgXgVQgLAPABARQAAAMAJAHQAJAHANAAQAQAAAKgPQAKgPAAgRQAAgPgGgGQgHgGgRAAQgPAAgMAQg");
	this.shape_23.setTransform(24.9,45.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B983E7").s().p("AghA1QgEgDAAgEQAAgEAEgDQADgDAEAAIAOgBIAAghQAAgTABgSIgPAAQgEAAgDgCQgEgDAAgFQAAgEAEgCQACgCAEgBIAWgBQAMAAAWADQAJACAAAJQgBAEgDADQgDACgDAAIgTgCIgBAiIAAAhIATAAQAFAAADADQADADAAAEQgBAEgDADQgCADgFgBIgMABIgMAAIgPABIgOABQgEAAgDgCg");
	this.shape_24.setTransform(14.8,45.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B983E7").s().p("AgGA1QgDgDgBgEIABgDIAAgEIAAgKIgBgKIgBgZIgCgbIgEAAQgQAAgKgCQgIgCAAgIQAAgDADgDQADgEAFABIAMABIALABIAOgBIALAAIARABIARABQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgSgBIgSgBIACAeIACAcIAAAIIABAHQAAAFgDAFQgDAFgFAAQgDAAgDgCg");
	this.shape_25.setTransform(5.7,45.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B983E7").s().p("AAlA3QgGAAgFgOQgEgIgDgLIgSABIgQACIgMAYQgDAFgGAAQgEAAgDgCQgDgDAAgEQAAgEAKgVIAAgFQAAgDAHgCIAXgkQARgcAEAAQAIAAADAKIAEAXIALAvIAEAKQACAGAAADQAAAEgDADQgCADgEAAIgBAAgAgFAHIAKgBIAKgBIgFgYIgPAag");
	this.shape_26.setTransform(-5.1,45.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B983E7").s().p("AAnAvIgDgRQgEgNgEgYIgLAeIgFANQgCAIgDAFQgEAHgGAAQgHAAgEgIIgDgOIgLgmIgJAjIgDAQQgDALgHAAQgFAAgEgEQgCgDAAgEQAAgMAFgRIAIgbIAFgWQADgPADgGQAFgFAGAAQAGAAADAHQADAGADAUQAEATAGAVQAHgVAHgaIAFgQQADgLAJAAQAHAAAEAMIAEASQAEAeAHAXIAGAYQAAAEgEADQgDADgEAAQgIAAgEgMg");
	this.shape_27.setTransform(-17,45.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B983E7").s().p("AgiA1QgCgDAAgEQAAgEACgDQADgDAFAAIAPgBIgBghQAAgTACgSIgQAAQgFAAgDgCQgCgDAAgFQAAgEACgCQADgCAEgBIAVgBQANAAAWADQAIACAAAJQAAAEgCADQgDACgEAAIgTgCIgBAiIAAAhIATAAQAFAAADADQADADgBAEQAAAEgCADQgEADgEgBIgMABIgNAAIgNABIgPABQgFAAgDgCg");
	this.shape_28.setTransform(-27.8,45.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B983E7").s().p("AgyA4QgDgDAAgEIAAgJIABgIIAAgNIAAgNIAAgNIAAgOIgBgNIgBgNQAAgEAEgEQAEgDAFAAQAFAAAHAJQAgAvAgAdIAAgLIgBgvIgBgIIgBgIQAAgKALAAQAMAAAAAkIAAAMIgBAtIgBALQgBAKgKAAQgFAAgGgGQgcgZgigtIgBAWIABASIAAARQAAAVgLAAQgFAAgDgDg");
	this.shape_29.setTransform(-37.9,45.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B983E7").s().p("AAlA3QgGAAgFgOQgEgIgDgLIgSABIgQACIgMAYQgDAFgGAAQgEAAgDgCQgDgDAAgEQAAgEAKgVIAAgFQAAgDAHgCIAXgkQARgcAEAAQAIAAADAKIAEAXIALAvIAEAKQACAGAAADQAAAEgDADQgCADgEAAIgBAAgAgFAHIAKgBIAKgBIgFgYIgPAag");
	this.shape_30.setTransform(-49.4,45.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#83DAE2").s().p("AgmAvQgJgHAAgIQAAgFADgDQACgDAFAAQAHAAADAGQAEAJAPAAQALABAMgGQAMgFAAgIQAAgIgIgDQgFgDgPAAQgNAAgKgEQgNgFAAgMQAAgOAPgMQAPgMARAAQAHAAALADQANAFAAAFQAAADgDADQgDAEgFAAIgKgCIgKgBQgJAAgIAFQgJAEAAAGQAAACADACIAIADIASABQAQAAAJAJQAKAHAAAPQAAATgVAKQgQAIgUgBQgTABgKgJg");
	this.shape_31.setTransform(51.2,21);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#83DAE2").s().p("AgWA7QgIgCgFgDQgFgBgCgCQgDgDAAgEIAAgWIABgWIAAgXIgBgYQAAgEAEgEQAEgEAEAAQADAAAKAFIANAGQAUAGAPAPQASARAAAUQAAAMgGAMQgGALgLAIQgMAHgVAAIgMgBgAgZAlIAHADIAIABQAPgBAHgEQAGgEAEgHQAEgHAAgIQAAgRgVgNQgGgFgYgJg");
	this.shape_32.setTransform(41,20.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#83DAE2").s().p("AgyA4QgDgDAAgEIAAgJIABgIIAAgNIAAgNIAAgNIAAgOIgBgNIgBgNQAAgEAEgEQAEgDAFAAQAFAAAHAJQAgAvAgAdIAAgLIgBgvIgBgIIgBgIQAAgKALAAQAMAAAAAkIAAAMIgBAtIgBALQgBAKgKAAQgFAAgGgGQgcgZgigtIgBAWIABASIAAARQAAAVgLAAQgFAAgDgDg");
	this.shape_33.setTransform(29.3,20.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#83DAE2").s().p("AgcAyQgUgPABgjIAAgLIABgLIAAgIIAAgIQgBgGADgFQADgHAFAAQADAAAEADQADADAAAEIAAAMIAAAMIgBALIAAAKQAAAKADAKQADALAFAFQAEACAMAAQASAAAGghQADgQAAgfQABgEACgDQADgFAGgBQAGAAACAEQABADAAADQAAAdgCAQQgEAXgMARQgGAHgHAFQgJAFgIAAQgUAAgIgGg");
	this.shape_34.setTransform(17.6,20.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#83DAE2").s().p("AgmAtQgQgNAAgVQAAgYAPgVQARgWAaAAQAZAAANALQANAMAAAXQAAAYgPAUQgQAXgaAAQgVAAgPgMgAgWgVQgLAPAAARQAAAMAJAHQAJAHANAAQAPAAALgPQAKgPAAgRQAAgPgGgGQgHgGgRAAQgPAAgLAQg");
	this.shape_35.setTransform(6.3,20.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#83DAE2").s().p("AgnA2QgDgCAAgFIABgQIAAgQIAAg6QAAgFADgEQADgEAHAAIASABQAKACAGADQAfAQAAAXQAAAKgGAGQgHAHgNAFQAUALAJALQADADAAAEQAAAEgDADQgDADgEAAQgEAAgEgDQgWgVgZgIIABAXQAAAFgDACQgDADgEAAQgFAAgDgDgAgVACIADAAQASAAAHgDIAHgFQADgDAAgCQAAgIgKgIQgJgHgLgBIgIAAg");
	this.shape_36.setTransform(-4.3,20.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#83DAE2").s().p("AgnAyQgJgLAAgUQAAgTAJgSQAJgUAOgMQAKgJALAAQAHAAAMAGQAPAGAAAGQAAAEgDAEQgDADgFAAQgCAAgHgFQgIgEgGAAQgGAAgLAOQgQAVAAAXQAAAMAEAEQADAFALAAQAKAAAJgGQAJgHAEgNQgRABgLAGIgFABQgEAAgDgDQgDgDAAgEQAAgLAZgEQAPgCAUAAQAEAAADADQADACAAAEQAAAFgEADQgFAWgPANQgPANgUAAQgTAAgKgKg");
	this.shape_37.setTransform(-14.1,20.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#83DAE2").s().p("AglA3QgCgEAAgEIABgvIABgxQAAgEADgDQACgDAFAAQAEAAADADQADADAAAEIgBASIgBASIAlgpQADgDAFAAQAEAAADACQADADAAAFQAAAEgRATQgNAOgNAMIAPAPIAQAOIAIAFQAIACAAAHQAAADgCADQgCAEgFAAQgLAAgQgOIgXgVIAAAeIgBAGQgDAEgFAAQgGAAgDgFg");
	this.shape_38.setTransform(-23.6,20.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#83DAE2").s().p("AgfAtQgLgMAAgPQAAgYAVgZQASgWASAAIAGAAIAEABQADgDAFAAQAHAAACAIQACAHgBAIQAAADgCADQgDAEgFAAQgGAAgEgHIgCgEIgGAAQgJAAgLAOQgRATAAASQAAAHAFAGQAGAGAHAAQAGAAAHgEIAMgHQAFgEAEAAQADAAADADQAEADAAAEQgBAEgDAEQgUAQgUAAQgQAAgLgLg");
	this.shape_39.setTransform(-32.9,20.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#83DAE2").s().p("AAlA3QgGAAgFgOQgEgIgDgLIgSABIgQACIgMAYQgDAFgGAAQgEAAgDgCQgDgDAAgEQAAgEAKgVIAAgFQAAgDAHgCQAKgRANgTQARgcAEAAQAIAAADAKIAEAXIALAvIAEAKQACAGAAADQAAAEgDADQgCADgEAAIgBAAgAgFAHIAKgBIAKgBIgFgYIgPAag");
	this.shape_40.setTransform(-43.2,20.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#83DAE2").s().p("AgjA3QgEgEAAgDIAAhNIAAgJIAAgKQABgGAMgCQAGgCAMAAQANAAANAJQAPALAAAPQAAAIgDAGQgDAEgGAFQAHAEAGAGQAGAIAAAHQAAALgLAIQgHAGgHACQgQAHgaAAQgFAAgDgEgAgTAnQANgBANgEQANgDAAgFQAAgFgIgFQgGgDgGAAIgTgBgAgTgWIAAAPIAKAAQAVgCAAgOQAAgFgGgFQgGgFgIAAIgLAAg");
	this.shape_41.setTransform(-53,20.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B983E2").s().p("AgsAxQgCgDAAgDIAAgIIAAgIIABgLIAAgLIAAgLIAAgMIgBgMIgBgLQAAgEADgDQAEgDAEAAQAEAAAGAIQAcApAcAZIAAgJIAAgqIgBgGIgBgHQAAgJAJAAQALAAAAAgIAAAKIgBAnIgBAKQgBAIgIAAQgEAAgGgFQgZgWgdgnIgBAUIABAPIAAAPQAAATgJAAQgFAAgDgDg");
	this.shape_42.setTransform(62.9,-3.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B983E2").s().p("AgiArQgIgJAAgSQAAgQAIgQQAIgRAMgLQAJgHAJAAQAHAAAKAEQANAGAAAFQAAAEgDADQgCACgEAAQgCAAgHgDQgGgEgGAAQgEAAgKAMQgOASAAAUQAAALADAEQADAEAKAAQAIAAAIgGQAIgGADgLQgOABgKAFIgEABQgEAAgDgDQgCgCAAgEQAAgJAWgDQANgCARAAQAEAAACACQADACAAADQAAAFgEACQgEATgNAMQgOALgQAAQgRAAgJgJg");
	this.shape_43.setTransform(53.3,-3.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B983E2").s().p("AgdAuQgDgCAAgEQAAgEADgCQADgDAEAAIAMgBIgBgcQAAgRACgPIgOAAQgEAAgCgDQgDgCAAgEQAAgDACgDQADgCAEAAIASgBQALAAATADQAIABAAAIQAAAEgDACQgCACgEAAIgQgCIgBAeIAAAdIARAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAIgLAAIgLAAIgMABIgMACQgEAAgDgDg");
	this.shape_44.setTransform(45.1,-3.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B983E2").s().p("AghApQgIgGAAgHQAAgEACgDQADgDAEAAQAGAAACAGQAEAIANAAQAKAAAKgFQALgFAAgGQAAgIgHgCQgFgCgNAAQgLAAgJgEQgLgFAAgKQAAgMANgKQANgLAPAAQAGAAAJADQAMAEAAAEQAAAEgDACQgCADgEAAIgJgBIgJgBQgIAAgHAEQgIAEAAAEQAAABAAAAQABABAAABQAAAAABAAQAAABABAAQACACAFAAIAPABQAOABAIAHQAJAHAAANQAAARgSAIQgPAHgRAAQgQAAgJgIg");
	this.shape_45.setTransform(37.1,-2.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B983E2").s().p("AgdAwQgHgGAAgUIACgZIABgZIgBgHIgBgHQAAgJAJAAQADAAADABIAOgCIALgBQAQAAAKADQAGADAAAFQAAAEgDACQgCADgEAAIgDAAQgKgDgKAAIgJABIgMACIAAAZIAYgCIAPgBQAEAAACACQADACAAAEQAAAHgIABIgPABIgbADIAAANQAAAMACACQAAABAIAAIAKAAIAMgBIAEAAIAEAAQADAAADACQADACAAAEQAAAHgHACQgHABgTAAQgVAAgGgGg");
	this.shape_46.setTransform(28.7,-3.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B983E2").s().p("AgTAzQgHgBgEgDQgEAAgDgDQgCgCAAgEIAAgTIABgTIAAgUIgBgVQAAgEADgDQAEgEAEAAIAKAEIAMAFQARAHAOAMQAQAPAAASQAAALgGAJQgFALgKAGQgKAHgTAAIgKgCgAgVAgIAFADIAHAAQAOAAAFgDQAGgEADgGQAEgGAAgHQgBgPgSgMIgZgMg");
	this.shape_47.setTransform(20,-3.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B983E2").s().p("AgiAvQgCgCAAgEIAAgOIAAgOIAAgzQAAgEACgDQAEgEAFAAIAQABQAJABAFADQAcAOAAAUQAAAJgGAFQgGAHgLAEQARAJAIAKQACADAAADQAAADgCADQgDADgEAAQgDAAgDgDQgTgSgWgHIAAAUQAAAEgCACQgDADgDAAQgEAAgDgDgAgTACIADAAQAQAAAGgDIAGgEIADgFQAAgHgJgGQgIgHgJgBIgIAAg");
	this.shape_48.setTransform(5.4,-3.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B983E2").s().p("AgdAwQgHgGAAgUIACgZIABgZIgBgHIgBgHQAAgJAJAAQADAAADABIAOgCIALgBQAQAAAKADQAGADAAAFQAAAEgDACQgCADgEAAIgDAAQgKgDgKAAIgJABIgMACIAAAZIAYgCIAPgBQAEAAACACQADACAAAEQAAAHgIABIgPABIgbADIAAANQAAAMACACQAAABAIAAIAKAAIAMgBIAEAAIAEAAQADAAADACQADACAAAEQAAAHgHACQgHABgTAAQgVAAgGgGg");
	this.shape_49.setTransform(-2.8,-3.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B983E2").s().p("AgFAvQgDgDAAgEIAAgCIABgEIgBgJIAAgIIgCgWIgCgYIgDAAQgOAAgJgBQgGgCAAgHQAAgDACgDQADgDAEAAIAKABIAKABIAMAAIAKAAIAPABIAPAAQAEAAACADQADADAAADQAAADgDADQgCADgEgBIgQAAIgQgBIACAaIACAZIAAAHIABAGQAAAFgDADQgCAGgFAAQgCAAgDgCg");
	this.shape_50.setTransform(-11.6,-3.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B983E2").s().p("AgcAnQgJgKAAgOQAAgUATgWQAPgTAQAAIAGAAIADABQADgDAEAAQAHAAABAHIABANIgBAGQgDADgEAAQgGAAgDgGIgDgEIgFAAQgIAAgKANQgOAQAAAPQAAAHAFAFQAEAFAHAAQAFAAAHgDIAJgHQAFgDADAAQADAAADADQACADAAADQAAAEgDADQgRAOgRAAQgOAAgLgKg");
	this.shape_51.setTransform(-20.1,-3.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B983E2").s().p("AAWAkQgDgHgDgKIgPABIgOACIgLAVQgCAEgFABQgEgBgDgCQgCgCAAgEQAAgDAJgTIgBgEQAAgDAGgBIAUggQAPgYAEAAQAHAAACAIIAEAVIAKApIADAIIACAIQAAAEgCADQgDACgEAAQgFgBgFgLgAgEAGIAIgBIAJgBIgEgUIgNAWg");
	this.shape_52.setTransform(-29.1,-3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B983E2").s().p("AgiAvQgCgCAAgEIAAgOIAAgOIAAgzQAAgEACgDQAEgEAFAAIAQABQAJABAFADQAcAOAAAUQAAAJgGAFQgGAHgLAEQARAJAIAKQACADAAADQAAADgCADQgDADgEAAQgDAAgDgDQgTgSgWgHIAAAUQAAAEgCACQgDADgDAAQgEAAgDgDgAgTACIADAAQAQAAAGgDIAGgEIADgFQAAgHgJgGQgIgHgJgBIgIAAg");
	this.shape_53.setTransform(-37.8,-3.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B983E2").s().p("AAWAkQgDgHgDgKIgPABIgOACIgLAVQgCAEgFABQgEgBgDgCQgCgCAAgEQAAgDAJgTIgBgEQAAgDAGgBIAUggQAPgYAEAAQAHAAACAIIAEAVIAKApIADAIIACAIQAAAEgCADQgDACgEAAQgFgBgFgLgAgEAGIAIgBIAJgBIgEgUIgNAWg");
	this.shape_54.setTransform(-46.9,-3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B983E2").s().p("AAbAxQgDgDAAgEIAAgNIgBgPIAAgGQgJAAgOAEIgYAEIgBAOIgBANQAAAEgDACQgCACgDAAQgFAAgCgCQgDgDABgEIABgSIABgTIAAgXIAAgXQABgEACgDQADgCADAAQAEAAADACQACADAAAEIgBAOIAAAPIAAAGIAAAGIAYgEQANgDAKgBIABgWQABgFADgHQADgIAFAAQADAAACACQAEADAAAEIgBACIgCAIIAAAFIAAAFIgBASIAAARIAAAPIABANQAAAEgDADQgCACgEAAQgDAAgDgCg");
	this.shape_55.setTransform(-56.5,-3.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B983E2").s().p("AgcAnQgJgKAAgOQAAgUATgWQAPgTAQAAIAGAAIADABQADgDAEAAQAHAAABAHIABANIgBAGQgDADgEAAQgGAAgDgGIgDgEIgFAAQgIAAgKANQgOAQAAAPQAAAHAFAFQAEAFAHAAQAFAAAHgDIAJgHQAFgDADAAQADAAADADQACADAAADQAAAEgDADQgRAOgRAAQgOAAgLgKg");
	this.shape_56.setTransform(-65.6,-3.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#83DAE2").s().p("AgmAvQgJgHAAgJQAAgEADgDQACgDAFAAQAHAAADAGQAEAKAPgBQALAAAMgFQAMgGAAgHQAAgJgIgCQgFgCgPgBQgNAAgKgEQgNgGAAgLQAAgOAPgMQAPgLARAAQAHAAALACQANAEAAAGQAAAEgDADQgDADgFAAIgKgCIgKgBQgJAAgIAEQgJAFAAAGQAAACADACIAIACIASABQAQACAJAHQAKAIAAAPQAAAUgVAJQgQAHgUAAQgTAAgKgIg");
	this.shape_57.setTransform(49.8,-27.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#83DAE2").s().p("AgGA1QgEgDABgEIAAgDIABgEIgBgKIAAgKIgCgZIgCgbIgEAAQgQAAgKgCQgIgCAAgIQAAgDADgDQADgEAFABIAMABIALABIANgBIANAAIAQABIARABQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgSgBIgRgBIACAeIABAcIAAAIIABAHQAAAFgCAFQgDAFgGAAQgDAAgDgCg");
	this.shape_58.setTransform(39.6,-28.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#83DAE2").s().p("AghA4QgIgIAAgXIACgcIABgdIgBgIIgBgIQAAgLALAAQADAAADACIAQgDIANgBQASAAALAEQAHADAAAGQAAAEgDADQgDAEgEAAIgDgBQgMgDgLAAIgLABIgNACIgBAdIAcgDIARgBQAFAAADADQADACAAAFQAAAIgKABIgRABIgeADIgBAPQAAAOACACQABABAIAAIANAAIANAAIAFgBIAEAAQAEAAADACQAEADAAAFQAAAIgJACQgHABgWAAQgYAAgHgGg");
	this.shape_59.setTransform(29.8,-28.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#83DAE2").s().p("AgmAvQgJgHAAgJQAAgEADgDQACgDAFAAQAHAAADAGQAEAKAPgBQALAAAMgFQAMgGAAgHQAAgJgIgCQgFgCgPgBQgNAAgKgEQgNgGAAgLQAAgOAPgMQAPgLARAAQAHAAALACQANAEAAAGQAAAEgDADQgDADgFAAIgKgCIgKgBQgJAAgIAEQgJAFAAAGQAAACADACIAIACIASABQAQACAJAHQAKAIAAAPQAAAUgVAJQgQAHgUAAQgTAAgKgIg");
	this.shape_60.setTransform(19.8,-27.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#83DAE2").s().p("AgmAvQgJgHAAgJQAAgEADgDQACgDAFAAQAHAAADAGQAEAKAPgBQALAAAMgFQAMgGAAgHQAAgJgIgCQgFgCgPgBQgNAAgKgEQgNgGAAgLQAAgOAPgMQAPgLARAAQAHAAALACQANAEAAAGQAAAEgDADQgDADgFAAIgKgCIgKgBQgJAAgIAEQgJAFAAAGQAAACADACIAIACIASABQAQACAJAHQAKAIAAAPQAAAUgVAJQgQAHgUAAQgTAAgKgIg");
	this.shape_61.setTransform(9.5,-27.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#83DAE2").s().p("AAlA3QgGAAgFgOQgEgIgDgLIgSABIgQACIgMAYQgDAFgGAAQgEAAgDgCQgDgDAAgEQAAgEAKgVIAAgFQAAgDAHgCIAXgkQARgcAEAAQAIAAADAKIAEAXIALAvIAEAKQACAGAAADQAAAEgDADQgCADgEAAIgBAAgAgFAHIAKgBIAKgBIgFgYIgPAag");
	this.shape_62.setTransform(-1.2,-28.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#83DAE2").s().p("AghA4QgIgIAAgXIACgcIABgdIgBgIIgBgIQAAgLALAAQADAAADACIAQgDIANgBQASAAALAEQAHADAAAGQAAAEgDADQgDAEgEAAIgDgBQgMgDgLAAIgLABIgNACIgBAdIAcgDIARgBQAFAAADADQADACAAAFQAAAIgKABIgRABIgeADIgBAPQAAAOACACQABABAIAAIANAAIANAAIAFgBIAEAAQAEAAADACQAEADAAAFQAAAIgJACQgHABgWAAQgYAAgHgGg");
	this.shape_63.setTransform(-17.5,-28.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#83DAE2").s().p("AAnAvIgDgRQgEgNgEgYIgLAeIgFANQgCAIgDAFQgEAHgGAAQgGAAgFgIIgDgOIgKgmIgJAjIgEAQQgCALgJAAQgEAAgEgEQgCgDAAgEQAAgMAGgRIAIgbIADgWQAEgPAEgGQADgFAHAAQAGAAADAHQADAGAEAUQADATAGAVQAHgVAHgaIAFgQQAEgLAHAAQAIAAAFAMIADASQAEAeAGAXIAHAYQAAAEgEADQgDADgEAAQgHAAgFgMg");
	this.shape_64.setTransform(-28.8,-28.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#83DAE2").s().p("AAlA3QgGAAgFgOQgEgIgDgLIgSABIgQACIgMAYQgDAFgGAAQgEAAgDgCQgDgDAAgEQAAgEAKgVIAAgFQAAgDAHgCIAXgkQARgcAEAAQAIAAADAKIAEAXIALAvIAEAKQACAGAAADQAAAEgDADQgCADgEAAIgBAAgAgFAHIAKgBIAKgBIgFgYIgPAag");
	this.shape_65.setTransform(-41.1,-28.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#83DAE2").s().p("AgnAyQgJgLAAgUQAAgTAJgSQAJgUAOgMQAKgJALAAQAHAAAMAGQAPAGAAAGQAAAEgDAEQgDADgFAAQgCAAgHgFQgIgEgGAAQgGAAgLAOQgQAVAAAXQAAAMAEAEQADAFALAAQAKAAAJgGQAJgHAEgNQgRABgLAGIgFABQgEAAgDgDQgDgDAAgEQAAgLAZgEQAPgCAUAAQAEAAADADQADACAAAEQAAAFgEADQgFAWgPANQgPANgUAAQgTAAgKgKg");
	this.shape_66.setTransform(-51.4,-28.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FD6868").s().p("AgIASQAAgFADgCQADgCADAAQAJAAAAAPQAAADgDADQgCACgEAAQgJAAAAgOgAgFgNQgDgCAAgDIgBgDIAAgCQAAgDADgCQACgDAEAAQAJAAAAANQAAADgDACQgCADgEAAQgDAAgCgDg");
	this.shape_67.setTransform(40.1,-42.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FD6868").s().p("AgRAhQgJgDAAgIQgBgFAIAAIAIABIAJACQAMAAAAgFQAAgDgJgEIgQgIQgJgGAAgJQAAgNANgFQAIgCAQAAQAGAAADACQAFACAAAGQgBALgGAAQgGAAgCgFIgEgBQgPAAAAAFQAAADAJAEIARAIQAIAHABAHQgBAMgJAFQgJAFgLAAQgIAAgHgDg");
	this.shape_68.setTransform(34,-41.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FD6868").s().p("AgVAbQgLgIAAgOQAAgPAJgLQAKgNAOAAQAMAAAGAEQAKAFAAAJQAAAHgIAGIgOAGIgUAKIAHAFQAEABAFAAQAJAAAFgDQAGgDADAAQAHAAAAAGQAAAHgLAFQgJAEgKAAQgOAAgKgIgAgIgOQgEAEgDAHIAPgGIAMgHQgEgCgHAAQgEAAgFAEg");
	this.shape_69.setTransform(27.1,-41.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FD6868").s().p("AASAwQgFADgEAAIgJABQgOAAgKgJQgJgJAAgPQAAgRAKgJQAJgLAPAAIAIABQAEABADACIACgeQABgHAHAAQAEAAACACQACADAAADIgBAcIgBAbQAAAWABAIIAAACQAAAEgCACQgDACgDAAQgFAAgCgEgAgMADQgFAFAAALQAAAHAFAFQAFAFAHAAIAHgBIAFgEIADgCIAAgYQgDgEgDgBQgDgCgFAAQgIAAgFAFg");
	this.shape_70.setTransform(19.6,-43.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FD6868").s().p("AAMAgQgHADgIAAQgJAAgGgEQgIgFAAgIQgDgQAAgLQAAgIACgLQABgHAIAAQADAAACACQAEACAAAEIgBAJIgCAJIABAOIACALIADABIADABQAGAAAIgCIAAgLIAAgKQAAgNABgKQABgHAIAAQAEAAADACQACADAAADIgBAWIAAAMIAAANIAAAEIAAAEQABAEgDACQgDACgEAAQgFAAgDgEg");
	this.shape_71.setTransform(12.5,-41.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FD6868").s().p("AgFAyQgDgCAAgEIAAhXQAAgEADgCQACgCADAAQAEAAACACQADACAAAEIAABTQAAAMgJAAQgDAAgCgCg");
	this.shape_72.setTransform(7.2,-43.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FD6868").s().p("AgTAcQgKgJAAgNQAAgMAJgNQAKgQANAAQAGAAAJAEQALAEgBAGQAAADgCACQgCADgDAAQgDAAgEgDQgEgDgHAAQgFAAgFAKQgGAJABAGQgBAGAFAEQAFAEAHAAQADAAAHgDIAIgEQADAAACADQADACAAADQAAAFgLAFQgKAFgFAAQgOAAgJgIg");
	this.shape_73.setTransform(2.1,-41.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FD6868").s().p("AANAdIgCgNIgBgNIAAgEIAAgHIABgCIAAgCQAAgGgCAAQgGAAgEAHQgGAHgCAKIgBAFIAAAGIgBAGIAAAFQAAAEgDACQgDADgDAAQgEAAgCgDQgDgCAAgEIAAgFIAAgGIAAgRIABgQIAAgGIAAgGQAAgEACgCQADgCAEAAQAIAAABAKIAAAAQAJgIAJgBQAMABAFAJQADAHAAAOIAAAEIgBADIACANIABAMQAAAFgCABQgDADgEAAQgHAAgBgIg");
	this.shape_74.setTransform(-4.5,-41.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FD6868").s().p("AgHAuQgCgCgBgEIAAgLIAAgMIAAgOIABgNQAAgEACgDQADgCAEAAQACAAADACQADADgBAEIAAANIgBAOIAAAMIABALQAAAEgCACQgDADgDAAQgEAAgCgDgAgFgfQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_75.setTransform(-9.6,-43.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FD6868").s().p("AgFAsQgCgCAAgEIAAgGIAAgHIgBggIgMgBQgIgBAAgIQAAgDACgDQADgCADAAIALABIAAgHIAAgGQAAgDACgDQADgDAEABQAIgBAAARIAAAEIAGAAIAKABQAFACAAAGQAAADgCADQgDADgDgBIgDAAIgEAAIgGAAIABAhIABADIAAAEQAAAOgKAAQgCAAgDgCg");
	this.shape_76.setTransform(-20.4,-42.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FD6868").s().p("AAPAeIgKADIgHACQgPAAgHgIQgIgJAAgQQAAgOALgLQALgLAPAAQAGAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgBAGIAAAJQAAALACAGIADAGIACAGQAAADgCADQgDACgDAAQgDAAgHgFgAgIgMQgHAHAAAIQAAAIADAEQAEAFAGAAQADAAADgCIAHgDIgCgWIAAgEIABgHIgCgBIgCAAQgIABgGAGg");
	this.shape_77.setTransform(-27,-41.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FD6868").s().p("AAPAuQgCgEgBgKIgBgOIAAgGIAAgEIAAgGQAAgBAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgHgBgFAGIgIANQAAAWgCAGQgDAEgFAAQgEAAgCgCQgDgCAAgDIABgEIAAgSIABgpIAAgCIAAgKIgBgGIAAgFQAAgEACgDQADgCAEAAQAGAAACAHIABALIAAANIAAANQAEgFAGgCQAEgDAGABQALAAAFAGQADAEABAJIABAQIABAMIACANIAAACQAAADgCACQgDADgEAAQgGAAgCgHg");
	this.shape_78.setTransform(-34.4,-43.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FD6868").s().p("AgFAsQgCgCAAgEIAAgGIAAgHIgBggIgMgBQgIgBAAgIQAAgDACgDQADgCADAAIALABIAAgHIAAgGQAAgDACgDQADgDAEABQAIgBAAARIAAAEIAGAAIAKABQAFACAAAGQAAADgCADQgDADgDgBIgDAAIgEAAIgGAAIABAhIABADIAAAEQAAAOgKAAQgCAAgDgCg");
	this.shape_79.setTransform(-41.3,-42.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFD27").s().p("AgwA8QgLgKAAgKQAAgGADgEQAEgDAGgBQAIABAEAHQAFAMASAAQAPAAAOgHQAQgHAAgIQAAgMgKgEQgHgCgTAAQgQgBgMgFQgRgHAAgOQABgSASgPQATgOAVAAQAJAAANADQARAGAAAGQAAAFgEAEQgDAEgGAAIgNgCIgNgCQgLAAgKAGQgLAFAAAHQAAADAEADQADACAGABIAXABQAUACAMAKQAMAJAAAUQAAAXgaAMQgVAKgZgBQgXABgNgKg");
	this.shape_80.setTransform(26.4,-60);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFD27").s().p("AgpBFQgKgJAAgcIACgkIABglIgBgJIAAgJQAAgOAMgBQAEABADACQALgDAJgBIARgBQAYgBANAGQAJADgBAJQABAEgEAEQgDAEgGAAIgEAAQgPgEgOgBIgNACIgRADIAAAkIAigDIAWgDQAFAAAEAEQAEADAAAGQAAAKgMABIgVACIgmAEIgBATQAAARACACQABACALAAIAQgBIARAAIAFgBIAFAAQAGAAADADQAFAEgBAFQABALgLACQgJABgcABQgeAAgIgJg");
	this.shape_81.setTransform(14.4,-60.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFD27").s().p("AAxA8IgFgXQgEgQgFgeIgOAlIgFARQgEAKgDAHQgFAIgIAAQgIAAgFgKIgFgRQgHgXgGgZIgLArIgDAVQgEANgKAAQgGAAgEgEQgDgEAAgFQAAgOAGgWIAKgiIAGgcQAEgTAEgGQAFgHAHAAQAJAAAEAIQADAIAEAZQAEAXAIAaQAKgaAJgfIAFgWQAFgNAKABQAKgBAFAQQACAGACAQQAFAmAIAbIAIAgQAAAFgEAEQgEACgFAAQgKABgFgOg");
	this.shape_82.setTransform(0.2,-60.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFD27").s().p("AAuBEQgHAAgIgQQgEgLgEgOIgWACIgUACIgPAeQgEAHgHAAQgFAAgEgEQgEgDAAgFQAAgFANgbIgBgFQAAgEAJgDQANgVAQgYQAVgjAGAAQAKAAADAMIAFAeIAOA7IAFAMQADAHAAAEQAAAGgEADQgDAEgFAAIgBgBgAgHAIIAMgBIANgBIgGgeIgTAgg");
	this.shape_83.setTransform(-15,-60.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFD27").s().p("AgxA+QgMgNAAgaQAAgXAMgXQALgZASgPQANgLANAAQAJAAAPAHQASAHAAAJQAAAFgDAEQgEAEgGAAQgCAAgKgGQgJgFgIAAQgHAAgOASQgUAaAAAcQAAAQAEAFQAFAGAOAAQANAAAKgIQALgIAGgQQgVABgPAHIgGABQgFAAgEgEQgDgDAAgFQAAgOAfgFQATgDAZAAQAFAAAEAEQAEADAAAFQAAAGgGAEQgGAbgTAQQgTARgYAAQgZAAgMgNg");
	this.shape_84.setTransform(-27.9,-60.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF7F31").s().p("AgYAhQgCgCAAgEIAAgpIAAgFIAAgGQAAgEACgCQACgDAEAAQAHAAABAIQALgJANAAQANAAAAARIAAAEQgBAKgIAAQgIAAAAgIIAAgHQgNADgHAMIAAAfQAAAEgCACQgDADgDAAQgEAAgCgDg");
	this.shape_85.setTransform(19.8,-77);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF7F31").s().p("AgUAaQgKgIAAgPQAAgNAIgLQAKgNAQAAQANAAAHAKQAHAKAAANQAAAOgIAKQgJAMgOAAQgMAAgIgJgAgIgKQgEAGAAAHQAAAHAEAFQAEADAEAAQAFAAAEgEQAFgEAAgHQABgUgMAAIgBAAQgGAAgEAHg");
	this.shape_86.setTransform(13,-76.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF7F31").s().p("AgLA2QgDgDAAgDIAAgCIACgRIAAgeIgEAAIgEABQgEAAgCgDQgDgCAAgEQAAgGAGgBIALgCIABgHQACgOAGgHQAGgJAQAAQALAAAAAJQAAAIgLAAQgHAAgEAFQgCAEgBAJIgBACIANgBQAMAAAAAIQAAAJgNgBIgMAAIAAARIAAARQAAAMgCAGQgBAHgGAAQgEAAgCgCg");
	this.shape_87.setTransform(6.3,-78.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF7F31").s().p("AASAwQgFADgEAAIgJABQgOAAgKgJQgJgJAAgPQAAgRAKgJQAJgLAPAAIAIABQAEABADACIACgeQABgHAHAAQAEAAACACQACADAAADIgBAcIgBAbQAAAWABAIIAAACQAAAEgCACQgDACgDAAQgFAAgCgEgAgMADQgFAFAAALQAAAHAFAFQAFAFAHAAIAHgBIAFgEIADgCIAAgYQgDgEgDgBQgDgCgFAAQgIAAgFAFg");
	this.shape_88.setTransform(-6.5,-78.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF7F31").s().p("AANAdIgCgNIgBgNIAAgEIAAgGIABgCIAAgEQAAgFgCAAQgGAAgEAHQgGAHgCAKIgBAFIAAAHIgBAFIAAAFQAAAEgDADQgDACgDAAQgEAAgCgCQgDgDAAgEIAAgFIAAgFIAAgSIABgQIAAgGIAAgFQAAgFACgCQADgCAEAAQAIAAABAKIAAABQAJgKAJABQAMgBAFAKQADAHAAANIAAAFIgBADIACANIABAMQAAAFgCACQgDACgEAAQgHAAgBgIg");
	this.shape_89.setTransform(-13.5,-77.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF7F31").s().p("AAPAdIgKAFIgHABQgPAAgHgIQgIgIAAgRQAAgOALgLQALgLAPAAQAGAAAIADQAKAFAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgBAHIAAAIQAAALACAGIADAGIACAGQAAAEgCACQgDACgDAAQgDAAgHgGgAgIgMQgHAHAAAHQAAAJADAFQAEAEAGAAQADAAADgCIAHgDIgCgWIAAgEIABgGIgCgBIgCAAQgIAAgGAGg");
	this.shape_90.setTransform(-20.7,-77);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF7F31").s().p("AANAeIgCgOIgBgNIABgFIAAgFIAAgDIAAgDQAAgFgDAAQgFAAgFAHQgEAHgEAKIAAAGIgBAFIAAAGIgBAGQABADgDACQgDADgDAAQgEAAgDgDQgCgCAAgDIgBgGIAAgGIABgRIABgQIAAgGIgBgGQAAgDAEgCQACgDADAAQAJAAAAAKIAAABQAKgJAJAAQAMAAAFAKQADAGAAAOIAAAEIAAADIABANIACANQgBADgCACQgDADgDAAQgIAAgBgHg");
	this.shape_91.setTransform(33.8,-92.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF7F31").s().p("AAMAgQgHADgIAAQgJAAgGgEQgIgFAAgIQgDgQAAgLQAAgIACgLQABgHAIAAQADAAACACQAEACAAAEIgBAJIgCAJIABAOIACALIADABIADABQAGAAAIgCIAAgLIAAgKQAAgNABgKQABgHAIAAQAEAAADACQACADAAADIgCAWIABAMIAAANIAAAEIAAAEQABAEgDACQgDACgEAAQgFAAgDgEg");
	this.shape_92.setTransform(26.9,-92.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF7F31").s().p("AgLA2QgDgCAAgEIAAgBIACgRIAAggIgEABIgEAAQgEAAgCgCQgDgCAAgEQAAgGAGgBIALgCIABgHQACgOAGgHQAGgJAQAAQALAAAAAIQAAAJgLAAQgHAAgEAGQgCADgBAJIgBABIANAAQAMAAAAAIQAAAIgNAAIgMAAIAAARIAAARQAAALgCAHQgBAHgGAAQgEAAgCgCg");
	this.shape_93.setTransform(20.1,-94);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF7F31").s().p("AgYAhQgCgCAAgEIAAgpIAAgFIAAgGQAAgEACgCQACgDAEAAQAHAAABAIQALgJANAAQANAAAAARIAAAEQgBAKgIAAQgIAAAAgIIAAgHQgNADgHAMIAAAfQAAAEgCACQgDADgDAAQgEAAgCgDg");
	this.shape_94.setTransform(8.2,-92.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF7F31").s().p("AgUAaQgJgIgBgPQAAgNAIgLQAJgNARAAQAMAAAIAKQAHAKAAANQAAAOgIAKQgJAMgOAAQgMAAgIgJgAgIgKQgEAGAAAHQAAAIAEAEQADADAFAAQAEAAAFgDQAEgFABgIQABgTgMAAIgBAAQgGAAgEAHg");
	this.shape_95.setTransform(1.5,-92.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF7F31").s().p("AgLA2QgDgCAAgEIAAgBIACgRIAAggIgEABIgEAAQgEAAgCgCQgDgCAAgEQAAgGAGgBIALgCIABgHQACgOAGgHQAGgJAQAAQALAAAAAIQAAAJgLAAQgHAAgEAGQgCADgBAJIgBABIANAAQAMAAAAAIQAAAIgNAAIgMAAIAAARIAAARQAAALgCAHQgBAHgGAAQgEAAgCgCg");
	this.shape_96.setTransform(-5.3,-94);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF7F31").s().p("AgFAsQgCgCAAgDIAAgHIAAgHIgBggIgMgBQgIgBAAgIQAAgDACgCQADgDADAAIALABIAAgHIAAgGQAAgEACgCQADgCAEgBQAIABAAAPIAAAGIAGgBIAKABQAFACAAAGQAAADgCADQgDACgDAAIgDAAIgEAAIgGAAIABAhIABAEIAAADQAAAPgKAAQgCgBgDgCg");
	this.shape_97.setTransform(-17.2,-93.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF7F31").s().p("AgRAhQgKgEAAgGQAAgHAIABIAIABIAJACQAMAAAAgFQAAgEgJgDIgQgIQgJgGAAgJQAAgNANgFQAJgCAPAAQAGAAAEACQADACAAAGQAAAMgFgBQgHABgBgGIgGAAQgOgBAAAFQAAADAJADIAQAJQAJAHAAAIQAAAKgKAHQgHAEgMAAQgIAAgHgDg");
	this.shape_98.setTransform(-23.5,-92.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF7F31").s().p("AAMAgQgIADgHAAQgJAAgHgEQgGgFgBgIQgDgQAAgLQAAgIACgLQABgHAHAAQAEAAACACQADACAAAEIgBAJIgBAJIABAOIACALIADABIADABQAGAAAJgCIAAgLIgBgKQAAgNABgKQACgHAHAAQAEAAADACQACADAAADIgBAWIAAAMIAAANIAAAEIABAEQgBAEgCACQgDACgDAAQgGAAgDgEg");
	this.shape_99.setTransform(-30,-92.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF7F31").s().p("AgWAtIgBgEQAAgDACgDQADgCAEAAQAEgBADAFIAEAIQADAFACgBQAEAAAAgJIgCgjIgCghQAAgEACgDQACgDAFAAQACAAAEACQADACAAADIACAiIACAmQAAAJgGAIQgHAJgJgBQgPABgJgWgAACgyQgCgCAAgEQAAgEACgDQADgCAEAAQAEAAAEACQACADAAAEQAAAEgCACQgEAEgEAAQgEAAgDgEg");
	this.shape_100.setTransform(-36.6,-92.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFD27").s().p("AgIBCQgEgDAAgGIAAgDIABgEIgBgNIAAgNIgCggIgDghIgFAAQgUAAgMgDQgKgCAAgKQAAgEADgEQAEgEAGAAIAPACIAOABIARgBIAQAAIAUABIAVABQAGAAADAEQAEADAAAFQAAAGgEADQgDAEgGAAIgWgBIgWgBIACAlIACAkIABAJIABAJQAAAHgDAFQgEAHgHAAQgEAAgEgDg");
	this.shape_101.setTransform(28.5,-116.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFD27").s().p("AgxBEQgDgEAAgFIAAgUIAAgVIAAhIQAAgGAEgFQAEgGAIABIAXABQANACAHAEQAoAUAAAdQgBAMgHAIQgJAJgQAGQAYAOAMAOQADADAAAFQAAAFgEAEQgEADgEAAQgFAAgEgDQgcgagggKIABAdQAAAFgEAEQgDADgGAAQgFAAgEgDgAgcADIAFAAQAWAAAJgFQAFgCAEgEQAEgEAAgCQAAgKgNgKQgLgJgOgBIgLgBg");
	this.shape_102.setTransform(16.2,-116.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFD27").s().p("AAuBEQgHAAgIgQQgEgLgEgOIgVACIgWACIgOAeQgEAHgHAAQgFAAgEgEQgEgDAAgFQAAgFANgbIgBgFQAAgEAJgDQANgVAPgYQAWgjAGAAQAJAAAEAMIAGAeIANA7IAFAMQADAHAAAEQAAAGgEADQgEAEgEAAIgBgBgAgGAIIALgBIANgBIgGgeIgSAgg");
	this.shape_103.setTransform(3.2,-115.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFD27").s().p("AgcBJQgKgCgGgEQgFAAgEgDQgEgEAAgFIABgbIABgcIAAgdIgBgeQAAgFAFgFQAFgFAFAAQADAAAMAFQAOAHADABQAaAJATASQAWAVAAAZQAAAQgIAOQgHAPgOAIQgPAKgaAAQgHAAgJgCgAgfAuQAEADAEABIALABQASAAAJgGQAIgFAFgJQAEgJAAgJQAAgWgagQQgIgGgdgMg");
	this.shape_104.setTransform(-18,-115.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFD27").s().p("AgeBFIgDAAQgIAAgDgHQgBgEAAgIQAAgRAHgMQAGgJANgIIAXgQQAPgKAAgOQAAgDgGgDQgGgDgFgBQgJAAgLAJQgKAIgEAAQgFABgEgDQgEgDAAgFQAAgGAEgDQALgKAIgFQAMgGAMAAQAQAAAMAIQAPAKAAAPQAAAPgHALQgGAJgMAHIgWAOQgRAMgBAOIAOgCIAbgBQAIABAIADQAJAEAAAHQAAAEgDAEQgEADgFAAIgHAAIgHgBIgaAAIgKABIgLABIgDgBg");
	this.shape_105.setTransform(-30.7,-116.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#4F2834").s().p("AmeS8ImGAzMgAygnYIatiBMgB4Ap+Iv7hYIAUCwg");
	this.shape_106.setTransform(3.9,0);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#EF703A").s().p("Al0TJIl/AtMgBsgmgIBOhLIZwhkMgA7ApeIgwANIwIhEIBOCMg");
	this.shape_107.setTransform(-3,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.3,-138.7,178.7,277.5);


(lib.Wygenerujklatkipośrednie79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#743391").s().p("AAbEKQgDgEAAgDQAAgDADgCQACgCADAAQADAAADAEQADADAAADQAAADgCADQgDABgCAAQgEAAgDgDgAgfEMQgDgCAAgEQAAgEACgEQADgEAFAAQAEAAADADQABACAAAEQAAADgCAEQgCADgFAAQgDAAgDgBgAAcD2QgCgCAAgDIAAgHIAAgHIAAgYIAAgZQAAgCACgDQACgCAEAAQADAAACACQACADAAACIAAA/QAAADgCACQgCACgDAAQgEAAgCgCgAgbDyQgDgCAAgDQAAgEAHgHIAPgKQAHgFAAgFQAAgFgFgFQgGgFgGAAQgDAAgFAEQgGAEgCgBQgEABgCgDQgCgCgBgEQAAgGAKgFQAKgDAFAAQANAAAJAJQALAJgBAMQAAANgMAIIgIAHIgKAIQgCADgEAAQgDAAgCgDgAi6B7QgHgCgDgCQgEAAgDgDQgCgCAAgDIABgRIAAgSIAAgUIAAgTQAAgDADgDQADgEADAAIAKAEIALAFQARAFANAMQAOAOAAARQAAAKgFAJQgFAJgJAGQgKAGgRAAIgKgBgAi8BqIAFACIAHAAQAMABAGgEQAFgDADgGQADgGAAgGQAAgOgQgLQgGgDgTgJgAApB5QgCgDAAgDIABgIIAAgHIAAgKIAAgKIAAgLIAAgLIgBgLIAAgLQAAgDADgCQADgEAEAAQAEAAAFAIQAbAmAaAYIAAgJIgBgnIgBgGIAAgHQAAgHAJgBQAJAAAAAeIAAAJIAAAlIgBAKQgBAHgIAAQgEAAgFgFQgWgUgdgkIgBASIABAOIAAAOQAAARgJAAQgDAAgEgCgACOBzQgIgJAAgRQAAgPAHgPQAIgQALgJQAJgIAJAAQAFAAAKAFQAMAFAAAFQgBADgCACQgCADgDAAIgIgDQgHgDgEAAQgGAAgJALQgMARAAASQAAALACADQADADAJAAQAJABAHgGQAHgFADgKQgNABgLAEIgDABQgEAAgCgDQgCgCAAgDQAAgJAVgEQAMgBAQAAQADgBADADQACACAAAEQAAAEgEACQgDARgNALQgMALgQAAQgPgBgIgHgAhuBwQgNgLAAgQQAAgVAMgQQAOgSAWgBQAUAAALAKQAKAJAAAUQAAATgMARQgNASgVAAQgSAAgMgKgAhhA7QgKALABAPQAAAJAHAGQAIAGALAAQANAAAIgMQAIgMAAgOQAAgNgGgFQgFgEgNgBQgNABgJANgAgaB2QgCgCAAgDQAAgEACgCQADgDAEABIALgBIAAgaIABgfIgNAAQgDAAgDgCQgCgDAAgCQAAgEACgCQACgCADAAIARgBQALAAARADQAHAAAAAIQAAADgDACIgFACIgPgCIgBAeIAAAaIAQAAQADAAACACQADACAAADQAAADgDADQgBACgFAAIgKAAIgKAAIgKABIgMACQgDgBgDgCgAA+gdQgQgMAAgeIAAgIIAAgIIABgHIAAgGQAAgFABgEQADgGAEAAQADAAADADQADABAAAEIAAAKIgBAKIAAAIIAAAIQAAAKABAHQADAJAFAEQADABAIABQAQAAAFgaQAEgOAAgaIABgFQADgFAFAAQADAAACAEQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAXgCANQgDAUgKAOQgEAFgGAEQgHAFgJgBQgPABgGgGgAhrgaQgCgCAAgDQAAgDAMgVIgOgUIgSgeIgBgEQAAgDADgDQACgCADAAQAEAAADAFIAEAGIALARIALARIAMgbIAGgMQACgGAFAAQADAAADACQADADAAADIgEAJIgMAbIgNAbIgKASQgDAEgFAAQgCAAgDgCgAglgiQgNgLAAgRQAAgTANgRQANgTAWAAQATAAALAKQAKAJAAATQgBAUgLAQQgNATgUAAQgSAAgMgKgAgZhYQgJAMAAAOQABAKAHAGQAIAGALAAQALAAAJgNQAIgLAAgPQAAgMgFgFQgGgEgMAAQgNgBgKANgAEViuQgHgGAAgTIABgXIABgXIgBgHIAAgGQAAgIAJgBQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAIANgDIALgBQAQABAIADQAGACgBAFQAAAEgCABQgCADgEAAIgCAAQgJgCgKgBIgJABIgKACIgBAYIAXgDIAOgBQAEAAACADQACACABADQgBAHgHABIgOABIgZADIAAALQAAAMABABQABACAGAAIALgBIALAAIADgBIAEAAQAEAAABACQAEACAAAEQAAAHgIABQgFABgTAAQgTABgFgGgAkJirQgDgCAAgEIgEgLIgHglIgIAVIgJAXIABACQAAADgDADQgEACgCAAQgFAAgDgCQgDgCAAgFIgCgHIgGgbIgNgnIgBgDQAAgEADgCQADgCADAAQAEAAADAEIADAHQAGARAIAfIAJgbIAGgSQAGgNAGABQAGAAADAGQABADABAIIABALIAIAlIARgpIACgMIAFgKQADgEAFAAQADAAACACQADADAAADIgDAGIgCAGIgDAKIgKAaIgLAZIgEAKQgDAEgGAAQgEAAgCgCgAiOiuQgDgDAAgDIAAgMIgBgNIAAgGIgXADIgWAEIgBANIgBAMQAAADgCACQgCACgEAAQgDAAgCgCQgCgDAAgDIABgRIABgRIAAgWIABgWQAAgDABgCQADgCAEAAQADAAACACQADACAAADIgBAOIAAANIgBAFIAAAHIAWgFIAXgCIABgWQAAgEADgHQADgGAEAAQADAAACACQADACAAADIAAACIgBAHIgBAFIAAAGIgBAQIAAAQIAAAOIABAMQAAADgCADQgDACgCAAQgEAAgCgCgADDiuQgCgDAAgEIAAgMIAAgOIAAgvQAAgEADgDQADgEAFABIAOABQAIABAHACQAZANgBATQABAIgGAFQgFAGgLAEQAQAJAIAJQACACAAADQAAAEgCACQgDACgEAAQgCAAgEgDQgRgQgWgGIABASQABAEgDADQgDACgDAAQgEAAgCgCgADRjZIACAAQAPAAAHgDIAFgFIADgDQAAgHgIgGQgJgGgIAAIgHgBgACji3IgFgQIgOAAIgPACIgJATQgCAFgFAAQgDAAgCgCQgDgDAAgDQAAgDAIgRIgBgEQABgDAFgBQAJgPAKgPQAOgWAEAAQAGAAACAIIAEASIAJAnIADAIIACAHQAAAEgCACQgDACgDABQgFgBgFgKgACKjTIAIgCIAJAAIgEgUIgNAWgAg7i3IgFgQIgPAAIgOACIgJATQgCAFgFAAQgDAAgDgCQgCgDAAgDQgBgDAJgRIgBgEQAAgDAGgBQAIgPAKgPQAPgWADAAQAHAAACAIIAEASIAJAnIADAIIABAHQABAEgDACQgDACgDABQgFgBgEgKgAhUjTIAIgCIAIAAIgDgUIgNAWgAABiwQgCgCAAgEIAAgCIABgDIgBgIIAAgIIgCgWIgBgUIgDAAQgNAAgIgCQgGgCAAgGQAAgEABgCQADgCAEAAIAKABIAJAAIAJAAIALAAIAOABIANAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgOAAIgPgBIACAYIABAXIAAAHIABAFQAAAFgCADQgCAFgEAAQgEAAgCgCg");
	this.shape.setTransform(1.1,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C7DF84").s().p("ApDJMQjwi0AAj/QAAj+Dwi0IBDgqIBDgqIAimSIECE8QBKgKBPAAQFTAADxC0QDwC0AAD+QAAD/jwC0QjxC0lTAAQlTAAjwi0g");
	this.shape_1.setTransform(0.3,-0.6,0.662,0.752,0,0,0,0,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A7C433").s().p("ApDJrQjwi1AAj+QAAj+Dwi1QAIgEA3gZQA4gYAGgFIBTnpIDaF5QBKgJBPgBQFTABDxCzQDwC1AAD+QAAD+jwC1QjxCzlTABQlTgBjwizg");
	this.shape_2.setTransform(-2.4,4.1,0.662,0.752,0,0,0,-0.1,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.7,-60,111.3,120.1);


(lib.Wygenerujklatkipośrednie76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BC8A7E").s().p("AgqAiQAAgMADgJIAAgDIAAgKQAAgFACgBIAAAAQAAgEAMABIAFgOIAAgDIACgHQgCgCAAgDQAAgGAGgCIACgBQAKgXAMAAIAFABIACADIgOAcQgBADAAARIABAJIABAAQAFgDAJAEIAHAEQAGACADACQAEACACADQAEAFgCAGIAAALQgCAIgIACQgCADgHAAQgGAAgCgDIAAgEQACgDAGgBIgBgCIgHgFIAAABQgHgCgBAGQgDAQgCACQgCAFgLAKQgJAHgGAEQgQgRAAgUgAgfAAIAAgBIAAAAgAgYgEIABABIAAgCIgBABg");
	this.shape.setTransform(0,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#725149").s().p("AgcBPIgFABQgMAAgEgWIgCgWQgBgTAGgNQAFgMAJgCIAAgCQABghAdgZQALgKAJABQAKABAAAOQgBAMgGASQgFAMgDAMQAGAAAKABQAXADAAAZQAAAPgBADQgDANgRAAQgLAAgCgEIAAAAQgEAHgHAJQgNASgQAAIgGgBgAglgEIAAABQgCABAAAEIAAALIAAADQgCAJAAALQgBAVAQARQAHgEAIgIQALgJADgFQABgDADgQQABgGAHACIAAAAIAHAEIABACQgGABgCADIAAAEQADAEAFAAQAHAAACgEQAIgCACgHIAAgMQACgFgEgFQgCgDgEgCQgDgDgGgCIgGgDQgKgEgFADIgBAAIAAgKQAAgQAAgDIAPgdIgDgDIgFgBQgMAAgKAYIgCAAQgGADAAAFQAAADACADIgCAHIAAACIgEAOIgDAAQgKAAAAADgAgfABIAAAAIAAAAgAgYgBIABgBIAAABIgBAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-8,10.5,16.1);


(lib.Wygenerujklatkipośrednie74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#392428").s().p("AigDtIAAgBIgogTQgigOgIgNQgDgGAAgVQgBgTAWg+IAZhCIAAAAQALglAjglQARgSAZgSQAFgEAUgEQATgDAPgBIAFgBQgDgFgDgIIgEgbQgBgaAUAHIAEACIADgHQgBAAgBAAQgBAAAAAAQgBABAAAAQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgGAAAAgHQgBgBAAgFIAAgDQgOgDgSgBQgBABAAgGQAAgEAFAAQgEgDAJgDQAJgBAIABQgMgMgJgPIACAAIAJADIAJAAIAAAAIABgBQAaADAQAMIgEgIIgBgCQgOgRAAgBIABgFIACgCQAGACAIAJQALAIAHAKQAegXAtABQAxAAAjAcIAIAHQAFgGALgGQALgGAFADQAGAAADAGIABACIgNAJIABABIAQgKIAGgQIACgBQAEAIABAGIABAEQABAQgLAJQgEAHgHAEIAAACIADgBQALgGAIADQAIABAFAJIAAACQgUAGgUAPIgEACIAAAJQAAANgCAQQACAHABAIQAAAdgPAKQgOAagMAOIgFAFQAMATAOAdIAAAAQAKATARA/QAQA5AAAIQAAAOgIAIQgMANgeAEIhNALQhAAIgvAAIgBAAQhpAAgqgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,-24.7,49.3,49.6);


(lib.Wygenerujklatkipośrednie57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#422624").s().p("AANH0IhogFIgDAAIhSgCIgogBIAAgfQgCgFABgIIABgKIAAgFIAAAAIAAAAIAAAAIAAgBQAGjjAKjkIADAAIAAgCIABgEIAAg0IAAAAQAIiRgBiQIAAiEIANAAIACAAIACAAIAEAAIgBAUQgCAcgCAHIABASIgBAPIAAAJIAAAEQADB+gGB/IgDA0IgBASIgCAIIAAAUIgBADQgNDpgIDnIAAAQIAAABIgBAAIABASIACANIAAACIAaAAIBVACIAEAAIAMAAIAEAAIAAAAIAoACIAVAAIAAACIAXABIBMADIgLAaIhBgDgAAyG8QAahBAehEQAbhFAUg9QAahUALhGIABgKIgmgHIiMgWIgsgHIgxgHQgZgBgQgFIgIgBIgDABIAAgBIAAgCIAAgBIABgPIABAAIABAAIADAAIADAAIAgADIAEAAIAMABIAEAAIAAACIAWABIASACIAAACIAIABIAkAFIAGAAQBAAJBGALIA9AJQgCAFAAAFQgOBggtB7QgMAfgOAgIhCCdIgLAAgADEgrQABhzgshPQguhRhegqQgVgKgXgIQgcgJgggGIgDAAIAAgCIgRgBIAAgBIAAgQIAAgEIAAgCIAAgFIAAgBIAEABIAIABIAFAAIADAAIAFABIACAAIADABIAAACQAaAFAYAHQAXAGAVAIQAcALAYAOQA1AfAjAsQBKBfgJCfIgWgEg");
	this.shape.setTransform(-3.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#643E35").s().p("AA0HqIhLgDIgYgBIAAgCIgVAAIgogCIAAAAIgEAAIgMAAIgEAAIhVgCIgaAAIAAgCIgCgNIgBgSIABAAIAAgBIAAgQQAIjnANjpIABgDIAAgUIACgIIABgSIADg0QAGh/gDh+IAAgEIAAgJIABgPIgBgSQACgHACgcIABgUQAngBAmABIAQAAIAEAAIAAABIAjADIAFADQALADARACIARAEQBRATA6AvQAXASATAXQBsB/geDvQgWCIhLCyIgXA1Ig1B7IgLAAgAipgXIAAABIAAACIAAABQgTDrgMDoIBIADIAQAAIAEABIAAAAIA9ACIAAABIAYABIAkABIALAAIBCidQAOggAMgfQAth7AOhgQAAgFACgGIg9gIQhGgLg/gJIgGAAIglgFIgIgBIAAgCIgSgCIgWgBIAAgCIgEAAIgMgBIgEAAIgggDIgDAAIgDAAIgBAAIgBAAIgBAPgAiUmbIAAAFIAAACIAAAEIAAAQIAAABQgECdgOCgIAmACIAQAAIAEABIAAABIAjADQAMACAOAAIAAABIAYADQBCAHBJAKIArAGIAWAEQAJifhKhfQgjgsg1gfQgYgOgbgLQgWgIgXgGQgYgHgagFIAAgCIgDgBIgCAAIgFgBIgDAAIgFAAIAAgBIgIAAIgEgBg");
	this.shape_1.setTransform(0.6,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.9,-50.3,49.8,100.7);


(lib.Wygenerujklatkipośrednie53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#422624").s().p("AEYHNIhSgCIg1gCIAAgBIgWgBIgfAAIAAgBIgJAAIhBgCIhjgDIhTihQhXilgUh+QgjixBQh3Qg0BzAeCbQAWB+BWCmQAqBTAqBPIBKABIBBACIAJAAIAAABIAcABIAAABIADAAIAcABIAvABIBVABIAAAbIgDAAgACeGOIAAAAQAGjsAKjtIgdAAIAAgBIgWgBIgoAAIhBgBQhtABh3AEIAAgHQB4gJBsgBIBBAAIAJAAIAcAAIAAABIAfAAIAoABQgOD1gHDyIgMgBgACyhzQAJiggCifIgPABIAAACIgCAAIgDABIgqAHIgoAJQgiAHgfALQhNAbg5ApQA1gyBRghQAegMAjgLIAHgCIAhgJIAEgBIADgBQAIgGAHABIAAgDIAZgCIAFgBIAXgCIADAAIAAAGIAAAOIAAAFQADB9gGB/IgEBEIgQAAg");
	this.shape.setTransform(0,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#643E35").s().p("AC6HkIgugBIgdAAIgDAAIAAgBIgbgBIAAgBIgKAAIhBgCIhKgCQgqhOgqhTQhVimgWh/QgeiaA0hzQATgqAeglQBIhYB6gnQAPgEBPgOQBMgNAKgBQAdAAAsACQgzMMgICbIBHADIAAAfIhVgCgAAGgmQhsABh3AIIAAAIQAAAcAGAiQATBxBMCTIBLCQIAzAAIBBACIAoABIAAABIAOAAIAAABIAPABIASAAIAAAAQAIjyAOj1IgogBIgggBIAAAAIgbgBIgKAAIgVAAIgsABgAB2mMIgDACIgEABIghAJIgHACQgiAKgfANQhRAhg0AyQheBZgBCOQB4gLBsgEIBBgDIAKAAIAAgBIAeAAIAIAAIAVAAIAKAAIARAAIAPAAIAEhDQAHh/gDh9IAAgFIAAgOIgBgGIgDAAIgWABIgFABIgaADIAAADIgCgBQgGAAgHAFg");
	this.shape_1.setTransform(1.2,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.2,-49.9,56.6,99.9);


(lib.Wygenerujklatkipośrednie43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D56F79").s().p("Ak9AiIJ4hVIAEArIp8A8g");
	this.shape.setTransform(0,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CB4553").s().p("Ak+AyIJ8g8IABAeIp8A2gAk9AYIJ4hhIAAAUIp4BVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.8,-7.4,63.8,14.8);


(lib.Wygenerujklatkipośrednie42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(254,238,180,0.8)","rgba(253,214,155,0)"],[0,1],0,0,0,0,0,39.5).s().p("Al2HhQhMjBA3kWQA5kUCbjIQCcjICigEQCkgEBMDBQBNDCg5EVQg4EVibDHQicDIijAFIgGAAQieAAhLi+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.9,-67.1,83.9,134.2);


(lib.Wygenerujklatkipośrednie39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F3137").s().p("AgaATIgPgEQgCgGABgHQAFgCANABIgBgEIAAgBIABAFIAEABIAJACIAEAJIgGAEIgBABQgDACgEAAIgFgBgAAXAGQAAgDADgDQAEgEAFAAQAGAEACAHQgHAGgEACQgHgEgCgFgAgEgIQABgDACgDIAEgDQAAAAABAAQAAgBABAAQAAAAABAAQABgBAAAAQAGAFACAGQgGAIgFAAQgGgDgCgFg");
	this.shape.setTransform(-14.8,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#674343").s().p("AhbAoIgpgIIgGgBQABgDAFAAIAMgFQAjgNAHAIIABABIAbAGQAQADAVgFQAHgFAGgIQADgGAFAAIACgKIACgCIABAAQAHAGAEAGIATAKQA/AJA7ABIAAABQgCAFgGABQhOAQhDgaQgGgCgCgCIgDADIgBACIgBAAIgEAHIgEABIgCACIgCgBIgCABQgMAIgOgCIgDgBIgGgCIgBAAIgDACIgCAAIgFABIgDABIgCAAIgIABIgLAAIgGAAgAhpgBQgIgBgBgGIABgGQACgMALAAQAMgBgCAMQAAADgFAFQgFAGgFAAIAAAAgAibgTIgFgCIgDgDQgBgCABgGQACgIAJABQAKABgCAKQAAADgDADQgDADgDAAIgCAAg");
	this.shape_1.setTransform(2.7,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#966161").s().p("AggAEQgDgEAFgEQALgHALgCQAfAEALAWIgBABQgggHghgDg");
	this.shape_2.setTransform(-1.2,-2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7D4F4F").s().p("Ag0ApQgVACgXgIIAFgEIgDgJIgJgCIABgCQAHgGAIgDQACAFAGAEQAFgBAHgIQgCgGgGgEQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgVgQAlgWIABgBQAWALgDAWIAKgCIADgFQACgKAJgJQADgDADgBQAMAGAGAGIABgDIACABIACAAIACgBQADgCAAgEQANgQAhAKQAaAIAJAOIACAEQACAEABAFIADACIABABIAAAFIgBAAIgCACIgCALQgFAAgEAGQgGAIgHAFQgVAFgQgDIgbgGIgBgBQgHgIgiANIgMAFQgFAAgBADIgFgDgAg4ASQgDADgBADQADAFAGAEQAFgCAGgGQgBgIgGgEQgFAAgEAFgAgJgNQgLAAgCAMIgBAFQABAGAIABQAFABAFgHQAEgFAAgCQACgLgKAAIgBAAgAAVgVQgFADADAGQAiACAgAHIABgBQgLgXgggEQgLACgLAIgAhIgTQgBAGABACIADADIAFACQAFABADgEQADgDAAgDQACgKgKgBIgDAAQgHAAgBAHg");
	this.shape_3.setTransform(-6.4,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-4.8,38.3,9.7);


(lib.Wygenerujklatkipośrednie35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF6A7B").s().p("Am6AsIAIgCINQiqIAJgBIAXAkIgTAEItQDWIgYAGg");
	this.shape.setTransform(1.2,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A04558").s().p("AmTDBINQjXIAGAWItND6gAmtAzINXiDIAGAUItQCpgAnCg9IMyi8IAlBYItOCag");
	this.shape_1.setTransform(-0.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.7,-25,91.5,50);


(lib.Wygenerujklatkipośrednie29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9E523F").s().p("AA9CGIgEAAQgcAAgNgdQgGgDgEgFQgSgRgPgiIgFgLIgHgNQgFgIgcgoQgRgXAAgUQAAgYARgKQAJgNATgIIACAAQALgJATABQAPABANAIQAKAGADAHQAXAWAAAeIAAADQAIAhANATQAKAQACAWQAFAQAAARQACASgDAQQgEAggUAAIgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-13.3,18.1,26.7);


(lib.Wygenerujklatkipośrednie23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9E523F").s().p("AAZBHIAAgBIgHABQgFAAgIgJQglgNgug3QgzhAAAgYQAAgQAPgSIABgBQAEgRATAJQAVAKAfAlQA2BBAQArIAIAMQALgKAgATQAvAdAAAfQAAARgKAFQAAAHgEAFQgGAIgLAAQgXAAgzhGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-14.1,26,28.2);


(lib.Wygenerujklatkipośrednie21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9E523F").s().p("AA9CFIgEABQgcAAgOgdIgKgIQgRgRgPgiIgFgMIgHgMQgFgIgcgoQgRgXAAgUQAAgZAQgJQAKgOATgHIACgBQAKgJAUACQAPABANAIQAKAGADAHQAXAWAAAeIAAADQAIAgANAUQAKAPABAXQAGAQAAARQACASgDAQQgEAggUAAIgEgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-13.3,18.1,26.7);


(lib.Wygenerujklatkipośrednie15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE0B3").s().p("AjLCuIF9lcIAEAJIAOASIAIAMImWE2g");
	this.shape.setTransform(0.1,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5BC67").s().p("AjMC8IAEACIgCgEIGWk3IAOAQImZE0gAjKC7IgPgUIFqltIAhAiIl8FdIAAABIABACg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-19.9,43.6,39.8);


(lib.Wygenerujklatkipośrednie11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#744755").s().p("AgHAjQgHgRgDgSIgEghQgCgQAJgHQASAGgBAXQgCAPABAPQACARAMAMQALAMgHANQgRgBgKgVg");
	this.shape.setTransform(-6.6,-2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCCDCD").s().p("AgJAvQABgFADgBIACABQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAIABADQAAAEgEAAQgEgBgBgCgAgGgJIAAgRQAAgIADgGQACgHAEgCIABAAQADABACACIAAACQABADgEAEQgEAFABAGQAAAHACAFQACAHgDAFIgDABQgFAAgCgIg");
	this.shape_1.setTransform(-12.1,-16.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BEA09E").s().p("AAMA5IAAgIIABgCIgBAFIACAEIgCABgAAGA1QgFgHgNABIgCgBIABgJQgBgGABgHIABAAQAEACACAGQgBADACADIgCgBQgDABgBAEQABADAEABQAEgBAAgEIgBgCIAGADQADADAFgBIAAABIgCACIgCAIIgBgCgAgNgGIABgQQABgIgBgKQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAQACgHgCgEIABgEQAJADAEAAQgEACgCAGQgDAGAAAIIAAASQADAKAHgDQADgGgCgHQgCgEAAgIQgBgGAEgEQAEgFgBgDIAEAKQADAJABALQgBALgGAFQgJADgNADIABgJgAACg2IADgBIACAFQgCgCgDgCg");
	this.shape_2.setTransform(-11.9,-16.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D6B0A0").s().p("AgQAYIACgEIAGgHIAIgEIACgCIADgHQgBgEAAgFQABgFgBgDQgBgIAGgBIABAAQAIAHgCALQAAAJgFAIQgEAKgIAGQgDACgDAAQgFAAgEgDg");
	this.shape_3.setTransform(-9.6,-15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B28A7E").s().p("AgBAuIAAgBIAAgBQgBgEgEgBQgEgBgFgFIgEgHQgBgGgHgDQAIgCAKgBIADAAQAEgGACgGQADgKABgNQABgPgFgJIAEACIADACQAEANAIANQAJAKgCAOQgCALAAAMIABAGIABABIABABIABABIgDADIgBgBIgBAAQgGAAgHAAIAAABIgLACgAAMgSQgGABABAIQABADgBAFQAAAFABAEIgDAHIgDACIgHAEIgGAHIgCAEQAHAGAHgFQAJgFAEgLQAFgIAAgJQACgLgIgHg");
	this.shape_4.setTransform(-9.9,-16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#59373F").s().p("AAWCBQgFgJgKgLQgSgbgSgcQgVgfgNgmIgKghQgQgsAmgOIABACQAEAHAHADQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAIALANQAEAFACAHQAIAOANgDQARAWAXAUQAKAJAGAKQAIAPANAPQgDAGADAHIABAEIgBABIgPAXQAAAAgBAAQAAAAAAABQAAAAgBAAQAAABAAAAIgIAHIgLALQgIALgEAKQgEAJADACIgDAFIgEgFgAhIhMIAEAhQAEAUAHARQAKAUASAAQAHgNgMgLQgLgMgCgRQgBgPACgQQABgXgTgFQgKAHACAPgAhKhyIgBgEIABABIAAABQABADADABIABABQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBABQgBgDAAgDgAg2h2IADgDIAAABIACABIgBAAIgDABgAg5iFIABAAIAIABIABABIgHAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBg");
	this.shape_5.setTransform(-1.6,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4F3137").s().p("ABBDkIgNgHQgHgHgKgCQgMgNgJgQQgHgEgFgHQgEgHgCgIQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAIgMgVQgZglgUgpIgagzQgNgXgDgZQgDgPAHgPIAGgNIgDgEIgFgJIgDgHIgBgEIABgGIAEgGIAAABIABAAIAMgCIgBgBQAHAAAHABIAAAAQAEAFAHgBIAAABIgIAAIgBAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAABAAIAHgBIABAAQAAABAAAAQAAAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABIABABIAAACIABACIAMgDIADABQABAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAQAKAHAIANQAJAKALAIIARAMIAFAFIACgBIAAAAQBGBhA4BpIAAAFIgBAJQgGAZgSAXQgKAPgTAEIgLACQgLAAgJgGgAhZggIAKAgQANAnAVAfQASAcATAbQAJAKAFAJIAEAFIADgFQgDgCAEgIQAEgLAIgKIALgMIAIgGQABgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBIAPgXIABAAIgBgEQgDgHADgHQgNgPgIgOQgGgLgKgKQgXgSgQgXQgOAEgIgPQgCgGgEgGIgLgMQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgHgEgEgGIgBgCQgmANAQAtgAhahjQAAADABADQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIgBgCQgDAAgBgDIAAgCIgBAAIABADgAhGhnIABABIADgCIABAAIgCgBIAAAAIgDACgAiNhpQgDgFAAgIIABgNIACgKQgGABgCgEIAAgGIAAgJQABgDADAAIABgEIAAgDIACgWQACgMgCgLQgCgLAIgEIASABQAAgEAFgBIAEAGIAGAAQANAFAHAMQAIAPAHAQQAGAPgBARIgCAXIgGgBIgBgCIgBgBIgCgFQAAgMACgMQACgOgIgLQgIgNgFgNIgDgCIgEgCQAGAJgBAPQgBANgFALQgBAGgEAGIgEABQgJAAgIACQAHADABAHIADAGQAFAFAEABQAEABABAFIgHAFIABgBQgFABgEgDIgGgDQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBgCAAgDQgCgGgDgCIgCgBIABABQgBAHABAGIgBAJIABABQAOgCAGAIIAAACIAAADIgFABIgKACQgIAAgGgFgAiEjXQABAFgBAGQAAABAAAAQABAAAAABQAAAAAAAAQAAAAgBAAQABAJgBAJIgBAQIAAAJQANgCAKgEQAGgGAAgKQAAgMgEgIIgDgKIgBgCIgCgEIgDABIgBABQgFAAgIgDIgBADgAhrhpIABAAIgBADg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-23.3,30,46.7);


(lib.Wygenerujklatkipośrednie9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#B89794","rgba(184,151,148,0)"],[0.271,0.804],11.6,0.9,0,11.6,2,12.5).s().p("AgPCLQiwgUh5g3Qh3g3AGg5QAGg5CCgaQCCgbCvAUQCwAUB4A3QB5A3gHA5QgGA5iDAaQhJAQhZAAQhDAAhLgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.6,-14.7,85.3,29.5);


(lib.Wygenerujklatkipośrednie8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B28A7E").s().p("AgKA6QgKgGgEACIAAgBIADgHQgDgBAAgFIABgDQgBgOgEgIIgEgGIgBgJIAAAAIAAgCIACgJIADgHIAAAAQACACACAHIABAFQACADACAAQAJABAKgWQAKgdAFgHIgCARIgBAEIgBgBIgFAYQAAABABAAQABAAAAABQAAAAABAAQAAAAABAAQABABAJgIQAHgJACABQAFABAAARQgBAGgSAWQgTAYAAADIgBACIAAACQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIgFAGIgDgBg");
	this.shape.setTransform(7,-11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BEA09E").s().p("AgcA3QgFAAADgQIADgJIABAFIgBAHIABAFIgBAIgAgOgMIAAAAQAFgFAJgeIAAgHIAIADIACABIgBADIgJAVQgFAOgIAFIgBgFgAAXgcIABAAIAEgLIAAgEIAEACIAAAEIgBAEIAAACIgHADIgBABg");
	this.shape_1.setTransform(6.4,-12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4F3137").s().p("AgmC8QgEAAglgbIgBgBIgagSQgCgLgDgLQAPghATgfIAcgyQAOgWAUgRQAKgJAQgCQAHgDAHABIABgFIAGgJIACgDQgIgCgCgEQgCgEAAgDQAEgGACgJIACgJQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAIAAAAQgDgDABgMIACgPIACgIQACgEAEgDIAAgBIABAAIABAAIABABQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABIAEgJIAEgMQACgLAEgCIAAAAIAAgBQABgEALABIAGACQAIgLAEAHIACALQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAABQAKABgCAGIgBADIgCAJQAFABADAHQAEAJgDAMQgCAKgmAyIAAAAIABABIgGAJQAEADABAGIACAAIAAACIgBAEIgBgBIAAACIgDAHIgBACIAAABIgCACIgBABIgBACIAJAJIAAADQABAAAAAAQAAABAAAAQAAAAAAAAQAAABgBAAIgBAKIgBAJQABAIgEAVIgHAXIgBACIgBAHIACABIAAAAIgGANIgEALQgQAmgSAlQgTASgfAAIgEAAgAA7g8IADABIAEgFQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIgBgCIABgBQABgEATgXQATgYABgGQgBgQgEgCQgDAAgHAIQgJAIgBgBQAAAAgBAAQAAAAAAAAQgBAAgBgBQAAAAgBgBIAFgXIABAAIABgEIADgRQgFAHgKAdQgLAXgKgCQgBAAgDgDIgBgFQgCgHgBgBQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIgBgCIgBgBIAAADIgDAHIgDAKIAAABIABABIgBABIACAJIAEAGQADAHACAPIgBACQgBAFADABIgCAHIgBACIAEgBQAEAAAHAEgAAhhSQgDAQAFAAIABAAIABgIIgBgFIABgHIgBgFgAA/ipQgJAdgFAGIAAAAIABAFQAIgGAGgNIAJgVIABgEIgCAAIgIgDIgBAHgABXiVIABgBIAHgDIAAgDIABgDIAAgFIgEgBIAAADIgEAMIgBAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-18.8,22.5,37.6);


(lib.Wygenerujklatkipośrednie7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B28A7E").s().p("AgIA6QgLgFgDACIAAgBIACgHQgDgBABgGIAAgCQgCgOgDgIQgDgCgBgEQgCgDAAgFIAAgBIAAgBIACgLIACgHIAAABIAEAJIACAFQACADABAAQAKABAKgYQAIgdAFgGIgCAQIgBAEIgBAAIgDAYIADACQABAAAJgIQAHgJACABQAFABABAQQgBAHgSAXQgRAYAAADIgBACIAAACQAAAAAAABQAAAAABABQAAAAABABQAAAAABAAIgEAGIgEgBg");
	this.shape.setTransform(6.6,-12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4F3137").s().p("AhJCkIgCgBIgagRIAAAAIgGgVQAPgiARggIAbgyQANgXATgSQAKgKAQgDQAHgCAHAAIABgFQACgFADgDIACgDQgHgCgDgFQgDgDABgDIAFgQIACgJQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAIAAAAQgDgDAAgMIABgPIACgIQACgEAEgDIAAgBIABAAIABAAIABABQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABIAEgJIADgNQACgKAEgCIABAAIAAgCQAAgEALACIAGABQAIgMADAHQADAFAAAGIAFAAQAJABgBAGIgBADIgCAJQAFABADAGQAEAKgCALQgCALgkAzIAAAAIABABIgFAJQAEADABAGIACAAIAAACIgBAEIgBAAIAAABIgCAIIgBABIgBACIgBABIgCACIgBABIAKAJIAAADQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAIgBALIgBAIQACAIgEAWIgGAXIAAACQgBACAAAFIACABIgBAAIgEANIgEALQgPAmgRAmQgUAUghAAQgEAAgmgagAA5g+IAEACIAEgGQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAgCIAAgBQABgDASgZQASgYABgGQgBgRgFgBQgCAAgHAIQgJAJgBgBIgEgCIAEgXIABAAIABgFIABgQQgEAHgJAcQgKAZgKgCQgBAAgDgDIgBgFIgEgJIACAAIgBgCIAAgBIgBADIgDAHIgBAKIgBABIABACIAAAAQAAAFABAEQACAEADACQADAIACAOIgBACQAAAFADABIgCAIIgBABIAEgBQAEAAAHADgAAfhTQgDAQAFAAIABAAIABgIIgBgFIAAgHIgBgFgAA5iqQgIAdgFAGIABAAIABAFQAIgGAFgOIAIgWIACgDIgDAAIgIgDIgBAIgABSiXIABgBIAIgEIgBgCIABgFIAAgEIgFgBIAAADIgDANIgBAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BEA09E").s().p("AgaA3QgGAAADgPIACgKIACAFIgBAIIABAFIgBAHgAgOgLIgBgBQAEgGAJgdIABgHIAHACIACABIgBADIgHAVQgGAOgIAGIAAgEgAAVgdIACAAIACgMIABgDIAFABIgBAEIgBAEIABACIgHAEIgCABg");
	this.shape_2.setTransform(6.1,-12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-19,21.6,38.1);


(lib.Wygenerujklatkipośrednie6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#B89794","rgba(184,151,148,0)"],[0.416,0.882],-0.3,-0.3,0,0.4,0.2,9.4).s().p("AgwBXQglgYgLgqQgLgpAUgkQAVgkAogJQAngJAkAYQAlAXALArQAMApgVAkQgUAlgoAJQgLACgKAAQgcAAgbgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-10.4,20.3,20.9);


(lib.Wygenerujklatkipośrednie5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#B89794","rgba(184,151,148,0)"],[0.416,0.882],-0.3,-0.3,0,0.4,0.2,9.4).s().p("AgwBXQglgYgLgqQgLgpAUgkQAVgkAogJQAngJAkAYQAlAXALArQAMApgVAkQgUAlgoAJQgLACgKAAQgcAAgbgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-10.4,20.3,20.9);


(lib.Wygenerujklatkipośrednie3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#744755").s().p("AgdAzIAAgOIAAgCQgGgMAFgRQAIgQALgQIAUgaQAJgNAMACQAJARgRAQQgMAJgKAMQgHAJgCAKQABABAAAJQgNAsgCAAQgFAAgBgNg");
	this.shape.setTransform(0.4,-3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#59373F").s().p("Ag8BsQADgKACgOQAFghAHggQAGgkAUgkIAQgfQAPghAaAEQgMgCgJANIgUAaQgLAQgIARQgFARAGAMIAAACIAAANQABANAEAAQACAAANgrQAAgJgBgBQACgLAIgJQAKgMAMgJQARgQgJgRQAGABAIADIgBACIAAABQADABACAHIADAWQgDAZgDAOIABABQgEAcACAdQABAOgEAMQgFAQgBATQgHADgDAHIgBAEIgCgBIgaAGQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgJgBIgRAAQgMACgKAFQgJADABADQgDACgDAAIAAgHg");
	this.shape_1.setTransform(-0.5,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D6B0A0").s().p("AgBAdIgCAAQgDgBAAgFIAAgDIAAgEQAAgIAEgTQAFgWAEAFIAAAFQABALgEANQgEANAAALIAEAAIgCAFIgDgBg");
	this.shape_2.setTransform(4.6,-16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B28A7E").s().p("AAEA7QgLgDgDADIAAgBIAAgHIACAAIAEABIACgFIgEAAQAAgLAEgNQADgOgBgKIAAgFQgDgFgGAVQgEAUAAAIIAAAEQgEgNgFgHQgDgCgDgDIgDgJIAAAAIAAgBIAAgBIgBgKIACgHIABAAIAEAIIADAEIAEACQAKAAAGgZQACgeADgHIACAQIAAAFIgBAAIAAAXIAEACQABAAAHgKQAGgJACAAQAFAAAEAQQAAAHgNAZQgNAbAAAEIAAABIAAACQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAIgDAHIgDgBg");
	this.shape_3.setTransform(5.3,-18.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BEA09E").s().p("AgWApIAAgJIADAEIABAIIABAFIABAHIgBAAIAAABQgFAAAAgQgAgRgLIgBAAQADgHADgeIAAgIIAIABIACAAIgBADIgDAXQgDAPgHAHIgBgEgAAPgjIABAAIAAgNIAAgDIAFAAIAAAEIAAAEIACADQgEACgEAEg");
	this.shape_4.setTransform(4.9,-18.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4F3137").s().p("Ag/D7QgQgJgDgQIgFgPQAAgJgFgIQABgSAEgSQgBgIABgIQABgJAFgHQgBAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBIAGgXQAJgsAOgrIARg1QAJgaAQgVQAIgMAOgGQAHgDAHgBIABgFQABgGACgEIABgDQgHAAgFgEQgCgDAAgDQACgHAAgKIAAgJQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAIAAgBQgEgCgCgMIgBgOIAAgKQABgDADgEIAAgBIABAAIABgBIABABQABAAABAAQAAABABAAQAAAAABAAQAAABABAAIABgIIABgOQAAgLAEgCIABAAIgBgCQAAgEAKAAIAGAAQAGgOAFAHQADAEABAGIAFgBQAKAAAAAFIgBADIAAAKQAFAAAEAGQAGAJAAAKQAAAMgbA5IABAAIABAAIgEAKQAFADACAFIACAAIAAACIAAAEIgBAAIAAACIAAAHIgBACIAAABIgBACIgBACIgCABIALAHQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIABALIABAJQADAIAAAWIgCAYIAAABIABAHIACAAIgBAAQgTB2gkByIgDADIgHAHQgVAMgcAEIgIABQgOAAgMgIgAgHhDIgQAfQgTAkgHAkQgHAggFAhQgBAOgDAKIAAAHQACAAADgCQAAgDAIgDQALgFAMgCIAQAAIALABQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAbgGIABABIABgEQADgHAHgDQACgTAEgQQAEgMgBgOQgCgeAFgbIgCgBQADgOADgZIgCgWQgDgHgDgBIAAgBIABgCQgHgDgGgBIgGgBQgWAAgOAegAA4iAIAEABIADgHQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBIAAgCIAAgBQAAgEANgbQANgaAAgHQgDgQgGAAQgCAAgFAJQgHAKgBAAIgFgCIAAgXIABAAIAAgFIgCgQQgCAHgEAeQgGAagJAAIgFgCIgCgFIgFgIIACgBIgCgCIAAAAIgBADIgCAHIABALIAAABIAAABIAAAAIAEAJQACADADACQAFAHAEANIAAADQABAFADABIgBAHIAAABQACgBAEAAIAJABgAAbiQQAAAQAEgBIABAAIgBgIIgBgEIgBgIIgCgFgAAljrQgDAegEAHIABABIACAEQAGgIADgOIADgXIABgDIgCAAIgIgBIABAHgABBjrIAAANIgBABIAAABQAEgFAEgCIgBgCIAAgFIAAgEIgGAAIAAADg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.3,-25.9,18.6,51.8);


(lib.Wygenerujklatkipośrednie1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#B89794","rgba(184,151,148,0)"],[0.224,1],20.9,1.6,0,20.9,1.6,43).s().p("AjbAFQgDgtBLgjIFvBbIl+A8Qg2ghgDgmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-7.5,44,15.1);


(lib.soundON = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC3333").ss(2,1,1).p("AAdgYQAKALAAANQAAAPgMALQgLALgQAAQgPAAgLgLQgCgBgBgBQgIgKAAgOQAAgPALgLQALgKAPAAQAQAAALAKQABACABAAgAAQgVIgRAZIgOAU");
	this.shape.setTransform(97.7,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC8C2D").s().p("AgvhKIBEAxIAbAAIAAAZIAAAaIgdAAIgCACIASgaIgSAaIgbAUQgIgKAAgOQAAgPALgKQAKgLAQAAQAQAAALALIACABIgCgBQgLgLgQAAQgQAAgKALQgLAKAAAPQAAAOAIAKIglAbg");
	this.shape_1.setTransform(95.8,7.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC8C2D").s().p("ADZAnIgBADIgIAAIgHgTIALgFQAEAHAGAEQAGADAFAAQADAAADgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAgBIgBgDIgGgCIgMgFQgLgDgEgFQgDgEAAgFQAAgHAFgFQAIgGAJAAQAJAAAGAEIABgCIAIAAIAFAPIgLAFQgDgFgFgCQgEgDgGAAIgEABQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAAAIABACQABABADABIAQAFIAIAEQAFADACADQACADAAAFQgBAIgGAFQgHAGgLAAQgJAAgHgFgAA2AoQgFgEgEgHQgDgHAAgJQAAgJADgGQAEgHAGgEQAGgEAIAAIAHABIAHADIAAgNIgIAAIAAgMIALgCIAKgDIAGAAIAABDIAAAFIACACIAEAAIADAAIAAALIgaABIAAgGIgJAFIgJACQgGAAgHgEgABEgCQgDACgCADQgBAEAAAGQAAAIAEAFQADAEAEAAIAEgBIAGgEIAAgTIgBgFIgDgDQgCgCgEAAQgCAAgDACgAhlAqIgGgDQgCgDgBgDQgCgDABgFIAAgYIAAgDIgCgBIgEgBIgDAAIAAgLIAcgBIAAAlIAAAGIACACIADABIAGgCIAHgEIAAgXIAAgDIgBgBIgEgBIgEAAIAAgLIAcgBIAAApIAAAEIABACIAFAAIADAAIAAALIgaABIAAgHQgFAEgGACQgEACgGAAQgEAAgEgCgAi4AjQgJgIAAgOQAAgJAEgGQAEgHAHgEQAIgEAJAAQAKAAAIAEQAHAEAFAHQAEAGgBAJQABAOgKAIQgJAJgOAAQgQAAgIgJgAimgCQgEACgBADQgBAEgBAGQABAGABAEQABAEAEACQACACADAAQAGAAADgEQAEgFAAgJQAAgJgEgEQgDgEgFAAQgDAAgDACgAjwAnIgCADIgIAAIgGgTIALgFQAEAHAFAEQAGADAGAAQADAAACgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBIgBgDIgGgCIgNgFQgKgDgEgFQgEgEAAgFQAAgHAGgFQAHgGAJAAQAKAAAFAEIACgCIAIAAIAFAPIgMAFQgCgFgGgCQgEgDgFAAIgEABQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAAAIABACQABABADABIAQAFIAJAEQAEADACADQACADAAAFQAAAIgHAFQgGAGgLAAQgKAAgGgFgACfAqIAAgLIADAAIAEAAIACgBIAAgEIAAgaIgJAAIAAgLIAJgBIAIgCIAFgDIAGAAIAAArIAAADIABACIAEAAIADAAIAAALgAAAAqIAAgLIAEAAIACgCIAAgEIAAgVIAAgEQgCgDgDAAIgEACIgIADIAAAXQAAAEAAABIAEABIADAAIAAALIgiAAIAAgLIABAAIAFAAIACgCIAAgDIAAgaIgIAAIAAgMQAKgBAJgEIAGAAIAAAIQAGgEAFgCQAEgCAEAAQAGAAAEADQAFACACAEQACADAAAGIAAAYIAAAEIABACIAFAAIADAAIAAALgACpgYQgCgEAAgEQAAgEACgEQADgDAFAAQAFAAADADQACAEAAAEQAAAEgCAEQgDADgFAAQgFAAgDgDg");
	this.shape_2.setTransform(28.6,5.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC3333").s().p("AhxAgQgNgMAAgUQAAgSAMgLQAMgMAUAAQAUAAALALQAMAMAAASQABAMgGAKQgFAKgLAFQgJAFgNAAQgTAAgMgKgAhhgVQgHAIAAANQABAOAGAIQAGAHAJAAQAIAAAGgHQAGgIABgOQgBgJgCgGQgDgHgEgDQgFgDgGAAQgJAAgGAHgAAyApIAAgMIAEAAIAFgBQAAAAABAAQAAgBAAAAQAAgBAAgBQABAAAAgBIAAguIgBgFIgCgBIgEgBIgEAAIAAgLIBEAAIAJAaIgKAEIgFgJIgFgFIgHgCIgJgBIgKAAIAAAWIAEAAIAFgBIACgCIABgFIAAgEIALAAIAAAjIgLAAIAAgFIAAgDIgBgCIgCgCIgFAAIgEAAIAAARIAAAEIABACIAFAAIAEAAIAAAMgAgeApIAAgMIADAAIAFgBQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAguIgBgFIgCgBIgEgBIgDAAIAAgLIBDAAIAJAaIgKAEIgGgJIgFgFIgHgCIgJgBIgJAAIAAAWIAEAAIAFgBIACgCIABgFIAAgEIAKAAIAAAjIgKAAIAAgFIgBgDIgBgCIgCgCIgFAAIgDAAIAAARIAAAEIABACIAEAAIAEAAIAAAMg");
	this.shape_3.setTransform(71.9,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D24F4F").ss(2,1,1).p("AgaAaQgLgLAAgPQAAgPALgLQALgKAPAAQAQAAALAKQAMALAAAPQAAAPgMALQgLALgQAAQgPAAgLgLgAAQgVIgfAt");
	this.shape_4.setTransform(97.7,10.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFBE5E").s().p("AgvhKIBEAxIAbAAIAAAzIgdAAIhCAxg");
	this.shape_5.setTransform(95.8,7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFBE5E").s().p("ACoAiQgOgMAAgUQAAgSAMgMQAMgMAUAAQAUAAAMAMQAMAMAAARQAAANgGAKQgFAJgKAFQgKAGgNAAQgTAAgLgKgAC4gUQgHAJAAANQAAAOAGAIQAGAHAJAAQAJAAAFgHQAHgJAAgNQAAgJgDgHQgDgGgEgEQgFgDgGAAQgJAAgFAHgABCAnIgBADIgIAAIgHgTIALgFQAEAHAGAEQAGADAFAAQADAAACgBQABAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAgBIgBgDIgGgCIgNgFQgKgDgEgFQgEgEAAgFQAAgHAGgFQAHgGAKAAQAJAAAGAEIABgCIAIAAIAFAPIgLAFQgDgFgFgCQgFgDgFAAIgEABQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIABACQABABAEABIAQAFIAIAEQAEADACADQACADAAAFQAAAIgGAFQgHAGgLAAQgJAAgHgFgAhgAoQgFgEgEgHQgDgHAAgJQAAgJADgGQAEgHAGgEQAGgEAHAAIAHABIAIADIAAgNIgJAAIAAgMIAMgCIAKgDIAFAAIAABDIABAFIABACIAFAAIACAAIAAALIgZABIAAgGIgKAFIgIACQgHAAgGgEgAhSgCQgDACgCADQgBAEAAAGQAAAIADAFQADAEAFAAIADgBIAHgEIAAgTIgBgFIgDgDQgCgCgEAAQgDAAgCACgAj8AqIgGgDQgCgDgBgDQgCgDAAgFIAAgYIAAgDIgBgBIgEgBIgDAAIAAgLIAbgBIAAAlIABAGIACACIADABIAGgCIAHgEIAAgXIgBgDIgBgBIgDgBIgEAAIAAgLIAcgBIAAApIAAAEIABACIAEAAIADAAIAAALIgZABIAAgHQgFAEgGACQgFACgFAAQgEAAgEgCgAlQAjQgIgIAAgOQAAgJAEgGQAEgHAHgEQAIgEAJAAQAKAAAIAEQAHAEAEAHQAEAGAAAJQAAAOgJAIQgJAJgOAAQgQAAgJgJgAk+gCQgDACgBADQgCAEAAAGQAAAGACAEQABAEADACQADACADAAQAFAAAEgEQAEgFAAgJQAAgJgEgEQgDgEgFAAQgEAAgDACgAmHAnIgCADIgIAAIgHgTIALgFQAEAHAGAEQAGADAGAAQADAAACgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBIgCgDIgFgCIgNgFQgLgDgDgFQgEgEAAgFQAAgHAGgFQAHgGAJAAQAJAAAGAEIACgCIAIAAIAEAPIgLAFQgDgFgFgCQgEgDgFAAIgFABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACQABABADABIAQAFIAJAEQAEADACADQACADAAAFQAAAIgHAFQgHAGgKAAQgKAAgGgFgAFMAqIAAgLIADAAIAFgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAgBIAAguIgBgEIgCgCIgEAAIgDAAIAAgLIBDAAIAKAaIgLADIgFgIIgFgFIgHgDIgJAAIgKAAIAAAWIAFAAIAEgBIADgDIABgEIAAgFIAKAAIAAAkIgKAAIAAgFIgBgEIgBgCIgCgBIgFgBIgEAAIAAASIAAAEIACABIAEABIAEAAIAAALgAD6AqIAAgLIADAAIAGgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAgBIAAguIAAgEIgCgCIgFAAIgDAAIAAgLIBEAAIAJAaIgKADIgFgIIgGgFIgHgDIgJAAIgKAAIAAAWIAFAAIAFgBIACgDIABgEIAAgFIALAAIAAAkIgLAAIAAgFIAAgEIgCgCIgCgBIgEgBIgFAAIAAASIABAEIABABIAFABIADAAIAAALgAAIAqIAAgLIADAAIAEAAIABgBIABgEIAAgaIgJAAIAAgLIAJgBIAHgCIAGgDIAFAAIAAArIABADIABACIAEAAIADAAIAAALgAiXAqIAAgLIAFAAIABgCIABgEIAAgVIgBgEQgBgDgDAAIgGACIgIADIAAAXQAAAEABABIAEABIACAAIAAALIgiAAIAAgLIACAAIAFAAIABgCIABgDIAAgaIgJAAIAAgMQALgBAJgEIAFAAIAAAIQAHgEAFgCQAEgCAFAAQAGAAAEADQAFACACAEQACADAAAGIAAAYIAAAEIABACIAFAAIADAAIAAALgAASgYQgDgEAAgEQAAgEADgEQADgDAFAAQAEAAADADQADAEAAAEQAAAEgDAEQgDADgEAAQgFAAgDgDg");
	this.shape_6.setTransform(43.7,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(3));

	// przezroczyste tlo
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(162,148,128,0)").s().p("AoPBQIAAifIQeAAIAACfg");
	this.shape_7.setTransform(52.7,7.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.6,105.5,16);


(lib.soundOFF = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC8C2D").s().p("Agah4IBrBQIAqgBIAABUIgtAAIhoBOgAhwBPIBEglIAHAPIhEAlgAh6AEIAAgPIBOAAIAAAPgAhvhTIAIgOIBEAlIgIAOg");
	this.shape.setTransform(92.7,7.9,0.644,0.618);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC8C2D").s().p("ADOAiQgNgMAAgUQAAgSAMgMQAMgMAUAAQAUAAALAMQAMAMAAARQABANgGAKQgFAJgLAFQgJAGgNAAQgTAAgMgKgADegUQgHAJAAANQABAOAGAIQAGAHAJAAQAIAAAGgHQAGgJABgNQgBgJgCgHQgDgGgEgEQgFgDgGAAQgJAAgGAHgABpAnIgBADIgIAAIgIgTIALgFQAFAHAFAEQAHADAFAAQADAAACgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBIgCgDIgFgCIgNgFQgLgDgDgFQgEgEAAgFQAAgHAGgFQAHgGAKAAQAIAAAGAEIACgCIAIAAIAFAPIgLAFQgDgFgFgCQgFgDgFAAIgFABQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAAAAAIABACQABABAEABIAQAFIAIAEQAEADACADQACADAAAFQAAAIgGAFQgIAGgKAAQgJAAgHgFgAg5AoQgFgEgEgHQgEgHAAgJQAAgJAEgGQAEgHAGgEQAFgEAIAAIAHABIAHADIAAgNIgIAAIAAgMIALgCIAKgDIAGAAIAABDIAAAFIACACIAFAAIACAAIAAALIgaABIAAgGIgJAFIgJACQgGAAgGgEgAgsgCQgDACgBADQgBAEAAAGQgBAIAEAFQADAEAFAAIADgBIAGgEIAAgTIAAgFIgDgDQgCgCgEAAQgDAAgDACgAjVAqIgGgDQgCgDgCgDQgBgDAAgFIAAgYIAAgDIgCgBIgDgBIgEAAIAAgLIAcgBIAAAlIAAAGIADACIACABIAHgCIAGgEIAAgXIAAgDIgBgBIgDgBIgEAAIAAgLIAcgBIAAApIAAAEIABACIAEAAIADAAIAAALIgZABIAAgHQgGAEgFACQgFACgGAAQgEAAgDgCgAkpAjQgJgIAAgOQAAgJAFgGQAEgHAHgEQAIgEAJAAQAKAAAIAEQAHAEAEAHQAEAGAAAJQAAAOgJAIQgJAJgOAAQgQAAgJgJgAkXgCQgDACgBADQgCAEAAAGQAAAGACAEQABAEADACQADACADAAQAFAAAEgEQAEgFgBgJQABgJgEgEQgEgEgEAAQgEAAgDACgAlgAnIgCADIgIAAIgHgTIALgFQAEAHAGAEQAGADAGAAQACAAACgBQABAAAAgBQABAAAAAAQAAgBAAAAQABAAAAgBIgCgDIgFgCIgOgFQgKgDgDgFQgFgEAAgFQABgHAFgFQAIgGAJAAQAJAAAGAEIACgCIAIAAIAEAPIgLAFQgDgFgFgCQgFgDgEAAIgFABQAAAAgBAAQAAABAAAAQAAAAAAABQgBAAAAAAIABACQABABAEABIAQAFIAJAEQADADACADQACADAAAFQABAIgHAFQgHAGgKAAQgKAAgGgFgAFXAqIgeg7IAAApIAAAFIACABIAEABIAEAAIAAALIgiAAIAAgLIAEAAIADgBIACgBIABgEIAAguIgBgEIgBgCIgDAAIgFAAIAAgLIAhAAIAZAuIAAgcIgBgFIgBgCIgFAAIgDAAIAAgLIAhAAIAAALIgDAAIgEAAIgDACIAAAFIAAA+gAAuAqIAAgLIAEAAIADAAIACgBIAAgEIAAgaIgJAAIAAgLIAJgBIAIgCIAGgDIAFAAIAAArIABADIABACIADAAIAEAAIAAALgAhwAqIAAgLIAEAAIACgCIAAgEIAAgVIAAgEQgBgDgDAAIgGACIgIADIAAAXQAAAEABABIAEABIACAAIAAALIgiAAIAAgLIACAAIAEAAIACgCIAAgDIAAgaIgIAAIAAgMQALgBAJgEIAFAAIAAAIQAGgEAFgCQAFgCAFAAQAFAAAFADQAEACACAEQACADABAGIAAAYIAAAEIABACIAEAAIAEAAIAAALgAA5gYQgDgEAAgEQAAgEADgEQADgDAEAAQAFAAADADQADAEAAAEQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_1.setTransform(39.9,5.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFBE5E").s().p("AGIhKIBGAxIAbAAIAAAzIgdAAIhEAxgAFRAxIArgXIAFAJIgsAXgABYAJQgOgLAAgTQAAgUAMgLQAMgMAUAAQAUAAAMALQAMANAAASQAAAMgGAKQgFAJgKAFQgKAGgNgBQgTAAgLgKgABogsQgHAIAAAPQAAAOAGAHQAGAHAJAAQAJAAAFgHQAHgIAAgNQAAgKgDgHQgDgGgEgEQgFgDgGAAQgJAAgFAHgAgNAPIgBADIgIAAIgHgSIALgFQAEAFAGAFQAGADAEAAQADAAACgBQABgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIgBgDIgGgCIgMgEQgKgDgEgFQgEgEAAgFQAAgIAGgFQAHgGAKAAQAIAAAGAEIABgCIAIAAIAFAQIgLAEQgDgFgFgDQgEgCgFAAIgEAAQgBABAAAAQAAAAAAABQgBAAAAAAQAAABAAAAIABACQABACAEABIAPAFIAIAEQAEADACACQACAEAAADQAAAIgGAGQgHAFgLAAQgIABgHgFgAiwAQQgFgEgEgHQgDgHAAgIQAAgJADgHQAEgIAGgDQAGgEAHAAIAHABIAIADIAAgNIgJAAIAAgMIAMgCIAKgDIAFAAIAABDIABAFIABACIAFAAIACAAIAAALIgZABIAAgGIgKAFIgIABQgHAAgGgDgAiigaQgDACgCAEQgBAEAAAFQAAAJADADQADAFAFAAIADgBIAHgEIAAgTIgBgEIgDgFQgCgBgEAAQgDAAgCACgAlMASIgGgDQgCgDgBgDQgCgDAAgFIAAgXIAAgFIgBgBIgEAAIgDAAIAAgLIAbgBIAAAmIABAFIACACIADABIAGgCIAHgEIAAgWIgBgEIgBgCIgDAAIgEAAIAAgLIAcgBIAAApIAAAEIABACIAEAAIADAAIAAALIgZAAIAAgGQgFADgGACQgFACgFAAQgEAAgEgBgAmgALQgIgJAAgNQAAgJAEgGQAEgHAHgEQAIgEAJAAQAKAAAIAEQAHAEAEAHQAEAGAAAJQAAANgJAJQgJAJgOgBQgQABgJgJgAmOgaQgDACgBAEQgCAEAAAFQAAAHACAEQABADADACQADACADAAQAFAAAEgEQAEgEAAgJQAAgJgEgEQgDgFgFAAQgEAAgDACgAnXAPIgCADIgIAAIgHgSIALgFQAEAFAGAFQAGADAGAAQADAAACgBQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgCgDIgFgCIgNgEQgLgDgDgFQgEgEAAgFQAAgIAGgFQAHgGAJAAQAJAAAGAEIACgCIAIAAIAEAQIgLAEQgDgFgFgDQgEgCgFAAIgFAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIABACQABACADABIAQAFIAJAEQAEADACACQACAEAAADQAAAIgHAGQgHAFgKAAQgKABgGgFgADhASIgfg7IAAApIABAFIABABIAEABIAEAAIAAALIgiAAIAAgLIAEAAIAEgBIACgBIAAgEIAAguIAAgEIgCgCIgDgBIgFAAIAAgLIAiAAIAYAwIAAgdIgBgFIgBgCIgEgBIgEAAIAAgLIAhAAIAAALIgDAAIgEABIgCACIAAAFIAAA+gAhHASIAAgLIADAAIAEAAIABgBIABgEIAAgbIgJAAIAAgLIAJgBIAHgBIAGgDIAFAAIAAAqIABAEIABACIAEAAIADAAIAAALgAjnASIAAgLIAFAAIABgCIABgEIAAgVIgBgFQgBgCgDAAIgGABIgIAFIAAAWQAAAEABABIAEABIACAAIAAALIgiAAIAAgLIACAAIAFAAIABgCIABgEIAAgaIgJAAIAAgLQALgBAJgEIAFAAIAAAIQAHgFAFgBQAEgCAFAAQAGAAAEADQAFACACAEQACADAAAHIAAAXIAAAEIABACIAFAAIADAAIAAALgAFLADIAAgKIAxAAIAAAKgAFSgzIAEgJIAsAXIgFAJgAg9gwQgDgEAAgEQAAgEADgEQADgDAFAAQAEAAADADQADAEAAAEQAAAEgDAEQgDACgEAAQgFAAgDgCg");
	this.shape_2.setTransform(51.7,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).wait(3));

	// przezroczyste tlo
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(162,148,128,0)").s().p("AoPBQIAAifIQeAAIAACfg");
	this.shape_3.setTransform(52.7,7.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.6,105.5,16);


(lib.odglosyMiasta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("odglosyMiasta");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(533));

	// odglosyMiasta
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#885549").ss(1,1,1).p("ACRiJQA8A5AABQQAABRg8A5Qg8A5hVAAQhUAAg8g5Qg8g5AAhRQAAhQA8g5QA8g5BUAAQBVAAA8A5g");
	this.shape.setTransform(1.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(533));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,43,41);


(lib.kobitaidzie3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9E523F").s().p("AgKG1QgRADgkAAQhCAAgPgVIgDgEIgBgMIACgGQAAgXAGgPIAXgyIAIgSQgCgdgKgjIgBgFQgDgVgJgYQAAgOgJgOIAAAAIAAAAIgFgIIgEAAIgKgLQgTgUAAgcQAAgHABgHQAHgFAGgOIAOgMQATgTAEgKIADgEQgDgKgCgSQAAgeAygLIAVgDIABgBIABgBIAAAAQAEgGAAgGIAAgCIAAAAIgBgrIAAgFIgEAAIgCAAQgCADgEgBQgPAAgYhBIgGgUQgcgDgBgOQABgOAVACIAAgQIABgTQAAgLAEgLIAHgUIABgCIAAAAQAAgDAIgMIALgQIAGgIIABAAIAAgGIgBgEQgDgKgCgLQABgWAigNQAIgHARgFQAdgJAoAEQAsAGAYARIAIAEQAVAQATAbQAHAKACAUIABAhQgBAQgDAQIAAAAQgSATgBAkIgCgFIgEAHIgRAUIgUASQgWADAAAUQAAAHADAGQAFALAKACQAEADAGABIABACIAGAAIAJAAIAIgBQADgFAAgEIAAgMQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgJAEQgDACgFAAQgMAAAAgOQAAgHADgFQABgIAJgFQALgHAOAEIAFABIAEACIAAgBIAAgEIAIAMIAEAFQASARAAAZQAAAWgMAQQgVAbgyAAQg1AAgcghQgSgNgJgVIgBABIAAAGQgEAJAAAMQAAAMAIAWIAEADIAEAHIACADIACACIALAOIABABIAAAAIABAAIAIAJIAHAKIAGAFIAAAAIAEAKQARAIABAXIACAAIAAABIAAAAIAFAJQACAPAEAKIAAAGIACAKQADATACAlIABAcQADAJAAAQQABAPgBALIgCAHQACAFAAAIQAAAEgzA7IgYAcIAIAeQAIAoAAAUIAAAVQgDAQgQAAQgHAAgLgKgAAeBaQgWAkgGATQgdAjAAAmQAAATACASQALANAMATIAPgXIAOgTQAMgUAIgJQgFgLgEgTIAAgEQgBgVgBgkIgFgkIgBABg");
	this.shape.setTransform(-229,-342.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9E523F").s().p("AgGG1QgRADgkAAQhCAAgPgVIgDgEIgCgMIACgGQAAgXAHgPIAXgyIAIgSQgCgdgKgjIgBgFQgDgVgJgYQAAgOgJgOIAAAAIAAAAIgGgIIgDAAQgGgHgKgJQgVgSAAgZQAAgfAdgVIAKgIIALgCIAAgBIAWgbIAAgHQAAgYAigXQASgNAIABQACgEAAgEIAAgCIAAAAIgCgrIAAgFIgDAAIgCAAQgCADgEgBQgQAAgXhBIgHgUQgcgDAAgOQAAgOAWACIAAgQIAAgTQABgLAEgLIAHgUIABgCIAAAAQAAgDAHgMIAMgQIAGgIIAAAAIABgGIgBgEQgDgKgCgLQAAgWAjgNQAIgHAQgFQAegJAnAEQAsAGAZARIAIAEQAVAQASAbQAIAKACAUIAAAhQAAAQgDAQIAAAAQgSATgBAkIgCgFIgFAHIgRAUIgUASQgWADAAAUQAAAHAEAGQAEALAKACQAEADAHABIABACIAGAAIAJAAIAHgBQAEgFAAgEIAAgMQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIgIAEQgDACgFAAQgMAAAAgOQAAgHADgFQABgIAJgFQALgHANAEIAGABIAEACIAAgBIAAgEIAIAMIAEAFQASARAAAZQAAAWgMAQQgVAbgyAAQg1AAgcghQgTgNgIgVIgBABIgBAGQgDAJAAAMQAAAMAIAWIADADIAFAHIACADIACACIALAOIABABIAAAAIABAAIAIAJIAEAGIAFAWQAJAQAAAQQAAALgCALIAAAEIABADIAAAGIAAAKQADAUgBAkIgBAcQACAJgCARQABAOgCALIgCAHQABAFAAAJQgBADg1A4IgCABQAmApAAAoIAAAPQACAQAAAKIAAAVQgDAQgRAAQgHAAgKgKgAgXDaIABAhIAKgMQANgTAIgJQgFgKgCgUIAAgEIABgdQgaAiAAAkg");
	this.shape_1.setTransform(-229.4,-342.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9E523F").s().p("AgBG1QgRADgkAAQhCAAgPgVIgDgEIgCgMIACgGQAAgXAHgPIAXgyIAIgSQgCgdgKgjIgBgFQgDgVgJgYQAAgOgJgOIAAAAIAAAAIgGgIQgegCgNgXQgHgPAAgSQAAgzA8gMIAAgBIAkguQALgPANgLQAGgJANgHIABgBIAAAAQAEgGAAgGIAAgCIAAAAIgCgrIAAgFIgDAAIgCAAQgCADgEgBQgQAAgXhBIgHgUQgcgDAAgOQAAgOAWACIAAgQIAAgTQABgLAEgLIAHgUIABgCIAAAAQAAgDAHgMIAMgQIAGgIIAAAAIABgGIgBgEQgDgKgCgLQAAgWAjgNQAIgHAQgFQAegJAnAEQAsAGAZARIAIAEQAVAQASAbQAIAKACAUIAAAhQAAAQgDAQIAAAAQgSATgBAkIgCgFIgFAHIgRAUIgUASQgWADAAAUQAAAHAEAGQAEALAKACQAEADAHABIABACIAGAAIAJAAIAHgBQAEgFAAgEIAAgMQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIgIAEQgDACgFAAQgMAAAAgOQAAgHADgFQABgIAJgFQALgHANAEIAGABIAEACIAAgBIAAgEIAIAMIAEAFQASARAAAZQAAAWgMAQQgVAbgyAAQg1AAgcghQgTgNgIgVIgBABIgBAGQgDAJAAAMQAAAMAHAWIAEADIAFAHIACADIACACIALAOIABABIAAAAIABAAIAGAHIAKAXIAIAQIACAXQAAAigPAcIAAABQgWAkgHATQgcAjAAAmQAAATACASQALANAKATIADgFIAIASIAIAQIgEAEIAIAeQAIAoAAAUIAAAVQgDAQgRAAQgHAAgKgKg");
	this.shape_2.setTransform(-229.9,-342.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_1}]},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.2,-387.4,36.5,89.4);


(lib.kobitaidzie2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9E523F").s().p("ABnG1QgRADgkAAQhBAAgPgVIgDgEIgBgMIABgGQAAgXAHgPIAXgyIAHgSQgCgdgJgjIgBgFQgDgVgJgYQAAgOgJgOIAAAAIAAAAIgFgIIgEAAIgBgCIgGARQgHATgGAJIAAABQAAALgMAEIg1AMIgmAMQgoAKgRABIgFgBIAAAAIgIABIgEgBIAAABQAAABgOAMQgPAMgEAIIgGARQgGAOgIAAQgJAAgBgHIgCAAQgNAAADgPQAAgXAjgXQAYgPAHAGIAEAAQALgIBKggQAvgUAWgEIAKgbIAMgbQgEgKAAgMQAAgHACgHQAHgFAGgOIANgLQACgPALgXQABgIADgBIAAgIQAAgLAGgEQAGgYApgJIAWgDIABgBIABgBIAAAAQAEgGAAgGIAAgCIAAAAIgCgrIAAgFIgDAAIgCAAQgCADgEgBQgQAAgXhBIgGgUQgcgDAAgOQAAgOAWACIAAgQIAAgTQABgLAEgLIAGgUIABgCIAAAAQAAgDAHgMIAMgQIAGgIIAAAAIABgGIgBgEQgDgKgCgLQAAgWAjgNQAIgHAQgFQAfgJAnAEQAsAGAZARIAIAEQAVAQASAbQAIAKACAUIAAAhQAAAQgDAQIAAAAQgSATgBAkIgCgFIgEAHIgSAUIgTASQgXADAAAUQAAAHAEAGQAEALAKACQAEADAHABIABACIAGAAIAJAAIAIgBQADgFAAgEIAAgMQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIgIAEQgDACgFAAQgMAAAAgOQAAgHADgFQABgIAJgFQALgHANAEIAGABIAEACIAAgBIAAgEIAIAMIAEAFQASARAAAZQAAAWgMAQQgVAbgyAAQg1AAgcghQgTgNgJgVIgBABIgBAGQgDAJAAAMQAAAMAIAWIAEADIAFAHIACADIACACIALAOIABABIAAAAIABAAIAIAJIAHAKIAGAFIAAAAIAEAKIABAAIgBABQAFAFAEAEIAOAOIAaAZQANAMASATIATATQAHAFALAMQAMAJAGAJIAEAHIAJAJQADACACBOIABAkIgFABIAAAAIgCAPQgCAogGADQgLAGgEgPQgGgKAAgaQAAgRADgJIgCgBQgFgBgFgDIAMAEIgDgdIgCgYQgFgXAAgLQgMgDgOgOIgDgCQgPgPgYgaIgWgQIgHgFIABAFIgJgLIgCgCIgBACIgBgCQgGAKgHAEIgGAIIAAADQgUAhgFASQgeAjAAAmQAAATACASQAIAKAIALIAEALIADAFIAAAKIAKAPIAFACIgBABIAGAXIAAALIAFAKQAFAeAAAQIAAAVQgDAQgRAAQgHAAgLgKgAEWE+IgFgKIAEAGIAKALIgJgHg");
	this.shape.setTransform(-240.4,-342.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9E523F").s().p("AgGG1QgRADgkAAQhCAAgPgVIgDgEIgCgMIACgGQAAgXAHgPIAXgyIAIgSQgCgdgKgjIgBgFQgDgVgJgYQAAgOgJgOIAAAAIAAAAIgGgIIgDAAQgGgHgKgJQgVgSAAgZQAAgfAdgVIAKgIIALgCIAAgBIAWgbIAAgHQAAgYAigXQASgNAIABQACgEAAgEIAAgCIAAAAIgCgrIAAgFIgDAAIgCAAQgCADgEgBQgQAAgXhBIgHgUQgcgDAAgOQAAgOAWACIAAgQIAAgTQABgLAEgLIAHgUIABgCIAAAAQAAgDAHgMIAMgQIAGgIIAAAAIABgGIgBgEQgDgKgCgLQAAgWAjgNQAIgHAQgFQAegJAnAEQAsAGAZARIAIAEQAVAQASAbQAIAKACAUIAAAhQAAAQgDAQIAAAAQgSATgBAkIgCgFIgFAHIgRAUIgUASQgWADAAAUQAAAHAEAGQAEALAKACQAEADAHABIABACIAGAAIAJAAIAHgBQAEgFAAgEIAAgMQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIgIAEQgDACgFAAQgMAAAAgOQAAgHADgFQABgIAJgFQALgHANAEIAGABIAEACIAAgBIAAgEIAIAMIAEAFQASARAAAZQAAAWgMAQQgVAbgyAAQg1AAgcghQgTgNgIgVIgBABIgBAGQgDAJAAAMQAAAMAIAWIADADIAFAHIACADIACACIALAOIABABIAAAAIABAAIAIAJIAEAGIAFAWQAJAQAAAQQAAALgCALIAAAEIABADIAAAGIAAAKQADAUgBAkIgBAcQACAJgCARQABAOgCALIgCAHQABAFAAAJQgBADg1A4IgCABQAmApAAAoIAAAPQACAQAAAKIAAAVQgDAQgRAAQgHAAgKgKgAgXDaIABAhIAKgMQANgTAIgJQgFgKgCgUIAAgEIABgdQgaAiAAAkg");
	this.shape_1.setTransform(-229.4,-342.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9E523F").s().p("ABAG1QgRADgjAAQhCAAgPgVIgCgEIgCgMIACgGQAAgXAHgPIAWgyIAIgSQgBgXgHgcQgMAGgfAHQgeAHgYADQg2ATgDAAQgHAAgDgDIgBABQgQAGgJAKQgDADAAAMQAAAIgLAAQgJAAgBgHQgBgEABgEQAAgXAegQQAXgMAFAKIARgIIAAgBQAAgGAigIQARgKAQgIQANgFAIgCQAMgIAWgLIAGgDIgGgQQAAgOgIgOIAAAAIgBAAIgFgIQgfgCgMgXQgIgPAAgSQAAgzA8gMIABgBIAjguQAMgPAMgLQAGgJAMgHIACgBIAAAAQADgGAAgGIAAgCIAAAAIgBgrIAAgFIgEAAIgCAAQgCADgEgBQgOAAgXhBIgHgUQgcgDAAgOQAAgOAVACIAAgQIABgTQAAgLAEgLIAHgUIACgCIAAAAQAAgDAHgMIALgQIAGgIIABAAIAAgGIgBgEQgDgKgBgLQAAgWAigNQAIgHAQgFQAfgJAnAEQAsAGAZARIAHAEQAWAQASAbQAHAKACAUIABAhQAAAQgDAQIAAAAQgTATgBAkIgBgFIgFAHIgRAUIgUASQgWADAAAUQAAAHADAGQAFALAKACQAEADAGABIACACIAFAAIAJAAIAIgBQADgFAAgEIAAgMQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIgJAEQgDACgEAAQgNAAAAgOQAAgHADgFQABgIAKgFQAKgHAOAEIAGABIAEACIAAgBIgBgEIAIAMIAEAFQATARAAAZQAAAWgNAQQgVAbgyAAQg1AAgcghQgTgNgJgVIgBABIAAAGQgEAJAAAMQAAAMAJAWIADADIAFAHIADADIABACIAMAOIAAABIABAAIAAAAIAGAHIAKAXIAIAQIACAXIAAACIAJARQAwBZAFAfIALAYQAAAKgIACQAAAHgSA3IgFASIgCARQgCANgDAHQADAGAAATQAAAIAKATQAKASAAAIQAAAHgFACQgBALgKAAQgUAAgJgoQgFgUAAgUQAAgKACgDQgBgGABgKIAFgmQAFgkAAgHQAAgbAGgTQgLgOgPgcIgVgmQgRAcgFAQQgdAjAAAmQgBATACASQAMANALATIADgFIAIASIAHAQIgDAEIAHAeQAJAoAAAUIAAAVQgEAQgQAAQgHAAgMgKg");
	this.shape_2.setTransform(-236.5,-342.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-271.5,-387.4,62.4,89.4);


(lib.kamienica_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kamienica();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.kamienica_1, new cjs.Rectangle(0,0,1330,811), null);


(lib.emailRamkaButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,102,102,0.008)").s().p("AkOEDIAAoFIIdAAIAAIFg");
	this.shape.setTransform(27.1,25.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.3,51.8);


(lib.emailbtn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C2662").s().p("AgKB6QgLgBgGgGQgGgHAAgJIADgVQADgPADghQAEguADgTQADgMAAgIQgbAMggAiIgTBYQgBALgJAFQgKAGgMAAQgVgBABgZIADgUIANhHIAIgtQAEgcALgQQALgQANAAQAKAAAHAIQAHAHAAAKIgGAUQAkgiAbABQAdABAJAYQAcgUAiABQAvACgCA5QAAANgDAUIgDA6IgDAsQgBAOgLAHQgJAHgLgBQgNAAgFgHQgFgHABgTIAIhmQABgkgHAAQgEAAgUAJQgTAJgGAFQgEARgDAuQgFA7gEAKQgEAJgIAFQgHAGgJAAIgBAAg");
	this.shape.setTransform(562.4,56.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C2662").s().p("AgWBqQgjgBgVgXQgVgYACgjQABgwAlgoQAlgqA3ACQAgACARAWQASAWgBAkQgCAygjApQgiAmgvAAIgDAAgAgXgeQgTAYgBAXQAAARAIAKQAIAKAPABQAYABAQgVQAQgVABggQABgjgagBIgCAAQgXAAgSAYg");
	this.shape_1.setTransform(536.7,55.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2662").s().p("AgMBtQgogBgYgWQgYgWACgiQABgsApgwQAqgwAqACQAVAAAaANQAZANAAAPQgBALgIAIQgKAJgLgBQgJAAgKgKQgKgJgXgBQgQAAgXAfQgZAfgBAVQAAAQALAKQAMALAWABQAMAAAUgKQAWgJAFAAQAJABAHAHQAFAHAAAIQgBARgjAOQghANgSAAIgDAAg");
	this.shape_2.setTransform(515.7,54.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C2662").s().p("AgEAbQgMgBgIgHQgIgIABgJQAAgKAMgJQALgJANAAQAMABAIAHQAIAGAAAKQgBALgMAJQgKAJgNAAIgBAAg");
	this.shape_3.setTransform(495.6,62.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C2662").s().p("AhNBrQgLAAgGgIQgFgIACgLIAZh+IAGgcQACgNADgGQAEgGAHgEQAGgDAJAAQAWABAAAWQAngZAqACQAgABgCAjQAAAIgCAJIgCANQgCALgIAJQgJAJgOAAQgVgBAAgTIACgGIACgUQgsAFgbAmIgSBgQgDALgIAHQgJAHgLAAIgBAAg");
	this.shape_4.setTransform(479.4,53.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2662").s().p("AgIBqQgugCgYgVQgZgVACgiQABgvAkgsQAjgsA3ACQAlABAVANQAUANgBAWQgBAWgQAOQgRAOgvAQIhGAbQAQAUAgABQAaABAUgJQASgJAKAAQARABAAAOQgBAXgfAOQgeANggAAIgFAAgAgrgMIAvgRQAagKAUgLQgLgHgVgBIgCAAQgiAAgZAug");
	this.shape_5.setTransform(457.5,52.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C2662").s().p("AA0BzQgXgBABgXQABgwAEgXQAEgXAIgbQADgLAAgEQAAgLgGAAQgTAAgVAUQgVAWgMAWQgLAWgEAjQgBARgCAHQgDAGgIAFQgIAHgMgBQgKAAgGgHQgGgFAAgKIACgVQADgWAMgsQAMgrACgRIAFgcQACgKAJgHQAJgGAMAAQAZABgEAeIAAACQAhgbAgABQAxACgCA4QgBAPgEAWIgDAMQgGAdAAAXQgBAagCALQgCALgJAIQgIAHgLAAIgCAAg");
	this.shape_6.setTransform(436.4,51.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C2662").s().p("Ag1CZQhHgCABgbQABgKAHgIQAIgJANABQAJAAAQAEQARAEAMABQAcABAQgRQARgRAKgmQgXATgdgBQgkgBgTgVQgTgVABgeQACg0AogqQAogpBCACQAlACAMASQAVADgBAUQAAALgMAgQgQArgNA0QgPBHggAbQgeAagzAAIgHAAgAgQhTQgWAbgBAhQgBAfAdABQANAAASgOQARgOAHgPQAHgPAQgyQgMgJgMAAIgCgBQgkAAgVAag");
	this.shape_7.setTransform(414.3,56.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2C2662").s().p("AghCUQgLgBgGgGQgHgGABgKIAGgnQAHgpALgmQAIgcABgPQADgKAJgIQAKgHAKAAQAKABAGAGQAGAGgBAKQAAAIgKAkQgJAlgFAiIgIAuQgCAMgKAGQgIAHgKAAIgBAAgAAUhaQgLgBgHgHQgGgIAAgKQABgNAKgJQAMgKANABQALAAAHAHQAIAIgBAKQAAANgLAKQgLAJgNAAIgCAAg");
	this.shape_8.setTransform(401,45.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C2662").s().p("AgcBsQgcgBgVgKQgVgKABgQQAAgZAbABQAJAAAQAGQARAHAIAAQApACABgSQAAgJgWgMQgogVgNgMQgOgNABgTQABgdAZgUQAagTBLADQAmABgBAXQAAANgHAOQgHAPgMAAQgUgBgBgRIgQgBQgwgCAAANQAAAIAYANQApAWANAOQANAOgBATQgBAdgcAUQgbATgrAAIgGgBg");
	this.shape_9.setTransform(383.7,49.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C2662").s().p("AgIBqQgugCgYgVQgZgVACgiQABgvAkgsQAjgsA3ACQAlABAVANQAUANgBAWQgBAWgQAOQgRAOgvAQIhGAbQAQAUAgABQAaABAUgJQASgJAKAAQARABAAAOQgBAXgfAOQgeANggAAIgFAAgAgrgMIAvgRQAagKAUgLQgLgHgVgBIgCAAQgiAAgZAug");
	this.shape_10.setTransform(362.5,49.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C2662").s().p("AgoCdQgpgBgWgZQgWgZABgiQACgzAkgoQAlgpA4ACQAcABAPANQARhHAIgWQAGgUAXAAQAWABgBAVQAAAKgVBOQgSA/gIAvQgIAugBAPQAAAKgCAFQgBAGgJAGQgIAGgKAAQgPgBgFgNQgaAPgdAAIgEgBgAg2ANQgSAYgBAZQgBATANANQAMANATAAQAZABAZgVQABgHANhAQgIgYgbgBIgEAAQgiAAgPAWg");
	this.shape_11.setTransform(341.9,43.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C2662").s().p("AgyAWQgNgBgIgFQgHgGAAgJQAAgKAMgIQAKgHAPABIBbABQANAAAIAGQAJAFgBAKQAAAKgIAHQgJAHgUABIhcgCg");
	this.shape_12.setTransform(316.7,46.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2C2662").s().p("AgMBtQgogBgYgWQgYgWACgiQABgsApgwQAqgwAqACQAVAAAaANQAZANAAAPQgBALgIAIQgKAJgLgBQgJAAgKgKQgKgJgXgBQgQAAgXAfQgZAfgBAVQAAAQALAKQAMALAWABQAMAAAUgKQAWgJAFAAQAJABAHAHQAFAHAAAIQgBARgjAOQghANgSAAIgDAAg");
	this.shape_13.setTransform(293.6,46.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C2662").s().p("AghCUQgLgBgGgGQgHgGABgKIAGgnQAHgpALgmQAIgcACgPQABgKAKgIQAKgHAKAAQAKABAGAGQAGAGAAAKQgBAIgJAkQgLAlgEAiIgIAuQgDAMgJAGQgIAHgKAAIgBAAgAAVhaQgMgBgHgHQgGgIAAgKQABgNAKgJQAMgKANABQALAAAHAHQAIAIAAAKQgBANgLAKQgLAJgNAAIgBAAg");
	this.shape_14.setTransform(279.8,41.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2C2662").s().p("AA8CkQgOgBgFgJQgFgJABgjQACgnAKgoQADgPAAgHQABgLgIAAQgigCgoA4QgOBKgLANQgLANgPAAQgKAAgHgIQgHgGAAgJQABgGAEgIQADgGAPhKIAUhlIACgGQAIgbAAgVQABgSAEgIQADgHAJgFQAIgFAJAAQAXABgBAfQgBAXgLAqIgIAlQAggaAmABQAaABAMAMQANAMgBAbIgBALQgKA2gCAxIAAAZQABAIgJAKQgKAJgNAAIgBAAg");
	this.shape_15.setTransform(260.7,40.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C2662").s().p("AhYCjQgLgBgGgGQgGgHAAgJIAQhNQAWhuAHhBQACgZAMgNQALgNAOABQALAAAGAIQAGAHgCAKIgBACQAcgNAaABQBDADgDBLQgCBEgjAgQgkAigsgBQgTgBgQgFIgPBPQgCAMgJAHQgIAHgLAAIgCAAgAgQhKIgOBPQARAGAQAAQAbABAOgWQAMgXABgfQACgfgVgBIgBAAQgYAAgdAWg");
	this.shape_16.setTransform(237.9,49.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C2662").s().p("AA5BtQgIAAgRgVQgmAQgTgBQhQgCAChKQADg8AsgmQAsgmAzABQATABAYAMQAXAMgBAOQAAAJgGAHQgHAPgGAeQgGAcgBAPQAAAJACADIAEATIAEATQAAAHgJAJQgJAIgMAAIgBAAgAgUgnQgaAYgBAlQgBAjAeABQAYAAAVgPQAFhIANgcQgGgEgFAAIgDAAQgcAAgXAWg");
	this.shape_17.setTransform(215.9,44.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C2662").s().p("AhNBrQgLAAgGgIQgFgIACgLIAZh+IAGgcQACgNADgGQAEgGAHgEQAGgDAJAAQAWABAAAWQAngZAqACQAgABgCAjQAAAIgCAJIgCANQgCALgIAJQgJAJgOAAQgVgBAAgTIACgGIACgUQgsAFgbAmIgSBgQgDALgIAHQgJAHgLAAIgBAAg");
	this.shape_18.setTransform(196.9,43.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C2662").s().p("Ag1CZQhHgCABgbQABgKAHgIQAIgJANABQAJAAAQAEQARAEAMABQAcABAQgRQARgRAKgmQgXATgdgBQgkgBgTgVQgTgVABgeQACg0AogqQAogpBCACQAlACAMASQAVADgBAUQAAALgMAgQgQArgNA0QgPBHggAbQgeAagzAAIgHAAgAgQhTQgWAbgBAhQgBAfAdABQANAAASgOQARgOAHgPQAHgPAQgyQgMgJgMAAIgCgBQgkAAgVAag");
	this.shape_19.setTransform(175,47.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C2662").s().p("AgcCrQhDgCgogpQgogpACg6QAChOA7g+QA6g/BUADQBBACApAlQAoAlgCA0QgCAygdAhQgeAig3gCQgbgBgWgbQgaAWgXgBQgbgBgQgPQgPgQAAgWQACgkAmgiQAmgjAqABQAVABAAAPQgBAMgHAHQgIAGgbAJQgWAGgJAMQgJAMgBAMQAAAEAEAFQACAEAFAAQANABANgNIATgYQAKgNAPABQARAAgBARQAAAGgHARIgBAGQAAAKAXABQAUABANgPQAMgOABgdQACgigcgXQgcgYgrgBQg6gCgmAsQgnAtgCA2QgBAoAaAcQAaAcAvACQAOAAALgCQAMgCAfgLQAJgDAHAAQAKABAHAGQAGAIAAAJQgBAXgqALQgmALgcAAIgHgBg");
	this.shape_20.setTransform(147,36.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C2662").s().p("AA5BtQgIAAgRgVQgmAQgTgBQhQgCAChKQADg8AsgmQAsgmAzABQATABAYAMQAXAMgBAOQAAAJgGAHQgHAPgGAeQgGAcgBAPQAAAJACADIAEATIAEATQAAAHgJAJQgJAIgMAAIgBAAgAgUgnQgaAYgBAlQgBAjAeABQAYAAAVgPQAFhIANgcQgGgEgFAAIgDAAQgcAAgXAWg");
	this.shape_21.setTransform(116.1,40.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2C2662").s().p("AgeCgQgMgBgGgIQgHgHADgMIA0kLQACgMAJgGQAKgGALAAQALAAAHAIQAFAHgCALIgyEBQgGAkgaAAIgBAAg");
	this.shape_22.setTransform(102,34.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2C2662").s().p("AgIBqQgugCgYgVQgZgVACgiQABgvAkgsQAjgsA3ACQAlABAVANQAUANgBAWQgBAWgQAOQgRAOgvAQIhGAbQAQAUAgABQAaABAUgJQASgJAKAAQARABAAAOQgBAXgfAOQgeANggAAIgFAAgAgrgMIAvgRQAagKAUgLQgLgHgVgBIgCAAQgiAAgZAug");
	this.shape_23.setTransform(83.4,39.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2C2662").s().p("AgUCeQgcgBgWgLQgIAHgKAAQgKgBgGgGQgGgGAAgJIAEgSIADgOIArjbQADgOAKgMQAJgMAOABQASAAgBARIgBAJQgDAIgBAFIgOBKQAegPAZABQAoACAWAaQAVAagBAkQgCA1goAlQgmAkgvAAIgEAAgAglAMIgQBSQAZANASAAQAbABAUgTQAVgUABggQAAgSgJgOQgKgMgVgBIgBAAQgUAAgjAUg");
	this.shape_24.setTransform(60.8,33.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2C2662").s().p("AA5BtQgIAAgRgVQgmAQgTgBQhQgCAChKQADg8AsgmQAsgmAzABQATABAYAMQAXAMgBAOQAAAJgGAHQgHAPgGAeQgGAcgBAPQAAAJACADIAEATIAEATQAAAHgJAJQgJAIgMAAIgBAAgAgUgnQgaAYgBAlQgBAjAeABQAYAAAVgPQAFhIANgcQgGgEgFAAIgDAAQgcAAgXAWg");
	this.shape_25.setTransform(37,37.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2C2662").s().p("AA8CkQgOgBgFgJQgFgJABgjQACgnAKgoQADgPAAgHQABgLgIAAQgigCgoA4QgOBKgLANQgLANgPAAQgKAAgHgIQgHgGAAgJQABgGAEgIQADgGAPhKIAUhlIACgGQAIgbAAgVQABgSAEgIQADgHAJgFQAIgFAJAAQAXABgBAfQgBAXgLAqIgIAlQAggaAmABQAaABAMAMQANAMgBAbIgBALQgKA2gCAxIAAAZQABAIgJAKQgKAJgNAAIgBAAg");
	this.shape_26.setTransform(15.2,31.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.008)").s().p("EgtxAF8IAAr3MBbjAAAIAAL3g");
	this.shape_27.setTransform(293.3,38.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3C3485").s().p("AgKB6QgLgBgGgGQgGgHAAgJIADgVQADgPADghQAEguADgTQADgMAAgIQgbAMggAiIgTBYQgBALgJAFQgKAGgMAAQgVgBABgZIADgUIANhHIAIgtQAEgcALgQQALgQANAAQAKAAAHAIQAHAHAAAKIgGAUQAkgiAbABQAdABAJAYQAcgUAiABQAvACgCA5QAAANgDAUIgDA6IgDAsQgBAOgLAHQgJAHgLgBQgNAAgFgHQgFgHABgTIAIhmQABgkgHAAQgEAAgUAJQgTAJgGAFQgEARgDAuQgFA7gEAKQgEAJgIAFQgHAGgJAAIgBAAg");
	this.shape_28.setTransform(562.4,56.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3C3485").s().p("AgWBqQgjgBgVgXQgVgYACgjQABgwAlgoQAlgqA3ACQAgACARAWQASAWgBAkQgCAygjApQgiAmgvAAIgDAAgAgXgeQgTAYgBAXQAAARAIAKQAIAKAPABQAYABAQgVQAQgVABggQABgjgagBIgCAAQgXAAgSAYg");
	this.shape_29.setTransform(536.7,55.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3C3485").s().p("AgMBtQgogBgYgWQgYgWACgiQABgsApgwQAqgwAqACQAVAAAaANQAZANAAAPQgBALgIAIQgKAJgLgBQgJAAgKgKQgKgJgXgBQgQAAgXAfQgZAfgBAVQAAAQALAKQAMALAWABQAMAAAUgKQAWgJAFAAQAJABAHAHQAFAHAAAIQgBARgjAOQghANgSAAIgDAAg");
	this.shape_30.setTransform(515.7,54.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3C3485").s().p("AgEAbQgMgBgIgHQgIgIABgJQAAgKAMgJQALgJANAAQAMABAIAHQAIAGAAAKQgBALgMAJQgKAJgNAAIgBAAg");
	this.shape_31.setTransform(495.6,62.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3C3485").s().p("AhNBrQgLAAgGgIQgFgIACgLIAZh+IAGgcQACgNADgGQAEgGAHgEQAGgDAJAAQAWABAAAWQAngZAqACQAgABgCAjQAAAIgCAJIgCANQgCALgIAJQgJAJgOAAQgVgBAAgTIACgGIACgUQgsAFgbAmIgSBgQgDALgIAHQgJAHgLAAIgBAAg");
	this.shape_32.setTransform(479.4,53.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3C3485").s().p("AgIBqQgugCgYgVQgZgVACgiQABgvAkgsQAjgsA3ACQAlABAVANQAUANgBAWQgBAWgQAOQgRAOgvAQIhGAbQAQAUAgABQAaABAUgJQASgJAKAAQARABAAAOQgBAXgfAOQgeANggAAIgFAAgAgrgMIAvgRQAagKAUgLQgLgHgVgBIgCAAQgiAAgZAug");
	this.shape_33.setTransform(457.5,52.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3C3485").s().p("AA0BzQgXgBABgXQABgwAEgXQAEgXAIgbQADgLAAgEQAAgLgGAAQgTAAgVAUQgVAWgMAWQgLAWgEAjQgBARgCAHQgDAGgIAFQgIAHgMgBQgKAAgGgHQgGgFAAgKIACgVQADgWAMgsQAMgrACgRIAFgcQACgKAJgHQAJgGAMAAQAZABgEAeIAAACQAhgbAgABQAxACgCA4QgBAPgEAWIgDAMQgGAdAAAXQgBAagCALQgCALgJAIQgIAHgLAAIgCAAg");
	this.shape_34.setTransform(436.4,51.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3C3485").s().p("Ag1CZQhHgCABgbQABgKAHgIQAIgJANABQAJAAAQAEQARAEAMABQAcABAQgRQARgRAKgmQgXATgdgBQgkgBgTgVQgTgVABgeQACg0AogqQAogpBCACQAlACAMASQAVADgBAUQAAALgMAgQgQArgNA0QgPBHggAbQgeAagzAAIgHAAgAgQhTQgWAbgBAhQgBAfAdABQANAAASgOQARgOAHgPQAHgPAQgyQgMgJgMAAIgCgBQgkAAgVAag");
	this.shape_35.setTransform(414.3,56.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3C3485").s().p("AghCUQgLgBgGgGQgHgGABgKIAGgnQAHgpALgmQAIgcABgPQADgKAJgIQAKgHAKAAQAKABAGAGQAGAGgBAKQAAAIgKAkQgJAlgFAiIgIAuQgCAMgKAGQgIAHgKAAIgBAAgAAUhaQgLgBgHgHQgGgIAAgKQABgNAKgJQAMgKANABQALAAAHAHQAIAIgBAKQAAANgLAKQgLAJgNAAIgCAAg");
	this.shape_36.setTransform(401,45.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3C3485").s().p("AgcBsQgcgBgVgKQgVgKABgQQAAgZAbABQAJAAAQAGQARAHAIAAQApACABgSQAAgJgWgMQgogVgNgMQgOgNABgTQABgdAZgUQAagTBLADQAmABgBAXQAAANgHAOQgHAPgMAAQgUgBgBgRIgQgBQgwgCAAANQAAAIAYANQApAWANAOQANAOgBATQgBAdgcAUQgbATgrAAIgGgBg");
	this.shape_37.setTransform(383.7,49.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3C3485").s().p("AgIBqQgugCgYgVQgZgVACgiQABgvAkgsQAjgsA3ACQAlABAVANQAUANgBAWQgBAWgQAOQgRAOgvAQIhGAbQAQAUAgABQAaABAUgJQASgJAKAAQARABAAAOQgBAXgfAOQgeANggAAIgFAAgAgrgMIAvgRQAagKAUgLQgLgHgVgBIgCAAQgiAAgZAug");
	this.shape_38.setTransform(362.5,49.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3C3485").s().p("AgoCdQgpgBgWgZQgWgZABgiQACgzAkgoQAlgpA4ACQAcABAPANQARhHAIgWQAGgUAXAAQAWABgBAVQAAAKgVBOQgSA/gIAvQgIAugBAPQAAAKgCAFQgBAGgJAGQgIAGgKAAQgPgBgFgNQgaAPgdAAIgEgBgAg2ANQgSAYgBAZQgBATANANQAMANATAAQAZABAZgVQABgHANhAQgIgYgbgBIgEAAQgiAAgPAWg");
	this.shape_39.setTransform(341.9,43.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3C3485").s().p("AgyAWQgNgBgIgFQgHgGAAgJQAAgKAMgIQAKgHAPABIBbABQANAAAIAGQAJAFgBAKQAAAKgIAHQgJAHgUABIhcgCg");
	this.shape_40.setTransform(316.7,46.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3C3485").s().p("AgMBtQgogBgYgWQgYgWACgiQABgsApgwQAqgwAqACQAVAAAaANQAZANAAAPQgBALgIAIQgKAJgLgBQgJAAgKgKQgKgJgXgBQgQAAgXAfQgZAfgBAVQAAAQALAKQAMALAWABQAMAAAUgKQAWgJAFAAQAJABAHAHQAFAHAAAIQgBARgjAOQghANgSAAIgDAAg");
	this.shape_41.setTransform(293.6,46.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3C3485").s().p("AghCUQgLgBgGgGQgHgGABgKIAGgnQAHgpALgmQAIgcACgPQABgKAKgIQAKgHAKAAQAKABAGAGQAGAGAAAKQgBAIgJAkQgLAlgEAiIgIAuQgDAMgJAGQgIAHgKAAIgBAAgAAVhaQgMgBgHgHQgGgIAAgKQABgNAKgJQAMgKANABQALAAAHAHQAIAIAAAKQgBANgLAKQgLAJgNAAIgBAAg");
	this.shape_42.setTransform(279.8,41.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3C3485").s().p("AA8CkQgOgBgFgJQgFgJABgjQACgnAKgoQADgPAAgHQABgLgIAAQgigCgoA4QgOBKgLANQgLANgPAAQgKAAgHgIQgHgGAAgJQABgGAEgIQADgGAPhKIAUhlIACgGQAIgbAAgVQABgSAEgIQADgHAJgFQAIgFAJAAQAXABgBAfQgBAXgLAqIgIAlQAggaAmABQAaABAMAMQANAMgBAbIgBALQgKA2gCAxIAAAZQABAIgJAKQgKAJgNAAIgBAAg");
	this.shape_43.setTransform(260.7,40.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3C3485").s().p("AhYCjQgLgBgGgGQgGgHAAgJIAQhNQAWhuAHhBQACgZAMgNQALgNAOABQALAAAGAIQAGAHgCAKIgBACQAcgNAaABQBDADgDBLQgCBEgjAgQgkAigsgBQgTgBgQgFIgPBPQgCAMgJAHQgIAHgLAAIgCAAgAgQhKIgOBPQARAGAQAAQAbABAOgWQAMgXABgfQACgfgVgBIgBAAQgYAAgdAWg");
	this.shape_44.setTransform(237.9,49.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3C3485").s().p("AA5BtQgIAAgRgVQgmAQgTgBQhQgCAChKQADg8AsgmQAsgmAzABQATABAYAMQAXAMgBAOQAAAJgGAHQgHAPgGAeQgGAcgBAPQAAAJACADIAEATIAEATQAAAHgJAJQgJAIgMAAIgBAAgAgUgnQgaAYgBAlQgBAjAeABQAYAAAVgPQAFhIANgcQgGgEgFAAIgDAAQgcAAgXAWg");
	this.shape_45.setTransform(215.9,44.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3C3485").s().p("AhNBrQgLAAgGgIQgFgIACgLIAZh+IAGgcQACgNADgGQAEgGAHgEQAGgDAJAAQAWABAAAWQAngZAqACQAgABgCAjQAAAIgCAJIgCANQgCALgIAJQgJAJgOAAQgVgBAAgTIACgGIACgUQgsAFgbAmIgSBgQgDALgIAHQgJAHgLAAIgBAAg");
	this.shape_46.setTransform(196.9,43.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3C3485").s().p("Ag1CZQhHgCABgbQABgKAHgIQAIgJANABQAJAAAQAEQARAEAMABQAcABAQgRQARgRAKgmQgXATgdgBQgkgBgTgVQgTgVABgeQACg0AogqQAogpBCACQAlACAMASQAVADgBAUQAAALgMAgQgQArgNA0QgPBHggAbQgeAagzAAIgHAAgAgQhTQgWAbgBAhQgBAfAdABQANAAASgOQARgOAHgPQAHgPAQgyQgMgJgMAAIgCgBQgkAAgVAag");
	this.shape_47.setTransform(175,47.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3C3485").s().p("AgcCrQhDgCgogpQgogpACg6QAChOA7g+QA6g/BUADQBBACApAlQAoAlgCA0QgCAygdAhQgeAig3gCQgbgBgWgbQgaAWgXgBQgbgBgQgPQgPgQAAgWQACgkAmgiQAmgjAqABQAVABAAAPQgBAMgHAHQgIAGgbAJQgWAGgJAMQgJAMgBAMQAAAEAEAFQACAEAFAAQANABANgNIATgYQAKgNAPABQARAAgBARQAAAGgHARIgBAGQAAAKAXABQAUABANgPQAMgOABgdQACgigcgXQgcgYgrgBQg6gCgmAsQgnAtgCA2QgBAoAaAcQAaAcAvACQAOAAALgCQAMgCAfgLQAJgDAHAAQAKABAHAGQAGAIAAAJQgBAXgqALQgmALgcAAIgHgBg");
	this.shape_48.setTransform(147,36.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3C3485").s().p("AA5BtQgIAAgRgVQgmAQgTgBQhQgCAChKQADg8AsgmQAsgmAzABQATABAYAMQAXAMgBAOQAAAJgGAHQgHAPgGAeQgGAcgBAPQAAAJACADIAEATIAEATQAAAHgJAJQgJAIgMAAIgBAAgAgUgnQgaAYgBAlQgBAjAeABQAYAAAVgPQAFhIANgcQgGgEgFAAIgDAAQgcAAgXAWg");
	this.shape_49.setTransform(116.1,40.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3C3485").s().p("AgeCgQgMgBgGgIQgHgHADgMIA0kLQACgMAJgGQAKgGALAAQALAAAHAIQAFAHgCALIgyEBQgGAkgaAAIgBAAg");
	this.shape_50.setTransform(102,34.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3C3485").s().p("AgIBqQgugCgYgVQgZgVACgiQABgvAkgsQAjgsA3ACQAlABAVANQAUANgBAWQgBAWgQAOQgRAOgvAQIhGAbQAQAUAgABQAaABAUgJQASgJAKAAQARABAAAOQgBAXgfAOQgeANggAAIgFAAgAgrgMIAvgRQAagKAUgLQgLgHgVgBIgCAAQgiAAgZAug");
	this.shape_51.setTransform(83.4,39.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3C3485").s().p("AgUCeQgcgBgWgLQgIAHgKAAQgKgBgGgGQgGgGAAgJIAEgSIADgOIArjbQADgOAKgMQAJgMAOABQASAAgBARIgBAJQgDAIgBAFIgOBKQAegPAZABQAoACAWAaQAVAagBAkQgCA1goAlQgmAkgvAAIgEAAgAglAMIgQBSQAZANASAAQAbABAUgTQAVgUABggQAAgSgJgOQgKgMgVgBIgBAAQgUAAgjAUg");
	this.shape_52.setTransform(60.8,33.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3C3485").s().p("AA5BtQgIAAgRgVQgmAQgTgBQhQgCAChKQADg8AsgmQAsgmAzABQATABAYAMQAXAMgBAOQAAAJgGAHQgHAPgGAeQgGAcgBAPQAAAJACADIAEATIAEATQAAAHgJAJQgJAIgMAAIgBAAgAgUgnQgaAYgBAlQgBAjAeABQAYAAAVgPQAFhIANgcQgGgEgFAAIgDAAQgcAAgXAWg");
	this.shape_53.setTransform(37,37.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3C3485").s().p("AA8CkQgOgBgFgJQgFgJABgjQACgnAKgoQADgPAAgHQABgLgIAAQgigCgoA4QgOBKgLANQgLANgPAAQgKAAgHgIQgHgGAAgJQABgGAEgIQADgGAPhKIAUhlIACgGQAIgbAAgVQABgSAEgIQADgHAJgFQAIgFAJAAQAXABgBAfQgBAXgLAqIgIAlQAggaAmABQAaABAMAMQANAMgBAbIgBALQgKA2gCAxIAAAZQABAIgJAKQgKAJgNAAIgBAAg");
	this.shape_54.setTransform(15.2,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_27},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,591.7,80.6);


(lib.drzwiUchyloneDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.DrzwiUchylone0004();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.drzwiUchyloneDown, new cjs.Rectangle(0,0,234,264), null);


(lib.DrzwiUchylone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(1));

	// Layer 2
	this.instance = new lib.DrzwiUchylone0001();
	this.instance.parent = this;

	this.instance_1 = new lib.DrzwiUchylone0002();
	this.instance_1.parent = this;

	this.instance_2 = new lib.DrzwiUchylone0003();
	this.instance_2.parent = this;

	this.instance_3 = new lib.DrzwiUchylone0004();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,234,264);


(lib.Drzwi1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Drzwi10001();
	this.instance.parent = this;

	this.instance_1 = new lib.Drzwi10002();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Drzwi10003();
	this.instance_2.parent = this;

	this.instance_3 = new lib.Drzwi10004();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,234,264);


(lib.DrzwiGlowa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.drzwiglowapng0001();
	this.instance.parent = this;

	this.instance_1 = new lib.drzwiglowapng0002();
	this.instance_1.parent = this;

	this.instance_2 = new lib.drzwiglowapng0003();
	this.instance_2.parent = this;

	this.instance_3 = new lib.drzwiglowapng0004();
	this.instance_3.parent = this;

	this.instance_4 = new lib.drzwiglowapng0005();
	this.instance_4.parent = this;

	this.instance_5 = new lib.drzwiglowapng0007();
	this.instance_5.parent = this;

	this.instance_6 = new lib.drzwiglowapng0008();
	this.instance_6.parent = this;

	this.instance_7 = new lib.drzwiglowapng0009();
	this.instance_7.parent = this;

	this.instance_8 = new lib.drzwiglowapng0010();
	this.instance_8.parent = this;

	this.instance_9 = new lib.drzwiglowapng0011();
	this.instance_9.parent = this;

	this.instance_10 = new lib.drzwiglowapng0012();
	this.instance_10.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,234,264);


(lib.cma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cma
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9C18C").s().p("AgJAcIgIgLQgSgbAXgYQAMANAAAYQAAAKAKAEQAiAOgmAEIAAAAIgCAAQgHAAgGgHg");
	this.shape.setTransform(-248.1,-97.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A78672").s().p("AgSBDIAAgGIAAAAQAlgEghgOQgKgEAAgKQAAgZgNgMQgXAXASAdQAFAMAMAKQgIgBgFgIIgDgEQgDgCgBgDQgDgGgBgJQgDgUADgRQAZgFgRgSIAAABIgDACIADgJQABAEACAEQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAgBQAJgEABgFIABACIAEAAQATgFgKgKQACgFgIgJIgDABIgDADIAJgJQAHALAEANQAIgJAMgHQAOARgFAXIgEgIQgOACgGALIABABQAOAFAGgBIgDAIQgEgFgJACQgEAAAAAEQACASAQgNIABABIAIgEQANAIAEAIQAFAFgCAHIgBgBQgDgHgHAAIADgDIAAgCQgDgGgFgBIgCgDIgDAAIACACIgEABQgEAAAAAEQABAJAEACIAAABQADAVARgOQgIANgmAQQgMAGgHAAIgCgBgAAOgvQgMAGADALQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAbgDgPgRIgEACgAgfgvIgCABIAIgKQgEAFACAIIgEgEg");
	this.shape_1.setTransform(-245.6,-100);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6A4040").s().p("AgYA9QgLgKgGgMIAJALQAGAHAJAAIAAAGIAAADIAAABIgHgGgAAfAWIAAgBQgEgCgBgKQgBgEAFAAIAEAAIgCgCIADAAIACACQAFABACAHIABABIgDADQAHAAADAIIAAABIAAABIgBACQgHAFgFAAQgHAAgBgMgAAGgEQgBgFAFAAQAIgCAEAGIACADIABACIgCABQgGAFgEAAQgGAAgBgKgAgygJQgEgNALgHIAEgBIAAgBQAQASgZAEIgBAAIAAABIgBgBgAAFgRIAAgBQAFgMAPgBIAEAIQADAHgGADIgDAAQgGAAgMgEgAgkgeQgDgEAAgEIAHgMIAAAAIADgBIADADQgCgHAEgFIACgCIABgBIAEgCIADgBQAIAIgCAFQAIALgRAFIgEAAIgBgCQgCAFgIAEIgDABIgBgBgAgYguIAAABIAAgBIAAAAgAAGgiQgCgLAMgGIAEgDQAPASgbADIgBAAIgBgBg");
	this.shape_2.setTransform(-245.7,-99.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#994B2B").s().p("AAAAAIAAAAIAAAAIAAABIAAgBg");
	this.shape_3.setTransform(-248.2,-104.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B99693").s().p("AgPA2IgFgLQgPgrARgyIABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQABgGAEgFIACAVIAEAUIAAAAIACAKQAFAFgCAGIAEAMIAKAXIAEAJIAHANIAAAAIgJgHQgVgRgJggQgEgLAAgMQgCAcAEAeIADATIAAACQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgEgHg");
	this.shape_4.setTransform(-249.6,-91.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9E6F69").s().p("AgrA0IAFAEIAEAHQAAAAABAAQAAAAAAgBQAAAAABAAQAAgBgBAAIAAgCIACgBQAKgLgPgIIAAABQgEgeACgcQABAMADALQAJAgAWARIgBAGQgKgKgHgKQgIAOgEARQgGgJgEgKgAADAqIAAAAIgDAGIgFgJQADgIgCgGIADAAIABgCQACgIgCgEIABgCIACgCQABAJAOAAQABASARgIIAAgBIAAgHIAIACIABgCQAGgLgNgDIAAABQgFADgBADIgFgEIABAAIABgCQAFgKgLgFIgDABQgFABAAAGIAAABQgDgEgEgDIgCABIgBADQgCgFgEgDIAAAAQgOAJAJAKIgDAAQgFACAAAFIAAABIgBABIgEgMQACgGgFgFIgDgKIAAAAQAKgNgNgHIgDgVQgDAFgCAGQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBAAQgRAxAQAsQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAABQgRgtATg4QACgFAEgCIABgLIADgBIACANIAAgGQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIALAMIgLgHQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAABQAPArAnACIAAgCIgDgDIABAAQAoAYgQAQQgBADgCABIgBADIgCAAIgBABQgJABgEAHQgIgFgFgIIAAACQAAgGgJgFIgCACQgNASAVACIABgBIACgGQAAAMgCANQgCgIgHgGgAgRgbQgFACABAFQgCAPAOgFIABgBQAFgMgLgFIgDABg");
	this.shape_5.setTransform(-247.3,-91.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6A4040").s().p("AAJBCQgOgDAAgIIAAgGIAJAHIAAAAIgGgNIADgGIAAAAQAHAGACAIQABAGgBAHIAAACgAgmAjIAAgBQAPAIgKALIgCABIgDgTgAgsAvIgBgCQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAFALIgFgEgAgQALIABgBIAAgBQgBgFAFgCIADAAQgIgKANgJIAAAAQAFADACAFIAAgDIACgBQAFADADAEIAAgBQgBgGAFgBIADgBQALAFgFAKIgBACIgBAAIAFAEQACgDAEgDIAAAAQANACgFALIgBACIgIgCIAAAHIgBABQgQAIgCgSQgOAAgBgJIgBACIgBACQABAEgCAIIgBACIgCAAQACAGgDAIIgKgXgAAUADIABAAIgCAAgAABANIADgCQAIAFABAGIAAAEIgDAGIgBABQgUgCAMgSgAgXgZQAAgFAFgCIADgBQALAFgFAMIgBABIgGACQgIAAABgMgAgeg/QAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAMAHQAUAPARAUIACADIAAACQgngCgOgrgAgegqQANAHgJANIgEgUg");
	this.shape_6.setTransform(-247.1,-91.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#994B2B").s().p("AAAAAIABAAIgBAAg");
	this.shape_7.setTransform(-245.1,-90.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250.9,-106.7,10.5,13.9);


(lib.BG_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG_1, new cjs.Rectangle(0,0,2990,1195), null);


(lib.szczur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sczur
	this.instance = new lib.Wygenerujklatkipośrednie39("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-192.9,155.1,1.001,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({scaleX:1,rotation:-30,x:-211.8,y:156.1},2).to({scaleY:1,rotation:-1.1,x:-233.9,y:171.8},3).to({scaleX:1,scaleY:1,rotation:-0.3,x:-339.4,y:172},11).to({scaleY:1,rotation:29.7,x:-348.7,y:171.1},1).to({scaleX:1,scaleY:1,rotation:-0.2,x:-372.1,y:159},3).to({scaleX:1,scaleY:1,rotation:0,x:-400.8,y:158.1},3).to({_off:true},6).wait(190));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.oknootw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// parapet
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D4F4F").s().p("AnsBRIgriGIADABQgEgHACgHQACggAegMIAsCAQINATHVALIAAACQgCACAAADQAAAAAAABQgBAAAAAAQAAABAAABQAAAAAAABQgFAIgEAJQgHANgIAJQgDAGAAAHQnPgDoXgbg");
	this.shape.setTransform(50.1,111.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB7777").s().p("AH1BSQnUgLoNgTIgsiAIgCgEIAPAAIAFAAIA7ABIBDACICNADQEPAHEBAPIAFAAICBAIICAAHIgjB3IgDAAg");
	this.shape_1.setTransform(53.5,107.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(5));

	// what I can do
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6CBDA4").s().p("AHLBfQgQgBgIgNQgJgNAAgUQAAgRAGgNQAGgPAKgHQAKgHAMAAQAOABAJALQAKAMgBAUQAAARgGAPQgGAPgKAHQgJAIgLAAIgBAAgAHMANQgEAFgDAMQgEALAAAMQAAAKADAGQADAFAEAAQAEAAAFgFQAEgFADgKQAEgMAAgNQAAgKgCgFQgDgFgFAAQgFAAgEAEgAGMBcQgFAAgDgDQgEgDgCgEQgDgEAAgHQgEAGgEAFIgIAGQgFACgEAAQgLgBgHgNQgGgMAAgPQABgSAGgQQAHgPAKgIQAJgIALABQAHAAAEACQAEADADAGIAHgbIgPgBIAEgUIANgBIASgGIAHABIgYB0IAAABIgBAFIABAEIADABQACAAAFgGIAHANQgEAIgHAEQgGAEgFAAIgBAAgAFvAKQgEAFgFAMQgEALAAAMQABAHACAFQACAEAEAAQADAAAFgFQAFgEAFgNQAGgOACgRQgGgIgFgBQgGAAgFAGgAD/BUQgIAAgEgHQgFgHAAgIIACgPIAFgfIABgHQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQgEADgFAJQgEAIgDAKQgDALgEAVIgCAPIgVgBIAMhMIgKAAIACgTQAOAAANgHIAGAAIgDATQAEgHAFgEIAHgFQAFgCAEAAQAIAAAGAIQAEAIAAAJIgBAGIgBAHIgEAhIgCAIIABADIACABQAEAAAFgHIAGAOQgGAJgGADQgEAEgGAAIgBgBgACfBRQgEAAgEgDQgDgCgCgEQgDgFgBgFIgHAKQgEAEgEABQgEACgFAAQgHAAgGgGQgFgFgEgKQgCgJAAgNQABgbAMgRQANgTARABQAGAAAFADQAEACAFAHIAFgJIAQABIgNBDIAAAJIAAADIACABIAEgBIAFgFIAHANQgGAJgFADQgGAEgFAAIgCAAgAB8AHQgHAOABARQAAAHACAFQADAFADAAQAEAAADgEQAFgFAEgNQAGgNACgTQgDgDgDgBIgFgDIgBAAQgIAAgGANgAAuBMQgPgBgIgMQgIgNAAgTQAAgQAGgPQAGgNAMgJQALgIAMAAQAMABAHAJQAHAJgBALQAAAHgCAFQgDAEgFAAQgDgBgCgCQgDgCgCgDIgBgHIgCgFIgCgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgDAAgEAEQgFAFgEALQgDALAAALQAAAJADAGQAEAFAGAAQAFAAAGgDQAHgDAGgGIAHAPQgSAUgSAAIgBAAgAhdBCIAEgTIADAAIAGgBIACgDIACgJIAMhMIACgGQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBgBgFgBIgEAAIAEgUIAvADIgEATIgEAAIgFABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAIgCAKIgMBOIgBAFQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAFABIAEAAIgEAUgAi2A5QgFgIABgLIABgPIAHgqIgQgBIAEgRQAHgCAFgEQAEgEAEgIQAEgIADgKIAQABIgGAjIAUABIgEATIgUgBIgHAtIgBAJIABAFQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQACAAAEgEQAEgDAFgIIAJAMQgJAQgHAFQgGAFgJAAQgIgBgHgIgAjeA/QgFAAgDgDQgEgCgDgEQgCgFgBgFIgHAKQgEAEgEABQgEACgFAAQgHAAgGgGQgFgFgDgKQgDgJAAgNQABgaAMgSQANgTAQABQAHAAAEADQAFACAEAHIAGgJIAQABIgNBDIgBAJIABADIADABIADgBIAFgFIAHANQgGAJgGADQgFAEgFAAIgBAAgAkCgKQgGANgBARQABAHACAFQADAFACAAQAEAAAEgEQAFgFAFgNQAFgNADgSQgEgEgDgBIgFgDIgBAAQgIAAgGAOgAlHA0QgFgHABgJIABgPIAFgbIABgLQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgFAAgFAHQgIAIgGAQQgFAPgDARIgCAPIgWgBIAUh4IgKgBIADgTQANgBAOgGIAHAAIgLBBQAEgIAFgEIAJgFQAEgCAFAAQAHABAEADQAFADACAGQACAGAAAHIAAAEIgBAHIgGAjIgBAHIABAEIACABIAEgBIAFgGIAHAOQgHAJgFAEQgGADgFAAQgIgBgFgGgAm0A1QgHAAgDgEQgFgEgDgGQgBgEAAgHIgJANQgEAGgEACQgFACgFAAQgIAAgEgIQgGgHABgKIAAgGIABgIIAHgnIgKAAIADgUIAOgCQAHgCAHgEIAGABIgMBDIgBAHQAAABAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAQAAAAABAAQACAAAEgFQAFgIAFgOQAFgPADgZIACgLIAVABIgKBAIgBAHQABADABADQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAIAAAGgOQAIgPAAgMIgBgHIgBgHIgCgHIgBgFQAAgIAEgEQAEgEAEAAQADAAADADQADAEABAFQACAFgBAJQAAAVgHATQgHAVgMALQgJAKgKAAIgBgBg");
	this.shape_2.setTransform(52.8,95.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#224D3F").s().p("AHLBfQgPgBgKgNQgIgNAAgUQABgRAFgNQAFgPALgHQAKgHAMAAQAOABAJALQAKAMAAAUQgBARgGAPQgGAPgKAHQgJAIgLAAIgBAAgAHMANQgEAFgDAMQgEALAAAMQAAAKADAGQADAFAEAAQAFAAAEgFQAFgFADgKQADgMAAgNQAAgKgCgFQgDgFgFAAQgFAAgEAEgAGMBcQgEAAgEgDQgEgDgCgEQgCgEgCgHQgCAGgFAFIgJAGQgEACgFAAQgLgBgGgNQgGgMABgPQAAgSAGgQQAGgPAKgIQAKgIAMABQAGAAAEACQAEADAEAGIAFgbIgOgBIAEgUIAOgBIARgGIAHABIgXB0IgBABIAAAFIAAAEIADABQACAAAGgGIAHANQgGAIgGAEQgGAEgFAAIgBAAgAFwAKQgGAFgDAMQgFALAAAMQAAAHADAFQACAEADAAQAFAAAEgFQAFgEAFgNQAFgOADgRQgGgIgFgBQgFAAgFAGgAD/BUQgIAAgEgHQgFgHAAgIIACgPIAFgfIABgHQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQgDADgFAJQgEAIgDAKQgDALgDAVIgDAPIgWgBIANhMIgLAAIADgTQANAAAOgHIAGAAIgDATQAEgHAFgEIAIgFQAEgCAEAAQAIAAAFAIQAFAIAAAJIAAAGIgBAHIgFAhIgCAIIABADIACABQAEAAAEgHIAHAOQgHAJgFADQgEAEgGAAIgBgBgACgBRQgFAAgDgDQgEgCgDgEQgCgFgBgFIgHAKQgEAEgEABQgEACgFAAQgHAAgGgGQgFgFgDgKQgDgJAAgNQAAgbANgRQANgTAQABQAHAAAEADQAFACAEAHIAGgJIAQABIgNBDIgBAJIABADIADABIADgBIAFgFIAHANQgGAJgFADQgGAEgFAAIgBAAgAB8AHQgGAOAAARQAAAHACAFQADAFADAAQADAAAEgEQAFgFAFgNQAEgNAEgTQgEgDgDgBIgFgDIgBAAQgIAAgGANgAAtBMQgNgBgJgMQgIgNAAgTQAAgQAGgPQAGgNALgJQALgIANAAQAMABAHAJQAHAJAAALQAAAHgEAFQgDAEgEAAQgDgBgCgCQgDgCgCgDIgBgHIgCgFIgCgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgDAAgEAEQgFAFgDALQgFALAAALQAAAJAFAGQADAFAGAAQAFAAAGgDQAGgDAHgGIAHAPQgSAUgSAAIgCAAgAhdBCIAEgTIADAAIAGgBIACgDIACgJIANhMIABgGQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQgCgBgEgBIgEAAIADgUIAvADIgDATIgEAAIgFABQgBAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAIgCAKIgMBOIgBAFQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAIAGABIAEAAIgDAUgAi1A5QgGgIAAgLIABgPIAHgqIgPgBIAFgRQAGgCAEgEQAFgEAEgIQAFgIADgKIAPABIgGAjIATABIgDATIgUgBIgHAtIgBAJIABAFQAAAAABABQAAAAABAAQAAABABAAQAAAAAAAAQADAAAEgEQAEgDAFgIIAJAMQgJAQgHAFQgGAFgJAAQgIgBgGgIgAjfA/QgEAAgEgDQgDgCgCgEQgDgFgBgFIgHAKQgEAEgEABQgEACgFAAQgIAAgFgGQgGgFgDgKQgCgJAAgNQAAgaANgSQANgTARABQAFAAAGADQAEACAFAHIAEgJIARABIgMBDIgBAJIABADIABABIAEgBIAFgFIAIANQgHAJgGADQgFAEgFAAIgCAAgAkCgKQgHANAAARQAAAHADAFQACAFADAAQAEAAAEgEQAFgFAEgNQAGgNACgSQgDgEgDgBIgFgDIgBAAQgIAAgGAOgAlHA0QgFgHAAgJIACgPIAFgbIABgLQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQgFAAgGAHQgGAIgGAQQgGAPgDARIgCAPIgWgBIAUh4IgLgBIAEgTQANgBAOgGIAGAAIgLBBQAFgIAFgEIAIgFQAFgCAFAAQAGABAFADQAEADACAGQADAGAAAHIgBAEIAAAHIgGAjIgBAHIABAEIACABIADgBIAGgGIAHAOQgHAJgGAEQgFADgFAAQgIgBgFgGgAm0A1QgGAAgFgEQgEgEgDgGQgBgEAAgHIgJANQgEAGgFACQgEACgFAAQgIAAgEgIQgFgHAAgKIAAgGIACgIIAGgnIgLAAIAEgUIAOgCQAHgCAHgEIAGABIgMBDIgBAHQAAABAAABQAAABAAAAQABABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAABABAAQAAAAAAAAQAEAAACgFQAGgIAFgOQAEgPAEgZIACgLIAWABIgLBAIgBAHQAAADACADQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAHAAAIgOQAGgPABgMIgBgHIgCgHIgCgHIAAgFQABgIADgEQAEgEADAAQAEAAADADQADAEABAFQACAFAAAJQAAAVgIATQgHAVgMALQgJAKgKAAIgBgBg");
	this.shape_3.setTransform(51.3,97);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(5));

	// okno
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7D4F4F").s().p("AnsBRIgriGIADABQgEgHACgHQACggAegMIAsCAQINATHVALIAAACQgCACAAADQAAAAAAABQgBAAAAAAQAAABAAABQAAAAAAABQgFAIgEAJQgHANgIAJQgDAGAAAHQnPgDoXgbg");
	this.shape_4.setTransform(50.1,111.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BB7777").s().p("AH1BSQnUgLoNgTIgsiAIgCgEIAPAAIAFAAIA7ABIBDACICNADQEPAHEBAPIAFAAICBAIICAAHIgjB3IgDAAg");
	this.shape_5.setTransform(53.5,107.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7D4F4F").s().p("AE2JYIAphiQBMizAViIQA7nMn8gbQkkAyhrCfQBDjbFShBQghgPgigwQgKAMgWgHQgOgEgMgHQgLgHgHgJIgBgIQgCgLAGgHIACgFQAGgMAOgEIAFgCQAKAAAJACQAEABADACIACgSQAFgXAOgNQgDgIAEgHIAEgGIAFgGQAIgKAKgEQAKAAAJACQAFABAEADIABAEQgBADgDACIgBAAIgCABIgGADIgNAEIgCACQgFAGAAAHQAAAEgEAEIADANIAFgCQAPgFAKgHIANABQAEAAADACQAHAGACAHIAAAKIgCAcQgDAUANAJIADgDQAHgGADgGIAHgQIABgCIAAgEQADgSASgKQAMgGANgCQAFgBAFAAIAKALIAHAGIABAWIABAFQgFgCgDgDIgEgHIgEgIQgMgFgOAIQgKAIgHAJIABAGQACASgMANQgKAKgLAFIgKgBQgJgBgGgIIgKgLIAAgIIAAgSIAAgXQAAgGgBgGQgDAAgDABIgeAOQAAARgEAVQgFAiAeAUQBFAwA7g4QAMgMAJAPQgfAogfANQGcAtANFWQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAIACAEIAAABIAmARQAdADAVANIAIACQAAgBAAAAQABAAAAAAQABAAAAAAQABAAABABIADABIAMACQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIATACQAiACAZgQQAJgGAGgHIgBADIgEALQgFAJgHAKQgEAXgZARQgXAQgggBIADgXIABgEIgIgDIgcgLIg/gWQgJAHgJgDQgDAcgEAfQgXCKhMCxQgnBWgjBTIgFAAgAhin3IgLAHIgEADIAAALIgDADQgEAFAEAEQASARAaABQgKgUAAgWQgDAFgFADIADgGQAGgJgMgDIgFABgAmqI9IgHgQQhsjZgXinIgJhJIg4ACQg6AAgDhEQgGhDgLhEQgDgVAFgTQgBgKABgLQAEgiAXgUQgMAaAEAeIASCGQAGBEA9gCIA5gEQAAABABAAQABAAAAgBQABAAAAAAQABAAAAgBIAEAAIAWgHQAegHAfgFIANgHQAIgEAJABIACgDQgCAHgFAGQAKADAIAIIACADIgIADQg7AYg/ATIAGAhQAXCnBuDaQATAoAVApIhDgCgAnqI8IABAAIAEAAIgFAAgAGFlJIgBgBQgEgCgBgEQgDgHAAgHQgBgIAEgIIAEgDIACgCIACgBIAEgCIABAAQAQAAgHALQgFAHAAAJIABABIAEAEIADADIADgBIABAAQAHADAIgFIACAEIABAEIgDAIIgFAKIgBABIgHAAQgPAAgKgOgAlSlYIgHgDQgFgEABgHQAAgIADgFQADgFAFgDIAHAHIAEAEQAFACAHgBIABgDIABgCQAFABAFgCIAKACQAAAHgDAFQgEAFgBAGQgJAHgMAAQgIAAgIgDgAFLl6QgGgIABgJIgBgEIABgPQAAgJAKgBIACAAIgCAIIAAADQACAHAGAEIAAAAIABADIACAHQAHADAHAEQAGAEgDAFQgHAHgIAAQgJAAgJgJgAkSmPQgMgJACgPQACgKAJgBIAFACQgCAGAFADQAAAGAHACIANADIAHgIQAEgDAFABQAFABAEAEIACADIgFAHIgKAMIgEADQgGACgGAAQgNAAgMgJgADzmVQgNgKACgOQADgEAFgBIgCgDQgCgEAAgGIAAgHIAAgEIADgDIAIgIIAEgDIAFgCQAQAAgHAMIgCACQgDAEAAAGIgCAJQgCAHgEACQAEADADAEIAIAJQAKAAAFgLIADgGQAHgDAJAAIABAAQAIAQgUAPQgMAJgLAAQgMAAgMgJgAAnmfQgEgIABgKQAAgKAKgBQAFAAAEACQAGABAEAEQAFAEABAHIAAADIgBAEIgDAHQgEAHgHAAIgFABQgJgDgDgIgAjamxQgGgGgDgIQgDgKAEgJIAEgDIACgCIACgCIAEgBIABAAQAPAGgBAQQgBALAOgEQAIgDABgJIAIgFIAAAAQAFABAEAEIACADQABAJgEAFQgHAJgIAIIgDACIgEACQgUgBgPgNgACNmvQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAIAOgGQANANALgOQAGgIAFgKIAAgBQABgDgBgFIgBgDQgDgIgGAAIgBAAQgEgEgFgBQgKABADAHQgFAAgDgEIAAgEQABgEADgDQAHgGAIgBIABgBIATABQAEAAADACQAIAOAAAPQABAfgfANQgIACgHAAQgNAAgLgKgABWndQgOgBAEgOIAAgDIABgEIACgDIACgBIAEgBIABAAQAFAAAEABQAGACAEAEQAGAEAAAHQAAAFgFACQgHADgIAAIgFgBgAgcnyQABgKAJgBQATAHgNALQgGAEgEAAQgGAAAAgLg");
	this.shape_6.setTransform(50.2,42.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BB7777").s().p("AHOHfQAgh+AdiMQAAAAAAgBQAAAAABAAQAAAAABgBQABAAABAAQAWA5gEA2QgDAkgPAiQgTAtgoApIgDABIgDAAgAKFgmIgFgLQgHgFgMADQgLADgGgKQgEgJAEgJQAIgPAPgCQBCACgTA4QgBADgDACQgFACgEAAQgKAAgGgKgAqkhhIgBgCQAmgdA5gKQAQgBAHAPIACAEQgeAoglAAQgYAAgcgRgAG7jLIhlh4QgIgJASgBQCaBCA6CXQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQg6gRg+hJgAFrjMIgDgBQgIgGABgJQABgIAIABIAAgBIAJAGQAFACADAEQAEAGgFAFQgFACgEAAIgGgBgAlWjrIgKgCQgFADgFgCQgFgCgFgGIgFgIIAAgDIAAgEQABgDADgCIAFgDIABgBIAUABIAGACIACAEIAEAHQADAFgCAGIgCAIIgEAAIgCAAgAEukHIgHgDQgGgEgCgHIAAgDIACgIIACgCIAFgCIABgBQAHADAIgBQAIAAABAIIABAIQAAAFgFAEQgEADgGAAIgFAAgAg0kcQgQgFgCgPQAAgFACgCIgBgBQgGgMAGgNQACgFAFgBQAKADACALQACAJAEAKQACAEgCADIAEAEQAEAGgEAFQgDAFgFAAIgEgBgAk5kfIgBAAQgFgDACgGIAAgBIAAgDIACgHQADgGAGgCIAJgDQAIABAGAEQAHAEgBAJQAAAFgEAFIgGACQgHACgHAAQgGAAgGgBgADWkqIgCgHIgBgIIAAgBQAAgGADgEIACgCIACgCIACgCIACgBIAEgBIABgBQAJgBAGAHQADAEAFACQAKADACAKQgCAIgHAAIgBAAQgJAAgHADIgGAEQgDADgHAAIgGgIgABrkwIAAAAQgCgIAGgGQAJgJgFgMQgDgIAKgBQAFABAEAEIABAAQAEADADAGQACAFABAFIAAABQgFAKgGAIQgGAHgGAAQgFAAgHgGgAAZk4QAAgMAGgJQACgEAEgBIAEABQAEAAACACIAHAHIADAEIgBAHQgCAEgDADQgGAEgFAGQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgNgCABgMgAj0lAIgCgEIgBgIIAAgHIAAgIIAEgDIANgFIAIgDQAXgDgIATQgEAKgHAGIgIAGIgCAAQgDACgEAAQgEAAgFgCgAiglPQgCgFAAgFIAAgBIAAgLIAEgDIALgGIAFgCQAMADgGAJIgDAGQgDAHgCAIQgBAHgHAAQgFgDgDgEgABMlsIgBgGIgBgVIgHgHIgKgLIgEgDQgcgFggAEIAAABIAAAEIAAALQgBAIADAHQAFAMgGAKIgBAAQgRACgCgRIgBgQIAAgKIAAgEIAAgTIABgEIAEgEIAEgDQgRACgSAIQgOAHgKgLQAAgEABgCQAEgGAGgDIAGgDIACAAQAHgDAFgEQAEgDACgDQAJgOAOgEQAfADAgAIQAWAGAPAOQAJAJAHANQAIAQgHAPIAAAEQADARABASQAAANgMAEQgOgIgCgSg");
	this.shape_7.setTransform(55.1,28.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A06767").s().p("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gFADQgDADgBADIgBADIAAAEIAFAIQAFAFAFADIAAACIgBADQgHABgFgCIgEgEIgIgHQgFADgCAFgAk3mvQgCAPALAJQARAOAUgHIAEgDIALgMIAEgHIgCgDQgEgEgEgCQgFAAgEADIgHAIIgOgDQgGgCAAgGIABAAQAMADANgEIAGgCQAEgFABgGQABgIgHgEQgHgEgIgBIgJADQgGACgDAGIgCAGIAAAEIAAABIgFgCQgJABgBAKgAjxniIgFABIgBACIgDACIgDADQgEAJADAKQACAIAGAGQAQANATABIAFgCIADgCQAIgIAGgJQAFgFgCgJIgCgDQgEgEgEgBIgBAAQAIgGAEgKQAHgTgXADIgHACIgOAGIgEADIAAAHIAAAIIABAIIADADQAIAFAIgEIABgBQAAAJgJADQgOAEABgLQACgQgQgGIAAAAgADvmoIgHgJQgDgEgEgDQAEgCABgHIADgJIAAABIAAAIIACAHIAHAIQAGgBAEgDIAGgDIgEAGQgEALgKAAIgBAAgAiPneQgEgEAEgFIACgDIAAAAQAAAGADAFQACAEAFADQAIAAABgHQABgJADgGQAFgDADgFQABAWAKAUQgagBgSgRgACgneQgCgGgFgDQAHAAACAIIABADQACAFgCADQAAgFgDgFgAgIn8IADgcIABAQQACASAPgCIABAAQAGgLgFgMQgCgGAAgIIAAgLIAAgEIAAgBQAhgEAcAEIAEAEQgFAAgFABQgMACgNAGQgSAKgDASIAAAEIgBACIgHAQQgDAGgHAGIgCADQgMgJACgUgAgPovQgDgCgDAAIgPgBQgKAHgPAFIgEACIgDgNQADgEAAgEQAAgHAGgGIACgCIANgEQgGADgEAFQgCADAAADQALAMAOgHQARgIAQgCIgDADIgEAEIAAAEIgBATIAAADQgBgHgIgGgAgkpQQADgCABgDIAIgCQgFAFgIACIABAAg");
	this.shape_8.setTransform(53,43.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(5));

	// skrzydlo l
	this.instance = new lib.Wygenerujklatkipośrednie53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.3,59.6,1,1,0,0,0,-30,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).to({regX:-30.3,regY:-2.6,scaleX:0.25,rotation:-6.6,x:0.2,y:59.5},3).wait(1));

	// skrzydlo p
	this.instance_1 = new lib.Wygenerujklatkipośrednie57("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(97.9,63.4,1,1,0,0,0,27,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:26.9,scaleX:0.17},4).wait(1));

	// za okn
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4F3137").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_9.setTransform(50,61.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.6,-19.1,145.2,141.3);


(lib.graficiarkaodpowiada = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{koniec:100});

	// dymek
	this.instance = new lib.Wygenerujklatkipośrednie80("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(359.6,65.8,0.057,0.031,0,0,0,-23.8,138.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({regX:-24,regY:138,scaleX:1,scaleY:1.11},4,cjs.Ease.get(1)).to({regY:138.1,scaleX:1.06,scaleY:0.95},3,cjs.Ease.get(1)).to({regY:138,scaleX:1,scaleY:1.02},3,cjs.Ease.get(1)).to({scaleY:1},2,cjs.Ease.get(1)).to({_off:true},61).wait(4));

	// graficiarka
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AB8681").s().p("AgKACQAEgJAGgHQADgEABgEIADABIAGADIAAABIgGALQgFAGgDAGIgGAPIgFABQgBgLADgJg");
	this.shape.setTransform(365,166.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DD8892").s().p("AAUAgQgFgDgDgGQgBgEAAgFQAAgFAFAAIADADIACAGQABAEAEACQADABgBADIAAACQgBAEgDAAIgEgCgAgNgRIgCAAIgGgDIgEgEIgCgDQAAAAgBgBQAAgBAAAAQABgBAAAAQAAAAABgBIADgCIACABIADABIAEADIAEAEIABABIABADQgBADgDAAIgBAAg");
	this.shape_1.setTransform(317.9,118.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CB4553").s().p("AAOAwQACgDgDgDIgGgIIgHgHQgEgDgFAAIgBAAIAAAAQACgDACgEQADgKAGgHQAFgGAHgDIAAACIAAACIADAFIADAEIAHAJQACADAFABIABgBIgKAKQgHAHgCAIIgCAHgAACAHQAAAFACAEQACAGAGADQAFAEACgGIABgBQAAgEgDgBQgDgCgBgEIgCgGIgEgDQgEAAgBAFgAgegJIgDgCIgBgCIgBgJQAAgFABgDIAFADIAFAEQgEAFAAAKgAgTgeIgDgEIgEgEIgDgBQAEgFAHgCIACgBQgCAFAEADIAFAEIgHAEIgCABIgBAAg");
	this.shape_2.setTransform(318.8,118.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A72E3A").s().p("AAIAyIgBgBIgBgCQgBgEACgDIAFgIQACgEAEgCQAEgCACgDIAAAAIAMABIAAABIAAACIAAACIAAACIAAABIAAACIAAACIAAACIgCACIgGAGIgGADIgEAEIgKgBgAAJAKIgGgIIgDgEIgDgGIAAgCIAAgBIADgDQAGgCAAgCIAAAAQACAGAGAHIAJALIAEAEIgGAAIgCACIgCACIgBABQgEgCgDgDgAghgpQgDgEABgEQAGgBAGAAIACACIAEADIAAAAIgBABIgCABIgIAGIgFgEg");
	this.shape_3.setTransform(320.6,119);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#755E80").s().p("Ag0C7QgCgCAAgEIAAAAIAAgBIABgFQACgCADgBIACAAIAAgBIADACIADABIABACIABACIAAAEIAAABIgBADIgDADIgEACIgGgEgAg6CdIgFgBIgCgCIAAAAIgBgCIAAgCIABgCIABgCIAEgDIAAAAIAEgCIAKABIABAAIACABIAEAEIABADIgBACQgBADgDABQgFACgFAAIgFgBgAg4CDQgHgKACgQIAAgEIAEgoIAAgDIAAgBQgBgKgCgIQgEgMgKgKQgIgIgDgHIgBgHQAAgDACgDIgCABIgBAAIgBgFIgBgBIgDgSIgBgEIgBgEIgDgNQgCgJAAgJIAAgGIgBgBIgCgCIgBAAIgBgCIgBgIIAAgBIAAgBIAAgCIgBAAQABgEADgDQACgDABgEIgBgBIgCgCIgBgBIgFgDIAAgBIgBgMIABgBIAAgKQgBgHADgGIAGgNIABgCIgCgEIgGgGQgCgCABgDQABgEADgBIADgBIAGADIAGAFIAFAGIADAIQAAAEgDAEIgGAIQgEAGABAGIgBALIAAABQAEAEAEAGQADAGgBAHQgCAGgEAFQAGAGAAAJQAAALAEAKQADAKAAAMQAAAMgFAKIABgBQAIAFAIAGQAIAIAGAMQALAWgCAYQgBAXACAYQACAPgHAJIgFAGQgDgEgCgEgABkBSIgGgVIgDgOQgEgMgHgKIgBgBIgCgFIgGgPIAAAAIABgCIACgCIAEAAIAAAAQALAFAHAMQAFAMAEANIABAEIAAABIABABQACAPABAPIAAABQgCADgFACIgDgCg");
	this.shape_4.setTransform(353,144.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5F4B67").s().p("AgpDPQADgDAAgEIgBgCIgBgCIAAgBIACACIAFABIAEAAIABgBIAAACIgBAEIABACQgDgDgEADIgIAEIACgCgAg4DAIAAABIAAABIgCABIACgDgAgtC5IgDgBIAAAAIgCABIAAgCIABAAIAHACIAAABIAAABIgDgCgABQCvIAGgJQADgEgBgEIgDgKIABgCIABgDIAFgBQgBgQgDgRQgJg0gagvQgZgtgVgwIgKgaIgCgHIgBgEIgCgDQgEgHgCgIIAAgCIgDgEIgCgGIgBgGIABAEIAGgFIAJgKIAKgIIADgDQABAZAGAZQAOAzAUAyIATAsIAGAOIACAFIAMAfIADAGIAGAWQAGAWABAXIAAgBIgEAAIAAAAIgEABQgCABgCACIgBABIgBACIAAACQAAAKAKACIAEACIAAAEIABACIACACIAGABIgBACIAAABIgWAAQgCAAgDADIAAACIAAABIgCACQgBgEgDgDgAg+CZIACgFIABgDIABgBQACAEADADIAFgFIABAFIAAAEIgBgBIgKAAIgEACIAAgDgAhGBWQgKgbgEgdIgDgQQADAHAIAIQAKAKAEANIACAOIABADIAAACIAAACIgEApQgCgOgFgOgAhTgDIgBABQAFgKAAgLQAAgMgDgKQgEgKAAgLQAAgJgGgGQAEgGACgGQABgHgDgGQgEgGgEgDIAAgCIABgLQgBgGAEgFIAGgJQADgDAAgFIgDgHIgFgGIgGgFIgGgEIgDABQgDACgBAEQgBADACACIAGAGIACAEIgBABIgGAOQgDAGABAHIAAAKIgBAAIAAgLIgBhPIATAMQAeASAegDIgFADIgGAGIgEAGIgJAQIgBACQgCAJAAAKIgDgBIAAAAIgDABIgCAAIgBABIgCACQgDAKAAALQgBAsAEAqIAEAbQgIgHgIgEgAhagCIABADIABAAIACgBQgCADAAADIgCgIgAhlgwQgDgLgBgLIABABIACACIABABIAAAFQAAAKACAJIADAMIgFgSgAhthUIgBgVIAAAAIAFADIABABIACACIABACQgBAEgCADQgDADgBADIgBAAgAAcizIADABIABAAIAAAAIgBADIgCgCIAAACIgBgEgAAHjLIAEgBIAAACIgEgBg");
	this.shape_5.setTransform(353.2,142.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#48394F").s().p("Ag+DaIgCgFIAAgBIADgEIACgFIACgBQAAADADADIAFAEIAFgDIACgCIABgEIAAACIACACIAAABQAAAEgDADIgCACIAAABQgHACgEAAQgEAAgDgCgAgiDPIgFgBIgCgDIAAgBIAAgDIgBgCIgBgCIAAgBIAAgBIgHgCIgBAAIgBgDIgBgCIgGgGIgCgCQAHACAIgEQADgBABgCIABgCIgBgEIgDgEIgCAAIgBgDIgBgGQAHgJgCgQQgCgXABgXQACgZgKgVQgGgMgJgJIgDgaQgFgrABgsQAAgLADgJIACgDIABgBIACAAIADgBIAAAAIADABIAAADIAAAGQACA3AKA1QAJA1ACA3IACAkIABATIAEAjIABAHIABAEIgBACIgEAAgABsCyIgDgCIgBgCIABgDIgFgCQgKgDAAgKIAAgCIABgBIABgCQACgCADgBIADgBIAAAAIAEAAIABABQgCgXgFgWIACABQAFgCACgCIAAAbQgBAQACANIgCAAIAAAAQADACABADIACAAIgBACIABADIACAEIABACQgCAEAAADIgFgBgAhFCuIABAAIAAABgABZBLIgNgeIABABQAIAKADALIADAPIgCgHgAg9BKIgCgOQADAIAAAKIgBgEgABmA/QgEgNgFgMQgGgNgMgGIAAABIgEABIgCABIgBADIAAAAIgSgsQgVgygNgzQgHgYAAgZIgEACIgKAIIgJAKIgGAGIgBgFIgBgEIAAgCQgBgGgDgCIAEgEQAFgFADgFIACgDIgBgBIgDgBIAAgBIgBACIAAAAQgIACgGADIAAABIAAgBIgBABIgCABQgeADgegRIgTgMIgBgQIAAgEIAGAEQAhAQAjAFIAEgBIACACIASABIATAAIgBgDIAEAAIAEABIAAgBIAAAAIAJgBIAEgBIAPgBIAAAAQgDAIgBAHIAAADIgDAKIgBAAIgDAAIABADQgFAhALAiQATA4AdA2QAPAaAGAeIgBgDg");
	this.shape_6.setTransform(353.2,142.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#744755").s().p("AABCqQgLgEgMgHQgIgFgJgDQgJgDABgJQABgEADgCQACgDADgBQAMACAKAGQAJAFAJAEQAMAEANABIAYADQAIABACAJQgOAMgSAAQgNAAgPgGgAi8AvQALgPAUgPIAagUQAcgaAVghIACgDQATggAPghIACgEIAEgHQALgLAKgNQAHgGAJgEQADAjgdAvQgaAoghAlQggAjgiAfQgaAXgSAaQgIgaASgagACFhPQgNgHgPgGQgNgGgIgLQgHgKAJgHQACgDADgBQAJAJAKAIIAGADQAOAGAPAFQALAEALACIAUAFIAJADQADABACAEQgOAMgSAAQgRAAgTgLg");
	this.shape_7.setTransform(347.6,100.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#59373F").s().p("AgXDTIAAAAIAAAAgAg0DKIACAAIAAABIgCgBgABTC/IADgBIAAACIgDgBgAgDC6QgFgHgJgBIgVgEIgIgDIgOgHQgRgKgMgMIgIgJIgCgCIgDgFIgFgHIAKgIQAjgUAWghQAWgiAVgeIgBgEIgCgDIgEgEIgHgDIAAABQgaANgQAbQgPAagYAPQglAYgnARQglAQgVAaIAEAGQgRAAgRgDIgFgHQgHgIAAgJIAAgTQAAgLAHgHQAHgIABgHQAWgKAUgPQgSAaAIAaQASgaAagXQAigfAggjQAhglAagoQAegvgEgjQgJAEgHAGIACgCQAIgLALgIIABAAIADgBIAAgBIADgCQAMgIANgEIAVgIQAHAJABALIABAQIABAEQADAIAGAHQADADAAAEQAGAKAIAIQgDABgCADQgJAHAHAKQAIALANAGQAPAGANAHQAnAWAdgXQgCgEgDgBIgJgDIAFgCIAeABQAMgDAMgEIAOgFIAEgHQATgXgSgZQgQgUgWgRIABgBQBDATgDA/IgCAWQgGAEgEAIIgQAcQgQAYgYAPIgrAcIgeAAIgEgCIgEgHIgJgPQgFgLgNABQgFAAgFADQgYgqgSgrIAAgCQABgFgCgEIgEgKQgBgGgDgFIgHgKQgCgEABgFIgEgHIgCgFQgEABAAAEIAAAFIABAIIACAIQABAEADACQADAEAAAEIAAAGIABACIACACIADAEIABADIAAACIAAACIAAACIAAACIAAACIAmBSQAJATAOAPQAFAHAHAGQALAKANAEIAAABQgCADABAGQAEATgIASQgJAVgOATQgNAUgSARIgkACQgHAAgEAGIgEAHIAAABQgLAAgKgCgAhCCFQgDACgBAEQgBAJAJADQAJADAIAFQAMAHAMAEQAkAOAXgUQgCgJgIgBIgYgDQgMgBgMgEQgKgEgJgFQgKgGgMgCQgDABgCADgACyg6IABgCIABgBIgCgBIAAAEgAhYCoIAAgCIAAgBIAAgBIAAgEIADACIgBAAIgBACIgBACIABACgAkFChIAAAAIAAgBIgCgBIAAgBIgCgGIAFAHIACACIgCABIgBgBgACeBMQAAgKgDgIIAGABIgEAXIABgGgAh+giQALgOAKgOQgVAhgcAaIAcgfgAhCiLIADgCIgEAHIABgFg");
	this.shape_8.setTransform(349.9,100.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D6B0A0").s().p("AjHETIgBgDIAAgDIABgDQABgDADgCQADgDAFgCIADgBIADgCIADAAIADABIAAAAIACACIACACIABACQgBADgCACQgFAGgHAEIgFACIgDAAQgDAAgDgCgAC6hzQgGgGgBgJIgBgTIAAgRQgBgJAJgBIAEABIACACIAAACQgDAEABAIIADATQABALAFAJIgBABIgCACIgCACIgDABIgFgBgACSjlIgFgBQgBgGAAgHIABgOIAAgKIAFgFIABgBIABgCIAAAAIADgBIAFAAIADABIADACIACAEIgBABIABABIACACIAAAGIAAAHQABADgDADIgFADIgFAFQgFADgCAFIAAABIgBAAgAC4j4IgCgDIgBgCIAAgCIABgCIABgCIABgBIADgCIAEgCIACABIAEABIABAAIABABIACACIAAACIgBAEQgCAEgDACIgEABQgEAAgDgCg");
	this.shape_9.setTransform(337.2,90.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A06456").s().p("AhqBKIgCgCIABgDIADgGIABgCIAAgCIAAgCIAAgCIAAgCIACgBIACgCIADgEQABgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBIgBgCIgBAAIgKAEQgGACgCAGQgCAFgFgDIgCgEQgBgGAGgDIAEgEQADgCAEgBIANgFIgegDQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAIAAgCIAAgCIAFgDIADgFIACgCIgFgCIgFgCIAAgCIACgDIAFgFIAAgDIgDgCIgBgCIgBgBIACgEQACgEAEgDQACgBgEgGIAAgBQACgDACgBIAFABIAFADQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAIABAGIgBACIAAABIAGACIADADIABAEIAAACIgBABIgBABIgEACIgCACIAAABIAHgFQAJgEAHgGIABAAIACgBQANgBgHAHQgFAFgHADIgHACIANABIAFACIAAACIAAACIgCACIAAACIgBACIgBAEIgNABIAFABIAEACIAAACIAAACIAAABIADAAIADABIACADQgBAEgEABQgFAAgEABIABACIACACIABACIAAABIAAACIAAACIgCACIgEACIgCACIgCACIAAACIAAABIAAACIAAACIAAACIgBACIgCACIgEADIgDADIgCABIgDgBgAB3AnIgEgVQgEgOgIgMQgKgRgQgKIgVgMIAAgCIAAgBIAFgEIACgDIAAgBQgHgBgGADIgHAEIgHAEQgEADgEgCIgBgCQgBgHAHgFQAFgDAGgCIAOgEIAKgDIAAgBIASABIAEACIAAACIAAACIgEADIgGADIgBABIAEACIADABIACABIAAACIAAACIgCABIgIAEIAAABQAIADAFAGIAOASQAHAJAFAKQAGAKAEAMQAEANgCAMIgDAAQgGAAgBgIg");
	this.shape_10.setTransform(372.2,59.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#885549").s().p("ACbB9QgMgQgJgRQgIgOgCgOQgDgMgEgMIgCgBQgEAAgCADQgDADABADQAAADgBADQgCADABAEIAAAGIgBAAQgFgIgDgJQgFgRAGgSQAHgTgPgQQgNgOgLgQIgCgBIgDgBIgmgBIgIADIgGABIgCABIABACQgGACgFAAIgBgHIgDgHIgDgGIgBAAIAEgHQABgFAEgEIAEgDQAfgkA0gPQABAEAGADQAKAFAIAIIANAMIAIAKIgDAAIgNABIgBACIgBABQADAFAFADQgCAFAJAIQAIAGAEALQAEAKAAAKIgBgBIgFgEQgDADgBADQgCAGAIAJQAMANACAPQADAOgBAPIAAAGQgFAHABAMIACAaQAAALAFAKIAHAVIAAAAIgKgLgABBhhIAAABIgDADIgEAEIgBABIAAACIAVAMQAQAKALARQAHANAEAOIAFAUQABAKAIgCQACgLgEgNQgDgMgHgLQgFgKgGgJIgOgSQgFgGgIgDIgBgBIAJgEIABgBIABgCIgBgCIgBgBIgDgBIgFgCIABgBIAGgDIAEgDIABgCIAAgCIgFgCIgRgBIAAABIgLADIgNAEQgHACgFADQgHAFABAHIABACQAFACAEgDIAGgEIAHgEQAGgCAGAAIACAAgAikBMIAAgHIgBgIIAAgCIAGgDQANgHAJgLQAJgNgIgOIgIgMIgDgBIgMgBIgBgEQADgDACgGIAIgdQADgQgCgPQgBgNgIgHIAJgIIgCACIAhAFIAIACIABAAIgGABQgGABgGACQgEACgBAEIAAACQAMAEAPgGQAUgJARAOIARANQAEACADAAIADACIgDAEIgBABIABAEIADAGIABAFIAAAGIAAAEIAFADIACABIADACIABABIABACIgCADIgCgCIAAABIgDAAIgCACIgGAEIgCABQABAJgEAGQgGALgLAHQgQALgQAFIACADIAIAEIAGADQgCAEgFACIgMADQgFABAAAFIADACQAGAEAGACIAFABIgIAHQgIAGgKABQgNABgBAKIACABIAAABQgWgFgWgOgAheABIABACQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgEAEIgCACIgCABIAAACIABACIAAACIgBACIAAACIgEAGIAAADIABACIADABIADgBIADgDIADgDIACgCIABgCIABgCIAAgCIAAgCIgBgBIABgCIACgCIACgCIAEgCIABgCIABgCIAAgCIgBgBIgBgCIgBgBIgCgCQAFgBAFAAQAEgBABgEIgDgDIgCgBIgEAAIABgBIAAgCIAAgCIgFgCIgFgBIANgBIACgEIAAgCIABgCIABgCIAAgCIAAgCIgEgCIgNgBIAGgDQAHgDAFgFQAHgHgMABIgDABIAAAAQgIAGgIAEIgIAFIABgBIACgCIAEgCIABgBIABgBIAAgCIgBgEIgEgDIgGgCIABgBIAAgCIAAgGQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAIgEgDIgFgBQgDABgCADIAAABQAFAGgDABQgDADgCAEIgCAEIAAABIACACIADACIgBADIgEAGIgCADIgBACIAFACIAFACIgCACIgDAFIgEADIgBACIAAACQABAAAAAAQABABABAAQAAAAABAAQAAAAABAAIAdADIgNAFQgEABgDACIgEADQgFADABAGIABAEQAGADACgFQACgGAFgCIALgEgACmAaIAAAAIAAADIAAgDgAgdhEIAAABIgBAAQACgEAEgCIgEAGIgBgBgABoiHIAGACIgBABIgFgDg");
	this.shape_11.setTransform(372,63.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6F453C").s().p("AiFBzIAAAAIgCgBQABgLANgBQAJgBAIgGIAIgGIgEgCQgHgCgGgDIgCgDQAAgEAFgBIAMgEQAEgBADgEIgHgDIgHgFIgDgDQAQgFARgLQAKgHAHgLQAEgHgBgIIACgCIAGgDIACgBIACgBIAAAAIACABIADgCQAJAAAKgFIAQgGQAEAcgMAiQgHASgOAOQgmAlgrAAQgKAAgKgCgACSBFIgCgCIgDADIAAgHQABgPgCgNQgDgQgLgNQgIgIACgGQAAgEAEgDIAEAFIABABQABgLgFgKQgEgKgIgHQgIgHACgGQgFgDgDgEIAAgCIACgBIANgCIADAAIgJgJIgMgNQgJgIgJgFQgGgDgBgEIAFgBQAHgCAHACIAFAEIABgBQBDAmgBBOQgBASgFAQIgDAJIAAgBIgBADIAAABIgCAGIgCALIAAABIAAABIAAABgAg2gtQgDABgEgDIgRgMQgSgOgTAIQgPAHgNgFIAAgCQABgEAFgCQAFgCAHAAIAGgBIgBgBIgIgCIghgEIACgCIAJgGQA/goAzA2IAHAIIABABIgKAOQgDACgCADQgEAAgCACIgCACIgDgCg");
	this.shape_12.setTransform(373.4,61.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B28A7E").s().p("AjXFAIAAgIIAAgBIAAgCIABgHIABADQAEAEAFgCIAEgCQAIgEAFgGQACgCAAgDIgBgCIgBgCIgCgBIgBgBIAMgEIACADIACAGIABADQAAAAAAAAQAAABgBAAQAAABAAABQAAAAAAABIABADIAAAAQAAgCgHgCIgEABIgGADIgCACIgFAFIgIAGIgFAHIgDAIIAAABQgCgEAAgEgAjWEpIABgBIgBAEIAAgDgACghMIgDgGIAAgBQADgCgBgFIAAgYIgBgYQABgJgEgGIgGgFIgCABIgJgIQgEgEgGgCIAAgBQgHgBgDgKIgBgHIgDgJQgBgLACgLIABgGIgBgDIAAgBIgCgFIABgBIACgBIAAgCIgBgCIgGgGIgGgFIgCgBIAAgCIgCgCQAGgBAFABIATACIADgBIACgCIAAgCIAAgBIACgCIACgCQAEgIADgHIACgEIAAAAQACAEAEADIAFAFQAFAEACgEIABgBQABgDgDgEIgDgDIgFgEIgEgDIgBAAIgBAAIAAgBQAJgTAOgQQAJALgBAPQgBAQgIANIAAABQgEAHgBAFQgBAGAAAGQAEAAADgBIABAEIAAABIgCAAIgBABIgBABIgCACIgBACIgBABIAAACIADAEIABABIgCABIgBABIgBACIAAACIABACIADADQAFAEAGgDQADgCABgEIABgEIAAgBIgCgCIgBgBIABgBIAAABQAFADACAFQADAIgFAHQgGAHgJAGIgKADIAAgBIgCgBIgDgCIgDABIAAABIgBABIgBABIAAACIAAACQABAGAGACIgBAAIgBAJIAAAKQABABAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQACgDABgDQAJAQAVAIIgCADQgEAIAAAIIAAAEQABAFADAFIAHAJIAAABIACAAIABABIABABIADAEIAFAEIAAABQgEACgDAGIgBAAIgCACIAAABIgFAAQgIACgJAAQgMAAgMgFgACkiIIAAARIAAATQABAJAHAHIAEAAIAEgBIACgBIABgDIABgBQgEgJgBgLIgEgTQAAgIADgDIgBgDIgCgCIgDgBQgKACACAIgACGj1IAAAAIgCACIgBABIgEAGIAAAJIgBAPQgBAGACAGIAEABIABAAIAAgBQADgEAEgEIAGgEIAEgEQADgCAAgDIAAgIIAAgGIgDgCIgBAAIABgCIgCgEIgCgCIgEgBIgEAAIgDABgACRkRIgBADIgBABIgCACIgCACIAAABIAAAEIAAAEIACADIADACIACgBQADgBAAgDIABgEQADADAEgDIABgCIAAgDIgCgEIgCgEIgFgDQgDABgBACg");
	this.shape_13.setTransform(338.6,87.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4F3137").s().p("Ah1J1IgKgHQAEgQAPgMQAPgLAHgPIAKgXQADgHAIgDIAAAAIACgDIgJgFQgEgDABgFIAEgJIAFgJQADgDABgFIgDgDIgHgEIgEgDIgBgCQAAgEABgDIAFgKQACgDABgEIABgDQgDgEAAgGIAAgRQgLgPgEgZIgLg/QgEgfgJgdQgFgRACgNIgDAAQAAgMgEgJIgBgKQABgIgCgGIgDhJQgBgUAHgQIgBAAIAAgBQgGgEgFgGIAAgBIAAgLIAAgNIAAgCIAAgCIAAgCIABgEIgFgEIgEgGIgDgEIgBgCIAAAAIgDgDIgBgBIgDgEIgDACQgiAZgoAHQgfAFgggFIgBAAIgCgCIgFgHIACAGIAAABIACABIAAABIAAAAIABABIgCACIgBABQgGADgGAAIACADIAIALIAJALQADAEAAADIABABIABABIABACIADACIABABIABAGQABALgGAIQgKAKgMAIQgIAEgIgDIgCgCIgCgCIgCgCIgBgCIAAgCIAAgGIAAAAIACgGQACgJAHgGIAKgKIACgCIACgDIAFAAIgDgEIgJgMQgGgGgCgHIgBgDQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAIgCgDIgCgGIgCgDIgMAEIgCAAIgDgBIgEACIgDACQgEABgEAEQgCACgBADIgBABIAAACIAAADIgBAGIAAACIAAACIAAAHQAAAEACAEIABgBIADgIIAEgHIAIgFIAFgGIACgCIAHgCIADgBQAHABAAACQAAACgFADIgEACQgHAEgFAGQgHAIgDAJQgCAFgCACIAAABIABAAQAFgBAEADIAIAIIAGAHQADADgCADQgHAEgDgGQgEgHgIgCQgHgDACgFQgFACgFgGQgDgEgBgGIgBgNQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgIgDgEgIQgCgEABgFIAAgJIAAgGIAAgDIADgEQADgFAFgCIAVgMIADgBIAHAAIADABIACACIADAEIACADIAEADIAAACIABACIgBABIAEAAIgBAAIgCgEIABgDIAFgGIABgBIAEgCIAEgCIAAAAIAFACIABAAIgBgKIABgRQAAgFABgDIAXgbIABAAIAAAEQAfghArghQAkgcAagnQASgbAKgfQAFgPALgJQABgFAEgEIAKgKIAQgTIAPgNIgBAAIACgBIAEgCIAFgDQAJgGAKgEIATgJIAIABQAAgEAEgCIABABIAAgGIABgYQABgNgFgLIAAgEIgGADQgLgFgLgNQgLgOgBgTIgBgaQAAgGACgDIgBgBIgCgCIgBgCIgCgBQgEgCgCgEIgEgIIgCgEIADgFIABAAIAKgBIAKABQASAAAIgPIAEgGIAAgBIACgCIABgDIAAgDIAAABIACgGQAGgQALgOIADgEQgBgEAGgDIAAgCIAAgBIAAgCIAAgCIACgCQAHgHAIgFIAZgLIAPgFQBCgGAhAwQALgKANgIQAngVApgNQAwAGAVAuQAUAqgEAuQgDAtAAAtIABADQAAADACACQACAEAFACQAKAGgBAKQgPgHgIgKQgDgBgCgCIgDgEIgEgDIgBgBIAAACQgBAIACAJQACAHAEAHIAJAUQAGALgCAKIAAAAQgSABgKgPIgTgcQgKgOgHgQQgDgGgBADIgBABQgOAEgIgRQgGgNgCgOQgBgPADgOQACgLAAgMQgGgCgCgEIgGgKIgHgIIgHgHIgBgCQgVgCgVAFQAIAvgbAtQgcAugwAHQgHgFgNAFIgFAAQgagBAAAXIABACQADAGAFADQAGAFAHABIAFACQAHAAAHgDIADABIgBgCIAEAAIAJAAIACACIAAABIABAAIgCgDIAEAAIADgBQBaAUAgBOQAGANgDAOQgQBXhBA6QgQAOgSABQAGAbgNAdQgOAdgYAZQgLAKgOAHIAAAFIAAAJIAAAHIgBACIgBACIgEADIgDAEIgBABQAAACgDADQgEAGgCAHIgBAOIgBAEIABAAIABAlQAAAOAFAPQARA4AcA2QAcA1gBA/IgBAYIgBABIgBADIAAACIABABIAAABIADACIgBAAIADAEIADAFIABADIAAACIgBACIgBABIAAABIgCABIgBACIABACIABADIABAAQAKAIABANIAAABIgGAAIgFAAIAFABIAEADQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAIAAABIAEADIgBADQgEAHABAKIgGAHIgJAOQgDAGgFAFQgUAHgSgKQgMgHgJgJIgDgEIABgBIABgCIACgCIACgCIABgBIABgBIACAAIAHABQAAgHgCgFIgBgPQAAgNAEgLIACgEIgCgEQgBgDACgDQABgDADgBQAFgDgEgEQgDgCgBgEQAAgEACgCIAFgIIABgCQgIgUgFgbQgJgygaguQgagvgVgyQgFgNgDgNQgDgCAAgEQgBgHgCgHIgEgLIgGAEIgCAGQgGALAAAOQgCA5AJA1QAJA1AGA3QAFA4gJA0IAAgCIgBgEIgBgHIgEgjIgCgTIgCgkQgBg3gKg2QgJg1gDg3IAAgHIAAgCQAAgKADgJIAAgCIAJgQIAFgGIAGgGIAFgDIACgBIAAgBIAAABIABgBQAGgEAHgBIAAgBIABgBIABAAIACACIABABIgBADQgDAFgGAFIgDAEQADACAAAGIABABIABAFIABAGIACAGIACAEIAAACQADAIAEAHIACADIABAEIACAHIAKAaQAVAwAZAuQAaAvAJA0QADARAAAQIgEABIgCADIAAACIADAKQABAEgDAEIgGAJQACADABAEIADgCIAAgBIAAgCQACgDADAAIAWAAIAAgBIAAgCQAAgEACgDIgBgCIgBgEIgBgEIAAgCIgCAAQgBgCgCgCIgBAAIACAAQgCgNABgRIABgbIAAAAQgBgQgDgOIAAgBIAAgCQgHgegOgbQgeg2gTg4QgLgjAFggIAAgCIADACIAAgDIABAAIACgLIAAgCQABgIAEgHIAAgBIgPACIgEAAIgJABIgBAAIgDABIgFAAIACADIgTAAIgSgBIgDgCIgDABQgkgFgggRIgGgDIAAADIAAAQIABBPIABALIAAANIACAVIABAAIABABIAAABIAAABIAAACIABAHIAAACQABALAEALIAEASIABAEIABAFIAEARIABACIACAJIABAIIACAQQAFAdAKAbQAFAOACAOIAAAEQgCAPAGALIgBABIgBADIgBAFIAAADIAAAAIgEADIgBACIgBACIAAABIAAACIAAAAIAAABIADACIAEABIADACIAFAGIACABIAAAEIAAACQgCAAgCADIgBAEIgCADIgDAFIgCAEIAAABIACAEQACADAFAAQAEAAAHgDIAAAAIAIgEQAEgDADADIgBgCIAIADIgCAIQAQANABAXQABAYgYAMQgUAKgMARQgIAKgKAAIAAgDIgFABQgGADgHAAQgKAAgLgGgAB3IRQgHAHgDAJQgEAKACALIAFgCIAGgOQADgIAGgGIAGgLIgBAAIgFgDIgDgBQgBAEgEAEgABIIpIAAACIACABIAAgCIABgEIgDADgAgaIJIgCADIADgCIABABIgBgCgAksBeQgCADgDACQgEACgCAEIgFAHQgCAEABAEIABACIABABIAJABIAFgEIAFgEIAGgGIACgBIABgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIgMgBgAg3BeIAAAAIAAAAgAhSBWIAAgBIgCAAIACABgAAzBKIADABIAAgCIAAAAIgDABgAgHBLIABAAIgBgCIAAACgAgkiGIAEAEIADADIABAEQgWAfgWAiQgWAhgjAUIgKAHIAFAHIADAFIACACIAIAJQAMAMARAKIAOAHIAIADIAVAEQAJABAFAHQALACALAAIAAgBIAEgHQAEgGAGAAIAkgCQASgRANgUQAOgSAJgVQAIgSgEgTQgBgGACgDIAAgBQgNgEgLgKQgHgGgFgHQgOgPgJgUIglhSIAAgCIAAgCIAAgCIAAgCIAAgCIgBgDIgDgEIgCgCIgBgCIAAgGQAAgEgDgEQgDgCgBgEIgCgIIgBgIIAAgFQAAgEAEgBIACAFIAEAHQgBAFACAEIAGAKQADAFABAGIAEAKQACAEgBAFIAAACQASArAYAqQAFgDAFAAQANgBAFALIAJAQIAEAHIAEACIAeAAIArgdQAYgPAQgYIAQgcQAEgIAGgEIACgWQADg/hDgTIgGgCIAEADIABAAQAWARAQAUQASAZgTAXIgEAHIgOAFQgMAEgMADIgegBIgFACIgUgFQgLgCgLgEQgPgFgOgGIgGgDQgKgIgJgJQgIgIgGgKQAAgEgDgDQgGgHgDgIIgBgEIgBgQQgBgLgHgJIgUAIQgOAEgMAIIgDACIAAABIgDABIgBAAQgLAIgIALIgCACQgKANgLALIgDACIgBAFIgCAEQgPAhgTAgIgCADQgKAOgLAOIgcAfIgaAVQgUAPgLAPQgUAPgWAKQgBAHgHAIQgHAHAAALIAAASQAAAJAHAIIAFAHQARADARAAIgEgGQAVgaAlgPQAngRAlgYQAYgPAPgaQAQgcAagNIAAgBIAHADgAlzA+IAAgBQAAgJAEgGIACAAQAEAAABgEIgBgCIACgCIAHgEIAIgFIACgCIACAAIgCgBIgEgDIgCgCQgGAAgFACIgCAAQgHADgEAEIgDAAIgDACQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAABIACADQgBAEAAAEIABAKIABABIADADIACABIAAAAgAh4AxIAAACIABAAIgBgCIABgCIABgCIABAAIgDgCIAAAEIAAABIAAABIAAAAgAB+goIgBAGIAEgXIgGgBQADAIAAAKgAAKmOQAEAFAAAJIAAAYIABAYQAAAFgDADIABABIACAFQAUAJAVgGIAFAAIAAgBIACgCIABAAQADgGAEgCIAAgBIgEgDIgEgEIgBgCIgBgBIgBgBIAAABIgBgBIgHgJQgDgFgBgFIABgEQAAgIADgHIACgEQgVgIgJgQQAAADgCADQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAgBIgBgJIABgJIABgBQgFgBgCgHIAAgBIAAgCIABgCIABgBIABgBIACgBIADACIACABIAAACIALgEQAIgFAGgIQAFgHgDgIQgBgFgGgDIAAgBIgBABIAAgBIgEgBIgCAAIgEACIgDACIgBgBIgCgDIAAgCIAAgCIABgCIACgCIABgBIABAAIACgBIAAAAIANAAIADABIAIAOQAHAOgJAMQgIAMgNAHIgHADIABACIAAAHIAAAIQAXAOAWAEQA1ALAwguQAOgOAHgSQANgigFgdIgQAGQgKAFgJAAIgBgCIgBgBIgDgDIgCgBIgFgDIAAgEIAAgFIgBgGIgDgGIgBgDIAAgCIAEgEIACgCQACgCAEAAIAAAAIAAAAIACABIADgGIAKgOIgBgBIgHgIQgzg2g/AoIgJAGQgFAEgGACIACACQAIAHABAMQABAQgDAPIgHAdQgCAHgEACQgDACgEgBQAAgGABgGQABgFAEgGIAAgBQAIgOABgQQABgPgJgLQgOAQgJATIgBACIABAAIABAAIAAAAIABgBIAFAEIAEADIADAEQADADgBADIAAABQgDAEgEgDIgGgFQgEgEgCgEIAAAAIgCAFQgBAGgFAIIgCACIgCADIAAAAIAAACIgCACIgDABIgTgCQgFgBgGABIACACIABACIABACIAGAEIAGAGIABACIAAACIgBABIgCABIACAFIAAABIABAEIgBAFQgBAMABALIACAJIABAGQADALAHABIABABQAFABAFAEIAHAIIACgBIAGAGgAFklcIgBgCIgIgVQgEgKgBgKIgCgaQgBgMAFgHIADgDIACACIACACIAAgBIAAgBIAAgBIAAgBIACgLIACgGIAAgBIABgCIADgJQAFgQABgSQABhPhDgmIgGgDQgHgCgHACIgFABQg1AQgfAjIgEAEQgEADgBAGIgFAGIABABIADAFIADAIIACAHQAGgBAFgCIAAgCIABAAIAHgCIAHgCIAmAAIADABIACACQAMAPAMAOQAQARgIATQgGASAFASQADAJAFAIIABABIAAgCIAAgFQAAgEABgEQACgCgBgDQAAgEACgCQADgDADgBIACACQAFALACAMQADAOAHAPQAJARAMAPIAKAMIACABIAAAAgACSizIACABIgBABIgBACIAAgEgAgCnyIgCgEIgBgDIAAgEIAAgCIACgCIACgCIABAAIAAgDQACgDACgBIAFAEIADADIABAEIAAAEIgBACQgDACgEgDIgBAEQAAADgCABIgCABIgCgBg");
	this.shape_14.setTransform(353.1,111.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A72E3A").s().p("AgMA0IAAAAIgBgDQABgFADgBIAHgGQACgEAEAAIAIgDIAAAAIALAFIAAABIgBACIgBABIAAACIgBACIgBACIAAACIgBABIgCABIgIAEIgHACIgEABIgJgEgAAGAWQgDgDgCgEIgCgKIgBgFIgBgHIAAgBIABgBIADgBQAGgBABgCIABAAQgBAHAEAHIAEAPIACAEIgFgBIgDABIgDABIAAABgAgVgwQgCgEADgDIALACIACACIADAFIgBABIAAAAIgDAAIgJADQgDgDgBgDg");
	this.shape_15.setTransform(319.9,102);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CB4553").s().p("AgBAyQACgDgBgDIgDgJIgFgKQgDgEgFgBIgBAAIAAgBQAEgBADgEQAGgIAIgFQAHgDAHgBIAAABIgBACIACAGIABAFIADAKQABAEAEADIgLAGQgJAEgFAHIgDAFgAABAIQgBAEAAAFQAAAGADAFQAFAFADgEIABgCQACgDgCgCQgDgDAAgEIAAgGIgCgFIgBAAQgEAAgBAEgAgYgSIgCgDIgBgCIADgJQABgFADgDQABADACACQABADADACQgGAEgDAJgAgGgjIgCgFIgDgFIgCgCQAFgCAIAAIABAAQgCADABAEQABAEACACIgGABIgCABIgBgBg");
	this.shape_16.setTransform(317.8,101.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DD8892").s().p("AAIAlQgEgFgBgGQAAgFACgEQACgFAFABIACAFIAAAGQgBAEADADQACACgBADIgBACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgDgAgHgVIgBAAQgDgCgCgDQgCgCgBgDIgBgDQAAgBAAgBQABgBAAAAQAAAAABgBQAAAAABAAIADgBIACABIADACIACAFIACAFIABABIAAADQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgDgBg");
	this.shape_17.setTransform(317.3,100.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AB8681").s().p("AgVAlQADgKAIgHIAGgRIAAgBQgBgHADgIQADgJAGgHQAEgEABgEIADABIABgBIACACIADACIAAAAIgBACQAGAMgPATQgFAGgCAIQgBADgDABIAAABIgBABIAAABQABAPgUACg");
	this.shape_18.setTransform(372,162);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5F4B67").s().p("AgpDPQADgDAAgEIgBgCIgBgCIAAgBIAAABIACABIAFABIAEAAIABgBIAAACIgBAEIABACQgDgDgEADIgIAEIACgCgAg4DAIAAABIAAABIgCABIACgDgAgtC5IgDgBIAAAAIgCABIAAgCIABAAIAHACIAAABIAAABIgDgCgABQCvIAGgJQADgEgBgEIgDgKIAAgCIACgDIAFgBQgBgQgDgRQgJg0gagvQgYgtgWgwIgKgaIgCgHIgBgEIgCgDQgEgHgCgIIAAgCIgCgEIgDgGIgBgGIABAEIAGgFIAJgKIAKgIIAEgDQAAAZAGAZQAOAzAUAyIATAsIAGAOIACAFIAMAfIADAGIAGAWQAGAWABAXIAAgBIgEAAIAAAAIgEABQgCABgCACIgBABIgBACIAAACQAAAKAKACIAEACIAAAEIABACIADACIAEABIAAACIAAABIgWAAQgDAAgCADIAAACIAAABIgCACQgBgEgDgDgAg9CZIABgFIABgDIABgBQACAEADADIAFgFIABAFIAAAEIgBgBIgKAAIgDACIAAgDgAhGBWQgKgbgEgdIgDgQQADAHAIAIQAKAKAEANIACAOIABAEIAAABIAAACIgEApQgCgOgFgOgAhTgDIgBABQAFgKAAgLQAAgMgDgKQgDgKgBgLQAAgJgGgGQAEgGACgGQABgHgDgGQgDgGgFgDIAAgCIABgLQgBgGAEgFIAGgJQADgDAAgFIgDgHIgFgGIgGgFIgGgEIgDABQgDACgCAEQAAADACACIAGAGIACAEIgBABIgGAOQgDAGAAAHIABAKIgBAAIgBgLIAAhPIASAMQAeASAfgDIgFADIgGAGIgFAGIgJAQIAAACQgCAJAAAKIgDgBIAAAAIgEABIgBAAIgBABIgCACQgDAKgBALQAAAsAFAqIADAbQgIgHgIgEgAhagCIABADIABAAIACgBQgCADAAADIgCgIgAhlgwQgDgLgBgLIABABIACACIABABIAAAFQAAAKACAJIADAMIgFgSgAhthUIgCgVIABAAIAFADIABABIABACIACACQgBAEgCADQgDADgBADIgBAAgAAcizIADABIABAAIgBAAIAAADIgCgCIAAACIgBgEgAAHjLIAEgBIAAACIgEgBg");
	this.shape_19.setTransform(360.9,137.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#755E80").s().p("Ag0C7IgCgEIAAgCIAAAAIAAgBIABgFQACgCADgBIACAAIAAgBIADACIADABIABACIABACIAAAEIAAABIgBAAIAAADIgCADIgFACIgGgEgAg6CdIgFgBIgCgCIAAAAIgBgCIAAgCIABgCIABgCIAEgDIABAAIADgCIAKABIABAAIACABIAEAEIABADIgBACQgBADgDABQgFACgFAAIgFgBgAg4CDQgHgKACgQIAAgEIAEgoIAAgDIAAgBQgBgKgCgIQgEgMgKgKQgIgIgDgHIgBgHQAAgDACgDIgCABIgBAAIgBgFIgBgBIgDgSIgBgEIgBgEIgDgNQgCgJAAgJIAAgGIgBgBIgCgCIgBAAIgBgCIAAgIIAAgBIAAgBIAAgCIgCAAQABgEADgDQACgDABgEIgCgBIgBgCIgBgBIgFgDIgBgBIAAgMIABgBIgBgKQAAgHADgGIAGgNIABgCIgCgEIgGgGQgCgCAAgDQACgEADgBIADgBIAGADIAGAFIAFAGIADAIQAAAEgDAEIgGAIQgEAGABAGIgBALIAAABQAFAEADAGQADAGgBAHQgCAGgEAFQAGAGAAAJQABALADAKQADAKAAAMQAAAMgFAKIABgBQAIAFAIAGQAJAIAGAMQAKAWgCAYQgBAXACAYQABAPgGAJIgFAGQgDgEgCgEgABkBSIgGgVIgDgOQgEgMgHgKIgBgBIgCgFIgGgPIAAAAIABgCIACgCIAEAAIAAAAQALAFAHAMQAFAMAEANIABAEIAAABIAAABQADAPABAPIAAABQgCADgFACIgDgCg");
	this.shape_20.setTransform(360.7,138.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#48394F").s().p("Ag+DaIAAgBIgCgEIAAgBIADgEIABgEIABgBIACgBIAAACIADAEIAFAEIAFgCIACgEIAAgCIABgBIAAgBIAAgDIgBgCIgBgCIAAgBIAAgBIgHgBIgBgBIgBgEIgBgBIgGgGIgCgCQAHABAIgDQADgBABgCIABgCIgBgEIgDgDIgCgBIgBgEIgBgFQAHgKgCgOQgCgYABgXQACgYgKgWQgGgMgJgJIgDgbQgFgqABgsQAAgLADgKIACgCIABgBIACAAIADAAIAAgBIADABIAAACIAAAHQACA3AKA1QAJA1ACA3IACAkIABATIAEAjIABAHIABAEIgBABIgEAAIgFgBIgCgBIAAgBIAAABIACACIAAADQAAAEgDACIgCACIAAABIgIACIgDAAQgEAAgDgCgABsCyIgDgCIgBgBIABgFIgFgCQgKgCAAgJIAAgCIABgDIABgBQACgCADgBIADAAIAAgBIAEABIABAAQgCgXgFgWIACABQAFgBACgDQABANgBAOQgBAQACAOIgCgBIAAABQADABABACIACAAIgBADIABAEIACADIABACQgCADAAAEIgFgBgAhFCvIABAAIAAAAgABZBMIgNggIABACQAIAKADALIADAPIgCgGgAg9BLIgCgPQADAIAAAKIgBgDgABmA+QgEgMgFgMQgGgNgMgFIAAAAIgEABIgCABIgBACIAAABIgSgsQgVgygNgzQgHgZAAgYIgEACIgKAJIgJAJIgGAFIgBgEIgBgFIAAgBQgBgGgDgCIAEgEQAFgFADgFIACgDIgBgBIgDgCIAAAAIgBABIAAABQgIABgGAEIAAABIAAgBIgBABIgCABQgeADgegRIgTgNIgBgQIAAgDIAGADQAhARAjAFIAEAAIACABIASABIATAAIgBgCIAEgBIAEABIAAgBIAAAAIAJgBIAEgBIAPgCIAAABQgDAIgBAHIAAACIgDALIgBAAIgDgBIABAFQgFAfALAjQATA5AdA1QAPAaAGAfIgBgFg");
	this.shape_21.setTransform(361,136.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#744755").s().p("AAfCuQgMgEgMgHQgHgFgJgDQgJgDABgJQABgEADgCQACgDADgBQALACAKAGQAJAFAKAEQAMAEANABIAYADQAIABACAJQgOAMgSAAQgNAAgPgGgAjLgXQAPgLAYgHQAQgFAPgHQAkgPAegYIACgCQAegXAYgbIADgDIAGgFIAAAAIAAgCQAAgCANgMQAOgLADAAIABAAIAHABIABAMIgCAIIAEABQgNAbghAbQglAdgsAYQgqAXgrASQggAMgZASQABgaAagSgACjhLQgNgHgPgGQgNgGgIgLQgHgKAJgHQACgDADgBQAJAJAKAIIAGADQAOAGAPAFQALAEALACIAUAFIAJADQADABACAEQgPAMgRAAQgRAAgTgLg");
	this.shape_22.setTransform(352.3,94);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#59373F").s().p("AANDTIAAAAIABAAgAgODKIACAAIAAABIgCgBgAB4C/IADgBIABACIgEgBgAAhC6QgFgHgJgBIgUgEIgIgDIgOgHQgLgHgJgHQgIgIgGgKQgJgOgEgUQgEgdgEgSIAAgBIACgBQAHgKARgHIA1gnIAAgDIgBgFIgCgEIgGgFIAAAAQgdAEgYAUQgYATgbAGQgrALgrACQgoAEgcARIACAHQgQgGgQgJIgCgIQgDgJADgJIAGgSQAEgJAJgFQAJgFAEgGQAXgDAYgGQgaASgBAaQAagRAggNQArgSAqgXQArgYAlgdQAigbAMgbIgDgBIABgIIgBgMIgGgBIAqgZIABADIANgFQAGAJACALIAAAQIACAEQADAIAFAHQADADAAAEQAHAKAIAIQgEABgCADQgJAHAIAKQAIALANAGQAOAGAOAHQAnAWAdgXQgCgEgDgBIgKgDIAFgCIAfABQAMgDAMgEIANgFIAFgHQATgXgTgZQgLgPgPgNIgLgJIgBAAIgEgDIAGACIAGACQA8AUgDA8IgCAWQgFAEgEAIIgRAcQgPAYgYAPIgrAcIgeAAIgEgCIgFgHIgIgPQgGgLgMABQgGAAgFADQgXgqgSgrIAAgCQAAgFgCgEIgDgKQgCgGgDgFIgGgKQgCgEAAgFIgEgHIgCgFQgEABAAAEIAAAFIABAIIADAIQABAEACACQADAEABAEIgBAGIACACIABACIADAEIACADIAAACIAAACIAAACIAAACIAAACIAlBSQAJATAOAPQAFAHAHAGQAMAKAMAEIABABQgDADABAGQAEATgIASQgJAVgNATQgNAUgSARIgkACQgHAAgEAGIgEAHIAAABQgLAAgMgCgAgdCFQgDACAAAEQgCAJAKADQAJADAIAFQAKAHAMAEQAlAOAYgUQgCgJgIgBIgYgDQgNgBgNgEQgJgEgIgFQgLgGgLgCQgEABgCADgAAEgHIACABIgBgBgADYg6IABgCIABgBIgCgBIAAAEgAgyCoIAAgCIAAgBIAAgBIAAgCIABABIAAABIgBACIAAACgADEBMQgBgKgCgIIAGABIgEAXIABgGgAkwA+IAAAAIAAgBIgBgCIAAAAIAAgHIADAJIABACIgDAAIAAgBgAhwhNQAQgJANgKQgeAYgjAPIAkgUgAgUibIACgBIAAAAIgFAFIADgEg");
	this.shape_23.setTransform(353.9,94.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D6B0A0").s().p("Aj2DXIAAgDIABgDIACgCQABgDAEgBQAEgCAFAAIADgBIAEAAIADABIACABIABABIABACIABADIAAACQgBADgDABQgHAEgIABIgFABQgGAAgCgFgADdg1QgHgHAAgJIgBgIIAAgBIAAgHIAAgCIAAgOIAAgBIAAgCIAAgDIABgFIAAAAIAAgBIADgEQAEgFAAAHIABAAIABAAIACACIACABIAAABIAAACQgDAEABAIIADATQABAKAEAKIAAABIgCACIgCABIgDABIgFAAgADdhuIABAAIAEAAIgEgBIgBAAgAC9itIgEgBQgBgHABgGIADgPIABgJIAFgEIABgBIACgCIABAAIACgBIAFABQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABABIACACIABAEIAAABIAAABIADACIgCAGIgBAHQABADgDACIgGADIgGAEQgEADgDAFIAAAAIgBAAgADli7IgCgDIAAgDIAAgBIABgCIABgCIACgBIADgBIAEgCIACABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIAAAAIACABIABADIAAACIgBADQgCAEgEABIgEABQgDAAgEgDg");
	this.shape_24.setTransform(341.4,78.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B28A7E").s().p("AkCECIADgHIABgCIAAgCIADgGIAAADQACAGAGgBIAFAAQAHgBAIgFQACAAABgDIAAgCIgBgDIgBgCIAAgBIAMAAIABAEIAAAGIABADQgBAAAAABQAAAAgBAAQAAABAAABQAAAAgBABIAAADIAAAAQAAgCgFgDIgFAAIgGAAIgDAAIgGAEIgKACIgGAFIgGAHIgBABIABgIgAj6DtIABAAIgCACIABgCgADMgPIgDgFIAAgBQADgDAAgFIgBgTIAAgFIAAgSIgBgEIAAgCIAAgBIAAgDIABAAIAAgCIAAAAIgBAAIAAgHIAAAAIgCgEIgEgHIgBAAIgCAAIgHgIQgDgFgGgCIAAgBQgIgCgBgKIAAgHIgCgIQAKAAAAgLQAAgLgGgDIACgEIAAgDIAAgCQgBgDgBgCIACAAIABgBIAAgDIAAgBQgCgEgEgEIgFgEIgBgCIgBgCIgBgCQAGAAAFABIATAFIADgBIABgBIACgDIgBAAIADgDIABgBIAJgOIAAAAQAAgCAGgHIACgCIAAgBIAEgFIAIASIADAEQADgBAAgHIAAgBIAAgCQgDgJAAgFQAAgEgEgDQAHgIAIgHQAHAMgDAPQgCAPgJANIgBABQgFAFgCAGQgCAFAAAGQAEACADgCIABAFIAAAAIgDABIgBAAIgCABIgBACIgBACQgBAAAAABIAAACQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAIABABIgCABIgBACIgBACIAAABIAAACIACAEQAFAEAFgCQAFgBACgFIABgCIAAgCIgBgDIgCgBIABgBIAAABQAFAEABAFQACAIgGAHQgHAHgJAEIgLADIAAgCIgCgCIgDgCIgDABIAAAAIgBABIgBACIAAACIAAACQAAAGAEACIAAABIgCAJIAAAFIgBAEIABAEQABABAAAAQABAAABAAQAAAAABAAQAAAAABAAIABAAQACgCABgDQAEALAJAIIAFAEIAAAAIABAAIADADIACABIABAAIABABIAAAAIgBAAIAAAAQgEAIAAAIIAAAEQABAFADAFIAHAIIABACIABAAIABABIABACIADADIAFADIAAACQgEACgDAFIgBABIgCACIAAABIgFAAQgIACgJAAQgMAAgMgFgADUhXIgDAEIgBABIABAAIgCAFIAAADIAAACIABABIAAAOIAAABIAAAIIAAABIAAAIQABAJAHAHIAEAAIAEgBIACgCIABgCIABgBQgEgJgBgKIgEgTQAAgIADgFIAAgBIAAgBIgDgBIgCgCIAAAAIgBAAQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAAAAAAAIgDACgADAi9IgBABIgBABIgBACIgGADIgBAKIgCAPQgCAGACAGIADABIABABIABgBQACgEAFgEIAGgDIAGgDQACgCAAgDIABgIIABgFIgCgDIAAAAIAAgCIgBgDIgDgDQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgEgBIgDAAgADMjTIgDACIgCABIAAABIgBAFIAAADIACAEIACACIADgBQACgBABgDIABgDQAEADAEgCIABgCIAAgEIgBgDIgCgFIgEgEQgCAAgCADIgCAEIgBgBIAAABgADYhRIAAAAIABAAIAAAAIgBAAg");
	this.shape_25.setTransform(342,75.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A06456").s().p("AhvBOIgBgDIABgDIAEgGIAAgBIABgCIAAgCIAAgCIAAgCIADgBIACgCIAEgDQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgBIAAgBIgLACQgGABgDAGQgCAFgGgDIgBgFQAAgGAHgCIAEgDQADgCAEgBIAOgCIgdgIQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIAAgCIAAgCIAGgCIADgFIACgCIgEgCQgDgBgCgCIAAgCIADgDIAFgEIABgDIgCgCIgCgCIAAgCIACgDQADgEAEgCQACgBgDgHIAAgBQACgCADgBIAFACIAEADIACAEQAAADgBADIAAABIgBABIAGAEQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAABgBAAIAAACIgBACIgBAAIgFABIgCABIAAABIAIgDIARgHIAAAAIADgBQAMABgHAFQgGAEgIACIgGACIAMADIAFADIgBACIAAACIgCACIAAABIgBACIgCAEIgNgBIAFACIAEACIgBACIAAACIAAABIAEABIACABIABAEQgBAEgEAAQgFgBgFABIACACIABACIABACIAAABIAAACIgBACIgBABIgFACIgBABIgDACIAAACIAAACIAAACIgBACIgBACIgBABIgCACIgEADIgEACIgCABIgDgBgAB0A1IAAgCQgDgOgGgOQgIgSgOgLQgJgIgLgHIAAgCIABgBIAGgEIACgCIAAgBQgHgCgGACIgIADIgHADQgEADgFgDIAAgCQgBgHAIgEQAFgCAHgBIAPgCIAKgCIAAgBIARADIAEADIAAACIgBACIgEACIgGACIgCABIAFACIADACIABABIAAACIAAACIgCABIgJADIABABQAHAEAEAGIAMAUQAFAJAEAKQAFAMACANIAAAEIgLgIgAALgbQgHgTAWgMQASgLATgHQASgGAHANIAAACQglAGgYAeQgFAFgGAAIgFgBg");
	this.shape_26.setTransform(381.2,53.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#885549").s().p("Ai2BcIABgHIAAgIIAAgCIAHgBQAOgGAJgKQALgLgGgPIgFgOIgDgCIgMgCIgBgFQAEgCADgGQAGgNAFgOQAFgPAAgPQABgNgGgIIAHgFIAgAJIAIADIABAAIgHABQgGgBgGACQgEABgCAEIgBACQANAGAPgEQAUgGAQAQIAQAPQADADAEAAIACACIgEADIgBACIABAEIACAFIABAGIgBAGIgBADIAEADIACABIADADIABACIABACIgEACIgCgCIAAABIgCAAIgBABIgHADIgCABQAAAJgGAHQgHAJgMAGQgRAJgRADIADADIAFAFIAHAEQgEAEgEABIgMACQgFAAgBAEQABABAAAAQAAABAAAAQAAAAABAAQAAABAAAAQAGAEAHADIADACIgIAGQgJAEgKAAQgNAAgCAKIACABIAAABQgVgIgVgRgAhmAcIABABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABIgFADIgCACIgCABIAAACIAAACIAAACIgBACIAAABIgFAGIgBADIABADIADABIADgBIADgCIAFgDIACgCIABgBIAAgCIABgCIAAgCIAAgCIAAgCIADgCIACgBIAEgCIABgBIABgCIAAgCIAAgBIgBgCIgBgCIgBgCQAFgBAEABQAEAAACgEIgCgEIgCgBIgDgBIAAgBIAAgCIABgCIgFgCIgEgCIAMABIADgEIABgCIAAgBIACgBIAAgCIAAgCIgEgDIgNgDIAHgCQAHgCAGgFQAIgFgMgBIgDABIgBAAIgQAIIgIADIAAgBIACgBIAEgBIACgBIABgCIAAgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAIgFgEIABgBIAAgBQABgDAAgDIgCgEIgFgDIgEgCQgEABgCACIAAABQAEAHgDABQgEACgCAEIgDADIAAACIACACIADACIgBADIgGAFIgCADIAAACQABACADABIAFACIgDACIgDAEIgFACIgBACIAAACQABAAAAABQABAAAAAAQABAAAAAAQABAAABAAIAcAIIgNACQgEABgDACIgFADQgGACAAAGIABAFQAFADADgFQACgGAHgBIALgCgACCAWQgDACAAADQgDAFAHAKQAHALACALIgOgQIgFgFIAAgEQgCgNgFgMQgEgKgFgIIgMgVQgFgGgHgEIgBgBIAJgDIACgBIABgCIgBgCIgBgBIgCgCIgFgCIACgBIAFgCIAFgCIABgCIAAgCIgEgDIgRgDIAAABIgLACIgOACQgHABgFACQgIAEABAHIAAACQAEADAFgDIAGgDIAIgDQAHgCAHACIAAABIgDACIgFAEIgBABIAAACQAKAHAJAIQAOAMAJARQAFAOADAOIAAACIgSgKQgIgDgGgPQgHgLgGAAIgDABIgBgBIgDgBIgmgGIgHABIgHABIgBAAIAAACQgFACgGgBQAAgDgBgEIgBgEIgFgFIgBgDQAAgIANgWQAIgQAKgHIABAAQAFgEAGAAQAEgIAGgIQAGgHAKgBIAEgBQAHgFAJgCQBJgMAZA4IAAABQgWgOgXgHIgEABIgJACIgLADIgFABQAzAeAiAvIAAABQgQAFgPgMIgCgBIAQA0QADANgDAMQgUgSgQgYgAA5heQgUAHgSALQgUAMAGATQAJADAHgHQAYgeAkgGIAAgCQgEgJgKAAQgFAAgFACgAgdggIAAAAIgBAAQACgDAFgCIgFAGIgBgBgABwhSIAFADIgBABIgEgEg");
	this.shape_27.setTransform(381.9,55.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4F3137").s().p("AhbKFIgMgEQgCgQALgQQAKgQACgRIACgYIABgGIAAgLQgBgFACgGIgDAAIgEgCQgEgDABgFIAEgJIACgDIADgGQADgDABgFIgDgDIgHgEIgEgDIgBgCQAAgEABgDIAFgKQACgDABgEIABgDQgDgEAAgGIAAgRQgLgPgEgZIgLg/QgEgfgJgdQgFgRACgNIgDAAQAAgMgEgJIgBgKQABgIgCgGIgDhJQgBgUAHgQIgBAAIAAgBQgGgEgFgGIAAgBIAAgLIAAgNIAAgCIAAgCIAAgCIAAgCIgDgGIgBAAIgEgGIAAAAIABgBQgGgLgEgQIgKg3IAAgDQgMABgQAFQgjAKgRALQglAKglgHQgfgFgcgPIgBgBIgBgCIgDgJIAAAHIAAAAIABACIAAABIABAAIAAABIgCACIgCAAQgGABgGgCIAAADIAFAOIAEANQACAEgBADIAAABIABACIABACIABADIABACIgBAFQgCAKgJAFQgMAHgOADQgJACgHgHIgCgCIAAgDIgBgCIgBgCIAAgCIADgEIAAgBIAEgFQAEgHAJgEIALgGIABAAIAAAAIADgBIADgCIAFACIgCgFIgEgPQgEgIABgGIAAgEQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAAAgBIgBgCIAAgHIgBgDIgMgBIgCgBIgDgBIgEAAIgDABQgFAAgEACQgEABgBADIgBAAIgBACIgBADIgDAFIAAACIgBACIgCAHIgCAIIABgBIAGgHIAGgEIAKgDIAHgEIACAAIAHAAIAEAAQAFADAAADQgBABgGABIgEABQgHABgHAEQgKAFgGAIQgDAEgDABIAAABIABAAQAFABADAEIAEAKIAEAJQACADgDADQgIABgBgHQgCgHgGgFQgGgEADgFQgFAAgCgHQgCgFABgFIAEgOQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgGgFgBgJQAAgEACgFIAEgIIABgGIABgDIAEgDQAFgDAFgBIAYgEIADAAIAHADIADACIABACIABAFIABADIACAFIAAABIAAACIgBABIADABIgBgEIACgDIAHgEIABgBIAEAAIAFAAIAAAAIAEADIABAAIACgJIAHgRQACgFACgCIAfgSIABAAIgCAEQApgUAzgRQAsgPAkgbQAbgUAUgZIAHgJIgBgBIAvgoQAZgSAZgGIADgCIAEAAIAEAAIAAABQAAgEAFgCIABABIAAgGIABgQIAAgEIAAgLIgCgKIABgDIgCgIIgBgEIgFACQgKgHgKgOQgJgPACgTIACgaQAAgGADgDIgBAAIgCgDIgBgCIgBgBQgEgCgCgFIgDgIIgBgEIAEgFIABAAIAKAAIAKADQASABAKgNIADgGIABAAIACgCIABgDIACgCIAAAAIACgFQAIgQANgMIAEgDQgBgFAGgCIAAgCIABgBIAAgCIABgCIACgCQAHgGAJgDIAagIIAQgDQA/ACAcAwQAWgZAYgTQBKg4AvAvQAaARAkArQAlArAWAPIgEAEQgCABgLAAQgOAAgNgHQgNgHgEAAQACAtAdAmQAcAlAAAIQAAAJgeAAQghAAgNgWIgHgXQgDgCgCgCQgGAHgBAGIAAANIACAOIADANIgBAHIAAAEIgDABIgBgCIgBABIgCgFIg2hIIgHgGQgLgKgEgBQgagLgCgHIgCgBIgLgHIAAgBIgFgKIgGgIIgCgBQgUgFgVACQABAwggApQgjApgwABQgGgFgOADIgEgBQgOgCgHAFIgBgBQgDAFAAAIIABACQADAGAFADQAGAFAHABIAFACQAHAAAHgDIADABIgBgCIAEAAIAJAAIACACIAAABIABAAIgCgDIAEAAIADgBQBaAUAgBOQAGANgDAOQgQBXhBA6QgQAOgSABQAGAbgNAdQgOAdgYAZQgLAKgOAHIAAAFIAAAJIAAAHIgBACIgBACIgEADIgDAEIgBABQAAACgDADQgEAGgCAHIgBAOIgBAEIABAAIABAlQAAAOAFAPQARA4AcA2QAcA1gBA/IgBAYIgBABIgBADIAAACIABABIAAABIADACIgBAAIADAEIADAFIABADIAAACIgBACIgBABIAAABIgCABIgBACIABACIABADIABAAQAIAHADALQACAGAAAGIADADIgBADQgEAHABAKIgGAHIgJAOIgHAKQABAaghAHQgJACAAgKIABgcIgBAAIAAgBQAAgJgCgHIABgEIgCACIgCgIIAAAAQAAgHgCgFIgBgPIAAgKQABgHADgHIACgEIgCgEQgBgDACgDQABgDADgBQAFgDgEgEQgDgCgBgEQAAgEACgCIAFgIIABgCQgIgUgFgbQgJgygaguQgZgvgWgyQgFgNgDgNQgDgCAAgEQgBgHgCgHIgEgLIgGAEIgCAGQgGALAAAOQgCA5AJA1QAJA1AGA3QAFA3gJAyIAAADIAAgCIgBgEIgBgHIgEgjIgCgTIgCgkQgBg3gKg2QgJg1gDg3IAAgHIAAgCQAAgKADgJIAAgCIAJgQIAFgGIAGgGIAFgDIACgBIAAgBIAAABIABgBQAGgEAHgBIAAgBIABgBIABAAIACACIABABIgBADQgDAFgGAFIgDAEQADACAAAGIABABIABAFIABAGIACAGIACAEIAAACQADAIAEAHIACADIABAEIACAHIALAaQAUAwAZAuQAaAvAJA0QADARAAAQIgEABIgCADIAAACIADAKQABAEgDAEIgGAJQACADABAEIADgCIAAgBIAAgCQACgDADAAIAWAAIAAgBIAAgCQAAgEACgDIgBgCIgBgEIgBgEIAAgCIgCAAQgBgCgCgCIgBAAIACAAQgCgNABgRQABgOAAgNIAAAAQgBgQgDgOIAAgBIAAgCQgHgegOgbQgeg2gTg4QgLgjAFggIAAgCIADACIAAgDIABAAIACgLIAAgCQABgIAEgHIAAgBIgPACIgEAAIgIABIgBAAIgDABIgFAAIACADIgUAAIgSgBIgDgCIgDABQgkgFgggRIgGgDIAAADIAAAQIABBPIABALIAAANIACAVIABAAIABABIAAABIAAABIAAACIABAHIAAACQABALAEALIAEASIABAEIABAFIAEARIABACIACAJIABAIIACAQQAFAdAKAbQAFAOACAOIAAAEQgCAPAGALIgBABIgBADIgBAFIAAADIAAAAIgEADIgBACIgBACIAAABIAAACIAAAAIAAABIADACIAEABIADACIAFAGIACABIAAAEIAAACQgCAAgCADIgBAEIgCADIgBABIgCAEIgCAEIAAABIACAEIAAAAQACADAFAAIACAAIAJgDIAAAAIAIgEQADgDADADIAAgCIAIADIAAABQAIADACAHQAJAIAFAMQAJAWgSAUQgQAQgGATQgDALgHAEQgEAIgPAAQgGADgIAAIgIgBgABIJUIAAAAIAAgBIAAABgABqIMQgHAHgDAJQgDAIAAAIIAAABIgFARQgJAHgCAKIAAABQAVgCgBgOIACgEQACgBABgDQACgIAGgHQAPgTgGgMIABgCIgBAAIgDgCIgBgCIgCABIgCgBQgBAEgEAEgAhEBZIAAAAIAAAAgAhfBRIAAgBIgCAAIACABgAAmBFIADABIAAgCIAAAAIgDABgAgUBGIABAAIgBgCIAAACgAhViNIADAEIABAFIAAADIg2AoQgQAHgIAKIgCABIAAACQAEARAEAdQAFAUAJAOQAGAJAHAIQAJAHAMAHIAOAHIAIADIAVAEQAJABAFAHQALACALAAIAAgBIAEgHQAEgGAHAAIAjgCQASgRANgUQAOgSAJgVQAIgSgEgTQgBgGACgDIAAgBQgNgEgLgKQgHgGgFgHQgOgPgJgUIglhSIAAgCIAAgCIAAgCIAAgCIAAgCIgBgDIgDgEIgCgCIgBgCIAAgGQAAgEgDgEQgDgCgBgEIgCgIIgBgIIAAgFQAAgEAEgBIACAFIAEAHQgBAFACAEIAHAKQADAFABAGIAEAKQACAEgBAFIAAACQARArAYAqQAFgDAFAAQANgBAFALIAJAQIAEAHIAEACIAeAAIArgdQAYgPAQgYIAQgcQAEgIAGgEIACgWQACg8g8gUIgGgCIgGgCIAEADIABAAIALAJQAPANAMAPQASAZgTAXIgEAHIgOAFQgMAEgMADIgegBIgFACIgUgFQgLgCgLgEQgPgFgOgGIgGgDQgKgIgJgJQgIgIgGgKQAAgEgDgDQgGgHgCgIIgBgEIgBgQQgBgLgHgJIgNAFIgBgDIgqAZIgBAAQgDAAgOALQgOAMAAACIAAACIgDABIgDAEIgDADQgYAbgeAXIgCACQgOAKgPAJIglAUQgPAHgQAFQgYAHgPALQgZAGgXADQgEAGgIAFQgKAFgDAKIgGASQgEAJAEAJIACAIQAPAJAQAGIgBgHQAcgRAogEQArgCAqgLQAcgGAXgUQAYgUAdgEIABAAIAFAFgAiFAsIAAACIABAAIgBgCIABgCIAAgBIgBgBIAAACIAAABIAAABIAAAAgAmZgOIgIACQgEABgDADIgHAGQgDACgBADIABADIAAAAIAJAFIAFgCIAHgCIAIgEIACAAIABgCIAAgBIABgCIABgBIAAgCIABgCIABgCIAAgBIgLgFgABxgtIgBAGIAEgXIgGgBQADAIAAAKgAnOhjQgBAAgBABQAAAAgBAAQAAABAAAAQAAABAAABIABADQgCADgBAFIgDAJIABACIACADIABACIAAgBQADgJAHgEIABAAQAEACACgDIAAgDIADgBIAHgBIAJgDIADAAIABABIAAgCIgDgEIgCgDIgLgCIgCAAQgHAAgGACIgCgBIgDABgAABmGIAAABIAAACIAAAFIAAARIAAAFIABATQAAAFgCADIAAABIACAFQAUAJAVgGIAFAAIAAgBIACgCIABAAQADgGAEgCIAAgBIgEgDIgEgEIgBgCIgBgBIgBgBIAAABIgBgBIgHgJQgDgFgBgFIABgEQAAgIADgHIAAgBIABABIAAgBIgBgBIgBAAIgBgBIgDgCIgCgBIAAAAIgEgDQgKgJgEgLQgBADgCACIgBABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgCgFIABgEIAAgFIACgJIABgBQgFgCAAgGIAAgCIAAgCIABgCIABAAIABgBIADAAIACABIACACIAAACIALgDQAJgEAHgHQAGgGgCgIQgBgFgFgFIAAAAIgBAAIAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAIgCgBIgEACIgDABIgBgBQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIAAgCQAAgBABAAIABgCIACgCIACAAIAAgBIADAAIAAgBIAMADIADABIAGAOQAGAPgLALQgKALgOAFIgGACIAAACIgBAHIgBAIQAVARAVAHQAzASA2goQAQgLAJgSQARgfgBgeIgRAEQgKAEgJgCIgBgCIgBgBIgDgDIgBgBIgFgEIABgEIABgFIgBgGIgCgGIAAgEIAAgBIAEgEIADgBQACgCADAAIABABIAAgBIABABIAFgFIAGgIIAFgGIgBAAIgFgJQgsg8hEAfIgJAFIgDABIgJAEIACACQAHAIgBAMQgBAQgFAPQgEAOgHAOQgDAGgEACQgDABgEgBQABgGACgGQACgFAEgGIABgBQAJgMADgQQADgPgIgMQgIAHgGAJQADADAAAEQAAAEADAJIAAACIAAABQAAAHgDABIgDgEIgIgSIgEAGIAAAAIgCADQgFAGAAACIAAABIgIANIgCABIgDADIABABIgBACIgCABIgDABIgTgEQgFgCgGAAIABACIABACIACACIAEAFQAEADACAEIABACIgBACIgBABIgCAAQACACAAADIAAACIAAADIgCAFQAGADAAALQAAAKgJABIABAHIAAAHQACAKAHACIAAABQAGADADAEIAIAJIABgBIABAAIAFAHIAAAEIAAABIABAGIAAABIAAAAIAAACIAAAAIAAACgAGbmdQAIAZANAAIAhgBIggg6Qgbg1AAgWQAAgEABgBIAFAAQARAAALAGIANAKQhMhYgKgHQgYgUguAAQgzAAggAnIgBABQgKAGgJAQQgNAWAAAIIABAEIAFAEIACAFQABADgBAEQAGAAAGgBIAAgCIABAAIAHgBIAIgBIAlAFIADACIABAAIADAAQAHAAAGAMQAHAOAIAEIARAJIAMAIIAGAFIANAQIAJAMIACAFIAEAHIADAEQAEAEADABIAAABIALAPIACgUIABgCIAAgBQAEgTALAAQALAAAJAYgACFi4IACABIgBABIgBACIAAgEgAAAn7IgCgEIAAgDIAAgEIABgCIABgBIACgCIABAAIACgDQACgDACAAIAEAEIADAEIABADIgBAEIgBACQgEACgDgDIgBADQgBADgDABIgCABIgBgCg");
	this.shape_28.setTransform(362.1,106.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6F453C").s().p("AjLBzIAAgBIgBgBQABgKAOAAQAKAAAJgEIAIgGIgEgCQgGgDgGgEQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQABgEAEAAIANgCQAEgBADgEIgGgEIgGgFIgCgDQAQgDASgJQALgGAIgJQAFgHAAgJIADgBIAGgDIACgBIACAAIAAgBIACACIADgCQAJABAKgDIARgFQABAegQAgQgKARgQAMQglAcgkAAQgQAAgQgGgACXBdQgJgZgLAAQgKAAgFAUIABAAIgBACIgDAVIgLgPIABgBQgEgCgEgEIgCgDIgEgIIgCgEIgKgMQgCgLgHgLQgHgKAEgFQAAgDACgCQAQAYAUASQAEgMgEgNIgPg0IACABQAPANAPgGIAAgBQghgvgzgeIAFgBIAKgDIAKgCIADgBQAYAHAWAOIAAgBQgag4hJAMQgJADgGAEIgDABQgKABgHAHQgGAIgDAIQgGAAgGAEIAAgBQAggnAyAAQAvAAAYAUQAJAIBMBXIgMgJQgMgHgQAAIgGABQgBAAAAAFQAAAVAbA0IAhA7IghAAQgNAAgJgYgAA2hQIABgBIgGgDIAFAEgAhnghQgEAAgDgDIgPgPQgQgQgUAGQgQAEgMgGIABgCQABgEAEgBQAHgCAGABIAGgBIgBAAIgIgDIgfgJIAAAAIACgCIAJgEQBEgfAsA7IAFAJIABABIgEAGIgHAHQgEACgDADQgDAAgBABIgEACIgCgCg");
	this.shape_29.setTransform(388.1,55.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#885549").s().p("Ai8BhIAAgHIAAgIIgBgCIAHgDQANgHAIgMQAKgMgIgOIgIgNIgDgBIgMgBIgBgFQADgCACgHIAHgbQADgQgBgPQgBgNgIgHIAJgIIgCACIAhAEIAIACIABABIgGABQgGABgGACQgFABgBAFIAAACQANAEAPgGQAUgJARAOIARANQAEACADAAIADACIgEADIAAACIABADIADAHIABAFIAAAGIAAADIAFAEIACABIADACIABABIABACIgCADIgDgCIAAABIgCAAIgCABIgGADIgCACQABAJgEAGQgGAMgLAGQgRAMgQAFIADACIAHAFIAHADQgDAEgEACIgMADQgFABAAAFIADACQAGADAGADIAEABIgHAGQgIAHgKAAQgNABgBALIACABIAAABQgWgFgXgOgAh1AWIABACQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABIgDADIgCADIgCABIAAACIAAACIAAACIAAACIgBACIgDAFIAAAEIABACIADAAIADAAIADgDIADgEIACgCIABgBIABgCIAAgCIAAgCIgBgCIABgBIACgCIABgCIAFgDIABgBIABgCIAAgCIgBgCIgBgCIgCgBIgBgCQAEgBAFAAQAFgBABgEIgDgDIgDgBIgDAAIAAgBIAAgDIAAgCIgEgBIgFgBIANAAIACgFIAAgCIABgBIABgCIAAgCIAAgCIgFgCIgMgBIAGgEQAHgDAFgEQAHgIgNACIgCAAIgBAAQgHAGgJAFIgHAFIAAgBIADgCIADgCIABgBIABgBIAAgCIgBgEIgDgDIgGgCIAAgBIABgDIgBgFQAAgBAAAAQAAAAAAgBQgBAAAAgBQgBAAAAgBIgFgDIgEAAQgDAAgCADIAAABQAEAHgCABQgDACgDAFIgBADIAAACIABACIADACIAAACIgEAGIgCAEIgBACIAFACIAFABIgCACIgDAFIgEADIgBABIAAADQABAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAeADIgNAFQgEABgDACIgEADQgFAEAAAGIACAEQAFADACgFQACgHAGgBIAKgFgACdBhIAAgBQgMgCgNgJIgFgDIAAABQgOgIgOgLQgRgNgIgSQAGgSgOgPQgNgNgLgQIgCgCIgEgBIglAAIgHACIgGACIgCABIAAACQgFACgGAAIgCgHIgCgHIgEgGIgBAAIAFgHQABgGAEgDIAFgDQAegkA0gQQABAEAGAEQAKAFAIAHIAMANIAJAKIgDAAIgNABIgCABIAAACQADAEAFADQgCAGAJAIQAHAGAEAKQAFAKAAALIgCgBIgEgFQgEADAAAEQgCAGAIAIQAMANACAQIABAJQACAGAFAGQgKgJgJgCIgEgBIgHAAQALANANAHIAAAAIABAAQAAAAAAABQAAAAAAAAQgBABABAAQAAABAAAAQAWAfAfAGQABAAAAABQAAAAABAAQAAABABAAQAAAAAAABQgQgDgQgHgAAqhNIAAABIgDAEIgFADIAAACIAAACIAVAMQAQAKAKARQAIANAEANIAEAUQACALAIgCQACgMgEgNQgDgLgHgLQgFgKgGgJIgPgSQgEgHgIgCIgBgBIAIgEIACgBIABgCIgBgCIgCgCIgDgBIgEgBIABgBIAGgDIAEgEIABgBIAAgCIgFgCIgSgBIAAABIgKADIgNAEQgHACgFADQgHAFABAGIABACQAFADAEgDIAGgEIAHgEQAGgDAGAAIACAAgAB+BfIACACIAAAAIgCgCgACJBCIACAAIgBABIgBgBgAg1gvIAAABIAAAAQACgEAEgCIgEAGIgCgBgABQhyIAHACIgBABIgGgDg");
	this.shape_30.setTransform(384.1,61.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#744755").s().p("AiVAyIAPgWIACgDQAUgfAOghIACgEIAEgHQALgLALgNQAHgGAJgEQADAjgeAvQgYAlgfAjIgDAEIgKALgABSALQgOgHgOgFQgNgGgIgLQgIgKAJgHQACgDAEgBQAIAJALAIIAGADQANAGAPAFQALAEAMACIATAEIAKADQADABACAEQgPAMgSAAQgQAAgTgLg");
	this.shape_31.setTransform(362.5,91);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#59373F").s().p("ABUCPQAAgJgDgIIAGABIgCAQgAh+CPIAMgRQAWghAWggIgBgDIgDgEIgEgDIgHgDIAAAAQgaAOgQAbQgPAagYAQIgTAMIgJAAIAAhRIAJgKIAEgEQAfgkAYgkQAegvgEgjQgJAEgHAFIACgCQAIgLALgIIABAAIADgBIAAgBIADgCQAMgHAOgFIAVgIQAHAJABALIABARIABAEQADAIAGAGQADAEAAAEQAGAJAIAJQgDABgCACQgJAIAHAKQAIALAMAFQAPAGANAIQAnAUAdgVQgCgEgDgBIgJgDIAFgCIAeAAQAMgCAMgFIAOgEIAEgHQATgYgSgYQgQgVgWgQIABgCQBDATgDBAIgCAWQgGAEgEAHIgQAcQgLARgQANIgNAJIgrAcIgeAAIgEgBIgEgIIgJgPQgFgLgNABQgFAAgFACIgDgFQgVgngRgoIAAgBQABgFgCgFIgEgKQgBgFgDgFIgHgLQgCgEABgEIgEgHIgCgFQgEAAAAAEIAAAGIABAHIACAIQABAEADADQADADAAAFIAAAGIABABIACACIADAEIABAEIAAACIAAACIAAABIAAACIAAACIAjBLIADAGQAIAUAOAQQAFAGAHAGQALAKANAFIAAAAQgCADABAHQACAIgBAIgABoAKIABgCIABgBIgCgBIAAAEgAjCAaIAPgUIgPAWgAiMhGIADgDIgEAIIABgFg");
	this.shape_32.setTransform(367,93.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D6B0A0").s().p("AAQBRQgHgHgBgJIAAgTIgBgRQgBgIAJgCIAEABIACACIABADQgEADABAJIADASQACALAEAJIgBABIgBADIgCABIgEABIgEAAgAgYghIgEgBQgCgGABgGIAAgPIAAgJIAFgGIABgBIABgCIABAAIACgBIAFAAIAEABIACACIACAEIgBACIABAAIADACIgBAGIAAAIQABADgDACIgFAEIgFAEQgFAEgCAEIAAABIgBAAgAAOg0IgDgDIgBgCIAAgCIABgCIABgBIACgBIACgCIAEgDIADABIADABIABABIABABIACACIAAABIgBAEQgBAEgEACIgEABQgDAAgDgCg");
	this.shape_33.setTransform(364,70.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B28A7E").s().p("AACB7IgCgGIAAgBQACgCAAgFIgBgYIAAgZQAAgIgCgGIgHgGIgBABIgJgHQgEgEgGgCIAAgBQgIgBgCgKIgBgHIgDgJQgBgKABgLIABgGIgBgDIAAgCIgCgFIACgBIABAAIAAgDIgBgBIgGgHIgGgEIgBgBIgBgCIgBgCQAFgBAGABIATABIACgBIACgBIAAgCIAAgBIADgDIABgCQAFgHADgHIACgFIAAABQACAEADADIAFAFQAEADADgDIAAgCQABgDgCgDIgEgDIgDgEIgFgDIgBAAIAAAAIgBgBQAJgUANgPQAJAKgBAPQgBARgHANIgBABQgDAGgCAGQgBAGAAAGQAFAAADgBIABAEIAAABIgDAAIAAABIgCABIgCACIgBACIAAABIAAACIACADIABABIgBABIgBACIgBACIAAACIAAACIADADQAGADAFgCQADgCACgEIABgEIgBgCIgBgCIgBgBIAAAAIAAAAQAGAEACAFQACAHgEAIQgHAHgIAEIgKAEIgBgBIgBgCIgEgBIgBABIAAAAIgBABIgBACIAAACIAAACQABAGAEACIgBAAIgBAJIABAKQAAABAAABQABAAAAABQAAAAAAABQABAAAAAAQACABADgBQACgCAAgDQAKAQAUAHIgCAEQgDAHAAAJIgBAEQABAFADAFIAHAIIABACIABAAIACABIAAABIAEAEIAEADIABABQgFADgCAFIgBABIgDACIAAABIgEAAQgJACgIAAQgNAAgMgFgAAGA/IABARIAAATQAAAJAIAGIAEABIAEgBIACgCIABgCIAAgBQgDgJgCgLIgDgTQgBgIADgEIgBgCIgBgCIgEgBQgJABABAJgAgXgtIAAAAIgCACIgBABIgEAFIAAAKIAAAOQgBAHACAGIAEAAIABAAIAAAAQACgFAEgDIAGgFIAFgDQADgDgBgDIAAgHIAAgGIgCgCIgBgBIAAgBIgBgEIgCgCIgEgBIgFAAIgDABgAgLhJIgBADIgCABIgCACIgCABIAAACIAAAEIABAEIACADIADACIACgBQACgCAAgDIABgDQAEADADgDIAAgCIAAgEIAAgDIgDgEIgFgDQgCAAgBADg");
	this.shape_34.setTransform(364.1,67.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6F453C").s().p("AizBzIAAAAIgCgBQABgLANgBQAKgBAIgGIAIgGIgFgCQgGgCgGgDIgDgDQAAgEAFgBIAMgEQAFgBACgEIgGgDIgIgFIgCgDQAQgFAQgLQALgHAGgLQAEgHgBgIIACgCIAGgDIACgBIADgBIAAAAIACABIACgCQAKAAAJgFIAQgGQAFAcgMAiQgHASgOAOQgnAlgqAAQgKAAgLgCgABhBDQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIgCgBIAAAAQgNgGgKgOIAGAAIAEABQAJADAKAJQgFgGgCgGIgBgJQgCgQgMgNQgIgIACgGQABgEADgDIAFAFIABABQAAgLgEgKQgEgKgIgHQgJgHACgGQgFgDgDgEIABgCIABgBIANgCIADAAIgIgJIgNgNQgIgIgKgFQgGgDgBgEIAFgBQAIgCAHACIAFAEIABgBQAuAaAOAvQAEAEACALQAAACAJAOIAGAKQANAPAWACQgNAGgOACQAAABAAAAQAAABAAABQAAAAAAABQAAAAABABQAYAiArgXQAAAFgDAEQgKAQgTACQgkAEAIAWIACABIAAADIABADQgggGgWgegABmBCIABAAIgCgBIABABgAhkgtQgDABgEgDIgRgMQgRgOgUAIQgPAHgMgFIAAgCQABgEAEgCQAGgCAGAAIAGgBIgBgBIgIgCIghgEIACgCIAKgGQA+goA0A2IAHAIIABABIgKAOQgEACgCADQgDAAgCACIgDACIgDgCg");
	this.shape_35.setTransform(387.7,61.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4F3137").s().p("AgeEoIADgPIgGgBQACAIABAIIgfAAQABgIgCgIQgBgGADgDIgBgBQgMgEgMgKQgHgGgFgHQgOgPgJgUIgDgHIgihLIAAgCIAAgCIAAgCIAAgCIAAgCIgCgDIgDgEIgBgCIgCgCIABgGQgBgEgDgEQgCgCgBgEIgDgIIgBgIIAAgFQAAgEAEgBIACAFIAEAHQAAAFACAEIAGAKQADAFACAGIADAKQACAEAAAFIAAACQAQAoAWAnIADAGQAFgDAGAAQAMgBAGALIAIAQIAFAHIAEACIAeAAIAqgdIAMgJQAQgMALgSIARgcQAEgIAFgEIACgWQADg/hCgTIgGgCIAEADIABAAQAWARAPAUQATAZgTAXIgFAHIgNAFQgMAEgMADIgegBIgFACIgTgFQgMgCgLgEQgPgFgNgGIgGgDQgLgIgIgJQgIgIgHgKQAAgEgDgDQgFgHgDgIIgCgEIAAgQQgCgLgGgJIgVAIQgOAEgNAIIgDACIAAABIgDABIAAAAQgLAIgJALIgBACQgLANgLALIgDACIgBAFIgCAEQgOAhgUAgIgCADIgPAUIAAgOIAEgGQATgbAKgfQAFgPALgJQAAgFAFgEIAJgKIARgTIAOgNIAAAAIABgBIAFgCIAEgDQAJgGAKgEIAUgJIAIABQAAgDAEgCIABABIAAgGIACgYQAAgNgFgLIgBgEIgFADQgLgFgLgNQgMgOAAgTIgBgaQgBgGACgDIgBgBIgCgCIgBgCIgBgBQgEgCgDgEIgEgIIgBgEIADgFIABAAIAKgBIAJABQASAAAIgPIAEgGIABgBIACgCIABgDIABgDIAAABIACgGQAFgQALgOIAEgEQgCgEAGgDIAAgCIAAgBIAAgCIABgCIACgCQAGgHAJgFIAZgLIAPgFQBCgGAgAwQAKgKAOgIQAmgVApgNQAwAGAWAuIABAEQAXAdAKAmQADAMANgBQAQgCANABQgMAagbAEQAmALAigKQAAAAAAAAQAAAAAAABQAAAAgBABQAAABAAABQgSAsgwAFIADAIIAEAFIAHAGIABACQgTAAgXgEQgUgEgNgFIgBgBIAAAAIgBgBIgSgMQgGgHgDgCQgNgKgIgMIgKgTIgDgGIgCgGIAAgJQgFgCgDgEIgGgKIgGgIIgHgHIgCgCQgVgCgUAFQAIAvgbAtQgdAuguAHQgHgFgOAFIgEAAQgbgBABAXIAAACQAEAGAEADQAGAFAHABIAFABQAIAAAGgCIADABIAAgCIAEAAIAJAAIABACIABABIABAAIgCgDIADAAIADgBQBaATAgBOQAFANgCAOQgJAtgVAkQgUAkggAcQgOAOgSABQABAIAAAIgAiSg7QADAFAAAJIABAYIAAAXQABAFgDADIAAABIADAFQATAJAWgGIAEAAIAAgBIADgCIABAAQACgGAFgCIgBgBIgEgDIgEgEIAAgBIgCgBIgBgBIAAABIAAgBIgHgJQgEgFAAgFIAAgEQAAgIADgHIACgEQgUgIgJgQQgBADgCADQgDABgCgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAgBIAAgJIABgJIAAgBQgFgBgBgHIAAgBIAAgCIABgCIABgBIAAgBIADgBIADACIABABIABACIAKgEQAJgFAGgIQAFgHgDgIQgCgFgFgDIAAgBIgBABIgBgBIgDgBIgDAAIgEACIgCACIgBgBIgDgDIAAgCIABgCIABgCIABgCIACgBIAAAAIADgBIAAAAIAMAAIADABIAIAOQAIAOgJAMQgJAMgNAHIgGADIAAACIABAHIAAAIQAWAOAWAEQA2ALAvguQAOgOAHgSQAMgigFgdIgQAGQgJAFgKAAIgBgCIgBgBIgDgDIgBgBIgFgDIAAgEIAAgFIgBgGIgDgGIgBgDIABgCIADgEIADgCQACgCACAAIABAAIAAAAIABABIAEgGIAKgOIgBgBIgHgIQgzg2g+AoIgKAGQgFAEgGACIACACQAIAHABAMQACAQgDAPIgIAdQgCAHgDACQgDACgEgBQgBgGACgGQABgFADgGIABgBQAIgOAAgQQABgPgJgLQgNAQgJATIgBACIAAAAIABAAIABAAIAAgBIAFAEIAEADIAEAEQADADgBADIgBABQgDAEgEgDIgGgFQgDgEgCgEIAAAAIgCAFQgDAGgFAIIgBACIgDADIABAAIgBACIgBACIgDABIgTgCQgGgBgFABIABACIABACIACACIAFAEIAHAGIABACIgBACIgBABIgBABIACAFIAAABIAAAEIAAAFQgCAMABALIADAJIABAGQACALAIABIAAABQAGABAEAEIAJAIIACgBIAGAGgAD1g9QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIgBgDIAAgDIgCgBQgIgWAkgEQATgCAKgQQADgEAAgFQgrAXgYgiQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAOgCANgGQgXgCgMgPIgGgLQgJgOAAgCQgDgLgDgEQgOgugugbIgGgDQgHgCgIACIgFABQg0AQgfAjIgFAEQgEADgBAGIgEAGIABABIADAFIADAIIABAHQAGgBAGgCIgBgCIACAAIAGgCIAIgCIAmAAIADABIACACQALAPANAOQAOAQgGASQAIASARANQAOALAPAIIAAgBIAEADQANAJAMACIAAABQAQAGARADIAAAAgAktEoIATgMQAYgPAPgaQAQgcAagNIABgBIAHADIAEAEIACADIACAEQgXAfgVAiIgNAQgAgKCfIACABIgBABIgBACIAAgEgAigifIgCgEIAAgDIAAgEIAAgCIACgCIACgCIABAAIABgDQABgDADgBIAEAEIADADIACAEIAAAEIgBACQgEACgDgDIgBAEQgBADgCABIgCABIgDgBg");
	this.shape_36.setTransform(378.6,77.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CB4553").s().p("AAOAwQACgDgDgDIgGgIIgHgHQgEgDgFAAIgBAAIAAAAIAEgHQADgKAGgHQAFgGAHgDIAAACIAAACIADAFIADAEIAHAJQACADAFABIABgBIgKAKQgHAHgCAIIgCAHgAACAHQAAAFACAEQACAGAGADQAFAEACgGIABgBQAAgEgDgBQgDgCgBgEIgCgGIgEgDQgEAAgBAFgAgegJIgDgCIgBgCIgBgJQAAgFABgDIAFADIAFAEQgEAFAAAKgAgTgeIgDgEIgEgEIgDgBQAEgFAHgCIACgBQgCAFAEADIAFAEIgHAEIgCABIgBAAg");
	this.shape_37.setTransform(328.5,118.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D6B0A0").s().p("AgNAKIgBgDIAAgDIABgDQABgCADgCQADgDAFgCIACgBIAEgCIACAAIADABIABAAIACACIABACIABACQAAADgCABQgGAGgHAEIgEACIgDAAQgDAAgDgCg");
	this.shape_38.setTransform(328.3,116.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B28A7E").s().p("AgUAQIAAgIIAAgBIAAgCIAAgGIABACQAEAEAFgCIAFgCQAGgDAGgGQACgCAAgDIgBgCIgBgCIgCgBIgBgBIAMgEIACADIACAGIABADQAAAAAAAAQgBABAAAAQAAABAAABQAAAAAAABIABADIAAAAQgBgCgGgCIgEABIgGADIgCACIgFAEIgIAGIgEAHIgDAIIAAABQgCgEAAgEgAgUgGIABgBIgBAEIAAgDg");
	this.shape_39.setTransform(328.9,117.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#755E80").s().p("AgzC7QgDgCAAgEIAAAAIAAgBIACgFQAAAAAAgBQABAAAAgBQABAAAAAAQABgBABAAIACAAIAAgBIAEACIACABIABACIAAACIAAAEIAAABIgBADIgBADIgFACIgFgEgAg6CdIgFgBIgDgCIAAAAIAAgCIAAgCIABgCIABgCIAEgDIABAAIADgCIAKABIABAAIADABIACAEIABADIgBACQAAADgDABQgFACgFAAIgFgBgAg5CDQgFgKABgQIABgEIADgoIAAgDIAAgBQgBgKgCgIQgEgMgKgKQgIgIgDgHIgBgHQAAgDACgDIgCABIgBAAIgBgFIAAgBIgFgSIAAgEIgBgEIgCgNQgCgJgBgJIAAgGIgBgBIgCgCIgBAAIgBgCIAAgIIAAgBIAAgBIAAgCIgBAAQAAgEADgDQACgDABgEIgCgBIgBgCIgBgBIgFgDIgBgBIAAgMIABgBIgBgKQAAgHAEgGIAFgNIABgCIgDgEIgFgGQgCgCAAgDQABgEAEgBIADgBIAGADIAGAFIAEAGIAEAIQAAAEgDAEIgGAIQgDAGAAAGIgBALIAAABQAFAEADAGQAEAGgDAHQgBAGgEAFQAGAGAAAJQABALADAKQADAKAAAMQAAAMgFAKIABgBQAJAFAGAGQAJAIAHAMQAKAWgCAYQgCAXADAYQABAPgGAJIgFAGQgEgEgCgEgABlBSIgHgVIgDgOQgEgMgHgKIgBgBIgCgFIgGgPIAAAAIABgCIACgCIAEAAIAAAAQAMAFAFAMQAGAMADANIACAEIAAABIAAABQADAPABAPIAAABQgCADgFACIgCgCg");
	this.shape_40.setTransform(362.7,144.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#5F4B67").s().p("AgpDPQADgDAAgEIgBgCIgBgCIgBgBIADACIAFABIAEAAIABgBIAAACIgBAEIABACQgDgDgEADIgIAEIACgCgAg4DAIAAABIAAABIgCABIACgDgAgsC5IgEgBIAAAAIgCABIAAgCIABAAIAHACIAAABIAAABIgCgCgABQCvIAGgJQADgEgBgEIgDgKIAAgCIACgDIAFgBQgBgQgDgRQgJg0gZgvQgZgtgWgwIgKgaIgCgHIgBgEIgCgDQgEgHgCgIIAAgCIgCgEIgCgGIgCgGIABAEIAFgFIAKgKIAKgIIAEgDQAAAZAHAZQANAzAUAyIATAsIAGAOIACAFIANAfIACAGIAHAWQAFAWABAXIAAgBIgEAAIAAAAIgDABQgDABgCACIgBABIgBACIAAACQAAAKAKACIAEACIAAAEIABACIADACIAEABIAAACIAAABIgWAAQgDAAgCADIAAACIAAABIgCACQgCgEgCgDgAg9CZIABgFIABgDIAAgBQACAEAEADIAFgFIABAFIAAAEIgBgBIgKAAIgDACIAAgDgAhGBWQgKgbgFgdIgCgQQADAHAIAIQAKAKAEANIACAOIABADIAAACIAAACIgDApQgDgOgFgOgAhTgDIgBABQAFgKAAgLQAAgMgDgKQgDgKgBgLQAAgJgGgGQAEgGABgGQADgHgEgGQgDgGgFgDIAAgCIABgLQAAgGADgFIAGgJQADgDAAgFIgEgHIgEgGIgGgFIgGgEIgDABQgEACgBAEQAAADACACIAFAGIADAEIgBABIgFAOQgEAGAAAHIABAKIgBAAIgBgLIgBhPIATAMQAeASAfgDIgFADIgGAGIgFAGIgJAQIAAACQgDAJABAKIgDgBIAAAAIgEABIgBAAIgBABIgCACQgEAKAAALQAAAsAFAqIACAbQgGgHgJgEgAhagCIABADIABAAIACgBQgCADAAADIgCgIgAhlgwQgEgLAAgLIABABIACACIABABIAAAFQABAKACAJIACAMIgFgSgAhshUIgDgVIABAAIAFADIABABIABACIACACQgBAEgCADQgDADAAADIgBAAgAAcizIADABIABAAIgBAAIAAADIgCgCIAAACIgBgEgAAHjLIAEgBIAAACIgEgBg");
	this.shape_41.setTransform(362.9,142.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#744755").s().p("ABHBnQgMgFgMgHQgIgEgJgDQgJgEABgIQABgEADgDQACgCADgBQAMABAKAHQAJAFAKADQAMAEANACIAYADQAIABACAJQgOALgSAAQgNAAgPgFgAh2gTQALgQAUgPIAagVIARgQIARgUIAAAiQgcAegdAbQgaAWgSAaQgIgbASgYg");
	this.shape_42.setTransform(350.3,106.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#59373F").s().p("AAfB/IAAgBIAAABgAACB1IACABIAAAAIgCgBgACKBrIADgBIAAABIgDAAgAAzBlQgFgGgJgBIgVgFIgIgCIgNgIQgRgKgMgMIgIgIIgCgDIgDgEIgFgIIAKgIQAagOASgVIC1AAQgBAJgEAKQgJAWgOATQgNATgSARIgkACQgHABgEAFIgEAHIAAABQgLAAgLgCgAgLAwQgDADgBAEQgBAIAJAEQAIADAIAEQAMAHAMAFQAlANAXgTQgCgJgIgBIgYgDQgNgCgMgEQgKgDgJgFQgKgHgLgBQgDABgCACgAghBTIAAgCIAAgBIAAAAIAAgFIADACIgBAAIgBACIgBACIABACgAjOBMIAAAAIAAAAIgCgCIAAAAIgCgGIAFAHIACABIgCABIgBgBgAjJBAIgFgIQgHgHAAgKIAAgTQAAgKAHgIQAHgGABgIQAWgKAUgOQgSAZAIAaQASgZAagXQAdgbAcgeIAABRIAIAAQgbAPgdANQglAQgVAaIAEAGQgRAAgRgDgADVgIIAAgBIABAAIgCAIIABgHgAhUhoIANgPIAGgHIAAACIgRAUIgRAQIAPgQg");
	this.shape_43.setTransform(354.1,108.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4F3137").s().p("AAEGOIgIgHQADgQAPgMQAOgLAIgPIAKgXQADgHAIgDIAAAAIABgDIgJgFQgDgDABgFIADgJIAGgJQADgDAAgFIgDgDIgGgEIgEgDIgCgCQAAgEACgDIAFgKQACgDAAgEIABgDQgCgEAAgGIAAgRQgLgPgFgZIgKg/QgEgfgJgdQgGgRACgNIgCAAQAAgLgEgJIgBgKQABgIgCgGIgChJQgBgUAFgQIAAAAIAAgBQgGgEgEgGIAAgBIAAgLIAAgNIAAgCIAAgCIAAgCIAAgEIgEgEIgEgGIgEgEIgBgCIAAAAIgCgDIgCgBIgCgEIgDACQgiAZgpAHQgfAFgfgFIgCAAIgBgCIgGgHIACAGIABABIABABIAAABIABAAIAAABIgBACIgBABQgGADgHAAIACADIAJALIAJALQACAEAAADIABABIACABIABACIACACIACABIABAGQABALgHAIQgJAKgMAIQgIAEgJgDIgCgCIgCgCIgBgCIgCgCIAAgCIABgGIAAAAIABgGQADgJAGgGIAKgKIACgCIACgDIAGAAIgEgEIgJgMQgGgGgCgHIgBgDQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAIgBgDIgCgGIgCgDIgMAEIgDAAIgCgBIgEACIgDACQgFABgDAEQgDACgBADIgBABIAAACIAAADIAAAGIAAACIAAACIAAAHQAAAEACAEIAAgBIADgIIAEgHIAIgFIAGgGIACgCIAGgCIAEgBQAGABABACQAAACgGADIgEACQgGAEgFAGQgHAIgDAJIgFAHIAAABIABAAQAGgBAEADIAHAIIAHAHQACADgCADQgGAEgEgGQgEgHgHgCQgHgDABgFQgFACgEgGQgEgEAAgGIgBgNQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgHgDgEgIQgCgEAAgFIABgJIgBgGIAAgDIADgEQAEgFAEgCIAVgMIADgBIAIAAIADABIACACIACAEIADADIADADIABACIAAACIgBABIAEAAIAAAAIgCgEIABgDIAEgGIACgBIADgCIAFgCIAAAAIAFACIAAAAIgBgKIABgSQAAgFACgDIAXgbIAAAAIAAAEQAgghAqghQAPgLANgOQARgQANgUIAAAPIgGAHIgMAOIgPARIgaAVQgUAPgLAPQgVAPgVAKQgCAHgGAIQgHAHAAALIAAATQAAAJAGAIIAFAHQASADARAAIgEgGQAUgaAlgQQAegMAbgRIA6AAQgSAWgaAPIgJAIIAFAHIADAFIACACIAGAJQAMAMARAKIAOAHIAIADIAVAEQAJABAFAHQAMACALAAIAAgBIAEgHQAEgGAHAAIAkgCQASgRANgUQANgTAJgVQAFgKABgLIAeAAIAAACIgBAGIABgIIAKAAQAAAUgKAUQgNAegZAZQgKAKgOAHIAAAFIAAAJIAAAHIgBACIgCACIgDADIgEAEIAAABQgBACgCADQgFAGgBAHIgCAOIAAAEIAAAAIABAlQABAOAEAPQASA3AbA2QAcA1AAA/IgBAYIgCABIAAADIAAACIAAABIABABIACACIAAAAIADAEIACAFIACADIgBACIAAACIgBABIgBABIgCABIAAACIAAACIABADIABAAQAKAIACANIAAABIgGAAIgFAAIAEABIAFADQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAIABABIAEADIgCADQgEAHABAKIgFAHIgJAOQgEAGgFAFQgUAHgRgKQgMgHgKgJIgCgEIAAgBIACgCIACgCIABgCIACgBIAAgBIADAAIAHABQgBgHgCgFIAAgPQgBgNAEgLIACgEIgBgEQgBgDABgDQACgDACgBQAFgDgDgEQgEgCAAgEQgBgEADgCIAEgIIACgCQgIgUgFgbQgJgygaguQgbgvgVgxQgGgNgDgNQgCgCgBgEQAAgHgDgHIgEgLIgFAEIgDAGQgFALgBAOQgCA4AKA1QAJA1AFA3QAGA4gKA0IAAgCIgBgEIgBgHIgEgjIgBgTIgCgkQgCg3gJg2QgKg1gCg2IAAgHIAAgCQAAgKACgJIABgCIAJgQIAEgGIAHgGIAEgDIACgBIABgBIAAABIAAgBQAGgEAIgBIAAgBIABgBIAAAAIADACIABABIgCADQgDAFgFAFIgEAEQADACABAGIAAABIABAFIACAGIACAGIACAEIAAACQACAIAEAHIACADIABAEIADAHIAKAaQAWAvAZAuQAaAvAIA0QADARABAQIgFABIgBADIgBACIADAKQABAEgDAEIgGAJQADADABAEIADgCIgBgBIABgCQACgDACAAIAWAAIAAgBIABgCQAAgEACgDIgBgCIgCgEIgBgEIABgCIgCAAQgBgCgDgCIAAAAIACAAQgCgNABgRIAAgbIAAAAQgBgQgCgOIgBgBIAAgCQgGgegPgbQgdg2gTg3QgLgjAFggIAAgCIACACIABgDIAAAAIADgLIAAgCQABgIADgHIAAgBIgPACIgEAAIgJABIAAAAIgEABIgEAAIABADIgUAAIgSgBIgCgCIgEABQgjgFghgRIgGgDIAAADIABAQIABBPIAAALIABANIACAVIABAAIABABIAAABIAAABIAAABIAAAHIABACQABALAEALIAEASIABAEIABAFIAEARIAAACIACAJIABAIIADAQQAEAdAKAbQAFAOADAOIgBAEQgBAPAGALIgBABIgBADIgBAFIAAADIgBAAIgEADIgBACIgBACIAAABIABACIgBAAIABABIADACIAEABIACACIAGAGIABABIABAEIAAACQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABIgCAEIgCADIgCAFIgDAEIAAABIACAEQADADAEAAQAEAAAHgDIAAAAIAIgEQAEgDADADIAAgCIAHADIgBAIQAPANACAXQABAYgZAMQgTAKgNARQgHAKgKAAIAAgDIgFABQgHAEgHAAQgJAAgMgHgADxEqQgGAHgEAJQgDAKABALIAFgCIAGgOQAEgIAFgGIAGgLIAAAAIgGgDIgDgBQgBAEgEAEgADDFCIgBACIADABIgBgCIABgEIgCADgABgEiIgCADIADgCIAAABIgBgCgAixiIQgCADgEACQgEACgCAEIgFAHQgCAEABAEIABACIABABIAKABIAEgEIAGgEIAGgGIACgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIgMgBgABCiIIABAAIgBAAgAAoiQIAAgBIgCAAIACABgACticIAEABIAAgCIgBAAIgDABgABzibIAAAAIAAgCIAAACgAj/jGQgBAAAAABQgBAAAAAAQAAABAAABQAAAAABABIACADQgCAEABAEIAAAKIACABIADADIACABIAAgBQgBgJAFgGIACAAQAEAAABgEIgBgCIACgCIAGgEIAIgFIACgCIACAAIgBgBIgEgDIgCgCQgGAAgGACIgCAAQgHADgEAEIgCAAIgDACgAACi1IAAACIAAAAIAAgCIABgCIABgCIAAAAIgCgCIAAAEIAAABIAAABIAAAAg");
	this.shape_44.setTransform(350.6,134.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CB4553").s().p("AAOAwQACgEgDgCIgGgIIgHgHQgEgDgFAAIgBAAIAAAAIAEgHQADgJAGgIQAFgFAHgEIAAABIAAADIADAFIADAEIAHAJQACADAFABIABgBIgKAKQgHAHgCAIIgCAHgAACAHQAAAFACAEQACAGAGADQAFAEACgFIABgCQAAgEgDgBQgDgCgBgEIgCgGIgEgDQgEAAgBAFgAgegJIgDgCIgBgBIgBgKQAAgFABgDIAFADIAFAEQgEAFAAAKgAgTgeIgDgFIgEgDIgDgBQAEgEAHgDIACgBQgCAEAEAEIAFAEIgHAEIgCACIgBgBg");
	this.shape_45.setTransform(331.9,122.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#755E80").s().p("Ag0C7QgCgCAAgEIAAAAIAAgBIABgFQACgCADgBIACAAIAAgBIADACIADABIABACIABACIAAAEIAAABIgBADIgCADIgFACIgGgEgAg6CdIgFgBIgCgCIAAAAIgBgCIAAgCIABgCIABgCIAEgDIABAAIADgCIAKABIABAAIACABIAEAEIABADIgBACQgBADgDABQgFACgFAAIgFgBgAg4CDQgHgKACgQIAAgEIAEgoIAAgDIAAgBQgBgKgCgIQgEgMgKgKQgIgIgDgHIgBgHQAAgDACgDIgCABIgBAAIgBgFIgBgBIgDgSIgBgEIgBgEIgDgNQgCgJAAgJIAAgGIgBgBIgCgCIgBAAIgBgCIAAgIIAAgBIAAgBIAAgCIgCAAQABgEADgDQACgDABgEIgCgBIgBgCIgBgBIgFgDIgBgBIAAgMIABgBIgBgKQAAgHADgGIAGgNIABgCIgCgEIgGgGQgCgCAAgDQACgEADgBIADgBIAGADIAGAFIAFAGIADAIQAAAEgDAEIgGAIQgEAGABAGIgBALIAAABQAFAEADAGQADAGgBAHQgCAGgEAFQAGAGAAAJQABALADAKQADAKAAAMQAAAMgFAKIABgBQAIAFAIAGQAJAIAGAMQAKAWgCAYQgBAXACAYQABAPgGAJIgFAGQgDgEgCgEgABkBSIgGgVIgDgOQgEgMgHgKIgBgBIgCgFIgGgPIAAAAIABgCIACgCIAEAAIAAAAQALAFAHAMQAFAMAEANIABAEIAAABIAAABQADAPABAPIAAABQgCADgFACIgDgCg");
	this.shape_46.setTransform(366.1,147.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#5F4B67").s().p("AgpDPQADgDAAgEIgBgCIgBgCIAAgBIACACIAFABIAEAAIABgBIAAACIgBAEIABACQgDgDgEADIgIAEIACgCgAg4DAIAAABIAAABIgCABIACgDgAgtC5IgDgBIAAAAIgCABIAAgCIABAAIAHACIAAABIAAABIgDgCgABQCvIAGgJQADgEgBgEIgDgKIABgCIABgDIAFgBQgBgQgDgRQgJg0gagvQgYgtgWgwIgKgaIgCgHIgBgEIgCgDQgEgHgCgIIAAgCIgCgEIgDgGIgBgGIABAEIAGgFIAJgKIAKgIIAEgDQAAAZAGAZQAOAzAUAyIATAsIAGAOIACAFIAMAfIADAGIAGAWQAGAWABAXIAAgBIgEAAIAAAAIgEABQgCABgCACIgBABIgBACIAAACQAAAKAKACIAEACIAAAEIABACIADACIAEABIAAACIAAABIgWAAQgDAAgCADIAAACIAAABIgCACQgBgEgDgDgAg9CZIABgFIABgDIABgBQACAEADADIAFgFIABAFIAAAEIgBgBIgKAAIgDACIAAgDgAhGBWQgKgbgEgdIgDgQQADAHAIAIQAKAKAEANIACAOIABADIAAACIAAACIgEApQgCgOgFgOgAhTgDIgBABQAFgKAAgLQAAgMgDgKQgDgKgBgLQAAgJgGgGQAEgGACgGQABgHgDgGQgDgGgFgDIAAgCIABgLQgBgGAEgFIAGgJQADgDAAgFIgDgHIgFgGIgGgFIgGgEIgDABQgDACgCAEQAAADACACIAGAGIACAEIgBABIgGAOQgDAGAAAHIABAKIgBAAIgBgLIAAhPIATAMQAdASAfgDIgFADIgGAGIgEAGIgKAQIAAACQgCAJAAAKIgDgBIAAAAIgEABIgBAAIgBABIgCACQgDAKgBALQAAAsAFAqIADAbQgIgHgIgEgAhagCIABADIABAAIACgBQgCADAAADIgCgIgAhlgwQgDgLgBgLIABABIACACIABABIAAAFQAAAKACAJIADAMIgFgSgAhthUIgCgVIABAAIAFADIABABIABACIACACQgBAEgCADQgDADgBADIgBAAgAAcizIADABIABAAIgBAAIAAADIgCgCIAAACIgBgEgAAHjLIAEgBIAAACIgEgBg");
	this.shape_47.setTransform(366.3,146.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#48394F").s().p("Ag6DcIgEgCIgCgFIAAgBIADgEIACgFIACgBQAAADADADIAFAEIAFgDIACgCIABgEIAAgBIAAgDIgBgCIgBgCIAAgBIAAgBIgHgCIgBAAIgBgDIgBgCIgGgGIgCgCQAHACAIgEQADgBABgCIABgCIgBgEIgDgDIgCgBIgBgEIgBgFQAHgJgCgQQgCgXABgXQACgYgKgWQgGgMgJgJIgDgbQgFgqABgsQAAgLADgJIACgDIABgBIACAAIADgBIAAAAIADABIAAACIAAAHQACA3AKA1QAJA1ACA3IACAkIABATIAEAjIABAHIABAEIgBACIgEAAIgFgBIgCgDIAAABIACADIAAACQAAADgDADIgCACIAAABIgEABIgIgGIADAFIgDABIAAABIgCAAgABsCyIgDgCIgBgCIABgDIgFgDQgKgCAAgKIAAgBIABgCIABgCQACgCADgBIADgBIAAAAIAEAAIABABQgCgXgFgWIACABQAFgCACgCQABANgBAOQgBAQACANIgCAAIAAAAQADACABADIACAAIgBACIABADIACAEIABACQgCAEAAADIgFgBgAhFCuIABAAIAAABgABZBLIgNgeIABABQAIAKADALIADAPIgCgHgAg9BKIgCgOQADAIAAAKIgBgEgABmA/QgEgNgFgMQgGgNgMgFIAAAAIgEABIgCABIgBACIAAABIgSgsQgVgygNgzQgHgZAAgYIgEACIgKAIIgJAKIgGAGIgBgFIgBgEIAAgCQgBgFgDgDIAEgEQAFgFADgFIACgDIgBgBIgDgCIAAAAIgBACIAAAAQgIABgGAEIAAABIAAgBIgBABIgCABQgeADgegRIgTgNIgBgPIAAgEIAGAEQAhAQAjAFIAEgBIACACIASABIATAAIgBgDIAEAAIAEABIAAgBIAAAAIAJgBIAEgBIAPgBIAAAAQgDAIgBAHIAAADIgDAKIgBAAIgDAAIABADQgFAgALAjQATA4AdA2QAPAaAGAeIgBgDg");
	this.shape_48.setTransform(366.4,145.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#744755").s().p("AABCpQgLgFgLgHQgIgEgJgDQgKgEACgIQAAgEADgDQACgCAEgBQALABALAHQAJAFAIADQANAEANACIAYADQAIABACAJQgOAMgTAAQgNAAgPgGgAi7AuQALgQAUgPIAagUQASgQAPgUIAAABIAAABIAPgWIACgDQATggAPghIACgEIAEgHQALgLAKgNIADgCIANgIQABALgCAMQgFAbgUAgQgYAmgfAjIgEAEIgJALIAAgCQgcAdgdAaQgaAXgRAaQgJgbATgZgACFhOQgNgHgPgGQgNgGgIgLQgFgGACgFQABgDAEgDQACgDADgBQAJAJAKAIIAGADQAOAGAPAFQALAEALACIAUAFIAJADQACABACADIABABQgPAMgRAAQgRAAgTgLg");
	this.shape_49.setTransform(360.7,103.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#59373F").s().p("AgXDSIAAAAIAAAAgAg0DIIACABIAAAAIgCgBgABTC+IADgBIAAACIgDgBgAgDC4QgFgGgJgBIgVgEIgIgDIgOgHQgRgLgMgMIgIgIIgCgDIgDgEIgFgHIAKgIQAZgOASgVIABAAIANgQQAVgiAWgeIgBgBIgBgCIgBgEIgEgDIgHgDIgBAAQgaAOgQAaQgPAagYAQIgTALIgEAAQgZAPgbAMQglAQgVAaIAEAGQgRAAgRgDIgFgIQgHgHAAgKIAAgTQAAgKAHgIQAHgHABgHQAWgLAUgOQgSAZAIAbQASgaAagXQAdgaAbgdIAAACIAKgKIADgEQAfgkAYgmQAVggAFgbQACgMgBgLIgNAIIgDACIABgCIACgCQAIgKAKgHIAAAAIADgBIAAgBIADgCQANgHANgFIAVgIQAGAJACALIAAAQIACAFQADAHAFAHIACADIABAEQAGAJAHAIIACABQgEABgCADQgDADgBADQgCAFAFAHQAIAKANAGQAOAGAOAHQAnAWAdgWIgBgCQgCgDgCgBIgKgDIAEgBIABAAIAfAAQAMgDAMgEIANgEIAFgHQAIgKABgKQACgMgIgNIgDgEQgPgUgWgRIABgBQAqAMAOAeQAJARgCAXIgBAUIgBADQgFADgEAIIgRAcQgLASgPANIgNAJIgrAbIgeAAIgEgBIgFgIIgIgPQgGgLgMACQgGgBgFADIgDgFQgVgngRgpIAAgBQAAgGgCgEIgDgKQgCgGgDgFIgGgKQgCgEAAgFIgBgCIgDgFIgCgEQgEAAAAAEIAAAFIAAABIABAHIADAIQABAEACACQADAEABAEIgBAHIACABIABACIADAEIACADIAAACIAAADIAAABIAAACIAAACIAjBMIACAGQAJATAOAPQAFAHAHAGQAMAKAMAEIAAAAIABABIgBACQgBADAAAEIACAQQgBAKgEAIQgJAWgOATQgNATgSASIgkACQgHAAgEAGIgEAGIAAABQgLAAgKgCgAhCCDQgDADgBAEQgBAJAJADQAJADAIAEQAMAIAMAEQAkAOAXgUQgCgJgIgBIgYgDQgMgBgMgEQgKgEgJgFQgKgGgMgCQgDABgCACgACyg5IABgCIABAAIgBgBIgBAAIAAAAIAAADgAhYCmIAAgBIAAgBIAAgBIAAgFIADADIgBAAIgBACIgBACIABABgAkFCfIAAAAIAAAAIgCgCIAAAAIgCgGIAFAHIACABIgCACIgBgCgACeBLIAAAAQgBgIgCgIIABAAIAFABIgCAMIgBADIgBAGIABgGgAh+gjIAFgHIAAABQgPAUgSAQIAcgegAh5goIAPgUIgPAVgAhDiHIAAgDIABgBIACgBIgEAIIABgDg");
	this.shape_50.setTransform(363,103.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D6B0A0").s().p("AjHERIgBgCIAAgDIABgDQABgDADgCQADgEAFgBIADgCIAEgCIACABIADAAIABABIACABIABACIABACQAAADgCACQgGAGgHAEIgFACIgDABQgDAAgDgDgAC6hyQgHgGAAgJIgBgTIAAgRQgBgJAJgBIADABIACACIABACQgDAEABAIIADATQABALAEAJIAAABIgCACIgCACIgDABIgFgBgACSjkIgFgBQgBgGAAgHIABgOIAAgKIAEgFIABgBIACgCIAAAAIADgBIAFAAIADABIACACIACAEIAAABIABABIACACIAAAGIAAAHQAAADgCADIgFADIgGAFQgEADgCAFIAAABIgBAAgAC4j3IgDgDIAAgCIAAgCIABgCIABgCIABgBIADgCIAEgCIACABIAEABIAAAAIACABIABACIABACIgBAEQgCAEgDACIgFABQgDAAgDgCg");
	this.shape_51.setTransform(350.3,93.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B28A7E").s().p("AjXE/IAAgIIAAgCIAAgCIABgGIABADQAEAEAFgCIAFgCQAHgEAFgGQACgCAAgDIAAgCIgCgCIgCgCIgBAAIAMgEIACADIACAGIACACQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAABIABADIgBAAQAAgCgHgCIgDABIgHADIgCABIgFAGIgIAGIgEAGIgDAIIgBACQgCgEAAgEgAjWEoIABgBIgBADIAAgCgACghLIgDgFIAAgBQADgDgBgFIAAgYIgBgYQAAgJgDgFIgGgGIgCABIgJgIQgEgEgGgBIAAgBQgIgBgCgLIgBgGIgDgJQgBgLACgMIAAgFIAAgEIAAgBIgCgFIABgBIABgBIABgCIgBgCIgHgGIgFgEIgCgCIgBgCIgBgCQAFgBAGABIATACIADgBIABgCIABgCIgBAAIADgDIABgCQAFgIADgGIACgFIAAAAQACAEADAEIAGAFQAEADADgEIABgBQABgDgDgDIgEgEIgEgDIgFgEIAAABIgBAAIAAgCQAJgTANgQQAJALgBAPQAAAQgIAOIgBABQgDAGgBAFQgCAGABAGQAEABADgCIABAFIAAAAIgDABIAAAAIgCABIgBACIgBACIgBACIAAACIADADIABABIgCABIgBACIgBACIAAABIABACIADADQAFAEAFgDQAEgCABgEIABgDIAAgCIgCgCIgBgBIABgBIAAABQAFADACAFQADAIgFAHQgGAIgJAFIgKAEIgBgCIgBgBIgDgCIgDABIAAABIgBABIgBACIAAACIAAABQABAHAFABIAAABIgBAJIAAAJQAAABABABQAAABAAAAQAAABABAAQAAABAAAAQACABADgBQACgDABgDQAJAQAUAIIgCAEQgDAHAAAIIAAAEQAAAFAEAFIAHAJIAAABIABAAIACABIAAACIAEAEIAEADIABABQgFACgCAGIgBAAIgDACIAAABIgEAAQgJACgIAAQgMAAgMgFgACjiGIABARIAAASQABAJAHAHIAEAAIAEgBIACgBIABgCIABgBQgEgKgCgKIgDgTQgBgIAEgEIgBgDIgCgBIgEgCQgJACABAJgACGj0IgBABIgBACIgBABIgFAFIAAAJIAAAPQgBAGACAHIAEAAIABAAIAAAAQACgFAFgEIAFgEIAFgEQADgCgBgDIAAgIIABgGIgDgCIgBAAIABgCIgCgDIgCgCIgEgBIgFgBIgCABgACRkPIgBADIgBAAIgCACIgCACIAAACIAAAEIAAADIACAEIADABIACgBQACgBABgDIABgEQADADAEgCIABgCIAAgEIgCgEIgDgDIgEgEQgDABgBADg");
	this.shape_52.setTransform(351.7,90.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#885549").s().p("Ai7BhIAAgIIgBgHIgBgCIAHgDQANgHAJgLQAIgNgHgOIgIgNIgDgCIgNAAIAAgEQADgDACgGIAHgcQAEgQgCgQQgBgMgIgHIAJgIIgCACIAhAFIAIABIABABIgGABQgHAAgFADQgFACgBADIAAACQANAFAPgHQATgIASAOIARAMQAEADADgBIADADIgEADIAAACIABAEIADAFIABAGIAAAGIAAAEIAFACIACABIADADIABABIABACIgCACIgCgBIAAAAIgDABIgCABIgGAEIgCABQABAIgEAIQgGAKgLAIQgRAKgQAGIADADIAHAEIAHADQgDAEgEABIgMAEQgFABAAAEIADADQAFADAHACIAFACIgIAGQgJAHgJABQgNABgBAKIACABIAAAAQgWgEgWgOgAh1AWIABACQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABIgDADIgCACIgCACIAAACIABACIAAACIgBABIgBACIgDAGIgBADIACADIADABIADgBIACgDIAEgDIACgCIABgCIABgCIAAgCIAAgCIgBgBIABgCIABgDIACgBIAFgCIABgCIABgCIAAgCIgBgCIgBgBIgBgCIgCgCQAEgCAGAAQADAAABgEIgCgEIgCgBIgEAAIAAgBIAAgBIAAgCIgEgCIgFgBIANgBIACgDIAAgCIABgCIABgCIAAgCIAAgCIgEgCIgOgBIAHgEQAHgCAFgGQAHgHgMACIgDABIgBAAQgHAFgJAFIgHAEIABgBIACgBIADgCIABgBIACgBIAAgDIgCgDIgDgDIgGgDIAAgBIABgBIgBgGQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgEgCIgGgBQgCABgCACIAAABQAFAHgDABQgEADgCAEIgBADIAAACIABACIAEACIgBACIgEAHIgCADIgBACIAFACIAFACIgCACIgDAEIgEADIgBACIAAABQABABAAAAQABAAAAAAQABABAAAAQABAAAAgBIAeAEIgNAEQgEABgDADIgEADQgFAEAAAGIACAEQAFADACgGQACgGAGgCIAKgDgACdBhIAAgBQgMgCgNgJIgEgCIAAAAQgPgIgOgLQgSgNgGgSQAFgSgOgPQgNgOgMgPIgBgCIgDAAIgmgBIgHACIgGACIgCAAIABADQgGABgGABIgCgHIgCgIIgDgFIgCAAIAFgHQABgFAEgEIAEgEQAegjA1gPQABADAGAEQAJAEAJAIIAMANIAJAJIgDAAIgNACIgCACIAAABQADAFAFADQgCAFAIAHQAJAHADAKQAFALAAAKIgBgBIgFgEQgEADAAADQgCAGAIAIQAMANACAQIABAJQABAGAGAHQgKgKgJgDIgEAAIgGgBQAKAOANAHIAAAAIABABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAVAfAgAGIAEACQgRgDgQgGgAAphMIAAAAIgCADIgFAFIAAABIAAACIAVAMQAQAKALARQAHANAEANIAEAVQACAKAIgCQACgMgEgNQgEgLgGgMQgFgJgGgJIgPgTQgFgFgHgDIgBgBIAJgEIABgBIABgCIgBgCIgBgCIgEAAIgEgCIABgBIAGgDIAEgDIAAgCIAAgCIgEgCIgRgBIAAAAIgLAEIgOAEQgGACgFADQgHAEABAIIABABQAFADADgDIAHgEIAHgEQAGgDAGAAIABABgAB/BfIACABIAAABIgCgCgACJBCIACABIgBAAIgBgBgAg0gvIAAAAIgBAAQACgDADgCIgDAGIgBgBgABQhyIAGACIAAABIgGgDg");
	this.shape_53.setTransform(387.5,64.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4F3137").s().p("AigJmIABgCIgEgCQgRgBgLgVIgEgLQAMgLAUgCQASgBAPgJIASgLIAAAAQgEgDABgFIAEgJIAFgJQADgDABgFIgDgDIgHgEIgEgDIgBgCQAAgEABgDIAFgKQACgDABgEIABgDQgDgEAAgGIAAgRQgLgPgEgZIgLg/QgEgfgJgdQgFgRACgNIgDAAQAAgMgEgJIgBgKQABgIgCgGIgDhJQgBgUAHgQIgBAAIAAgBQgGgEgFgGIAAgBIAAgLIAAgNIAAgCIAAgCIAAgCIABgEIgFgEIgEgGIgDgEIgBgCIAAAAIgDgDIgBgBIgDgEIgDACQgiAZgoAHQgfAFgggFIgBAAIgCgCIgFgHIACAGIAAABIACABIAAABIAAAAIABABIgCACIgBABQgGADgGAAIACADIAIALIAJALQADAEAAADIABABIABABIABACIADACIABABIABAGQABALgGAIQgKAKgMAIQgIAEgIgDIgCgCIgCgCIgCgCIgBgCIAAgCIAAgGIAAAAIACgGQACgJAHgGIAKgKIACgCIACgDIAFAAIgDgEIgJgMQgGgGgCgHIgBgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIgCgDIgCgGIgCgDIgMAEIgCAAIgDgBIgEACIgDACQgEABgEAEQgCACgBADIgBABIAAACIAAADIgBAGIAAACIAAACIAAAHQAAAEACAEIABgBIADgIIAEgHIAIgFIAFgGIACgCIAHgCIADgBQAHABAAACQAAACgFADIgEACQgHAEgFAGQgHAIgDAJIgEAHIAAABIABAAQAFgBAEADIAIAIIAGAHQADADgCADQgHAEgDgGQgEgHgIgCQgHgDACgFQgFACgFgGQgDgEgBgGIgBgNQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgIgDgEgIQgCgEABgFIAAgJIAAgGIAAgDIADgEQADgFAFgCIAVgMIADgBIAHAAIADABIACACIADAEIACADIAEADIAAACIABACIgBABIAEAAIgBAAIgCgEIABgDIAFgGIABgBIAEgCIAEgCIAAAAIAFACIABAAIgBgKIABgSQAAgEABgDIAXgbIABAAIAAAEQAfghArghQAkgcAagnQASgbAKgfQAFgPALgJQABgFAEgEIAKgKIAQgTIACgCIAAACIAMgKIAAgBIABAAIAFgDIAEgDQAJgGAKgEIAUgIIAIAAQAAgDAEgCIABABIAAgGIACgZQAAgMgFgLIgBgEIgFACQgLgFgLgNQgMgOAAgSIgBgaQgBgGACgEIgBAAIgCgDIgBgBIgBgCQgEgBgDgEIgEgIIgBgEIADgFIABgBIAKAAIAJABQASgBAIgPIAEgGIABAAIACgCIABgEIABgCIAAAAIACgFQAFgRALgNIAEgEQgCgFAGgCIAAgCIAAgCIAAgCIABgCIACgCQAGgHAIgEIAZgLIAPgGQBCgGAhAwQAKgKAOgHQAmgWApgNQAwAGAWAvIACAEQAWAcAKAmQADANANgBQAQgCANABQgMAagbAEQAmALAigLQAAAAAAAAQAAABAAAAQAAABAAABQgBABAAABQgSAsgwAEIAEAJIADAFQADADAEADIABABQgTAAgXgEQgUgDgMgFIgBgBIAAAAIgCgBIAAAAIgSgMQgGgHgDgDQgNgJgIgMIgKgTIgDgGIgCgGIAAgJQgFgCgDgEIgGgKIgGgJIgHgHIgCgBQgVgCgUAFQAIAvgbAsQgdAugvAHQgHgEgOAEIgEABQgbgBABAWIAAADQAEAFAEAEQAGAEAHACIAFACQAIAAAGgDIADABIAAgCIAEAAIAJAAIABACIABABIABgBIgCgCIADAAIADgBQBMAQAjA5IACAAQAGAKAEAMQAGANgDAOIAAADQgEAWgIAUQgHAUgKATQgVAjggAdQgPANgRACQAFAZgNAbQgOAegYAZQgLAKgOAHIAAAFIAAAJIAAAHIgBACIgBACIgEADIgDAEIgBABQAAACgDADQgEAGgCAHIgBAOIgBAEIABAAIABAlQAAAOAFAPQARA4AcA2QAcA1gBA/IgBAYIgBABIgBADIAAACIABABIAAABIADACIgBAAIADAEIADAFIABADIAAACIgBACIgBABIAAABIgCABIgBACIABACIABADIABAAQAKAIABANIAAABIgBAAIAAABIAAADIABACIgBAAIAAAAIgDAGQgHAKgNAAIgGAAQgHACgDAAIgcgBIgBgDQgHgCgFgIQgFgJAAgDQAAgGANgMIAIgGIgBgBQgBgDACgDQABgDADgBQAFgDgEgEQgDgCgBgEQAAgEACgCIAFgIIABgCQgIgUgFgbQgJgygZguQgagvgWgyQgFgNgDgNQgDgCAAgEQgBgHgCgHIgEgLIgGAEIgCAGQgGALAAAOQgCA5AJA1QAJA1AGA3QAFA4gJA0IAAgCIgBgEIgBgHIgEgjIgCgTIgCgkQgBg3gKg2QgJg1gDg3IAAgHIAAgCQAAgKADgJIAAgCIAJgQIAFgGIAGgGIAFgDIACgBIAAgBIAAABIABgBQAGgEAHgBIAAgBIABgBIABAAIACACIABABIgBADQgDAFgGAFIgDAEQADACAAAGIABABIABAFIABAGIACAGIACAEIAAACQADAIAEAHIACADIABAEIACAHIALAaQAVAwAYAuQAaAvAJA0QADARAAAQIgEABIgCADIAAACIADAKQABAEgDAEIgGAJQACADABAEIADgCIAAgBIAAgCQACgDADAAIAWAAIAAgBIAAgCQAAgEACgDIgBgCIgBgEIgBgEIAAgCIgCAAQgBgCgCgCIgBAAIACAAQgCgNABgRQABgOAAgNIAAAAQgBgQgDgOIAAgBIAAgCQgHgegOgbQgeg2gSg4QgLgjAFggIAAgCIADACIAAgDIABAAIACgLIAAgCQABgIADgHIAAgBIgOACIgEAAIgJABIgBAAIgDABIgFAAIACADIgUAAIgSgBIgDgCIgDABQgkgFgggRIgGgDIAAADIAAAQIABBPIABALIAAANIACAVIABAAIABABIAAABIAAABIAAACIABAHIAAACQABALAEALIAEASIABAEIABAFIAEARIABACIACAJIABAIIACAQQAFAdAKAbQAFAOACAOIAAAEQgCAPAGALIgBABIgBADIgBAFIAAADIAAAAIgEADIgBACIgBACIAAABIAAACIAAAAIAAABIADACIAEABIADACIAFAGIACABIAAAEIAAACQgCAAgCADIgBAEIgCADIgDAFIgCAEIAAABIACAEIAEADIABAAIABgBIACgBIgCgFIAIAGIAEgCIAAAAIAIgEQAEgDADADIgBgCIAIADIgBAHIABACIADADIgCAAIAFAOIACABQACARgJARQgNAUgbgDQgVgDgUAHQgFACgEAAQgGAAgFgDgAlUBuQgCADgDACQgEACgCAEIgFAHQgCAEABAEIABACIABABIAJABIAFgEIAFgEIAGgGIACgBIABgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIgMgBgAhfBuIAAAAIAAAAgAh6BmIAAgBIgCAAIACABgAALBaIADABIAAgCIAAAAIgDABgAgvBbIABAAIgBgCIAAACgAipAKIgKAIIAFAHIADAFIACACIAIAJQAMAMARAKIAOAHIAIADIAVAEQAJABAFAHQALACALAAIAAgBIAEgHQAEgGAHAAIAkgCQARgRANgUQAOgTAJgUQAEgJABgJIgCgQQAAgFABgDIABgCIgBAAIAAAAQgMgFgMgKQgHgGgFgGQgOgQgIgUIgCgGIgjhMIAAgCIAAgCIAAgBIAAgCIAAgCIgCgEIgDgEIgBgCIgCgBIABgGQgBgFgDgDQgCgDgBgEIgDgIIgBgHIAAgBIAAgFQAAgEAEAAIACAFIADAEIABADQAAAEACAEIAGALQADAFACAFIADAKQACAFAAAFIAAABQARApAUAnIADAFQAFgCAGAAQAMgBAGALIAIAPIAFAIIAEABIAeAAIArgcIANgJQAPgNALgRIARgdQAEgHAFgEIABgDIABgTQABgYgIgRQgOgegqgMIgGgCIAEADIABABQAWAQAPAVIADADQAIANgCAMQgBAKgIAKIgFAHIgNAEQgMAFgMACIgfAAIgBAAIgEACIgTgFQgMgCgLgEQgPgFgNgHIgGgDQgLgHgHgJIgCgCQgHgIgGgIIgBgFIgCgDQgFgGgDgIIgCgEIAAgRQgCgLgGgJIgVAIQgOAFgNAHIgDACIAAABIgDABIAAAAQgKAHgIAKIgCACIgBACQgLANgLALIgCACIgBABIAAACIgBADIgCADQgOAigUAgIgCADIgPAUIAAgBIAAgBIgFAHIgcAfIgaAVQgUAPgLAPQgUAPgWAKQgBAHgHAIQgHAHAAAKIAAATQAAAJAHAIIAFAHQARADARAAIgEgGQAVgaAlgQQAbgKAZgPIAEAAIATgMQAYgQAPgaQAQgbAagOIABAAIAHADIAEADIACAEIABACIABABQgXAggVAhIgNARIgBAAQgSAUgZANgAmbBOIAAgBQAAgJAEgGIACAAQAEAAABgEIgBgCIACgCIAHgEIAIgFIACgCIACAAIgCgBIgEgDIgCgCQgGAAgFACIgCAAQgHADgEAEIgDAAIgDACQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAABIACADQgBAEAAAEIABAKIABABIADADIACABIAAAAgAigBBIAAACIABAAIgBgCIABgCIABgCIABAAIgDgCIAAAEIAAABIAAABIAAAAgABWgXIAAAAIgBAFIABgFIABgEIACgMIgFgBIgBAAQACAIABAJgAgdl8QADAGAAAIIABAZIAAAYQABAFgDACIAAABIADAGQATAIAVgFIAEAAIAAgBIADgCIABgBQACgFAFgDIgBgBIgEgDIgEgEIAAgBIgCgBIgBgBIAAABIAAgCIgHgIQgEgFAAgFIAAgEQAAgJADgHIACgEQgTgHgJgQQgBADgCACQgDABgCgBQAAAAAAAAQgBgBAAAAQAAgBAAgBQAAAAgBgBIAAgKIABgJIAAAAQgFgCgBgGIAAgCIAAgCIABgCIABgBIAAAAIADgBIADABIABACIABABIAKgEQAJgFAFgHQAFgIgDgHQgCgFgEgEIAAAAIgBAAIgBAAIgDgBIgDgBIgEACIgCACIgBgBIgDgDIAAgCIABgBIABgCIABgCIACgBIAAgBIADAAIAAgBIALABIADABIAIANQAIAOgJANQgJALgMAHIgGADIAAACIABAIIAAAHQAVAOAWAFQA2ALAwguQAOgOAHgTQAMghgFgeIgQAHQgJAFgKgBIgBgCIgBgBIgDgCIgCgBIgFgDIAAgEIAAgGIgBgFIgDgGIgBgEIABgBIADgEIADgCQACgCADAAIABAAIAAgBIABABIAEgGIAKgOIgBgBIgHgIQg0g1g+AnIgKAGQgEAEgGADIACABQAHAHABANQACAPgDAQIgHAdQgCAGgDADQgDABgEAAQgBgGACgGQABgGADgGIABgBQAIgNAAgRQABgPgJgKQgNAPgJAUIgBACIAAAAIABgBIABAAIAAAAIAFADIAEAEIAEADQADADgBADIgBACQgDADgEgDIgGgFQgDgDgCgEIAAgBIgCAFQgDAHgFAHIgBACIgDADIABABIgBACIgBABIgDABIgTgBQgGgBgFABIABACIABACIACABIAFAEIAHAHIABABIgBADIgBAAIgBABIACAFIAAACIAAADIAAAGQgCALABALIADAJIABAHQACAKAIABIAAABQAGACAEAEIAJAHIACgBIAGAGgAFql9IgDgDIgBgEIAAgCIgCgBQgIgWAkgEQATgCAKgRQADgEAAgFQgrAYgYgjQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAOgCANgGQgWgDgNgPIgGgKQgJgOAAgDQgCgLgEgDQgOgvgugbIgGgCQgHgDgIACIgFACQg0APgfAkIgFADQgEAEgBAFIgEAHIABAAIADAGIADAHIABAHQAGAAAGgCIgBgCIACgBIAGgBIAIgDIAmABIADABIACABQALAQANAOQAOAPgFASQAHASARANQAOALAPAIIAAAAIAEACQANAJAMACIAAABQAQAHARADIAAAAgABqigIAAAAIABAAIABABIgBABIgBACIAAgEgAgrngIgCgDIAAgEIAAgEIAAgCIACgBIACgCIABgBIABgDQABgDADAAIAEADIADAEIACADIAAAEIgBACQgEADgDgDIgBADQgBADgCACIgCABIgDgCg");
	this.shape_54.setTransform(370.2,113.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6F453C").s().p("AizBzIAAAAIgCgBQABgLANgBQAKgBAIgGIAIgGIgFgCQgGgCgGgDIgDgDQAAgEAFgBIAMgEQAFgBACgEIgGgDIgIgFIgCgDQAQgFAQgLQALgHAGgLQAEgHgBgIIACgCIAGgDIACgBIADgBIAAAAIACABIACgCQAKAAAJgFIAQgGQAFAcgMAiQgHASgOAOQgnAlgqAAQgKAAgLgCgABhBDQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIgBAAIgBgBQgNgGgKgOIAHABIADAAQAJADAKAJQgFgGgBgGIgCgJQgCgQgMgNQgIgIACgGQABgEADgDIAFAFIABABQAAgLgEgKQgEgKgIgHQgJgHACgGQgFgDgDgEIABgCIABgBIANgCIADAAIgIgJIgNgNQgIgIgKgFQgGgDgBgEIAFgBQAIgCAHACIAFAEIABgBQAuAbAOAuQAEAEACALQAAACAJAOIAGAKQANAPAWACQgNAGgOACQAAABAAAAQAAABAAABQAAAAAAABQAAAAABABQAYAiArgXQAAAFgDAEQgKAQgTACQgkAEAIAWIACABIAAADIABAEQgggGgWgfgABmBDIABgBIgCAAIABABgAhkgtQgDABgEgDIgRgMQgRgOgUAIQgPAHgMgFIAAgCQABgEAEgCQAGgCAGAAIAGgBIgBgBIgIgCIghgEIACgCIAKgGQA+goA0A2IAHAIIABABIgKAOQgEACgCADQgDAAgCACIgDACIgDgCg");
	this.shape_55.setTransform(391,64.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#885549").s().p("ACbB9QgMgQgJgRQgIgOgCgOQgDgMgEgMIgCgBQgEAAgCADQgDADABADQAAADgBADQgCADABAEIAAAGIgBAAQgFgIgDgJQgFgRAGgSQAHgTgPgQQgNgOgLgQIgCgBIgDgBIgmgBIgIADIgGABIgCABIABACQgGACgFAAIgBgHIgDgHIgDgGIgBAAIAEgHQABgFAEgEIAEgDQAfgkA0gPQABAEAGADQAKAFAIAIIANAMIAIAKIgDAAIgNABIgBACIgBABQADAFAFADQgCAFAJAIQAIAGAEALQAEAKAAAKIgBgBIgFgEQgDADgBADQgCAGAIAJQAMANACAPQADAOgBAPIAAAGQgFAHABAMIACAaQAAALAFAKIAHAVIAAAAIgKgLgABBhhIAAABIgDADIgEAEIgBABIAAACIAVAMQAQAKALARQAHANAEAOIAFAUQABAKAIgCQACgLgEgNQgDgMgHgLQgFgKgGgJIgOgSQgFgGgIgDIgBgBIAJgEIABgBIABgCIgBgCIgBgBIgDgBIgFgCIABgBIAGgDIAEgDIABgCIAAgCIgFgCIgRgBIAAABIgLADIgNAEQgHACgFADQgHAFABAHIABACQAFACAEgDIAGgEIAHgEQAGgCAGAAIACAAgAikBMIAAgHIgBgIIAAgCIAGgDQANgHAJgLQAJgNgIgOIgIgMIgDgBIgMgBIgBgEQADgDACgGIAIgdQADgQgCgPQgBgNgIgHIAJgIIgCACIAhAFIAIACIABAAIgGABQgGABgGACQgEACgBAEIAAACQAMAEAPgGQAUgJARAOIARANQAEACADAAIADACIgDAEIgBABIABAEIADAGIABAFIAAAGIAAAEIAFADIACABIADACIABABIABACIgCADIgCgCIAAABIgDAAIgCACIgGAEIgCABQABAJgEAGQgGALgLAHQgQALgQAFIACADIAIAEIAGADQgCAEgFACIgMADQgFABAAAFIADACQAGAEAGACIAFABIgIAHQgIAGgKABQgNABgBAKIACABIAAABQgWgFgWgOgAheABIABACQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgEAEIgCACIgCABIAAACIABACIAAACIgBACIAAACIgEAGIAAADIABACIADABIADgBIADgDIADgDIACgCIABgCIABgCIAAgCIAAgCIgBgBIABgCIACgCIACgCIAEgCIABgCIABgCIAAgCIgBgBIgBgCIgBgBIgCgCQAFgBAFAAQAEgBABgEIgDgDIgCgBIgEAAIABgBIAAgCIAAgCIgFgCIgFgBIANgBIACgEIAAgCIABgCIABgCIAAgCIAAgCIgEgCIgNgBIAGgDQAHgDAFgFQAHgHgMABIgDABIAAAAQgIAGgIAEIgIAFIABgBIACgCIAEgCIABgBIABgBIAAgCIgBgEIgEgDIgGgCIABgBIAAgCIAAgGQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAIgEgDIgFgBQgDABgCADIAAABQAFAGgDABQgDADgCAEIgCAEIAAABIACACIADACIgBADIgEAGIgCADIgBACIAFACIAFACIgCACIgDAFIgEADIgBACIAAACQABAAAAAAQABABABAAQAAAAABAAQAAAAABAAIAdADIgNAFQgEABgDACIgEADQgFADABAGIABAEQAGADACgFQACgGAFgCIALgEgACmAaIAAAAIAAACIAAgCgAgdhEIAAABIgBAAQACgEAEgCIgEAGIgBgBgABoiHIAGACIgBABIgFgDg");
	this.shape_56.setTransform(385.2,66.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D6B0A0").s().p("AjHETIgBgDIAAgDIABgDQABgDADgCQADgDAFgCIACgBIAFgCIACAAIACABIABAAIACACIACACIABACQAAADgDACQgFAGgHAEIgFACIgDAAQgDAAgDgCgAC6hzQgGgGgBgJIAAgTIgBgRQgBgJAJgBIAEABIABACIABACQgDAEABAIIADATQABALAFAJIgBABIgBACIgDACIgDABIgFgBgACSjlIgFgBQgBgGAAgHIABgOIAAgKIAFgFIAAgBIACgCIAAAAIADgBIAFAAIADABIADACIACAEIgBABIABABIACACIAAAGIAAAHQABADgDADIgFADIgFAFQgFADgCAFIAAABIgBAAgAC4j4IgCgDIgBgCIAAgCIABgCIABgCIABgBIADgCIAEgCIACABIAEABIABAAIABABIACACIAAACIgBAEQgCAEgDACIgEABQgEAAgDgCg");
	this.shape_57.setTransform(350.3,93.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B28A7E").s().p("AjXFAIAAgIIAAgBIAAgCIABgGIAAACQAFAEAEgCIAGgCQAGgEAGgGQACgCAAgDIgBgCIgBgCIgCgBIgBgBIAMgEIACADIACAGIACADQgBAAAAAAQAAABgBAAQAAABAAABQAAAAAAABIACADIgBAAQAAgCgHgCIgEABIgGADIgCACIgFAFIgIAGIgFAHIgDAIIAAABQgCgEAAgEgAjWEpIAAgBIAAAEIAAgDgACghMIgDgGIAAgBQADgCAAgFIgBgYIgBgYQAAgJgDgGIgGgFIgCABIgJgIQgEgEgGgCIAAgBQgHAAgDgLIgBgHIgCgJQgCgLACgLIABgGIgBgDIAAgCIgCgEIACgBIABgBIAAgDIgBgBIgGgGIgGgFIgCgBIgBgCIgBgCQAGgBAFABIATACIADgBIACgCIAAgCIAAgBIACgCIABgCQAFgIADgHIACgFIAAABQACAEAEADIAFAGQAFADACgEIABgBQABgEgDgDIgDgDIgFgEIgEgDIgBABIAAAAIgBgCQAJgUAOgPQAJALgBAPQgBAQgIAOIAAAAQgEAGgBAGQgBAGAAAGQAEAAADgBIABAEIAAABIgCAAIgBABIgBABIgCACIgBACIgBABIAAACIADAEIABABIgBABIgCABIgBACIAAACIABACIADADQAFAEAGgDQADgCABgEIACgEIgBgBIgCgCIgBgCIABAAIAAAAQAFAEACAFQADAHgFAIQgGAHgJAFIgKAFIAAgCIgCgBIgDgCIgDABIAAABIgBABIgBACIAAABIAAACQACAGAFACIgBAAIgBAJIABAKQAAABAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQACgDABgDQAJAQAVAIIgCADQgEAIAAAIIAAAEQABAFADAFIAHAIIABACIABAAIABABIABACIADADIAFAEIAAABQgEACgDAGIgBAAIgCACIAAABIgFAAQgIACgJAAQgMAAgMgFgACkiIIAAARIAAATQABAJAHAHIAEAAIAEgBIACgBIABgDIABgBQgEgJgBgKIgEgTQAAgJADgDIgBgDIgCgCIgDgBQgKACACAIgACGj1IAAABIgCABIgBABIgEAGIAAAJIgBAPQgBAGACAHIAEAAIACAAIAAAAQABgFAFgEIAGgEIAEgEQADgDAAgCIAAgIIAAgGIgDgCIgBAAIABgCIgCgEIgCgBIgDgBIgGgBIgCABgACRkQIgBACIgBABIgCACIgCACIAAACIAAADIAAAEIADADIACACIACgBQACgBABgDIABgEQAEADADgDIABgCIAAgDIgCgEIgCgDIgFgEQgCABgCADg");
	this.shape_58.setTransform(351.8,90.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#4F3137").s().p("Ah4JnIABgCIgEgCQgRgBgLgVIgEgLQAMgLAUgCQASgBAPgJIASgLIAAAAQgEgDABgFIAEgJIAFgJQADgDABgFIgDgDIgHgEIgEgDIgBgCQAAgEABgDIAFgKQACgDABgEIABgDQgDgEAAgGIAAgRQgLgPgEgZIgLg/QgEgfgJgdQgFgRACgNIgDAAQAAgMgEgJIgBgKQABgIgCgGIgDhJQgBgUAHgQIgBAAIAAgBQgGgEgFgGIAAgBIAAgLIAAgNIAAgCIAAgCIAAgCIABgEIgFgEIgEgGIgDgEIgBgCIAAAAIgDgDIgBgBIgDgEIgDACQgiAZgoAHQgfAFgggFIgBAAIgCgCIgFgHIACAGIAAABIACABIAAABIAAAAIABABIgCACIgBABQgGADgGAAIACADIAIALIAJALQADAEAAADIABABIABABIABACIADACIABABIABAGQABALgGAIQgKAKgMAIQgIAEgIgDIgCgCIgCgCIgCgCIgBgCIAAgCIAAgGIAAAAIACgGQACgJAHgGIAKgKIACgCIACgDIAFAAIgDgEIgJgMQgGgGgCgHIgBgDQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAIgCgDIgCgGIgCgDIgMAEIgCAAIgDgBIgEACIgDACQgEABgEAEQgCACgBADIgBABIAAACIAAADIgBAGIAAACIAAACIAAAHQAAAEACAEIABgBIADgIIAEgHIAIgFIAFgGIACgCIAHgCIADgBQAHABAAACQAAACgFADIgEACQgHAEgFAGQgHAIgDAJIgEAHIAAABIABAAQAFgBAEADIAIAIIAGAHQADADgCADQgHAEgDgGQgEgHgIgCQgHgDACgFQgFACgFgGQgDgEgBgGIgBgNQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgIgDgEgIQgCgEABgFIAAgJIAAgGIAAgDIADgEQADgFAFgCIAVgMIADgBIAHAAIADABIACACIADAEIACADIAEADIAAACIABACIgBABIAEAAIgBAAIgCgEIABgDIAFgGIABgBIAEgCIAEgCIAAAAIAFACIABAAIgBgKIABgSQAAgEABgDIAXgbIABAAIAAAEQAfghArghQAkgcAagnQASgbAKgfQAFgPALgJQABgFAEgEIAKgKIAQgTIAPgNIgBAAIACgBIAEgCIAFgDQAJgGAKgEIATgJIAIABQAAgEAEgCIABABIAAgGIABgYQABgNgFgLIAAgEIgGADQgLgFgLgNQgLgOgBgTIgBgaQAAgGACgDIgBgBIgCgCIgBgCIgCgBQgEgCgCgEIgEgIIgCgEIADgFIABAAIAKgBIAKABQASAAAIgPIAEgGIAAgBIACgCIABgDIAAgDIAAABIACgGQAGgQALgOIADgEQgBgEAGgDIAAgCIAAgBIAAgCIAAgCIACgCQAHgHAIgFIAZgLIAPgFQBCgGAhAwQALgKANgIQAngVApgNQAwAGAVAuQAUAqgEAuQgDAtAAAtIABADQAAADACACQACAEAFACQAKAGgBAKQgPgHgIgKQgDgBgCgCIgDgEIgEgDIgBgBIAAACQgBAIACAJQACAHAEAHIAJAUQAGALgCAKIAAAAQgSABgKgPIgTgcQgKgOgHgQQgDgGgBADIgBABQgOAEgIgRQgGgNgCgOQgBgPADgOQACgLAAgMQgGgCgCgEIgGgKIgHgIIgHgHIgBgCQgVgCgVAFQAIAvgbAtQgcAugwAHQgHgFgNAFIgFAAQgagBAAAXIABACQADAGAFADQAGAFAHABIAFACQAHAAAHgDIADABIgBgCIAEAAIAJAAIACACIAAABIABAAIgCgDIAEAAIADgBQBaAUAgBOQAGANgDAOQgQBXhBA6QgQAOgSABQAGAbgNAcQgOAegYAZQgLAKgOAHIAAAFIAAAJIAAAHIgBACIgBACIgEADIgDAEIgBABQAAACgDADQgEAGgCAHIgBAOIgBAEIABAAIABAlQAAAOAFAPQARA4AcA2QAcA1gBA/IgBAYIgBABIgBADIAAACIABABIAAABIADACIgBAAIADAEIADAFIABADIAAACIgBACIgBABIAAABIgCABIgBACIABACIABADIABAAQAKAIABANIAAABIgBAAIAAABIAAADIABACIgBAAIAAAAIgDAGQgHAKgNAAIgGAAQgHACgDAAIgcgBIgBgDQgHgCgFgIQgFgJAAgDQAAgGANgMIAIgGIgBgBQgBgDACgDQABgDADgBQAFgDgEgEQgDgCgBgEQAAgEACgCIAFgIIABgCQgIgUgFgbQgJgygaguQgagvgVgyQgFgNgDgNQgDgCAAgEQgBgHgCgHIgEgLIgGAEIgCAGQgGALAAAOQgCA5AJA1QAJA1AGA3QAFA4gJA0IAAgCIgBgEIgBgHIgEgjIgCgTIgCgkQgBg3gKg2QgJg1gDg3IAAgHIAAgCQAAgKADgJIAAgCIAJgQIAFgGIAGgGIAFgDIACgBIAAgBIAAABIABgBQAGgEAHgBIAAgBIABgBIABAAIACACIABABIgBADQgDAFgGAFIgDAEQADACAAAGIABABIABAFIABAGIACAGIACAEIAAACQADAIAEAHIACADIABAEIACAHIAKAaQAVAwAZAuQAaAvAJA0QADARAAAQIgEABIgCADIAAACIADAKQABAEgDAEIgGAJQACADABAEIADgCIAAgBIAAgCQACgDADAAIAWAAIAAgBIAAgCQAAgEACgDIgBgCIgBgEIgBgEIAAgCIgCAAQgBgCgCgCIgBAAIACAAQgCgNABgRQABgOAAgNIAAAAQgBgQgDgOIAAgBIAAgCQgHgegOgbQgeg2gTg4QgLgjAFggIAAgCIADACIAAgDIABAAIACgLIAAgCQABgIAEgHIAAgBIgPACIgEAAIgJABIgBAAIgDABIgFAAIACADIgTAAIgSgBIgDgCIgDABQgkgFgggRIgGgDIAAADIAAAQIABBPIABALIAAANIACAVIABAAIABABIAAABIAAABIAAACIABAHIAAACQABALAEALIAEASIABAEIABAFIAEARIABACIACAJIABAIIACAQQAFAdAKAbQAFAOACAOIAAAEQgCAPAGALIgBABIgBADIgBAFIAAADIAAAAIgEADIgBACIgBACIAAABIAAACIAAAAIAAABIADACIAEABIADACIAFAGIACABIAAAEIAAACQgCAAgCADIgBAEIgCADIgDAFIgCAEIAAABIACAEIAEADIABAAIABgBIACgBIgCgFIAIAGIAEgCIAAAAIAIgEQAEgDADADIgBgCIAIADIgBAHIABACIADADIgCAAIAFAOIACABQACARgJARQgNAUgbgDQgVgDgUAHQgFACgEAAQgGAAgFgDgAksBvQgCADgDACQgEACgCAEIgFAHQgCAEABAEIABACIABABIAJABIAFgEIAFgEIAGgGIACgBIABgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIgMgBgAg3BvIAAAAIAAAAgAhSBnIAAgBIgCAAIACABgAAzBbIADABIAAgCIAAAAIgDABgAgHBcIABAAIgBgCIAAACgAgkh1IAEAEIADADIABAEQgWAfgWAiQgWAhgjATIgKAIIAFAHIADAFIACACIAIAJQAMAMARAKIAOAHIAIADIAVAEQAJABAFAHQALACALAAIAAgBIAEgHQAEgGAGAAIAkgCQASgRANgUQAOgTAJgUQAIgSgEgTQgBgGACgDIAAgBQgNgEgLgKQgHgGgFgHQgOgPgJgUIglhSIAAgCIAAgCIAAgCIAAgCIAAgCIgBgDIgDgEIgCgCIgBgCIAAgGQAAgEgDgEQgDgCgBgEIgCgIIgBgIIAAgFQAAgEAEgBIACAFIAEAHQgBAFACAEIAGAKQADAFABAGIAEAKQACAEgBAFIAAACQASArAYAqQAFgDAFAAQANgBAFALIAJAQIAEAHIAEACIAeAAIArgdQAYgPAQgYIAQgcQAEgIAGgEIACgWQADg/hDgTIgGgCIAEADIABAAQAWARAQAUQASAZgTAXIgEAHIgOAFQgMAEgMADIgegBIgFACIgUgFQgLgCgLgEQgPgFgOgGIgGgDQgKgIgJgJQgIgIgGgKQAAgEgDgDQgGgHgDgIIgBgEIgBgQQgBgLgHgJIgUAIQgOAEgMAIIgDACIAAABIgDABIgBAAQgLAIgIALIgCACQgKANgLALIgDACIgBAFIgCAEQgPAhgTAgIgCADQgKAOgLAOIgcAfIgaAVQgUAPgLAPQgUAPgWAKQgBAHgHAIQgHAHAAAKIAAATQAAAJAHAIIAFAHQARADARAAIgEgGQAVgaAlgQQAngQAlgYQAYgPAPgaQAQgcAagNIAAgBIAHADgAlzBPIAAgBQAAgJAEgGIACAAQAEAAABgEIgBgCIACgCIAHgEIAIgFIACgCIACAAIgCgBIgEgDIgCgCQgGAAgFACIgCAAQgHADgEAEIgDAAIgDACQAAAAgBABQAAAAAAAAQAAABAAABQAAAAAAABIACADQgBAEAAAEIABAKIABABIADADIACABIAAAAgAh4BCIAAACIABAAIgBgCIABgCIABgCIABAAIgDgCIAAAEIAAABIAAABIAAAAgAB+gXIgBAGIAEgXIgGgBQADAIAAAKgAAKl9QAEAFAAAJIAAAYIABAYQAAAFgDADIABABIACAFQAUAJAVgGIAFAAIAAgBIACgCIABAAQADgGAEgCIAAgBIgEgDIgEgEIgBgCIgBgBIgBgBIAAABIgBgBIgHgJQgDgFgBgFIABgEQAAgIADgHIACgEQgVgIgJgQQAAADgCADQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIgBgJIABgJIABgBQgFgBgCgHIAAgBIAAgCIABgCIABgBIABgBIACgBIADACIACABIAAACIALgEQAIgFAGgIQAFgHgDgIQgBgFgGgDIAAgBIgBABIAAgBIgEgBIgCAAIgEACIgDACIgBgBIgCgDIAAgCIAAgCIABgCIACgCIABgBIABAAIACgBIAAAAIANAAIADABIAIAOQAHAOgJAMQgIAMgNAHIgHADIABACIAAAHIAAAIQAXAOAWAEQA1ALAwguQAOgOAHgSQANgigFgdIgQAGQgKAFgJAAIgBgCIgBgBIgDgDIgCgBIgFgDIAAgEIAAgFIgBgGIgDgGIgBgDIAAgCIAEgEIACgCQACgCAEAAIAAAAIAAAAIACABIADgGIAKgOIgBgBIgHgIQgzg2g/AoIgJAGQgFAEgGACIACACQAIAHABAMQABAQgDAPIgHAdQgCAHgEACQgDACgEgBQAAgGABgGQABgFAEgGIAAgBQAIgOABgQQABgPgJgLQgOAQgJATIgBACIABAAIABAAIAAAAIABgBIAFAEIAEADIADAEQADADgBADIAAABQgDAEgEgDIgGgFQgEgEgCgEIAAAAIgCAFQgBAGgFAIIgCACIgCADIAAAAIAAACIgCACIgDABIgTgCQgFgBgGABIACACIABACIABACIAGAEIAGAGIABACIAAACIgBABIgCABIACAFIAAABIABAEIgBAFQgBAMABALIACAJIABAGQADALAHABIABABQAFABAFAEIAHAIIACgBIAGAGgAEymsQAFALACAMQADAOAHAPQAJARAMAPIAKAMIACABIgBgCIgIgVQgEgKgBgKIgCgaQgBgMAFgHIADgDIACACIACACIAAgBIAAgBIAAgBIAAgBIACgLIACgGIAAgBIABgCIADgJQAFgQABgSQABhPhDgmIgGgDQgHgCgHACIgFABQg1AQgfAjIgEAEQgEADgBAGIgFAGIABABIADAFIADAIIACAHQAGgBAFgCIAAgCIABAAIAHgCIAHgCIAmAAIADABIACACQAMAPAMAOQAQARgIATQgGASAFASQADAJAFAIIABABIAAgCIAAgFQAAgEABgEQACgCgBgDQAAgEACgCQADgDADgBIACACgACSiiIACABIgBABIgBACIAAgEgAgCnhIgCgEIgBgDIAAgEIAAgCIACgCIACgCIABAAIAAgDQACgDACgBIAFAEIADADIABAEIAAAEIgBACQgDACgEgDIgBAEQAAADgCABIgCABIgCgBg");
	this.shape_59.setTransform(366.2,113.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A06456").s().p("AhtBLIgBgCIAAgDIAEgGIAAgCIABgCIAAgCIgBgCIAAgCIACgBIACgCIAEgEQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIgBgCIAAAAIgLAEQgFACgCAGQgCAFgGgDIgBgEQgBgGAFgDIAEgEQADgCAEgBIANgFIgdgDQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBAAIAAgCIABgCIAEgDIADgFIACgCIgFgCIgFgCIABgCIACgDIAEgFIABgDIgDgCIgCgCIAAgBIACgEQACgEADgDQADgBgFgGIAAgBQACgDADgBIAFABIAEADQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAIAAAGIAAACIgBABIAGACIAEADIABAEIAAACIgBABIgBABIgEACIgCACIgBAAIAIgEQAIgEAIgGIAAAAIADgBQAMgBgHAHQgFAFgHADIgGACIANABIAEACIAAACIAAACIgBACIgBACIAAACIgCAEIgNABIAFABIAFACIAAACIAAACIgBABIAEAAIACABIADADQgBAEgEABQgFAAgFABIACACIABACIABACIABABIAAACIgBACIgBACIgEACIgCACIgCACIgBACIABABIAAACIAAACIgBACIgBACIgCACIgDADIgDADIgDABIgDgBgAB/A3QgJgWgEgZQgDgIgFgJQgLgRgQgKIgVgMIAAgCIABgBIAEgEIADgDIAAgBQgGgBgGACIgCABIgCABIgFADIgGAEQgBABAAAAQgBAAgBAAQAAABgBAAQAAAAgBAAIgBAAIAAABQgEACgEgCIgBgCQgBgHAHgFIADgBIAAABIACgCIAFgCIAHgDIAHgCIAGgCIALgDIAAgBIARABIAFACIAAACIgBACIgEADIgGADIgBABIAFACIADABIABABIABACIgBACIgBABIgJAEIABABQAIADAFAGIAOASIAEAGIABAAIAGANQAHAKADAMQAEANgCAMIgDAAIgBAJg");
	this.shape_60.setTransform(385.6,62.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6F453C").s().p("ABSBdIAAAAQADgIAAgIQAAgIgEgJIABgBIAAgBIgBgBIABgEIgBABIgCABIgBgBIAAAAIgBgBIAAAAIgCgBIgBAAIgGABIgBAAIAAgBIADgBIAIgFIAEgCIAHgHQAIgJAFgNQADAWgNAJIAAAAQAAAJgCAJQAEAGgBAMIAAABQAigaAPgoIABADIgBgEQgCgQgMgMQgIgJACgGQABgDADgDIAFAEIABABQAAgKgEgKQgEgLgIgGQgJgIACgFQgFgDgDgFIABgBIABgCIANgBIADAAIgIgKIgNgMQgIgIgKgFQgGgDgBgEIAFgCQAIgCAHADIAFADIABgBQBCAngBBPQAAAMgDAKIACgBQgJAdgQAcIgBAAQABgFgDgEQgSAYgPAdQgQAQgXAKQAQgTADgXgAiIBjIAAgBIgCgBQABgKANgBQAKgBAIgGIAIgHIgFgBQgGgCgGgEIgDgCQAAgFAFgBIAMgDQAFgCACgEIgGgDIgIgEIgCgDQAQgFAQgLQALgHAGgLQAEgGgBgJIACgBIAGgEIACgCIADAAIAAgBIACACIACgDQAKABAJgFIAQgHQAFAegMAgQgHATgOAOQgnAlgqAAQgKAAgLgCgAg5g9QgDAAgEgCIgRgNQgRgOgUAJQgPAGgMgEIAAgCQABgEAEgCQAGgCAGgBIAGgBIgBAAIgIgCIghgFIACgCIAKgGQA+gnA0A1IAHAIIABABIgKAOQgEACgCAEQgDAAgCACIgDACIgDgCg");
	this.shape_61.setTransform(386.8,66.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#885549").s().p("AihBiIAAgHIAAgIIgBgCIAHgDQANgHAIgMQAJgMgHgOIgIgNIgDgBIgNgBIgBgFQAEgCACgHIAHgbQADgQgBgQQgBgMgIgHIAJgIIgCACIAhAEIAIACIABABIgGABQgHABgFACQgFABgBAEIAAADQANAEAPgHQATgIASAOIARAMQAEADADAAIADACIgEADIAAACIABAEIADAGIABAFIAAAGIAAADIAFAEIACABIADACIABABIABACIgDACIgCgBIAAAAIgCABIgCABIgGADIgCACQABAIgEAHQgHALgKAIQgRAKgQAGIADACIAHAFIAHADQgDAEgEACIgMADQgFABAAAFIACACQAGAEAHABIAEACIgIAGQgIAHgJAAQgNABgBALIACABIAAABQgWgFgXgOgAhaAXIABACQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABIgDADIgCACIgCACIAAACIAAACIAAACIAAABIgBADIgDAFIgBAEIACACIADAAIACAAIADgDIAEgEIACgCIABgBIAAgCIAAgCIAAgCIAAgBIAAgCIACgCIACgCIAEgDIACgBIAAgCIAAgCIAAgCIgBgCIgCgBIgBgCQAEgBAFAAQAEgBABgEIgCgDIgDgBIgDAAIAAgCIAAgCIAAgCIgEgBIgFgBIANgBIABgEIABgBIAAgCIACgCIAAgCIAAgCIgFgCIgNgBIAHgEQAHgCAFgGQAHgGgNABIgCABIgBAAQgHAFgJAFIgHAFIAAgCIACgBIAEgCIABgBIABgBIAAgCIgBgEIgDgDIgGgCIAAgCIABgCIgBgFQAAgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIgFgCIgFgBQgCAAgCADIAAABQAEAHgCABQgEADgCAEIgCADIABACIABACIADACIAAACIgFAHIgCADIAAACIAFACIAFACIgCABIgDAFIgFADIAAABIAAACQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAeADIgNAEQgEACgDACIgEADQgGAEABAGIACAEQAFADACgGQACgFAGgCIAKgFgABxBkQABgMgFgGQACgJAAgJIABAAQAMgJgCgWQgFANgJAJIgHAGIgDADIgIAEIgEACIAAAAIgEACQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAIAAAAQAGgHAEgGIAAgBQAAgCALgRQAGgKADgHQAAgOgLgLQgMgOgMgPIgCgBIgDgBIgGgBIgVAAIAAACIgQAAIgHACIgHACIgBABIAAACQgFACgFAAIgCgHIgDgIIgDgFIgBAAIAFgHQABgGADgDIAEgDQAQgSAVgNIAAABQAKgHALgFQAOgHARgEQABADAGAEQAJAEAJAIIAMANIAJAJIgDAAIgNACIgCACIAAABQADAFAFADQgCAFAIAHQAIAHAEAKQAFALgBAKIgBgBIgEgEQgEADAAADQgCAGAIAIQALANADAQIABAEIgBgEQgQAoghAbIAAgBgABJhNIAAABIgCACIgFAFIAAABIAAACIAVAMQAQAKAKARQAFAJAEAJQAEAYAIAWIABAAIABgJIADAAQACgMgEgNQgEgLgGgMIgHgMIgBAAIgEgGIgOgTQgFgFgIgDIAAgBIAIgEIACgBIAAgCIAAgCIgCgBIgDgBIgEgCIABgBIAGgDIAEgDIAAgCIAAgCIgEgCIgSgBIAAAAIgKAEIgGACIgIACIgHADIgEACIgCACIAAgCIgDACQgHAFABAGIABACQAEADAEgDIAAgBIABAAQAAABABgBQABAAAAAAQABAAAAAAQABgBAAAAIAHgEIAFgDIACgBIACgBQAFgCAEAAIACABgABjBJIACgBIABgCIgBAFIgCgCgAgaguIAAAAIAAAAQACgDADgCIgDAGIgCgBgABwhzIAGACIgBABIgFgDg");
	this.shape_62.setTransform(384.8,64.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#4F3137").s().p("AhzJoIACgCIgEgCQgSgBgKgVIgEgLQAMgLATgCQASgBAPgJIATgLIgBAAQgDgDABgFIADgJIAGgJQADgDAAgFIgDgDIgGgEIgEgDIgCgCQAAgEACgDIAFgKQACgDAAgEIABgDQgCgEAAgGIAAgRQgLgPgFgZIgKg/QgEgfgJgdQgGgRACgNIgCAAQAAgMgEgJIgBgKQABgIgCgGIgDhJQgBgUAGgQIAAAAIAAgBQgHgEgEgGIAAgBIAAgLIAAgNIAAgCIAAgCIAAgCIAAgEIgEgEIgEgGIgEgEIgBgCIAAAAIgCgDIgCgBIgCgEIgDACQgiAZgpAHQgfAFgfgFIgCAAIgBgCIgGgHIACAGIABABIABABIAAABIABAAIAAABIgBACIgBABQgGADgHAAIACADIAJALIAJALQACAEAAADIABABIACABIABACIACACIACABIABAGQABALgHAIQgJAKgMAIQgIAEgJgDIgCgCIgCgCIgBgCIgCgCIAAgCIABgGIAAAAIABgGQADgJAGgGIAKgKIACgCIACgDIAGAAIgEgEIgJgMQgGgGgCgHIgBgDQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAIgBgDIgCgGIgCgDIgMAEIgDAAIgCgBIgEACIgDACQgFABgDAEQgDACgBADIgBABIAAACIAAADIAAAGIAAACIAAACIAAAHQAAAEACAEIAAgBIADgIIAEgHIAIgFIAGgGIACgCIAGgCIAEgBQAGABABACQAAACgGADIgEACQgGAEgFAGQgHAIgDAJIgFAHIAAABIABAAQAGgBAEADIAHAIIAHAHQACADgCADQgGAEgEgGQgEgHgHgCQgHgDABgFQgFACgEgGQgEgEAAgGIgBgNQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgHgDgEgIQgCgEAAgFIABgJIgBgGIAAgDIADgEQAEgFAEgCIAVgMIADgBIAIAAIADABIACACIACAEIADADIADADIABACIAAACIgBABIAEAAIAAAAIgCgEIABgDIAEgGIACgBIADgCIAFgCIAAAAIAFACIAAAAIgBgKIABgSQAAgEACgDIAXgbIAAAAIAAAEQAgghAqghQAlgcAZgnQATgbAKgfQAFgPALgJQAAgFAFgEIAJgKIARgTIAOgNIAAAAIABgBIAFgCIAEgDQAJgGAKgEIAUgJIAHABQAAgEAEgCIABABIAAgGIACgYQAAgNgFgLIgBgEIgEADQgLgFgLgNQgMgOAAgTIgBgaQgBgGACgDIgBgBIgCgCIgBgCIgBgBQgEgCgDgEIgEgIIgBgEIADgFIABAAIAKgBIAJABQASAAAIgPIADgGIABgBIACgCIABgDIABgDIAAABIACgGQAFgQALgOIAEgEQgCgEAGgDIAAgCIAAgBIAAgCIABgCIACgCQAGgHAJgFIAZgLIAPgFQBCgGAhAwQAKgKAOgIQATgLAVgJIAAABQAWgKAWgHQAwAGAWAuQATAqgDAuIAAAEIgBABQAAAdgTAeIgNAYQgHgBgCgIQgEAUgKAKIABAAIgBABIgCADQgfAoguABQAXgQAJgaIABgBIABgDQADgLAAgMIAAgPQgTAKgSgLQAYgPAJgbQABgEAEgCQACgKgBgLQgFgCgDgEIgGgKIgGgIIgHgHIgCgCIgFAAIAAACQgVgCgUAFQAIAvgbAtQgdAugvAHQgHgFgOAFIgEAAQgbgBABAXIAAACQAEAGAEADQAGAFAHABIAFACQAIAAAGgDIADABIAAgCIAEAAIAJAAIABACIABABIABAAIgCgDIADAAIADgBQBbAUAgBOQAFANgCAOQgRBXhBA6QgPAOgSABQAGAbgOAcQgNAegZAZQgKAKgOAHIAAAFIAAAJIAAAHIgBACIgCACIgDADIgEAEIAAABQgBACgCADQgFAGgBAHIgCAOIAAAEIAAAAIABAlQABAOAEAPQASA4AbA2QAcA1AAA/IgBAYIgCABIAAADIAAACIAAABIABABIACACIAAAAIADAEIACAFIACADIgBACIAAACIgBABIgBABIgCABIAAACIAAACIABADIABAAQAKAIACANIAAABIgBAAIAAABIAAADIABACIgBAAIgBAAIgDAGQgGAKgNAAIgHAAQgGACgDAAIgdgBIgBgDQgGgCgFgIQgFgJAAgDQAAgGAMgMIAIgGIAAgBQgBgDABgDQACgDACgBQAFgDgDgEQgEgCAAgEQgBgEADgCIAEgIIACgCQgIgUgFgbQgJgygaguQgbgvgUgyQgGgNgDgNQgCgCgBgEQAAgHgDgHIgEgLIgFAEIgDAGQgFALgBAOQgCA5AKA1QAJA1AFA3QAGA4gKA0IAAgCIgBgEIgBgHIgEgjIgBgTIgCgkQgCg3gJg2QgKg1gCg3IAAgHIAAgCQAAgKACgJIABgCIAJgQIAEgGIAHgGIAEgDIACgBIABgBIAAABIAAgBQAGgEAIgBIAAgBIABgBIAAAAIADACIABABIgCADQgDAFgFAFIgEAEQADACABAGIAAABIABAFIACAGIACAGIACAEIAAACQACAIAEAHIACADIAAAEIADAHIAKAaQAWAwAZAuQAaAvAIA0QADARABAQIgFABIgBADIgBACIADAKQABAEgDAEIgGAJQADADABAEIADgCIgBgBIABgCQACgDACAAIAWAAIAAgBIABgCQAAgEACgDIgBgCIgCgEIgBgEIABgCIgCAAQgBgCgDgCIAAAAIACAAQgCgNABgRQABgOgBgNIAAAAQgBgQgCgOIgBgBIAAgCQgGgegPgbQgdg2gTg4QgLgjAFggIAAgCIACACIABgDIAAAAIADgLIAAgCQABgIADgHIAAgBIgPACIgEAAIgJABIAAAAIgEABIgEAAIABADIgTAAIgSgBIgCgCIgEABQgjgFghgRIgGgDIAAADIABAQIABBPIAAALIABANIACAVIABAAIABABIAAABIAAABIAAACIAAAHIABACQABALAEALIAEASIABAEIABAFIAEARIAAACIACAJIABAIIADAQQAEAdAKAbQAFAOADAOIgBAEQgBAPAGALIgBABIgBADIgBAFIAAADIgBAAIgEADIgBACIgBACIAAABIABACIgBAAIABABIADACIAEABIACACIAGAGIABABIABAEIAAACQgDAAgBADIgCAEIgCADIgCAFIgDAEIAAABIACAEIAEADIACAAIAAgBIADgBIgDgFIAIAGIAEgCIAAAAIAIgEQAEgDADADIAAgCIAHADIgBAHIABACIADADIgBAAIAEAOIADABQACARgKARQgMAUgbgDQgWgDgUAHQgFACgEAAQgGAAgFgDgAkmBwQgCADgEACQgEACgCAEIgFAHQgCAEABAEIABACIABABIAKABIAEgEIAGgEIAGgGIACgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIgMgBgAgyBwIABAAIgBAAgAhMBoIAAgBIgCAAIACABgAA4BcIAEABIAAgCIgBAAIgDABgAgBBdIAAAAIAAgCIAAACgAgeh0IAEAEIACADIACAEQgXAfgVAiQgWAhgkATIgJAIIAFAHIADAFIACACIAHAJQAMAMARAKIAOAHIAIADIAVAEQAJABAFAHQAMACALAAIAAgBIAEgHQADgGAHAAIAkgCQASgRANgUQANgTAJgUQAIgSgEgTQgBgGADgDIgBgBQgMgEgMgKQgHgGgFgHQgOgPgJgUIglhSIAAgCIAAgCIAAgCIAAgCIAAgCIgCgDIgDgEIAAgCIgCgCIABgGQgBgEgDgEQgCgCgBgEIgDgIIgBgIIAAgFQAAgEAEgBIACAFIAEAHQAAAFACAEIAFAKQADAFACAGIADAKQACAEAAAFIAAACQASArAXAqQAFgDAGAAQAMgBAGALIAIAQIAFAHIAEACIAeAAIArgdQAYgPAPgYIARgcQAEgIAFgEIACgWQADg/hCgTIgGgCIAEADIABAAQAWARAPAUQATAZgTAXIgFAHIgNAFQgMAEgMADIgfgBIgFACIgTgFQgMgCgLgEQgPgFgNgGIgGgDQgLgIgIgJQgIgIgHgKQAAgEgDgDQgFgHgDgIIgCgEIAAgQQgCgLgGgJIgUAIQgOAEgNAIIgDACIAAABIgDABIAAAAQgLAIgJALIgBACQgLANgLALIgDACIgBAFIgCAEQgOAhgUAgIgCADQgJAOgMAOIgbAfIgaAVQgUAPgLAPQgVAPgVAKQgCAHgGAIQgHAHAAAKIAAATQAAAJAGAIIAFAHQASADARAAIgEgGQAUgaAlgQQAogQAkgYQAYgPAPgaQAQgcAagNIABgBIAHADgAltBQIAAgBQgBgJAFgGIACAAQAEAAABgEIgBgCIACgCIAGgEIAIgFIACgCIACAAIgBgBIgEgDIgCgCQgGAAgGACIgCAAQgHADgEAEIgCAAIgDACQgBAAAAABQgBAAAAAAQAAABAAABQAAAAABABIACADQgCAEABAEIAAAKIACABIADADIACABIAAAAgAhyBDIAAACIAAAAIAAgCIABgCIABgCIAAAAIgCgCIAAAEIAAABIAAABIAAAAgACEgWIgBAGIAEgXIgGgBQACAIABAKgAAQl8QADAFAAAJIABAYIAAAYQABAFgDADIAAABIADAFQATAJAWgGIAEAAIAAgBIADgCIABAAQACgGAFgCIgBgBIgEgDIgEgEIAAgCIgCgBIgBgBIAAABIAAgBIgHgJQgEgFAAgFIAAgEQAAgIADgHIACgEQgUgIgJgQQgBADgCADQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAgBIAAgJIABgJIAAgBQgFgBgBgHIAAgBIAAgCIABgCIABgBIAAgBIADgBIADACIABABIABACIAKgEQAJgFAGgIQAFgHgDgIQgCgFgFgDIAAgBIgBABIgBgBIgDgBIgDAAIgEACIgCACIgBgBIgDgDIAAgCIABgCIABgCIABgCIACgBIAAAAIADgBIAAAAIAMAAIADABIAIAOQAIAOgJAMQgJAMgNAHIgGADIAAACIABAHIAAAIQAWAOAWAEQA2ALAwguQAOgOAHgSQAMgigFgdIgQAGQgJAFgKAAIgBgCIgBgBIgDgDIgCgBIgFgDIAAgEIAAgFIgBgGIgDgGIgBgDIABgCIADgEIADgCQACgCADAAIABAAIAAAAIABABIAEgGIAKgOIgBgBIgHgIQg0g2g+AoIgKAGQgFAEgGACIACACQAIAHABAMQACAQgDAPIgIAdQgCAHgDACQgDACgEgBQgBgGACgGQABgFADgGIABgBQAIgOAAgQQABgPgJgLQgNAQgJATIgBACIAAAAIABAAIABAAIAAgBIAFAEIAEADIAEAEQADADgBADIgBABQgDAEgEgDIgGgFQgDgEgCgEIAAAAIgCAFQgDAGgEAIIgBACIgDADIABAAIgBACIgBACIgDABIgTgCQgGgBgFABIABACIABACIACACIAFAEIAHAGIABACIgBACIgBABIgBABIACAFIAAABIAAAEIAAAFQgCAMABALIADAJIABAGQACALAIABIAAABQAGABAEAEIAIAIIACgBIAGAGgAEhmiIAAAAIABABIACACIABABIAAABIgBABQAEAJAAAJQAAAIgDAHIAAABQgDAWgQAUQAXgKAQgRQAPgdASgXQADADgBAFIAAACIABgBQAQgcAJgeIgCACQADgLAAgNQABhPhCgmIgGgDQgHgCgIACIgFABQgRAFgOAHQgLAFgKAHIAAgBQgVANgPARIgFAEQgEADgBAGIgEAGIABABIADAFIADAIIABAHQAGgBAGgCIgBgCIACAAIAGgCIAIgCIAPAAIAAgCIAVAAIAHAAIADABIACACQALAPANAOQALAMgBAOQgDAHgGAKQgLARAAACIAAABQgEAGgGAGIgBABIABAAIABAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAFgCIABAAIAGAAIABAAIACABIAAgBIABABgACYihIACABIgBABIgBACIAAgEgAACngIgCgEIAAgDIAAgEIAAgCIACgCIACgCIABAAIABgDQABgDADgBIAEAEIADADIACAEIAAAEIgBACQgEACgDgDIgBAEQgBADgCABIgCABIgDgBg");
	this.shape_63.setTransform(365.7,113.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#48394F").s().p("Ag6DcIgEgCIgCgFIAAgBIADgEIACgFIACgBQAAADADADIAFAEIAFgDIACgCIABgEIAAABIACADIAAACQAAADgDADIgCACIAAABIgEABIgIgGIADAFIgDABIAAABIgCAAgAgiDPIgFgBIgCgDIAAgBIAAgDIgBgCIgBgCIAAgBIAAgBIgHgCIgBAAIgBgDIgBgCIgGgGIgCgCQAHACAIgEQADgBABgCIABgCIgBgEIgDgDIgCgBIgBgEIgBgFQAHgJgCgQQgCgXABgXQACgYgKgWQgGgMgJgJIgDgbQgFgqABgsQAAgLADgJIACgDIABgBIACAAIADgBIAAAAIADABIAAACIAAAHQACA3AKA1QAJA1ACA3IACAkIABATIAEAjIABAHIABAEIgBACIgEAAgABsCyIgDgCIgBgCIABgDIgFgDQgKgCAAgKIAAgBIABgCIABgCQACgCADgBIADgBIAAAAIAEAAIABABQgCgXgFgWIACABQAFgCACgCQABANgBAOQgBAQACANIgCAAIAAAAQADACABADIACAAIgBACIABADIACAEIABACQgCAEAAADIgFgBgAhFCuIABAAIAAABgABZBLIgNgeIABABQAIAKADALIADAPIgCgHgAg9BKIgCgOQADAIAAAKIgBgEgABmA/QgEgNgFgMQgGgNgMgFIAAAAIgEABIgCABIgBACIAAABIgSgsQgVgygNgzQgHgZAAgYIgEACIgKAIIgJAKIgGAGIgBgFIgBgEIAAgCQgBgFgDgDIAEgEQAFgFADgFIACgDIgBgBIgDgCIAAAAIgBACIAAAAQgIABgGAEIAAABIAAgBIgBABIgCABQgeADgegRIgTgNIgBgPIAAgEIAGAEQAhAQAjAFIAEgBIACACIASABIATAAIgBgDIAEAAIAEABIAAgBIAAAAIAJgBIAEgBIAPgBIAAAAQgDAIgBAHIAAADIgDAKIgBAAIgDAAIABADQgFAgALAjQATA4AdA2QAPAaAGAeIgBgDg");
	this.shape_64.setTransform(366.4,145.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CB4553").s().p("AATAuQACgDgDgDIgHgGQgEgFgFgCQgDgDgFABIgBABIAAgBIADgHQACgLAFgHQAFgGAGgEIAAABIAAACIAEAGIAEACIAHAIQADADAFAAIABAAIgJALQgGAIgCAIIAAAHgAADAHQABAEACAFQADAFAGADQAGACABgFIAAgCQAAgEgDAAQgDgCgCgEIgCgFIgEgDQgFABAAAFgAgfgFIgDgCIgBgBIgCgKQgBgFACgDIAEADIAGACQgEAGABAKgAgWgcIgEgEIgEgDIgDAAQADgFAHgEIACAAQgBADAEAEQACACADABIgGAFIgCACIgBgBg");
	this.shape_65.setTransform(335.5,125.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#DD8892").s().p("AAYAeQgGgDgDgFQgCgEgBgFQAAgFAFgBIAEADIACAFQACAEADACQADABAAADIAAACQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAIgEgBgAgRgPIgGgCIgEgDIgDgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIACgDIADABIADAAIAEADIAEAEIABABIABACQAAAEgEAAIgCAAg");
	this.shape_66.setTransform(334.6,124.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#A72E3A").s().p("AAPAxIgBgBIgCgCQgBgEACgEIAEgIQABgEAEgCIAFgGIAAAAQAGgBAGAAIAAABIAAACIABACIAAACIAAACIAAACIAAACIAAACIgCACIgFAGIgFAEIgEAFIgFAAIgEAAgAALAJIgHgIIgEgDIgDgFIAAgCIAAgCIADgDQAFgDAAgCIAAAAQADAGAHAGIAKAKIADADIgFABIgBADIgCACIgBAAQgFgBgDgCgAgkgmQgEgDABgEIALgDIACACIAFADIAAAAIgBABIgCACIgHAGQgDgBgCgDg");
	this.shape_67.setTransform(337.3,125.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#744755").s().p("AgKCpQgMgFgMgHQgIgEgJgDQgJgEABgIQABgEADgDQACgCADgBQAMABAKAHQAJAFAKADQALAEANACIAYADQAIABACAJQgNALgTAAQgNAAgOgFgAizBDQAJgQASgRIAYgYQAWgYAQgfIADgHIACgDQAQgiALgjIABgEIAEgIQAJgMAJgOQAHgGAIgFQAHAigYAyQgVAqgdApQgcAngfAiQgXAagPAcQgLgaAQgcgAB5hQQgNgIgPgGQgNgFgIgLQgHgKAJgIQACgCADgBQAJAJAKAHIAGADQAOAHAPAFQALAEALACIAUAFIAJADQADABACAEQgOALgSAAQgRAAgTgKg");
	this.shape_68.setTransform(361.9,103.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#59373F").s().p("AglDTIAAAAIABAAgAhBDKIACAAIAAABIgCgBgABFC/IADgBIABACIgEgBgAjxC7IgBAAIAAAAIgCgBIAAgBIgDgGIAGAHIACABIgCABIAAgBgAgRC6QgFgHgJgBIgVgEIgIgDIgOgHQgRgKgMgMIgBgCIACgCIABABQAAgFAIgFIAAAAIAJgJQAZgSARgaIAJgPQASgjASghIgCgEIgCgDIgEgDIgIgCIAAAAQgYARgNAcQgMAbgXASQghAcgmAVQgiAUgSAcIAFAGQgRACgSgCIgGgHQgHgGgBgKIgCgSQgBgLAFgIQAGgIABgIQAUgMATgRQgQAbAMAaQAPgcAXgaQAfgiAcgmQAcgpAVgqQAZgygIgjQgIAFgGAHIABgDQAIgMAJgJIABAAIADgBIgBgBIADgCIADgCIAFgCQADgDAFgBIAKgEIACAAIAGgCIAUgIQAGAJACALIAAAQIACAEQADAIAFAHQADADAAAEQAHAKAIAIQgEABgCADQgJAHAIAKQAIALANAGQAOAGAOAHQAnAWAdgXQgCgEgDgBIgKgDIAFgCIAfABQAMgDAMgEIANgFIAFgHQATgXgTgZQgPgUgWgRIABgBQBCATgDA/IgCAWQgFAEgEAIIgRAcQgPAYgYAPIgrAcIgeAAIgEgCIgFgHIgIgPQgGgLgMABQgGAAgFADQgXgqgSgrIAAgCQAAgFgCgEIgDgKQgCgGgDgFIgGgKQgCgEAAgFIgEgHIgCgFQgEABAAAEIAAAFIABAIIADAIQABAEACACQADAEABAEIgBAGIACACIABACIADAEIACADIAAACIAAACIAAACIAAACIAAACIAlBSQAJATAOAPQAFAHAHAGQAMAKAMAEIABABQgDADABAGQAEATgIASQgJAVgNATQgNAUgSARIgkACQgHAAgEAGIgEAHIAAABQgKAAgMgCgAhQCFQgDACAAAEQgCAJAKADQAJADAIAFQALAHAMAEQAkAOAYgUQgCgJgIgBIgXgDQgNgBgNgEQgJgEgJgFQgLgGgLgCQgEABgCADgAheCSIABgBIgBABIAAAAIAAAAgAClg6IABgCIABgBIgCgBIAAAEgAgPh8IgBgDIgBgBIACAEgAhlCoIAAgCIAAgBIAAgBIAAgEIACACIAAAAIgBACIgBACIAAACgACRBMQgBgKgCgIIAGABIgEAXIABgGgAiBgVIAOgWQgQAegWAZIAYghgAhRiDIADgDIgDAIIAAgFg");
	this.shape_69.setTransform(364.4,103.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D6B0A0").s().p("Ai1EkIgCgDIAAgDIABgDQAAgDADgCQADgEAEgCIADgCIAEgCIACAAIADAAIABAAIACACIACABIABACQAAADgCADQgFAGgGAFIgFADIgEABQgDAAgCgCgACpiEQgHgGAAgJIgBgTIAAgRQgBgJAJgBIADABIACACIABACQgDAEABAIIADATQABALAEAJIAAABIgCACIgCACIgDABIgFgBgACBj2IgFgBQgBgGAAgHIABgOIAAgKIAEgFIABgBIACgCIAAAAIADgBIAFAAIADABIACACIACAEIAAABIABABIACACIAAAGIAAAHQAAADgCADIgFADIgGAFQgEADgCAFIAAABIgBAAgACnkJIgDgDIAAgCIAAgCIABgCIABgCIABgBIADgCIAEgCIACABIAEABIAAAAIACABIABACIABACIgBAEQgCAEgDACIgFABQgDAAgDgCg");
	this.shape_70.setTransform(352,95.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#B28A7E").s().p("AjEFRIAAgHIgBgCIAAgCIAAgGIABACQAFAFAEgDIAFgDQAHgFAFgHQABgCAAgDIgBgCIgBgBIgCgCIgCAAIAMgGIACADIADAGIACACQgBABAAAAQAAABAAAAQAAABAAABQAAAAAAABIACADIgBAAQgBgCgGgBIgEABIgGADIgCADIgFAGIgHAGQgCAEgBAEIgCAHIgBACQgCgEgBgEgAjGE7IABgBIAAADIgBgCgACPhdIgDgFIAAgBQADgCgBgFIAAgZIgBgYQAAgIgDgGIgGgGIgCABIgJgIQgEgEgGgBIAAgBQgIgBgCgLIgBgGIgDgJQgBgLACgMIAAgFIAAgEIAAgBIgCgFIABgBIABgBIABgCIgBgBIgHgHIgFgEIgCgCIgBgCIgBgCQAFAAAGAAIATACIADgBIABgBIABgCIgBgBIADgDIABgCQAFgIADgGIACgFIAAAAQACAEADAEIAGAFQAEADADgEIABgBQABgDgDgDIgEgEIgEgDIgFgEIAAABIgBAAIAAgCQAJgTANgQQAJALgBAPQAAAQgIAOIgBABQgDAGgBAGQgCAFABAGQAEABADgCIABAFIAAABIgDAAIAAABIgCABIgBABIgBACIgBACIAAACIADADIABABIgCABIgBACIgBACIAAACIABABIADADQAFAEAFgCQAEgDABgDIABgEIAAgCIgCgCIgBgBIABAAIAAAAQAFAEACAFQADAHgFAIQgGAHgJAFIgKAEIgBgCIgBgBIgDgBIgDAAIAAABIgBABIgBACIAAACIAAACQABAGAFACIAAAAIgBAJIAAAKQAAAAABABQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAQABABAAAAQABAAABgBQAAAAABAAQACgCABgDQAJAPAUAIIgCAEQgDAHAAAIIAAAFQAAAFAEAEIAHAJIAAABIABAAIACABIAAACIAEAEIAEADIABABQgFACgCAGIgBAAIgDACIAAACIgEAAQgJACgIAAQgMAAgMgGgACSiYIABARIAAATQABAIAHAHIAEAAIAEgBIACgBIABgCIABgBQgEgJgCgLIgDgTQgBgIAEgEIgBgCIgCgCIgEgCQgJACABAJgAB1kGIgBABIgBACIgBABIgFAFIAAAJIAAAPQgBAHACAGIAEABIABAAIAAgBQACgFAFgDIAFgFIAFgDQADgDgBgDIAAgIIABgFIgDgDIgBAAIABgCIgCgDIgCgCIgEgBIgFgBIgCABgACAkhIgBADIgBABIgCACIgCABIAAACIAAAEIAAADIACAEIADACIACgBQACgCABgDIABgDQADADAEgDIABgCIAAgEIgCgDIgDgEIgEgDQgDAAgBADg");
	this.shape_71.setTransform(353.5,92.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#4F3137").s().p("AiJJnIACgCIgEgCQgSgBgKgVIgEgLQAMgLATgCQASgBAPgJIATgLIgBAAQgDgDABgFIADgJIAGgJQADgDAAgFIgDgDIgGgEIgEgDIgCgCQAAgEACgDIAFgKQACgDAAgEIABgDQgCgEAAgGIAAgRQgLgPgFgZIgKg/QgEgfgJgdQgGgRACgNIgCAAQAAgMgEgJIgBgKQABgIgCgGIgDhJQgBgUAGgQIAAAAIAAgBQgHgEgEgGIAAgBIAAgLIAAgNIAAgCIAAgCIAAgCIAAgEIgCgCQgcAWgiAJQgeAJgggCIgCAAIgCgBIgGgHIADAGIAAABIACABIAAAAIABAAIAAABIgBADIgBABQgFAEgHAAIADADIAJAKIAKAKQADADAAAEIABAAIACABIABACIADABIACACIABAFQACAMgFAIQgJALgKAJQgIAFgJgCIgCgCIgCgCIgCgBIgBgCIgBgCIAAgGIAAAAIABgHQACgIAFgIIAJgLIACgCIACgDIAFAAIgEgEIgKgKQgHgGgCgGIgCgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIgCgCIgDgGIgCgDIgMAFIgCAAIgDAAIgDACIgDACQgFACgDAEQgCACgBAEIgBABIABACIAAADIAAAGIAAACIABACIAAAHQABAEACADIABgBIACgIQABgEACgDIAHgGIAFgHIACgCIAGgDIAEgBQAGABABACQAAACgFADIgEADQgGAEgEAGQgGAJgCAKIgEAHIAAABIABgBQAGgBAEADQAEACAEAFIAIAGQACADgBADQgGAFgFgGQgEgGgIgCQgHgCABgFQgFADgFgGQgEgEgBgFIgDgNQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAgBQgIgCgFgHQgCgEAAgFIgBgJIgBgGIAAgDIADgFQADgFADgCIAUgOIADgCIAHAAIAEAAIACACIADADIACADIAEADIABACIABABIgBACIAEAAIgBgBIgCgDIABgEIADgGIACgBIADgDIAEgCIAAAAQADAAADABIAAAAIgCgJIgBgSQAAgFABgDQAJgPAKgOIABAAIAAAEQAcgkAnglQAhghAVgoQAPgeAHgfQADgPAKgLQAAgFAEgEIAJgMIAOgVIANgOIgBAAIACgBIAEgDIABAAIADgDIAHgFIAHgEIAAABQAHgDAIgCIASgIIAIABQAAgEAEgCIABABIAAgGIACgYQAAgNgFgLIgBgEIgFADQgLgFgLgNQgMgOAAgTIgBgaQgBgGACgDIgBgBIgCgCIgBgCIgBgBQgEgCgDgEIgEgIIgBgEIADgFIABAAIAKgBIAJABQASAAAIgPIAEgGIABgBIACgCIABgDIABgDIAAABIACgGQAFgQAKgOIAEgEQgCgEAGgDIAAgCIAAgBIAAgCIABgCIACgCQAGgHAJgFIAZgLIAPgFQBCgGAhAwQAKgKAOgIQAmgVApgNQAwAGAWAuQATAqgDAuQgEAtABAtIAAADQAAADACACQACAEAFACQALAGgBAKQgPgHgJgKQgDgBgCgCIgCgEIgFgDIAAgBIgBACQgBAIADAJQACAHADAHIAKAUQAFALgBAKIgBAAQgSABgKgPIgSgcQgKgOgIgQQgCgGgCADIgBABQgOAEgHgRQgHgNgBgOQgCgPADgOQADgLgBgMQgFgCgDgEIgGgKIgGgIIgHgHIgCgCQgVgCgUAFQAIAvgbAtQgdAugvAHQgHgFgOAFIgEAAQgbgBABAXIAAACQAEAGAEADQAGAFAHABIAFACQAIAAAGgDIADABIAAgCIAEAAIAJAAIABACIABABIABAAIgCgDIADAAIADgBQBbAUAgBOQAFANgCAOQgRBXhBA6QgPAOgSABQAGAbgOAcQgNAegZAZQgKAKgOAHIAAAFIAAAJIAAAHIgBACIgCACIgDADIgEAEIAAABQgBACgCADQgFAGgBAHIgCAOIAAAEIAAAAIABAlQABAOAEAPQASA4AbA2QAcA1AAA/IgBAYIgCABIAAADIAAACIAAABIABABIACACIAAAAIADAEIACAFIACADIgBACIAAACIgBABIgBABIgCABIAAACIAAACIABADIABAAQAKAIACANIAAABIgBAAIAAABIAAADIABACIgBAAIgBAAIgDAGQgGAKgNAAIgHAAQgGACgDAAIgdgBIgBgDQgGgCgFgIQgFgJAAgDQAAgGAMgMIAIgGIAAgBQgBgDABgDQACgDACgBQAFgDgDgEQgEgCAAgEQgBgEADgCIAEgIIACgCQgIgUgFgbQgJgygaguQgagvgVgyQgGgNgDgNQgCgCgBgEQAAgHgDgHIgEgLIgFAEIgDAGQgFALgBAOQgCA5AKA1QAJA1AFA3QAGA4gKA0IAAgCIgBgEIgBgHIgEgjIgBgTIgCgkQgCg3gJg2QgKg1gCg3IAAgHIAAgCQAAgKACgJIABgCIAJgQIAEgGIAHgGIAEgDIACgBIABgBIAAABIAAgBQAGgEAIgBIAAgBIABgBIAAAAIADACIABABIgCADQgDAFgFAFIgEAEQADACABAGIAAABIABAFIACAGIACAGIACAEIAAACQACAIAEAHIACADIABAEIADAHIAKAaQAVAwAZAuQAaAvAIA0QADARABAQIgFABIgBADIgBACIADAKQABAEgDAEIgGAJQADADABAEIADgCIgBgBIABgCQACgDACAAIAWAAIAAgBIABgCQAAgEACgDIgBgCIgCgEIgBgEIABgCIgCAAQgBgCgDgCIAAAAIACAAQgCgNABgRQABgOgBgNIAAAAQgBgQgCgOIgBgBIAAgCQgGgegPgbQgdg2gTg4QgLgjAFggIAAgCIACACIABgDIAAAAIADgLIAAgCQABgIADgHIAAgBIgPACIgEAAIgIABIAAAAIgEABIgEAAIABADIgUAAIgSgBIgCgCIgEABQgjgFghgRIgGgDIAAADIABAQIABBPIAAALIABANIACAVIABAAIABABIAAABIAAABIAAACIAAAHIABACQABALAEALIAEASIABAEIABAFIAEARIAAACIACAJIABAIIADAQQAEAdAKAbQAFAOADAOIgBAEQgBAPAGALIgBABIgBADIgBAFIAAADIgBAAIgEADIgBACIgBACIAAABIABACIgBAAIABABIADACIAEABIACACIAGAGIABABIABAEIAAACQgDAAgBADIgCAEIgCADIgCAFIgDAEIAAABIACAEIAEADIACAAIAAgBIADgBIgDgFIAIAGIAEgCIAAAAIAIgEQAEgDADADIAAgCIAHADIgBAHIABACIADADIgBAAIAEAOIADABQACARgKARQgMAUgbgDQgWgDgUAHQgEACgFAAQgGAAgFgDgAkVCJIgBABIgEAFQgEADgCAEIgEAIQgCAEACAEIABABIABABIAKAAIAEgEIAEgEIAGgHIACgCIAAgCIAAgCIgBgCIAAgBIAAgCIAAgCIAAgCIAAgBIgEAAIgIAAgAlgByIAAgBQgCgJAEgHIACAAQAEAAABgEIgBgCIABgCIAHgFIAHgGIACgCIACAAIgCgBIgEgCIgCgCIgMADIgCAAQgGAEgEAFIgCgBIgDADQAAAAgBABQAAAAAAAAQAAABAAABQAAAAABABIACADQgBAEABAEIABAKIACABIADACIACABIAAAAgAhIBvIABAAIgBAAgAhiBnIAAgBIgCAAIACABgAAiBbIAEABIAAgCIgBAAIgDABgAgXBcIAAAAIAAgCIAAACgAiLAoIABACQAMAMARAKIAOAHIAIADIAVAEQAJABAFAHQAMACALAAIAAgBIAEgHQAEgGAHAAIAjgCQASgRANgUQANgTAJgUQAIgSgEgTQgBgGADgDIgBgBQgMgEgMgKQgHgGgFgHQgOgPgJgUIgkhSIAAgCIAAgCIAAgCIAAgCIAAgCIgCgDIgDgEIgBgCIgCgCIABgGQgBgEgDgEQgCgCgBgEIgDgIIgBgIIAAgFQAAgEAEgBIACAFIAEAHQAAAFACAEIAGAKQADAFACAGIADAKQACAEAAAFIAAACQARArAXAqQAFgDAGAAQAMgBAGALIAIAQIAFAHIAEACIAeAAIArgdQAYgPAPgYIARgcQAEgIAFgEIACgWQADg/hCgTIgGgCIAEADIABAAQAWARAPAUQATAZgTAXIgFAHIgNAFQgMAEgMADIgfgBIgFACIgTgFQgMgCgLgEQgPgFgNgGIgGgDQgLgIgIgJQgIgIgHgKQAAgEgDgDQgEgHgDgIIgCgEIAAgQQgCgLgGgJIgVAIIgGACIgCAAIgKAEQgFABgDADIgFACIgDACIgDACIABABIgDABIgBAAQgJAJgIAMIgBADQgJAOgKAMIgDADIAAAFIgCAEQgLAigQAiIgBADIgEAIIgOAWIgYAiIgYAYQgRARgKAQQgTARgUAMQgBAHgGAIQgFAIABALIACASQABAKAHAGIAGAHQASACARgCIgFgGQASgcAigUQAmgUAhgcQAXgSAMgbQANgdAYgRIAAAAIAIACIAEADIADADIACAEQgTAigSAjIgJAQQgRAYgZASIgJAJIAAABQgIAEAAAFIgBgBIgCACgAiIBCIAAACIAAAAIAAgCIABgCIABgCIAAAAIgCgCIAAAEIAAABIAAABIAAAAgABugXIgBAGIAEgXIgGgBQACAIABAKgAgFl9QADAFAAAJIABAYIAAAYQABAFgDADIAAABIADAFQASAJAWgGIAEAAIAAgBIADgCIABAAQACgGAFgCIgBgBIgEgDIgEgEIAAgCIgCgBIgBgBIAAABIAAgBIgHgJQgEgFAAgFIAAgEQAAgIADgHIACgEQgUgIgJgQQgBADgCADQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBgBgBIAAgJIABgJIAAgBQgFgBgBgHIAAgBIAAgCIABgCIABgBIAAgBIADgBIACACIABABIABACIAKgEQAJgFAGgIQAFgHgDgIQgCgFgFgDIAAgBIgBABIgBgBIgDgBIgDAAIgEACIgCACIgBgBIgDgDIAAgCIABgCIABgCIABgCIACgBIAAAAIADgBIAAAAIAMAAIADABIAIAOQAIAOgJAMQgJAMgNAHIgGADIAAACIABAHIAAAIQAWAOAWAEQA2ALAwguQAOgOAHgSQAMgigFgdIgQAGQgJAFgKAAIgBgCIgBgBIgDgDIgCgBIgFgDIAAgEIAAgFIgBgGIgDgGIgBgDIABgCIADgEIADgCQACgCADAAIABAAIAAAAIABABIAEgGIAKgOIgBgBIgHgIQg0g2g+AoIgKAGQgFAEgGACIACACQAIAHABAMQACAQgDAPIgIAdQgCAHgDACQgDACgEgBQgBgGACgGQABgFADgGIABgBQAIgOAAgQQABgPgJgLQgMAQgJATIgBACIAAAAIABAAIABAAIAAgBIAFAEIAEADIADAEQADADgBADIgBABQgDAEgDgDIgGgFQgDgEgCgEIAAAAIgCAFQgDAGgFAIIgBACIgDADIABAAIgBACIgBACIgDABIgTgCQgGgBgFABIABACIABACIACACIAFAEIAHAGIABACIgBACIgBABIgBABIACAFIAAABIAAAEIAAAFQgCAMABALIADAJIABAGQACALAIABIAAABQAGABAEAEIAJAIIACgBIAGAGgAEimsQAEALADAMQACAOAIAPQAJARAMAPIAKAMIABABIgBgCIgHgVQgFgKAAgKIgCgaQgBgMAFgHIACgDIADACIACACIAAgBIAAgBIAAgBIAAgBIACgLIACgGIAAgBIAAgCIADgJQAGgQAAgSQABhPhCgmIgGgDQgHgCgIACIgFABQg0AQgfAjIgFAEQgEADgBAGIgEAGIABABIADAFIADAIIABAHQAGgBAGgCIgBgCIACAAIAGgCIAIgCIAmAAIADABIACACQALAPANAOQAPARgHATQgGASAFASQADAJAFAIIAAABIABgCIAAgFQgBgEACgEQABgCAAgDQgBgEADgCQACgDAEgBIACACgAiBAuIAAAAIABgBIgBABIAAAAgACCiiIACABIgBABIgBACIAAgEgAgTnhIgCgEIAAgDIAAgEIAAgCIACgCIACgCIABAAIABgDQABgDADgBIAEAEIADADIACAEIAAAEIgBACQgEACgDgDIgBAEQgBADgCABIgCABIgDgBg");
	this.shape_72.setTransform(367.9,113.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#DD8892").s().p("AAaAcQgGgCgDgFQgDgEAAgFQgBgFAFgBIAEADIADAFQACADADACQADABAAADIAAACQAAAEgEAAIgDgBgAgSgOIgGgBIgEgDIgDgDQgBgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAIACgDIADAAIADABIAFACIAEAEIABABIABACQAAAEgEAAIgCAAg");
	this.shape_73.setTransform(337,126.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CB4553").s().p("AAXAsQACgDgDgCIgIgHQgEgDgFgDQgEgCgFABIgBABIAAgBQACgCABgGQACgJAEgJQAEgGAGgFIAAACIABACIAEAFIAEADIAIAHQADACAEABIABgBIgIAMQgFAIgBAJIAAAGgAAFAGQAAAFADAEQADAFAGACQAGADABgFIAAgDQAAgDgDgBQgDgCgCgDIgDgFIgEgCQgFAAABAFgAgegDIgEgCIgBgBIgCgJQgCgFACgEIAEADIAGABQgEAIADAJgAgXgbIgEgEIgFgCIgDAAQADgGAGgDIACgBQAAAEAEACQACADAEABIgHAFIgBACIgBgBg");
	this.shape_74.setTransform(337.9,127.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A72E3A").s().p("AASAuIgCgBQgBgEABgEIAEgIQABgEAEgDQADgDABgDIAAgBIAMgBIAAABIAAACIABACIAAACIAAACIABABIAAACIAAACIgCADQgCADgDAEIgEAEIgDAFIgKAAIgBgBgAANAIIgIgIIgEgCIgDgFIgBgCIAAgCIADgDQAEgEAAgCIABAAQADAGAHAGIALAJIAEADIgFABIgCADIgCACIgBAAQgEAAgDgCgAgmgkQgEgCAAgEIAMgEIACACIAEACIABAAIgBABIgCACIgGAHQgEgBgCgDg");
	this.shape_75.setTransform(339.7,127.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#744755").s().p("AgSCoQgMgFgLgHIgJgEIAAgBIAAgBIgCgEIACgFIARgFQADACADABIAKAEQANAEAMACIAYADQAIABACAJQgOALgTAAQgMAAgPgFgAhCCPIABgBIAAABgAitBPQAIgQARgTIAWgZQAUgaAOgfIADgIIABgDQAOgkAIgjIACgEIAAgBQAAgEADgDIAQgbQAGgHAHgGQAKAigUA0QgSArgaArQgZAogdAkQgVAcgNAdQgNgZAOgdgAByhRQgOgIgOgGQgNgFgIgLQgIgKAJgIQACgCAEgBQAIAJALAHIAGADQANAHAPAFQALAEAMACIATAFIAKADQADABACAEQgPALgSAAQgQAAgTgKg");
	this.shape_76.setTransform(362.7,103.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#59373F").s().p("AguDTIAAAAIABAAgAjkDKIAAAAIgBAAIgBgBIgBAAIgDgGIAHAGIACABIgCABIgBgBgAhKDKIACAAIAAABIgCgBgAA8C/IADgBIABACIgEgBgAjoC3QgHgGgCgJIgEgTQgBgKAFgJQAFgJAAgHQATgOASgSQgOAcANAZQANgdAVgbQAdgkAZgqQAagpASgsQAUg0gKgiQgHAGgGAHIACgDQAGgMAJgKIAAAAIADgCIgBgBQAIgEAHgFIAEgBIAFgBIAKgEIACAAIAGgCIAUgIQAGAJACALIAAAQIACAEQADAIAFAHQADADAAAEQAHAKAIAIQgEABgCADQgJAHAIAKQAIALANAGQAOAGAOAHQAnAWAdgXQgCgEgDgBIgKgDIAFgCIAfABQAMgDAMgEIANgFIAFgHQATgXgTgZQgPgUgWgRIABgBQBCATgDA/IgCAWQgFAEgEAIIgRAcQgPAYgYAPIgrAcIgeAAIgEgCIgFgHIgIgPQgGgLgMABQgGAAgFADQgXgqgSgrIAAgCQAAgFgCgEIgDgKQgCgGgDgFIgGgKQgCgEAAgFIgDgHIgCgFQgEABAAAEIAAAFIABAIIADAIQABAEACACQACAEABAEIgBAGIACACIABACIADAEIACADIAAACIAAACIAAACIAAACIAAACIAlBSQAJATAOAPQAFAHAHAGQAMAKAMAEIABABQgDADABAGQAEATgIASQgJAVgNATQgNAUgSARIgkACQgHAAgEAGIgDAHIAAABQgLAAgMgCQgFgHgJgBIgVgEIgIgDIgOgHIgRgMIAHgFIgBgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIABABQgBgEAFgEQADgGAGgFIAHgGQAPgNAMgQIAHgNIAIgQQAPglAQgiIgCgDIgDgEIgEgCIgIgCIAAABQgXASgLAdQgKAcgVAUQgfAegkAYQgiAWgQAdIAGAFQgRADgSAAIgGgGgAhMCPIgCAGIACAEIAAABIAAABIAJAEQALAHAMAEQAlAOAXgUQgCgJgIgBIgXgDQgNgBgNgEIgKgEQgDgBgDgDIgRAFgAhcCRIABABIAAgBIgBAAgACcg6IABgCIABgBIgCgBIAAAEgAgoiyIAAAAIAAAAgAhuCoIAAgCIAAgBIAAgBIAAgDIABAAIABABIAAAAIgBACIgBACIAAACgACIBMQgBgKgCgIIAGABIgEAXIABgGgAiCgOIAMgWQgOAfgUAaIAWgjgAhah+IADgEQgDAEAAADIAAgDg");
	this.shape_77.setTransform(365.3,103.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D6B0A0").s().p("AipEuIgCgDIAAgDIAAgDQABgDACgCQADgFAEgCIADgCIADgCIADgBIACAAIACABIACABIACABIABACIgBAGQgFAHgGAFIgFADIgEACQgCAAgDgCgACdiNQgHgHAAgJIgBgSIAAgRQgBgJAJgCIADACIACABIABADQgDAEABAIIADATQABAKAEAKIAAABIgCACIgCABIgDABIgFAAgAB1kAIgFAAQgBgHAAgGIABgPIAAgJIAEgFIABgBIACgCIAAgBIADgBIAFABIADABIACACIACADIAAACIABAAIACACIAAAGIAAAIQAAADgCACIgFAEIgGAEQgEAEgCAFIAAAAIgBAAgACbkTIgDgDIAAgCIAAgBIABgCIABgCIABgBIADgCIAEgCIACAAIAEABIAAABIACABIABACIABACIgBADQgCAEgDACIgFABQgDAAgDgCg");
	this.shape_78.setTransform(353.2,96.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B28A7E").s().p("Ai2FbIgBgHIgBgCIAAgCIgBgGIACACQAFAEAEgDIAEgDQAHgGAEgHIABgFIgBgCIgCgBIgBgCIgCAAIALgGIADACIADAGIACADQAAAAgBABQAAAAAAABQAAAAAAABQABAAAAABIABADIAAAAQgBgCgHAAIgDABIgGAEIgCACIgFAHIgGAHIgDAHIgCAIIAAABQgCgDgBgEgAi6FFIABgBIAAADIgBgCgACDhmIgDgGIAAgBQADgCAAgFIgBgYIgBgZQAAgIgDgGIgGgGIgCABIgJgHQgEgEgGgCIAAgBQgHgBgDgKIgBgHIgCgJQgCgLACgLIABgGIgBgDIAAgCIgCgFIACgBIABAAIAAgDIgBgBIgGgHIgGgEIgCgBIgBgCIgBgCQAGgBAFABIATABIADgBIACgBIAAgCIAAgBIACgDIABgCQAFgHADgHIACgFIAAABQACAEAEADIAFAFQAFADACgDIABgCQABgDgDgDIgDgDIgFgEIgEgDIgBAAIAAAAIgBgBQAJgUAOgPQAJAKgBAPQgBARgIANIAAABQgEAGgBAGQgBAGAAAGQAEAAADgBIABAEIAAABIgCAAIgBABIgBABIgCACIgBACIgBABIAAACIADADIABABIgBABIgCACIgBACIAAACIABACIADADQAFADAGgCQADgCABgEIACgEIgBgCIgCgCIgBgBIABAAIAAAAQAFAEACAFQADAHgFAIQgGAHgJAFIgKAEIAAgBIgCgCIgDgBIgDABIAAAAIgBABIgBACIAAACIAAACQACAGAFACIgBAAIgBAJIABAKQAAABAAAAQAAABAAABQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAAAgBQACgCABgDQAJAQAVAHIgCAEQgEAHAAAJIAAAEQABAFADAFIAHAIIABACIABAAIABABIABABIADAEIAFADIAAABQgEADgDAFIgBABIgCACIAAABIgFAAQgIACgJAAQgMAAgMgFgACHiiIAAARIAAATQABAJAHAGIAEABIAEgBIACgCIABgCIABgBQgEgJgBgLIgEgTQAAgIADgEIgBgCIgCgCIgDgBQgKABACAJgABpkPIAAAAIgCACIgBABIgEAFIAAAKIgBAOQgBAHACAGIAEABIACAAIAAgBQABgFAFgDIAGgFIAEgDQADgDAAgDIAAgHIAAgGIgDgCIgBgBIABgBIgCgEIgCgCIgDgBIgGAAIgCABgAB0krIgBADIgBABIgCACIgCABIAAACIAAAEIAAAEIADADIACACIACgBQACgCABgDIABgDQAEADADgDIABgCIAAgEIgCgDIgCgEIgFgDQgCAAgCADg");
	this.shape_79.setTransform(354.7,93.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#4F3137").s().p("AiUJnIACgCIgEgCQgSgBgKgVIgEgLQAMgLATgCQASgBAPgJIATgLIgBAAQgDgDABgFIADgJIAGgJQADgDAAgFIgDgDIgGgEIgEgDIgCgCQAAgEACgDIAFgKQACgDAAgEIABgDQgCgEAAgGIAAgRQgLgPgFgZIgKg/QgEgfgJgdQgGgRACgNIgCAAQAAgMgEgJIgBgKQABgIgCgGIgDhJQgBgUAGgQIAAAAIAAgBQgHgEgEgGIAAgBIAAgLIAAgFIgBABIgCAAIAAABQgTAMgUAIQgeALggAAIgBAAIgCgBIgHgGIADAGIABAAIABABIABAAIAAAAIABABIgBADIgBABQgFAEgHABIADADIAKAJIALAJIADAHIABAAIACABIABACIADABIACABIACAGQADALgFAJQgIAMgJAJQgHAGgKgCIgCgBIgCgCIgCgCIgCgBIAAgCIgBgGIAAAAIAAgHQACgJAFgHIAIgMIACgCIABgDIAFgBIgEgDIgKgKQgIgGgDgGIgBgCQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIgCgCIgDgGIgDgDIgLAGIgDAAIgCABIgEACIgCACQgFACgDAFQgCACAAADIgBABIABACIAAADIABAGIAAACIAAACIABAHQABAEADAEIAAgCIACgIIADgHIAGgHIAFgHIACgCIAGgDIADgCQAHABABABQAAACgFAEIgEADQgFAFgEAGQgGAJgBAKQgBAFgCADIAAABIABgBQAFgBAEACQAFACAEAEIAIAGQADADgBADQgGAFgFgGQgFgFgIgBQgHgCABgFQgFADgGgFQgEgEgBgFIgEgNQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgIgCgFgGIgDgJIgBgKIgCgFIgBgDIADgFQADgFADgDIATgQIACgBIAIgBIADAAIADABIADAEIACACIAFADIAAACIABABIAAACQAAAAABAAQAAgBAAAAQABAAABAAQAAAAABAAIgBAAIgDgDIABgEIADgHIABAAIAEgDIAEgCIAAgBQADAAACABIABAAQgCgEgBgFIgCgSQgBgFABgDIARgfIABgBIAAAEQAZgkAkgoQAfgjATgqQANgeAEggQACgPAJgMQAAgFAEgEIAIgMIANgWIALgPIgBgBIACAAIADgEIABAAIACgBIAAgBIABAAIAAgBIABgBIAFgEIAAABIAFgCIACAAIAAgBIAHgEIAAABQAHgDAIgCIASgIIAIABQAAgEAEgCIABABIAAgGIACgYQAAgNgFgLIgBgEIgFADQgLgFgLgNQgMgOAAgTIgBgaQgBgGACgDIgBgBIgCgCIgBgCIgBgBQgEgCgDgEIgEgIIgBgEIADgFIABAAIAKgBIAJABQASAAAIgPIAEgGIABgBIACgCIABgDIABgDIAAABIACgGQAFgQALgOIAEgEQgCgEAGgDIAAgCIAAgBIAAgCIAAgCIACgCQAGgHAJgFIAZgLIAPgFQBCgGAhAwQAKgKAOgIQAmgVApgNQAwAGAWAuQATAqgDAuQgEAtABAtIAAADQAAADACACQACAEAFACQALAGgBAKQgPgHgJgKQgDgBgCgCIgCgEIgFgDIAAgBIgBACQgBAIADAJQACAHADAHIAKAUQAFALgBAKIgBAAQgSABgKgPIgSgcQgKgOgIgQQgCgGgCADIgBABQgOAEgHgRQgHgNgBgOQgCgPADgOQADgLgBgMQgFgCgDgEIgGgKIgGgIIgHgHIgCgCQgVgCgUAFQAIAvgbAtQgdAugvAHQgHgFgOAFIgEAAQgbgBABAXIAAACQAEAGAEADQAGAFAHABIAFACQAIAAAGgDIADABIAAgCIAEAAIAJAAIABACIABABIABAAIgCgDIADAAIADgBQBbAUAgBOQAFANgCAOQgRBXhBA6QgPAOgSABQAGAbgOAcQgNAegZAZQgKAKgOAHIAAAFIAAAJIAAAHIgBACIgCACIgDADIgEAEIAAABQgBACgCADQgFAGgBAHIgCAOIAAAEIAAAAIABAlQABAOAEAPQASA4AbA2QAcA1AAA/IgBAYIgCABIAAADIAAACIAAABIABABIACACIAAAAIADAEIACAFIACADIgBACIAAACIgBABIgBABIgCABIAAACIAAACIABADIABAAQAKAIACANIAAABIgBAAIAAABIAAADIABACIgBAAIgBAAIgDAGQgGAKgNAAIgHAAQgGACgDAAIgdgBIgBgDQgGgCgFgIQgFgJAAgDQAAgGAMgMIAIgGIAAgBQgBgDABgDQACgDACgBQAFgDgDgEQgEgCAAgEQgBgEADgCIAEgIIACgCQgIgUgFgbQgJgygaguQgagvgVgyQgGgNgDgNQgCgCgBgEQAAgHgDgHIgEgLIgFAEIgDAGQgFALgBAOQgCA5AKA1QAJA1AFA3QAGA4gKA0IAAgCIgBgEIgBgHIgEgjIgBgTIgCgkQgCg3gJg2QgKg1gCg3IAAgHIAAgCQAAgKACgJIABgCIAJgQIAEgGIAHgGIAEgDIACgBIABgBIAAABIAAgBQAGgEAIgBIAAgBIABgBIAAAAIADACIABABIgCADQgDAFgFAFIgEAEQADACABAGIAAABIABAFIACAGIACAGIACAEIAAACQACAIAEAHIACADIABAEIADAHIAKAaQAVAwAZAuQAaAvAIA0QADARABAQIgFABIgBADIgBACIADAKQABAEgDAEIgGAJQADADABAEIADgCIgBgBIABgCQACgDACAAIAWAAIAAgBIABgCQAAgEACgDIgBgCIgCgEIgBgEIABgCIgCAAQgBgCgDgCIAAAAIACAAQgCgNABgRQABgOgBgNIAAAAQgBgQgCgOIgBgBIAAgCQgGgegPgbQgdg2gTg4QgKgjAEggIAAgCIACACIABgDIAAAAIADgLIAAgCQABgIADgHIAAgBIgOACIgEAAIgJABIAAAAIgEABIgEAAIABADIgUAAIgSgBIgCgCIgEABQgjgFghgRIgGgDIAAADIABAQIABBPIAAALIABANIACAVIABAAIABABIAAABIAAABIAAACIAAAHIABACQABALAEALIAEASIABAEIABAFIAEARIAAACIACAJIABAIIADAQQAEAdAKAbQAFAOADAOIgBAEQgBAPAGALIgBABIgBADIgBAFIAAADIgBAAIgEADIgBACIgBACIAAABIABACIgBAAIABABIADACIAEABIACACIAGAGIABABIABAEIAAACQgDAAgBADIgCAEIgCADIgCAFIgDAEIAAABIACAEIAEADIACAAIAAgBIADgBIgDgFIAIAGIAEgCIAAAAIAIgEQAEgDADADIAAgCIAHADIgBAHIABACIADADIgBAAIAEAOIADABQACARgKARQgMAUgbgDQgWgDgUAHQgFACgEAAQgGAAgFgDgAkGCYIgBABQgBADgDADQgEADgBAEIgDAIQgCAEACAEIABABIACABIAJAAIAEgFIADgEQAEgEABgDIACgDIAAgCIAAgCIgBgBIAAgCIAAgCIAAgCIgBgCIAAgBIgLABgAlSCHIgBgBQgCgKAEgHIACAAQAEAAAAgEIgBgCIABgCIAGgFIAHgHIACgCIACAAIgCgBIgFgCIgCgCIgLAEIgCAAQgGAEgDAFIgDAAIgCADQgBAAAAABQgBAAAAABQAAAAAAABQABAAAAABIADADQgBAEABAEIACAKIACABIADACIADABIAAAAgAhTBvIABAAIgBAAgAhtBnIAAgBIgCAAIACABgAAXBbIAEABIAAgCIgBAAIgDABgAgiBcIAAAAIAAgCIAAACgAhqkEIgCADIgQAbIgDAEIAAAEIAAABIgCAEQgIAjgOAjIgBADIgDAIIgMAWIgWAkIgWAaQgRASgIARQgSARgTAOQAAAHgFAJQgFAJABAKIAEATQACAJAHAGIAGAGQASAAARgDIgGgFQAQgdAigWQAkgYAfgdQAVgUAKgcQALgeAXgSIAAgBIAIACIAEACIADAEIADADQgRAjgPAlIgIAQIgHANQgMAPgPANIgHAGQgGAFgDAGQgFAEABAEIgBgBQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIABABIgHAFIARAMIAOAHIAIADIAVAEQAJABAFAHQAMACALAAIAAgBIAEgHQAEgGAHAAIAjgCQASgRANgUQANgTAJgUQAIgSgEgTQgBgGADgDIgBgBQgMgEgMgKQgHgGgFgHQgOgPgJgUIgkhSIAAgCIAAgCIAAgCIAAgCIAAgCIgCgDIgDgEIgBgCIgCgCIABgGQgBgEgDgEQgCgCgBgEIgDgIIgBgIIAAgFQAAgEAEgBIACAFIAEAHQAAAFACAEIAGAKQADAFACAGIADAKQACAEAAAFIAAACQARArAXAqQAFgDAGAAQAMgBAGALIAIAQIAFAHIAEACIAeAAIArgdQAYgPAPgYIARgcQAEgIAFgEIACgWQADg/hCgTIgGgCIAEADIABAAQAWARAPAUQATAZgTAXIgFAHIgNAFQgMAEgMADIgfgBIgFACIgTgFQgMgCgLgEQgPgFgNgGIgGgDQgLgIgIgJQgIgIgGgKQAAgEgDgDQgFgHgDgIIgCgEIAAgQQgCgLgGgJIgVAIIgGACIgCAAIgKAEIgFACIgEAAQgHAFgIAEIABABIgDACIAAAAQgJAKgGAMgAiTBCIAAACIAAAAIAAgCIABgCIABgCIAAAAIgBgBIgBAAIAAADIAAABIAAABIAAAAgABjgXIgBAGIAEgXIgGgBQACAIABAKgAgQl9QADAFAAAJIABAYIAAAYQABAFgDADIAAABIADAFQASAJAWgGIAEAAIAAgBIADgCIABAAQACgGAFgCIgBgBIgEgDIgEgEIAAgCIgCgBIgBgBIAAABIAAgBIgHgJQgEgFAAgFIAAgEQAAgIADgHIACgEQgUgIgIgQQgBADgCADQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAgBIAAgJIABgJIAAgBQgFgBgBgHIAAgBIAAgCIABgCIABgBIAAgBIADgBIADACIABABIABACIAJgEQAJgFAGgIQAFgHgDgIQgCgFgFgDIAAgBIgBABIgBgBIgDgBIgDAAIgEACIgBACIgBgBIgDgDIAAgCIABgCIABgCIABgCIACgBIAAAAIACgBIAAAAIAMAAIADABIAIAOQAIAOgJAMQgJAMgNAHIgFADIAAACIABAHIAAAIQAVAOAWAEQA2ALAwguQAOgOAHgSQAMgigFgdIgQAGQgJAFgKAAIgBgCIgBgBIgDgDIgCgBIgFgDIAAgEIAAgFIgBgGIgDgGIgBgDIABgCIADgEIADgCQACgCADAAIABAAIAAAAIABABIAEgGIAKgOIgBgBIgHgIQg0g2g+AoIgKAGQgFAEgGACIACACQAIAHABAMQACAQgDAPIgIAdQgCAHgDACQgCACgEgBQgBgGACgGQABgFADgGIAAgBQAIgOAAgQQABgPgJgLQgMAQgJATIgBACIAAAAIABAAIABAAIAAgBIAFAEIAEADIAEAEQADADgBADIgBABQgDAEgEgDIgGgFQgDgEgCgEIAAAAIgCAFQgDAGgFAIIgBACIgDADIABAAIgBACIgBACIgDABIgTgCQgGgBgFABIABACIABACIACACIAFAEIAHAGIABACIgBACIgBABIgBABIACAFIAAABIAAAEIAAAFQgCAMABALIADAJIABAGQACALAIABIAAABQAGABAEAEIAJAIIACgBIAGAGgAEXmsQAEALADAMQACAOAIAPQAJARAMAPIAKAMIABABIgBgCIgHgVQgFgKAAgKIgCgaQgBgMAFgHIACgDIADACIACACIAAgBIAAgBIAAgBIAAgBIACgLIACgGIAAgBIAAgCIADgJQAGgQAAgSQABhPhCgmIgGgDQgHgCgIACIgFABQg0AQgfAjIgFAEQgEADgBAGIgEAGIABABIADAFIADAIIABAHQAGgBAGgCIgBgCIACAAIAGgCIAIgCIAmAAIADABIACACQALAPANAOQAPARgHATQgGASAFASQADAJAFAIIAAABIABgCIAAgFQgBgEACgEQABgCAAgDQgBgEADgCQACgDAEgBIACACgAB3iiIACABIgBABIgBACIAAgEgAgenhIgCgEIAAgDIAAgEIAAgCIACgCIACgCIABAAIABgDQABgDADgBIAEAEIADADIACAEIAAAEIgBACQgEACgDgDIgBAEQgBADgCABIgCABIgDgBg");
	this.shape_80.setTransform(369,113.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#DD8892").s().p("AAeAYQgHgBgEgFQgDgDgBgFQgBgFAEgBIAFACIADAEQADADADABQAEABAAADIAAACQAAAFgDAAIgDgBgAgagMQgDAAgCgCIgDgDQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIACgCIADgBIADAAIAEACIAFADIACABIABACQAAAEgEABIgCAAIgGgBg");
	this.shape_81.setTransform(341.9,129.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#A72E3A").s().p("AAZAqIgCgBQgCgDABgEIADgJQAAgEADgEQADgCAAgEIABgBIAMgCIAAABIAAACIABACIAAACIABABIAAACIABACIAAACIgBACQgBAEgEAEQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABIgCAFIgJACIgCgBgAAPAFIgJgFIgFgDQgBgDgDgCIAAgCIgBgBIAEgEQADgEgBgCIABAAQAEAGAIAEIAMAIQACACACABIgFAAIAAAEIgDACIAAABQgFAAgDgCgAgqgfQgEgCAAgEQAFgDAGgCIACABIAFACIAAAAIAAABIgCACIgFAIQgEgBgDgCg");
	this.shape_82.setTransform(344.6,130.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CB4553").s().p("AAcAjIgJgFQgEgDgGgCQgEgBgFACIAAABIAAgBIABgIQAAgLAEgIQADgHAFgGIABACIAAACQADABACADIAFADIAJAGQADABAFAAIgGANQgEAIAAAJIABAGIgCAAQABgDgDgCgAAHAFQABAFADAEQAEAEAGACQAHACAAgGIAAgCQgBgEgDAAQgEgBgCgDIgEgFIgEgBQgFABACAEgAghAAIgCgBIgDgJQgCgEABgFQACACACABIAHABQgDAHAEAIIgCAAIgEAAgAgZgXIgFgDIgFgCIgDAAQACgGAGgFIACAAQAAAEAEACQADACAEAAIgGAHIgBABIgBAAg");
	this.shape_83.setTransform(342.8,130.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#744755").s().p("AgSChIAAgLIAHgEIAEABIAXACQAIACACAIQgNAMgRAAIgOgKgAihBiQAGgRAOgVQAKgOAIgPQARgdAJgfIACgJIABgCQAJgmADgjIABgFIABgBQAAgEABgEQAHgNAFgQIAMgOQAOAhgNA2QgMAtgTAsQgTAtgYAoQgRAegJAeQgRgXAKgegABihUQgNgHgPgGQgNgFgIgLQgHgLAJgHQACgCADgBQAJAIAKAIIAGADQAOAHAPAEQALAFALACIAUAEIAJAEQADABACADQgPAMgRAAQgRAAgTgLg");
	this.shape_84.setTransform(364.2,104.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#59373F").s().p("AjKDaIgBAAIAAAAIgCgBIAAAAIgEgFIAHAFIACABIgBABIgBgBgAjRDHQgIgFgCgIIgHgSQgDgKAEgKQAEgJgBgHQARgQAPgVQgKAeARAXQAJgeARgfQAYgnATgtQATgsAMgtQANg3gOggIgMAOIACgDQAEgNAIgKIAAgBIAEgBQADgGAIgEQAGgDAGgCIAAAAIAEgBIAEgBIAKgEIADAAIAFgCIAVgIQAHAJABALIAAAQIABAEQADAIAGAHQADADAAAEQAGAKAIAIQgDABgCADQgJAHAHAKQAIALANAGQAPAGANAHQAnAWAdgXQgCgEgDgBIgJgDIAFgCIAeABQAMgDAMgEIAOgFIAEgHQATgXgSgZQgQgUgWgRIABgBQBDATgDA/IgCAWQgGAEgEAIIgQAcQgQAYgYAPIgrAcIgeAAIgEgCIgEgHIgJgPQgFgLgNABQgFAAgFADQgYgqgSgrIAAgCQABgFgBgEIgEgKQgBgGgDgFIgHgKQgCgEABgFIgEgHIgCgFQgEABAAAEIAAAFIABAIIACAIQABAEADACQADAEAAAEIAAAGIABACIACACIADAEIABADIAAACIAAACIAAACIAAACIAAACIAlBSQAJAUAOAOQAFAHAHAGQALAKANAEIAAABQgCADABAGQAEATgIASQgJAVgOATQgNAUgSARIgjACQgHAAgEAGIgEAHIAAABQgLAAgLgCQgFgHgJgBIgVgEIgIgDIgFgCIAHgJQABgFAGgHIAKgJIgBAAIAEgFIADgFQAQgSALgUIAGgOIACgIIADgJQAIgfAKgeIAEgNIgDgDIgCgCIgCgBIgFgCIgHgBIgBABQgUAVgHAeQgGAdgRAXQgcAiggAcQgeAbgMAeIAGAFQgQAFgSADIgHgGgAgvCTIAAAKIAOALQASgBANgLQgCgJgIgBIgYgDIgEAAIgHAEgACJhCIABgCIABgBIgCgBIAAAEgAg6i6IAAAAIAAAAgAhADLIAAAAIAAAAgAhdDCIACAAIAAABIgCgBgAAqC3IADgBIAAACIgDgBgAB1BEQAAgKgDgIIAGABIgEAXIABgGgAiHgJIAJgXQgJAggRAcIARglgAhuh+IACgEQgBAEAAAEIgBgEg");
	this.shape_85.setTransform(367.1,104.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D6B0A0").s().p("AiQE+IgCgCIgBgDIAAgDQAAgDACgDQACgEAEgDIACgDIAEgCIACgBIACgBIACABIACABIADABIABACIAAAFQgEAIgGAGIgEADQgCACgDAAIgEgBgACFidQgGgGgBgJIAAgTIgBgRQgBgJAJgBIAEABIABACIABACQgDAEABAIIADATQABALAFAJIgBABIgBACIgDACIgDABIgFgBgABdkPIgFgBQgBgGAAgHIABgOIAAgKIAFgFIAAgBIACgCIAAAAIADgBIAFAAIADABIADACIACAEIgBABIABABIACACIAAAGIAAAHQABADgDADIgFADIgFAFQgFADgCAFIAAABIgBAAgACDkiIgCgDIgBgCIAAgCIABgCIABgCIABgBIADgCIAEgCIACABIAEABIABAAIABABIACACIAAACIgBAEQgCAEgDACIgEABQgEAAgDgCg");
	this.shape_86.setTransform(355.6,97.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B28A7E").s().p("AicFrIgCgHIAAgBIAAgCIgCgGIACACQAFADADgEIAEgDQAGgHAEgHIAAgFIgBgDIgDAAIgBgCIgCAAIALgIIACADIAFAFIACACQgBABAAABQAAAAAAABQAAAAAAABQABAAAAABIACACIgBAAQgBgBgGABIgDABIgGAFIgCACIgDAHIgGAIQgCADABAEIgBAIIAAABQgDgCgCgEgAiiFWIABgBIAAADIgBgCgABrh2IgDgFIAAgBQADgCAAgFIgBgZIgBgYQAAgIgDgGIgGgGIgCABIgJgIQgEgEgGgBIAAgBQgHgBgDgLIgBgGIgCgJQgCgLACgMIABgFIgBgEIAAgBIgCgFIACgBIABgBIAAgCIgBgBIgGgHIgGgEIgCgCIgBgCIgBgCQAGAAAFAAIATACIADgBIACgBIAAgCIAAgBIACgDIABgCQAFgIADgGIACgFIAAAAQACAEAEAEIAFAFQAFADACgEIABgBQABgDgDgDIgDgEIgFgDIgEgEIgBABIAAAAIgBgCQAJgTANgQQAKALgBAPQgBAQgIAOIAAABQgEAGgBAGQgBAFAAAGQAEABADgCIABAFIAAABIgCAAIgBABIgBABIgCABIgBACIgBACIAAACIADADIABABIgBABIgCACIgBACIAAACIABABIADADQAFAEAGgCQADgDABgDIACgEIgBgCIgCgCIgBgBIABAAIAAAAQAFAEACAFQADAHgFAIQgGAHgJAFIgKAEIAAgCIgCgBIgDgBIgDAAIAAABIgBABIgBACIAAACIAAACQACAGAFACIgBAAIgBAJIABAKQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQAAABABAAQAAAAABgBQABAAAAAAQACgCABgDQAJAPAVAIIgCAEQgEAHAAAIIAAAFQABAFADAEIAHAJIABABIABAAIABABIABACIADAEIAFADIAAABQgEACgDAGIgBAAIgCACIAAACIgFAAQgIACgJAAQgMAAgMgGgABvixIAAARIAAATQABAIAHAHIAEAAIAEgBIACgBIABgCIABgBQgEgJgBgLIgEgTQAAgIADgEIgBgCIgCgCIgDgCQgKACACAJgABRkfIAAABIgCACIgBABIgEAFIAAAJIgBAPQgBAHACAGIAEABIACAAIAAgBQABgFAFgDIAGgFIAEgDQADgDAAgDIAAgIIAAgFIgDgDIgBAAIABgCIgCgDIgCgCIgDgBIgGgBIgCABgABck6IgBADIgBABIgCACIgCABIAAACIAAAEIAAADIADAEIACACIACgBQACgCABgDIABgDQAEADADgDIABgCIAAgEIgCgDIgCgEIgFgEQgCABgCADg");
	this.shape_87.setTransform(357.1,94.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#4F3137").s().p("AirJnIACgCIgEgCQgSgBgKgVIgEgLQAMgLATgCQASgBAPgJIATgLIgBAAQgDgDABgFIADgJIAGgJQADgDAAgFIgDgDIgGgEIgEgDIgCgCQAAgEACgDIAFgKQACgDAAgEIABgDQgCgEAAgGIAAgRQgLgPgFgZIgKg/QgEgfgJgdQgGgRACgNIgCAAQAAgMgEgJIgBgKQABgIgCgGIgDhJQgBgSAFgPIgKAGQgcAPggAFIgBAAIgCgBIgHgFIADAFIABAAIABABIABAAIAAAAIABABIgBADIAAABQgEAFgHABIAEADIAKAIIAMAHQADADACAEIAAgBIADABIABACIADABIACABIACAFQAFALgEAJQgGANgIAKQgGAHgJAAIgDgCIgCgBIgDgBIgBgBIgBgCIgBgGIAAgBIgBgGQAAgJAEgIIAGgMIAAgBIACgCIABgEIAFgBQgDgBgCgCIgLgIQgIgEgEgGIgCgCQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIgCgCIgEgFIgDgDIgKAIIgDAAIgCABIgDADIgDACQgDADgDAFQgCACAAAEIAAABIABACIAAACIACAGIAAACIABACIACAHQACAEADACIAAgBIAAgIQAAgEACgDIAFgIIAEgHIACgCIAFgFIAEgCQAGAAABABQABACgEAEIgEAEQgFAFgDAHQgEAKAAAKIgCAJIAAAAIABgBQAFgCAEACQAGABAEAEIAJAEQADACgBAEQgFAGgFgFQgGgFgIAAQgHAAgBgGQgEAEgGgEQgEgDgDgGIgFgMQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAgBQgIAAgGgGIgFgIIgCgJIgCgGIgCgCIADgGQACgFADgEIARgSIABgBQAEgCAEAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAIACAAIAEADIADACIAFADIAAABIACACIgBABIAEgBIgBAAIgDgDIAAgEIADgHIABgBIADgDQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABgBIgBAAIAGAAIABAAQgDgEgBgFIgFgRQgCgFABgDIANghIAAgBIACAEQATgoAegsQAagnANgrQAIggAAghQABgPAHgNQgBgEADgFIAHgNIAJgYIAJgQIAAAAIABgBIADgEIABgBIACgCIABgBIAAABQAFgEAIgDIACgBIACgCIAAABIAFgCIACAAIAAgBIAHgEIAAABQAHgDAIgCIASgIIAIABQAAgEAEgCIABABIAAgGIACgYQAAgNgFgLIgBgEIgFADQgLgFgLgNQgMgOAAgTIgBgaQgBgGACgDIgBgBIgCgCIgBgCIgBgBQgEgCgDgEIgEgIIgBgEIADgFIABAAIAKgBIAJABQASAAAIgPIAEgGIABgBIACgCIABgDIABgDIAAABIACgGQAFgQALgOIAEgEQgCgEAGgDIAAgCIAAgBIAAgCIABgCIACgCQAGgHAJgFIAYgLIAPgFQBCgGAhAwQAKgKAOgIQAmgVApgNQAwAGAWAuQATAqgDAuQgEAtABAtIAAADQAAADACACQACAEAFACQALAGgBAKQgPgHgJgKQgDgBgCgCIgCgEIgFgDIAAgBIgBACQgBAIADAJQACAHADAHIAKAUQAFALgBAKIgBAAQgSABgKgPIgSgcQgKgOgIgQQgCgGgCADIgBABQgOAEgHgRQgHgNgBgOQgCgPADgOQADgLgBgMQgFgCgDgEIgGgKIgGgIIgHgHIgCgCQgVgCgUAFQAIAvgbAtQgdAugvAHQgHgFgOAFIgEAAQgbgBABAXIAAACQAEAGAEADQAGAFAHABIAFACQAIAAAGgDIADABIAAgCIAEAAIAJAAIABACIABABIABAAIgCgDIADAAIADgBQBbAUAgBOQAFANgCAOQgRBXhBA6QgPAOgSABQAGAbgOAcQgNAegZAZQgKAKgOAHIAAAFIAAAJIAAAHIgBACIgCACIgDADIgEAEIAAABQgBACgCADQgEAGgBAHIgCAOIAAAEIAAAAIABAlQABAOAEAPQARA4AbA2QAcA1AAA/IgBAYIgCABIAAADIAAACIAAABIABABIACACIAAAAIADAEIACAFIACADIgBACIAAACIgBABIgBABIgCABIAAACIAAACIABADIABAAQAKAIACANIAAABIgBAAIAAABIAAADIABACIgBAAIgBAAIgDAGQgGAKgNAAIgHAAQgGACgDAAIgdgBIgBgDQgGgCgFgIQgFgJAAgDQAAgGAMgMIAIgGIAAgBQgBgDABgDQACgDACgBQAFgDgDgEQgEgCAAgEQgBgEADgCIAEgIIACgCQgIgUgFgbQgJgygZguQgbgvgVgyQgGgNgDgNQgCgCgBgEQAAgHgDgHIgEgLIgFAEIgDAGQgFALgBAOQgCA5AKA1QAJA1AFA3QAGA4gKA0IAAgCIgBgEIgBgHIgEgjIgBgTIgCgkQgCg3gJg2QgKg1gCg3IAAgHIAAgCQAAgKACgJIABgCIAJgQIAEgGIAHgGIAEgDIACgBIABgBIAAABIAAgBQAGgEAIgBIAAgBIABgBIAAAAIADACIABABIgCADQgDAFgFAFIgEAEQADACABAGIAAABIABAFIACAGIACAGIACAEIAAACQACAIAEAHIACADIABAEIADAHIAKAaQAWAwAYAuQAaAvAIA0QADARABAQIgFABIgBADIgBACIADAKQABAEgDAEIgGAJQADADABAEIADgCIgBgBIABgCQACgDACAAIAWAAIAAgBIABgCQAAgEACgDIgBgCIgCgEIgBgEIABgCIgCAAQgBgCgDgCIAAAAIACAAQgCgNABgRQABgOgBgNIAAAAQgBgQgCgOIgBgBIAAgCQgGgegPgbQgdg2gSg4QgLgjAFggIAAgCIACACIABgDIAAAAIADgLIAAgCQABgIADgHIAAgBIgPACIgEAAIgJABIAAAAIgEABIgEAAIABADIgUAAIgSgBIgCgCIgEABQgjgFghgRIgGgDIAAADIABAQIABBPIAAALIABANIACAVIABAAIABABIAAABIAAABIAAACIAAAHIABACQABALAEALIAEASIABAEIABAFIAEARIAAACIACAJIABAIIADAQQAEAdAKAbQAFAOADAOIgBAEQgBAPAGALIgBABIgBADIgBAFIAAADIgBAAIgEADIgBACIgBACIAAABIABACIgBAAIABABIADACIAEABIACACIAGAGIABABIABAEIAAACQgDAAgBADIgCAEIgCADIgCAFIgDAEIAAABIACAEIAEADIACAAIAAgBIADgBIgDgFIAIAGIAEgCIAAAAIAIgEQAEgDADADIAAgCIAHADIgBAHIABACIADADIgBAAIAEAOIADABQACARgKARQgMAUgbgDQgWgDgUAHQgFACgEAAQgGAAgFgDgAjqCvIgBABQAAAEgDACQgDAEAAAEIgDAJQgBAEACADIACABIACABIAIgCIADgFQABgBAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQADgEABgEIACgCIAAgCIgBgCIgBgCIAAgBIAAgCIgBgCIgBgCIAAgBIgLACgAk5B/IgCABQgGAFgCAFIgDABIgCACQAAABgBAAQAAABAAAAQAAABAAAAQABABAAAAIAEADQgBAEACAEIADAJIACABIAEACIACAAIAAgBQgEgIADgIIACAAQAEgBgBgEIgBgCIABgCIAGgGIAFgIIABgCIACgBIgCAAIgEgCIgCgBQgGACgFADgAhGkuIgGACIgCAAIgKAEIgFACIgEAAIAAABQgGABgFADQgJAEgDAGIgDABIgBABQgIAKgEANIgBADQgGAQgGANIgDAEIABAEIAAABIgBAEQgEAkgJAlIAAADIgCAJIgJAXIgRAmQgJAPgKAOQgNAVgGAQQgPAVgRAQQABAHgEAJQgEAKADAKIAGASQADAIAIAFIAHAGQASgDAQgFIgHgFQANgeAegbQAggcAbghQASgXAGgdQAHgfAUgVIAAgBIAIABIAFACIABABIACACIADADIgEANQgKAfgIAfIgDAJIgCAIIgGAOQgKATgRASIgDAFIgDAFIAAAAIgJAJQgGAHgCAFIgHAJIAFACIAIADIAVAEQAJABAFAHQAMACALAAIAAgBIAEgHQAEgGAHAAIAkgCQARgRANgUQANgTAJgUQAIgSgEgTQgBgGADgDIgBgBQgMgEgMgKQgHgGgFgHQgNgPgJgUIglhSIAAgCIAAgCIAAgCIAAgCIAAgCIgCgDIgDgEIgBgCIgCgCIABgGQgBgEgDgEQgCgCgBgEIgDgIIgBgIIAAgFQAAgEAEgBIACAFIAEAHQAAAFACAEIAGAKQADAFACAGIADAKQACAEAAAFIAAACQASArAWAqQAFgDAGAAQAMgBAGALIAIAQIAFAHIAEACIAeAAIArgdQAYgPAPgYIARgcQAEgIAFgEIACgWQADg/hCgTIgGgCIAEADIABAAQAWARAPAUQATAZgTAXIgFAHIgNAFQgMAEgMADIgfgBIgFACIgTgFQgMgCgLgEQgPgFgNgGIgGgDQgKgIgIgJQgIgIgHgKQAAgEgDgDQgFgHgDgIIgCgEIAAgQQgCgLgGgJIgVAIgAhqBvIABAAIgBAAgAiEBnIAAgBIgCAAIACABgAAABbIAEABIAAgCIgBAAIgDABgAg5BcIAAAAIAAgCIAAACgABMgXIgBAGIAEgXIgGgBQACAIABAKgAgnl9QADAFAAAJIABAYIAAAYQABAFgDADIAAABIADAFQATAJAVgGIAEAAIAAgBIADgCIABAAQACgGAFgCIgBgBIgEgDIgEgEIAAgCIgCgBIgBgBIAAABIAAgBIgHgJQgDgFAAgFIAAgEQAAgIACgHIACgEQgTgIgJgQQgBADgCADQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAgBIAAgJIABgJIAAgBQgFgBgBgHIAAgBIAAgCIABgCIABgBIAAgBIADgBIADACIABABIABACIAKgEQAJgFAGgIQAFgHgDgIQgCgFgFgDIAAgBIgBABIgBgBIgDgBIgDAAIgEACIgCACIgBgBIgDgDIAAgCIABgCIABgCIABgCIACgBIAAAAIADgBIAAAAIAMAAIADABIAHAOQAIAOgJAMQgIAMgNAHIgGADIAAACIABAHIAAAIQAWAOAVAEQA2ALAwguQAOgOAHgSQAMgigFgdIgQAGQgJAFgKAAIgBgCIgBgBIgDgDIgCgBIgFgDIAAgEIAAgFIgBgGIgDgGIgBgDIABgCIADgEIADgCQACgCADAAIABAAIAAAAIABABIAEgGIAKgOIgBgBIgHgIQg0g2g+AoIgJAGQgFAEgGACIACACQAIAHABAMQACAQgDAPIgIAdQgCAHgDACQgDACgEgBQgBgGACgGQABgFADgGIABgBQAIgOAAgQQABgPgJgLQgNAQgJATIgBACIAAAAIABAAIABAAIAAgBIAFAEIAEADIAEAEQADADgBADIgBABQgDAEgEgDIgGgFQgDgEgCgEIAAAAIgCAFQgDAGgFAIIgBACIgDADIABAAIgBACIgBACIgDABIgTgCQgGgBgFABIABACIABACIACACIAFAEIAHAGIABACIgBACIgBABIgBABIACAFIAAABIAAAEIAAAFQgCAMABALIADAJIABAGQACALAIABIAAABQAGABAEAEIAJAIIACgBIAGAGgAEAmsQAEALADAMQACAOAIAPQAJARAMAPIAKAMIABABIgBgCIgHgVQgFgKAAgKIgCgaQgBgMAFgHIACgDIADACIACACIAAgBIAAgBIAAgBIAAgBIACgLIACgGIAAgBIAAgCIADgJQAGgQAAgSQABhPhCgmIgGgDQgHgCgIACIgFABQg0AQgfAjIgFAEQgEADgBAGIgEAGIABABIADAFIADAIIABAHQAGgBAGgCIgBgCIACAAIAGgCIAIgCIAmAAIADABIACACQALAPANAOQAPARgHATQgGASAFASQADAJAFAIIAAABIABgCIAAgFQgBgEACgEQABgCAAgDQgBgEADgCQACgDAEgBIACACgABgiiIACABIgBABIgBACIAAgEgAg1nhIgCgEIAAgDIAAgEIAAgCIACgCIACgCIABAAIABgDQABgDADgBIAEAEIADADIACAEIAAAEIgBACQgEACgDgDIgBAEQgBADgCABIgCABIgDgBg");
	this.shape_88.setTransform(371.3,113.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#A06456").s().p("ABxA9IABgUQAAgPgEgPQgGgSgMgOIgRgRIAAgCIABgBIAFgDQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAIAAgBQgHgCgHABIgHABIgIADQgFACgDgDIgBgDQABgHAIgCIANgCQAHAAAHgBIALAAIAQAFIAEADIAAACIgBABIgFADIgHABIgBABIAEACIADACIABACIAAACIgBACIgCAAIgJACIAAABQAHAEADAIIAJAVQAEAKACAKQADANAAAMQABAOgFALQgIgBABgKgAhvAlIgDgBIAAgDIABgDIAFgFIABgBIAAgCIABgCIAAgCIABgCIACgBIACgBIAFgDIACgDIAAgCIAAgBIgLABQgGABgEAFQgEAFgEgFIAAgEQAAgGAHgCIAEgBQAEgCAEAAQAHABAHgCIgcgLQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAIABgCQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAABAAIAFgCIAEgEIADgCIgFgDIgEgDIABgBIADgDIAGgFIABgDIgDgCIgBgCIAAgCIADgDQAEgDAEgCQACgBgCgHIAAgBIAFgCIAFACIADAEQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABADgBADIgBABIgBABIAFAEIADAEIAAAEIgBACIgBABIgBAAIgFABIgCABIgBABIAJgDQAJgBAJgEIAAAAIADgBQAMADgIAFQgHADgHABIgHACIAMAEIAEAEIgBACIAAACIgCABIgBABIgBACIgDADQgGgBgHAAIAFABIAEAEIAAABIgBACIgBABIADABIADABIABAEQgCADgEAAIgJgCIABACIABADIAAACIAAACIAAACIgBABIgCABIgFABIgCABIgDACIAAACIgBABIAAACIgBACIAAACIgCABIgCABIgFADIgEACIgCAAg");
	this.shape_89.setTransform(387.4,68.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#6F453C").s().p("AB7B2IgCgDIgDADIABgHQAFgOACgOQABgQgHgPQgGgLAEgFQABgDAEgCIAEAFIAAABQADgKgBgLQgBgLgGgHQgHgJAEgFQgEgFgCgFIABgBQABAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAIANACIADABQgCgGgEgGIgJgPQgGgKgIgHQgEgFAAgEIAFAAQAIAAAFAEIAEAFIACgBQA2A3gWBLQgGARgJAOIgFAHIAAAAIAAABIgBACIAAAAIgEAGIgFAKIAAABIgBABIAAABgAifBYIAAAAIgBgCQADgJANACQAJABAKgDIAJgEIgEgDIgKgIIgCgDQABgFAFAAIANABQAFgBADgDIgGgFIgFgGIgCgDQARgBASgGQAMgFAJgIQAGgGABgJIADgBIAGgBIADAAIACAAIABgBIABABIADgBQAJACALgBIAQgCQgCAdgVAdQgMAQgRAKQghARgdAAQgXAAgWgLgAgogtQgDAAgEgEIgMgQQgOgSgVADQgQACgLgIIABgBQACgEAFgBQAGAAAGABIAGAAIgBAAIgHgEIgegNIABgBIABgBIAAAAIALgDQBGgWAkBCIAEAJIABACQgHAEgGAHQgEAAgDADQgEgBgCACIgDABIgCgDg");
	this.shape_90.setTransform(388.9,68.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#885549").s().p("ACICdIgHgOQgIgRgEgUQgDgPABgOQABgNgBgMIgCgCQgDAAgDACQgEACAAAEQAAACgCACQgDADAAAEIgCAFIgBABQgCgKgBgIQAAgTAKgQQANgRgLgSIgPgkIgCgBIgCgCIglgLIgIABIgHgBIgBAAIAAADQgGAAgGgBQABgDAAgEIgBgIIgCgGIAAgBIAGgFQACgFAFgCIAFgDQAogZA2gBQAAAEAFAEQAIAHAGAKIAJAPQADAGACAGIgCgBIgNgCQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAAAIgBABQABAGAEAEQgDAFAGAJQAGAIABALQACAMgEAJIAAgBIgDgFQgEACgCADQgDAFAFAKQAIAPgCARQgCAOgEAOIgCAGQgHAFgCAMIgFAZQgCALABALQACALAAALgABlheIAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAIgFADIgBABIgBACIARARQANAOAFATQAFAPgBAPIgBATQgBAKAIAAQAFgLAAgNQAAgMgEgMQgCgLgEgKIgIgVQgEgIgGgEIgBgBIAJgCIACgBIABgBIAAgCIgBgCIgCgCIgEgCIABgBIAGgBIAFgDIABgBIABgCIgEgEIgRgFIgLABQgHABgHAAIgNACQgHACgBAHIAAACQAEADAFgBIAHgDIAIgBIAEgBIAJACgACmAzIAAAAIAAABIAAgBgAilAMIACgIIABgGIAAgCIAHgBQAPgDALgJQAMgKgEgPIgEgQIgCgBIgMgEIAAgEQAEgCADgGQAJgMAHgOQAHgNACgQQADgMgHgJIALgFIgCABIAeANIAIAEIABAAIgHAAQgGgBgGABQgFABgCADIAAACQALAHAQgCQAVgDANASIANARQADADADAAIADADIgFAEIgBAAIAAAEIACAGQAAADgBADQAAADgBACIgBAFIAEADIABACIADADIAAACIABABIgDACIgCgCIAAABIgDAAIgCABIgHABIgCACQgBAIgGAGQgJAIgMAFQgTAGgRABIACAEIAGAFIAGAEQgEAEgFAAIgMgBQgGAAgBAFIACADIALAIIAEADIgJAFQgKADgJgCQgNgCgEAKIACABIAAAAQgVgKgRgTgAhOgoIABABIgCAEIgFADIgDABIgCABIAAACIgBACIAAACIgBACIgBABIgFAFIgBADIABACIACACIADAAIAEgCIAEgDIADgBIABgBIABgDIAAgBIABgCIAAgBIABgCIACgCIADgBIAEgCIACAAIABgBIABgCIAAgDIgBgCIgBgCIgBgCIAJACQAFAAACgDIgCgFIgCgBIgDgBIABgBIAAgCIABgCIgEgDIgFgBQAHgBAGACIACgDIABgDIABgBIACgBIABgBIAAgCIgEgEIgMgEIAIgCQAHgBAGgEQAIgEgMgDIgCAAIgBAAQgJAFgJABIgJACIABgBIADgBIAEAAIABAAIACgBIAAgCIAAgFIgCgDIgGgFIABAAIABgCQABgCAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIgEgEIgFgCIgFACIAAABQADAHgDABQgEABgDAEIgDADIAAACIABACIADACIgCACIgGAGIgDACIgBACIAFADIAEADIgCABIgFAFIgFACQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABIAAABQAAABABABQAAAAABAAQAAABABAAQAAAAABAAIAbALQgHABgGAAQgFAAgDABIgFADQgGACgBAFIABAFQAEAEADgEQAEgGAGAAIALgBgAAChbIAAAAIgBAAQADgDAEAAIgFAEIgBgBgACVh5IAFAEIgBACIgEgGg");
	this.shape_91.setTransform(385.8,72.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D6B0A0").s().p("AiaFCIgCgDIgBgCIAAgDQAAgEACgCQACgFAEgDIACgCIADgDIACgBIADAAIACAAIABACIADAAIABACIAAAGQgEAHgGAGIgDAEQgDACgCAAIgEgBgAB7iZQgHgHgBgJIAAgSIAAgRQgCgJAKgCIADACIACABIABADQgDAEAAAIIAEATQABAKAEAKIgBABIgBACIgCABIgEABIgEAAgABikWIgEgCQAAgGACgGIAEgOIADgJIAGgEIACgBIACgBIAAAAIACgBIAFACIAEACIABACIAAAEIgBACIABAAIACADIgCAFIgCAIQAAADgDABIgFADIgIADQgEACgEAEIAAAAIgBAAgACNkeQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAgCIABgBIABgCIABgCIACAAIAEgBIADgBIADABIADACIABABIABABIABACIAAACIgCADQgDAEgEABIgBAAQgFAAgDgEg");
	this.shape_92.setTransform(356.7,97.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#B28A7E").s().p("AifFoIgCgGIgBgCIAAgCIgCgGIACACQAFADAEgEIAEgDQAFgGAEgIIAAgFIgBgCIgCgBIgCgBIgCgBIALgHIADACIAEAGIACACQgBAAAAABQAAAAAAABQAAAAABABQAAABAAAAIACADIAAAAQgBgCgHABIgDACIgGAEIgCACIgDAHIgGAIQgBAEAAAEIgBAIIAAABQgDgDgBgEgAimFTIABgBIAAADIgBgCgABnh4IgCgGIgBgBQADgCAAgFIgBgYIAAgIIAAgRIgBgHIgBgFIgBgGIAAAAIgCgIIgBgBIgBABIgFgHIgCgDIgBgBQgDgEgEgDIAAgBQgHgDAAgLIABgGIAAgJQACgLAEgLIACgFIABgEIAAgBIgBgFIACgBIABAAIACgDIgBgBIgFgIIgEgFIgBgCIAAgDIgBgCQAFABAFACIASAGIAEABIABgBIABgCIAAgBIADgCIACgCIALgLIADgEIAAAAQABAEACAFIAFAGQADAEAEgCIABgCQABgDgCgDIgCgFIgDgEIgEgFIgBABIAAAAIAAgCQAOgRARgLQAGANgFAOQgFAQgLALIgBAAQgFAFgDAFQgDAGgBAGQAEABAEAAIgBAEIAAAAIgCAAIgBABIgCAAIgCACIgBABIgBACIgBACIACADIABABIgCABIgCACIgBABIgBACIAAACQAAAAAAABQABAAAAABQAAAAABABQAAAAABABQAEAEAFAAQAEgCADgDIACgDIAAgDIgBgBIgBgCIABAAIAAAAQAEAFAAAFQABAIgHAGQgIAGgJACIgLACIgBgCIAAgCIgDgCIgDAAIAAABIgBAAIgCACIAAACIgBABQAAAHAEADIAAAAIgEAIIAAACIAGALIACgCIAEAMIAAABIABAAIAAABIALAIIAHAHQgDAHAAAJIgBAEQABAFADAFIAHAIIABACIABAAIABABIABABIAEAEIAEADIAAABQgEADgDAFIgBABIgCACIAAABIgFAAQgIACgIAAQgNAAgMgFgABri0IAAARIABATQAAAJAHAGIAFABIADgBIACgCIACgCIAAgBQgEgJgBgLIgDgTQgBgIADgEIgBgCIgCgCIgDgBQgJABABAJgABpkpIAAABIgCABIgCAAIgGAEIgCAJIgEAOQgDAGAAAHIAFACIABAAIAAgBQADgEAFgCIAHgDIAFgCQADgCAAgDIACgHIADgGIgCgCIgBgBIABgBIgBgEIgBgCIgEgCIgFgCIgCAAgAB7lAIgCACIgBAAIgCACIgDABIAAACIgBAEIgBADIABAEIACACIADAAIADgEIACgDQADADAEgBIACgBIABgEIgBgEQAAgBAAAAQAAgBgBgBQAAAAAAAAQgBgBAAAAIgEgFQgCAAgCADg");
	this.shape_93.setTransform(357.4,95.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#4F3137").s().p("AivJXIABgCIgEgCQgRgBgLgVIgEgLQAMgLAUgCQASgBAPgJIASgLIAAAAQgEgDABgFIAEgJIAFgJQADgDABgFIgDgDIgHgEIgEgDIgBgCQAAgEABgDIAFgKQACgDABgEIABgDQgDgEAAgGIAAgRQgLgPgEgZIgLg/QgEgfgJgdQgFgRACgNIgDAAQAAgMgEgJIgBgKQABgIgCgGIgDhJQgBgSAGgPIgLAGQgcAPgfAFIgCAAIgCgBIgHgFIAEAFIAAAAIACABIAAAAIABAAIABABIgBADIgBABQgEAFgGABIADADIAKAIIANAHQADADABAEIABgBIACABIABACIADABIACABIADAFQAFALgEAJQgGANgIAKQgHAHgJAAIgCgCIgDgBIgCgBIgCgBIAAgCIgCgGIAAgBIgBgGQABgJAEgIIAFgMIABgBIACgCIAAgEIAFgBQgCgBgCgCIgMgIQgIgEgEgGIgCgCQAAgBAAAAQgBgBAAAAQAAgBAAgBQABAAAAgBIgCgCIgEgFIgDgDIgLAIIgCAAIgDABIgDADIgCACQgEADgCAFQgCACAAAEIgBABIABACIABACIACAGIAAACIABACIACAHQABAEADACIAAgBIABgIQAAgEABgDIAGgIIADgHIACgCIAGgFIADgCQAHAAABABQAAACgEAEIgDAEQgFAFgDAHQgFAKAAAKIgCAJIAAAAIABgBQAFgCAFACQAFABAFAEIAIAEQAEACgBAEQgFAGgGgFQgGgFgIAAQgHAAAAgGQgEAEgGgEQgFgDgCgGIgFgMQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBgBQgIAAgGgGIgEgIIgCgJIgDgGIgBgCIACgGQACgFADgEIARgSIACgBQAEgCADAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIADAAIADADIADACIAFADIABABIABACIAAABIAEgBIgBAAIgDgDIAAgEIACgHIABgBIADgDQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBIAAAAIAGAAIAAAAQgDgEgBgFIgFgRQgBgFAAgDIAOghIAAgBIABAEQATgoAfgsQAZgnANgrQAJggAAghQAAgPAHgNQAAgEADgFIAGgNIAKgYIAJgQIgBAAIABgBIADgEIABgBIADgCIAAgBIAAABQAFgEAIgDIADgBIACgCIAAABIAFgCIABAAIABgBIAGgEIAAABQAHgDAIgCIASgIIAIABQAAgEAFgCIABABIAAgGIABgYQABgNgFgLIgBgCIABAAIgEgJIAAAAQgJgIgIgQQgHgQAFgSIAFgZQACgGACgDIAAgBIgCgDIAAgCIgBgCQgEgCgBgEIgCgJIAAgEIAEgEIABgBIAKACIAJAEQARAEAMgMIAFgFIABAAIACgBIACgEIACgCIAAABIADgFQAKgOANgKIAEgEQAAgEAHgBIAAgCIABgBIAAgCIABgCIADgCQAHgEAKgDIAbgEIAQgBQBBAMATA3QANgHAPgEQArgKArgCQAsATAJAyQAHAugPArQgPArgMArIAAADQgBACACAEQAAADAEAEQAJAIgEAJQgMgKgGgMQgDgCgBgCIgBgEIgDgFIgBgBIgBACQgDAHAAAKIABAPIAFAWQACAMgEAJIAAAAQgSgEgGgRIgKggQgGgQgDgSQgBgGgCADIgBAAQgPAAgDgSQgCgOACgOQACgPAHgNQAFgKADgLQgFgEgBgEIgDgLIgFgKIgEgJIgBgCQgUgHgVgBQgFAwgmAjQgnAlgwgGQgGgGgOABIgEgBQgLgDgHACIgBgCQgCAFAAAGIABACQADAGAFADQAGAFAHABIAFACQAHAAAHgDIADABIgBgCIAEAAIAJAAIACACIAAABIABAAIgCgDIAEAAIADgBIACABQAjASAjANQAhAZARApQAGANgDAOQgQBXhBA6QgQAOgSABQAGAbgNAdQgOAdgYAZQgLAKgOAHIAAAFIAAAJIAAAHIgBACIgBACIgEADIgDAEIAAABQAAACgDADQgEAGgCAHIgBAOIgBAEIABAAIABAlQAAAOAFAPQAQA4AcA2QAcA1gBA/IgBAYIgBABIgBADIAAACIABABIAAABIADACIgBAAIADAEIADAFIABADIAAACIgBACIgBABIAAABIgCABIgBACIABACIABADIABAAQAKAIABANIAAABIgBAAIAAABIAAADIABACIgBAAIAAAAIgDAGQgHAKgNAAIgGAAQgHACgDAAIgcgBIgBgDQgHgCgFgIQgEgJAAgDQAAgGAMgMIAIgGIgBgBQgBgDACgDQABgDADgBQAFgDgEgEQgDgCgBgEQAAgEACgCIAFgIIABgCQgIgUgFgbQgJgygZguQgagvgWgyQgFgNgDgNQgDgCAAgEQgBgHgCgHIgEgLIgGAEIgCAGQgGALAAAOQgCA5AJA1QAJA1AGA3QAFA4gJA0IAAgCIgBgEIgBgHIgEgjIgCgTIgCgkQgBg3gKg2QgJg1gDg3IAAgHIAAgCQAAgKADgJIAAgCIAJgQIAFgGIAGgGIAFgDIACgBIAAgBIAAABIABgBQAGgEAHgBIAAgBIABgBIABAAIACACIABABIgBADQgDAFgGAFIgDAEQADACAAAGIABABIABAFIABAGIACAGIACAEIAAACQADAIAEAHIACADIABAEIACAHIALAaQAVAwAZAuQAZAvAJA0QADARAAAQIgEABIgCADIAAACIADAKQABAEgDAEIgGAJQACADABAEIADgCIAAgBIAAgCQACgDADAAIAWAAIAAgBIAAgCQAAgEACgDIgBgCIgBgEIgBgEIAAgCIgCAAQgBgCgCgCIgBAAIACAAQgCgNABgRQABgOAAgNIAAAAQgBgQgDgOIAAgBIAAgCQgHgegOgbQgdg2gTg4QgLgjAFggIAAgCIADACIAAgDIABAAIACgLIAAgCQABgIAEgHIAAgBIgPACIgEAAIgJABIgBAAIgDABIgFAAIACADIgUAAIgSgBIgDgCIgDABQgkgFgggRIgGgDIAAADIAAAQIABBPIABALIAAANIACAVIABAAIABABIAAABIAAABIAAACIABAHIAAACQABALAEALIAEASIABAEIABAFIAEARIABACIACAJIABAIIACAQQAFAdAKAbQAFAOACAOIAAAEQgCAPAGALIgBABIgBADIgBAFIAAADIAAAAIgEADIgBACIgBACIAAABIAAACIAAAAIAAABIADACIAEABIADACIAFAGIACABIAAAEIAAACQgCAAgCADIgBAEIgCADIgDAFIgCAEIAAABIACAEIAEADIABAAIABgBIACgBIgCgFIAIAGIAEgCIAAAAIAIgEQAEgDADADIgBgCIAIADIgBAHIABACIADADIgCAAIAFAOIACABQACARgJARQgNAUgbgDQgVgDgUAHQgFACgEAAQgGAAgFgDgAjvCfIAAABQgBAEgCACQgEAEAAAEIgCAJQgBAEACADIABABIACABIAJgCIADgFQAAgBABAAQAAgBABAAQAAgBAAAAQABgBAAAAQADgEABgEIABgCIAAgCIAAgCIgBgCIgBgBIAAgCIgBgCIAAgCIAAgBIgMACgAk+BvIgCABQgFAFgCAFIgDABIgCACQgBABAAAAQAAABAAAAQAAABAAAAQAAABABAAIADADQgBAEACAEIAEAJIABABIAEACIADAAIgBgBQgEgIADgIIACAAQAEgBAAgEIgBgCIAAgCIAGgGIAFgIIACgCIACgBIgCAAIgFgCIgCgBQgGACgFADgAhLk+IgFACIgDAAIgKAEIgEACIgEAAIAAABQgGABgGADQgIAEgEAGIgDABIAAABQgIAKgEANIgCADQgFAQgHANIgCAEIABAEIgBABIgBAEQgDAkgJAlIgBADIgCAJIgJAXIgRAmQgIAPgKAOQgOAVgGARQgPAUgRAQQABAHgEAJQgEAKADAKIAHASQACAIAIAFIAHAGQASgDAQgFIgGgFQAMgeAegbQAggbAcgiQARgXAGgdQAHgfAUgVIABgBIAHABIAFACIABABIADACIADADIgFANQgJAfgIAfIgDAJIgCAIIgGAOQgLAUgQARIgDAFIgEAFIAAAAIgJAJQgGAHgBAFIgHAJIAFACIAIADIAVAEQAJABAFAHQALACALAAIAAgBIAEgHQAEgGAHAAIAkgCQARgRANgUQAOgTAJgUQAIgSgEgTQgBgGACgDIAAgBQgNgEgLgKQgHgGgFgHQgNgPgJgUIgmhSIAAgCIAAgCIAAgCIAAgCIAAgCIgBgDIgDgEIgCgCIgBgCIAAgGQAAgEgDgEQgDgCgBgEIgCgIIgBgIIAAgFQAAgEAEgBIACAFIAEAHQgBAFACAEIAHAKQADAFABAGIAEAKQACAEgBAFIAAACQASArAYAqQAEgDAFAAQANgBAFALIAJAQIAEAHIAEACIAeAAIArgdQAYgPAQgYIAQgcQAEgIAGgEIACgWQADg/hDgTIgGgCIAEADIABAAQAWARAQAUQASAZgTAXIgEAHIgOAFQgMAEgMADIgegBIgFACIgUgFQgLgCgLgEQgPgFgOgGIgGgDQgJgIgJgJQgIgIgGgKQAAgEgDgDQgGgHgDgIIgBgEIgBgQQgBgLgHgJIgVAIgAhuBfIAAAAIAAAAgAiJBXIAAgBIgCAAIACABgAgDBLIADABIAAgCIAAAAIgDABgAg+BMIABAAIgBgCIAAACgABHgnIgBAGIAEgXIgGgBQADAIAAAKgAD+l0IABACQACAMgBANQgBAOADAQQAEATAIASIAGANIABACIAAgCQAAgLgCgLQgBgLACgKIAFgaQACgMAHgFIADgCIACADIABACIAAgBIAAAAIABgCIAAAAIAFgLIAEgFIAAgBIAAgCIABAAIAFgIQAJgNAGgSQAWhMg2g2IgGgEQgFgFgIAAIgFABQg3ABgnAZIgGADQgFACgCAFIgGAFIABABIACAGIAAAIQABAEgBADQAGACAFgBIAAgCIACAAIAHAAIAIAAIAkAKIADACIABACIAPAjQALAUgMAQQgLAQABATQAAAJADAJIAAABIABgCIABgFQABgEACgDQACgCABgCQAAgEADgCQADgCADAAIABAAgAgqmMIABAFIABAIIAAARIAAAHIABAYQAAAFgDADIABABIACAFQAUAJAUgGIAFAAIAAgBIACgCIABAAQADgGAEgCIAAgBIgEgDIgEgEIgBgCIgBgBIgBgBIAAABIgBgBIgGgJQgDgFgBgFIABgEQAAgIADgHIgHgIIgLgHIAAgBIAAgBIgBgBIgEgLIgCACIgGgMIAAgBIAEgIIAAgBQgEgDAAgGIABgBIAAgCIACgCIABgBIAAAAIADgBIADADIAAACIABABIALgBQAJgDAHgFQAHgGgBgIQAAgGgEgEIAAgBIgBABIgBgBIgDgCIgCgBIgDABIgDABIgBgBIgCgEIABgCIABgBIABgCIACgBIACgBIABAAIABAAIAAgBIAMAEIACACIAFAPQADAQgMAJQgKAJgOADIgHACIAAACIgCAHIgCAHQASAUATAKQAxAYA6gfQARgKAMgQQAVgcADgeIgRABQgLADgJgDIAAgCIgBgCIgCgDIgCgBIgEgEIABgEQACgDAAgDQABgCgBgDIgBgHIAAgDIABgBIAEgEIADgBQACgBAEABIAAAAIABgBIABACIAFgFQAGgGAHgFIgBgBIgEgKQgkhBhGAVIgLAEIgBAAQgGADgGAAIACACQAGAJgCAMQgDAQgHAOQgHANgIANQgEAFgDACQgDABgEgCQABgGADgFQACgFAFgFIABgBQALgLAFgPQAFgPgGgMQgRALgNAQIgCACIABAAIABAAIAAAAIABAAIAEAFIADAEIABAEQACAEgBADIgBABQgDACgDgDIgFgHQgCgEgBgEIAAgBIgDAEIgLAMIgCABIgDADIAAAAIgBACIgBABIgEAAIgSgGQgFgDgFAAIABACIAAACIABACIAEAFIAFAIIABACIgCACIgBABIgCAAIABAGIAAABIgBADIgCAGQgEAKgCALIAAAKIgBAGQAAALAHADIAAABQAEACADAEIABACIACACIAFAHIABAAIABABIACAIIAAAAIABAFgABbiyIACABIgBABIgBACIAAgEgAgan1IgCgCIgBgEIABgDIABgEIAAgCIADgBIACgBIABgBIACgCQACgCACAAIAEAEQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAIABAEIgBAEIgCACQgEABgDgEIgCADIgDAEIgDAAg");
	this.shape_94.setTransform(371.7,115.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CB4553").s().p("AAOAwQACgDgDgDIgGgIIgHgHQgEgDgFAAIgBAAIAAAAQACgDACgEQADgJAGgIQAFgFAHgEIAAABIAAADIADAFIADAEIAHAJQACADAFABIABgBIgKAKQgHAHgCAJIgCAGgAACAHQAAAFACAEQACAGAGADQAFAEACgFIABgCQAAgEgDgBQgDgCgBgEIgCgFIgEgEQgEAAgBAFgAgegJIgDgCIgBgBIgBgKQAAgEABgEIAFADIAFAEQgEAFAAAKgAgTgeIgDgFIgEgDIgDgBQAEgEAHgDIACAAQgCADAEAEIAFAEIgHAEIgCACIgBgBg");
	this.shape_95.setTransform(330.8,122.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#5F4B67").s().p("AgpDPQADgDAAgEIgBgCIgBgCIgBgBIADACIAFABIAEAAIABgBIAAACIgBAEIABACQgDgDgEADIgIAEIACgCgAg4DAIAAABIAAABIgCABIACgDgAgsC5IgEgBIAAAAIgCABIAAgCIABAAIAHACIAAABIAAABIgCgCgABQCvIAGgJQADgEgBgEIgDgKIAAgCIACgDIAFgBQgBgQgDgRQgJg0gZgvQgZgtgWgwIgKgaIgCgHIgBgEIgCgDQgEgHgCgIIAAgCIgCgEIgCgGIgCgGIABAEIAFgFIAKgKIAKgIIAEgDQAAAZAHAZQANAzAUAyIATAsIAGAOIACAFIANAfIACAGIAHAWQAFAWABAXIAAgBIgEAAIAAAAIgDABQgDABgCACIgBABIgBACIAAACQAAAKAKACIAEACIAAAEIABACIADACIAEABIAAACIAAABIgWAAQgDAAgCADIAAACIAAABIgCACQgCgEgCgDgAg9CZIABgFIABgDIAAgBQACAEAEADIAFgFIABAFIAAAEIgBgBIgKAAIgDACIAAgDgAhGBWQgKgbgFgdIgCgQQADAHAIAIQAKAKAEANIACAOIABAEIAAABIAAACIgDApQgDgOgFgOgAhTgDIgBABQAFgKAAgLQAAgMgDgKQgDgKgBgLQAAgJgGgGQAEgGABgGQADgHgEgGQgDgGgFgDIAAgCIABgLQAAgGADgFIAGgJQADgDAAgFIgEgHIgEgGIgGgFIgGgEIgDABQgEACgBAEQAAADACACIAFAGIADAEIgBABIgFAOQgEAGAAAHIABAKIgBAAIgBgLIgBhPIATAMQAeASAfgDIgFADIgGAGIgFAGIgJAQIAAACQgDAJABAKIgDgBIAAAAIgEABIgBAAIgBABIgCACQgEAKAAALQAAAsAFAqIACAbQgGgHgJgEgAhagCIABADIABAAIACgBQgCADAAADIgCgIgAhlgwQgEgLAAgLIABABIACACIABABIAAAFQABAKACAJIACAMIgFgSgAhshUIgDgVIABAAIAFADIABABIABACIACACQgBAEgCADQgDADAAADIgBAAgAAcizIADABIABAAIgBAAIAAADIgCgCIAAACIgBgEgAAHjLIAEgBIAAACIgEgBg");
	this.shape_96.setTransform(365.2,146.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#48394F").s().p("Ag6DcIgEgCIgCgFIAAgBIADgEIACgFIACgBQAAAEADACIAFAEIAFgCIACgDIABgEIAAABIACADIAAACQAAAEgDACIgCACIAAABIgEABIgIgGIADAGIgDAAIAAABIgCAAgAgiDPIgFgCIgCgCIAAgBIAAgDIgBgCIgBgCIAAgBIAAgBIgHgBIgBgBIgBgEIgBgBIgGgGIgCgCQAHABAIgDQADgBABgCIABgCIgBgEIgDgDIgCgBIgBgEIgBgFQAHgJgCgQQgCgXABgXQACgYgKgWQgGgMgJgJIgDgbQgFgqABgsQAAgLADgKIACgCIABgBIACAAIADgBIAAAAIADABIAAACIAAAHQACA3AKA1QAJA1ACA3IACAkIABATIAEAjIABAHIABAEIgBACIgEAAgABsCyIgDgCIgBgCIABgDIgFgDQgKgCAAgJIAAgCIABgCIABgCQACgCADgBIADgBIAAAAIAEAAIABABQgCgXgFgWIACABQAFgCACgCIAAAbQgBAQACAOIgCgBIAAABQADABABACIACAAIgBADIABADIACAEIABACQgCADAAAEIgFgBgAhFCuIABAAIAAABgABZBLIgNgeIABABQAIAKADALIADAPIgCgHgAg9BLIgCgPQADAIAAAKIgBgDgABmA/QgEgNgFgMQgGgNgMgFIAAAAIgEABIgCABIgBACIAAABIgSgsQgVgygNgzQgHgYAAgZIgEACIgKAJIgJAJIgGAGIgBgFIgBgEIAAgCQgBgGgDgCIAEgEQAFgFADgFIACgDIgBgBIgDgCIAAAAIgBABIAAABQgIABgGAEIAAABIAAgBIgBABIgCABQgeADgegRIgTgNIgBgPIAAgEIAGAEQAhAQAjAFIAEAAIACABIASABIATAAIgBgCIAEgBIAEABIAAgBIAAAAIAJgBIAEgBIAPgCIAAABQgDAIgBAHIAAACIgDALIgBAAIgDAAIABADQgFAgALAjQATA5AdA1QAPAaAGAfIgBgEg");
	this.shape_97.setTransform(365.2,145.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D6B0A0").s().p("AjHETIgBgDIAAgDIABgDQABgDACgCQAEgDAEgCIADgBIAFgCIACAAIACABIABAAIADACIABACIABACQAAADgCACQgGAGgHAEIgFACIgDAAQgDAAgDgCgAC7hzQgIgGAAgJIAAgTIgBgRQgBgJAJgBIAEABIABACIABACQgDAEABAIIADATQACALAEAJIgBABIgBACIgCACIgEABIgEgBgACSjlIgEgBQgCgGABgHIAAgOIAAgKIAEgFIABgBIACgCIAAAAIADgBIAFAAIAEABIACACIABAEIAAABIABABIACACIAAAGIAAAHQABADgDADIgFADIgFAFQgFADgCAFIAAABIgBAAgAC4j4IgDgDIAAgCIAAgCIABgCIABgCIABgBIADgCIAEgCIACABIAEABIABAAIABABIABACIABACIgBAEQgCAEgDACIgEABQgEAAgDgCg");
	this.shape_98.setTransform(349.2,94.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#B28A7E").s().p("AjXFAIAAgHIAAgCIAAgDIAAgFIABACQAEAEAFgCIAGgCQAGgEAGgGQACgCAAgDIgBgCIgBgCIgCgBIgBgBIAMgEIACADIACAGIACADQgBAAAAAAQAAABAAAAQgBABAAABQAAAAABABIABADIgBAAQAAgCgHgCIgDABIgHADIgCACIgGAFIgIAGIgDAHIgEAHIAAACQgCgEAAgEgAjXEpIABgBIgBADIAAgCgACghMIgCgGIgBAAQADgDAAgFIgBgYIAAgYQAAgJgEgGIgGgGIgCACIgJgIQgEgEgGgCIAAgBQgIAAgCgLIgBgGIgCgKQgBgLABgLIABgFIgBgEIAAgCIgCgEIACgBIABgBIAAgDIgBgBIgHgHIgFgEIgCgBIgBgCIgBgCQAFgBAGABIATACIADgCIACgBIAAgCIAAgBIACgCIABgDQAFgHADgGIACgGIAAABQACAEAEADIAGAGQADACADgDIABgBQABgEgDgCIgDgEIgFgEIgEgDIgBABIAAAAIgBgCQAJgTANgQQAKAKgCAQQAAAQgIAOIgBABQgDAFgBAGQgBAGAAAGQAEAAADgBIABAEIAAABIgDAAIAAABIgBABIgCACIgBACIAAACIAAABIACADIABACIgBABIgBACIgBABIAAACIAAACIADADQAFAEAFgDQAEgCACgEIABgDIgBgCIgBgDIgCgBIABAAIAAAAQAFAEACAFQADAHgFAIQgGAIgJAEIgKAFIgBgCIgBgCIgDgBIgDABIAAAAIgBACIgBACIAAACIAAABQACAGAFACIgBAAIgBAJIABAKQAAABAAABQAAAAAAABQABAAAAABQAAAAAAABQACABAEgBQABgDABgDQAJAQAUAIIgBADQgDAIAAAIIgBAEQAAAFAEAFIAHAIIABACIABAAIABABIAAACIAFADIADAEIABABQgFACgCAGIgBAAIgCACIAAABIgFAAQgIACgJAAQgMAAgMgFgACjiHIABARIAAASQABAJAHAHIAFAAIADgBIACgCIABgCIABgBQgEgJgBgKIgDgTQgCgIAEgFIgBgCIgCgBIgEgCQgJABABAKgACGj1IAAABIgCABIgBABIgFAGIAAAJIAAAOQgBAHACAHIAFAAIABAAIAAAAQACgFAEgEIAFgFIAGgDQACgDAAgDIAAgHIAAgGIgCgCIgBAAIAAgCIgCgEIgCgBIgDgBIgGgBIgCABgACRkQIgBACIgBABIgCACIgCACIAAACIAAADIABAEIACADIACACIACgBQACgCABgCIABgEQADADAEgDIABgCIAAgDIgCgEIgDgDIgEgEQgCABgCADg");
	this.shape_99.setTransform(350.6,91.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#4F3137").s().p("Ah4JnIABgCIgEgCQgRgBgLgVIgEgLQAMgLAUgCQASgBAPgJIASgLIAAAAQgEgDABgFIAEgJIAFgJQADgDABgFIgDgDIgHgEIgEgDIgBgCQAAgEABgDIAFgKQACgDABgEIABgDQgDgEAAgGIAAgRQgLgPgEgZIgLg/QgEgfgJgdQgFgRACgNIgDAAQAAgMgEgJIgBgKQABgIgCgGIgDhJQgBgUAHgQIgBAAIAAgBQgGgEgFgGIAAgBIAAgLIAAgNIAAgCIAAgCIAAgCIABgEIgFgEIgEgGIgDgEIgBgCIAAAAIgDgDIgBgBIgDgEIgDACQgiAZgoAHQgfAFgggFIgBAAIgCgCIgFgHIACAGIAAABIACABIAAABIAAAAIABABIgCACIgBABQgGADgGAAIACADIAIALIAJALQADAEAAADIABABIABABIABACIADACIABABIABAGQABALgGAIQgKAKgMAIQgIAEgIgDIgCgCIgCgCIgCgCIgBgCIAAgCIAAgGIAAAAIACgGQACgJAHgGIAKgKIACgCIACgDIAFAAIgDgEIgJgMQgGgGgCgHIgBgDQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAIgCgDIgCgGIgCgDIgMAEIgCAAIgDgBIgEACIgDACQgEABgEAEQgCACgBADIgBABIAAACIAAADIgBAGIAAACIAAACIAAAHQAAAEACAEIABgBIADgIIAEgHIAIgFIAFgGIACgCIAHgCIADgBQAHABAAACQAAACgFADIgEACQgHAEgFAGQgHAIgDAJQgCAFgCACIAAABIABAAQAFgBAEADIAIAIIAGAHQADADgCADQgHAEgDgGQgEgHgIgCQgHgDACgFQgFACgFgGQgDgEgBgGIgBgNQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgIgDgEgIQgCgEABgFIAAgJIAAgGIAAgDIADgEQADgFAFgCIAVgMIADgBIAHAAIADABIACACIADAEIACADIAEADIAAACIABACIgBABIAEAAIgBAAIgCgEIABgDIAFgGIABgBIAEgCIAEgCIAAAAIAFACIABAAIgBgKIABgSQAAgEABgDIAXgbIABAAIAAAEQAfghArghQAkgcAagnQASgbAKgfQAFgPALgJQABgFAEgEIAKgKIAQgTIAPgNIgBAAIACgBIAEgCIAFgDQAJgGAKgEIATgJIAIABQAAgEAEgCIABABIAAgGIABgYQABgNgFgLIAAgEIgGADQgLgFgLgNQgLgOgBgTIgBgaQAAgGACgDIgBgBIgCgCIgBgCIgCgBQgEgCgCgEIgEgIIgCgEIADgFIABAAIAKgBIAKABQASAAAIgPIAEgGIAAgBIACgCIABgDIAAgDIAAABIACgGQAGgQALgOIADgEQgBgEAGgDIAAgCIAAgBIAAgCIAAgCIACgCQAHgHAIgFIAZgLIAPgFQBCgGAhAwQALgKANgIQAngVApgNQAwAGAVAuQAUAqgEAuQgDAtAAAtIABADQAAADACACQACAEAFACQAKAGgBAKQgPgHgIgKQgDgBgCgCIgDgEIgEgDIgBgBIAAACQgBAIACAJQACAHAEAHIAJAUQAGALgCAKIAAAAQgSABgKgPIgTgcQgKgOgHgQQgDgGgBADIgBABQgOAEgIgRQgGgNgCgOQgBgPADgOQACgLAAgMQgGgCgCgEIgGgKIgHgIIgHgHIgBgCQgVgCgVAFQAIAvgbAtQgcAugwAHQgHgFgNAFIgFAAQgagBAAAXIABACQADAGAFADQAGAFAHABIAFACQAHAAAHgDIADABIgBgCIAEAAIAJAAIACACIAAABIABAAIgCgDIAEAAIADgBQBaAUAgBOQAGANgDAOQgQBXhBA6QgQAOgSABQAGAbgNAcQgOAegYAZQgLAKgOAHIAAAFIAAAJIAAAHIgBACIgBACIgEADIgDAEIgBABQAAACgDADQgEAGgCAHIgBAOIgBAEIABAAIABAlQAAAOAFAPQARA4AcA2QAcA1gBA/IgBAYIgBABIgBADIAAACIABABIAAABIADACIgBAAIADAEIADAFIABADIAAACIgBACIgBABIAAABIgCABIgBACIABACIABADIABAAQAKAIABANIAAABIgBAAIAAABIAAADIABACIgBAAIAAAAIgDAGQgHAKgNAAIgGAAQgHACgDAAIgcgBIgBgDQgHgCgFgIQgFgJAAgDQAAgGANgMIAIgGIgBgBQgBgDACgDQABgDADgBQAFgDgEgEQgDgCgBgEQAAgEACgCIAFgIIABgCQgIgUgFgbQgJgygaguQgagvgVgyQgFgNgDgNQgDgCAAgEQgBgHgCgHIgEgLIgGAEIgCAGQgGALAAAOQgCA5AJA1QAJA1AGA3QAFA4gJA0IAAgCIgBgEIgBgHIgEgjIgCgTIgCgkQgBg3gKg2QgJg1gDg3IAAgHIAAgCQAAgKADgJIAAgCIAJgQIAFgGIAGgGIAFgDIACgBIAAgBIAAABIABgBQAGgEAHgBIAAgBIABgBIABAAIACACIABABIgBADQgDAFgGAFIgDAEQADACAAAGIABABIABAFIABAGIACAGIACAEIAAACQADAIAEAHIACADIABAEIACAHIAKAaQAVAwAZAuQAaAvAJA0QADARAAAQIgEABIgCADIAAACIADAKQABAEgDAEIgGAJQACADABAEIADgCIAAgBIAAgCQACgDADAAIAWAAIAAgBIAAgCQAAgEACgDIgBgCIgBgEIgBgEIAAgCIgCAAQgBgCgCgCIgBAAIACAAQgCgNABgRIABgbIAAAAQgBgQgDgOIAAgBIAAgCQgHgegOgbQgeg2gTg4QgLgjAFggIAAgCIADACIAAgDIABAAIACgLIAAgCQABgIAEgHIAAgBIgPACIgEAAIgJABIgBAAIgDABIgFAAIACADIgTAAIgSgBIgDgCIgDABQgkgFgggRIgGgDIAAADIAAAQIABBPIABALIAAANIACAVIABAAIABABIAAABIAAABIAAACIABAHIAAACQABALAEALIAEASIABAEIABAFIAEARIABACIACAJIABAIIACAQQAFAdAKAbQAFAOACAOIAAAEQgCAPAGALIgBABIgBADIgBAFIAAADIAAAAIgEADIgBACIgBACIAAABIAAACIAAAAIAAABIADACIAEABIADACIAFAGIACABIAAAEIAAACQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBABIgBAEIgCADIgDAFIgCAEIAAABIACAEIAEADIABAAIABgBIACgBIgCgFIAIAGIAEgCIAAAAIAIgEQAEgDADADIgBgCIAIADIgBAHIABACIADADIgCAAIAFAOIACABQACARgJARQgNAUgbgDQgVgDgUAHQgFACgEAAQgGAAgFgDgAksBvQgCADgDACQgEACgCAEIgFAHQgCAEABAEIABACIABABIAJABIAFgEIAFgEIAGgGIACgBIABgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIgMgBgAg3BvIAAAAIAAAAgAhSBnIAAgBIgCAAIACABgAAzBbIADABIAAgCIAAAAIgDABgAgHBcIABAAIgBgCIAAACgAgkh1IAEAEIADADIABAEQgWAfgWAiQgWAhgjATIgKAIIAFAHIADAFIACACIAIAJQAMAMARAKIAOAHIAIADIAVAEQAJABAFAHQALACALAAIAAgBIAEgHQAEgGAGAAIAkgCQASgRANgUQAOgTAJgUQAIgSgEgTQgBgGACgDIAAgBQgNgEgLgKQgHgGgFgHQgOgPgJgUIglhSIAAgCIAAgCIAAgCIAAgCIAAgCIgBgDIgDgEIgCgCIgBgCIAAgGQAAgEgDgEQgDgCgBgEIgCgIIgBgIIAAgFQAAgEAEgBIACAFIAEAHQgBAFACAEIAGAKQADAFABAGIAEAKQACAEgBAFIAAACQASArAYAqQAFgDAFAAQANgBAFALIAJAQIAEAHIAEACIAeAAIArgdQAYgPAQgYIAQgcQAEgIAGgEIACgWQADg/hDgTIgGgCIAEADIABAAQAWARAQAUQASAZgTAXIgEAHIgOAFQgMAEgMADIgegBIgFACIgUgFQgLgCgLgEQgPgFgOgGIgGgDQgKgIgJgJQgIgIgGgKQAAgEgDgDQgGgHgDgIIgBgEIgBgQQgBgLgHgJIgUAIQgOAEgMAIIgDACIAAABIgDABIgBAAQgLAIgIALIgCACQgKANgLALIgDACIgBAFIgCAEQgPAhgTAgIgCADQgKAOgLAOIgcAfIgaAVQgUAPgLAPQgUAPgWAKQgBAHgHAIQgHAHAAAKIAAATQAAAJAHAIIAFAHQARADARAAIgEgGQAVgaAlgQQAngQAlgYQAYgPAPgaQAQgcAagNIAAgBIAHADgAlzBPIAAgBQAAgJAEgGIACAAQAEAAABgEIgBgCIACgCIAHgEIAIgFIACgCIACAAIgCgBIgEgDIgCgCQgGAAgFACIgCAAQgHADgEAEIgDAAIgDACQAAAAgBABQAAAAAAAAQAAABAAABQAAAAAAABIACADQgBAEAAAEIABAKIABABIADADIACABIAAAAgAh4BCIAAACIABAAIgBgCIABgCIABgCIABAAIgDgCIAAAEIAAABIAAABIAAAAgAB+gXIgBAGIAEgXIgGgBQADAIAAAKgAAKl9QAEAFAAAJIAAAYIABAYQAAAFgDADIABABIACAFQAUAJAVgGIAFAAIAAgBIACgCIABAAQADgGAEgCIAAgBIgEgDIgEgEIgBgCIgBgBIgBgBIAAABIgBgBIgHgJQgDgFgBgFIABgEQAAgIADgHIACgEQgVgIgJgQQAAADgCADQgDABgCgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIgBgJIABgJIABgBQgFgBgCgHIAAgBIAAgCIABgCIABgBIABgBIACgBIADACIACABIAAACIALgEQAIgFAGgIQAFgHgDgIQgBgFgGgDIAAgBIgBABIAAgBIgEgBIgCAAIgEACIgDACIgBgBIgCgDIAAgCIAAgCIABgCIACgCIABgBIABAAIACgBIAAAAIANAAIADABIAIAOQAHAOgJAMQgIAMgNAHIgHADIABACIAAAHIAAAIQAXAOAWAEQA1ALAwguQAOgOAHgSQANgigFgdIgQAGQgKAFgJAAIgBgCIgBgBIgDgDIgCgBIgFgDIAAgEIAAgFIgBgGIgDgGIgBgDIAAgCIAEgEIACgCQACgCAEAAIAAAAIAAAAIACABIADgGIAKgOIgBgBIgHgIQgzg2g/AoIgJAGQgFAEgGACIACACQAIAHABAMQABAQgDAPIgHAdQgCAHgEACQgDACgEgBQAAgGABgGQABgFAEgGIAAgBQAIgOABgQQABgPgJgLQgOAQgJATIgBACIABAAIABAAIAAAAIABgBIAFAEIAEADIADAEQADADgBADIAAABQgDAEgEgDIgGgFQgEgEgCgEIAAAAIgCAFQgBAGgFAIIgCACIgCADIAAAAIAAACIgCACIgDABIgTgCQgFgBgGABIACACIABACIABACIAGAEIAGAGIABACIAAACIgBABIgCABIACAFIAAABIABAEIgBAFQgBAMABALIACAJIABAGQADALAHABIABABQAFABAFAEIAHAIIACgBIAGAGgAEymsQAFALACAMQADAOAHAPQAJARAMAPIAKAMIACABIgBgCIgIgVQgEgKgBgKIgCgaQgBgMAFgHIADgDIACACIACACIAAgBIAAgBIAAgBIAAgBIACgLIACgGIAAgBIABgCIADgJQAFgQABgSQABhPhDgmIgGgDQgHgCgHACIgFABQg1AQgfAjIgEAEQgEADgBAGIgFAGIABABIADAFIADAIIACAHQAGgBAFgCIAAgCIABAAIAHgCIAHgCIAmAAIADABIACACQAMAPAMAOQAQARgIATQgGASAFASQADAJAFAIIABABIAAgCIAAgFQAAgEABgEQACgCgBgDQAAgEACgCQADgDADgBIACACgACSiiIACABIgBABIgBACIAAgEgAgCnhIgCgEIgBgDIAAgEIAAgCIACgCIACgCIABAAIAAgDQACgDACgBIAFAEIADADIABAEIAAAEIgBACQgDACgEgDIgBAEQAAADgCABIgCABIgCgBg");
	this.shape_100.setTransform(365.1,113.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#755E80").s().p("AhAC7QgCgCAAgEIAAAAIAAgBIABgFQABgCADgBIACAAIAAgBIAEACIACABIABACIABACIAAAEIAAABIgBADIgCADIgFACIgFgEgAhHCdIgEgBIgDgCIAAAAIgBgCIAAgCIABgCIABgCIAFgDIAAAAIADgCIAKABIACAAIACABIADAEIABADIgBACQAAADgDABQgGACgFAAIgFgBgAhFCDQgGgKACgQIAAgEIADgoIAAgDIAAgBQAAgKgCgIQgEgMgLgKQgHgIgEgHIgBgHQAAgDACgDIgCABIAAAAIgBgFIgBgBIgEgSIgBgEIgBgEIgCgNQgCgJAAgJIAAgGIgBgBIgDgCIgBAAIAAgCIgBgIIAAgBIAAgBIAAgCIgBAAQAAgEADgDQACgDACgEIgCgBIgCgCIgBgBIgEgDIgBgBIgBgMIACgBIgBgKQAAgHADgGIAGgNIABgCIgDgEIgEgFIgBgBQgDgCABgDQABgEAEgBIACgBIAGADIAHAFIAEAGIAEAIQgBAEgDAEIgFAIQgEAGAAAGIgBALIAAABQAFAEADAGQAEAGgCAHQgCAGgDAFQAFAGAAAJQABALAEAKQADAKgBAMQABAMgGAKIACgBQAIAFAHAGQAJAIAGAMQAKAWgBAYQgCAXACAYQACAPgHAJIgEAGQgEgEgCgEgABxBpIgDgJIAAgMIgFgRQgDgFgDgDIgHgLIgBgCIgCgFIgGgOIAAgBIABgCIADgBIADgBIAAgBQAMAGAGAMQAFANAEAMIABAEIAAACIABABQADAOABAQIAAAAQgCADgFACIgDgBg");
	this.shape_101.setTransform(361.9,147.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#DD8892").s().p("AAXAeIAAAAQgGgDgCgFQgCgEgBgGQAAgEAEgBIAEADIADAGQABADAEACQAAABABAAQAAAAABAAQAAABAAAAQABAAAAABIAAACIgBABQgBAFgCAAIgEgCgAgRgQQgDAAgCgCIgFgDIgCgDQgBgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAQABgBABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIACAAIAEABIAEADIAEADIABABIABADQgBADgEAAIgCAAg");
	this.shape_102.setTransform(326.7,125.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#A72E3A").s().p("AANAxIgBgBIgBgCQgCgEACgEIAEgIQACgEAEgCQADgDACgDIAAAAIAMAAIAAABIABACIAAACIAAACIAAABIAAACIABACIgBACIgCACQgCAEgDACIgFAEIgEAFIgFAAIgFAAgAANALIgDgCIgHgIIgDgEIgDgFIgBgCIAAgCIAEgDQAEgDAAgCIABAAQACAHAHAGIAKAKIADADIABAAIgDABIgDAAIAAABIgBACIgCACIgBAAIgFgBgAgkgnQgEgDABgEQAGgCAGAAIACABIAEADIAAABIAAAAIgCABIgIAHIgFgEg");
	this.shape_103.setTransform(329.5,125.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#CB4553").s().p("AATAuQABgDgDgDIgHgGIgDgDIgEgEQgEgDgFABIgBAAIAAAAQACgDABgFQADgKAFgHQAEgHAGgEIAAACIAAACIAFAFIADAEIAHAIIADACIAFABIABAAIgJALQgHAHgBAJIgBAGgAAEAGQAAAFACAFQACAFAGADIAAAAQAGADACgGIAAgCIAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQgDgCgCgEIgCgFIgFgDQgDABAAAEgAgegGIgDgCIgCgCIgBgJQgBgFABgEIAFAEQADACADAAQgFAHACAJgAgVgdIgEgEIgEgDIgDgBQAEgEAGgDIACgBQgBAEADADIAGAEIgGAEIgCACIgBgBg");
	this.shape_104.setTransform(327.6,125.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#5F4B67").s().p("Ag2DPQADgDABgEIgBgCIgCgCIAAgBIADACIAEABIAFAAIABgBIAAACIgBAEIABACQgEgDgDADIgJAEIACgCgABdDGIAFgJQADgEgBgFIgDgJIABgCIAAgBIADAGIADgCQAAAIAJADIAFACIgBAEIABABIADACIAFABIgBADIAAABIgVgBQgDABgCADIgBABIABACIgDABQgBgDgCgDgAhEDAIAAABIAAABIgDABIADgDgAg5C5IgEgBIAAAAIgCABIAAgCIABAAIAHACIAAABIAAABIgCgCgABoChIAAAAQgNgXgWhEQgVg9ABgGIABgDQgRgdgOggIgKgZIgDgHIAAgEIgCgDQgEgIgCgIIAAgBIgCgEIgCgGIgCgHIABAFIACgBIAAgBIgDgDIAAgCIAAgBIgFgLIABgGIgBgBIgEgDIgBgBIAAgBIgCgDIACAAIgCgFIAAgFIgIAAIALgKQAMAEAagBIAAAJIgDACQAFAJABASIAAAHQABAPAEAPQANAzAVAxIASAsIAGAPIACAFIAFAKIADADQADACADAGIAFAQIAAANIADAIQAFAXACAWIgBAAIgDgBIAAABIgEABQgCAAgCACIAAABIgCgFgABUBGIAAAAIAAgBgAhKCZIABgFIABgDIABgBQACAEAEADIAEgFIACAFIAAAEIgCgBIgKAAIgDACIAAgDgAhTBWQgKgbgEgdIgDgQQAEAHAHAIQALAKAEANIABAOIABAEIAAABIAAACIgDApQgDgOgFgOgAhfgDIgCABQAGgKgBgLQABgMgDgKQgEgKgBgLQAAgJgFgGQADgGACgGQACgHgEgGQgDgGgFgDIAAgCIABgLQAAgGAEgFIAFgJQADgDABgFIgEgHIgEgGIgGgFIgHgEIgCABQgEACgBAEQgBADADACIABABIAEAFIADAEIgBABIgGAOQgDAGAAAHIABAKIgCAAIAAgLIgBgiIAAgtIATAMIAIAFQANAGAMADIABACQAEAFAMAAIADAAIgDADIgFAGIgJAQIgBACQgCAJAAAKIgCgBIAAAAIgEABIgCAAIgBABIgBACQgEAKAAALQAAAsAEAqIADAbQgHgHgIgEgAhmgCIABADIAAAAIACgBQgCADAAADIgBgIgAhxgwQgEgLgBgLIABABIADACIABABIAAAFQAAAKACAJIACAMIgEgSgAh5hUIgCgVIABAAIAEADIABABIACACIACACQgCAEgCADQgDADAAADIgBAAgAApicIACAAIABAAIAAABIgBACIgCgBIAAACIAAgEgAgEjLIADgBIAAACIgDgBg");
	this.shape_105.setTransform(362.1,146.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#48394F").s().p("AhGDcIgEgCIgCgFIAAgBIACgEIADgFIACgBQAAAEACACIAGAEIAEgCIACgEIABgDIABABIABACIABADQAAAEgDACIgCACIAAABIgEABIgIgGIACAGIgCABIgBAAIgBAAgAguDOIgFgBIgDgCIAAAAIAAgEIAAgCIgCgCIAAgBIAAgBIgGgBIgCgBIAAgEIgCgBIgFgGIgDgCQAIABAIgDQADgBAAgCIABgCIgBgEIgDgDIgCgBIAAgEIgBgFQAGgKgBgOQgDgYACgXQACgYgLgWQgGgMgJgJIgDgbQgEgqAAgsQAAgLAEgKIABgCIACgBIABAAIAEAAIAAgBIACABIAAACIAAAIQADA2AJA1QAKA1ABA3IACAkIACATIAEAjIABAHIABAEIgBABIgEAAgAB4DJIgCgCIgBgCIAAgEIgFgCQgJgDAAgHIACgEIAAgDIAAAAQACgCACgBIAEgBIAAgBIAEABIAAABQgBgXgGgXIADACQAFgCACgDIgBAbQgBARACANIgCgBIABABQACABABADIACAAIAAACIABAEIABAEIABABQgCAEAAAEIgFgBgAhRCvIAAAAIAAAAgAByBVQgDgMgGgNQgGgMgLgGIAAAAIgEABIgCACIgBACIAAABIgTgtQgUgxgOgzQgEgPgBgPIAAgHQAAgSgGgJIADgCIAAgJQgaABgMgEIgLAKIgHAAIABgBIADgCQgIABgNAAIgDAAQgNAAgDgFIgBgCQgNgDgNgGIgIgEIgTgNIAAgPIAAgBIAAgDIAGADIAFADIAJAEQAaALAcAEIADAAIADABIASABIAQAAIAEgBIgCgBIAFgBIADABIAAgBIABAAIAIgBIAEgBIAPgCIAAABIgBADIADAAIAAAAQAAgLAKABIAGACQAEADAAAFQAAADgDADIgBACIABAFQAAAHgDAKIgBACQABAHADAGIgBACIgBAAIgDAAIAAAEQgFAgALAjQATA4AeA1QAOAbAHAeIgCgEgABdBNIgEgKIABABIAHAMIgEgDgAhJBLIgCgPQACAIAAAKIAAgDgAgIh+IACAEIAAABIgBAAIgBgFg");
	this.shape_106.setTransform(362.1,145.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#523237").s().p("AgxAWQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAIgCIAIAAIAHAAIAAAFIADAFIgDAAIgXAAIgBABQgBAAAAgGgAArgGQACgDAAgEQAAgFgDgCQAAgFADgCQADACACADIAAAEIAAANIgBABIgEACIgCgEg");
	this.shape_107.setTransform(362.4,127.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#6F453C").s().p("AgzBuIAAAAIgCgBQABgLANgBQAKgBAIgGIAIgGIgFgCQgGgCgGgDIgDgDQAAgEAFgBIAMgEQAFgBACgEIgGgDIgIgFIgCgDQAQgFAPgLQALgHAGgLQAEgGgBgIIAKgCQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAIAEAAIACACIAJgBQAHADAEAAIACAAIADADIAAAKIAAAjQgHAQgMAMQgXAWgYAJIgIADIgGgCQgJgBgFAGIgEAAQgLAAgLgCgABNACIAAgEIAAAAIABACIACACIgBAFIAAACIgCAMgAADhAQgQgOgUAIQgNAGgMgDIAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQABgCADgCQAGgCAGAAIAGgBIgBgBIgIgCIghgEIACgCIAKgGQA+goAzA2IAEAEIgJAFQgBAIgIAEQgBACgCACQACADgFgBIgEgBIgCACIgRgMg");
	this.shape_108.setTransform(372.8,65.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#A06456").s().p("Ag6A+IgBgDIABgDIADgGIAAgCIABgBIAAgCIgBgCIAAgCIADgCIACgCIABgCQADAFAEADIAAABIAAACIAAACIAAACIAAACIgBABIgDACIgDAEIgDADIgDAAIgDAAgAhJA4IAAgGIAAgIIAAgCIgHABQgMAAAAgEIAOgMIAEgDIgBgBIgGgCIgHACIgEgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgGAOgEIADAAIABgBIABgBIgDAAQgNgBABgDQAAgCACgCIgLAAQgJAAAAgEQAAgFAVgEIgCAAQgNAAAAgDQAAgFAJgDIANgCIAAgCIgGAAIgDAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBgDAGgCIAFgBIgBgDQgBgHAVAAIAAACQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIAAADIAFABQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQgIADAAADQAAAGAMAAIgBABQAHACAAAEIgDADQgFACAAACIABACIABAAIAKgBIABACQgBAHgHAAIgFAAIgFACIAHACIAFAAIgBAAQgNAAAAAGIACADQABACAEABIACABIACADQgBACgEAEIgCADIAAACIgCABIgFAIQgGAIgCAOIgCABQgEAAgBgFgAg8AVIABAAIgBgBgAhKgRIAAgBIgCgBIAAACIACAAIAAAAgABkAjQgCgOgEgOQgFgNgIgKIADAOIAAAfIAAAaIgCABQgGAAAAgRIABgXQgFggAAgGIABgDIgNgLIABgCIAAgBIAFgEIACgCIAAgBQgGgCgFADIgGACIgGAEIgEABIgDACQgFACgDADQgEgCAAgBQAAgDAEgDQACgCAGAAQABgHAFgDQAEgDAGgBIALgCIAJgDIAAAAIAKACIAIAFIgBACIgEADIgFACIgBABIADACIADABIABACIAAACIgBACIgBABIgIADIABABQAGADADAGIAJAUIAHATIAEAVIgCAFIgFAOIgBgVg");
	this.shape_109.setTransform(375,64.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#6D433B").s().p("AgcBsIgBgFQACgIAHgHQAFgFADgBIABAJQgIAIgJAUIAAgLgAgFBUIAAgQIgCABIACgJQAFgOAAgNQAAgOAJgZIAFgMQgDAAgCgDQgDgFgDgJQgDgOAAgJIAAgFQADgFAHACQAAgRgHgNQgGgNAAgFIABgEIAEACQAJAEAJARIADAFIABABIABAEIABAEQADANABAOIAAAIIAAAFIAAABIgGAaIAAACIgFAMIgBADQgLAXAAAEIAAADQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAAABIgBAEIgLAyQgDgFAAgCg");
	this.shape_110.setTransform(385.6,68.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#744755").s().p("AAlCgQgMgEgMgHQgIgFgIgDQgJgDABgJQABgEADgCQACgDADgBQALACAKAGQAJAFAKAEQAMAEANABIAYADQAIABACAJQgNAMgTAAQgNAAgPgGgAiZA8QAKgQASgQIAYgYQAagbARgjIACgDIAEgIIABAAIAAgCQAHgPAFgPIARgUIAFgIIAEgEIACgDIAWgdQABAfgUApQgWApgdApQgdAmgfAhQgYAagPAbQgLgZAQgcgABMhSIgQgaQAAgSANAKQAHAFALAOQARAUAeABQAZACAAAGQAAAGgFACQgFADgSAAQgkAAgXgZg");
	this.shape_111.setTransform(351.6,104.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#59373F").s().p("AAEDcIAAAAIAAAAgAgYDTIACAAIAAABIgCgBgAjfDGIgBAAIAAgBIgBgBIgBgBIgDgGIAHAHIABABIgCACIAAgBgAAYDDQgFgGgJgBIgUgFIgIgCIgOgIQgRgKgMgMIgIgIIgCgDIAAgBQACgDAEgDQATgNAOgRQALgNAIgQIADgEIADgNQAFgVgBgNIgGgOQgMAMgJASQgMAbgWASQgjAbgmAVQgjATgSAcIAFAFQgRACgSgCIgGgGQgHgHgBgJIgBgTQgBgLAGgIQAGgJABgHQAUgMATgQQgQAbALAaQAPgcAYgZQAfgiAdgnQAdgoAWgpQAVgpgBgfIgXAeIgCACIgEAFIgFAHIgRAVIgIAIIABgEIAAgCIAAgCQAMgRAKgRIAEgKIgGABQgBgBAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAGgHAGgEQADgHAFgGIAFgJIABAAQAHgKAfgWQAcgTAJAHQAHgDAHAAIABACIABAEIABAAIAEAFQgFgCgGAKQgOAVAAAZQAAAJACAIIAGADIAAADQAAAQAPAQQAYAbA0gBQAlAAAPgSQAHgJACgJIADgGQACgEAAgSIAAgEIgDgFQgJgNAAgFIABgIQgFgJgGgJIAMAHQAHAFAFAGIAFAEQASAWAAAUIAAAJQAIAIAAALIgFBAQgIAggQAPIgHAGQgOANgIAAIgCAAIAAAAIgCACIgdABIgDABQguAAgpg8Igdg6QgDAFAAAPQAAAFACAGQAFAOAQAWIANAQQAsA3A1AAIAFAAQgKATAAAMIAAACIgBADQgJAVgOAUQgNATgSARIgkACQgHABgEAFIgEAHIAAABQgLAAgLgCgAgmCOQgDACgBAEQgBAJAJAEQAJADAIAEQAMAHALAFQAlANAXgUQgCgJgIgBIgYgCQgNgCgMgEQgJgEgJgFQgKgGgMgCQgDABgCADgAAdhZIAQAaQAXAZAkAAQASAAAFgDQAFgCAAgGQAAgGgZgCQgegBgRgUQgLgNgHgGQgFgEgDAAQgFAAAAAMgAg8CxIAAgCIAAgBIAAgBIAAgEIADACIgBAAIgBACIgBACIABACgAhrgJQAKgOAIgQQgRAjgaAbIAZgggACSjMIgEgEIgNgGIAAgFIAAgBQAaAJAVAPQgDABgBAGQgVgagFALg");
	this.shape_112.setTransform(354.7,102.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D6B0A0").s().p("AjAEjIgBgCIAAgDIAAgDIADgGQAEgEAEgBIADgCIAEgDIACABIACAAIABAAIACACIACACIABABQAAADgCADQgEAGgHAFIgFACIgEACQgCAAgDgDgAC2iEQgHgGAAgJIgBgTIAAgRQgBgJAJgBIADABIACACIABACQgDAEABAIIADATQABALAEAJIAAABIgCACIgCACIgDABIgFgBgACSkDQAAgQAFgSIABAAIACABIgBAIIgCAcIgCABIgDADIAAgHg");
	this.shape_113.setTransform(345.2,95.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#885549").s().p("AAgBtQAAgKgFgPQgFgOAAAVIAEAUIgEgFQgGgIAAgUIAAhAIACgLIAAgCIABgEIgCgDIAAgCIgBAAIgBgNQgDgIgDgEQgHgJAAAKQAAADACAHIACACIABAFQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAABgBAAIgMgGIgGgCQgMgDgBAHIgEAAIgBgHIgBgIQAAgDgBgCIgBgBIAEgGQACgFAEgDIAEgDIABgBIACgCIADgCIACgDQAKgKANgHIAHgEIACgEQAPgFAXAAIAIABIAAAAIABAAIgBAFQAAAEAIANQAGANAAASQgGgCgEAEIgBAGQAAAIAEAOQADAKADADQACADADABIgFAMQgJAZAAAPQAAAMgFAPIgDAIQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIgBADIAAAHIAAACQgDAAgFAFQgGAIgDAHIgFgSgAA3gJQAEAMACAOIABAVIAFgOIACgEIgEgUIgHgUIgJgUQgDgHgGgDIgBgBIAIgDIABgBIABgCIAAgCIgBgBIgDgCIgDgCIABgBIAFgCIAEgDIABgBIgIgGIgKgCIAAABIgJACIgLADQgGABgEACQgFAEAAAGQgGAAgCADQgEACAAADQAAABAEADQADgEAFgBIACgCIAEgBIAGgEIAGgDQAFgCAGABIAAABIgCADIgFADIAAACIgBACIANAKIgBADQAAAHAFAgIgBAXQAAAQAGAAIACAAIAAgbIAAgfIgDgOQAIAKAFAPgAicBVIAAgDIgDABQgEAAgDgGIAAgBIgDgOIgDgWIgBAAIACgFQAEgEAFgJQAGgNAAgFQAAgFgKgFIgCAAQAEgDAAgKIAAgFIABgEIABgEQAFgUAGgMIAFgIIAFgIQgCgEgDgDIAJgIIgDACIAiAFIAIACIAAAAIgGABQgGABgGACQgCABgCADQAAAAABABQAAAAAAAAQAAABAAAAQABABAAAAIAAACQALADANgGQAUgJASAOIAQANIgFAIIgFAGIgBgBIAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAIgFAPQAAAIAHALIACAEIAGAFIAJgDIACgBQABAHgDAHQgHALgKAHQgRALgQAFIADADIAHAEIAGADQgCAEgFACIgMADQgEABgBAFIADACQAGAEAGACIAFABIgIAHQgIAGgJABQgOABgBAKIACABIAAABQgVgFgXgOgAhZAUIgCACIgDABIAAACIABACIAAACIgBACIAAACIgEAGIAAADIABACIADABIADgBIADgDIADgDIADgCIABgCIAAgCIAAgCIAAgCIAAgBIAAgCQgEgCgDgFIgBACgAhwAYIAAAJIAAAFQABAFAEAAIACAAQACgPAFgHIAGgJIACAAIAAgCIACgDQAEgFABgCIgCgBIgCgCQgEgBgBgCIgCgCQAAgHANAAIABAAIgFAAIgHgBIAFgEIAFAAQAHAAABgGIgBgDIgKACIgBAAIgBgCQAAgCAFgDIADgDQAAgDgHgDIABAAQgMgBAAgFQAAgEAIgCQgBgBAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgGgCIABgCQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIAAgBQgVAAABAHIABADIgFABQgGABABADQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABAAIADABIAGgBIAAACIgNADQgJACAAAFQAAAEANAAIACAAQgVADAAAGQAAADAJAAIALAAQgCADAAACQAAADAMABIADABIgBAAIgBABIgDABQgOAEAAAFQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEAAIAHgCIAGADIABAAIgEAEIgOAMQAAADAMAAIAHAAIAAABgABWA1IAAADQAAAOgDAPIgBAGIgBADQADgRACgYgACuAjIAAAAIAAACIAAgCgAhjADIAAAAIABABIgBgBgAhzgiIAAgDIACABIAAACIgCAAgABwh+IAGACIgBABIgFgDg");
	this.shape_114.setTransform(378.9,66);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B28A7E").s().p("AjPFRIgBgIIAAgCIgBgCIAAgGIACADQAEAEAFgDIAEgDQAHgEAEgHQADgCgBgDIAAgCIgDgCIgCgBIgBgBIAMgFIADADQAAADACADIACACQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAABIABADIAAAAQgBgCgHgBIgDABIgGADIgCACIgFAHIgHAGIgEAHIgCAIIAAACQgCgEAAgEgAjSE6IACgBIgBADIgBgCgACahdIgCgFIAAgBQACgDAAgFIAAgYIgBgYQAAgJgEgFIgFgGIgCABIgGgEIgBAAIAAgDQAAgEgEgLIgFgPQgFgSAAgNQAAgLAHgSIAIgSIAAAAIADgIQACgJAFgEQAIgTANgPIACADQgLAHgHAWQgGASAAARIABADQgBAAAAABQgBAAAAAAQAAABAAABQAAAAAAABQAAACAGADQAGADAAABQAAAHgQAVQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEAAIADgBIgCAFQgEgBgCAFIAAAIIACASQADARAGAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAIABgEIAAAGQAAABAAABQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQACgDAAgDQAKAQAUAIIgCAEQgDAHAAAIIAAAEQAAAFADAFIAIAJIAAABIABAAIABABIABACIAEAEIAEADIAAABQgEACgDAGIgBAAIgCACIAAABIgEAAQgJACgIAAQgNAAgMgFgACeiYIAAARIABASQABAJAGAHIAFAAIADgBIACgBIACgCIABgBQgFgKgBgKIgDgTQgBgIADgEIAAgDIgCgBIgEgCQgJACABAJgACCjkIAAAHIAEgEIABgBIACgcIABgIIgCAAIgBAAQgFARAAARgACbkxIAKgTIAEgHQgGANgGAUIAAgBIgCAHIAAgNg");
	this.shape_115.setTransform(346.8,92.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#4F3137").s().p("AgwJeQgFAAgWgHQgQgPAAgJIAFgKIAAgBQALgFAVgCIAIgBIADgBIASgMIAAAAQgEgDABgEIAEgJIAFgJQADgEABgFIgEgCIgGgEIgEgEIgCgBQABgEABgDIAFgKQACgEAAgEIABgCQgCgEAAgHIAAgQQgLgQgFgZIgKg/QgEgfgJgdQgFgQABgNIgCAAQAAgMgEgJIgBgKQABgIgCgGIgCgqIgBgfQgBgRAEgOIADgGIgBAAIAAAAQgGgFgFgGIAAgBIAAgKIAAgNIAAgCIAAgCIAAgCIAAgEIgEgFIgEgFIgEgFIAAAAIAAAAIgCAGIgCACQgfAbgoAKQgdAIgegBIgDAAIgCgBIgCgBIgGgHIADAGIABABIABABIAAABIAAAAIABABIgBACIgBABQgGAEgGAAIACADIAKAKIAJALIADAEIAAACIACABIACABIABACIACABIABABIABABIACAFQABAKgEAIIgCACQgIALgLAJQgIAEgJgCIgCgCIgCgCIgCgBIgCgCIAAgCIAAgGIAAAAIABgGQACgJAGgHIAJgLIACgCIACgCIAAgBIACAAIADgBIgBAAIgDgDIgKgLQgGgGgDgHIgCgDQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAIgCgDQgBgCgBgDIgCgDIgMAFIgCAAIgCgBIgEADIgEACQgEABgDAEIgDAGIgBABIAAACIAAADIAAAGIABACIAAACIABAHQAAAEACAEIABgBIACgJIADgHIAIgGIAEgGIADgCIAFgDIAEgBQAGAAACACQgBACgFADIgDADQgGAEgFAHQgGAIgCAKQgBAFgDADIAAAAIABAAQAFgBAFADIAFAEIACADIAIAGQADADgCADQgGAFgEgGQgCgEgFgCIgFgCQgHgCABgGQgFADgFgFQgEgEgBgGIgDgNIgEAAQgIgCgFgHQgCgEABgFIgBgKIgBgFIAAgEIACgEIAIgHIATgOIADgBIAIgBIADABIACABIADAEIACADIAEADIABACIABACIgBABIADgBIgCgDIAAgEIAEgGIACgBIADgCIAEgCIAAgBQAEAAABACIABAAIgBgCIgBgIIAAgSQgBgFABgEIAUgcIABAAIAAAEQAdgjAnglQAigfAWgpIAIgOIgBgFIAAAAIAAgEIANgRIABgIIADgOIACgEIACgIQAEgMAIgOIAJgPQAjg0A1gDIAHgBIAFgCIAIAAQAAgDAEgCIABABIAAgGIACgZQAAgMgEgLIgBgEIgGACIgDgBIAAgJIgEgGQgEgGgBgLIgCgIIgFghQAAgMAGgSQAGgWAIACIABgDIADgKIAAgBIABgEIABgCIAAAAIACgFQAFgRAMgNIADgEQgCgFAHgCIAAgCIAAgCIAAgCIAAgCIACgCQAHgHAIgEIAZgLIAPgGQA8gFAiAoIgBAAQgHAFAAACIABADIgBABIgEgEQgzg1g/AnIgJAGQgFAEgHADIADABQADADACAEIgFAIIgFAIIgDAGIgKATIAAAOIACgHIAAAAIgBAEIgBAEIAAAFQAAAKgEADIACAAQAKAFAAAGQAAAFgGANQgFAJgEAEIgEABIgEgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAQgVAAgGQgBgBgGgDQgGgDAAgCQAAgBAAgBQAAgBABAAQAAgBAAAAQABAAAAAAIgBgDQABgRAFgTQAHgWALgGIgBgDQgNAPgJASQgFAFgBAJIgEAHIAAABIgHARQgHATAAALQAAAMAEATIAGAPQAEAKgBAEIAAADIACAAIAFAEIACgBIAGAGQAEAGgBAIIABAZIAAAYQABAFgDACIAAABIADAGQATAIAWgFIAFAAIAAgBIACgCIABgBQADgFAEgDIAAgBIgFgDIgDgEIgBgBIgBgBIgCgBIAAABIAAgCIgHgIQgDgFgBgFIAAgEQAAgJAEgHIACgEQgVgHgJgQQgBADgCACQAAAAgBAAQgBABAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBgBAAIAAgHIgBAFQAAAAAAAAQAAAAAAAAQAAAAgBABQAAAAgBAAQgGAAgDgSIgBgRIAAgIQACgFAEABIABAAIADAWIADAOIAAABQADAGAEAAIADgBIAAADQAXAOAVAFQANACANAAIgCAEIgCgBQgNgCgEAKQgNAFAAAPIABADQADAFAEAEIABAAIAAAFIANAGIADAEQAGgLAVAaQABgGADgBQAIgEAWAZQAQARAKAQIAEAHQAXAfAAAXIgCBJQgIAtgWAOQgLAngMAOIgKAYQgVAyggAJIABAMQgBAXgPAFIAAgDQgBgEgDgBQgDACgBAEIgGgCQgLgBAAALIAAAAIgDAAIABgDIAAAAIgOABIgFABIgJABIAAAAIgDAAIgFABIABACIgDABIgRgBIgSgBIgCgBIgEAAQgbgEgagLIgJgEIgEgCIgHgEIAAAEIAAAAIABAQIAAAsIABAjIAAALIABAMIACAVIABABIABAAIAAACIAAABIAAABIABAIIAAACQABAKAEALIAEATIABAEIABAEIAEASIABABIABAKIABAIIADAPQAEAdAKAbQAFAOADAOIAAAEQgCAQAGAKIgBACIgBADIgBAFIAAACIAAAAIgFADIgBACIgBACIAAACIABACIgBAAIABAAIADACIAEABIACACIAGAGIABACIABADIAAACQgDABgBACIgBAFIgDACIgCAFIgCAEIAAABIACAFIADACIACAAIABAAIACgBIgCgFIAHAFIADgBIAAgBIAJgEQADgCAEACIgBgBIAHADIgBAGIABADIAEADIgCAAIAEANIADACIAAAIQACAEAAAGQAAAVgPABIgGAFIgMAAQgUAAgNAEIgSgEgAjuCKIgBAAQgCADgDADQgDACgCAEIgFAIQgBAEABAEIABACIACABIAJAAIAEgFIAFgEQADgCACgEIACgCIABgCIgBgCIAAgCIAAgBIAAgCIAAgCIgBgCIAAgBIgGgBIgFABgAk4BxIAAgBQgCgJAEgHIACAAQAEAAABgEIgBgCIACgCIAGgEIAHgHIACgBIACAAIgBgBIgFgDIgCgBQgGAAgFACIgDABQgGADgEAEIgDAAQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAQgBAAAAABQAAAAAAABQAAABAAAAQAAABABABIACACQgBAEABAFIAAAJIACACIAEACIACABIAAAAgAgIBvIAAAAIAAgBgAgjBmIAAAAIgCgBIACABgAAnBbIAAAAIAAgCIAAACgAgQhVQABAMgGAVIgCANIgDAFQgJAPgLAOQgNAPgTANQgEADgCAEIAAAAIACADIAHAIQAMAMARAKIAOAIIAJACIAUAFQAIABAGAGQALACALAAIAAgBIAEgHQAEgFAHgBIAkgCQASgRANgTQANgTAKgVIABgDIgBgCQAAgMAKgSIgEAAQg1AAgsg3IgOgRQgQgWgEgOQgCgHAAgEQAAgQACgFIAdA6QAqA+AtAAIADgBIAegBIACgDIAAAAIACAAQAIAAAOgNIAGgGQARgPAIghIAEg/QAAgLgHgIIAAgJQAAgVgSgVIgFgFQgFgGgHgFIgNgGQAHAIAFAJIgCAIQABAFAIANIAEAFIAAAEQAAASgCAFIgEAFQgBAJgHAJQgPATgmAAQgzAAgZgbQgPgQAAgQIAAgDIgFgDQgCgIAAgJQAAgYAOgWQAGgJAEACIgDgGIgBABIgBgFIgCgCQgGAAgHAEQgKgIgaAUQghAVgHAKIAAAAIgFAJQgGAGgCAHQgGAEgGAHQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABABABIAGgBIgEAKQgKASgMAQIAAADIAAABIgBAEIAIgIQgFAOgHAPIAAACIgBABIgFAIIgBADQgIAPgLAOIgYAiIgYAXQgTARgJAQQgTAQgVAMQAAAHgHAIQgFAIABALIABATQABAJAHAHIAGAHQARABARgCIgEgFQASgcAjgTQAmgVAjgaQAVgSANgbQAJgRAMgNIAGAPgAhJBBIAAACIAAAAIAAgCIABgCIABgCIABAAIgDgCIAAAFIAAAAIAAABIAAAAgACTI5IgCAAIgGgHIgBgEQABgEADgKQAEgLAAgHIgBgJIADgDQAFgDgDgEQgEgCAAgEQgBgEADgCIAFgIIABgCQgPgggTg2QgVg9AAgGIAAgDQgXgpgSgrQgGgNgDgNQgCgCAAgEQgBgHgDgHIgDgIIADgCIgGgJQgHgKgEgCIgGgDIgFAEIgBgEIgFAFIgDAFQgFAMAAAOQgBA4AIA2QAJA0AFA3QAGA5gJAzIAAgCIgBgEIgCgGIgEgkIgBgTIgCgjQgBg4gJg1QgKg1gCg3IAAgHIAAgDQAAgKACgJIABgBIAJgQIAEgHIADgDQAOAAAIgBIgDACIgCACIgIABQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAABQABAGABAAIAYAAIACACIAAACIABABIAEADIABAAIgBAGIAFAMIAAABIAAACIACAGIACAGIACAEIAAACQADAIAEAHIACADIAAAEIADAHIAKAaQAOAfARAfIgBACQgBAHAVA9QAWBDANAYIAAAAIACAEIAAADIgCAEIgDABIgDgFIAAAAIgBACIADAKQABAEgDAEIgFAJQACADABAEIADgCIgBgBIABgCQACgDADAAIAVAAIAAgBIABgCQAAgEACgDIgBgCIgCgEIgBgEIABgCIgCAAQgBgCgCgCIgBAAIACAAQgCgNABgRIABgbIAAAAQgBgQgDgOIgBgBIAAgCQgGgegOgbQgeg2gTg4QgLgjAFggIAAgCIACACIABgDIAAAAIABgDQgCgGgBgHIAAgCQAEgKAAgGIgBgGIABgBIADAEIADgDQADADABAEIAAAMIAFAAQgDAEgBAFIgBAIIAAAHIgBAAIAAADIAAAAIACAlQAAAOAEAPQASA4AbA2QAdA1gBA/IgBAYIgBABIgBADIAAACIABABIAAABIACACIAAAAIADAEIADAFIABADIAAACIgBACIgBABIAAABIgDABIAAACIAAACIACADIABAAQAJAIACANIAAABIgBAAIAAABIAAADIABACIgBAAIAAAAIgEAGIgCADQAAADgCACQgFAFgSAAQgYAAgHgHgACQGNIAAAAIAAAAgAEAksIAAgFIACgJIAAgKIgBgXIgBgKIgCABQgUAAgBgfQADgjABgMIAAgEIAAgiIAAgLIgEgDIgCAAQgEAAgHgEIgBAAIgGgEIgJACIABACQAAAAgBAAQAAAAAAABQAAAAgBABQAAAAAAABIgKADIgCABIgJADIgGgFIgCgEQgHgLAAgIIAFgPQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAIAAAAIABABIAFgGIAFgIIADgCIADABQAFAAgCgCQACgCABgDQAJgDABgIIAIgGIACgBQAAgFAIgEQAAgKAZADIAQgBQAygBAEAXQADAGAEAaIAEAeQAAAMgLAhIgHAVIgBAFQgCAYgDARIgFASQgFAQgFAAIgBAAIgBAAQgEAAgCgEIgBgBIgTAtIAAADIgBABIgEAKQgEAAgBgEgAD/mKQAFAPAAAKIAFASIABAFIAAAMQAJgUAIgJIgBgIIAAgCIAAgHIABgDQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIACAAIAAAPQAAADADAFIAMgzIACgEIAAAAQgBgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAIAAgEQAAgEALgXIABgDIAFgNIAAgBIAGgaIAAgBIABgFIgBgJQgBgOgDgNIgBgEIgBgDIgBgCQgJgYgSgEIAAAAIgIgBQgXAAgPAFIgIADIgDADIACACQgOAHgKAKIgCADIgDACIgCACIgBABIgEADQgEADgCAFIgEAGIABABQABACAAADIABAIIABAHIAEAAQABgHAMADIAGACIANAGQABgBAAAAQABAAAAAAQABAAABAAQAAAAABABIgBgFIgCgCQgCgHAAgDQAAgKAHAJQADAEADAIIABANIAAAFIAAASIAABAQAAAUAGAIIAEAFIgEgUQAAgNACAAQABAAACAGgAChl3IAJgDIgCAHIgHgEg");
	this.shape_116.setTransform(356.1,113.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#D6B0A0").s().p("AgLALIgCgCIABgDIAAgEIADgEQADgFAEgBIACgCIAEgCIADAAIABAAIACABIACABIABACIABABQAAADgCADQgDAFgHAFIgEADIgDABQgDAAgDgCg");
	this.shape_117.setTransform(326.7,123.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#DD8892").s().p("AAZAeIgBABQgGgEgCgGIgDgIQAAgFAEgBIAEADIACAFQACAEADACQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAIAAACIgBACQgBAEgDAAIgCgBgAgRgPIgGgCIgFgDIgCgCQAAgBgBgBQAAgBAAAAQAAgBAAAAQABgBAAAAIADgCIADgBIADACIAEADIAEACIABACIACACQgBAEgEAAIgCAAg");
	this.shape_118.setTransform(326.3,124.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#CB4553").s().p("AAUAoIgIgGIgDgDIgFgEQgEgCgFABIgBAAIAAgBQACgDABgFQACgKAFgHQAEgHAGgEIAAACIAAACIAFAFIADADIAIAHIACADIAFABIABAAIgIALQgHAHgBAJIAAAGIgBAAQABgDgCgCgAAWAVIABgCIAAgCQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQgEgCgCgEIgCgFIgEgDQgEABAAAFIADAIQADAGAFAEIABgBQAFACABgFgAgegGIgDgBIgCgCIgCgJQgBgEABgEIAGADIAFACQgDAHABAJgAgWgdIgEgCIgEgDIgDgCIAKgHIACgBQgBAEADADIAGADIgGAFIgCACIgBgCg");
	this.shape_119.setTransform(327.2,125.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#A72E3A").s().p("AANAvIgBgCQgBgDACgFIADgIQACgEAEgCQAEgCABgEIAAAAQAGgBAGABIAAAAQAAABABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAADIAAACIABABIAAABIAAACIAAADIgCACIgGAGIgFAEIgEAEIgJACIgCgCgAASALIgEgBIgDgCIgHgIIgEgDIgDgFIgBgCIAAgBIAEgEQAEgDAAgCIAAAAQADAGAHAGQAGAEAEAGIADADIgCABIgCAAIAAABIgCABIgCADIAAAAIgBAAgAglglQgEgEABgEQAGgCAFAAIACABIAFACIAAACIgCABIgHAGIgGgCg");
	this.shape_120.setTransform(329,125.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#755E80").s().p("AhnC5QgDgFABgGQACgIAHgCQgIgRABgWQABgMAFgLIAHgLQgGgGgDgIQgDgGAAgIIABgJQABgIAEgGIgCgJIgBgCQgFgGACgHIABgBQgIgpgBguQgBghAJgfQADgKgBgKIAAgBQgGgBgEgEIgBgBQgEgHAFgGQAGgJAJgBQAaAjgQAxQgUA+AYBEIACAIIAAAAQAQAogNAvQgGAWAHAXIABADIgBAFQgBADgEABQgCAEgEACIgCACIgFABQgFAAgFgEgABMBEQgGgYAAgaQAAgNALgCIAHAEIADADQAAAkAPAhIAIASQgCAMABAKQgagJgLgqgAAZiTQgCgSABgSIAEgDIAGgCIAGAEIADADQgBAaAMAXIACAjIABAHQgZgQgHgpg");
	this.shape_121.setTransform(360.2,148.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#48394F").s().p("AhiDQIADgCQAEgCACgEQADgBACgDIgBAFIAAABIAAADIAAADgABoCLQgBgKABgMIABgGQAGgzgbgsIgFgHIgUgkQgIgVgDgWIgBgHIgDgjQgBgcABgdQgcgFgcgDIAAgBIAAAAQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAIgCAAQgIgCgEAEIAAAAIgBACIgBAAIAAAAIgBAAIgBABIgEAAIgDAHIgFAGQgFAHgDAIIgBgBQgQAkgCAyQgBAdABA7QgBBIABARQACAWgIAZQgGATgCANIgBgDQgGgXAGgWQANgvgQgoIAAAAQAAgWgCgWQgJhmArhVIADgDIgYAAQgVABgUgHQgFgCgCgFQAAgDABgDQAEgEABgFIABgBQAnAOBhAAIAbgDIAFgCIABAAIAIAAQgCAPAAAdQAAA6ABAPQACAZAGAVQADANAFALIADgBIAMAXIANAZQATAmADAWQACAPgBAtIAAACIABAhIAAADQgUgVgCgig");
	this.shape_122.setTransform(361.2,146.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#5F4B67").s().p("AhTDTIAAgDIABADgABQCFQgagyAAgbIACgNIADgOQAAgIgFgDIAAgCQAAgCgFgHIgGgIQgDgEgCgGIgDgIIABgCQgOgdgPgtIgUhCIAAgHIAAgDQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIAAABQAcACAcAGQgBAdABAcQgLgXABgbIgDgDIgHgEIgGADIgDADQgCASADARQAGApAaAQQADAXAIAVIAUAkIAFAGQAbAsgGAzIgBAHIgHgSQgQghAAgkIgDgDIgGgEQgMACAAAMQAAAaAHAYQALArAaAJQACAhAUAVIAAgCIAAAEQgQgBgGADQAAgRgagygAhqBkQACAHAGAHIgGALIgCgZgAhyAeQgLhcAAhBQAAg6gCgZIALAFIgBABQgBAFgEAFQgBACAAADQACAFAFACQAUAHAVgBIAYAAIgDAEQgrBVAJBlQACAXAAAVIgDgIQgXhEAUg9QAQgxgbgjQgJABgGAIQgEAGADAHIABACQAFAEAFAAIAAABQABALgCAKQgJAfABAhQABAtAIAqIgCABQgBAHAEAGIACACIACAIQgEAHgCAIIgFgvgAghiwIAEABIgHAGIADgHgAA1jDIAJgFIgBAFIgIAAg");
	this.shape_123.setTransform(361,146);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#744755").s().p("AAOBBQAOgMAIgQIABABIADADQgBAYACAYQACASgDARQgigLAIgwgAhDgJIAngsIAIABIADADQgYA8g1AvQgdAbgdADQAmguAvgzgAA0hSQgMgMgKgOQgIgMAOgDQAdAcAmANQAVAHAXAEQAGAAAAAHQgUAJgTAAQggAAgegbg");
	this.shape_124.setTransform(347.5,104.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#B28A7E").s().p("AjFDxIgBgIIAAgCIgBgCIgBgFIADACQAEAEAFgDIAEgDQAHgFADgGQACgDAAgDIgBgBIgBgCIgCgBIgBgBIALgFIACACQABAEACACIACACIAAAFIABADIgBAAQgBgCgGgBIgDACIgGADIgCACIgFAGIgGAHIgEAHIgCAIQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAABQgDgEAAgEgAjIDbIABgCIAAAEIgBgCgACYi1QgDgEgBgIIACgCIAAg1QAVALAdACQgFAGgCAEQgBADAAAOIABAMQABAHAEADIgGAFQgLAKgIAAQgPAAgGgKg");
	this.shape_125.setTransform(345.4,101.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#59373F").s().p("AgPC6QgpgNgMgBQgMgMgDgTIAJgLIAJgKIAKgaIgCACQAQghALgjQgCgIAAgIIgHgGIgNAYQgTAfgVAdQgbAkggAiQgLAJgFANQgjAGgUgJQgJgJgJgHIABACIgBAAQgDgFgBgFQgCgIADgIIACgJIAAAAQApguBah1QANgRAMgVIAKgSQAGgMACgIQAEgTAMgQIAHgGIAHgFQANgKAFgJIAAACQAQgMAVgGQARgGAQgBQggAcgJAKQgNAPAAAWQAAAUAJAOQAUAcA7AAQBAAAAVgVQAJgJAAgSQgCgWgHgWQgHgXgKgLQAOAIAPALIAEAGIADAFIgCAFQAlA8gnBDQgLAUgQAJIgIAHQgKAJgKACIgGAFQgTABgSgEQgdgIgYgRIgCAAQgmgtgCAAQgEAAgBACIAAAEQAYAkARARIAQAPIAAACIAKASQAQARAfAAQAbAAATgPIAJgDQAMAFAFAMIABAAIgEAJQgIAQgBAFQAAAggXAZQgKAJgFAJQglAQgoAMQgigDgbgJgAgvBYQgIAwAiAKQADgQgCgTQgCgXABgYIgDgDIgBgCQgIARgOAMgAiBAMQgvA0gmAuQAdgCAdgbQA1gwAYg7IgDgDIgIgCIgnArgAgfhWQAKAOAMAMQAuArA2gZQAAgGgGgBQgXgDgVgIQgmgNgcgbQgOADAIALgAjbDDIAAAAIAAgBIgBgBIgBgBIgBgCIgCgEIAFAGIACABIABACIgCABgAC3gDIABAEIgEABIADgFgAD0hQQACAIAAAEQAAAHgDAJIABgcg");
	this.shape_126.setTransform(353.7,102.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#6F453C").s().p("AAEBsIAAgBQAFgUASgVQAPgSAJgWQAghJgihFIACgCIABgBIAIgBIAAAAIAEABIABAAQAGADAFAFQAHAJADARQADASAAATQAAAkgYApQgSAggEAVIgEgFIgEAAIgBAGIACAHIgFACQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEAAQgIAJgEANIgCAHIgBAVQgGgQgBgNgAg0BOIgdgFIgGgCIgBAAQAAgFACgDQACgCADAAQALgDAKgGIAcg1QABAhAJAlIAAADIABADQgLADgOAAIgGAAgAgYhUIgBgEQgJACgJgBQgFgBgEgEQgEgEABgGIgSgDIgHgEIgCgDQgBgDACgEQAFgJAGgFIAAgBIALgBIALgBIACAAQApAAAYAXQgMAFgLAJQgOAKgDAFIgDAAg");
	this.shape_127.setTransform(371,69.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#885549").s().p("AAtB3IAAgiIAAgBIAAgCIAAgHQgBgNgEgJQgEAGgBAPIAAAIIAAAAQgBgbgIgQQgJgRAAgTIAKgpQAAgFgDgCQADgFAAgGIgBgIIAegXIAHgEQACgFAEgCQADgCAEABQAJgFAIgBIgBABIgCACQAiBFggBIQgJAWgPATQgSAVgFAUIAAgCgABDg5IABAPQgBAVgGATQgNAjAHAeQALgdAIghQAIglgMgiIgDgBIgRAAQgNAMAcAAIACACgABJhLIAHAZQAHAYAKAOQAEgNAAgOQgCgdgYgIIgCABgAhaAyQgRgZAAgYQAAgfAPgeQAFgKAGgJIACACQAHAHgMAIIAAABQABAEADABIANAFIACABIgHACIgCABQgEACgDADQgIAHgFAJIAAACQAIAGAHgBIgBAAIgDACQgHACgCAGIAAACQALAHAOgFIADgBIgCACIAAACQAAAEgDAEQgEAFgBAHIAAACQAHAHAAAJIABAEQADAHACAIQAAAHAHgCIABgEQADgJgFgHIgBgCQAAgJgFgHQgCgEABgDQADgCABgDIAAgCIADgHQAEgFACgIIAAgCQgBgEgEgBIgFgBIAFgBQAEgBAAgEIAAgCQgLgJgMAEIAAgBIABgBIAFgEQAPgHAPgFQAGgCgBgFQgUgJgLACIABgBIACgBQAJgCAEgIIAAgBIgFgCQgMgBgNAAIAAAAIgCABQAKgQAPgNIANgHQAGgDAGgBQgGAGgFAJQgCADABAEIACADIAHADIASAEQgBAFAEAEQAEAFAFAAQAIABAJgCIABAEIgCAAQgOABAAAZIAAAIQABAFAGADIALgJIgFANQgGATAAAIIABAKIgbA2QgKAFgLADQgDABgCACQgCADAAAEIABABIAGACQgggJgSgcg");
	this.shape_128.setTransform(366.9,67.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#4F3137").s().p("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");
	this.shape_129.setTransform(351.6,114.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#A06456").s().p("AA6AHQAGgSABgVIgBgPIgCgCQgcAAANgNIARABIADABQAMAigIAlQgIAhgLAcQgHgdANgkgAhABBQgCgIgDgHIgBgEQAAgKgHgGIAAgDQABgGAEgFQADgEAAgFIAAgCIACgCIgDABQgOAEgLgGIAAgCQACgGAHgCIADgBIABgBQgHABgIgFIAAgDQAFgIAIgHQADgEAEgBIACgBIAHgCIgCgBIgNgFQgDgCgBgDIAAgBQAMgIgHgHIgCgCIABgBIABAAIAAAAIACgBIAAgBQANABAMABIAFACIAAABQgEAIgJACIgCABIgBABQALgCAUAJQABAFgGACQgPAFgPAHIgFADIgBACIAAABQAMgFALAJIAAACQAAAFgEABIgFABIAFABQAEABABAEIAAACQgCAHgEAGIgDAGIAAACQgBAEgDACQgBADACAEQAFAGAAAKIABACQAFAHgDAJIgBADIgDABQgEAAAAgFgABNgoIgHgZIACgBQAYAIACAdQAAAOgEANQgKgOgHgYg");
	this.shape_130.setTransform(367.2,66.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#755E80").s().p("ABjC/IgMgCQgBABAAgHQAAgFAFgCQAEgBALABIADAAIABACIABAFQAAAHgLABIgBAAgAhjCnIgCAAIgIgBQgBAAAAgGQAAgGAFgBQAFgCAQACIABAAIACABIABAGQAAAEgDACQgDABgJAAgAhnBkIgFgrIAAgCQABgVAOgWQAPgYAAAXIgHASQgIASAAAJQAAAKAFAdQAFAeAAAJQAAAIgJAAQgFAAgGgqgABXCFIgKgUIgGgUIgHgvQAAgnAHgDIACAAIAFAQIABAZQAAAYAMAdQANAcAAAFIgCAFQAAADgGAAQgFAAgEgGgAhVgiIgDgCQAAgSgCgfQgDggAAgPIADgiQAAgEACgFIACgDIABgGQAAgGAKAAQAKAAAAAIIgFAbIgEAKQgEAIAAAEIAFA1IgBAsIgBACQgCABgDAAQgEAAgBgBgABAgrQgHAAgGgPQgFgMgFgXIgGgpIgBgIQgBgNABgKQADgUAIALQAEAJAAALIAAAVQAAAVALAeIAGAQIAFAMQAAAJgEACIgDAAg");
	this.shape_131.setTransform(357.1,148.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#D6B0A0").s().p("AgFAMQgFgGAAgEQAAgBAGgGIAFgHQAFAEAFADQgGADgFAIIgEAHIgBgBg");
	this.shape_132.setTransform(327.8,126.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#A72E3A").s().p("AgSAMIAHgSQAIgMAVAHIAAADIABAHIAAABIAAAHIgBABQgBACgEACQgFACgIAAQgIAAgKgCg");
	this.shape_133.setTransform(330.6,128.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#CB4553").s().p("AgOAEIAKgOIAAgBQAHAEAIAAQACAAADgCIADADQgGAAgGABQgTAFgFAMIADgIg");
	this.shape_134.setTransform(330,127.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#5F4B67").s().p("AByDZIgBgBIgYAAIAFgHQALgBAAgHIgBgFIgBgBIgDgBQgCgCAAgDIgEAAQgDgOgKgXQAEAFAFAAQAGAAAAgDIACgEQAAgGgNgcQgMgdAAgYIgBgZIAJAaQAMAgAAASQAAAJAFAQIAHAZQACAIgBASQAAANAHAIIgBgEIADAKgAhtDHQgBgDgDgDIACgBQAAACAGAGIgEgBgAhrC5IACABIgDACIABgDgAhZCiIgPgBIgDgVQgGghgBggIAFArQAGAqAFAAQAJAAAAgIQAAgIgFgeQgFgeAAgKQAAgIAIgTIAHgSQAAgYgPAZQgOAWgBAVIAAgHQAAgHAIggIAHgdIAAgCIACgBIABgLIgFhXIAFhXIAAgBIAMAFIAGADIAIADIALADIAIABIgBADIgEANIgIAiQgIAWgCAWQgBANABAdIABAeQABAKACAGIgBAZIAAAPQgCABgDAHQgKATAAAnIAAApQAAAHgCAEgAhRirQgKAAAAAFIgBAGIgCADQgCAGAAADIgDAiQAAAQADAfQACAgAAARIADACQABABAEAAQADABACgCIABgCIABgsIgFg1QAAgEAEgIIAEgJIAFgbQAAgJgJAAIgBABgABBB4QgZgwAKgzIADgEIgBgCIAAgBIgJgXIADgDIACgBIAAgEIgDgXQAGAPAHAAIADAAQAAAXADAPIADAJIgCAAQgHADAAAnIAHAvIAGAUIgGgLgABOgSIAAABIAAACIAAgDgAA2hAQgLgeAAgVIAAgUQAAgMgEgIQgIgMgDAVQgBAJABANIABAIQgHgZgJgTQgGgMgGgIIgBgCIAQAAQAHAAAFACQAQAEAGAPIABABQADAKABANQABARAEAhIAAAnIgGgQgAgzhsIABgBIgEAPIADgOgAhgjYIAAAAIAAABg");
	this.shape_135.setTransform(357.7,147.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#48394F").s().p("ABpDBQABgSgBgIIgIgZQgEgQAAgKQAAgRgMggIgKgaIgEgQIgDgJQgDgQgBgWQAFgCAAgJIgFgMIAAgnQgEghgBgRQgBgOgDgJIgBgCQgHgOgPgEQgGgCgGAAIgQgBIAAAAIgEgGIAAgCIgBgBIgCAAIgCgCIAAABQgDACgFAGIgCACIgBABIgBACIgDAFQgDAEAAADIAAAAIgFAIQgKARgIAiIgBAAIgDAPIgCALIgBAFIgBACIAAABQgJAxgDAgQgDgHgBgJIAAgeQgBgdABgNQABgWAJgXIAIghIAEgOIABgCIgIgBIgLgDIgIgDIgHgDIgLgGIAAgCIAAgDIgBgIIAAgBIgCgKIADAAIAAAAQAQAGAeAEQAoAGBBAAQAIAAAHgCIAAACIAAAEIABANIAAADIADAUIAGA5QABARgCAgQAAATADAPQgBAAgBAAQAAAAgBAAQAAABAAAAQgBABAAAAIgBAAIAAADIAAADIAAACQAAAFANAuIADAJIABAGIAGAYIAAABIACAHIACAHIABAIQADANgBAtIAAAHIAFAnIABAEQgHgIgBgNgAhlDLIAAAAIgEAAQgGgGgBgCIADgEIAAAAIAEgDIADAAQAKAAACgBQAEgCAAgEIgBgGIgCgBIgCAAIAFgEIgCgDQABgFABgGIAAgpQgBgnALgUQADgGACgBIAAAFIACAuIAAAPQAAAKgCAQIgDAQQgFAaAAANIAAABQAAAEABABIgBACIgWgBg");
	this.shape_136.setTransform(357.8,146.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#B28A7E").s().p("AAUAIIADAFIAEAGIAAADIgKACIADgQgAgSAQIgHgFIgBAAQAHgIAAgaIACAYIACASIgDgDg");
	this.shape_137.setTransform(359.7,81.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#59373F").s().p("AjJC3QgNgOAAgNQAAgHAkg7IArhHQA/hxAAgYQAKgHAIgOQAKgTAKgJQAHgGAsgQIAdgKQgKAJgKAOQgVAdAAAVQAAAUAUAXQAeAjA9AAQAkAAAVgQQgOAWgXAVIgiAaIgEADIgLAKIgDgBIgMgEQgDAAgCADQgCACgEAAIgJgEIgDgEIAAAAIgJgKIgRgTIgCgDQgrg3ABglQgBgQgCgIQgFACgCAAIAAAXQAAALALAfQAMAdAIAJIAGAJIADAEIAEADIACACIAbAaQgCACAAAEQAAAFAGAFQAHAHANABIADACIAAABQALAHAIAAIADAAIAEAAIALgBQATgDAVgOQAQgLARgRIACgCIABgBIACgCQgDAJgDAVQgDAOADAiQAAAggQASIAAAUIADACQgMARgNAPIgSASQhRgBgbgHQhAgQAGg5QAFg+gKgfIgFACIAAA8IgCABQgCAMgMASIgWAeQgFATgLANQgSAYgoAAQgVAAgOgQgAgYB5QAQAsAvAJQAPADgLgJQgXgUgIgdQgLgkgMgZQgbAXAOAogAg2hhQg7Bqg1BqQALAPAMgRQApg7Alg/QAeg0gRgmIgCACgAgGhMQAkAvA6gKQAagEgagFQhEgOgYg+QgZASAXAegADPCdIAIgKQgMAUgOALIASgVgAC/iLQAEAGAAADIAAACIgEgLg");
	this.shape_138.setTransform(349,103.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#A06456").s().p("AAqhIQAABXgIBkQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAQgYhiAihagAgDAKIAAgDIAAgCIgBgRIAAgDIABgNIAAgEQAIglAlgcQgEAbgUAoQgKAVADAYQACAMgLAEQgDgLgCgKgAAChwIADgDQAOANgXAkQgXAkgJApQgVg+A7g9g");
	this.shape_139.setTransform(357.3,67.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#744755").s().p("ABDFGQgvgIgQgtQgOgoAagXQAOAZAKAkQAIAdAYAUQAIAHgHAAIgGgBgAiKELQA2hqA7hrIACgBQAQAlgeA0QgkBAgpA7QgHAJgGAAQgFAAgGgHgAAVBLQgVgeAXgRQAaA9BEAOQAaAFgaAEQgKACgKAAQgtAAgfgngACKkuIABABIgDABIACgCgAB1lGIACAAIAEABIAAAAIgCABIgEgCg");
	this.shape_140.setTransform(346.2,88);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#885549").s().p("AAHCXIAAgGIABgEIAAAAIgBgBQgFgfgCgaIAAgEIAAgEIgCgiIgBgIIABgBIgCgFIgHABIgEgBIAAgVIAAgGQgCgFAAgIIABgFIAAADQACALAEAKQAKgFgBgLQgDgYAJgWQATgoAFgbQglAdgIAkQAHgvAngUQAJgEAJAAIADAAIgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAZB6gxB3IADgBIACgBIgBACQgLAggGALQgDgCgBgDgAATBaQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAIhjAAhYQgiBbAYBhgAgvAQQgIgSAAglQAAg6AbgfQALgOAPgHIABAAIABgBQAFgDAHgCIABACIgCAAIAIAXIgGADIgCACQgLAJgJAPQgTAcAAAjIgBAsQABAaAKANIAEgCQADgCADAAIAAABIAAANQgcgKgLgdgAgLiKQg7A9AUA/QAJgqAYgkQAWgkgNgNIgDADg");
	this.shape_141.setTransform(358.6,70.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#4F3137").s().p("ACTJVIAAgTIABgSQABgIAEgDQgEgBgCgCIAAgFIAFgcIAAgIIACAAIAAgBQgKgcgQgeQgNgbAAgoQgEgKgBgLQAAgMAFgFQgDgFgEgHIgDgIIACgMIAAgHIABgBIgDgGIAAgBQgEgMgDgNQgEgggDgNQgEgPgNgmIgDgIIgHgVIgHAKIAAABIgBAKIgKAaQgNAigEAYIgHAwQgEAcgGARQgIAaAEBCQAEA9gOAfIgEgCQgBgBAAgEIAAgBQAAgNAFgaIACgQQACgPAAgKIAAgQIgCguIAAgFIAAgPIABgZQADghAJgxIABgBIAAgCIABgFIACgLIAEgPQAJghAJgRIAGgIIAAgBQAAgCACgEIAEgGIABgCIABgBIABgBQAFgHADgBIAAgCIACADIACAAIABABIAAACIAFAFIAAABIABACQAGAJAGAMQAJASAHAaIAGApQAFAWAFANIADAXIAAAEIgCAAIgDADIAJAYIAAABIABACIgDAEQgKAzAZAwIAGALIAKAVQAKAXADAOIAEAAQAAADACACQgLgBgEACQgFABAAAGQAAAGABAAIAMABIABAAIgFAHIAYABIABAAIABABIAAgBIgDgKIgFgnIAAgGQABgtgDgOIgBgIIgCgHIgCgGIAAgBIgGgZIgBgFIgDgJQgMgwAAgFIAAgBIAAgEIAAgCQABgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAQgDgOAAgTQACghgBgQIgGg5IgCgVIgBgDIgBgMIAAgEIAAgDQgHACgIAAQhCAAgogFQgdgEgQgHIAAAAIgBAAIABABIgDgBIACALIAAAAIABAJIAAADIAAACIAAABIgFBYIAFBXIgBALIgCABIAAABIgHAfQgIAgAAAHIAAAGIAAADQABAfAGAhIADAVIAPACIABACIACADIgEADQgQgCgFACQgFABAAAHQAAAGABgBIAIABIgBADIgBABIgCADIgCACQADACABADIAEABIAEABIABAAIAVAAIAFAAIABABIABAAIAAAAIAAgBQAHAMAAAwIgBADIgBACIABAAQABAAAAABQAAAAAAAAQAAABAAABQAAABAAABQAAAAAAABQAAABAAAAQgBABAAAAQgBAAAAABQgFABgSAAQgeAAgGgQIAAgUIAAgTQABgGAGgLIgBgBQgEgFAAgFIAAgJQACgHAJgIIgBgEQgKg8AAgnQAAgiAHgMQAGgLAAgZIAAgEIACgBIACAAQgDgNgBgSIAAg0QAAgmADgSIACgHIAAgOIAAgDIgBgMIABgKIABgGIAFgHIgEgCQgLgHAAgJIABgLIAAgFIABgEQgVgOgHgWIAAgnIgeAsQgqA8gZAAIgLgBIAAABQAAAEgFAIIgBABIAGAIIgBACQAFADACAGQACAEAAAGIAAACQgBAJgEAGIgGAGIgFACQgGADgIAAQgTAAgGgGQgDgCAAgGIABgGIgDACIgFgEIAAgFQgKgFgCgGQgBgCAAgJIAAgBQgDgDgBgDIgBgJQAAgHAGgJQAFgIAGgBIAAAAQADgFAEgDQgLgPAAgOQAAgHA7hpQBEh2AUg0IABAAQAKgXAggXQAqgdA2gKIAAAAIAOAEIABAAIgBgBQgBgBAAgEIAAgfQABgKACgGQgbgNgNgfQgIgWAAgnQAAg+AegjQAageAogBQAmgBAcAXQAeAYAAAkQAAAzgKAjQgSA5gqANIgKAhIAAATIADgBQADACACADIgDADQAKAEALACIAYAQQASALANAMIAMANIAHAHIAAAAIAHALIAGAKQAMAdAAA2IABAXQgBASgHAIQgBARgJAbQgNAqgCAJQgJAogFAIQgMAYgVALIgBABQAAAKgHALQgGAIgIAFIgCABIACAJIACAMIAAADIAEAVIAFAiIAABzQATAuAGA+QAEAnABBPIADgBQAHAGACAPIADAUIAAAcIgFADIAAAAIgBgCIgBgBIgDACIAAABIgBABIgBAAIgDABIgCABIgOAAQgYAAgFgPgAC9IeIABABIAAgCIgBABgAjSCEIgHATQAKACAIAAQAJAAAFgCQAEgCABgCIABgBIAAgHIAAgCIgBgHIAAgDQgJgDgGAAQgKAAgFAIgAjRBwIgLAPIgDAIQAGgNATgFQAHgBAFAAIgCgDQgEACgCAAQgIAAgIgEIABABgAjnBtQgGAGAAACQAAADAFAGIABABIAEgGQAGgKAGgDQgFgDgFgEIgGAIgAjrBbIAAABIABgBIgBAAgAACkwQgsAPgHAGQgKAJgKATQgJAOgJAIQAAAXg/BzIgrBHQgkA5AAAHQAAANAMAOQAPARAUAAQAoAAATgZQAKgNAGgTIAWgdQAMgSABgMIADgBIAAg8IAFgBQAKAegFA+QgGA4BAAQQAbAHBRABIASgSQANgPAMgQIgDgDIAAgUQAQgRgBggQgCgiACgOQAEgVADgKIgCACIgBABIgCACQgRASgQAMQgVAOgTADIgLABIgEAAIgEAAQgHAAgLgIIAAAAIgDgCQgNgCgHgGQgGgGAAgEQAAgFABgCIgagaIgCgCIgDgEIgDgEIgHgIQgIgKgMgdQgMgeAAgMIAAgXQADAAAFgCQACAIAAARQAAAkAqA3IACADIARAUIAJAKIABAAIADAEIAJAEQAEAAACgCQACgDADAAIAMAEIADACIALgLIAEgDIAigbQAXgVAOgVQgVAPgkAAQg9AAgegjQgTgXAAgTQAAgWAUgdQAKgOAKgIIgdAKgADAApIgSAWQAOgMAMgUIgIAKgAC0j0IAAgCQAAgDgEgGIAEALgADWj3IABgBIgEgFIADAGgABOmaIgBABIABAHIACAjIAAAEIABAEQACAaAFAfIABAAIAAABIgBAEIAAAGQABADADABQAGgLALgfIABgDIACgGIAAAAIABACIAAACQADAGADAAQADAAABgJIAAgBIABgHQABgJAFgPIAGgZQAYhLAAg3QAAgggPgLQgGgFgHAAIgDAAQgJAAgJAEQgoATgHAwIgBAEIgBANIAAADIACASIAAACIgBAEQAAAJACAGIAAAFIAAAWIAEABIAHgBIACAFgABtk3IAKgCIAAgDIgEgGIgDgFIgDAQgABBlEIABAAIAHAFIADADIgCgSIgCgZQAAAbgHAIgABOpQQgPAHgLANQgbAgAAA5QAAAlAIAUQALAdAcAKIAAgNIAAgCQgDABgDACIgEACQgKgNgBgaIABgtQAAgjATgcQAJgPAMgJIADgBIgBgBIAGgDIAEgDIAHgDQAYgKAQANQATAOAAAkQAAAhgdBqQAggQAOgyQAHgWACgcIABgaQAAgggbgVQgZgUgiACQgJAAgJACQgHACgGADIgFgBIgCAAIAFACg");
	this.shape_142.setTransform(350.5,114.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#6F453C").s().p("AgeCCIgBgBIAAgCIgBgBIgCAHIgBABIgEABQAxh3gZh5QAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAIAAgBQAHABAFAEQAPALAAAgQAAA3gXBKIgGAZQgEAPgCAKIAAAHIAAAAQgCAJgCAAQgEAAgCgGgAAZg8QAAglgSgOQgQgMgXAJIgHAEIgFACIgIgXIACAAIAAgBQAIgCAKgBQAggBAaAUQAbAVAAAfIgBAaQgDAcgGAWQgPAygfAPQAchoAAghg");
	this.shape_143.setTransform(365,68.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:373.4,y:61.1}},{t:this.shape_11},{t:this.shape_10,p:{x:372.2,y:59.2}},{t:this.shape_9},{t:this.shape_8,p:{x:349.9,y:100.1}},{t:this.shape_7,p:{x:347.6,y:100.1}},{t:this.shape_6,p:{x:353.2}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:320.6,y:119}},{t:this.shape_2},{t:this.shape_1,p:{x:317.9,y:118.1}},{t:this.shape,p:{x:365}}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_6,p:{x:363}},{t:this.shape_41},{t:this.shape_40,p:{x:362.7,y:144.1}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_3,p:{x:330.4,y:119}},{t:this.shape_37},{t:this.shape_1,p:{x:327.7,y:118.1}},{t:this.shape,p:{x:374.8}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_10,p:{x:381.9,y:59.2}}]},6).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_10,p:{x:385.3,y:63}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_3,p:{x:333.8,y:122.5}},{t:this.shape_1,p:{x:331.1,y:121.6}},{t:this.shape_45}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_8,p:{x:363,y:103.6}},{t:this.shape_7,p:{x:360.7,y:103.6}},{t:this.shape_56,p:{x:385.2,y:66.6}},{t:this.shape_12,p:{x:386.5,y:64.6}},{t:this.shape_10,p:{x:385.3,y:62.7}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_3,p:{x:333.8,y:122.5}},{t:this.shape_1,p:{x:331.1,y:121.6}},{t:this.shape_45}]},1).to({state:[{t:this.shape_63},{t:this.shape_58},{t:this.shape_57},{t:this.shape_8,p:{x:363,y:103.6}},{t:this.shape_7,p:{x:360.7,y:103.6}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_3,p:{x:333.8,y:122.5}},{t:this.shape_1,p:{x:331.1,y:121.6}},{t:this.shape_45}]},1).to({state:[{t:this.shape_7,p:{x:360.7,y:103.6}},{t:this.shape_59},{t:this.shape_12,p:{x:386.5,y:64.6}},{t:this.shape_56,p:{x:385.2,y:66.6}},{t:this.shape_10,p:{x:385.3,y:62.7}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_8,p:{x:363,y:103.6}},{t:this.shape_64},{t:this.shape_47},{t:this.shape_46},{t:this.shape_3,p:{x:333.8,y:122.5}},{t:this.shape_45},{t:this.shape_1,p:{x:331.1,y:121.6}}]},1).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_56,p:{x:385.2,y:66.6}},{t:this.shape_12,p:{x:386.5,y:64.6}},{t:this.shape_10,p:{x:385.3,y:62.7}},{t:this.shape_64},{t:this.shape_47},{t:this.shape_46},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]},3).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_56,p:{x:385.2,y:66.6}},{t:this.shape_12,p:{x:386.5,y:64.6}},{t:this.shape_10,p:{x:385.3,y:62.7}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_56,p:{x:385.2,y:66.6}},{t:this.shape_12,p:{x:386.5,y:64.6}},{t:this.shape_10,p:{x:385.3,y:62.7}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_85},{t:this.shape_84},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_64},{t:this.shape_47},{t:this.shape_46},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_8,p:{x:361.9,y:103.9}},{t:this.shape_7,p:{x:359.6,y:103.9}},{t:this.shape_56,p:{x:384,y:67}},{t:this.shape_12,p:{x:385.4,y:64.9}},{t:this.shape_10,p:{x:384.2,y:63.1}},{t:this.shape_97},{t:this.shape_96},{t:this.shape_40,p:{x:365,y:148}},{t:this.shape_95},{t:this.shape_1,p:{x:329.9,y:122}},{t:this.shape_3,p:{x:332.6,y:122.9}}]},83).to({state:[{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101}]},1).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117}]},1).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},1).wait(1));

	// graficiarka reka
	this.instance_1 = new lib.Wygenerujklatkipośrednierekagrafi2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(363.9,87.3,1,1,0,0,0,7,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1,scaleY:1,rotation:-130.6,x:368.2,y:82.8},0).wait(6).to({rotation:-128.6,x:372.2,y:88.4},0).wait(1).to({x:374.3,y:92.6},0).wait(5).to({x:376.5,y:89.1},0).to({regY:17.6,scaleX:1,scaleY:1,rotation:-148.7,y:89},3).to({_off:true},84).wait(4));

	// cien graficiarki
	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(79,49,55,0.502)").s().p("AhSJSIgIgCIgBgCIgBgDIAAgDQgBgFADgDIADgDIACgEIACgEIgCAAIgCAAIgFgCIgDgCQgEgFADgGQACgGAEgGQAFgJAIgIIAAAAQAAgEABgDIAFgKQACgDABgFIABgCQgDgEAAgGIAAgRQgLgQgEgZIgLg/QgEgfgJgcQgFgRACgNIgDAAQAAgMgEgJIgBgKQABgIgCgGIgDhJQgBgUAHgRIgBAAIAAAAQgGgFgFgGIAAgBIAAgKIAAgNIAAgCIAAgCIAAgCIABgEIgFgEIgEgGIgDgEIgBgCIAAgBIgDgCIgBgBIgDgEIgDACQgiAZgoAGQgfAGgggFIgBgBIgCABIgCADIgBABQgGADgGgBIACADIAIAMIAJALQADAEAAADIABABIABABIABABIADACIABACIABAFQABAMgGAHQgKALgMAHQgIAFgIgEIgCgCIgCgBIgCgCIgBgCIAAgCIAAgGIAAAAIgBAAQgHAEgDgHQgEgGgIgDQgHgCACgGQgFADgFgGQgDgFgBgFIgBgOQAAABgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgIgDgEgHQgCgEABgFIAAgKIAAgFIAAgEIADgDQADgFAFgDIAVgLIADgBIAHAAIADABIACACIADADIACAEIAEADIAAABIABACIgBACIAEAAIgBAAIgCgEIABgDIAFgHIABAAIAEgCIAEgCIAAAAIAFACIABAAIgBgKIABgSQAAgFABgDIAXgaIABAAIAAADQAfggArghQAkgdAagmQASgbAKgfQAFgPALgKQABgEAEgEIAKgLIAQgTIAPgMIgBAAIACgBIAEgDIAFgDQAJgFAKgEIATgJIAIAAQAAgDAEgCIABABIAAgGIABgZQABgMgFgLIAAgEIgGACQgLgFgLgNQgLgNgBgTIgBgaQAAgGACgDIgBgBIgCgDIgBgBIgCgCQgEgBgCgEIgEgIIgCgEIADgFIABAAIAKgBIAKABQASgBAIgOIAEgHIAAAAIACgCIABgDIAAgDIAAAAIACgFQAGgQALgOIADgEQgBgEAGgDIAAgCIAAgBIAAgCIAAgDIACgCQAHgGAIgFIAZgLIAPgGQBCgFAhAwQALgKANgIQAngVApgNQAwAFAVAvQAUAqgEAuQgDAtAAAtIABADQAAADACACQACADAFADQAKAFgBALQgPgHgIgKQgDgBgCgCIgDgEIgEgDIgBgBIAAACQgBAIACAJQACAHAEAHIAJAUQAGALgCAKIAAAAQgSABgKgQIgTgbQgKgOgHgQQgDgGgBADIgBABQgOADgIgQQgGgNgCgOQgBgPADgPQACgKAAgMQgGgCgCgEIgGgKIgHgIIgHgIIgBgBQgVgCgVAFQAIAvgbAsQgcAvgwAGQgHgEgNAEIgFABQgagBAAAXIABACQADAGAFADQAGAFAHABIAFACQAHAAAHgDIADABIgBgCIAEAAIAJAAIACACIAAABIABAAIgCgDIAEAAIADgBQBaATAgBOQAGAOgDAOQgQBXhBA6QgQANgSACQAGAagNAdQgOAegYAYQgLALgOAHIAAAFIAAAJIAAAHIgBACIgBACIgEADIgDAEIgBABQAAACgDADQgEAGgCAHIgBANIgBAFIABAAIABAlQAAAOAFAOQARA5AcA1QAcA2gBA/IgBAYIgBABIgBACIAAADIABABIAAABIADABIgBAAIADAFIADAFIABADIAAACIgBACIgBABIAAAAIgCACIgBABIgEACIgVAFQgZAGgHAEIgaAJIgDACIgBgBIgBgCQgEgGAFgHQAFgGAIgDIALgGQAGgDAGABIAAAAQABgEADgBQAFgCgEgFQgDgBgBgEQAAgEACgDIAFgIIABgCQgIgTgFgbQgJgygaguQgagvgVgyQgFgNgDgNQgDgCAAgEQgBgHgCgHIgEgMIgGAFIgCAFQgGAMAAAOQgCA5AJA1QAJA1AGA2QAEAogEAnQgCACgBADIgBAGIgIAIIgYAdQgJAMgHANIgBACIgGgBgAA2BzIAAgCIAAAAgAgHBzIABAAIgBgCIAAACgAlzBmIAAgBIgCgBIACACgAlWBCIAAABIACAAIgCgBgACrkOIABAAIABgBIgGgCIAEADgAA8ktIABAAIgBgBIAAABgAFik1IACABIgBgCgAEll6IABAAIAAgBgAFfmLIAAgBIgCgBIACACgAAEnwIABAAIABAAIgBgCIgBACgAAgogIACACIAJgIQgFAEgGACg");
	this.shape_144.setTransform(359.6,110.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(79,49,55,0.502)").s().p("AhhJwQgFgFACgOQgBgJAKgEIAGgCIACABIABgEIACgYIABgGIAAgLQgBgFACgGIgDAAIgEgCQgEgDABgFIAEgJIACgDIADgGQADgDABgFIgDgDIgHgEIgEgDIgBgCQAAgEABgDIAFgKQACgDABgEIABgDQgDgEAAgGIAAgRQgLgPgEgZIgLg/QgEgfgJgdQgFgRACgNIgDAAQAAgMgEgJIgBgKQABgIgCgGIgDhJQgBgUAHgQIgBAAIAAgBQgGgEgFgGIAAgBIAAgLIAAgNIAAgCIAAgCIAAgCIABgCIgEgGIgBAAIgEgGIABgBQgGgLgEgRIgKg2IAAgDQgMABgQAFQgjAKgRALQglAKglgHQgfgFgcgPIgBgBIgCAAIgCACIgCAAQgGABgGgCIAAADIAFAOIAEANQACAEgBADIAAABIABACIABACIABADIABABIgBAFQgCALgJAFQgMAHgOADQgJACgHgHIgCgCIAAgDIgBgCIgBgCIAAgCIADgFIAAgBIgBAAQgIABgBgHQgCgGgGgFQgGgEADgFQgFAAgCgHQgCgFABgFIAEgOQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgGgFgBgJQAAgEACgFIAEgIIABgGIABgDIAEgDQAFgDAFgBIAYgEIADAAIAHADIADACIABACIABAFIABADIACAFIAAABIAAACIgBABIADABIgBgEIACgDIAHgEIABgBIAEAAIAFAAIAAAAIAEADIABAAIACgJIAHgRQACgFACgCIAfgSIABAAIgCAEQApgUAzgRQAsgPAkgbQAbgUAUgZIAHgJIgBgBIAvgoQAZgSAagGIACgCIAEAAIAEAAIAAABQAAgEAFgCIABABIAAgGIABgQIAAgEIAAgLIgCgKIABgDIgCgIIgBgEIgFACQgKgHgKgOQgJgPACgTIACgaQAAgGADgDIgBAAIgCgDIgBgCIgBgBQgEgCgCgFIgDgIIgBgEIAEgFIABAAIAKAAIAKADQASABAKgNIADgGIABAAIACgCIABgDIACgCIAAAAIACgFQAIgQANgMIAEgDQgBgFAGgCIAAgCIABgBIAAgCIABgCIACgCQAHgGAJgDIAagIIAQgDQBAACAbAwQAWgZAYgTQBKg4AvAvQAaARAkArQAlArAWAPIgEAEQgCABgLAAQgOAAgNgHQgNgHgEAAQACAtAdAmQAcAlAAAIQAAAJgeAAQghAAgNgWIgHgXQgDgCgCgCQgGAHgBAGIAAANIACAOIADANIgBAHIAAAEIgDABIgBgCIgBABIgCgFIg2hIIgHgGQgLgKgEgBQgagLgCgHIgCgBIgKgHIgBgBIgFgKIgGgIIgCgBQgUgFgVACQABAwggApQgjApgwABQgGgFgOADIgEgBQgOgCgHAFIgBgBQgDAFAAAIIABACQADAGAFADQAGAFAHABIAFACQAHAAAHgDIADABIgBgCIAEAAIAJAAIACACIAAABIABAAIgCgDIAEAAIADgBQBaAUAgBOQAGANgDAOQgQBXhBA6QgQAOgSABQAGAbgNAcQgOAegYAZQgLAKgOAHIAAAFIAAAJIAAAHIgBACIgBACIgEADIgDAEIgBABQAAACgDADQgEAGgCAHIgBAOIgBAEIABAAIABAlQAAAOAFAPQARA4AcA2QAcA1gBA/IgBAYIgBABIgBADIAAACIABABIAAABIADACIgBAAIADAEIADAFIABADIAAACIgBACIgBABIAAABIgCABIgBACIABACIABADIABAAQAIAHADALQACAFAAAFIgXANQAGATgOAJQAFATglAGQAAABgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQgCgJACgIIgFAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQABgJAEgIIgBgDQAAgHgCgFIgBgPIABgKQAAgIADgGIACgEIgCgEQgBgDACgDQABgDADgBQAFgDgEgEQgDgCgBgEQAAgEACgCIAFgIIABgCQgIgUgFgbQgJgygaguQgZgvgWgyQgFgNgDgNQgDgCAAgEQgBgHgCgHIgEgLIgGAEIgCAGQgGALAAAOQgCA5AJA1QAJA1AGA3QAFA3gJAyIAAADIgBAEIAIADIAAABQAJADACAHQAIAIAFAMQAIAUgOATQgeAKgbAOIgBAFIgCAEQgKADgGgBIgKAGIAEgKgAApBRIAAgCIAAAAgAgUBRIABAAIgBgCIAAACgAnSg5IAAgBIgBgBIABACgAmqhPIAAgCIgBABIAAAAIABABIAAAAgAhNh2IACABIgBgBgAAvlPIABAAIgBgBIAAABgAAPl9IAEAAIgEgBgAAtpAIACACIAIgGIgBAAQgEADgFABgADVo/IABgBIAAAAIgBABg");
	this.shape_145.setTransform(373.6,105.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(79,49,55,0.502)").s().p("AiMJiQAJgJAFgLIAKgWQADgIAIgCIAAgBIACgDIgJgFQgEgDABgEIAEgJIAFgJQADgEABgFIgDgCIgHgEIgEgEIgBgBQAAgEABgDIAFgKQACgEABgEIABgCQgDgEAAgHIAAgQQgLgQgEgZIgLg/QgEgfgJgdQgFgQACgNIgDAAQAAgMgEgJIgBgKQABgIgCgGIgDhJQgBgUAHgRIgBAAIAAAAQgGgFgFgGIAAgBIAAgKIAAgNIAAgCIAAgCIAAgCIABgEIgFgFIgEgFIgDgFIgBgBIAAgBIgDgCIgBgCIgDgEIgDADQgiAZgoAGQgfAGgggFIgBgBIgCABIgCADIgBAAQgGAEgGgBIACADIAIAMIAJALQADADAAAEIABAAIABACIABABIADACIABACIABAFQABAMgGAHQgKALgMAHQgIAFgIgEIgCgCIgCgCIgCgCIgBgBIAAgCIAAgGIAAgBIgBAAQgHAFgDgHQgEgGgIgDQgHgCACgGQgFADgFgGQgDgFgBgFIgBgOQAAABgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgIgDgEgHQgCgEABgFIAAgKIAAgFIAAgEIADgEQADgEAFgDIAVgLIADgCIAHABIADABIACABIADAEIACADIAEAEIAAABIABACIgBABIAEABIgBgBIgCgDIABgEIAFgGIABgBIAEgCIAEgBIAAgBIAFACIABAAIgBgJIABgTQAAgEABgDIAXgbIABAAIAAAEQAfggArghQAPgMANgNQAQgRAOgTIAEgGQASgcAKgeQAFgPALgKQABgEAEgEIAKgLIAQgTIAPgMIgBgBIACAAIAEgDIAFgDQAJgGAKgEIATgIIAIAAQAAgDAFgCIABABIAAgGIABgZQABgMgFgLIgBgEIgGACQgLgFgLgNQgLgOgBgSIgBgaQAAgGACgEIgBAAIgCgDIgBgBIgCgCQgEgBgCgEIgEgIIgCgEIADgFIABgBIAKAAIAKABQASgBAIgPIAEgGIAAAAIACgCIABgEIABgCIAAAAIACgFQAGgRALgNIADgEQgBgFAGgCIAAgCIAAgCIAAgCIAAgCIACgCQAHgHAHgEIAZgLIAPgGQBCgGAhAwQALgKANgHQAngWApgNQAwAGAVAvIACAEQAXAcAJAmQADANAOgBQAQgCAMABQgLAagcAEQAnALAhgLQAAAAAAABQABAAgBAAQAAABAAABQAAABgBABQgRAsgxAEIAEAJIAEAFQACADAEADIABABQgTAAgWgEQgUgDgNgFIgBgBIgCgBIgSgMQgFgHgEgDQgMgJgIgMIgLgTIgCgGIgCgGIAAgJQgGgCgCgEIgGgKIgHgJIgHgHIgBgBQgVgCgVAFQAIAvgbAsQgcAugwAHQgHgEgNAEIgFABQgagBAAAWIABADQADAFAFAEQAGAEAHACIAFACQAHAAAHgDIADABIgBgCIAEAAIAJAAIACACIAAABIABgBIgCgCIAEAAIADgBQBaATAgBOQAGANgDAPQgIAsgVAlQgUAjggAdQgQANgSACQACAIAAAIQAAATgJAUQgOAegYAYQgLALgOAHIAAAEIAAAJIAAAIIgBACIgBABIgEAEIgDADIgBABQAAADgDADQgEAGgCAHIgBANIgBAEIABAAIABAmQAAAOAFAOQARA5AcA1QAcA2gBA/IgBAYIgBABIgBACIAAACIABABIAAABIADACIgBAAIADAFIADAEIABAEIAAABIgBACIgBABIAAABIgCACIgBABIABACIABAEIABgBQAFAEACAGQgPAKgFATIgJAEQgZAMgTAPIgCgCQAAgEgDgFIACgCIACgCIABgBIABgBIACAAIAHABQAAgGgCgFIgBgPQAAgNAEgMIACgEIgCgEQgBgDACgDQABgDADgBQAFgCgEgFQgDgCgBgDQAAgEACgDIAFgIIABgCQgIgUgFgaQgJgzgZgtQgagvgWgyQgFgNgDgNQgDgCAAgFQgBgGgCgHIgEgMIgGAFIgCAFQgGAMAAAOQgCA4AJA2QAJA0AGA3QAFA5gJAzIgBAFIAIADIgBAEQgKALgDASIgBABQgUAQgOAXIgfgDgAhCIgIgCACIADgBIABAAIgBgCgAAOBhIAAgBIAAAAgAgvBhIABAAIgBgCIAAACgAmbBVIAAgBIgCgBIACACgAl+AxIAAABIACAAIgCgBgACDkgIABABIABgCIgGgCIAEADgAAUk+IABAAIgBgBIAAABgAgjoBIABAAIABgBIgBgBIgBACgAgHoxIACABIAIgIQgEAEgGADg");
	this.shape_146.setTransform(371.8,110.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(79,49,55,0.502)").s().p("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");
	this.shape_147.setTransform(374.2,113.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(79,49,55,0.502)").s().p("Ah4JnIABgCIgEgCQgRgBgLgVIgEgLQAMgLAUgCQASgBAPgJIASgLIAAAAQgEgDABgFIAEgJIAFgJQADgDABgFIgDgDIgHgEIgEgDIgBgCQAAgEABgDIAFgKQACgDABgEIABgDQgDgEAAgGIAAgRQgLgPgEgZIgLg/QgEgfgJgdQgFgRACgNIgDAAQAAgMgEgJIgBgKQABgIgCgGIgDhJQgBgUAHgQIgBAAIAAgBQgGgEgFgGIAAgBIAAgLIAAgNIAAgCIAAgCIAAgCIABgEIgFgEIgEgGIgDgEIgBgCIAAAAIgDgDIgBgBIgDgEIgDACQgiAZgoAHQgfAFgggFIgBAAIgCABIgCACIgBABQgGADgGAAIACADIAIALIAJALQADAEAAADIABABIABABIABACIADACIABABIABAGQABALgGAIQgKAKgMAIQgIAEgIgDIgCgCIgCgCIgCgCIgBgCIAAgCIAAgGIAAAAIgBAAQgHAEgDgGQgEgHgIgCQgHgDACgFQgFACgFgGQgDgEgBgGIgBgNQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgIgDgEgIQgCgEABgFIAAgJIAAgGIAAgDIADgEQADgFAFgCIAVgMIADgBIAHAAIADABIACACIADAEIACADIAEADIAAACIABACIgBABIAEAAIgBAAIgCgEIABgDIAFgGIABgBIAEgCIAEgCIAAAAIAFACIABAAIgBgKIABgSQAAgEABgDIAXgbIABAAIAAAEQAfghArghQAkgcAagnQASgbAKgfQAFgPALgJQABgFAEgEIAKgKIAQgTIAPgNIgBAAIACgBIAEgCIAFgDQAJgGAKgEIATgJIAIABQAAgEAEgCIABABIAAgGIABgYQABgNgFgLIAAgEIgGADQgLgFgLgNQgLgOgBgTIgBgaQAAgGACgDIgBgBIgCgCIgBgCIgCgBQgEgCgCgEIgEgIIgCgEIADgFIABAAIAKgBIAKABQASAAAIgPIAEgGIAAgBIACgCIABgDIAAgDIAAABIACgGQAGgQALgOIADgEQgBgEAGgDIAAgCIAAgBIAAgCIAAgCIACgCQAHgHAIgFIAZgLIAPgFQBCgGAhAwQALgKANgIQAngVApgNQAwAGAVAuQAUAqgEAuQgDAtAAAtIABADQAAADACACQACAEAFACQAKAGgBAKQgPgHgIgKQgDgBgCgCIgDgEIgEgDIgBgBIAAACQgBAIACAJQACAHAEAHIAJAUQAGALgCAKIAAAAQgSABgKgPIgTgcQgKgOgHgQQgDgGgBADIgBABQgOAEgIgRQgGgNgCgOQgBgPADgOQACgLAAgMQgGgCgCgEIgGgKIgHgIIgHgHIgBgCQgVgCgVAFQAIAvgbAtQgcAugwAHQgHgFgNAFIgFAAQgagBAAAXIABACQADAGAFADQAGAFAHABIAFACQAHAAAHgDIADABIgBgCIAEAAIAJAAIACACIAAABIABAAIgCgDIAEAAIADgBQBaAUAgBOQAGANgDAOQgQBXhBA6QgQAOgSABQAGAbgNAcQgOAegYAZQgLAKgOAHIAAAFIAAAJIAAAHIgBACIgBACIgEADIgDAEIgBABQAAACgDADQgEAGgCAHIgBAOIgBAEIABAAIABAlQAAAOAFAPQARA4AcA2QAcA1gBA/IgBAYIgBABIgBADIAAACIABABIAAABIADACIgBAAIADAEIADAFIABADIAAACIgBACIgBABIAAABIgCABIgBACIABACIABADIABAAQgMAOgIAQIgEgDQgWACgMANIgNgMQgEgHAAgDQAAgGANgMIAIgGIgBgBQgBgDACgDQABgDADgBQAFgDgEgEQgDgCgBgEQAAgEACgCIAFgIIABgCQgIgUgFgbQgJgygaguQgagvgVgyQgFgNgDgNQgDgCAAgEQgBgHgCgHIgEgLIgGAEIgCAGQgGALAAAOQgCA5AJA1QAJA1AGA3QAFA4gJA0IgBAEIADABQgPAQgKAWQgJAVgHAUQgSAAgQAFQgFACgEAAQgGAAgFgDgAA2BcIAAgCIAAAAgAgHBcIABAAIgBgCIAAACgAlzBPIAAgBIgCAAIACABgAlWAsIAAAAIACAAIgCgBgACrklIABAAIABgBIgGgCIAEADgAA8lEIABAAIgBgBIAAABgAFilMIACABIgBgCgAElmRIABABIAAgCgAFfmiIAAgBIgCgBIACACgAAEoHIABAAIABAAIgBgCIgBACgAAgo3IACACIAJgIQgFAEgGACg");
	this.shape_148.setTransform(370.2,113.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(79,49,55,0.502)").s().p("AhzJoIACgCIgEgCQgSgBgKgVIgEgLQAMgLATgCQASgBAPgJIATgLIgBAAQgDgDABgFIADgJIAGgJQADgDAAgFIgDgDIgGgEIgEgDIgCgCQAAgEACgDIAFgKQACgDAAgEIABgDQgCgEAAgGIAAgRQgLgPgFgZIgKg/QgEgfgJgdQgGgRACgNIgCAAQAAgMgEgJIgBgKQABgIgCgGIgDhJQgBgUAGgQIAAAAIAAgBQgHgEgEgGIAAgBIAAgLIAAgNIAAgCIAAgCIAAgCIAAgEIgEgEIgEgGIgEgEIgBgCIAAAAIgCgDIgCgBIgCgEIgDACQgiAZgpAHQgfAFgfgFIgCAAIgCABIgBACIgBABQgGADgHAAIACADIAJALIAJALQACAEAAADIABABIACABIABACIACACIACABIABAGQABALgHAIQgJAKgMAIQgIAEgJgDIgCgCIgCgCIgBgCIgCgCIAAgCIABgGIAAAAIgCAAQgGAEgEgGQgEgHgHgCQgHgDABgFQgFACgEgGQgEgEAAgGIgBgNQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgHgDgEgIQgCgEAAgFIABgJIgBgGIAAgDIADgEQAEgFAEgCIAVgMIADgBIAIAAIADABIACACIACAEIADADIADADIABACIAAACIgBABIAEAAIAAAAIgCgEIABgDIAEgGIACgBIADgCIAFgCIAAAAIAFACIAAAAIgBgKIABgSQAAgEACgDIAXgbIAAAAIAAAEQAgghAqghQAlgcAZgnQATgbAKgfQAFgPALgJQAAgFAFgEIAJgKIARgTIAOgNIAAAAIABgBIAFgCIAEgDQAJgGAKgEIAUgJIAHABQAAgEAEgCIABABIAAgGIACgYQAAgNgFgLIgBgEIgEADQgLgFgLgNQgMgOAAgTIgBgaQgBgGACgDIgBgBIgCgCIgBgCIgBgBQgEgCgDgEIgEgIIgBgEIADgFIABAAIAKgBIAJABQASAAAIgPIADgGIABgBIACgCIABgDIABgDIAAABIACgGQAFgQALgOIAEgEQgCgEAGgDIAAgCIAAgBIAAgCIABgCIACgCQAGgHAJgFIAZgLIAPgFQBCgGAhAwQAKgKAOgIQAUgLAUgJIAAABQAWgKAWgHQAwAGAWAuQATAqgDAuIAAAEIgBABQAAAdgTAeIgNAYQgHgBgCgIQgEAUgKAKIABAAIgBABIgCADQgfAoguABQAXgQAJgaIABgBIABgDQADgLAAgMIAAgPQgTAKgSgLQAYgPAJgbQABgEAEgCQACgKgBgLQgFgCgDgEIgGgKIgGgIIgHgHIgCgCIgFAAIAAACQgVgCgUAFQAIAvgbAtQgdAugvAHQgHgFgOAFIgEAAQgbgBABAXIAAACQAEAGAEADQAGAFAHABIAFACQAIAAAGgDIADABIAAgCIAEAAIAJAAIABACIABABIABAAIgCgDIADAAIADgBQBbAUAgBOQAFANgCAOQgRBXhBA6QgPAOgSABQAGAbgOAcQgNAegZAZQgKAKgOAHIAAAFIAAAJIAAAHIgBACIgCACIgDADIgEAEIAAABQgBACgCADQgFAGgBAHIgCAOIAAAEIAAAAIABAlQABAOAEAPQASA4AbA2QAcA1AAA/IgBAYIgCABIAAADIAAACIAAABIABABIACACIAAAAIADAEIACAFIACADIgBACIAAACIgBABIgBABIgCABIAAACIAAACQgFAHgDAKQgTANgNASIgPAAIgBgDQgGgCgFgIQgFgJAAgDQAAgGAMgMIAIgGIAAgBQgBgDABgDQACgDACgBQAFgDgDgEQgEgCAAgEQgBgEADgCIAEgIIACgCQgIgUgFgbQgJgygaguQgbgvgUgyQgGgNgDgNQgCgCgBgEQAAgHgDgHIgEgLIgFAEIgDAGQgFALgBAOQgCA5AKA1QAJA1AFA3QAGA4gKA0IAAAEIAHADIgBAHIABACIABABQgFAHgDAKIgBABQgdAXgRAaQgNABgNAEQgFACgEAAQgGAAgFgDgAA8BdIAAgCIgBAAgAgBBdIAAAAIAAgCIAAACgAltBQIAAgBIgCAAIACABgAlQAtIgBAAIACAAIgBgBgACxkkIABAAIABgBIgGgCIAEADgABBlDIABAAIgBgBIAAABgAFcmVIABgBIgBgBIAAACgAEMmfIABAAIABAAIgBgBIgBABgAAKoGIAAAAIABAAIAAgCIgBACgAAlo2IACACIAJgIQgFAEgGACg");
	this.shape_149.setTransform(369.7,113.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(79,49,55,0.502)").s().p("AiJJnIACgCIgEgCQgSgBgKgVIgEgLQAMgLATgCQASgBAPgJIATgLIgBAAQgDgDABgFIADgJIAGgJQADgDAAgFIgDgDIgGgEIgEgDIgCgCQAAgEACgDIAFgKQACgDAAgEIABgDQgCgEAAgGIAAgRQgLgPgFgZIgKg/QgEgfgJgdQgGgRACgNIgCAAQAAgMgEgJIgBgKQABgIgCgGIgDhJQgBgUAGgQIAAAAIAAgBQgHgEgEgGIAAgBIAAgLIAAgNIAAgCIAAgCIAAgCIAAgEIgCgCQgcAWgiAJQgeAJgggCIgCAAIgCABIgBADIgBABQgFAEgHAAIADADIAJAKIAKAKQADADAAAEIABAAIACABIABACIADABIACACIABAFQACAMgFAIQgJALgKAJQgIAFgJgCIgCgCIgCgCIgCgBIgBgCIgBgCIAAgGIAAAAIgBAAQgGAFgFgGQgEgGgIgCQgHgCABgFQgFADgFgGQgEgEgBgFIgDgNQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAgBQgIgCgFgHQgCgEAAgFIgBgJIgBgGIAAgDIADgFQADgFADgCIAUgOIADgCIAHAAIAEAAIACACIADADIACADIAEADIABACIABABIgBACIAEAAIgBgBIgCgDIABgEIADgGIACgBIADgDIAEgCIAAAAQADAAADABIAAAAIgCgJIgBgSQAAgFABgDQAJgPAKgOIABAAIAAAEQAcgkAnglQAhghAVgoQAPgeAHgfQADgPAKgLQAAgFAEgEIAJgMIAOgVIANgOIgBAAIACgBIAEgDIABAAIADgDIAHgFIAHgEIAAABQAHgDAIgCIASgIIAIABQAAgEAEgCIABABIAAgGIACgYQAAgNgFgLIgBgEIgFADQgLgFgLgNQgMgOAAgTIgBgaQgBgGACgDIgBgBIgCgCIgBgCIgBgBQgEgCgDgEIgEgIIgBgEIADgFIABAAIAKgBIAJABQASAAAIgPIAEgGIABgBIACgCIABgDIABgDIAAABIACgGQAFgQAKgOIAEgEQgCgEAGgDIAAgCIAAgBIAAgCIABgCIACgCQAGgHAJgFIAZgLIAPgFQBCgGAhAwQAKgKAOgIQAmgVApgNQAwAGAWAuQATAqgDAuQgEAtABAtIAAADQAAADACACQACAEAFACQALAGgBAKQgPgHgJgKQgDgBgCgCIgCgEIgFgDIAAgBIgBACQgBAIADAJQACAHADAHIAKAUQAFALgBAKIgBAAQgSABgKgPIgSgcQgKgOgIgQQgCgGgCADIgBABQgOAEgHgRQgHgNgBgOQgCgPADgOQADgLgBgMQgFgCgDgEIgGgKIgGgIIgHgHIgCgCQgVgCgUAFQAIAvgbAtQgdAugvAHQgHgFgOAFIgEAAQgbgBABAXIAAACQAEAGAEADQAGAFAHABIAFACQAIAAAGgDIADABIAAgCIAEAAIAJAAIABACIABABIABAAIgCgDIADAAIADgBQBbAUAgBOQAFANgCAOQgRBXhBA6QgPAOgSABQAGAbgOAcQgNAegZAZQgKAKgOAHIAAAFIAAAJIAAAHIgBACIgCACIgDADIgEAEIAAABQgBACgCADQgFAGgBAHIgCAOIAAAEIAAAAIABAlQABAOAEAPQASA4AbA2QAcA1AAA/IgBAYIgCABIAAADIAAACIAAABIABAAQgLAQgEATIgZAnIgLAAIgBgDQgEgBgEgEIgGgNQAAgDgBgEQACgGAJgJIAIgGIAAgBQgBgDABgDQACgDACgBQAFgDgDgEQgEgCAAgEQgBgEADgCIAEgIIACgCQgIgUgFgbQgJgygaguQgagvgVgyQgGgNgDgNQgCgCgBgEQAAgHgDgHIgEgLIgFAEIgDAGQgFALgBAOQgCA5AKA1QAJA1AFA3QAEAlgDAjQgMALgEAUQgDARAGAJQgZAcgNAjQgOABgNAEQgEACgFAAQgGAAgFgDgAlgByIAAgBIgCAAIACABgAAmBcIAAgCIgBAAgAgXBcIAAAAIAAgCIAAACgAlHBMIAAAAIACAAIgCgBgAgyjgIgBgDIgBgBIACAEgACbklIABAAIABgBIgGgCIAEADgAArlEIABAAIgBgBIAAABgAFSlMIABABIgBgCgAEVmRIAAABIABgCgAFPmiIAAgBIgCgBIACACgAgLoHIAAAAIABAAIAAgCIgBACgAAPo3IACACIAJgIQgFAEgGACg");
	this.shape_150.setTransform(371.9,113.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(79,49,55,0.502)").s().p("AiUJnIACgCIgEgCQgSgBgKgVIgEgLQAMgLATgCQASgBAPgJIATgLIgBAAQgDgDABgFIADgJIAGgJQADgDAAgFIgDgDIgGgEIgEgDIgCgCQAAgEACgDIAFgKQACgDAAgEIABgDQgCgEAAgGIAAgRQgLgPgFgZIgKg/QgEgfgJgdQgGgRACgNIgCAAQAAgMgEgJIgBgKQABgIgCgGIgDhJQgBgUAGgQIAAAAIAAgBQgHgEgEgGIAAgBIAAgLIAAgFIgBABIgCAAIAAABQgTAMgUAIQgeALggAAIgBAAIgCABIgBADIgBABQgFAEgHABIADADIAKAJIALAJIADAHIABAAIACABIABACIADABIACABIACAGQADALgFAJQgIAMgJAJQgHAGgKgCIgCgBIgCgCIgCgCIgCgBIAAgCIgBgGIAAAAIgBAAQgGAFgFgGQgFgFgIgBQgHgCABgFQgFADgGgFQgEgEgBgFIgEgNQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgIgCgFgGIgDgJIgBgKIgCgFIgBgDIADgFQADgFADgDIATgQIACgBIAIgBIADAAIADABIADAEIACACIAFADIAAACIABABIAAACQAAAAABgBQAAAAAAAAQABAAABAAQAAAAABAAIgBAAIgDgDIABgEIADgHIABAAIAEgDIAEgCIAAgBQADAAACABIABAAQgCgEgBgFIgCgSQgBgFABgDIARgfIABgBIAAAEQAZgkAkgoQAfgjATgqQANgeAEggQACgPAJgMQAAgFAEgEIAIgMIANgWIALgPIgBgBIACAAIADgEIABAAIACgBIAAgBIABgBIABgBIAFgEIABABIAEgCIACAAIAAgBIAHgEIAAABQAHgDAIgCIASgIIAIABQAAgEAEgCIABABIAAgGIACgYQAAgNgFgLIgBgEIgFADQgLgFgLgNQgMgOAAgTIgBgaQgBgGACgDIgBgBIgCgCIgBgCIgBgBQgEgCgDgEIgEgIIgBgEIADgFIABAAIAKgBIAJABQASAAAIgPIAEgGIABgBIACgCIABgDIABgDIAAABIACgGQAFgQALgOIAEgEQgCgEAGgDIAAgCIAAgBIAAgCIAAgCIACgCQAGgHAJgFIAZgLIAPgFQBCgGAhAwQAKgKAOgIQAmgVApgNQAwAGAWAuQATAqgDAuQgEAtABAtIAAADQAAADACACQACAEAFACQALAGgBAKQgPgHgJgKQgDgBgCgCIgCgEIgFgDIAAgBIgBACQgBAIADAJQACAHADAHIAKAUQAFALgBAKIgBAAQgSABgKgPIgSgcQgKgOgIgQQgCgGgCADIgBABQgOAEgHgRQgHgNgBgOQgCgPADgOQADgLgBgMQgFgCgDgEIgGgKIgGgIIgHgHIgCgCQgVgCgUAFQAIAvgbAtQgdAugvAHQgHgFgOAFIgEAAQgbgBABAXIAAACQAEAGAEADQAGAFAHABIAFACQAIAAAGgDIADABIAAgCIAEAAIAJAAIABACIABABIABAAIgCgDIADAAIADgBQBbAUAgBOQAFANgCAOQgRBXhBA6QgPAOgSABQAGAbgOAcQgNAegZAZQgKAKgOAHIAAAFIAAAJIAAAHIgBACIgCACIgDADIgEAEIAAABQgBACgCADQgFAGgBAHIgCAOIAAAEIAAAAIABAlQABAOAEAPQASA4AbA2QAcA1AAA/IgBAYIgCABIAAADIAAACIAAABIABABIACACIAAAAIADAEIABADQgXAcgRAkIgIAAQgJgRgPgPIAKgLIAIgGIAAgBQgBgDABgDQACgDACgBQAFgDgDgEQgEgCAAgEQgBgEADgCIAEgIIACgCQgIgUgFgbQgJgygaguQgagvgVgyQgGgNgDgNQgCgCgBgEQAAgHgDgHIgEgLIgFAEIgDAGQgFALgBAOQgCA5AKA1QAJA1AFA3QAGA4gKA0IAAAEIAHADIgBAHIABACIADADIgBAAIAAAAIAAABQgOAPgJAWIgLAcIgGAAQgWgDgUAHQgFACgEAAQgGAAgFgDgAlSCHIgBgBIgCAAIADABgAk8BeIAAABIACAAIgCgBgAAbBcIAAgCIgBAAgAgiBcIAAAAIAAgCIAAACgAhNkWIABAAIgBAAgACQklIABAAIABgBIgGgCIAEADgAAglEIABAAIgBgBIAAABgAFHlMIABABIgBgCgAEKmRIAAABIABgCgAFEmiIAAgBIgCgBIACACgAgWoHIAAAAIABAAIAAgCIgBACgAAEo3IACACIAJgIQgFAEgGACg");
	this.shape_151.setTransform(373.3,113.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(79,49,55,0.502)").s().p("AirJnIACgCIgEgCQgSgBgKgVIgEgLQAMgLATgCQASgBAPgJIATgLIgBAAQgDgDABgFIADgJIAGgJQADgDAAgFIgDgDIgGgEIgEgDIgCgCQAAgEACgDIAFgKQACgDAAgEIABgDQgCgEAAgGIAAgRQgLgPgFgZIgKg/QgEgfgJgdQgGgRACgNIgCAAQAAgMgEgJIgBgKQABgIgCgGIgDhJQgBgSAFgPIgKAGQgcAPggAFIgBAAIgCABIgBADIAAABQgEAFgHABIAEADIAKAIIAMAHQADADACAEIAAgBIADABIABACIADABIACABIACAFQAFALgEAJQgGANgIAKQgGAHgJAAIgDgCIgCgBIgDgBIgBgBIgBgCIgBgGIAAgBIgCABQgFAGgFgFQgGgFgIAAQgHAAgBgGQgEAEgGgEQgEgDgDgGIgFgMQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAgBQgIAAgGgGIgFgIIgCgJIgCgGIgCgCIADgGQACgFADgEIARgSIABgBQAEgCAEAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAIACAAIAEADIADACIAFADIAAABIACACIgBABIAEgBIgBAAIgDgDIAAgEIADgHIABgBIADgDQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABgBIgBAAIAGAAIABAAQgDgEgBgFIgFgRQgCgFABgDIANghIAAgBIACAEQATgoAegsQAagnANgrQAIggAAghQABgPAHgNQgBgEADgFIAHgNIAJgYIAJgQIAAAAIABgBIADgEIABgBIADgCQAFgFAIgCIACgBIACgCIABABIAEgCIACAAIAAgBIAHgEIAAABQAHgDAIgCIASgIIAIABQAAgEAEgCIABABIAAgGIACgYQAAgNgFgLIgBgEIgFADQgLgFgLgNQgMgOAAgTIgBgaQgBgGACgDIgBgBIgCgCIgBgCIgBgBQgEgCgDgEIgEgIIgBgEIADgFIABAAIAKgBIAJABQASAAAIgPIAEgGIABgBIACgCIABgDIABgDIAAABIACgGQAFgQALgOIAEgEQgCgEAGgDIAAgCIAAgBIAAgCIABgCIACgCQAGgHAJgFIAYgLIAPgFQBCgGAhAwQAKgKAOgIQAmgVApgNQAwAGAWAuQATAqgDAuQgEAtABAtIAAADQAAADACACQACAEAFACQALAGgBAKQgPgHgJgKQgDgBgCgCIgCgEIgFgDIAAgBIgBACQgBAIADAJQACAHADAHIAKAUQAFALgBAKIgBAAQgSABgKgPIgSgcQgKgOgIgQQgCgGgCADIgBABQgOAEgHgRQgHgNgBgOQgCgPADgOQADgLgBgMQgFgCgDgEIgGgKIgGgIIgHgHIgCgCQgVgCgUAFQAIAvgbAtQgdAugvAHQgHgFgOAFIgEAAQgbgBABAXIAAACQAEAGAEADQAGAFAHABIAFACQAIAAAGgDIADABIAAgCIAEAAIAJAAIABACIABABIABAAIgCgDIADAAIADgBQBbAUAgBOQAFANgCAOQgRBXhBA6QgPAOgSABQAGAbgOAcQgNAegZAZQgKAKgOAHIAAAFIAAAJIAAAHIgBACIgCACIgDADIgEAEIAAABQgBACgCADQgEAGgBAHIgCAOIAAAEIAAAAIABAlQABAOAEAPQARA4AbA2QAcA1AAA/IgBATQgJATABAaIgCAJQgLAQgKARIgVgBQgEgRgKgQIAJgKIAIgGIAAgBQgBgDABgDQACgDACgBQAFgDgDgEQgEgCAAgEQgBgEADgCIAEgIIACgCQgIgUgFgbQgJgygZguQgbgvgVgyQgGgNgDgNQgCgCgBgEQAAgHgDgHIgEgLIgFAEIgDAGQgFALgBAOQgCA5AKA1QAJA1AFA3QAFA2gIAxQgLALgEATIgBAJQgQAXgMAbQgPAAgPAFQgFACgEAAQgGAAgFgDgAk6CoIACAAIAAgBgAknB9IgBABIACgBIgCAAgAAEBcIAAgCIgBAAgAg5BcIAAAAIAAgCIAAACgAhkkWIABAAIgBAAgAB5klIABAAIABgBIgGgCIAEADgAAJlEIABAAIgBgBIAAABgAEwlMIABABIgBgCgADzmRIAAABIABgCgAEtmiIAAgBIgCgBIACACgAgtoHIAAAAIABAAIAAgCIgBACgAgSo3IACACIAJgIQgFAEgGACg");
	this.shape_152.setTransform(375.6,113.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(79,49,55,0.502)").s().p("AivJXIABgCIgEgCQgRgBgLgVIgEgLQAMgLAUgCQASgBAPgJIASgLIAAAAQgEgDABgFIAEgJIAFgJQADgDABgFIgDgDIgHgEIgEgDIgBgCQAAgEABgDIAFgKQACgDABgEIABgDQgDgEAAgGIAAgRQgLgPgEgZIgLg/QgEgfgJgdQgFgRACgNIgDAAQAAgMgEgJIgBgKQABgIgCgGIgDhJQgBgSAGgPIgLAGQgcAPgfAFIgCAAIgBABIgBADIgBABQgEAFgGABIADADIAKAIIANAHQADADABAEIABgBIACABIABACIADABIACABIADAFQAFALgEAJQgGANgIAKQgHAHgJAAIgCgCIgDgBIgCgBIgCgBIAAgCIgCgGIAAgBIgBABQgFAGgGgFQgGgFgIAAQgHAAAAgGQgEAEgGgEQgFgDgCgGIgFgMQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBgBQgIAAgGgGIgEgIIgCgJIgDgGIgBgCIACgGQACgFADgEIARgSIACgBQAEgCADAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIADAAIADADIADACIAFADIABABIABACIAAABIAEgBIgBAAIgDgDIAAgEIACgHIABgBIADgDQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBIAAAAIAGAAIAAAAQgDgEgBgFIgFgRQgBgFAAgDIAOghIAAgBIABAEQATgoAfgsQAZgnANgrQAJggAAghQAAgPAHgNQAAgEADgFIAGgNIAKgYIAJgQIgBAAIABgBIADgEIABgBIADgCQAGgFAHgCIADgBIACgCIAAABIAFgCIABAAIABgBIAGgEIABABQAGgDAIgCIASgIIAIABQAAgEAFgCIABABIAAgGIABgYQABgNgFgLIgBgCIABAAIgEgJIAAAAQgJgIgIgQQgHgQAFgSIAFgZQACgGACgDIAAgBIgCgDIAAgCIgBgCQgEgCgBgEIgCgJIAAgEIAEgEIABgBIAKACIAJAEQARAEAMgMIAFgFIABAAIACgBIACgEIACgCIAAABIADgFQAKgOANgKIAEgEQAAgEAHgBIAAgCIABgBIAAgCIABgCIADgCQAHgEAKgDIAbgEIAQgBQBBAMATA3QANgHAPgEQArgKArgCQAsATAJAyQAHAugPArQgPArgMArIAAADQgBACACAEQAAADAEAEQAJAIgEAJQgMgKgGgMQgDgCgBgCIgBgEIgDgFIgBgBIgBACQgDAHAAAKIABAPIAFAWQACAMgEAJIAAAAQgSgEgGgRIgKggQgGgQgDgSQgBgGgCADIgBAAQgPAAgDgSQgCgOACgOQACgPAHgNQAFgKADgLQgFgEgBgEIgDgLIgFgKIgEgJIgBgCQgUgHgVgBQgFAwgmAjQgnAlgwgGQgGgGgOABIgEgBQgLgDgHACIgBgCQgCAFAAAGIABACQADAGAFADQAGAFAHABIAFACQAHAAAHgDIADABIgBgCIAEAAIAJAAIACACIAAABIABAAIgCgDIAEAAIADgBIACABQAjASAjANQAhAZARApQAGANgDAOQgQBXhBA6QgQAOgSABQAGAbgNAdQgOAdgYAZQgLAKgOAHIAAAFIAAAJIAAAHIgBACIgBACIgEADIgDAEIAAABQAAACgDADQgEAGgCAHIgBAOIgBAEIABAAIABAlQAAAOAFAPQAQA4AcA2QAcA1gBA/IgBAYIgBABIgBADIAAACIABABQgOAfgDAhQgHAEgGAHIgUgBIgBgDIgCAAQAIgMgPgSQAKgFAAgJIADgCIgBgBQgBgDACgDQABgDADgBQAFgDgEgEQgDgCgBgEQAAgEACgCIAFgIIABgCQgIgUgFgbQgJgygZguQgagvgWgyQgFgNgDgNQgDgCAAgEQgBgHgCgHIgEgLIgGAEIgCAGQgGALAAAOQgCA5AJA1QAJA1AGA3QADAigCAhQgNALgDAUQgCAIABAGQgHANgGAQQgGARgDASQgXADgLARIgFABQgFACgEAAQgGAAgFgDgAk/CYIADAAIgBgBgAksBtIAAABIACgBIgCAAgAAABMIAAgCIAAAAgAg+BMIABAAIgBgCIAAACgAEVkHIAAgCIgBAAIABACgAhokmIAAAAIAAAAgAB0k1IABAAIABgBIgGgCIAEADgAAFlUIABAAIgBgBIAAABgADslbIAAABIABgCgAEolcIAAgBIgBgBIABACgAgJoZIAAgCIgCACIABAAIAAAAIABAAgAAbpAIACACIAKgFIABAAIAAAAIgBAAQgGADgGAAg");
	this.shape_153.setTransform(376.2,115.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(79,49,55,0.502)").s().p("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");
	this.shape_154.setTransform(369.6,113.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(79,49,55,0.502)").s().p("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");
	this.shape_155.setTransform(364.1,114.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(79,49,55,0.502)").s().p("Ag4JHQAAgFAMgWQAKgRAJgKIgBgCIAAgHIAAgNQABgEAIgJQgLgegCgoIgBhRQgCgvgFgqQgDgeAAgnIgFgwQgBgbALgJQgNgIAAgLQgBgFABgFQABgGADgCIgPgEQgBAAAAgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQgGgIgDgPQgdAdggANIAAABIgCgDIgJADQgcAHgVgFIAAABIAAAAIgEAAIgCAAIgBABIgCADIgBAAQgGAEgGAAIADADIAKAKQAEAGAGAFIADAEIAAACIABAAIACACIABABIACACIACABIABAAIABAGQACAJgEAJIgBABQgIALgLAKQgHAFgJgCIgDgCIgBgCIgCgCIgCgBIAAgCIAAgGIAAgBIgCABQgHAFgDgGIgHgFIgFgCQgIgCABgGQgEAEgGgGQgEgEgBgFIgDgNIgEAAQgIgCgFgIQgDgDAAgFIAAgKIgCgFIAAgDIACgEQAEgFAEgDIAUgOIACgCQAEgBAEABIADAAIACABIADAEIACADIAEADIABAAIAAABIAAACIABABIACgBIgDgDIABgDIAEgHIABgBIADgBQgDgFgCgFQgGgYANgKIAEAAIAAAAQATgeApg0IA+hOQAVgaAPguIAEgLQAIgQAQgPIAEgDIAAAAQANgSAVgLIACgBIAAACQAdgOAqgGIAAgDQABgDAEgBQgCgJAAgQQgDgIgBgIQAAgJADgEQgQgMgLgSQgJgQgEgTIgCgSQAAgiASgjQAPgbAUgOIAAgDQAAgNApgHQAvgIAiAZQAGAEAHAHIAJgDQA9gRAABZQAAAkgQAeQgUAogJArIgBABIAAABQAGAOAAAEIgBADQgBADgDABQgDgCgJgTIgGgPIgFABQAAAFgJAjQgDANAAAKIAEACQAcARAAAOIAAABQALAOAJARQANAbAAASQAAAVgOAfIgRApIgEANIgCACQgEAJgGAGIAAACIgCAYQAAAfgSAkQgPAfgXAPIAAACQAAASgFAIQgDAFgGAFQAEAQAAAZIAAAxQAAASAGAhQAFAbABAOQAjAwAUBEIAABkQgHAMgHAOQgMAagIAaQgRgCgEgIIAAgKQAAgNAFgKIAIgPIAAgCIAEgJQgGgMgHgTIgQgpQgQgegEgKQgFgOAAgXIAAgUQABgIADgEQgIgHgGgJQgFgKAAgIQAAgEABgDQgOgSgTg5QgQgtgCgMIAAgEIAAgEQgCgEgBgFQgBAHgIAMQgHAKgGAEIgKCcQgJCPgGAwIACAEQgQAWgIAbQgTAGgJARQgdgEAAgQgAC5IuIABAAIAAAAIgBAAgAALINIAAAAIgBAAgAkQBlIAAgBIgCgBIACACgAj4A/IACAAIgBgBgADYkVIACgBIgBAAIgBABgAC7lbIABACIAAgWIgBAUg");
	this.shape_156.setTransform(355.7,114.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(79,49,55,0.502)").s().p("ACTJVIAAgTIABgSQABgIAEgDQgEgBgCgCIAAgFIAFgcIAAgIIACAAIAAgBQgKgcgQgeQgNgbAAgoQgEgKgBgLQAAgMAFgFQgDgFgEgHIgDgIIACgMIAAgHIABgBIgDgGIAAgBQgEgMgDgNQgEgggDgNQgEgPgNgmIgDgIIgHgVIgHAKIAAABIgBAKIgKAaQgNAigEAYIgHAwQgEAcgGARQgIAaAEBCQAEA9gOAfIgEgCIgBACIAFAAIABABIABAAIAAAAIAAgBIACAGQgSAVgGAfQgHAFgFAIIgEACQgNgEgDgKIAAgUIAAgTQABgGAGgLIgBgBQgEgFAAgFIAAgJQACgHAJgIIgBgEQgKg8AAgnQAAgiAHgMQAGgLAAgZIAAgEIACgBIACAAQgDgNgBgSIAAg0QAAgmADgSIACgHIAAgOIAAgDIgBgMIABgKIABgGIAFgHIgEgCQgLgHAAgJIABgLIAAgFIABgEQgVgOgHgWIAAgnIgeAsQgqA8gZAAIgLgBIAAABQAAAEgFAIIgBABIAGAIIgBACQAFADACAGQACAEAAAGIAAACQgBAJgEAGIgGAGIgFACQgGADgIAAQgTAAgGgGQgDgCAAgGIABgGIgDACIgFgEIAAgFQgKgFgCgGQgBgCAAgJIAAgBQgDgDgBgDIgBgJQAAgHAGgJQAFgIAGgBIAAAAQADgFAEgDQgLgPAAgOQAAgHA7hpQBEh2AUg0IABAAQAKgXAggXQAqgdA2gKIAAAAIAOAEIABAAIgBgBQgBgBAAgEIAAgfQABgKACgGQgbgNgNgfQgIgWAAgnQAAg+AegjQAageAogBQAmgBAcAXQAeAYAAAkQAAAzgKAjQgSA5gqANIgKAhIAAATIADgBQADACACADIgDADQAKAEALACIAYAQQASALANAMIAMANIAHAHIAAAAIAHALIAGAKQAMAdAAA2IABAXQgBASgHAIQgBARgJAbQgNAqgCAJQgJAogFAIQgMAYgVALIgBABQAAAKgHALQgGAIgIAFIgCABIACAJIACAMIAAADIAEAVIAFAiIAABzQATAuAGA+QAEAnABBMQgRAkgJApQgPgDgEgMgAC7IdIAAgBIgBAAgAgYBrIAAgBIgBAAIABABgAjrBbIAAABIABgBIgBAAgADWj3IABgBIgEgFIADAGg");
	this.shape_157.setTransform(355,114.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_144}]}).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},6).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_150}]},3).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},83).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(314.3,46.5,84.1,128.9);


(lib.graficiarka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("mieszaniefarbywsprayu");
	}
	this.frame_66 = function() {
		playSound("mieszaniefarbywsprayu");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(65).call(this.frame_66).wait(82));

	// graficiarka
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#755E80").s().p("ABjC/IgMgCQgBABAAgHQAAgFAFgCQAEgBALABIADAAIABACIABAFQAAAHgLABIgBAAgAhjCnIgCAAIgIgBQgBAAAAgGQAAgGAFgBQAFgCAQACIABAAIACABIABAGQAAAEgDACQgDABgJAAgAhnBkIgFgrIAAgCQABgVAOgWQAPgYAAAXIgHASQgIASAAAJQAAAKAFAdQAFAeAAAJQAAAIgJAAQgFAAgGgqgABXCFIgKgUIgGgUIgHgvQAAgnAHgDIACAAIAFAQIABAZQAAAYAMAdQANAcAAAFIgCAFQAAADgGAAQgFAAgEgGgAhVgiIgDgCQAAgSgCgfQgDggAAgPIADgiQAAgEACgFIACgDIABgGQAAgGAKAAQAKAAAAAIIgFAbIgEAKQgEAIAAAEIAFA1IgBAsIgBACQgCABgDAAQgEAAgBgBgABAgrQgHAAgGgPQgFgMgFgXIgGgpIgBgIQgBgNABgKQADgUAIALQAEAJAAALIAAAVQAAAVALAeIAGAQIAFAMQAAAJgEACIgDAAg");
	this.shape.setTransform(397.9,99.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D6B0A0").s().p("AgFAMQgFgGAAgEQAAgBAGgGIAFgHQAFAEAFACQgGAEgFAIIgEAHIgBgBg");
	this.shape_1.setTransform(368.6,76.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A72E3A").s().p("AgSAMIAHgSQAIgMAVAHIAAADIABAHIAAABIAAAHIgBABQgBACgEACQgFACgIAAQgIAAgKgCg");
	this.shape_2.setTransform(371.4,79.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CB4553").s().p("AgOAEIALgOIgBgBQAHAEAIAAQACAAADgCIACADQgFAAgGABQgTAFgGAMIAEgIg");
	this.shape_3.setTransform(370.7,77.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B28A7E").s().p("AAUAIIADAFIAEAGIAAADIgKACIADgQgAgSAQIgHgFIgBAAQAHgIAAgaIACAYIACASIgDgDg");
	this.shape_4.setTransform(400.5,31.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A06456").s().p("AAqhIQAABXgIBkQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAQgYhiAihagAgDAKIAAgDIAAgCIgBgRIAAgDIABgNIAAgEQAIglAlgcQgEAbgUAoQgKAVADAYQACAMgLAEQgDgLgCgKgAAChwIADgDQAOANgXAkQgXAkgJApQgVg+A7g9g");
	this.shape_5.setTransform(398,18.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#744755").s().p("ABDFGQgvgIgQgtQgOgoAagXQAOAZAKAkQAIAdAYAUQAIAHgHAAIgGgBgAiKELQA2hqA6hrIADgBQAQAlgeA0QglBAgoA7QgHAJgGAAQgFAAgGgHgAAWBLQgWgeAYgRQAZA9BEAOQAaAFgaAEQgKACgKAAQgtAAgegngACKkuIABABIgDABIACgCgAB1lGIACAAIAEABIAAAAIgBABIgFgCg");
	this.shape_6.setTransform(386.9,38.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#885549").s().p("AAHCXIAAgGIABgEIAAAAIgBgBQgFgfgCgaIAAgEIAAgEIgCgiIgBgIIABgBIgCgFIgHABIgEgBIAAgVIAAgGQgCgFAAgIIABgFIAAADQACALAEAKQAKgFgBgLQgDgYAJgVQATgpAFgbQglAdgIAkQAHgvAngUQAJgEAJAAIADAAIgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAZB6gxB3IADgBIACgBIgBACQgLAggGALQgDgCgBgDgAATBaQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAIhjAAhYQgiBbAYBhgAgvAQQgIgSAAglQAAg6AbgfQALgOAPgHIABAAIABgBQAFgDAHgBIABABIgCAAIAIAXIgGADIgCACQgLAJgJAPQgTAcAAAjIgBAsQABAaAKANIAEgCQADgCADAAIAAABIAAANQgcgKgLgdgAgLiKQg7A9AUA/QAJgqAYgkQAWgkgNgNIgDADg");
	this.shape_7.setTransform(399.4,21);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5F4B67").s().p("AByDZIgBAAIgYgBIAFgHQALgBAAgHIgBgFIgBgBIgDgBQgCgCAAgDIgEAAQgDgOgKgXQAEAFAFAAQAGAAAAgDIACgEQAAgGgNgcQgMgdAAgYIgBgZIAJAaQAMAgAAASQAAAJAFAQIAHAZQACAIgBASQAAANAHAIIgBgEIADAKgAhtDHQgBgDgDgDIACgBQAAACAGAGIgEgBgAhrC5IACABIgDACIABgDgAhZCiIgPgBIgDgVQgGghgBggIAFArQAGAqAFAAQAJAAAAgIQAAgIgFgeQgFgeAAgKQAAgIAIgTIAHgSQAAgYgPAZQgOAWgBAVIAAgHQAAgHAIggIAHgdIAAgCIACgBIABgLIgFhXIAFhXIAAgBIAMAFIAGADIAIADIALADIAIABIgBADIgEANIgIAiQgIAWgCAWQgBANABAdIABAeQABAKACAGIgBAZIAAAPQgCABgDAHQgKATAAAnIAAApQAAAHgCAEgAhRirQgKAAAAAFIgBAGIgCADQgCAGAAADIgDAiQAAAQADAfQACAgAAARIADACQABABAEAAQADABACgCIABgCIABgsIgFg1QAAgEAEgIIAEgJIAFgbQAAgJgJAAIgBABgABBB4QgZgwAKgzIADgEIgBgCIAAgBIgJgXIADgDIACgBIAAgEIgDgXQAGAPAHAAIADAAQAAAXADAPIADAJIgCAAQgHADAAAnIAHAvIAGAUIgGgLgABOgSIAAABIAAADIAAgEgAA2hAQgLgeAAgVIAAgUQAAgMgEgIQgIgMgDAVQgBAJABANIABAIQgHgZgJgTQgGgMgGgIIgBgCIAQAAQAHAAAFACQAQAEAGAPIABABQADAKABANIAFAyIAAAnIgGgQgAgzhsIABgBIgEAPIADgOgAhgjYIAAAAIAAABg");
	this.shape_8.setTransform(398.5,97.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#48394F").s().p("ABpDBQACgSgCgIIgIgZQgEgQAAgKQAAgRgMggIgKgaIgEgQIgDgJQgDgQgBgWQAFgCAAgJIgFgMIAAgnIgFgyQgBgOgDgJIgBgCQgGgOgQgEQgGgCgGAAIgQgBIAAAAIgEgGIAAgCIgBgBIgCAAIgCgCIAAABQgEACgEAGIgCACIgBABIAAACIgEAFQgCAEgBADIAAAAIgFAIQgKARgIAiIgBAAIgDAPIgCALIgBAFIAAACIgBABQgJAxgDAgQgCgHgCgJIAAgeQgBgdABgNQACgWAIgXIAIghIAEgOIABgCIgIgBIgMgDIgHgDIgGgDIgNgGIAAgCIAAgDIAAgIIAAgBIgCgKIACAAIABAAQAQAGAeAEQAoAGBBAAQAIAAAHgCIAAACIAAAEIABANIAAADIACAUIAHA5QABARgCAgQAAATACAPQAAAAgBAAQAAAAgBAAQAAABAAAAQgBABAAAAIAAAAIAAADIAAADIAAACQAAAFAMAuIADAJIABAGIAGAYIAAABIACAHIACAHIABAIQADANgBAtIAAAHIAFAnIABAEQgHgIgBgNgAhkDLIgBAAIgEAAQgGgGAAgCIACgEIAAAAIAEgDIAEAAQAJAAACgBQADgCABgEIgCgGIgBgBIgCAAIAFgEIgCgDQACgFAAgGIAAgpQAAgnAKgUQADgGACgBIAAAFIABAuIABAPQAAAKgCAQIgDAQQgFAaAAANIAAABQAAAEABABIgBACIgVgBg");
	this.shape_9.setTransform(398.5,97.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#59373F").s().p("AjJC3QgNgOAAgNQAAgHAkg7IArhHQBAhxgBgYQAKgHAIgOQAKgTAKgJQAHgGAsgQIAdgKQgKAJgKAOQgVAdAAAVQAAAUAUAXQAfAjA8AAQAkAAAVgQQgOAWgXAVIgiAaIgDADIgMAKIgDgBIgMgEQgDAAgCADQgCACgDAAIgJgEIgEgEIgBAAIgJgKIgQgTIgDgDQgpg3AAglQAAgQgDgIQgFACgDAAIAAAXQAAALANAfQALAdAIAJIAHAJIACAEIADADIADACIAbAaQgCACAAAEQAAAFAGAFQAHAHANABIADACIABABQAKAHAIAAIADAAIAEAAIAMgBQASgDAVgOQARgLAQgRIACgCIABgBIACgCQgDAJgDAVQgDAOADAiQAAAggQASIAAAUIADACQgMARgNAPIgSASQhRgBgbgHQhAgQAGg5QAFg+gKgfIgFACIAAA8IgCABQgCAMgMASIgVAeQgHATgKANQgSAYgpAAQgTAAgPgQgAgYB5QARAsAtAJQAQADgKgJQgYgUgJgdQgKgkgMgZQgbAXAOAogAg2hhQg6Bqg2BqQALAPAMgRQApg7Alg/QAdg0gQgmIgCACgAgGhMQAjAvA8gKQAagEgagFQhEgOgZg+QgZASAXAegADPCdIAIgKQgLAUgPALIASgVgAC/iLQAEAGAAADIAAACIgEgLg");
	this.shape_10.setTransform(389.8,53.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6F453C").s().p("AgeCCIgBgBIAAgCIgBgBIgCAHIgBABIgEABQAxh3gZh5QAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAIAAgBQAHABAFAEQAPALAAAgQAAA3gXBKIgGAZQgEAPgCAKIAAAHIAAAAQgCAJgCAAQgEAAgCgGgAAZg8QAAglgSgOQgQgMgXAJIgHAEIgFACIgIgXIACAAIAAgBQAIgCAKgBQAggBAaAUQAbAVAAAfIgBAaQgDAcgGAWQgPAygfAPQAchoAAghg");
	this.shape_11.setTransform(405.7,18.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4F3137").s().p("ACTJVIAAgTIABgSQABgIAEgDQgEgBgCgCIAAgFIAFgcIAAgIIACAAIAAgBQgKgcgQgeQgNgbAAgoQgEgKgBgLQAAgMAFgFQgDgFgEgHIgDgIIACgMIAAgHIABgBIgDgGIAAgBQgEgMgDgNQgEgggDgNQgEgPgNgmIgDgIIgHgVIgHAKIAAABIgBAKIgKAaQgNAigEAYIgHAwQgEAcgGARQgIAaAEBCQAEA9gOAfIgEgCQgBgBAAgEIAAgBQAAgNAFgaIACgQQACgPAAgKIAAgQIgCguIAAgFIAAgPIABgZQADghAJgxIABgBIAAgCIABgFIACgLIAEgPQAJghAJgRIAGgIIAAgBQAAgCACgEIAEgGIABgCIABgBIABgBQAFgHADgBIAAgCIACADIACAAIABABIAAACIAFAFIAAABIABACQAGAJAGAMQAJASAHAaIAGApQAFAWAFANIADAXIAAAEIgCAAIgDADIAJAYIAAABIABACIgDAEQgKAzAZAwIAGALIAKAVQAKAXADAOIAEAAQAAADACACQgLgBgEACQgFABAAAGQAAAGABAAIAMABIABAAIgFAHIAYABIABAAIABABIAAgBIgDgKIgFgnIAAgGQABgtgDgOIgBgIIgCgHIgCgGIAAgBIgGgZIgBgFIgDgJQgMgwAAgFIAAgBIAAgDIAAgDQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABAAQgDgOAAgTQACghgBgQIgGg5IgCgVIgBgDIgBgMIAAgEIAAgDQgHACgIAAQhCAAgogFQgdgEgQgHIAAAAIgBAAIABABIgDgBIACALIAAAAIABAJIAAADIAAACIAAABIgFBYIAFBXIgBALIgCABIAAABIgHAfQgIAgAAAHIAAAGIAAADQABAfAGAhIADAVIAPACIABACIACADIgEADQgQgCgFACQgFABAAAHQAAAGABgBIAIABIgBADIgBABIgCADIgCACQADACABADIAEABIAEABIABAAIAVAAIAFAAIABABIABAAIAAAAIAAgBQAHAMAAAwIgBADIgBACIABAAQAAAAABABQAAAAAAAAQAAABAAABQAAABAAABQAAAAAAABQAAABAAAAQgBABAAAAQgBAAAAABQgFABgSAAQgeAAgGgQIAAgUIAAgTQABgGAGgLIgBgBQgEgFAAgFIAAgJQACgHAJgIIgBgEQgKg8AAgnQAAgiAHgMQAGgLAAgZIAAgEIACgBIACAAQgDgNgBgSIAAg0QAAgmADgSIACgHIAAgOIAAgDIgBgMIABgKIABgGIAFgHIgEgCQgLgHAAgJIABgLIAAgFIABgEQgVgOgHgWIAAgnIgeAsQgqA8gZAAIgLgBIAAABQAAAEgFAIIgBABIAGAIIgBACQAFADACAGQACAEAAAGIAAACQgBAJgEAGIgGAGIgFACQgGADgIAAQgTAAgGgGQgDgCAAgGIABgGIgDACIgFgEIAAgFQgKgFgCgGQgBgCAAgJIAAgBQgDgDgBgDIgBgJQAAgHAGgJQAFgIAGgBIAAAAQADgFAEgDQgLgPAAgOQAAgHA7hpQBEh2AUg0IABAAQAKgXAggXQAqgdA2gKIAAAAIAOAEIACAAIgCgBQgBgBAAgEIAAgfQABgKACgGQgbgNgNgfQgIgWAAgnQAAg+AegjQAageAogBQAmgBAcAXQAeAYAAAkQAAAzgKAjQgSA5gqANIgKAhIAAATIADgBQADACACADIgDADQAKAEALACQANAIALAIQASALANAMIAMANIAHAHIAAAAIAHALIAGAKQAMAdAAA2IABAXQgBASgHAIQgBARgJAbQgNAqgCAJQgJAogFAIQgMAYgVALIgBABQAAAKgHALQgGAIgIAFIgCABIACAJIACAMIAAADIAEAVIAFAiIAABzQATAuAGA+QAEAnABBPIADgBQAHAGACAPIADAUIAAAcIgFADIAAAAIgBgCIgBgBIgDACIAAABIgBABIgBAAIgDABIgCABIgOAAQgYAAgFgPgAC9IeIABABIAAgCIgBABgAjSCEIgHATQAKACAIAAQAJAAAFgCQAEgCABgCIABgBIAAgHIAAgCIgBgHIAAgDQgJgDgGAAQgKAAgFAIgAjRBwIgLAPIgDAIQAGgNATgFQAHgBAFAAIgCgDQgEACgCAAQgIAAgIgEIABABgAjnBtQgGAGAAACQAAADAFAGIABABIAEgGQAGgKAGgDQgFgDgFgEIgGAIgAjrBbIAAABIABgBIgBAAgAACkwQgsAPgHAGQgKAJgKATQgJAOgJAIQAAAXg/BzIgrBHQgkA5AAAHQAAANAMAOQAPARAUAAQAoAAATgZQAKgNAGgTIAWgdQAMgSABgMIADgBIAAg8IAFgBQAKAegFA+QgGA4BAAQQAbAHBRABIASgSQANgPAMgQIgDgDIAAgUQAQgRgBggQgCgiACgOQAEgVADgKIgCACIgBABIgCACQgRASgQAMQgVAOgTADIgLABIgEAAIgEAAQgHAAgLgIIAAAAIgDgCQgNgCgHgGQgGgGAAgEQAAgFABgCIgagaIgCgCIgDgEIgDgEIgHgIQgIgKgMgdQgMgeAAgMIAAgXQADAAAFgCQACAIAAARQAAAkAqA3IACADIARAUIAJAKIABAAIADAEIAJAEQAEAAACgCQACgDADAAIAMAEIADACIALgLIAEgDIAigbQAXgVAOgVQgVAPgkAAQg9AAgegjQgTgXAAgTQAAgWAUgdQAKgOAKgIIgdAKgADAApIgSAWQAOgMAMgUIgIAKgAC0j0IAAgCQAAgDgEgGIAEALgADWj3IABgBIgEgFIADAGgABOmaIgBABIABAHIACAjIAAAEIABAEQACAaAFAfIABAAIAAABIgBAEIAAAGQABADADABQAGgLALgfIABgDIACgGIAAAAIABACIAAACQADAGADAAQADAAABgJIAAgBIABgHQABgJAFgPIAGgZQAYhLAAg3QAAgggPgLQgGgFgHAAIgDAAQgJAAgJAEQgoATgHAwIgBAEIgBANIAAADIACASIAAACIgBAEQAAAJACAGIAAAFIAAAWIAEABIAHgBIACAFgABtk3IAKgCIAAgDIgEgGIgDgFIgDAQgABBlEIABAAIAHAFIADADIgCgSIgCgZQAAAbgHAIgABIlwIAAgHIgBAAIABAHgABOpQQgPAHgLANQgbAgAAA5QAAAlAIAUQALAdAcAKIAAgNIAAgCQgDABgDACIgEACQgKgNgBgaIABgtQAAgjATgcQAJgPAMgJIADgBIgBgBIAGgDIAEgDIAHgDQAYgKAQANQATAOAAAkQAAAhgdBqQAggQAOgyQAHgWACgcIABgaQAAgggbgVQgZgUgiACQgJAAgJACQgHACgGADIgFgBIgCAAIAFACg");
	this.shape_12.setTransform(391.3,65.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D6B0A0").s().p("AgLALIgCgCIABgDIAAgEIADgEQADgFAEgBIACgCIAEgCIADAAIABAAIACABIACABIABACIABABQAAADgCADQgDAFgHAFIgEADIgDABQgDAAgDgCg");
	this.shape_13.setTransform(363.8,73.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DD8892").s().p("AAZAeIgBABQgGgEgCgGIgDgIQAAgFAEgBIAEADIACAFQACAEADACQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAIAAACIgBACQgBAEgDAAIgCgBgAgRgPIgGgCIgFgDIgCgCQgCgEACgBIADgCIADgBIADACIAEADIAEACIABACIACACQgBAEgEAAIgCAAg");
	this.shape_14.setTransform(363.4,74.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CB4553").s().p("AATAoIgHgGIgDgDIgFgEQgEgCgFABIgCAAIAAgBQADgDACgFQACgKAEgHQAEgHAGgEIAAACIABACIADAFIAFADIAHAHIADADIAEABIABAAIgIALQgHAHAAAJIgBAGIgBAAQABgDgDgCgAAXAVIAAgCIAAgCQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAgBAAQgDgCgBgEIgDgFIgEgDQgEABAAAFIADAIQADAGAGAEIAAgBQAFACACgFgAgegGIgDgBIgCgCIgCgJQAAgEAAgEIAGADIAFACQgEAHACAJgAgVgdIgFgCIgEgDIgDgCIAKgHIACgBQgBAEADADIAHADIgHAFIgCACIAAgCg");
	this.shape_15.setTransform(364.3,75.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A72E3A").s().p("AANAvIgBgBQgBgFACgDIADgIQACgFAEgCQAEgDABgDIAAgBQAGgBAGABIAAABQAAABABAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAACIAAABIABABIAAACIAAADIAAACIgCABIgGAHIgFAEIgEAFIgJABIgCgCgAASAMIgEgCIgDgDIgHgGIgEgEIgDgFIgBgCIAAgCIAEgDQAEgDAAgCIAAAAQADAHAHAFQAGAEAEAGIADADIgCAAIgCAAIAAABIgCACIgCADIAAABIgBAAgAglgmQgEgCABgFQAGgCAFgBIACACIAFADIAAABIgCABIgHAHIgGgEg");
	this.shape_16.setTransform(366.2,75.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B28A7E").s().p("AjFDxIgCgIIAAgCIAAgCIgBgFIACACQAGAEADgDIAFgDQAHgFADgGQACgDAAgDIgBgBIgBgCIgCgBIgBgBIALgFIACACQABAEACACIACACIAAAFIABADIAAAAQgBgCgHgBIgDACIgGADIgCACIgFAGIgHAHIgDAHIgBAIQgBAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAABQgDgEAAgEgAjIDbIABgCIAAAEIgBgCgACXi1QgBgEgCgIIACgCIAAg1QAVALAeACQgGAGgBAEQgBADAAAOIAAAMQABAHAEADIgFAFQgMAKgHAAQgQAAgHgKg");
	this.shape_17.setTransform(382.5,51.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#744755").s().p("AAOBBQAOgMAIgQIABABIADADQgBAZACAXQACASgDARQgigLAIgwgAhDgJIAngsIAIABIADADQgYA8g1AvQgdAcgdACQAmguAvgzgAA0hSQgMgMgKgOQgIgLAOgEQAdAbAmAOQAVAHAXADQAGABAAAHQgUAJgTAAQggAAgegbg");
	this.shape_18.setTransform(384.7,54.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#755E80").s().p("AhnC5QgDgFABgGQACgIAHgCQgIgRABgWQABgMAFgLIAHgLQgGgGgDgIQgDgGAAgIIABgJQABgIAEgGIgCgJIgBgCQgFgGACgHIABgBQgIgpgBguQgBghAJgfQADgKgBgKIAAgBQgGgBgEgEIgBgBQgEgHAFgGQAGgJAJgBQAaAjgQAxQgUA+AYBEIACAIIAAAAQAQAogNAvQgGAWAHAXIABADIgBAFQgBADgEABQgCAEgEACIgCACIgFABQgFAAgFgEgABMBEQgGgYAAgaQAAgNALgCIAHAEIADADQAAAkAPAhIAIASQgCAMABAKQgagJgLgqgAAZiTQgCgSABgSIAEgDIAGgCIAGAEIADADQgBAaAMAXQAAASACARIABAHQgZgQgHgpg");
	this.shape_19.setTransform(397.4,98.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5F4B67").s().p("AhTDTIAAgEIABAEgABQCFQgagyAAgbIACgNIADgOQAAgIgFgDIAAgCQAAgCgFgHIgGgIQgDgEgCgGIgDgIIABgCQgOgdgPgtIgUhCIAAgHIAAgDQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIAAABQAcACAcAGQgBAdABAcQgLgXABgbIgDgDIgHgEIgGADIgDADQgCASADARQAGApAaAQQADAXAIAVIAUAkIAFAGQAbAsgGAzIgBAHIgHgSQgQghAAgkIgDgDIgGgEQgMACAAAMQAAAaAHAYQALArAaAJQACAhAUAVIAAgDIAAAFQgQgBgGADQAAgRgagygAhqBkQACAHAGAHIgGALIgCgZgAhyAeQgLhcAAhBQAAg6gCgZIALAFIgBABQgBAFgEAFQgBACAAADQACAFAFACQAUAHAVgBIAYAAIgDAEQgrBVAJBlQACAXAAAVIgDgIQgXhEAUg9QAQgxgbgjQgJABgGAIQgEAGADAHIABACQAFAEAFAAIAAABQABALgCAKQgJAfABAhQABAtAIAqIgCABQgBAHAEAGIACACIACAIQgEAHgCAIIgFgvgAghiwIAEABIgHAGIADgHgAA1jDIAJgFIgBAFIgIAAg");
	this.shape_20.setTransform(398.1,95.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#48394F").s().p("AhiDQIADgCQAEgCACgEQADgBACgDIgBAFIAAABIAAADIAAADgABoCLQgBgKABgMIABgGQAGgzgbgsIgFgHIgUgkQgIgVgDgWIgBgHQgCgRgBgSQgBgcABgdQgcgFgcgDIAAgBIAAAAQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAIgCAAQgIgCgEAEIAAAAIgBACIgBAAIAAAAIgBAAIgBABIgEAAIgDAHIgFAGQgFAHgDAIIgBgBQgQAkgCAyQgBAdABA7QgBBIABARQACAWgIAZQgGATgCANIgBgDQgGgXAGgWQANgvgQgoIAAAAQAAgWgCgWQgJhmArhVIADgDIgYAAQgVABgUgHQgFgCgCgFQAAgDABgDQAEgEABgFIABgBQAnAOBhAAIAbgDIAFgCIABAAIAIAAQgCAPAAAdQAAA6ABAPQACAZAGAVQADANAFALIADgBIAMAXIANAZQATAmADAWQACAPgBAtIAAACIABAhIAAADQgUgVgCgig");
	this.shape_21.setTransform(398.3,96.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#59373F").s().p("AgPC6QgpgNgMgBQgMgMgDgTIAJgKIAJgKIAKgbIgCACQAQghALgjQgCgHAAgJIgHgGIgOAYQgSAfgVAdQgbAkggAiQgLAKgFAMQgjAGgUgKQgJgIgJgHIABADIgBgBQgDgEgBgHQgCgHADgHIACgKIAAAAQApguBah1QANgRAMgVIAKgSQAGgMACgIQAEgTAMgQIAHgGIAHgFQANgKAEgJIABABQAQgLAVgGQARgFAQgCQggAcgJAKQgNAPAAAWQAAAUAJANQAUAdA7AAQBAAAAVgWQAJgJAAgRQgCgWgHgWQgHgXgKgLQAOAIAPAMIAEAFIADAFIgCAFQAlA8gnBCQgLAVgQAKIgIAHQgKAHgKADIgGAEQgTACgSgEQgdgIgYgRIgCAAQgmgtgCAAQgEAAgBABIAAAGQAYAiARASIAQAPIAAACIAKASQAQARAfABQAbgBATgPIAJgDQAMAFAFALIABABIgEAJQgIAQgBAGQAAAfgXAZQgKAJgFAIQglARgoAMQgigEgbgIgAgvBYQgJAwAjAKQADgQgCgSQgCgYABgZIgDgCIgBgBQgIAQgOAMgAiBANQgvAzgmAuQAdgCAdgcQA1guAYg9IgDgCIgIgBIgnArgAgfhVQAKAOAMALQAuAsA2gaQAAgGgGgBQgXgEgVgHQgmgNgcgbQgOADAIAMgAjbDDIAAAAIAAAAIgBgCIgBAAIgBgDIgCgEIAFAGIACABIABACIgCABgAC3gCIABADIgEABIADgEgAD0hQQACAIAAAFQAAAGgDAJIABgcg");
	this.shape_22.setTransform(390.9,52.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A06456").s().p("AA6AHQAGgSABgVIgBgQIgCgCQgcABANgMIARAAIADABQAMAigIAlQgIAhgLAdQgHgeANgkgAhABBQgCgIgDgHIgBgEQAAgJgHgHIAAgCQABgHAEgGQADgDAAgFIAAgCIACgCIgDABQgOAEgLgGIAAgCQACgFAHgCIADgCIABgBQgHACgIgGIAAgCQAFgJAIgHQADgDAEgCIACgBIAHgCIgCgBIgNgFQgDgBgBgEIAAgBQAMgIgHgHIgCgCIABgBIABAAIACgBIAAAAQANAAAMABIAFACIAAABQgEAHgJACIgCABIgBABQALgBAUAIQABAGgGACQgPAFgPAHIgFAEIgBABIAAABQAMgEALAIIAAADQAAADgEABIgFACIAFABQAEAAABAFIAAACQgCAGgEAHIgDAHIAAACQgBADgDACQgBADACADQAFAIAAAJIABABQAFAIgDAJIgBADIgDABQgEAAAAgFgABNgoIgHgaIACgBQAYAJACAcQAAAPgEANQgKgOgHgYg");
	this.shape_23.setTransform(404.3,16.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#885549").s().p("AAtB3IAAgiIAAgBIAAgCIAAgHQgBgNgEgJQgEAGgBAPIAAAIIAAAAQgBgbgIgQQgJgRAAgTIAKgpQAAgFgDgCQADgFAAgGIgBgIIAegXIAHgEQACgFAEgCQADgCAEABQAJgFAIgBIgBABIgCACQAiBFggBIQgJAWgPATQgSAVgFAUIAAgCgABDg5IABAPQgBAVgGATQgNAjAHAeQALgdAIghQAIglgMgiIgDgBIgRAAQgNAMAcAAIACACgABJhLIAHAZQAHAYAKAOQAEgNAAgOQgCgdgYgIIgCABgAhaAyQgRgZAAgYQAAgfAPgeQAFgKAGgJIACACQAHAHgMAIIAAABQABAEADABIANAFIACABIgHACIgCABQgEACgDADQgIAHgFAJIAAACQAIAGAHgBIgBAAIgDACQgHACgCAGIAAACQALAHAOgFIADgBIgCACIAAACQAAAEgDAEQgEAFgBAHIAAACQAHAHAAAJIABAEQADAHACAIQAAAHAHgCIABgEQADgJgFgHIgBgCQAAgJgFgHQgCgEABgDQADgCABgDIAAgCIADgHQAEgFACgIIAAgCQgBgEgEgBIgFgBIAFgBQAEgBAAgEIAAgCQgLgJgMAEIAAgBIABgBIAFgEQAPgHAPgFQAGgCgBgFQgUgJgLACIABgBIACgBQAJgCAEgIIAAgBIgFgCQgMgBgNAAIAAAAIgCABQAKgQAPgNIANgHQAGgDAGgBQgGAGgFAJQgCADABAEIACADIAHADIASAEQgBAFAEAEQAEAFAFAAQAIABAJgCIABAEIgCAAQgOABAAAZIAAAIQABAFAGADIALgJIgFANQgGATAAAIIABAKIgbA2QgKAFgLADQgDABgCACQgCADAAAEIABABIAGACQgggJgSgcg");
	this.shape_24.setTransform(404,17.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4F3137").s().p("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");
	this.shape_25.setTransform(388.7,64.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6F453C").s().p("AAEBsIAAgBQAFgUASgVQAPgSAJgWQAghJgihFIACgCIABgBIAIgBIAAAAIAEABIABAAQAGADAFAFQAHAJADARQADASAAATQAAAkgYApQgSAggEAVIgEgFIgEAAIgBAGIACAHIgFACQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEAAQgIAJgEANIgCAHIgBAVQgGgQgBgNgAg0BOIgdgFIgGgCIgBAAQAAgFACgDQACgCADAAQALgDAKgGIAcg1QABAhAJAlIAAADIABADQgLADgOAAIgGAAgAgYhUIgBgEQgJACgJgBQgFgBgEgEQgEgEABgGIgSgDIgHgEIgCgDQgBgDACgEQAFgJAGgFIAAgBIALgBIALgBIACAAQApAAAYAXQgMAFgLAJQgOAKgDAFIgDAAg");
	this.shape_26.setTransform(408.1,19.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6D433B").s().p("AgcBsIgBgFQACgIAHgHQAFgFADgBIABAJQgIAIgJAUIAAgLgAgFBUIAAgQIgCABIACgJQAFgOAAgNQAAgOAJgZIAFgMQgDAAgCgDQgDgFgDgJQgDgOAAgJIAAgFQADgFAHACQAAgRgHgNQgGgNAAgFIABgEIAEACQAJAEAJARIADAFIABABIABAEIABAEQADANABAOIAAAIIAAAFIAAABIgGAaIAAACIgFAMIgBADQgLAXAAAEIAAADQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAAABIgBAEIgLAyQgDgFAAgCg");
	this.shape_27.setTransform(420.7,18.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#523237").s().p("AgxAWQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAIgCIAIAAIAHAAIAAAFIADAFIgDAAIgXAAIgBABQgBAAAAgGgAArgGQACgDAAgEQAAgFgDgCQAAgFADgCQADACACADIAAAEIAAANIgBABIgEACIgCgEg");
	this.shape_28.setTransform(397.5,78);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CB4553").s().p("AATAuQABgDgDgDIgHgGIgDgDIgEgEQgEgDgFABIgBAAIAAAAQACgDACgFQACgKAFgHQAEgHAGgEIAAACIAAACIAFAFIADAEIAHAIIADACIAFABIABAAIgJALQgHAHgBAJIgBAGgAAEAGQAAAFACAFQACAFAGADIAAAAQAGADACgGIAAgCIAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQgDgCgCgEIgCgFIgFgDQgDABAAAEgAgegGIgDgCIgCgCIgBgJQgBgFABgEIAFAEQADACADAAQgFAHACAJgAgVgdIgEgEIgEgDIgDgBQAEgEAGgDIACgBQgBAEADADIAGAEIgGAEIgCACIgBgBg");
	this.shape_29.setTransform(362.7,76.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DD8892").s().p("AAXAeIAAAAQgGgDgCgFQgCgEgBgGQAAgEAEgBIAEADIADAGQABADAEACQAAABABAAQAAAAABAAQAAABAAAAQABAAAAABIAAACIgBABQgBAFgCAAIgEgCgAgRgQQgDAAgCgCIgFgDIgCgDQgBgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAQABgBABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIACAAIAEABIAEADIAEADIABABIABADQgBADgEAAIgCAAg");
	this.shape_30.setTransform(361.8,75.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A72E3A").s().p("AANAxIgBgBIgBgCQgCgEACgEIAEgIQACgEAEgCQADgDACgDIAAAAIAMAAIAAABIABACIAAACIAAACIAAABIAAACIABACIgBACIgCACQgCAEgDACIgFAEIgEAFIgFAAIgFAAgAANALIgDgCIgHgIIgDgEIgDgFIgBgCIAAgCIAEgDQAEgDAAgCIABAAQACAHAHAGIAKAKIADADIABAAIgDABIgDAAIAAABIgBACIgCACIgBAAIgFgBgAgkgnQgEgDABgEQAGgCAGAAIACABIAEADIAAABIAAAAIgCABIgIAHIgFgEg");
	this.shape_31.setTransform(364.6,76.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#755E80").s().p("AhAC7QgCgCAAgEIAAAAIAAgBIABgFQABgCADgBIACAAIAAgBIAEACIACABIABACIABACIAAAEIAAABIgBADIgCADIgFACIgFgEgAhHCdIgEgBIgDgCIAAAAIgBgCIAAgCIABgCIABgCIAFgDIAAAAIADgCIAKABIACAAIACABIADAEIABADIgBACQAAADgDABQgGACgFAAIgFgBgAhFCDQgGgKACgQIAAgEIADgoIAAgDIAAgBQAAgKgCgIQgEgMgLgKQgHgIgEgHIAAgHQgBgDACgDIgBABIgBAAIgBgFIgBgBIgEgSIgBgEIgBgEIgCgNQgCgJAAgJIAAgGIgBgBIgDgCIgBAAIgBgCIAAgIIAAgBIAAgBIAAgCIgBAAQAAgEADgDQACgDACgEIgCgBIgCgCIgBgBIgEgDIgBgBIgBgMIACgBIgBgKQAAgHADgGIAGgNIABgCIgDgEIgEgFIgBgBQgCgCAAgDQABgEADgBIADgBIAHADIAGAFIAEAGIAEAIQgBAEgDAEIgFAIQgEAGAAAGIgBALIAAABQAFAEAEAGQADAGgCAHQgCAGgDAFQAGAGgBAJQABALAEAKQADAKgBAMQABAMgGAKIACgBQAIAFAHAGQAJAIAGAMQAKAWgBAYQgCAXADAYQABAPgHAJIgEAGQgEgEgCgEgABxBpIgDgJIAAgMIgFgRQgCgFgEgDIgHgLIgBgCIgCgFIgGgOIAAgBIABgCIADgBIADgBIAAgBQAMAGAGAMQAFANAEAMIABAEIAAACIABABQADAOABAQIAAAAQgCADgFACIgDgBg");
	this.shape_32.setTransform(397,98.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5F4B67").s().p("Ag2DPQADgDABgEIgBgCIgCgCIAAgBIADACIAEABIAFAAIABgBIAAACIgBAEIABACQgEgDgDADIgIAEIABgCgABdDGIAFgJQAEgEgCgFIgDgJIABgCIAAgBIADAGIADgCQAAAIAJADIAFACIgBAEIABABIADACIAFABIgBADIAAABIgVgBQgDABgCADIgBABIABACIgDABQgBgDgCgDgAhEDAIAAABIAAABIgDABIADgDgAg5C5IgEgBIAAAAIgCABIAAgCIABAAIAHACIAAABIAAABIgCgCgABoChIAAAAQgNgXgWhEQgVg9ABgGIABgDQgRgdgOggIgKgZIgDgHIAAgEIgCgDQgEgIgCgIIAAgBIgCgEIgCgGIgCgHIABAFIACgBIAAgBIgDgDIAAgCIAAgBIgFgLIABgGIgBgBIgEgDIgBgBIAAgBIgCgDIACAAIgCgFIAAgFIgIAAIALgKQAMAEAagBIAAAJIgDACQAFAJABASIAAAHQABAPAEAPQANAzAVAxIASAsIAGAPIACAFIAFAKIADADQAEACACAGIAFAQIAAANIADAIQAFAXACAXIgBgBIgDgBIAAABIgEABQgCAAgDACIAAABIgBgFgABUBGIAAAAIAAgBgAhKCZIABgFIABgDIABgBQACAEAEADIAEgFIACAFIAAAEIgCgBIgKAAIgDACIAAgDgAhTBWQgKgbgEgdIgDgQQAEAHAHAIQALAKAEANIABAOIABAEIAAABIAAACIgDApQgDgOgFgOgAhfgDIgCABQAGgKgBgLQABgMgDgKQgEgKgBgLQABgJgGgGQADgGACgGQACgHgDgGQgEgGgFgDIAAgCIABgLQAAgGAEgFIAFgJQADgDABgFIgEgHIgEgGIgGgFIgHgEIgDABQgDACgBAEQAAADACACIABABIAEAFIADAEIgBABIgGAOQgDAGAAAHIABAKIgCAAIAAgLIgBgiIAAgtIATAMIAIAFQANAGAMADIABACQAEAFANAAIACAAIgDADIgFAGIgJAQIgBACQgCAJAAAKIgCgBIAAAAIgEABIgCAAIgBABIgBACQgEAKAAALQAAAsAEAqIADAbQgHgHgIgEgAhmgCIABADIABAAIABgBQgCADABADIgCgIgAhxgwQgEgLgBgLIABABIADACIABABIAAAFQAAAKACAJIACAMIgEgSgAh5hUIgCgVIABAAIAEADIABABIACACIACACQgCAEgCADQgDADAAADIgBAAgAApicIACAAIABAAIAAABIgBACIgCgBIAAACIAAgEgAgEjLIADgBIAAACIgDgBg");
	this.shape_33.setTransform(397.2,97.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#48394F").s().p("AhGDcIgEgCIgCgFIAAgBIACgEIADgFIACgBQAAAEACACIAGAEIAEgCIACgEIABgDIAAgBIAAgDIAAgCIgCgCIAAgBIAAgBIgGgBIgCgBIAAgEIgCgBIgFgGIgDgCQAIABAIgDQADAAAAgDIABgCIgBgEIgDgDIgCgBIAAgEIgBgFQAGgKgBgOQgDgYACgXQACgYgLgWQgGgMgJgJIgDgbQgEgqAAgsQAAgLAEgKIABgCIACAAIABgBIAEAAIAAgBIACABIAAACIAAAHQADA3AJA1QAKA1ABA3IACAkIACATIAEAjIABAHIABAEIgBABIgEAAIgFgBIgDgCIABABIABACIABADQAAAEgDACIgCACIAAABIgEABIgIgGIACAGIgCABIgBAAIgBAAgAB4DJIgCgCIgBgCIAAgEIgFgCQgJgDAAgHIACgEIAAgDIAAAAQACgCACgBIAEgBIAAgBIAEABIAAABQgBgXgGgXIADACQAFgCACgDIgBAbQgBARACANIgCgBIABABQACABABADIACAAIAAACIABAEIABAEIABABQgCAEAAAEIgFgBgAhRCvIAAAAIAAAAgAByBVQgDgMgGgNQgGgMgLgGIAAAAIgEABIgCACIgBACIAAABIgTgtQgUgxgOgzQgEgPgBgPIAAgHQAAgSgGgJIADgCIAAgJQgaABgMgDIgLAJIgHAAIABgBIADgCQgIABgNAAIgDAAQgNAAgDgFIgBgCQgNgDgNgGIgIgEIgTgNIAAgPIAAgBIAAgDIAGADIAFADIAJAEQAaALAcAEIADAAIADABIASABIAQAAIAEgBIgCgBIAFgBIADABIAAgBIABAAIAIgBIAEgBIAPgCIAAABIgBADIADAAIAAAAQAAgLAKABIAGACQAEADAAAFQAAADgDADIgBACIABAFQAAAHgDAKIgBACQABAHADAGIgBACIgBAAIgDAAIAAAEQgFAgALAjQATA4AeA1QAOAbAHAeIgCgEgABdBNIgEgKIABABIAHAMIgEgDgAhJBLIgCgPQACAIAAAKIAAgDgAgIh+IACAEIAAABIgBAAIgBgFg");
	this.shape_34.setTransform(397.2,96.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#744755").s().p("AAlCgQgMgEgMgHQgIgFgIgDQgJgDABgJQABgEADgCQACgDADgBQALACAKAGQAJAFAKAEQAMAEANABIAYADQAIABACAJQgNAMgTAAQgNAAgPgGgAiZA8QAKgQASgQIAYgYQAagbARgjIACgDIAEgIIABAAIAAgCQAHgPAFgPIARgUIAFgIIAEgEIACgDIAWgdQABAfgUApQgWApgdApQgdAmgfAhQgYAagPAbQgLgZAQgcgABMhSIgQgaQAAgSANAKQAHAFALAOQARAUAeABQAZACAAAGQAAAGgFACQgFADgSAAQgkAAgXgZg");
	this.shape_35.setTransform(386.7,55.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#59373F").s().p("AAEDcIAAAAIAAAAgAgYDTIACAAIAAABIgCgBgAjfDGIgBAAIAAgBIgBgBIgBgBIgDgGIAHAHIABABIgCACIAAgBgAAYDDQgFgGgJgBIgUgFIgIgCIgOgIQgRgKgMgMIgIgIIgCgDIAAgBQACgDAEgDQATgNAOgRQALgNAIgQIADgEIADgNQAFgVgBgNIgGgOQgMAMgJASQgMAbgWASQgjAbgmAVQgjATgSAcIAFAFQgRACgSgCIgGgGQgHgHgBgJIgBgTQgBgLAGgIQAGgJABgHQAUgMATgQQgQAbALAaQAPgcAYgZQAfgiAdgnQAdgoAWgpQAVgpgBgfIgXAeIgCACIgEAFIgFAHIgRAVIgIAIIABgEIAAgBIAAgDQAMgRAKgRIAEgKIgGABQgBgBAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAGgHAGgEQADgHAFgGIAFgJIABAAQAHgKAfgWQAcgTAJAHQAHgDAHAAIABACIABAEIABAAIAEAFQgFgCgGAKQgOAVAAAZQAAAJACAIIAGADIAAADQAAAQAPAQQAYAbA0gBQAlAAAPgSQAHgJACgJIADgGQACgEAAgSIAAgEIgDgFQgJgNAAgFIABgIQgFgJgGgJIAMAHQAHAFAFAGIAFAEQASAWAAAUIAAAJQAIAIAAALIgFBAQgIAggQAPIgHAGQgOANgIAAIgCAAIAAAAIgCACIgdABIgDABQguAAgpg8Igdg6QgDAFAAAPQAAAFACAGQAFAPAQAVIANAQQAsA3A1AAIAFAAQgKATAAAMIAAACIgBADQgJAVgOAUQgNATgSARIgkACQgHABgEAFIgEAHIAAABQgLAAgLgCgAgmCOQgDACgBAEQgBAJAJAEQAJADAIAEQAMAHALAFQAlANAXgUQgCgJgIgBIgYgCQgNgCgMgEQgJgEgJgFQgKgGgMgCQgDABgCADgAAdhZIAQAaQAXAZAkAAQASAAAFgDQAFgCAAgGQAAgGgZgCQgegBgRgUQgLgNgHgGQgFgEgDAAQgFAAAAAMgAg8CxIAAgCIAAgBIAAgBIAAgEIADACIgBAAIgBACIgBACIABACgAhrgJQAKgOAIgQQgRAjgaAbIAZgggACSjMIgEgEIgNgGIAAgFIAAgBQAaAJAVAPQgDABgBAGQgVgagFALg");
	this.shape_36.setTransform(389.8,53.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D6B0A0").s().p("AjAEjIgBgCIAAgDIAAgDIADgGQAEgEAEgBIADgCIAEgDIACABIACAAIABAAIACACIACACIABABQAAADgCADQgEAGgHAFIgFACIgEACQgCAAgDgDgAC2iEQgHgGAAgJIgBgTIAAgRQgBgJAJgBIADABIACACIABACQgDAEABAIIADATQABALAEAJIAAABIgCACIgCACIgDABIgFgBgACSkDQAAgQAFgSIABAAIACABIgBAIIgCAcIgCABIgDADIAAgHg");
	this.shape_37.setTransform(380.3,46.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B28A7E").s().p("AjPFRIgBgIIAAgCIgBgCIAAgGIACADQAEAEAFgDIAEgDQAHgEAEgHQADgCgBgDIAAgCIgDgCIgCgBIgBgBIAMgFIADADQAAADACADIABACQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABIABADIAAAAQgBgCgHgBIgDABIgGADIgCACIgFAHIgHAGIgEAHIgBAIIgBACQgCgEAAgEgAjSE6IACgBIgBADIgBgCgACbhdIgDgFIAAgBQACgDAAgFIAAgYIgBgYQAAgJgEgFIgFgGIgCABIgGgEIgBAAIAAgDQAAgEgEgLIgFgPQgFgSAAgNQAAgLAHgSIAIgSIAAAAIADgIQACgJAEgEQAJgTANgPIACADQgLAHgHAWQgGASAAARIAAADQAAAAAAABQgBAAAAAAQAAABAAABQAAAAAAABQAAACAGADQAGADAAABQAAAHgQAVQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEAAIADgBIgCAFQgEgBgCAFIAAAIIACASQADARAGAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAIABgEIAAAGQAAABAAABQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQACgDABgDQAIAQAVAIIgCAEQgDAHAAAIIAAAEQAAAFADAFIAIAJIAAABIABAAIABABIABACIAEAEIAEADIAAABQgEACgDAGIgBAAIgCACIAAABIgEAAQgJACgIAAQgNAAgLgFgACeiYIAAARIABASQABAJAGAHIAFAAIADgBIACgBIACgCIABgBQgFgKgBgKIgDgTQgBgIADgEIAAgDIgCgBIgEgCQgJACABAJgACCjkIAAAHIAEgEIABgBIACgcIABgIIgCAAIgBAAQgFARAAARgACbkxIAKgTIAEgHQgGANgGAUIAAgBIgCAHIAAgNg");
	this.shape_38.setTransform(381.9,43.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6F453C").s().p("AgzBuIAAAAIgCgBQABgLANgBQAKgBAIgGIAIgGIgFgCQgGgCgGgDIgDgDQAAgEAFgBIAMgEQAFgBACgEIgGgDIgIgFIgCgDQAQgFAPgLQALgHAGgLQAEgGgBgIIAKgCQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAIAEAAIACACIAJgBQAHADAEAAIACAAIADADIAAAKIAAAjQgHAQgMAMQgXAWgYAJIgIADIgGgCQgJgBgFAGIgEAAQgLAAgLgCgABNACIAAgEIAAAAIABACIACACIgBAFIAAACIgCAMgAADhAQgQgOgUAIQgNAGgMgDIAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQABgCADgCQAGgCAGAAIAGgBIgBgBIgIgCIghgEIACgCIAKgGQA+goAzA2IAEAEIgJAFQgBAIgIAEQgBACgCACQACADgFgBIgEgBIgCACIgRgMg");
	this.shape_39.setTransform(407.9,15.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A06456").s().p("Ag6A+IgBgDIABgDIADgGIAAgCIABgBIAAgCIgBgCIAAgCIADgCIACgCIABgCQADAFAEADIAAABIAAACIAAACIAAACIAAACIgBABIgDACIgDAEIgDADIgDAAIgDAAgAhJA4IAAgGIAAgIIAAgCIgHABQgMAAAAgEIAOgMIAEgDIgBgBIgGgCIgHACIgEgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgGAOgEIADAAIABgBIABgBIgDAAQgNgBABgDQAAgCACgCIgLAAQgJAAAAgEQAAgFAVgEIgCAAQgNAAAAgDQAAgFAJgDIANgCIAAgCIgGAAIgDAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBgDAGgCIAFgBIgBgDQgBgHAVAAIAAACQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIAAADIAFABQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQgIADAAADQAAAGAMAAIgBABQAHACAAAEIgDADQgFACAAACIABACIABAAIAKgBIABACQgBAHgHAAIgFAAIgFACIAHACIAFAAIgBAAQgNAAAAAGIACADQABACAEABIACABIACADQgBACgEAEIgCADIAAACIgCABIgFAIQgGAIgCAOIgCABQgEAAgBgFgAg8AVIABAAIgBgBgAhKgRIAAgBIgCgBIAAACIABAAIABAAgABkAjQgCgOgEgOQgFgNgIgKIADAOIAAAfIAAAaIgCABQgGAAAAgRIABgXQgFggAAgGIABgDIgNgLIABgCIAAgBIAFgEIACgCIAAgBQgGgCgFADIgGACIgGAEIgEABIgDACQgFACgDADQgEgCAAgBQAAgDAEgDQACgCAGAAQABgHAFgDQAEgDAGgBIALgCIAJgDIAAAAIAKACIAIAFIgBACIgEADIgFACIgBABIADACIADABIABACIAAACIgBACIgBABIgIADIABABQAGADADAGIAJAUIAHATIAEAVIgCAFIgFAOIgBgVg");
	this.shape_40.setTransform(410.1,14.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#885549").s().p("AAgBtQAAgKgFgPQgFgOAAAVIAEAUIgEgFQgGgIAAgUIAAhAIACgLIAAgCIABgEIgCgDIAAgCIgBAAIgBgNQgDgIgDgEQgHgJAAAKQAAADACAHIACACIABAFQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAABgBAAIgMgGIgGgCQgMgDgBAHIgEAAIgBgHIgBgIQAAgDgBgCIgBgBIAEgGQACgFAEgDIAEgDIABgBIACgCIADgCIACgDQAKgKANgHIAHgEIACgEQAPgFAXAAIAIABIAAAAIABAAIgBAFQAAAEAIANQAGANAAASQgGgCgEAEIgBAGQAAAIAEAOQADAKADADQACADADABIgFAMQgJAZAAAPQAAAMgFAPIgDAIQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIgBADIAAAHIAAACQgDAAgFAFQgGAIgDAHIgFgSgAA3gJQAEAMACAOIABAVIAFgOIACgEIgEgUIgHgUIgJgUQgDgHgGgDIgBgBIAIgDIABgBIABgCIAAgCIgBgBIgCgCIgEgCIABgBIAFgCIAEgDIABgBIgHgGIgLgCIAAABIgJACIgLADQgGABgEACQgFAEAAAGQgGAAgCADQgEACAAADQAAABAEADQADgEAFgBIACgCIAEgBIAGgEIAGgDQAFgCAGABIAAABIgCADIgFADIAAACIgBACIANAKIgBADQAAAHAFAgIgBAXQAAAQAGAAIACAAIABgbIgBgfIgDgOQAIAKAFAPgAicBVIAAgDIgDABQgEAAgDgGIAAgBIgDgOIgDgWIgBAAIACgFQAEgEAFgJQAGgNAAgFQAAgFgKgFIgCAAQAEgDAAgKIAAgFIABgEIABgEQAFgUAGgMIAFgIIAFgIQgCgEgDgDIAJgIIgDACIAhAFIAJACIABAAIgHABQgGABgGACQgCABgCADQAAAAABABQAAAAAAAAQAAABAAAAQABABAAAAIAAACQALADANgGQAUgJASAOIAQANIgFAIIgFAGIgBgBIAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAIgFAPQAAAIAHALIACAEIAGAFIAJgDIACgBQABAHgDAHQgHALgKAHQgRALgQAFIADADIAHAEIAGADQgCAEgFACIgLADQgFABgBAFIADACQAGAEAGACIAFABIgIAHQgIAGgJABQgOABgBAKIACABIAAABQgVgFgXgOgAhZAUIgCACIgDABIAAACIABACIAAACIgBACIAAACIgDAGIgBADIABACIADABIADgBIADgDIADgDIADgCIABgCIAAgCIAAgCIAAgCIAAgBIAAgCQgEgCgDgFIgBACgAhwAYIAAAJIAAAFQABAFAEAAIACAAQACgPAGgHIAFgJIACAAIAAgCIACgDQAEgFABgCIgCgBIgCgCQgEgBgBgCIgCgCQAAgHANAAIABAAIgFAAIgHgBIAFgEIAFAAQAHAAABgGIgBgDIgKACIgBAAIgBgCQAAgCAFgDIADgDQAAgDgHgDIABAAQgMgBAAgFQAAgEAIgCQgBgBAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgFgCIAAgCQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIAAgBQgVAAABAHIABADIgFABQgGABABADQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABAAIADABIAGgBIAAACIgNADQgJACAAAFQAAAEANAAIACAAQgVADAAAGQAAADAJAAIALAAQgCADAAACQgBADANABIADABIgBAAIgBABIgDABQgOAEAAAFQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEAAIAHgCIAGADIABAAIgEAEIgOAMQAAADAMAAIAHAAIAAABgABWA1IAAADQAAAOgDAPIgBAGIgBADQADgRACgYgACuAjIAAAAIAAACIAAgCgAhjADIAAAAIABABIgBgBgAhzgiIAAgDIACABIAAACIgCAAgABwh+IAGACIgBABIgFgDg");
	this.shape_41.setTransform(414,16.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4F3137").s().p("AgwJeQgFAAgWgHQgQgPAAgJIAFgKIABgBQAKgFAVgCIAIgBIADgBIASgMIAAAAQgEgDABgEIAEgJIAFgJQADgEABgFIgEgCIgGgEIgEgEIgCgBQABgEABgDIAFgKQACgEAAgEIABgCQgCgEAAgHIAAgQQgLgQgFgZIgKg/QgEgfgJgdQgFgQABgNIgCAAQAAgMgEgJIgBgKQABgIgCgGIgCgqIgBgfQgBgRAEgOIADgGIgBAAIAAAAQgHgFgEgGIAAgBIAAgKIAAgNIAAgCIAAgCIAAgCIAAgEIgEgFIgEgFIgDgFIAAAAIgBAAIgCAGIgCACQggAbgnAKQgdAIgegBIgDAAIgCgBIgCgBIgGgHIADAGIAAABIACABIAAABIAAAAIABABIgBACIgBABQgGAEgGAAIACADIAJAKIAKALIADAEIAAACIACABIACABIABACIACABIABABIABABIACAFQABAKgEAIIgCACQgIALgLAJQgIAEgJgCIgCgCIgCgCIgCgBIgCgCIAAgCIAAgGIAAAAIABgGQACgJAGgHIAJgLIACgCIACgCIAAgBIACAAIADgBIgBAAIgDgDIgKgLQgGgGgDgHIgCgDQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAIgCgDQgBgCgBgDIgCgDIgMAFIgCAAIgDgBIgDADIgEACQgEABgDAEIgDAGIgBABIAAACIAAADIAAAGIABACIAAACIABAHQAAAEACAEIABgBIACgJIADgHIAIgGIAEgGIADgCIAFgDIAEgBQAGAAACACQgBACgEADIgEADQgGAEgFAHQgGAIgCAKQgBAFgDADIAAAAIABAAQAFgBAFADIAFAEIACADIAIAGQADADgCADQgGAFgEgGQgDgEgEgCIgFgCQgHgCABgGQgFADgFgFQgEgEgBgGIgCgNIgFAAQgIgCgFgHQgCgEABgFIgBgKIgBgFIAAgEIACgEIAIgHIATgOIADgBIAIgBIADABIACABIADAEIACADIAEADIABACIABACIgBABIADgBIgCgDIABgEIADgGIACgBIADgCIAEgCIAAgBQAEAAABACIABAAIgBgCIgBgIIAAgSQgBgFABgEIAUgcIABAAIAAAEQAdgjAnglQAigfAWgpIAIgOIgBgFIAAAAIAAgEIANgRIABgIIADgOIACgEIACgIQAEgMAIgOIAJgPQAjg0A1gDIAHgBIAFgCIAIAAQAAgDAFgCIAAABIAAgGIACgZQAAgMgEgLIgBgEIgGACIgDgBIAAgJIgEgGQgEgGgBgLIgCgIIgFghQAAgMAGgSQAGgWAIACIABgDIADgKIAAgBIABgEIABgCIAAAAIACgFQAFgRAMgNIADgEQgCgFAHgCIAAgCIAAgCIAAgCIAAgCIACgCQAHgHAIgEIAZgLIAPgGQA8gFAiAoIgBAAQgHAFAAACIABADIgBABIACgBQAAgFAIgEQAAgKAZADIAQgBQAygBAEAXQADAGAEAaIAEAeQAAAMgLAhIgHAVIgBAFQgCAYgDARIgFASQgFAQgFAAIgBAAIgBAAQgEAAgCgEIgBgBIgTAtIAAADIgBABIgEAKQgEAAgBgEIAAgFIACgJIAAgKIgBgXIgCgKIgBABQgUAAgBgfQADgjABgMIAAgEIAAgiIAAgLIgEgDIgCAAQgEAAgHgEIAAAAIgHgEIgJACIABACQAAAAgBAAQAAAAAAABQAAAAgBABQAAAAAAABIgKADIgCABIgJADIgGgFIgCgEQgHgLAAgIIAFgPQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAIAAAAIABABIAFgGIAFgIIADgCIADABQAFAAgCgCQACgCABgDQAJgDABgIIAIgGIgEgEQgzg1g/AnIgJAGQgGAEgGADIADABQADADACAEIgFAIIgFAIIgDAGIgKATIAAAOIACgHIAAAAIgBAEIgBAEIAAAFQAAAKgEADIACAAQAKAFAAAGQAAAFgGANQgFAJgEAEIgEABIgDgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAQgVAAgGQgBgBgGgDQgGgDAAgCQAAgBAAgBQAAgBABAAQAAgBAAAAQABAAAAAAIgBgDQABgRAFgTQAHgWALgGIgBgDQgNAPgJASQgFAFgBAJIgEAHIAAABIgHARQgHATAAALQAAAMAEATIAGAPQAEAKgBAEIAAADIACAAIAFAEIACgBIAGAGQAEAGgBAIIABAZIAAAYQABAFgDACIAAABIADAGQATAIAWgFIAFAAIAAgBIACgCIABgBQADgFAEgDIAAgBIgFgDIgDgEIgBgBIgBgBIgCgBIAAABIAAgCIgHgIQgDgFgBgFIAAgEQAAgJAEgHIACgEQgVgHgJgQQgBADgCACQAAAAgBAAQgBABAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBgBAAIAAgHIgBAFQAAAAAAAAQAAAAAAAAQAAAAgBABQAAAAgBAAQgGAAgDgSIgBgRIAAgIQACgFAEABIABAAIADAWIADAOIAAABQADAGAEAAIADgBIAAADQAXAOAVAFQANACANAAIgCAEIgCgBQgNgCgEAKQgNAFAAAPIABADQADAFAEAEIABAAIAAAFIANAGIADAEQAGgLAVAaQABgGADgBQAIgEAWAZQAQARAKAQIAEAHQAXAfAAAXIgCBJQgIAtgWAOQgLAngMAOIgKAYQgVAyggAJIABAMQgBAXgPAFIAAgDQgBgEgDgBQgDACgBAEIgGgCQgLgBAAALIAAAAIgDAAIABgDIAAAAIgOABIgFABIgJABIAAAAIgDAAIgFABIABACIgDABIgRgBIgSgBIgCgBIgEAAQgbgEgagLIgJgEIgEgCIgHgEIAAAEIAAAAIABAQIAAAsIABAjIAAALIABAMIACAVIABABIABAAIAAACIAAABIAAABIAAAIIABACQABAKAEALIAEATIABAEIABAEIAEASIABABIACAKIAAAIIADAPQAEAdAKAbQAFAOADAOIAAAEQgCAQAGAKIgBACIgBADIgBAFIAAACIAAAAIgFADIgBACIgBACIAAACIABACIgBAAIABAAIADACIAEABIACACIAGAGIABACIABADIAAACQgDABgBACIgBAFIgDACIgCAFIgCAEIAAABIABAFIAEACIACAAIABAAIACgBIgCgFIAHAFIAEgBIAAgBIAIgEQADgCAEACIgBgBIAHADIgBAGIABADIAEADIgCAAIAEANIADACIAAAIQACAEAAAGQAAAVgPABIgGAFIgLAAQgVAAgNAEIgSgEgAjvCKIAAAAQgCADgDADQgDACgCAEIgFAIQgBAEABAEIABACIACABIAJAAIAEgFIAFgEQADgCACgEIACgCIABgCIgBgCIAAgCIAAgBIAAgCIAAgCIgBgCIAAgBIgGgBIgGABgAlCBTQgBAAAAABQAAAAAAABQAAABAAAAQAAABABABIACACQgBAEABAFIABAJIABACIAEACIACABIAAgBQgCgJAEgHIACAAQAEAAABgEIgBgCIACgCIAGgEIAHgHIACgBIACAAIgBgBIgFgDIgCgBQgGAAgFACIgDABQgGADgEAEIgCAAQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAgBAAgAgIBvIAAAAIAAgBgAgjBmIAAAAIgCgBIACABgAAnBbIABAAIgBgCIAAACgAgQhVQABAMgGAVIgCANIgDAFQgJAPgLAOQgNAPgTANQgEADgCAEIAAAAIACADIAHAIQAMAMARAKIAOAIIAJACIAUAFQAIABAGAGQALACALAAIAAgBIAEgHQAEgFAHgBIAkgCQASgRANgTQANgTAKgVIABgDIAAgCQgBgMAKgSIgEAAQg1AAgsg3IgOgRQgQgWgEgOQgCgHAAgEQAAgQACgFIAdA6QAqA+AuAAIACgBIAegBIACgDIAAAAIACAAQAIAAAOgNIAGgGQARgPAIghIAEg/QAAgLgHgIIAAgJQAAgVgSgVIgFgFQgFgGgHgFIgNgGQAHAIAFAJIgCAIQABAFAIANIAEAFIAAAEQAAASgCAFIgEAFQgBAJgHAJQgPATgmAAQgzAAgYgbQgQgQAAgQIAAgDIgFgDQgCgIAAgJQAAgYAOgWQAGgJAEACIgDgGIgBABIgBgFIgCgCQgGAAgHAEQgKgIgaAUQghAVgHAKIAAAAIgFAJQgFAGgDAHQgGAEgGAHQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABABABIAGgBIgEAKQgKASgMAQIAAADIAAABIgBAEIAIgIQgFAOgHAPIAAACIgBABIgFAIIgBADQgIAPgLAOIgYAiIgYAXQgTARgJAQQgTAQgVAMQAAAHgHAIQgFAIABALIABATQABAJAHAHIAGAHQARABARgCIgEgFQASgcAjgTQAmgVAjgaQAWgSAMgbQAJgRAMgNIAGAPgAhJBBIAAACIAAAAIAAgCIABgCIABgCIABAAIgDgCIAAAFIAAAAIAAABIAAAAgAD/mKQAFAPAAAKIAFASIABAFIAAAMQAJgUAIgJIgBgIIAAgCIAAgHIABgDQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIACAAIAAAPQAAADADAFIAMgzIACgEIAAAAQgBgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAIAAgEQAAgEALgXIABgDIAFgNIAAgBIAGgaIAAgBIABgFIgBgJQgBgOgDgNIgBgEIgBgDIAAgCQgJgZgTgDIAAAAIgIgBQgXAAgPAFIgIADIgDADIACACQgOAHgKAKIgCADIgDACIgCACIgBABIgEADQgEADgCAFIgEAGIABABQABACAAADIABAIIABAHIAEAAQABgHAMADIAGACIANAGQABgBAAAAQABAAAAAAQABAAABAAQAAAAABABIgBgFIgCgCQgCgHAAgDQAAgKAHAJQADAEADAIIABANIAAAFIAAASIAABAQAAAUAGAIIAEAFIgEgUQAAgNACAAQABAAACAGgACTI5IgCAAIgGgHIAAgEQAAgEADgKQAEgLAAgHIgBgJIADgDQAFgDgDgEQgEgCAAgEQgBgEADgCIAFgIIABgCQgPgggTg2QgVg9AAgGIAAgDQgXgpgSgrQgGgNgDgNQgCgCAAgEQgBgHgDgHIgDgIIADgCIgGgJQgHgKgEgCIgGgDIgFAEIgBgEIgFAFIgDAFQgFAMAAAOQgBA4AIA2QAJA0AFA3QAGA5gJAzIAAgCIgBgEIgCgGIgEgkIgBgTIgCgjQgBg4gJg1QgKg1gCg3IAAgHIAAgDQAAgKACgJIABgBIAJgQIAEgHIADgDQAOAAAIgBIgDACIgCACIgIABQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAABQABAGABAAIAYAAIACACIAAACIABABIAEADIABAAIgBAGIAFAMIAAABIAAACIACAGIACAGIACAEIAAACQADAIAEAHIACADIAAAEIADAHIAKAaQAOAfARAfIgBACQgBAHAVA9QAWBDANAYIAAAAIABAEIABADIgCAEIgDABIgDgFIAAAAIgBACIADAKQACAEgEAEIgFAJQACADABAEIADgCIgBgBIABgCQACgDADAAIAVAAIAAgBIABgCQAAgEACgDIgBgCIgCgEIgBgEIABgCIgCAAQgBgCgCgCIgBAAIACAAQgCgNABgRIABgbIAAAAQgBgQgDgOIgBgBIAAgCQgGgegOgbQgeg2gTg4QgLgjAFggIAAgCIACACIABgDIAAAAIABgDQgCgGgBgHIAAgCQAEgKAAgGIgBgGIABgBIADAEIADgDQADADABAEIAAAMIAFAAQgDAEgBAFIgBAIIAAAHIgBAAIAAADIAAAAIACAlQAAAOAEAPQASA4AbA2QAdA1gBA/IgBAYIgBABIgBADIAAACIABABIAAABIACACIAAAAIADAEIADAFIABADIAAACIgBACIgBABIAAABIgDABIAAACIAAACIACADIABAAQAJAIACANIAAABIgBAAIAAABIAAADIABACIgBAAIAAAAIgEAGIgCADQAAADgCACQgFAFgSAAQgYAAgHgHgACQGNIAAAAIAAAAgAChl3IAJgDIgCAHIgHgEg");
	this.shape_42.setTransform(391.2,64.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DD8892").s().p("AAUAgQgFgDgDgGQgBgEAAgFQAAgFAFAAIADADIACAGQABAEAEACQADABgBADIAAACQgBAEgDAAIgEgCgAgNgRIgCAAIgGgDIgEgEIgCgDQAAAAgBgBQAAgBAAAAQABgBAAAAQAAAAABgBIADgCIACABIADABIAEADIAEAEIABABIABADQgBADgDAAIgBAAg");
	this.shape_43.setTransform(360.7,72.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CB4553").s().p("AAOAvQACgCgDgDIgGgHIgHgIQgEgDgFABIgBAAIAAgBQACgDACgEQADgJAGgIQAFgFAHgEIAAABIAAACIADAGIADAEIAHAJQACACAFACIABgBIgKAKQgHAHgCAJIgCAFgAACAHQAAAFACAEQACAGAGADQAFAEACgFIABgCQAAgEgDgBQgDgCgBgEIgCgFIgEgEQgEABgBAEgAgegJIgDgCIgBgBIgBgKQAAgEABgEIAFADIAFADQgEAHAAAJgAgTgeIgDgFIgEgDIgDgBQAEgEAHgDIACAAQgCADAEAEIAFAEIgHAEIgCACIgBgBg");
	this.shape_44.setTransform(361.5,73.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A72E3A").s().p("AAIAyIgBgBIgBgCQgBgEACgDIAFgIQACgEAEgCQAEgCACgDIAAAAIAMABIAAABIAAACIAAACIAAACIAAABIAAACIAAACIAAACIgCACIgGAGIgGADIgEAEIgKgBgAAJAKIgGgIIgDgEIgDgGIAAgCIAAgBIADgDQAGgCAAgCIAAAAQACAGAGAHIAJALIAEAEIgGAAIgCACIgCACIgBABQgEgCgDgDgAghgpQgDgEABgEQAGgBAGAAIACACIAEADIAAAAIgBABIgCABIgIAGIgFgEg");
	this.shape_45.setTransform(363.4,73.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#755E80").s().p("Ag0C7QgCgCAAgEIAAAAIAAgBIABgFQACgCADgBIACAAIAAgBIADACIADABIABACIABACIAAAEIAAABIgBADIgDADIgEACIgGgEgAg6CdIgFgBIgCgCIAAAAIgBgCIAAgCIABgCIABgCIAEgDIAAAAIAEgCIAKABIABAAIACABIAEAEIABADIgBACQgBADgDABQgFACgFAAIgFgBgAg4CDQgHgKACgQIAAgEIAEgoIAAgDIAAgBQgBgKgCgIQgEgMgKgKQgIgIgDgHIgBgHQAAgDACgDIgCABIgBAAIgBgFIgBgBIgDgSIgBgEIgBgEIgDgNQgCgJAAgJIAAgGIgBgBIgCgCIgBAAIgBgCIgBgIIAAgBIAAgBIAAgCIgBAAQABgEADgDQACgDABgEIgBgBIgCgCIgBgBIgFgDIAAgBIgBgMIABgBIAAgKQgBgHADgGIAGgNIABgCIgCgEIgGgGQgCgCABgDQABgEADgBIADgBIAGADIAGAFIAFAGIADAIQAAAEgDAEIgGAIQgEAGABAGIgBALIAAABQAEAEAEAGQADAGgBAHQgCAGgEAFQAGAGAAAJQAAALAEAKQADAKAAAMQAAAMgFAKIABgBQAIAFAIAGQAIAIAGAMQALAWgCAYQgBAXACAYQACAPgHAJIgFAGQgDgEgCgEgABkBSIgGgVIgDgOQgEgMgHgKIgBgBIgCgFIgGgPIAAAAIABgCIACgCIAEAAIAAAAQALAFAHAMQAFAMAEANIABAEIAAABIABABQACAPABAPIAAABQgCADgFACIgDgCg");
	this.shape_46.setTransform(395.7,98.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#5F4B67").s().p("AgpDPQADgDAAgEIgBgCIgBgCIAAgBIACACIAFABIAEAAIABgBIAAACIgBAEIABACQgDgDgEADIgIAEIACgCgAg4DAIAAABIAAABIgCABIACgDgAgtC5IgDgBIAAAAIgCABIAAgCIABAAIAHACIAAABIAAABIgDgCgABQCvIAGgJQADgEgBgEIgDgKIABgCIABgDIAFgBQgBgQgDgRQgJg0gagvQgZgtgVgwIgKgaIgCgHIgBgEIgCgDQgEgHgCgIIAAgCIgDgEIgCgGIgBgGIABAEIAGgFIAJgKIAKgIIADgDQABAZAGAZQAOAzAUAyIATAsIAGAOIACAFIAMAfIADAGIAGAWQAGAWABAYIAAgCIgEAAIAAAAIgEABQgCABgCACIgBABIgBACIAAACQAAAKAKACIAEACIAAAEIABACIACACIAGABIgBACIAAABIgWAAQgCAAgDADIAAACIAAABIgCACQgBgEgDgDgAg+CZIACgFIABgDIABgBQACAEADADIAFgFIABAFIAAAEIgBgBIgKAAIgEACIAAgDgAhGBWQgKgbgEgdIgDgQQADAHAIAIQAKAKAEANIACAOIABAEIAAABIAAACIgEApQgCgOgFgOgAhTgDIgBABQAFgKAAgLQAAgMgDgKQgEgKAAgLQAAgJgGgGQAEgGACgGQABgHgDgGQgEgGgEgDIAAgCIABgLQgBgGAEgFIAGgJQADgDAAgFIgDgHIgFgGIgGgFIgGgEIgDABQgDACgBAEQgBADACACIAGAGIACAEIgBABIgGAOQgDAGABAHIAAAKIgBAAIAAgLIgBhPIATAMQAeASAegDIgFADIgGAGIgEAGIgJAQIgBACQgCAJAAAKIgDgBIAAAAIgDABIgCAAIgBABIgCACQgDAKAAALQgBAsAEAqIAEAbQgIgHgIgEgAhagCIABADIABAAIACgBQgCADAAADIgCgIgAhlgwQgDgLgBgLIABABIACACIABABIAAAFQAAAKACAJIADAMIgFgSgAhthUIgBgVIAAAAIAFADIABABIACACIABACQgBAEgCADQgDADgBADIgBAAgAAcizIADABIABAAIAAAAIgBADIgCgCIAAACIgBgEgAAHjLIAEgBIAAACIgEgBg");
	this.shape_47.setTransform(395.9,97.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#48394F").s().p("Ag6DcIgEgCIgCgFIAAgBIADgEIACgFIACgBQAAAEADACIAFAEIAFgCIACgEIABgDIAAgBIAAgDIgBgCIgBgCIAAgBIAAgBIgHgBIgBgBIgBgEIgBgBIgGgGIgCgCQAHABAIgDQADAAABgDIABgCIgBgEIgDgDIgCgBIgBgEIgBgFQAHgKgCgOQgCgYABgXQACgYgKgWQgGgMgJgJIgDgbQgFgqABgsQAAgLADgKIACgCIABAAIACgBIADAAIAAgBIADABIAAACIAAAHQACA3AKA1QAJA1ACA3IACAkIABATIAEAjIABAHIABAEIgBABIgEAAIgFgBIgCgCIAAABIACACIAAADQAAAEgDACIgCACIAAABIgEABIgIgGIADAGIgDABIAAAAIgCAAgABsCyIgDgCIgBgBIABgFIgFgCQgKgCAAgJIAAgCIABgDIABgBQACgCADAAIADgBIAAgBIAEABIABABQgCgYgFgWIACABQAFgBACgDIAAAbQgBAQACAOIgCgBIAAABQADABABACIACAAIgBADIABADIACAEIABACQgCADAAAEIgFgBgAhFCvIABAAIAAAAgABZBMIgNggIABACQAIAKADALIADAPIgCgGgAg9BLIgCgPQADAIAAAKIgBgDgABmA+QgEgMgFgMQgGgNgMgFIAAAAIgEABIgCABIgBACIAAABIgSgsQgVgygNgzQgHgZAAgYIgEACIgKAJIgJAJIgGAFIgBgEIgBgFIAAgBQgBgGgDgCIAEgEQAFgFADgFIACgDIgBgBIgDgCIAAAAIgBABIAAABQgIABgGAEIAAABIAAAAIgBAAIgCABQgeADgegRIgTgNIgBgQIAAgDIAGADQAhARAjAFIAEAAIACABIASABIATAAIgBgCIAEgBIAEABIAAgBIAAAAIAJgBIAEgBIAPgCIAAABQgDAIgBAHIAAACIgDALIgBAAIgDgBIABAFQgFAfALAjQATA5AdA1QAPAaAGAfIgBgFg");
	this.shape_48.setTransform(396,96.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#59373F").s().p("AgXDTIAAAAIAAAAgAg0DKIACAAIAAABIgCgBgABTC/IADgBIAAACIgDgBgAgDC6QgFgHgJgBIgVgEIgIgDIgOgHQgRgKgMgMIgIgJIgCgCIgDgFIgFgHIAKgIQAjgUAWghQAWgiAVgeIgBgEIgCgDIgEgEIgHgDIAAABQgaANgQAbQgPAagYAPQglAYgnARQglAQgVAaIAEAGQgRAAgRgDIgFgHQgHgIAAgJIAAgTQAAgLAHgHQAHgIABgHQAWgKAUgPQgSAaAIAaQASgaAagXQAigfAggjQAhglAagoQAegvgEgjQgJAEgHAGIACgCQAIgLALgIIABAAIADgBIAAgBIADgCQAMgIANgEIAVgIQAHAJABALIABAQIABAEQADAIAGAHQADADAAAEQAGAKAIAIQgDABgCADQgJAHAHAKQAIALANAGQAPAGANAHQAnAWAdgXQgCgEgDgBIgJgDIAFgCIAeABQAMgDAMgEIAOgFIAEgHQATgXgSgZQgQgUgWgRIABgBQBDATgDA/IgCAWQgGAEgEAIIgQAcQgQAYgYAPIgrAcIgeAAIgEgCIgEgHIgJgPQgFgLgNABQgFAAgFADQgYgqgSgrIAAgCQABgFgCgEIgEgKQgBgGgDgFIgHgKQgCgEABgFIgEgHIgCgFQgEABAAAEIAAAFIABAIIACAIQABAEADACQADAEAAAEIAAAGIABACIACACIADAEIABADIAAACIAAACIAAACIAAACIAAACIAmBSQAJATAOAPQAFAHAHAGQALAKANAEIAAABQgCADABAGQAEATgIASQgJAVgOATQgNAUgSARIgkACQgHAAgEAGIgEAHIAAABQgLAAgKgCgAhCCFQgDACgBAEQgBAJAJADQAJADAIAFQAMAHAMAEQAkAOAXgUQgCgJgIgBIgYgDQgMgBgMgEQgKgEgJgFQgKgGgMgCQgDABgCADgACyg6IABgCIABgBIgCgBIAAAEgAhYCoIAAgCIAAgBIAAgBIAAgEIADACIgBAAIgBACIgBACIABACgAkFChIAAAAIAAgBIgCgBIAAgBIgCgGIAFAHIACACIgCABIgBgBgACeBMQAAgKgDgIIAGABIgEAXIABgGgAh+giQALgOAKgOQgVAhgcAaIAcgfgAhCiLIADgCIgEAHIABgFg");
	this.shape_49.setTransform(392.6,54.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D6B0A0").s().p("AjHETIgBgDIAAgDIABgDQABgDADgCQADgDAFgCIADgBIADgCIADAAIADABIAAAAIACACIACACIABACQgBADgCACQgFAGgHAEIgFACIgDAAQgDAAgDgCgAC6hzQgGgGgBgJIgBgTIAAgRQgBgJAJgBIAEABIACACIAAACQgDAEABAIIADATQABALAFAJIgBABIgCACIgCACIgDABIgFgBgACSjlIgFgBQgBgGAAgHIABgOIAAgKIAFgFIABgBIABgCIAAAAIADgBIAFAAIADABIADACIACAEIgBABIABABIACACIAAAGIAAAHQABADgDADIgFADIgFAFQgFADgCAFIAAABIgBAAgAC4j4IgCgDIgBgCIAAgCIABgCIABgCIABgBIADgCIAEgCIACABIAEABIABAAIABABIACACIAAACIgBAEQgCAEgDACIgEABQgEAAgDgCg");
	this.shape_50.setTransform(379.9,44.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B28A7E").s().p("AjXFAIAAgHIAAgCIAAgDIABgFIABACQAEAFAFgDIAEgCQAIgEAFgGQACgCAAgDIgBgCIgBgCIgCgBIgBgBIAMgEIACADIACAGIABACQAAABAAAAQAAABgBAAQAAABAAABQAAAAAAABIABADIAAAAQAAgCgHgBIgEAAIgGADIgCABIgFAGIgIAGIgFAGIgDAIIAAACQgCgEAAgEgAjWEpIABgBIgBADIAAgCgACghMIgDgFIAAgBQADgDgBgFIAAgYIgBgYQABgJgEgFIgGgHIgCABIgJgHQgEgEgGgCIAAAAQgHgBgDgLIgBgGIgDgJQgBgLACgMIABgFIgBgEIAAgCIgCgEIABgBIACgBIAAgDIgBgBIgGgHIgGgDIgCgCIAAgCIgCgCQAGgBAFABIATABIADgBIACgBIAAgCIAAAAIACgDIACgDQAEgHADgGIACgGIAAABQACAEAEADIAFAGQAFACACgDIABgCQABgDgDgCIgDgEIgFgEIgEgDIgBABIgBAAIAAgCQAJgTAOgQQAJAKgBAPQgBARgIAOIAAABQgEAFgBAGQgBAGAAAGQAEAAADgBIABAFIAAAAIgCABIgBAAIgBABIgCACIgBACIgBACIAAABIADADIABABIgCACIgBACIgBABIAAACIABACIADADQAFAEAGgDQADgCABgEIABgDIAAgCIgCgDIgBgBIABAAIAAAAQAFAEACAFQADAHgFAIQgGAIgJAEIgKAFIAAgCIgCgCIgDgBIgDABIAAAAIgBABIgBADIAAACIAAABQABAGAGACIgBAAIgBAJIAAAKQABABAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQACgDABgDQAJAQAVAIIgCADQgEAIAAAIIAAAEQABAFADAFIAHAIIAAACIACAAIABABIABACIADADIAFADIAAACQgEACgDAFIgBABIgCACIAAABIgFAAQgIACgJAAQgMAAgMgFgACkiHIAAARIAAASQABAJAHAHIAEAAIAEgBIACgCIABgCIABgBQgEgJgBgKIgEgTQAAgIADgFIgBgCIgCgBIgDgCQgKABACAKgACGj1IAAABIgCACIgBAAIgEAGIAAAJIgBAOQgBAHACAHIAEAAIABAAIAAAAQADgFAEgEIAGgFIAEgDQADgCAAgEIAAgHIAAgGIgDgCIgBAAIABgCIgCgDIgCgCIgEgBIgEgBIgDABgACRkQIgBACIgBABIgCACIgCABIAAADIAAADIAAAEIACAEIADABIACgBQADgBAAgEIABgDQADADAEgDIABgBIAAgFIgCgDIgCgDIgFgEQgDAAgBAEg");
	this.shape_51.setTransform(381.4,41.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A06456").s().p("AhqBKIgCgCIABgDIADgGIABgCIAAgCIAAgCIAAgCIAAgCIACgBIACgCIADgEQABgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBIgBgCIgBAAIgKAEQgGACgCAGQgCAFgFgDIgCgEQgBgGAGgDIAEgEQADgCAEgBIANgFIgegDQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAIAAgCIAAgCIAFgDIADgFIACgCIgFgCIgFgCIAAgCIACgDIAFgFIAAgDIgDgCIgBgCIgBgBIACgEQACgEAEgDQACgBgEgGIAAgBQACgDACgBIAFABIAFADQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAIABAGIgBACIAAABIAGACIADADIABAEIAAACIgBABIgBABIgEACIgCACIAAABIAHgFQAJgEAHgGIABAAIACgBQANgBgHAHQgFAFgHADIgHACIANABIAFACIAAACIAAACIgCACIAAACIgBACIgBAEIgNABIAFABIAEACIAAACIAAACIAAABIADAAIADABIACADQgBAEgEABQgFAAgEABIABACIACACIABACIAAABIAAACIAAACIgCACIgEACIgCACIgCACIAAACIAAABIAAACIAAACIAAACIgBACIgCACIgEADIgDADIgCABIgDgBgAB3AnIgEgVQgEgOgIgMQgKgRgQgKIgVgMIAAgCIAAgBIAFgEIACgDIAAgBQgHgBgGADIgHAEIgHAEQgEADgEgCIgBgCQgBgHAHgFQAFgDAGgCIAOgEIAKgDIAAgBIASABIAEACIAAACIAAACIgEADIgGADIgBABIAEACIADABIACABIAAACIAAACIgCABIgIAEIAAABQAIADAFAGIAOASQAHAJAFAKQAGAKAEAMQAEANgCAMIgDAAQgGAAgBgIg");
	this.shape_52.setTransform(414.9,13.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#885549").s().p("ACbB9QgMgQgJgRQgIgOgCgOQgDgMgEgMIgCgBQgEAAgCADQgDADABADQAAADgBADQgCADABAEIAAAGIgBAAQgFgIgDgJQgFgRAGgSQAHgTgPgQQgNgOgLgQIgCgBIgDgBIgmgBIgIADIgGABIgCABIABACQgGACgFAAIgBgHIgDgHIgDgGIgBAAIAEgHQABgFAEgEIAEgDQAfgkA0gPQABAEAGADQAKAFAIAIIANAMIAIAKIgDAAIgNABIgBACIgBABQADAFAFADQgCAFAJAIQAIAGAEALQAEAKAAAKIgBgBIgFgEQgDADgBADQgCAGAIAJQAMANACAPQADAOgBAPIAAAGQgFAHABAMIACAaQAAALAFAKIAHAVIAAAAIgKgLgABBhhIAAABIgDADIgEAEIgBABIAAACIAVAMQAQAKALARQAHANAEAOIAFAUQABAKAIgCQACgLgEgNQgDgMgHgLQgFgKgGgJIgOgSQgFgGgIgDIgBgBIAJgEIABgBIABgCIgBgCIgBgBIgDgBIgFgCIABgBIAGgDIAEgDIABgCIAAgCIgFgCIgRgBIAAABIgLADIgNAEQgHACgFADQgHAFABAHIABACQAFACAEgDIAGgEIAHgEQAGgCAGAAIACAAgAikBMIAAgHIgBgIIAAgCIAGgDQANgHAJgLQAJgNgIgOIgIgMIgDgBIgMgBIgBgEQADgDACgGIAIgdQADgQgCgPQgBgNgIgHIAJgIIgCACIAhAFIAIACIABAAIgGABQgGABgGACQgEACgBAEIAAACQAMAEAPgGQAUgJARAOIARANQAEACADAAIADACIgDAEIgBABIABAEIADAGIABAFIAAAGIAAAEIAFADIACABIADACIABABIABACIgCADIgCgCIAAABIgDAAIgCACIgGAEIgCABQABAJgEAGQgGALgLAHQgQALgQAFIACADIAIAEIAGADQgCAEgFACIgMADQgFABAAAFIADACQAGAEAGACIAFABIgIAHQgIAGgKABQgNABgBAKIACABIAAABQgWgFgWgOgAheABIABACQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgEAEIgCACIgCABIAAACIABACIAAACIgBACIAAACIgEAGIAAADIABACIADABIADgBIADgDIADgDIACgCIABgCIABgCIAAgCIAAgCIgBgBIABgCIACgCIACgCIAEgCIABgCIABgCIAAgCIgBgBIgBgCIgBgBIgCgCQAFgBAFAAQAEgBABgEIgDgDIgCgBIgEAAIABgBIAAgCIAAgCIgFgCIgFgBIANgBIACgEIAAgCIABgCIABgCIAAgCIAAgCIgEgCIgNgBIAGgDQAHgDAFgFQAHgHgMABIgDABIAAAAQgIAGgIAEIgIAFIABgBIACgCIAEgCIABgBIABgBIAAgCIgBgEIgEgDIgGgCIABgBIAAgCIAAgGQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAIgEgDIgFgBQgDABgCADIAAABQAFAGgDABQgDADgCAEIgCAEIAAABIACACIADACIgBADIgEAGIgCADIgBACIAFACIAFACIgCACIgDAFIgEADIgBACIAAACQABAAAAAAQABABABAAQAAAAABAAQAAAAABAAIAdADIgNAFQgEABgDACIgEADQgFADABAGIABAEQAGADACgFQACgGAFgCIALgEgACmAaIAAAAIAAACIAAgCgAgdhEIAAABIgBAAQACgEAEgCIgEAGIgBgBgABoiHIAGACIgBABIgFgDg");
	this.shape_53.setTransform(414.8,17.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6F453C").s().p("AiFBzIAAAAIgCgBQABgLANgBQAJgBAIgGIAIgGIgEgCQgHgCgGgDIgCgDQAAgEAFgBIAMgEQAEgBADgEIgHgDIgHgFIgDgDQAQgFARgLQAKgHAHgLQAEgHgBgIIACgCIAGgDIACgBIACgBIAAAAIACABIADgCQAJAAAKgFIAQgGQAEAcgMAiQgHASgOAOQgmAlgrAAQgKAAgKgCgACSBFIgCgCIgDADIAAgHQABgPgCgNQgDgQgLgNQgIgIACgGQAAgEAEgDIAEAFIABABQABgLgFgKQgEgKgIgHQgIgHACgGQgFgDgDgEIAAgCIACgBIANgCIADAAIgJgJIgMgNQgJgIgJgFQgGgDgBgEIAFgBQAHgCAHACIAFAEIABgBQBDAmgBBOQgBASgFAQIgDAJIAAgBIgBADIAAABIgCAGIgCALIAAABIAAABIAAABgAg2gtQgDABgEgDIgRgMQgSgOgTAIQgPAHgNgFIAAgCQABgEAFgCQAFgCAHAAIAGgBIgBgBIgIgCIghgEIACgCIAJgGQA/goAzA2IAHAIIABABIgKAOQgDACgCADQgEAAgCACIgCACIgDgCg");
	this.shape_54.setTransform(416.1,15.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4F3137").s().p("Ah4JnIABgCIgEgCQgRgBgLgVIgEgLQAMgLAUgCQASgBAPgJIASgLIAAAAQgEgDABgFIAEgJIAFgJQADgDABgFIgDgDIgHgEIgEgDIgBgCQAAgEABgDIAFgKQACgDABgEIABgDQgDgEAAgGIAAgRQgLgPgEgZIgLg/QgEgfgJgdQgFgRACgNIgDAAQAAgMgEgJIgBgKQABgIgCgGIgDhJQgBgUAHgQIgBAAIAAgBQgGgEgFgGIAAgBIAAgLIAAgNIAAgCIAAgCIAAgCIABgEIgFgEIgEgGIgDgEIgBgCIAAAAIgDgDIgBgBIgDgEIgDACQgiAZgoAHQgfAFgggFIgBAAIgCgCIgFgHIACAGIAAABIACABIAAABIAAAAIABABIgCACIgBABQgGADgGAAIACADIAIALIAJALQADAEAAADIABABIABABIABACIADACIABABIABAGQABALgGAIQgKAKgMAIQgIAEgIgDIgCgCIgCgCIgCgCIgBgCIAAgCIAAgGIAAAAIACgGQACgJAHgGIAKgKIACgCIACgDIAFAAIgDgEIgJgMQgGgGgCgHIgBgDQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAIgCgDIgCgGIgCgDIgMAEIgCAAIgDgBIgEACIgDACQgEABgEAEQgCACgBADIgBABIAAACIAAADIgBAGIAAACIAAACIAAAHQAAAEACAEIABgBIADgIIAEgHIAIgFIAFgGIACgCIAHgCIADgBQAHABAAACQAAACgFADIgEACQgHAEgFAGQgHAIgDAJQgCAFgCACIAAABIABAAQAFgBAEADIAIAIIAGAHQADADgCADQgHAEgDgGQgEgHgIgCQgHgDACgFQgFACgFgGQgDgEgBgGIgBgNQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgIgDgEgIQgCgEABgFIAAgJIAAgGIAAgDIADgEQADgFAFgCIAVgMIADgBIAHAAIADABIACACIADAEIACADIAEADIAAACIABACIgBABIAEAAIgBAAIgCgEIABgDIAFgGIABgBIAEgCIAEgCIAAAAIAFACIABAAIgBgKIABgSQAAgEABgDIAXgbIABAAIAAAEQAfghArghQAkgcAagnQASgbAKgfQAFgPALgJQABgFAEgEIAKgKIAQgTIAPgNIgBAAIACgBIAEgCIAFgDQAJgGAKgEIATgJIAIABQAAgEAEgCIABABIAAgGIABgYQABgNgFgLIAAgEIgGADQgLgFgLgNQgLgOgBgTIgBgaQAAgGACgDIgBgBIgCgCIgBgCIgCgBQgEgCgCgEIgEgIIgCgEIADgFIABAAIAKgBIAKABQASAAAIgPIAEgGIAAgBIACgCIABgDIAAgDIAAABIACgGQAGgQALgOIADgEQgBgEAGgDIAAgCIAAgBIAAgCIAAgCIACgCQAHgHAIgFIAZgLIAPgFQBCgGAhAwQALgKANgIQAngVApgNQAwAGAVAuQAUAqgEAuQgDAtAAAtIABADQAAADACACQACAEAFACQAKAGgBAKQgPgHgIgKQgDgBgCgCIgDgEIgEgDIgBgBIAAACQgBAIACAJQACAHAEAHIAJAUQAGALgCAKIAAAAQgSABgKgPIgTgcQgKgOgHgQQgDgGgBADIgBABQgOAEgIgRQgGgNgCgOQgBgPADgOQACgLAAgMQgGgCgCgEIgGgKIgHgIIgHgHIgBgCQgVgCgVAFQAIAvgbAtQgcAugwAHQgHgFgNAFIgFAAQgagBAAAXIABACQADAGAFADQAGAFAHABIAFACQAHAAAHgDIADABIgBgCIAEAAIAJAAIACACIAAABIABAAIgCgDIAEAAIADgBQBaAUAgBOQAGANgDAOQgQBXhBA6QgQAOgSABQAGAbgNAcQgOAegYAZQgLAKgOAHIAAAFIAAAJIAAAHIgBACIgBACIgEADIgDAEIgBABQAAACgDADQgEAGgCAHIgBAOIgBAEIABAAIABAlQAAAOAFAPQARA4AcA2QAcA1gBA/IgBAYIgBABIgBADIAAACIABABIAAABIADACIgBAAIADAEIADAFIABADIAAACIgBACIgBABIAAABIgCABIgBACIABACIABADIABAAQAKAIABANIAAABIgBAAIAAABIAAADIABACIgBAAIAAAAIgDAGQgHAKgNAAIgGAAQgHACgDAAIgcgBIgBgDQgHgCgFgIQgFgJAAgDQAAgGANgMIAIgGIgBgBQgBgDACgDQABgDADgBQAFgDgEgEQgDgCgBgEQAAgEACgCIAFgIIABgCQgIgUgFgbQgJgygaguQgagvgVgyQgFgNgDgNQgDgCAAgEQgBgHgCgHIgEgLIgGAEIgCAGQgGALAAAOQgCA5AJA1QAJA1AGA3QAFA4gJA0IAAgCIgBgEIgBgHIgEgjIgCgTIgCgkQgBg3gKg2QgJg1gDg3IAAgHIAAgCQAAgKADgJIAAgCIAJgQIAFgGIAGgGIAFgDIACgBIAAgBIAAABIABgBQAGgEAHgBIAAgBIABgBIABAAIACACIABABIgBADQgDAFgGAFIgDAEQADACAAAGIABABIABAFIABAGIACAGIACAEIAAACQADAIAEAHIACADIABAEIACAHIAKAaQAVAwAZAuQAaAvAJA0QADARAAAQIgEABIgCADIAAACIADAKQABAEgDAEIgGAJQACADABAEIADgCIAAgBIAAgCQACgDADAAIAWAAIAAgBIAAgCQAAgEACgDIgBgCIgBgEIgBgEIAAgCIgCAAQgBgCgCgCIgBAAIACAAQgCgNABgRIABgbIAAAAQgBgQgDgOIAAgBIAAgCQgHgegOgbQgeg2gTg4QgLgjAFggIAAgCIADACIAAgDIABAAIACgLIAAgCQABgIAEgHIAAgBIgPACIgEAAIgJABIgBAAIgDABIgFAAIACADIgTAAIgSgBIgDgCIgDABQgkgFgggRIgGgDIAAADIAAAQIABBPIABALIAAANIACAVIABAAIABABIAAABIAAABIAAACIABAHIAAACQABALAEALIAEASIABAEIABAFIAEARIABACIACAJIABAIIACAQQAFAdAKAbQAFAOACAOIAAAEQgCAPAGALIgBABIgBADIgBAFIAAADIAAAAIgEADIgBACIgBACIAAABIAAACIAAAAIAAABIADACIAEABIADACIAFAGIACABIAAAEIAAACQgCAAgCADIgBAEIgCADIgDAFIgCAEIAAABIACAEIAEADIABAAIABgBIACgBIgCgFIAIAGIAEgCIAAAAIAIgEQAEgDADADIgBgCIAIADIgBAHIABACIADADIgCAAIAFAOIACABQACARgJARQgNAUgbgDQgVgDgUAHQgFACgEAAQgGAAgFgDgAksBvQgCADgDACQgEACgCAEIgFAHQgCAEABAEIABACIABABIAJABIAFgEIAFgEIAGgGIACgBIABgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIgMgBgAg3BvIAAAAIAAAAgAhSBnIAAgBIgCAAIACABgAAzBbIADABIAAgCIAAAAIgDABgAgHBcIABAAIgBgCIAAACgAgkh1IAEAEIADADIABAEQgWAfgWAiQgWAhgjATIgKAIIAFAHIADAFIACACIAIAJQAMAMARAKIAOAHIAIADIAVAEQAJABAFAHQALACALAAIAAgBIAEgHQAEgGAGAAIAkgCQASgRANgUQAOgTAJgUQAIgSgEgTQgBgGACgDIAAgBQgNgEgLgKQgHgGgFgHQgOgPgJgUIglhSIAAgCIAAgCIAAgCIAAgCIAAgCIgBgDIgDgEIgCgCIgBgCIAAgGQAAgEgDgEQgDgCgBgEIgCgIIgBgIIAAgFQAAgEAEgBIACAFIAEAHQgBAFACAEIAGAKQADAFABAGIAEAKQACAEgBAFIAAACQASArAYAqQAFgDAFAAQANgBAFALIAJAQIAEAHIAEACIAeAAIArgdQAYgPAQgYIAQgcQAEgIAGgEIACgWQADg/hDgTIgGgCIAEADIABAAQAWARAQAUQASAZgTAXIgEAHIgOAFQgMAEgMADIgegBIgFACIgUgFQgLgCgLgEQgPgFgOgGIgGgDQgKgIgJgJQgIgIgGgKQAAgEgDgDQgGgHgDgIIgBgEIgBgQQgBgLgHgJIgUAIQgOAEgMAIIgDACIAAABIgDABIgBAAQgLAIgIALIgCACQgKANgLALIgDACIgBAFIgCAEQgPAhgTAgIgCADQgKAOgLAOIgcAfIgaAVQgUAPgLAPQgUAPgWAKQgBAHgHAIQgHAHAAAKIAAATQAAAJAHAIIAFAHQARADARAAIgEgGQAVgaAlgQQAngQAlgYQAYgPAPgaQAQgcAagNIAAgBIAHADgAlzBPIAAgBQAAgJAEgGIACAAQAEAAABgEIgBgCIACgCIAHgEIAIgFIACgCIACAAIgCgBIgEgDIgCgCQgGAAgFACIgCAAQgHADgEAEIgDAAIgDACQAAAAgBABQAAAAAAAAQAAABAAABQAAAAAAABIACADQgBAEAAAEIABAKIABABIADADIACABIAAAAgAh4BCIAAACIABAAIgBgCIABgCIABgCIABAAIgDgCIAAAEIAAABIAAABIAAAAgAB+gXIgBAGIAEgXIgGgBQADAIAAAKgAAKl9QAEAFAAAJIAAAYIABAYQAAAFgDADIABABIACAFQAUAJAVgGIAFAAIAAgBIACgCIABAAQADgGAEgCIAAgBIgEgDIgEgEIgBgCIgBgBIgBgBIAAABIgBgBIgHgJQgDgFgBgFIABgEQAAgIADgHIACgEQgVgIgJgQQAAADgCADQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIgBgJIABgJIABgBQgFgBgCgHIAAgBIAAgCIABgCIABgBIABgBIACgBIADACIACABIAAACIALgEQAIgFAGgIQAFgHgDgIQgBgFgGgDIAAgBIgBABIAAgBIgEgBIgCAAIgEACIgDACIgBgBIgCgDIAAgCIAAgCIABgCIACgCIABgBIABAAIACgBIAAAAIANAAIADABIAIAOQAHAOgJAMQgIAMgNAHIgHADIABACIAAAHIAAAIQAXAOAWAEQA1ALAwguQAOgOAHgSQANgigFgdIgQAGQgKAFgJAAIgBgCIgBgBIgDgDIgCgBIgFgDIAAgEIAAgFIgBgGIgDgGIgBgDIAAgCIAEgEIACgCQACgCAEAAIAAAAIAAAAIACABIADgGIAKgOIgBgBIgHgIQgzg2g/AoIgJAGQgFAEgGACIACACQAIAHABAMQABAQgDAPIgHAdQgCAHgEACQgDACgEgBQAAgGABgGQABgFAEgGIAAgBQAIgOABgQQABgPgJgLQgOAQgJATIgBACIABAAIABAAIAAAAIABgBIAFAEIAEADIADAEQADADgBADIAAABQgDAEgEgDIgGgFQgEgEgCgEIAAAAIgCAFQgBAGgFAIIgCACIgCADIAAAAIAAACIgCACIgDABIgTgCQgFgBgGABIACACIABACIABACIAGAEIAGAGIABACIAAACIgBABIgCABIACAFIAAABIABAEIgBAFQgBAMABALIACAJIABAGQADALAHABIABABQAFABAFAEIAHAIIACgBIAGAGgAFklLIgBgCIgIgVQgEgKgBgKIgCgaQgBgMAFgHIADgDIACACIACACIAAgBIAAgBIAAgBIAAgBIACgLIACgGIAAgBIABgCIADgJQAFgQABgSQABhPhDgmIgGgDQgHgCgHACIgFABQg1AQgfAjIgEAEQgEADgBAGIgFAGIABABIADAFIADAIIACAHQAGgBAFgCIAAgCIABAAIAHgCIAHgCIAmAAIADABIACACQAMAPAMAOQAQARgIATQgGASAFASQADAJAFAIIABABIAAgCIAAgFQAAgEABgEQACgCgBgDQAAgEACgCQADgDADgBIACACQAFALACAMQADAOAHAPQAJARAMAPIAKAMIACABIAAAAgACSiiIACABIgBABIgBACIAAgEgAgCnhIgCgEIgBgDIAAgEIAAgCIACgCIACgCIABAAIAAgDQACgDACgBIAFAEIADADIABAEIAAAEIgBACQgDACgEgDIgBAEQAAADgCABIgCABIgCgBg");
	this.shape_55.setTransform(395.8,64.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#744755").s().p("AABCqQgLgEgMgHQgIgFgJgDQgJgDABgJQABgEADgCQACgDADgBQAMACAKAGQAJAFAJAEQAMAEANABIAYADQAIABACAJQgOAMgSAAQgNAAgPgGgAi8AvQALgPAUgPIAagUQAcgaAVghIACgDQATggAPghIACgEIAEgHQALgLAKgNQAHgGAJgEQADAjgdAvQgaAoghAlQggAjgiAfQgaAXgSAaQgIgaASgagACFhPQgNgHgPgGQgNgGgIgLQgHgKAJgHQACgDADgBQAJAJAKAIIAGADQAOAGAPAFQALAEALACIAUAFIAJADQADABACAEQgOAMgSAAQgRAAgTgLg");
	this.shape_56.setTransform(390.3,54.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#AB8681").s().p("AgKACQAEgJAGgHQADgEABgEIADABIAGADIAAABIgGALQgFAGgDAGIgGAPIgFABQgBgLADgJg");
	this.shape_57.setTransform(405.8,116.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CB4553").s().p("AAOAwQACgDgDgDIgGgIIgHgHQgEgDgFAAIgBAAIAAAAIAEgHQADgKAGgHQAFgGAHgDIAAACIAAACIADAFIADAEIAHAJQACADAFABIABgBIgKAKQgHAHgCAIIgCAHgAACAHQAAAFACAEQACAGAGADQAFAEACgGIABgBQAAgEgDgBQgDgCgBgEIgCgGIgEgDQgEAAgBAFgAgegJIgDgCIgBgCIgBgJQAAgFABgDIAFADIAFAEQgEAFAAAKgAgTgeIgDgEIgEgEIgDgBQAEgFAHgCIACgBQgCAFAEADIAFAEIgHAEIgCABIgBAAg");
	this.shape_58.setTransform(359.5,69.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#755E80").s().p("Ag0C7QgCgCAAgEIAAAAIAAgBIACgFQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAIADAAIAAgBIADACIACABIACACIABACIAAAEIAAABIgCADIgCADIgEACIgGgEgAg7CdIgDgBIgDgCIAAAAIgBgCIAAgCIABgCIABgCIAEgDIAAAAIAEgCIAKABIACAAIABABIADAEIACADIgCACQAAADgDABQgFACgFAAIgGgBgAg4CDQgHgKACgQIAAgEIADgoIAAgDIAAgBQAAgKgCgIQgEgMgKgKQgIgIgDgHIgBgHQAAgDACgDIgCABIgBAAIgBgFIAAgBIgEgSIgCgEIgBgEIgCgNQgBgJAAgJIAAgGIgBgBIgEgCIgBAAIAAgCIgBgIIAAgBIAAgBIAAgCIgBAAQABgEACgDQADgDABgEIgBgBIgCgCIgBgBIgEgDIgBgBIgBgMIABgBIAAgKQgBgHADgGIAHgNIABgCIgDgEIgGgGQgCgCABgDQABgEADgBIADgBIAGADIAGAFIAEAGIAEAIQgBAEgCAEIgGAIQgEAGAAAGIAAALIAAABQAFAEADAGQAEAGgDAHQgBAGgDAFQAFAGAAAJQAAALAEAKQAEAKgBAMQAAAMgFAKIABgBQAIAFAIAGQAIAIAGAMQALAWgCAYQgBAXACAYQACAPgHAJIgFAGQgEgEgBgEgABkBSIgGgVIgDgOQgEgMgHgKIgBgBIgCgFIgGgPIAAAAIABgCIACgCIAEAAIAAAAQALAFAHAMQAFAMAEANIABAEIAAABIABABQACAPABAPIAAABQgCADgFACIgDgCg");
	this.shape_59.setTransform(393.7,94.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#5F4B67").s().p("AgpDPQADgDAAgEIAAgCIgCgCIAAgBIACACIAFABIAEAAIABgBIAAACIAAAEIAAACQgDgDgEADIgIAEIACgCgAg4DAIAAABIAAABIgCABIACgDgAgtC5IgDgBIAAAAIgDABIAAgCIACAAIAGACIAAABIAAABIgCgCgABQCvIAGgJQADgEgBgEIgDgKIABgCIABgDIAEgBQAAgQgDgRQgIg0gbgvQgZgtgVgwIgJgaIgDgHIgBgEIgCgDQgEgHgDgIIAAgCIgCgEIgCgGIgBgGIABAEIAGgFIAJgKIAKgIIADgDQABAZAGAZQAOAzAVAyIASAsIAGAOIACAFIAMAfIADAGIAGAWQAGAWACAYIgBgCIgEAAIAAAAIgEABQgCABgCACIgBABIgBACIAAACQAAAKAJACIAGACIgBAEIABACIACACIAGABIgBACIAAABIgWAAQgCAAgCADIgBACIABABIgEACQgBgEgCgDgAg+CZIABgFIABgDIACgBQABAEAEADIAFgFIABAFIABAEIgCgBIgKAAIgEACIAAgDgAhGBWQgKgbgEgdIgDgQQADAHAIAIQAKAKAEANIACAOIAAADIAAACIAAACIgDApQgCgOgFgOgAhTgDIgBABQAFgKAAgLQABgMgEgKQgEgKAAgLQAAgJgFgGQADgGABgGQADgHgEgGQgDgGgFgDIAAgCIAAgLQAAgGAEgFIAGgJQACgDABgFIgEgHIgEgGIgGgFIgGgEIgDABQgDACgBAEQgBADACACIAGAGIADAEIgBABIgHAOQgDAGABAHIAAAKIgBAAIAAgLIgBhPIATAMQAeASAegDIgEADIgHAGIgEAGIgJAQIgBACQgDAJAAAKIgCgBIAAAAIgDABIgCAAIgCABIgBACQgEAKABALQgBAsAEAqIAEAbQgIgHgIgEgAhagCIABADIABAAIACgBQgCADAAADIgCgIgAhkgwQgEgLgCgLIABABIAEACIABABIAAAFQAAAKABAJIACAMIgDgSgAhthUIgBgVIABAAIAEADIABABIACACIABACQgBAEgDADQgCADgBADIgBAAgAAcizIADABIABAAIAAAAIgBADIgDgCIAAACIAAgEgAAHjLIADgBIAAACIgDgBg");
	this.shape_60.setTransform(393.9,93.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#48394F").s().p("Ag+DZIgCgEIAAgBIADgEIACgFIACgBQAAADADADIAFAEIAFgDIACgCIABgEIAAgBIAAgDIgBgCIgBgCIAAgBIAAgBIgHgCIgBAAIgBgDIgBgCIgGgGIgCgCQAHACAIgEQADgBABgDIABgBIgBgEIgDgDIgCgBIgBgDIgBgGQAHgJgCgQQgCgXABgYQACgYgKgVQgGgMgJgJIgDgaQgFgrABgsQAAgLADgJIACgDIABgBIACAAIADgBIAAAAIADABIAAADIAAAGQACA3AKA1QAJA1ACA3IACAkIABATIAEAjIABAHIABAEIgBACIgEAAIgFgBIgCgDIAAACIACACIAAACQAAADgDADIgCACIAAAAQgHADgEAAQgEAAgDgDgABsCyIgDgCIgBgCIABgDIgFgCQgKgDAAgKIAAgBIABgCIABgCQACgCADgBIADgBIAAAAIAEAAIABACQgCgYgFgWIACABQAFgCACgCIAAAbQgBAQACANIgCAAIAAAAQADACABADIACAAIgBACIABADIACAEIABACQgCAEAAADIgFgBgAhFCuIABAAIAAABgABZBLIgNgeIABABQAIAKADALIADAPIgCgHgAg9BKIgCgOQADAIAAAKIgBgEgABmA/QgEgNgFgNQgGgMgMgFIAAAAIgEABIgCABIgBADIAAAAIgSgsQgVgygNgzQgHgYAAgZIgEACIgKAIIgJAKIgGAGIgBgFIgBgEIAAgCQgBgFgDgDIAEgEQAFgFADgFIACgDIgBgBIgDgBIAAgBIgBACIAAAAQgIACgGADIAAABIAAgBIgBABIgCABQgeADgegRIgTgMIgBgQIAAgEIAGAEQAhAQAjAFIAEgBIACACIASABIATAAIgBgDIAEAAIAEABIAAgBIAAAAIAJgBIAEgBIAPgBIAAAAQgDAIgBAHIAAADIgDAKIgBAAIgDAAIABADQgFAhALAiQATA4AdA2QAPAaAGAeIgBgDg");
	this.shape_61.setTransform(394,92.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D6B0A0").s().p("AjHETIgBgDIAAgDIABgDQABgDADgCQADgDAEgCIAEgBIADgCIADAAIADABIABAAIABACIACACIAAACQAAADgCACQgFAGgHAEIgFACIgDAAQgDAAgDgCgAC6hzQgGgGgBgJIgBgTIAAgRQgBgJAJgBIADABIADACIABACQgEAEABAIIADATQABALAEAJIAAABIgCACIgBACIgEABIgFgBgACSjlIgFgBQgBgGAAgHIABgOIAAgKIAFgFIABgBIABgCIABAAIACgBIAFAAIADABIACACIADAEIgBABIABABIADACIgBAGIAAAHQAAADgCADIgFADIgGAFQgEADgCAFIAAABIgBAAgAC5j4IgDgDIgBgCIAAgCIABgCIABgCIACgBIACgCIAEgCIADABIADABIAAAAIACABIACACIAAACIgBAEQgBAEgEACIgEABQgEAAgCgCg");
	this.shape_62.setTransform(377.9,40.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#885549").s().p("ACbB9QgMgQgJgRQgIgOgCgOQgDgMgEgMIgCgBQgEAAgCADQgDADABADQAAADgBADQgCADABAEIAAAGIgBAAQgFgIgDgJQgFgRAGgSQAHgTgPgQQgNgOgLgQIgCgBIgDgBIgmgBIgIADIgGABIgCABIABACQgGACgFAAIgBgHIgDgHIgDgGIgBAAIAEgHQABgFAEgEIAEgDQAfgkA0gPQABAEAGADQAKAFAIAIIANAMIAIAKIgDAAIgNABIgBACIgBABQADAFAFADQgCAFAJAIQAIAGAEALQAEAKAAAKIgBgBIgFgEQgDADgBADQgCAGAIAJQAMANACAPQADAOgBAPIAAAGQgFAHABAMIACAaQAAALAFAKIAHAVIAAAAIgKgLgABBhhIAAABIgDADIgEAEIgBABIAAACIAVAMQAQAKALARQAHANAEAOIAFAUQABAKAIgCQACgLgEgNQgDgMgHgLQgFgKgGgJIgOgSQgFgGgIgDIgBgBIAJgEIABgBIABgCIgBgCIgBgBIgDgBIgFgCIABgBIAGgDIAEgDIABgCIAAgCIgFgCIgRgBIAAABIgLADIgNAEQgHACgFADQgHAFABAHIABACQAFACAEgDIAGgEIAHgEQAGgCAGAAIACAAgAikBMIAAgHIgBgIIAAgCIAGgDQANgHAJgLQAJgNgIgOIgIgMIgDgBIgMgBIgBgEQADgDACgGIAIgdQADgQgCgPQgBgNgIgHIAJgIIgCACIAhAFIAIACIABAAIgGABQgGABgGACQgEACgBAEIAAACQAMAEAPgGQAUgJARAOIARANQAEACADAAIADACIgDAEIgBABIABAEIADAGIABAFIAAAGIAAAEIAFADIACABIADACIABABIABACIgCADIgCgCIAAABIgDAAIgCACIgGAEIgCABQABAJgEAGQgGALgLAHQgQALgQAFIACADIAIAEIAGADQgCAEgFACIgMADQgFABAAAFIADACQAGAEAGACIAFABIgIAHQgIAGgKABQgNABgBAKIACABIAAABQgWgFgWgOgAheABIABACQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgEAEIgCACIgCABIAAACIABACIAAACIgBACIAAACIgEAGIAAADIABACIADABIADgBIADgDIADgDIACgCIABgCIABgCIAAgCIAAgCIgBgBIABgCIACgCIACgCIAEgCIABgCIABgCIAAgCIgBgBIgBgCIgBgBIgCgCQAFgBAFAAQAEgBABgEIgDgDIgCgBIgEAAIABgBIAAgCIAAgCIgFgCIgFgBIANgBIACgEIAAgCIABgCIABgCIAAgCIAAgCIgEgCIgNgBIAGgDQAHgDAFgFQAHgHgMABIgDABIAAAAQgIAGgIAEIgIAFIABgBIACgCIAEgCIABgBIABgBIAAgCIgBgEIgEgDIgGgCIABgBIAAgCIAAgGQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAIgEgDIgFgBQgDABgCADIAAABQAFAGgDABQgDADgCAEIgCAEIAAABIACACIADACIgBADIgEAGIgCADIgBACIAFACIAFACIgCACIgDAFIgEADIgBACIAAACQABAAAAAAQABABABAAQAAAAABAAQAAAAABAAIAdADIgNAFQgEABgDACIgEADQgFADABAGIABAEQAGADACgFQACgGAFgCIALgEgACmAaIAAAAIAAADIAAgDgAgdhEIAAABIgBAAQACgEAEgCIgEAGIgBgBgABoiHIAGACIgBABIgFgDg");
	this.shape_63.setTransform(412.8,13.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B28A7E").s().p("AjXFAIAAgIIAAgBIAAgCIABgHIABADQADAEAGgCIAEgCQAIgEAFgGQACgCAAgDIAAgCIgCgCIgCgBIgBgBIAMgEIACADIACAGIABADQAAAAAAAAQAAABgBAAQAAABAAABQAAAAAAABIABADIAAAAQgBgCgGgCIgEABIgGADIgCACIgGAFIgHAGIgFAHIgCAIIgBABQgCgEAAgEgAjWEpIABgBIgBAEIAAgDgACghMIgCgGIgBgBQADgCgBgFIAAgYIgBgYQAAgJgDgGIgGgFIgCABIgIgIQgFgEgFgCIgBgBQgHgBgDgKIgBgHIgDgJQAAgLABgLIAAgGIAAgDIAAgBIgCgGIABAAIABgBIABgCIgBgCIgGgGIgGgFIgBgBIgBgCIgCgCQAFgBAGABIATACIADgBIABgCIABgCIgBgBIADgCIACgCQAEgIADgHIACgEIAAAAQACAEADADIAGAFQAEAEAEgEIAAgBQABgDgDgEIgEgDIgDgEIgGgDIAAABIgBAAIAAgCQAJgTAOgQQAIALAAAPQgBAQgIANIAAABQgEAHgBAFQgCAGABAGQAEAAADgBIABAEIAAABIgCAAIgBABIgCABIgBACIgBACIgBABIAAACIADAEIABABIgCABIgBABIgBACIAAACIABACIADADQAFAEAGgDQADgCABgEIABgEIAAgBIgCgCIgBgBIABgBIAAABQAGADABAFQADAIgFAHQgGAHgIAGIgLADIAAgBIgCgBIgDgCIgCABIgBABIgBABIgBABIAAACIAAACQABAGAFACIAAAAIgBAJIAAAKQABABAAABQAAAAAAABQAAAAABABQAAAAAAABQADAAACAAQADgDAAgDQAJAQAVAIIgDADQgDAIAAAIIAAAEQAAAFAEAFIAHAJIAAABIABAAIACABIABACIADADIAEAEIABABQgFACgCAGIgBAAIgDACIAAABIgEAAQgIACgJAAQgMAAgMgFgACkiIIAAARIABATQAAAJAHAHIAEAAIAEgBIACgBIACgDIAAgBQgEgJgCgLIgDgTQgBgIAEgDIgBgDIgCgCIgDgBQgJACABAIgACGj1IgBAAIgBACIgBABIgEAFIAAAKIgBAPQAAAGABAGIAEABIABAAIAAgBQACgEAFgEIAGgEIAEgEQADgCgBgDIAAgIIABgGIgDgCIgBAAIABgCIgCgEIgCgCIgEAAIgEgBIgDABgACRkRIgBADIgBABIgCACIgCACIAAABIAAAEIAAAEIACADIADACIADgBQACgBAAgDIABgEQADADAEgDIABgCIAAgDIgBgEIgDgEIgFgDQgDABgBACg");
	this.shape_64.setTransform(379.4,37.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#4F3137").s().p("Ah1J1IgKgHQAEgQAPgMQAPgLAHgPIAKgXQADgHAIgDIAAAAIACgDIgJgFQgEgDABgFIAEgJIAFgJQADgDABgFIgDgDIgHgEIgEgDIgBgCQAAgEABgDIAFgKQACgDABgEIABgDQgDgEAAgGIAAgRQgLgPgEgZIgLg/QgEgfgJgdQgFgRACgNIgDAAQAAgMgEgJIgBgKQABgIgCgGIgDhJQgBgUAHgQIgBAAIAAgBQgGgEgFgGIAAgBIAAgLIAAgNIAAgCIAAgCIAAgCIABgEIgFgEIgEgGIgDgEIgBgCIAAAAIgDgDIgBgBIgDgEIgDACQgiAZgoAHQgfAFgggFIgBAAIgCgCIgFgHIACAGIAAABIACABIAAABIAAAAIABABIgCACIgBABQgGADgGAAIACADIAIALIAJALQADAEAAADIABABIABABIABACIADACIABABIABAGQABALgGAIQgKAKgMAIQgIAEgIgDIgCgCIgCgCIgCgCIgBgCIAAgCIAAgGIAAAAIACgGQACgJAHgGIAKgKIACgCIACgDIAFAAIgDgEIgJgMQgGgGgCgHIgBgDQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAIgCgDIgCgGIgCgDIgMAEIgCAAIgDgBIgEACIgDACQgEABgEAEQgCACgBADIgBABIAAACIAAADIgBAGIAAACIAAACIAAAHQAAAEACAEIABgBIADgIIAEgHIAIgFIAFgGIACgCIAHgCIADgBQAHABAAACQAAACgFADIgEACQgHAEgFAGQgHAIgDAJIgEAHIAAABIABAAQAFgBAEADIAIAIIAGAHQADADgCADQgHAEgDgGQgEgHgIgCQgHgDACgFQgFACgFgGQgDgEgBgGIgBgNQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgIgDgEgIQgCgEABgFIAAgJIAAgGIAAgDIADgEQADgFAFgCIAVgMIADgBIAHAAIADABIACACIADAEIACADIAEADIAAACIABACIgBABIAEAAIgBAAIgCgEIABgDIAFgGIABgBIAEgCIAEgCIAAAAIAFACIABAAIgBgKIABgRQAAgFABgDIAXgbIABAAIAAAEQAfghArghQAkgcAagnQASgbAKgfQAFgPALgJQABgFAEgEIAKgKIAQgTIAPgNIgBAAIACgBIAEgCIAFgDQAJgGAKgEIATgJIAIABQAAgEAEgCIABABIAAgGIABgYQABgNgFgLIAAgEIgGADQgLgFgLgNQgLgOgBgTIgBgaQAAgGACgDIgBgBIgCgCIgBgCIgCgBQgEgCgCgEIgEgIIgCgEIADgFIABAAIAKgBIAKABQASAAAIgPIAEgGIAAgBIACgCIABgDIAAgDIAAABIACgGQAGgQALgOIADgEQgBgEAGgDIAAgCIAAgBIAAgCIAAgCIACgCQAHgHAIgFIAZgLIAPgFQBCgGAhAwQALgKANgIQAngVApgNQAwAGAVAuQAUAqgEAuQgDAtAAAtIABADQAAADACACQACAEAFACQAKAGgBAKQgPgHgIgKQgDgBgCgCIgDgEIgEgDIgBgBIAAACQgBAIACAJQACAHAEAHIAJAUQAGALgCAKIAAAAQgSABgKgPIgTgcQgKgOgHgQQgDgGgBADIgBABQgOAEgIgRQgGgNgCgOQgBgPADgOQACgLAAgMQgGgCgCgEIgGgKIgHgIIgHgHIgBgCQgVgCgVAFQAIAvgbAtQgcAugwAHQgHgFgNAFIgFAAQgagBAAAXIABACQADAGAFADQAGAFAHABIAFACQAHAAAHgDIADABIgBgCIAEAAIAJAAIACACIAAABIABAAIgCgDIAEAAIADgBQBaAUAgBOQAGANgDAOQgQBXhBA6QgQAOgSABQAGAbgNAdQgOAdgYAZQgLAKgOAHIAAAFIAAAJIAAAHIgBACIgBACIgEADIgDAEIgBABQAAACgDADQgEAGgCAHIgBAOIgBAEIABAAIABAlQAAAOAFAPQARA4AcA2QAcA1gBA/IgBAYIgBABIgBADIAAACIABABIAAABIADACIgBAAIADAEIADAFIABADIAAACIgBACIgBABIAAABIgCABIgBACIABACIABADIABAAQAKAIABANIAAABIgGAAIgFAAIAFABIAEADQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAIAAABIAEADIgBADQgEAHABAKIgGAHIgJAOQgDAGgFAFQgUAHgSgKQgMgHgJgJIgDgEIABgBIABgCIACgCIACgCIABgBIABgBIACAAIAHABQAAgHgCgFIgBgPQAAgNAEgLIACgEIgCgEQgBgDACgDQABgDADgBQAFgDgEgEQgDgCgBgEQAAgEACgCIAFgIIABgCQgIgUgFgbQgJgygaguQgagvgVgyQgFgNgDgNQgDgCAAgEQgBgHgCgHIgEgLIgGAEIgCAGQgGALAAAOQgCA5AJA1QAJA1AGA3QAFA4gJA0IAAgCIgBgEIgBgHIgEgjIgCgTIgCgkQgBg3gKg2QgJg1gDg3IAAgHIAAgCQAAgKADgJIAAgCIAJgQIAFgGIAGgGIAFgDIACgBIAAgBIAAABIABgBQAGgEAHgBIAAgBIABgBIABAAIACACIABABIgBADQgDAFgGAFIgDAEQADACAAAGIABABIABAFIABAGIACAGIACAEIAAACQADAIAEAHIACADIABAEIACAHIAKAaQAVAwAZAuQAaAvAJA0QADARAAAQIgEABIgCADIAAACIADAKQABAEgDAEIgGAJQACADABAEIADgCIAAgBIAAgCQACgDADAAIAWAAIAAgBIAAgCQAAgEACgDIgBgCIgBgEIgBgEIAAgCIgCAAQgBgCgCgCIgBAAIACAAQgCgNABgRIABgbIAAAAQgBgQgDgOIAAgBIAAgCQgHgegOgbQgeg2gTg4QgLgjAFggIAAgCIADACIAAgDIABAAIACgLIAAgCQABgIAEgHIAAgBIgPACIgEAAIgJABIgBAAIgDABIgFAAIACADIgTAAIgSgBIgDgCIgDABQgkgFgggRIgGgDIAAADIAAAQIABBPIABALIAAANIACAVIABAAIABABIAAABIAAABIAAACIABAHIAAACQABALAEALIAEASIABAEIABAFIAEARIABACIACAJIABAIIACAQQAFAdAKAbQAFAOACAOIAAAEQgCAPAGALIgBABIgBADIgBAFIAAADIAAAAIgEADIgBACIgBACIAAABIAAACIAAAAIAAABIADACIAEABIADACIAFAGIACABIAAAEIAAACQAAAAgBAAQAAAAgBABQAAAAgBABQAAAAgBABIgBAEIgCADIgDAFIgCAEIAAABIACAEQACADAFAAQAEAAAHgDIAAAAIAIgEQAEgDADADIgBgCIAIADIgCAIQAQANABAXQABAYgYAMQgUAKgMARQgIAKgKAAIAAgDIgFABQgGADgHAAQgKAAgLgGgAB3IRQgHAHgDAJQgEAKACALIAFgCIAGgOQADgIAGgGIAGgLIgBAAIgFgDIgDgBQgBAEgEAEgABIIpIAAACIACABIAAgCIABgEIgDADgAgaIJIgCADIADgCIABABIgBgCgAksBeQgCADgDACQgEACgCAEIgFAHQgCAEABAEIABACIABABIAJABIAFgEIAFgEIAGgGIACgBIABgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIgMgBgAg3BeIAAAAIAAAAgAhSBWIAAgBIgCAAIACABgAAzBKIADABIAAgCIAAAAIgDABgAgHBLIABAAIgBgCIAAACgAgkiGIAEAEIADADIABAEQgWAfgWAiQgWAhgjAUIgKAHIAFAHIADAFIACACIAIAJQAMAMARAKIAOAHIAIADIAVAEQAJABAFAHQALACALAAIAAgBIAEgHQAEgGAGAAIAkgCQASgRANgUQAOgSAJgVQAIgSgEgTQgBgGACgDIAAgBQgNgEgLgKQgHgGgFgHQgOgPgJgUIglhSIAAgCIAAgCIAAgCIAAgCIAAgCIgBgDIgDgEIgCgCIgBgCIAAgGQAAgEgDgEQgDgCgBgEIgCgIIgBgIIAAgFQAAgEAEgBIACAFIAEAHQgBAFACAEIAGAKQADAFABAGIAEAKQACAEgBAFIAAACQASArAYAqQAFgDAFAAQANgBAFALIAJAQIAEAHIAEACIAeAAIArgdQAYgPAQgYIAQgcQAEgIAGgEIACgWQADg/hDgTIgGgCIAEADIABAAQAWARAQAUQASAZgTAXIgEAHIgOAFQgMAEgMADIgegBIgFACIgUgFQgLgCgLgEQgPgFgOgGIgGgDQgKgIgJgJQgIgIgGgKQAAgEgDgDQgGgHgDgIIgBgEIgBgQQgBgLgHgJIgUAIQgOAEgMAIIgDACIAAABIgDABIgBAAQgLAIgIALIgCACQgKANgLALIgDACIgBAFIgCAEQgPAhgTAgIgCADQgKAOgLAOIgcAfIgaAVQgUAPgLAPQgUAPgWAKQgBAHgHAIQgHAHAAALIAAASQAAAJAHAIIAFAHQARADARAAIgEgGQAVgaAlgPQAngRAlgYQAYgPAPgaQAQgcAagNIAAgBIAHADgAl6AgQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAABIACADQgBAEAAAEIABAKIABABIADADIACABIAAgBQAAgJAEgGIACAAQAEAAABgEIgBgCIACgCIAHgEIAIgFIACgCIACAAIgCgBIgEgDIgCgCQgGAAgFACIgCAAQgHADgEAEIgDAAIgDACgAh4AxIAAACIABAAIgBgCIABgCIABgCIABAAIgDgCIAAAEIAAABIAAABIAAAAgAB+goIgBAGIAEgXIgGgBQADAIAAAKgAAKmOQAEAFAAAJIAAAYIABAYQAAAFgDADIABABIACAFQAUAJAVgGIAFAAIAAgBIACgCIABAAQADgGAEgCIAAgBIgEgDIgEgEIgBgCIgBgBIgBgBIAAABIgBgBIgHgJQgDgFgBgFIABgEQAAgIADgHIACgEQgVgIgJgQQAAADgCADQgDABgCgBQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAgBIgBgJIABgJIABgBQgFgBgCgHIAAgBIAAgCIABgCIABgBIABgBIACgBIADACIACABIAAACIALgEQAIgFAGgIQAFgHgDgIQgBgFgGgDIAAgBIgBABIAAgBIgEgBIgCAAIgEACIgDACIgBgBIgCgDIAAgCIAAgCIABgCIACgCIABgBIABAAIACgBIAAAAIANAAIADABIAIAOQAHAOgJAMQgIAMgNAHIgHADIABACIAAAHIAAAIQAXAOAWAEQA1ALAwguQAOgOAHgSQANgigFgdIgQAGQgKAFgJAAIgBgCIgBgBIgDgDIgCgBIgFgDIAAgEIAAgFIgBgGIgDgGIgBgDIAAgCIAEgEIACgCQACgCAEAAIAAAAIAAAAIACABIADgGIAKgOIgBgBIgHgIQgzg2g/AoIgJAGQgFAEgGACIACACQAIAHABAMQABAQgDAPIgHAdQgCAHgEACQgDACgEgBQAAgGABgGQABgFAEgGIAAgBQAIgOABgQQABgPgJgLQgOAQgJATIgBACIABAAIABAAIAAAAIABgBIAFAEIAEADIADAEQADADgBADIAAABQgDAEgEgDIgGgFQgEgEgCgEIAAAAIgCAFQgBAGgFAIIgCACIgCADIAAAAIAAACIgCACIgDABIgTgCQgFgBgGABIACACIABACIABACIAGAEIAGAGIABACIAAACIgBABIgCABIACAFIAAABIABAEIgBAFQgBAMABALIACAJIABAGQADALAHABIABABQAFABAFAEIAHAIIACgBIAGAGgAFklcIgBgCIgIgVQgEgKgBgKIgCgaQgBgMAFgHIADgDIACACIACACIAAgBIAAgBIAAgBIAAgBIACgLIACgGIAAgBIABgCIADgJQAFgQABgSQABhPhDgmIgGgDQgHgCgHACIgFABQg1AQgfAjIgEAEQgEADgBAGIgFAGIABABIADAFIADAIIACAHQAGgBAFgCIAAgCIABAAIAHgCIAHgCIAmAAIADABIACACQAMAPAMAOQAQARgIATQgGASAFASQADAJAFAIIABABIAAgCIAAgFQAAgEABgEQACgCgBgDQAAgEACgCQADgDADgBIACACQAFALACAMQADAOAHAPQAJARAMAPIAKAMIACABIAAAAgACSizIACABIgBABIgBACIAAgEgAgCnyIgCgEIgBgDIAAgEIAAgCIACgCIACgCIABAAIAAgDQACgDACgBIAFAEIADADIABAEIAAAEIgBACQgDACgEgDIgBAEQAAADgCABIgCABIgCgBg");
	this.shape_65.setTransform(393.8,62.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#48394F").s().p("AhGDcIgEgCIgCgFIAAgBIACgEIADgFIACgBQAAAEACACIAGAEIAEgCIACgEIABgDIABABIABACIABADQAAAEgDACIgCACIAAABIgEABIgIgGIACAGIgCABIgBAAIgBAAgAguDOIgFgBIgDgCIAAgBIAAgDIAAgCIgCgCIAAgBIAAgBIgGgBIgCgBIAAgEIgCgBIgFgGIgDgCQAIABAIgDQADAAAAgDIABgCIgBgEIgDgDIgCgBIAAgEIgBgFQAGgKgBgOQgDgYACgXQACgYgLgWQgGgMgJgJIgDgbQgEgqAAgsQAAgLAEgKIABgCIACAAIABgBIAEAAIAAgBIACABIAAACIAAAHQADA3AJA1QAKA1ABA3IACAkIACATIAEAjIABAHIABAEIgBABIgEAAgAB4DJIgCgCIgBgCIAAgEIgFgCQgJgDAAgHIACgEIAAgDIAAAAQACgCACgBIAEgBIAAgBIAEABIAAABQgBgXgGgXIADACQAFgCACgDIgBAbQgBARACANIgCgBIABABQACABABADIACAAIAAACIABAEIABAEIABABQgCAEAAAEIgFgBgAhRCvIAAAAIAAAAgAByBVQgDgMgGgNQgGgMgLgGIAAAAIgEABIgCACIgBACIAAABIgTgtQgUgxgOgzQgEgPgBgPIAAgHQAAgSgGgJIADgCIAAgJQgaABgMgDIgLAJIgHAAIABgBIADgCQgIABgNAAIgDAAQgNAAgDgFIgBgCQgNgDgNgGIgIgEIgTgNIAAgPIAAgBIAAgDIAGADIAFADIAJAEQAaALAcAEIADAAIADABIASABIAQAAIAEgBIgCgBIAFgBIADABIAAgBIABAAIAIgBIAEgBIAPgCIAAABIgBADIADAAIAAAAQAAgLAKABIAGACQAEADAAAFQAAADgDADIgBACIABAFQAAAHgDAKIgBACQABAHADAGIgBACIgBAAIgDAAIAAAEQgFAgALAjQATA4AeA1QAOAbAHAeIgCgEgABdBNIgEgKIABABIAHAMIgEgDgAhJBLIgCgPQACAIAAAKIAAgDgAgIh+IACAEIAAABIgBAAIgBgFg");
	this.shape_66.setTransform(397.2,96.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D6B0A0").s().p("AijFXQgGgGAAgDQABgCAGgGIAGgIQAEAEAFADQgGADgGAKIgDAGIgBgBgACFh+IAAgMQABgYAGAAQAGAAAAAYQAAAXgFAAQgGAAgCgLgABFjDIgFgXQAAgOANgJQAJgHACAHIADABQAKAHAAAJQgJAbgFALIABAHQABAGgHAAQgIAAgFgWgAAijrIAOgNQANgKAAANQAAAEgFAFQgGAHgHAAQgJAAAAgGgACNj5QAAgGAOgCQAOgDAAAJQAAAIgRAAQgLAAAAgGgABSk/QAAgLAMgJQAKgKABANQgBACgPAYQgHAAAAgJg");
	this.shape_67.setTransform(384.5,43.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#B28A7E").s().p("AAqB7IgGgFIgBAAIAAgtIgBgEIgBAAIAAgBQgMAAgWAFQgRAEgIAEQgCgOgEgQIgCgFIACAAQAFAAAAgEQAAgEgHgBIgCAAIgEgLIAAgDIgCgBIAAgBQgDgFgGgDQgGgDgJgCQgUgFgCgDQAPgBAZgQQAZgRAAgKIAAAAIAGAEIACABIgBAEIAAACIgCAAQgFACAAAFIAAACQAAAAAAABQABAAAAAAQABAAAAABQABAAABAAQAJAAAGgFQAEgEAAgDIgBgCIABgDQAAgCgMgGQgIgEgDABIAGgZIAHAKQAHAMACAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAABgBIAAgEQgDgMgIgIQgEgEgBAAIABgEQACgJAKgSIAGgNIACgCIAOASIAIAcQAGATAEAIIAEARQACALAEAAIACgBIADABIAAAAIADABIAFgDQAEgDAGAAQARAAAAAbQABAFgDAEQgFAKgPAAQgEAAgCgCQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAAAIgEABIgBADQAAAIAPAAIADAAQgDADgCAFQgEAJAAAJQAAAIACAHQAEAJAHADIACAAQgCADgBAFIgBAKQAAATABADIAGAJIAAAAIgSAFIgEACQgKgDgGgEgAArBaIAAALQACALAGAAQAFAAAAgXQAAgXgGAAQgHAAAAAYgAgNgNQgMAJAAANIAEAXQAGAXAIAAQAGAAAAgHIgBgGQAEgMAJgbQAAgHgKgHIgCgCQgBgDgDAAQgDAAgFADgAg0ALIABABIADACQAEADADAAIACgBIABgDQAAgDgHgCIgEgBQgDAAAAAEgAgpgUIgOANQAAAGAIAAQAIAAAGgGQAFgGAAgDQAAgIgFAAQgDAAgFAEgABBgdQgOADAAAGQAAAGAKAAQASAAAAgJQAAgHgIAAIgGABgAADhvQgKAKAAAKQAAAJAHAAQAOgXAAgCQAAgIgDAAQgDAAgFAEg");
	this.shape_68.setTransform(393.5,20.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#744755").s().p("ABHFGQgvgIgQgtQgOgoAagXQAOAZAKAkQAJAdAXAUQAIAHgHAAIgGgBgAiFELQA1hqA7hrIACgBQAQAlgdA0QglBAgpA7QgHAJgGAAQgFAAgFgHgAAaBLQgXgeAZgRQAZA9BEAOQAaAFgaAEQgKACgKAAQgtAAgegngAB5lGIABAAIAAAAIgBAAg");
	this.shape_69.setTransform(386.5,38.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#A06456").s().p("AAIBsIAAgXIAAgVQACgMAEgIQAHAEABAOIgCAYQgDAqgDAAQgFAAgBgUgAAHhBIgCgUQgDgNgEgFQgEgHgDgCQgFgFgHADQgHACgCgEIgBgEQAAgFAMAAQAOAAAEAFIAFAHIABAAIgBgGQAAgEAFAAIAGADQABgMAIAHQAIAIAAAFQgJALgDAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIAAgBIAEASIABAMQACAXgJAAQgEAAgCgPg");
	this.shape_70.setTransform(424.3,19);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#885549").s().p("AB+CHQgKgNgCgJQgDgHgCgPIgBgJQADACAFAAIAAAAIACACIACgBQAAgJADgRIACgYIgCgGQgHAQAAAdIgBAAIgBgBQgEgFgCgFQAKgkAAgGQABgEAAgcIABgcQAAgQgEgNQgCgFgGgJIgJgOQgNgNgYgHQgKgDgHAAIAJgGQAegWAdgEQAIAAADgBIAAAAIAFgBIACAAIAAADQARADAHAfQAGAUAAAaIgDAaQAAAHADABIAMgJIAAANIgNAgQgMAdAAALIABABQgGAPgCATIAAAnQAAAeACAKIgRgTgACAA7IAAAVIAAAWQABAVAFAAQADAAADgqIACgYQgBgOgHgEQgEAIgCAMgABuh1QADACAEAHQAFAEADAOIACAUQACAPAEAAQAJAAgCgXIgBgMIgEgSIAAABQAAAAABAAQAAAAABABQAAAAABAAQABAAABAAQADAAAJgLQAAgGgIgHQgIgIgBANIgGgEQgFAAAAAFIABAGIgBAAIgGgHQgEgFgOAAQgMAAAAAFIABADQACAFAHgDIAFgBQAEAAADAEgAhTAvQgBgCAAgEQAAgDAEgMQAFgNABgHQAAgWgPAAIgDABIAAABIgEgFQgIgNgPACQgLACgCAFQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABIAAgDQAAgPgFgKQgJgSgEgMQgDgSgHgNIgFgIIgDgCIgBAAIAUgLQAIgFAJgCIAAACIAAABIAAAAIAAAAIgBAFIAAAHIAFAAQAHAAAKgEQAKgEADAAQgBADAfAGQAJAEAIAGIAUALIAGAEIABADQgHgBgBACIAAACQALACAAAHIgjAYIAPAIQAPAGABACIgHAEQgEADABAEQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAABAAIAZAAQgLAUgOAHQgNAEAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAAAABAAIAHAAIAHgCIAJgEIAHAAIAAAGQgDALgIAMQgRAXgYgBQgLAAgCgBgAhTiEIABAAIAAAAgAhfiGIACAAIABAAg");
	this.shape_71.setTransform(412.3,19.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#4F3137").s().p("ABJJYIAAgSIABgSQABgJAFgCQgFgBgCgDIAAgEIAGgdIAAgIIACAAIAAAAQgLgcgPgfQgOgaAAgpQgDgKgCgKQAAgNAGgFQgEgEgDgIIgEgIIADgLIgBgIIACAAIgEgGIAAgCQgEgLgCgOQgFgfgDgNQgDgPgOgmIgBgJIgHgUIgIAJIAAABIgBAKIgJAbQgNAhgFAZIgHAvQgEAcgGASQgIAZAFBCQAEA9gQAgIgDgCQgBgBAAgEIAAgBQAAgNAEgaIAEgQQABgQABgKIgBgPIgBguIAAgFIgBgPIACgZQACghAJgxIABgBIAAgCIABgFIADgLIADgPQAJgiAJgRIAGgIIAAAAQAAgDADgEIADgFIABgCIABgBIACgCQAEgGAEgCIAAgBIACACIABAAIABABIAAACIAFAGIAAAAIABADQAFAIAGAMQAJATAHAZIAHApQAEAXAGAMIACAXIAAAEIgBABIgEACIAJAZIAAAAIABADIgDAEQgJAzAZAwIAFALIAKAUQAKAYADANIAEABQAAADACACQgKgBgFABQgFACABAFQAAAHABgBIALACIABAAIgEAGIAXABIABABIABAAIAAAAIgDgKIgEgnIAAgHQAAgtgDgNIgBgIIgCgHIgBgHIAAgBIgHgYIgBgGIgCgJQgNgvAAgFIAAgCIAAgDIAAgDQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQgCgPAAgTQABggAAgRIgHg5IgCgUIAAgDIgBgNIAAgEIAAgCQgIACgHAAQhBAAgpgGQgegEgQgGIAAAAIgBgBIABABIgCAAIACAKIAAABIAAAIIAAADIAAACIAAABIgFBYIAFBXIgBALIgBABIAAACIgIAeQgHAgAAAHIAAAHIAAACQABAgAFAhIADAUIAQACIABACIABADIgEAEQgQgCgFACQgFABAAAGQAAAGABAAIAJABIgCADIAAAAIgDAEIgCABQADACABAEIAEABIAEAAIABAAIAWABIAEAAIABAAIABAAIABABIAAgBQAIALAAAxIgCADIgBACIABAAQABAAAAAAQAAABAAAAQAAABAAAAQABABAAABQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQgFACgTAAQgeAAgGgQIAAgUIABgTQABgHAFgLIgBgBQgDgEAAgGIgBgIQACgIAJgHI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ABAAIABABIAGABIAIACQAUADAIACIABABIABAAIABABIASAVQAIAJAAAgIAAAHIgBAEIAAAEQgDAGABAHIAAAGIgCAHIABADIgBAGIABAPIAAAGIACACIABgBQACAFAEAFIABABIABABIAAgBQAAgdAHgQIACAGIgCAYQgDARAAAJIgCACIgCgDIAAAAQgFAAgDgCIABAJQACAPADAIQACAIAKANIARATIAAAAgAgRl0IAAAAIABAEIAAAtIAAAAIABAAIAGAFQAGAEAJADIAEgCIASgFIAAAAIgGgJQgBgDAAgTIABgKQABgFACgDIgBAAQgIgDgEgJQgCgHAAgIQAAgJAFgJQACgFACgDIgCAAQgPAAgBgIIABgDIAEgBQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQACACAEAAQAQAAAFgKQACgFgBgFQAAgbgRAAQgGAAgEADIgEADIgEgBIAAAAIgCgBIgCABQgEAAgCgLIgDgRQgFgIgGgTIgIgcIgOgSIgCACIgHANQgJASgDAJIgBAEQABAAAEAEQAIAIAEAMIAAAEQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAgBAAQgBAAgIgMIgHgKIgFAZQADgBAHAEQAMAGAAACIgBADIABACQAAADgEAEQgGAFgIAAQgBAAgBAAQgBgBgBAAQAAAAgBAAQAAgBAAAAIAAgCQAAgFAFgCIACAAIAAgCIABgEIgCgBIgFgEIgBgBIAAABQAAAKgZARQgZAQgPACQACADAUAFQAKACAFADQAHADACAFIAAABIACABIABADIADALIACAAQAHABAAAEQAAAEgEAAIgDAAIACAFQAEAQACAOQAIgEARgEQAXgFAMAAgAEblxIAEACQgCgHAAgKIgCAPgAAnnZIAEAGIAAABIABAAIABAFIAAANQAAAWgSAFQgBAIgEAFQgEAGAAAIQAAAIAMANIAAAAIAAABIAAACQAGgDAMgDQATgFAUgCQAOgDAKgIQAIgHAFgJIAMgeQAIgTAAgKQAAgdgJgpQgEgTgRgPQgdgZg0AAQgNAAgMADIgBgBIgGAAIgBACIAAAAQgIADgIAEIgUALIABABIADACIAFAHQAHANADASQAEAMAJASQAEAKAAAPIAAADQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQACgFALgBIAEgBQAMAAAHALgAhkmrIgDgCIgBgBQAAgGAHADQAHACAAADIAAADIgDABQgCAAgFgDg");
	this.shape_72.setTransform(398.7,64.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6F453C").s().p("AiBB0IAAgBIAAAAQgNgMAAgJQAAgHAFgHQAEgFAAgIQATgEAAgXIgBgNIgBgEIAAgBIAAgBIAAgCIADgBQAPABgBAXQAAAHgFAMQgFAMAAAEQAAAEABABQACACAMAAQAYAAARgXQAIgLADgLIgBgHIgGAAIgJAEIgHADIgIAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgCAMgDQAPgHALgUIgaAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgDAEgCIAGgFQgBgCgOgGIgPgIIAjgXQgBgIgKgBIAAgCQABgDAHABIgBgDIgGgDIgUgMQgIgFgJgFQgfgFABgEQgDAAgKAFQgKADgHAAIgFAAIAAgGIABgFIAAAAIAAgBIAAgCIAAgBIABgCIAGAAIAAABQAMgDAOAAQA0AAAcAaQASAPAEASQAJAqAAAbQAAAKgIAUIgNAeQgEAIgIAHQgLAJgOACQgTADgTAFQgMACgGADgAhrhhIAAAAIABAAgAh3hjIADAAIgCAAgACBBMIAAAAQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAIgBAFIgBgBQAAgLALgeIAOggIAAgNIgNAJQgCgBAAgHIACgaQAAgagFgUQgIgfgRgDIAAgDIAFABIAHACQAJAEAIAHQAFAFACAGIAEAKIAHAZQAEAOADAEQACASgBAUQAAAZgSAlQgPAegDAKIAEgYgABQBhIABgGIgBgPIAAgGIAAgCIABgIIAAgGQAAgGADgHIAAgEIABgDIAAgIQAAgfgIgIIgSgWIgBgBIgBAAIgBgBQgIgCgVgDIgIgCIgFgBIgBgBIgBAAIAAgCIgBgBIgBgGIgKgKIAOgLIAAgBQAAgGAHAAQAGgBALADQAYAHAMANIAKAOQAGAJACAGQAEANAAAQIgBAbQAAAcgBAFQAAAGgLAjIAAABg");
	this.shape_73.setTransform(414.7,16);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#744755").s().p("ABHCVQgvgJgQgtQgOgoAagWQAOAZAKAkQAJAcAXAVQAIAHgHAAIgGgBgAiFBZQA1hpA7hqIACgCQAQAmgdA0QglA/gpA7QgHAJgGAAQgFAAgFgIgAAahmQgXgdAZgSQAZA9BEAOQAaAFgaAFQgKACgKAAQgtAAgegog");
	this.shape_74.setTransform(386.5,56.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A06456").s().p("AhaBjIgBgUQAAgFADgBQAEgBAEAJIAAARIAAALQgBAJgEAAQgDAAgCgTgAh0AOIgFgRIgBgCIAAgHIABgdQACgXABgEIAFgOQADgIAFgGQAPgTAOgCQAEAAADABQAEABAAAEQgMAAAAAFIAAACIgCABQADAAAAAEIgIAEIgCACIABgBQAKgDAAAIQAAACgEABQgFABgBADIgBACIAAADQAAAFgDAHQgEAIAAARIgCAUQgCAOgEAAQgEAAgBgGIAAgHIADgjIAAgDIgBAAQgEAAgBgCIgBgCQgCAJAAAoQAAAOACAeQgDgHgDgLgAhtg/IAGgMIAAgEQgFAJgBAHgABFAKIgDgKQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBABAAIAHgFQgKgKAAgEIACgDIAGgCQgBgEABgDQgKADAAgIQAAgEAHgBIgCgDIABgBQgIgEAAgEQAAgGALACIgBgBQAAgEAEgBQgEgCAAgCQAAgEANgDIACgBIAAgBIAAgDQAAgFAJAAIABAAQAAgFAHABQAIAAAAAFQAAAFgIAAIgBADQAEACAAAFQAAADgGACIAIAHQADAEAAADQAAADgFADQAQAIAAAEQAAAAAAABQAAAAAAAAQAAABgBAAQAAABgBAAIgEACIgIgDIAAAAQAAAFgIAAIABADQAAAIgSAAIAEAJQAAADgEADQgFADAAAFIABAIQgBAGgFAAQgBAAgEgLgABXgbIABAAIgBgBgABZgqIAFABIgGgDIgBAAIACACg");
	this.shape_75.setTransform(382.1,16.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6F453C").s().p("AibB9IAAgJIAAgDIAEgGQAIgLABgDQABgFAGgIIAAABIADABIACgCIAAAAIABAAIABAAIADgBIAAAAIADgBIgCAJQgBAPgDAHQgCAIgKANIgRAUQACgIAAgRgABIBJQgSgFgUgDQgNgCgLgIIAAgBQgGgFgEgFQACgCAGACIgJgZQgCgGAAgLIAAgHQABgGACAAIAPASQAPAWAPALIARAAIAAgRIgHgVQgGgOABgIQAAgFAJgBQAKgCAAgEIgHgMQgGgLAAgDQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQADgCARgBQgCgFgKgKIgJgKQAAgEAGAAIAJACIAHAAQgEgdgPgNQgOgIAAgCIAOgDIABgBQAMgCAPAAQAaAAAYALIAUAMIAAAAIgFACIgEAIQgHANgDASQgEALgJASQgFALAAAOIAAABIgBgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABQgDgDgIgBQgOgCgKANQgDAEgBAHIgBAMQAAAXATAEQAAAIAEAGQAEAGABAHQAAAJgNANIgBAAIAAABIAAACQgFgDgNgDgAiBBFQAAgTgEgNIgEgMIgBABIAAACIgBgGIgBgRQAAgVAEgUIAAgBQgMAPgBAAQgFAAgBgEIAAgEQABgLAEgWQAEgWAAgMQAAgoAzAFQARABARAHIAAAAIAIAHIABAAIACACIAEAEIAAAAIAIAGIgKAKIgBAGIgBABIAAADIgCgBIAAABIgFABIgIACQgWADgHADIgBAAIgBABIgCABIgSAVQgHAIAAAhIgBAHIACADIAAADQACAHABAHIAAAGIABAHIgBADIABAFQAAAQgCAEQgCAGgGAHIgBABg");
	this.shape_76.setTransform(388.6,19.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#885549").s().p("AhdCFIgBgnQgBgWgIgRQgBAAAAABQgBAAAAAAQAAABgBAAQAAABAAABIAEAYQgDgKgPgeQgSglAAgYIgBgDIABgEQgBgRACgPQADgDAEgPIAHgZIAEgKQACgGAFgGQAKgIAOgEIAGgBIAFABIABAAQACABAJAAQAcAFAfAVIAGAGQgRgHgRgBQgygFAAAoQAAAMgFAVQgEAWAAALIAAAFQAAADAFAAQABAAAMgPIABABQgFAUAAAWIABAQIABAHIgBACIACAZQADAQAAAIQgGAJgBAFQgBADgIALIgEAFIAAgCgAhbA7QgDAAAAAFIABAUQABATAEABQAEgBABgIIAAgMIgBgRQgDgIgDAAIgBABgAhxASQgDgdAAgQQAAgnADgKIAAACQABACAEAAIABAAIAAADIgCAjIAAAHQAAAHAFAAQAEAAACgPIABgTQAAgSAEgIQAEgHAAgEIAAgEIAAgCQACgDAFgBQAEgBAAgCQAAgIgLAEIgBAAIACgBIAJgFQAAgEgEAAIADgBIgBgCQAAgFANAAQAAgEgFgBQgCgBgFAAQgOACgPAUQgEAFgDAIIgFAPQgCADgBAYIgCAcIAAAHIABADIAGARQACAKAEAIIAAAAgAA+BDIgDgFIgNgeQgIgTAAgLQAAgbAJgqQAEgSASgPQAPgOAXgGQABACANAIQAPANAEAcIgHAAIgIgCQgHABAAAEIAJAKQAKAKACAFQgQABgEACQgBAAAAAAQAAAAAAABQgBAAAAABQAAAAAAABQAAADAHALIAGAMQAAADgKADQgJABAAADQAAAJAFAPIAHAVIAAARIgQAAQgPgLgQgWIgPgTQgDAAgBAGIAAAIQAAALADAGIAJAZQgFgCgCACgABHgqIgHADIgCADQAAADALAKIgIAGQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAIAEAMQAEAJABAAQAEAAABgGIAAgHQAAgEAEgFQAFgDAAgCIgFgKQASAAAAgHIgBgEQAJAAAAgEIAAgBIAIADIAEgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgEgRgIQAFgDAAgCQAAgEgDgDIgHgIQAFgCAAgDQAAgFgEgCIACgDQAHABAAgGQAAgEgHgBQgHAAgBAEIgBAAQgJABAAAEIAAAEIABABIgDAAQgNADAAAFQAAABAEACQgEABAAAEIACACQgMgDAAAGQAAAEAJAEIgBABIABADQgGABAAAEQAAAIAKgCQgBADABADgABTgqIABgBIAAABIgBAAgABVg5IgBgCIABAAIAFAEIgFgCgAhqheIgBAEIgGAMQACgGAFgKgAAIheIAAAAIACACIgCgCg");
	this.shape_77.setTransform(382.5,17.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#B28A7E").s().p("Ag+BhIAAgBIAHgKQACgDAAgSIgBgKQgBgGgCgCIABgBQAIgDADgJQADgHAAgHQAAgJgFgKQgCgEgDgDIADAAQAPAAAAgHIAAgDIgEgCQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAABQgCABgEAAQgQAAgFgKQgCgEAAgGQAAgaARAAQAGAAAEACIAFADIACAAIADAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAEgBACgJIABAAIADgBQABgOACgFQAHgQAQAAQAFAAACAIQABAEACACIAAABIAAAEQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIACgBQgEAIAAAFIAAAFIABAEIAAgBIABACQgBABAAAEQAAACAJAGQAIAJAAAIQAAAIgCAJIgEASQgEARgDABQgtADgDALQgCgEgDAQQgDAMAAAdIAAAFIABACIgLAEIgEABQgJgDgGgDgAgvg3QgJACAAARIAAAIQABAHAJAAIADgBIAAgCQgGgKAAgDIABgDQAAgEACgCIABAFQABACADAAIADAAIAAgEQAAgMgHAAIgCAAgAgZBgIAAAAIABAAIAAAAgABHgOIAAAAIAAAAg");
	this.shape_78.setTransform(404,23.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#A37165").s().p("Ag6B+IAAgGQAAgcACgMQADgRADAEQADgKAtgDQACgBAFgRIAEgTQACgJAAgIQAAgIgJgIQgIgHAAgBQABgEABgCIACADIACACQADADAGABIAEAAQABAAABAAQABAAAAAAQABAAAAgBQAAAAABgBIAAgBQAAgFgGgCIgCgBIAAgBIAAgFIABgBIAGgDIABAAQAAAKAYARQAaAPAPACQgCACgVAGQgIABgGADIAAAAIABgCQAAgFgIADQgGABgBADIABAEIADABQACgBAEgCIAAABQgDADgCADIAAAAIgCABIgBAEIgEALIgCAAQgGABgBAEQABADAEAAIACAAIgBAGQgFAQgBAOQgJgEgQgEQgWgGgNAAIAAACIgBAAIgBADIAAAtIAEACIgNAFIAAAAIAAAAIgHACIgBgCgAhRABIAAgHQgBgRAKgCQAJgBAAAMIAAAFIgDAAQgDAAgBgDIgBgEQgCACgBADIAAAEQAAADAGAIIAAADIgDABQgJAAgBgHgAgGgiIAAgGQAAgFADgHIABgBIADgEIABgCIAAAAIACgEIAHgLIAGAaQgDgCgIAFIgGADQgFAEAAABIABADIgBACIAAABIgBgDgAgxgkIAAgCIAEgQIAEgIIAEgNIABAAIABgGIAJgdIANgRIACACIAHAMQAJATADAIIABAFQgCAAgEADQgDAFgDAFIgEAJQgCgCgCgEQgBgIgFABQgSAAgGAPQgDAGAAAOIgDABIgCAAg");
	this.shape_79.setTransform(406.6,20.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#4F3137").s().p("ACTJZIAAgTIABgSQABgIAEgDQgEgBgCgCIAAgFIAFgcIAAgIIACAAIAAgBQgKgcgQgeQgNgbAAgoQgEgKgBgLQAAgMAFgFQgDgFgEgHIgDgIIACgMIAAgHIABgBIgDgGIAAgBQgEgMgDgNQgEgggDgNQgEgPgNgmIgDgIIgHgVIgHAKIAAABIgBAKIgKAaQgNAigEAYIgHAwQgEAcgGARQgIAaAEBCQAEA9gOAfIgEgCQgBgBAAgEIAAgBQAAgNAFgaIACgQQACgPAAgKIAAgQIgCguIAAgFIAAgPIABgZQADghAJgxIABgBIAAgCIABgFIACgLIAEgPQAJghAJgRIAGgIIAAgBQAAgCACgEIAEgGIABgCIABgBIABgBQAFgHADgBIAAgCIACADIACAAIABABIAAACIAFAFIAAABIABACQAGAJAGAMQAJASAHAaIAGApQAFAWAFANIADAXIAAAEIgCAAIgDADIAJAYIAAABIABACIgDAEQgKAzAZAwIAGALIAKAVQAKAXADAOIAEAAQAAADACACQgLgBgEACQgFABAAAGQAAAGABAAIAMABIABAAIgFAHIAYABIABAAIABABIAAgBIgDgKIgFgnIAAgGQABgtgDgOIgBgIIgCgHIgCgGIAAgBIgGgZIgBgFIgDgJQgMgwAAgFIAAgBIAAgDIAAgDQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQgDgOAAgTQACghgBgQIgGg5IgCgVIgBgDIgBgMIAAgEIAAgDQgHACgIAAQhCAAgogFQgdgEgQgHIAAAAIgBAAIABABIgDgBIACALIAAAAIABAJIAAADIAAACIAAABIgFBYIAFBXIgBALIgCABIAAABIgHAfQgIAgAAAHIAAAGIAAADQABAfAGAhIADAVIAPACIABACIACADIgEADQgQgCgFACQgFABAAAHQAAAGABgBIAIABIgBADIgBABIgCADIgCACQADACABADIAEABIAEABIABAAIAVAAIAFAAIABABIABAAIAAAAIAAgBQAHAMAAAwIgBADIgBACIABAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgFABgSAAQgeAAgGgQIAAgUIAAgTQABgGAGgLIgBgBQgEgFAAgFIAAgJQACgHAJgII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");
	this.shape_80.setTransform(391.3,64.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},14).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_56,p:{x:390.3,y:54.3}},{t:this.shape_55},{t:this.shape_54,p:{x:416.1,y:15.3}},{t:this.shape_53},{t:this.shape_52,p:{x:414.9,y:13.5}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49,p:{x:392.6,y:54.3}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:363.4,y:73.3}},{t:this.shape_44},{t:this.shape_43,p:{x:360.7,y:72.4}}]},1).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_54,p:{x:414.1,y:11.6}},{t:this.shape_63},{t:this.shape_52,p:{x:412.9,y:9.7}},{t:this.shape_62},{t:this.shape_49,p:{x:390.6,y:50.6}},{t:this.shape_56,p:{x:388.3,y:50.6}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_45,p:{x:361.4,y:69.5}},{t:this.shape_58},{t:this.shape_43,p:{x:358.7,y:68.6}},{t:this.shape_57}]},1).to({state:[{t:this.shape_54,p:{x:414.1,y:11.6}},{t:this.shape_63},{t:this.shape_65},{t:this.shape_52,p:{x:412.9,y:9.7}},{t:this.shape_49,p:{x:390.6,y:50.6}},{t:this.shape_56,p:{x:388.3,y:50.6}},{t:this.shape_64},{t:this.shape_62},{t:this.shape_45,p:{x:361.4,y:69.5}},{t:this.shape_58},{t:this.shape_43,p:{x:358.7,y:68.6}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_57}]},3).to({state:[{t:this.shape_56,p:{x:390.3,y:54.3}},{t:this.shape_55},{t:this.shape_54,p:{x:416.1,y:15.3}},{t:this.shape_53},{t:this.shape_52,p:{x:414.9,y:13.5}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49,p:{x:392.6,y:54.3}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:363.4,y:73.3}},{t:this.shape_44},{t:this.shape_43,p:{x:360.7,y:72.4}}]},8).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},12).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},39).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_66},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_56,p:{x:390.3,y:54.3}},{t:this.shape_55},{t:this.shape_54,p:{x:416.1,y:15.3}},{t:this.shape_53},{t:this.shape_52,p:{x:414.9,y:13.5}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49,p:{x:392.6,y:54.3}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:363.4,y:73.3}},{t:this.shape_44},{t:this.shape_43,p:{x:360.7,y:72.4}}]},1).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_54,p:{x:414.1,y:11.6}},{t:this.shape_63},{t:this.shape_52,p:{x:412.9,y:9.7}},{t:this.shape_62},{t:this.shape_49,p:{x:390.6,y:50.6}},{t:this.shape_56,p:{x:388.3,y:50.6}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_45,p:{x:361.4,y:69.5}},{t:this.shape_58},{t:this.shape_43,p:{x:358.7,y:68.6}},{t:this.shape_57}]},1).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_54,p:{x:414.1,y:11.6}},{t:this.shape_63},{t:this.shape_52,p:{x:412.9,y:9.7}},{t:this.shape_62},{t:this.shape_49,p:{x:390.6,y:50.6}},{t:this.shape_56,p:{x:388.3,y:50.6}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_45,p:{x:361.4,y:69.5}},{t:this.shape_58},{t:this.shape_43,p:{x:358.7,y:68.6}},{t:this.shape_57}]},3).to({state:[{t:this.shape_56,p:{x:390.3,y:54.3}},{t:this.shape_55},{t:this.shape_54,p:{x:416.1,y:15.3}},{t:this.shape_53},{t:this.shape_52,p:{x:414.9,y:13.5}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49,p:{x:392.6,y:54.3}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:363.4,y:73.3}},{t:this.shape_44},{t:this.shape_43,p:{x:360.7,y:72.4}}]},8).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},12).to({state:[{t:this.shape_7},{t:this.shape_11},{t:this.shape_12},{t:this.shape_5},{t:this.shape_4},{t:this.shape_10},{t:this.shape_6},{t:this.shape_8},{t:this.shape_9},{t:this.shape},{t:this.shape_2},{t:this.shape_3},{t:this.shape_1}]},1).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_3},{t:this.shape_2},{t:this.shape}]},27).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).wait(6));

	// graficiarka reka
	this.instance = new lib.Wygenerujklatkipośrednie11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(394.4,48.8,0.998,0.998,11.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:397.7,y:20.3},4).wait(1).to({startPosition:0},0).to({x:393.2,y:39.3},4).to({x:399.2,y:31.9},3).to({x:401.9,y:33.7},1).to({scaleX:1,scaleY:1,rotation:22.6,x:407.5,y:29.2},5).to({scaleX:1,scaleY:1,rotation:11.8,x:394.4,y:48.8},7).to({_off:true},1).wait(41).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:397.7,y:20.3},4).wait(1).to({startPosition:0},0).to({x:393.2,y:39.3},4).to({x:399.2,y:31.9},3).to({x:401.9,y:33.7},1).to({scaleX:1,scaleY:1,rotation:22.6,x:407.5,y:29.2},5).to({scaleX:1,scaleY:1,rotation:11.8,x:394.4,y:48.8},7).to({_off:true},1).wait(40));

	// Warstwa 5
	this.instance_1 = new lib.Wygenerujklatkipośrednie9("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(344.9,-3.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({x:340.4,y:15.5},4).to({x:346.4,y:8.1},3).to({x:349.1,y:9.9},1).to({scaleX:1,scaleY:1,rotation:22.6,x:368,y:-13},5).to({scaleX:1,scaleY:1,rotation:11.8,x:347.7,y:14.7},7).to({_off:true},1).wait(46).to({_off:false,scaleX:1,scaleY:1,rotation:0,x:344.9,y:-3.5},0).to({x:340.4,y:15.5},4).to({x:346.4,y:8.1},3).to({x:349.1,y:9.9},1).to({scaleX:1,scaleY:1,rotation:22.6,x:368,y:-13},5).to({scaleX:1,scaleY:1,rotation:11.8,x:347.7,y:14.7},7).to({_off:true},1).wait(40));

	// Warstwa 6
	this.instance_2 = new lib.Wygenerujklatkipośrednie1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(363.3,-2.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({x:358.8,y:16.8},4).to({x:364.8,y:9.3},3).to({x:367.5,y:11.1},1).to({scaleX:1,scaleY:1,rotation:22.6,x:384.6,y:-4.8},5).to({scaleX:1,scaleY:1,rotation:11.8,x:365.5,y:19.7},7).to({_off:true},1).wait(46).to({_off:false,scaleX:1,scaleY:1,rotation:0,x:363.3,y:-2.2},0).to({x:358.8,y:16.8},4).to({x:364.8,y:9.3},3).to({x:367.5,y:11.1},1).to({scaleX:1,scaleY:1,rotation:22.6,x:384.6,y:-4.8},5).to({scaleX:1,scaleY:1,rotation:11.8,x:365.5,y:19.7},7).to({_off:true},1).wait(40));

	// reka mieszanie farby
	this.instance_3 = new lib.Wygenerujklatkipośrednie8("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(408,50.2);
	this.instance_3._off = true;

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B28A7E").s().p("AgFANIAAAAIgDgDIAAABQgDgDgEAAIACgBIABABIAMgMQAHgKABgEIAGAGQABADABAFQAAAEgJAKIgHAJIgFgGg");
	this.shape_81.setTransform(421.3,68.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#BEA09E").s().p("AATAPIgBgBIghABQAAgRgDgJIABAAIABgBIABgCQADAAABADIAIACIAHgCIAAACIAKAHIABABIAAADQABAJADAEg");
	this.shape_82.setTransform(418.7,70.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#4F3137").s().p("AAbCEQgCgDAAgKQgBgOACgDIAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIAAABIAAgDIgMACIgDgCQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIgIgIIgGgHQgGgEgOgRIgNgUIgBgBIgFgGIgDABIABgBQgDgGgDgFIgGgKQgTgkgSglQgBgcAWgZQADgEAtgLIABAAIAegJIACABQALAZAaA0QAQAfAMAVIAAAAQAJAYABAaQAAAKgEALIACAAQAAAAAAABQABAAAAAAQAAABAAABQAAABAAABQABAGgCAAIAFAFQAEAGABAHQAAAFgGALQgHANgIAAIgBAAIgBAAIgDAAIABALIgCACQgDgEgBgJIAAgEIgBgBIgKgHIAAgCIgIACIgIgCQgBgDgDAAIgBACIgCABIgBgCIABACQADAJgBARIAiAAIABABIABABQAAABAAAAQAAABgBAAQAAAAAAAAQAAABAAAAIgPABIgIAAQgLAAgEgHgABCBtIAAABIAFAFIAIgJQAJgKAAgEQgBgGgBgCIgGgGQgBAEgHAKIgNAMIgBAAIgBABQADgBAEADIAAAAIACACg");
	this.shape_83.setTransform(414,58.7);

	this.instance_4 = new lib.Wygenerujklatkipośrednie7("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(408,50.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},2).to({state:[]},1).to({state:[{t:this.instance_4}]},54).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},2).to({state:[]},1).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({x:415.2,y:44.6},2).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({x:408,y:50.2},2).to({_off:true},1).wait(54).to({_off:false,x:415.2,y:44.6},2).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({x:408,y:50.2},2).to({_off:true},1).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(68).to({_off:false},0).to({_off:true,x:415.2,y:44.6},2).wait(78));

	// graficiarka reka2
	this.instance_5 = new lib.Wygenerujklatkipośrednie3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(405.8,54.1,0.994,0.994,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(40).to({_off:false,scaleX:1,scaleY:1,rotation:0,x:391.4,y:47},0).to({x:413.2,y:23.2},7).to({scaleX:1,scaleY:1,rotation:13.6,x:417.1,y:27.9},3).to({scaleX:1,scaleY:1,rotation:-21.5,x:392.9,y:48.9},9).to({scaleX:0.99,scaleY:0.99,rotation:11.1,x:405.8,y:54.1},6).to({_off:true},2).wait(40).to({_off:false,scaleX:1,scaleY:1,rotation:0,x:391.4,y:47},0).to({x:413.2,y:23.2},7).to({scaleX:1,scaleY:1,rotation:13.6,x:417.1,y:27.9},3).to({scaleX:1,scaleY:1,rotation:-21.5,x:392.9,y:48.9},9).to({scaleX:0.99,scaleY:0.99,rotation:11.1,x:405.8,y:54.1},6).wait(15));

	// farba2
	this.instance_6 = new lib.Wygenerujklatkipośrednie5("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(396.9,23.2);
	this.instance_6._off = true;

	this.instance_7 = new lib.Wygenerujklatkipośrednie6("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(415.6,31.9,0.994,0.994,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},41).to({state:[{t:this.instance_6}]},7).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},9).to({state:[{t:this.instance_7}]},6).to({state:[]},2).to({state:[{t:this.instance_6}]},40).to({state:[{t:this.instance_6}]},7).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},9).to({state:[{t:this.instance_7}]},6).to({state:[]},2).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(41).to({_off:false},0).to({x:418.7,y:-0.6},7).to({scaleX:1,scaleY:1,rotation:13.6,x:428,y:6},3).to({scaleX:1,scaleY:1,rotation:-21.5,x:389.2,y:24.8},9).to({_off:true,scaleX:0.99,scaleY:0.99,rotation:11.1,x:415.6,y:31.9},6).wait(42).to({_off:false,scaleX:1,scaleY:1,rotation:0,x:396.9,y:23.2},0).to({x:418.7,y:-0.6},7).to({scaleX:1,scaleY:1,rotation:13.6,x:428,y:6},3).to({scaleX:1,scaleY:1,rotation:-21.5,x:389.2,y:24.8},9).to({_off:true,scaleX:0.99,scaleY:0.99,rotation:11.1,x:415.6,y:31.9},6).wait(15));

	// cien graficiarki
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(79,49,55,0.502)").s().p("ADPJcIAAAEIgDACIADgGgACWJLIgDAAIAAgHIABgSQABgIAEgDQgEgBgCgCIAAgFIAFgcIAAgIIACAAIAAgBQgKgcgQgeQgNgbAAgoQgEgKgBgLQAAgMAFgFQgDgFgEgHIgDgIIACgMIAAgHIABgBIgDgGIAAgBQgEgMgDgNQgEgggDgNQgEgPgNgmIgDgIIgHgVIgHAKIAAABIgBAKIgKAaQgNAigEAYIgHAwQgEAcgGARQgIAaAEBCQACAXgCAUQgMAOgFAXIgDALIgRAgIgGANIgCADQgGgEgLABIAAgFIAAgTQABgGAGgLIgBgBQgEgFAAgFIAAgJQACgHAJgIIgBgEQgKg8AAgnQAAgiAHgMQAGgLAAgZIAAgEIACgBIACAAQgDgNgBgSIAAg0QAAgmADgSIACgHIAAgOIAAgDIgBgMIABgKIABgGIAFgHIgEgCQgLgHAAgJIABgLIAAgFIABgEQgVgOgHgWIAAgnIgeAsQgqA8gZAAIgLgBIAAABQAAAEgFAIIgBABIAGAIIgBACQAFADACAGQACAEAAAGIAAACQgBAJgEAGIgGAGIgFACQgGADgIAAQgTAAgGgGQgDgCAAgGIABgGIgDACIgFgEIAAgFQgKgFgCgGQgBgCAAgJIAAgBQgDgDgBgDIgBgJQAAgHAGgJQAFgIAGgBIAAAAQADgFAEgDQgLgPAAgOQAAgHA7hpQBEh2AUg0IABAAQAKgXAggXQAqgdA2gKIAAAAIAOAEIABAAIgBgBQgBgBAAgEIAAgfQABgKACgGQgbgNgNgfQgIgWAAgnQAAg+AegjQAageAogBQAmgBAcAXQAeAYAAAkQAAAzgKAjQgSA5gqANIgKAhIAAATIADgBQADACACADIgDADQAKAEALACQANAIALAIQASALANAMIAMANIAHAHIAAAAIAHALIAGAKQAMAdAAA2IABAXQgBASgHAIQgBARgJAbQgNAqgCAIQgJApgFAIQgMAYgVALIgBABQAAAKgHALQgGAIgIAFIgCABIACAJIACAMIAAADIAEAVIAFAiIAABzQATAuAGA+IADAwIAAABIgFAbIgWBcQgGgCgHgBgAgYBtIAAgBIgBAAIABABgAjrBdIAAABIABgBIgBAAgADWj1IABgBIgEgFIADAGg");
	this.shape_84.setTransform(395.8,66.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(79,49,55,0.502)").s().p("Ag4JMQAAgFAMgWQAKgRAJgKIgBgCIAAgHIAAgNQABgEAIgJQgLgegCgoIgBhRQgCgvgFgqQgDgeAAgnIgFgwQgBgbALgJQgNgIAAgLQgBgFABgFQABgGADgCIgPgEQgBAAAAgGQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAABgBQgGgIgDgPQgdAdggANIAAABIgCgDIgJADQgcAHgVgFIAAABIAAAAIgEAAIgCAAIgBABIgCADIgBAAQgGAEgGAAIADADIAKAKQAEAGAGAFIADAEIAAACIABAAIACACIABABIACACIACABIABAAIABAGQACAJgEAJIgBABQgIALgLAKQgHAFgJgCIgDgCIgBgCIgCgCIgCgBIAAgCIAAgGIAAgBIgCABQgHAFgDgGIgHgFIgFgCQgIgCABgGQgEAEgGgGQgEgEgBgFIgDgNIgEAAQgIgCgFgIQgDgDAAgFIAAgKIgCgFIAAgDIACgEQAEgFAEgDIAUgOIACgCQAEgBAEABIADAAIACABIADAEIACADIAEADIABAAIAAABIAAACIABABIACgBIgDgDIABgDIAEgHIABgBIADgBQgDgFgCgFQgGgYANgKIAEAAIAAAAQATgeApg0IA+hOQAVgaAPguIAEgLQAIgQAQgPIAEgDIAAAAQANgSAVgLIACgBIAAACQAdgOAqgGIAAgDQABgDAEgBQgCgJAAgQQgDgIgBgIQAAgJADgEQgQgMgLgSQgJgQgEgTIgCgSQAAgiASgjQAPgbAUgOIAAgDQAAgNApgHQAvgIAiAZQAGAEAHAHIAJgDQA9gRAABZQAAAkgQAeQgUAogJArIgBABIAAABQAGAOAAAEIgBADQgBADgDABQgDgCgJgTIgGgPIgFABQAAAFgJAjQgDANAAAKIAEACQAcARAAAOIAAABQALAOAJARQANAbAAASQAAAVgOAfIgRApIgEANIgCACQgEAJgGAGIAAACIgCAYQAAAfgSAkQgPAfgXAPIAAACQAAASgFAIQgDAFgGAFQAEAQAAAZIAAAxQAAASAGAhQAFAbABAOQAjAwAUBEIAABRQgEAFgCAIQgYAjgOArIgGgEIgEABIgBgBIAAgKQAAgNAFgKIAIgPIAAgCIAEgJQgGgMgHgTIgQgpQgQgegEgKQgFgOAAgXIAAgUQABgIADgEQgIgHgGgJQgFgKAAgIQAAgEABgDQgOgSgTg5QgQgtgCgMIAAgEIAAgEQgCgEgBgFQgBAHgIAMQgHAKgGAEIgKCcIgKCQQgMAOgDAUQgTAagRAeIgGAOIgKgCIgOALQgDgEAAgGgAC5IzIABAAIAAAAIgBAAgAkQBqIAAgBIgCgBIACACgAj4BEIACAAIgBgBgADYkQIACgBIgBAAIgBABgAC7lWIABACIAAgWIgBAUg");
	this.shape_85.setTransform(394.2,64.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(79,49,55,0.502)").s().p("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");
	this.shape_86.setTransform(401.2,65);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(79,49,55,0.502)").s().p("AhSJSIgIgCIgBgCIgBgDIAAgDQgBgFADgDIADgDIACgEIACgEIgCAAIgCAAIgFgCIgDgCQgEgFADgGQACgGAEgGQAFgJAIgHIAAgBQAAgEABgDIAFgKQACgDABgFIABgCQgDgEAAgGIAAgRQgLgQgEgZIgLg/QgEgfgJgcQgFgRACgNIgDAAQAAgMgEgJIgBgKQABgIgCgGIgDhJQgBgUAHgRIgBAAIAAAAQgGgFgFgGIAAgBIAAgKIAAgNIAAgCIAAgCIAAgCIABgEIgFgEIgEgGIgDgEIgBgCIAAgBIgDgCIgBgCIgDgDIgDACQgiAZgoAGQgfAGgggFIgBgBIgCABIgCADIgBABQgGADgGgBIACADIAIAMIAJALQADAEAAADIABABIABABIABABIADACIABACIABAFQABAMgGAHQgKALgMAHQgIAFgIgEIgCgCIgCgBIgCgCIgBgCIAAgCIAAgGIAAAAIgBAAQgHAEgDgHQgEgGgIgDQgHgCACgGQgFADgFgGQgDgFgBgFIgBgOQAAABgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgIgDgEgHQgCgEABgFIAAgKIAAgFIAAgEIADgDQADgFAFgDIAVgLIADgBIAHAAIADABIACACIADADIACAEIAEADIAAABIABACIgBACIAEAAIgBAAIgCgEIABgDIAFgHIABgBIAEgBIAEgCIAAAAIAFACIABAAIgBgKIABgSQAAgFABgDIAXgaIABAAIAAADQAfggArghQAkgdAagmQASgbAKgfQAFgPALgKQABgEAEgEIAKgLIAQgTIAPgMIgBAAIACgBIAEgDIAFgCQAJgGAKgEIATgJIAIAAQAAgDAEgCIABABIAAgGIABgZQABgMgFgLIAAgEIgGACQgLgFgLgNQgLgNgBgTIgBgaQAAgGACgDIgBgBIgCgDIgBgBIgCgCQgEgBgCgEIgEgIIgCgEIADgFIABAAIAKgBIAKABQASgBAIgOIAEgHIAAAAIACgCIABgDIAAgDIAAAAIACgFQAGgQALgOIADgEQgBgEAGgDIAAgCIAAgBIAAgCIAAgDIACgCQAHgGAIgFIAZgLIAPgGQBCgFAhAwQALgKANgIQAngVApgNQAwAFAVAvQAUAqgEAuQgDAtAAAtIABADQAAADACACQACADAFADQAKAFgBALQgPgHgIgKQgDgBgCgCIgDgEIgEgDIgBgBIAAACQgBAIACAJQACAHAEAHIAJAUQAGALgCAKIAAAAQgSABgKgQIgTgbQgKgOgHgQQgDgGgBADIgBABQgOADgIgQQgGgNgCgOQgBgPADgPQACgKAAgMQgGgCgCgEIgGgKIgHgIIgHgIIgBgBQgVgCgVAFQAIAvgbAsQgcAvgwAGQgHgEgNAEIgFABQgagBAAAXIABACQADAGAFADQAGAFAHABIAFACQAHAAAHgDIADABIgBgCIAEAAIAJAAIACACIAAABIABAAIgCgDIAEAAIADgBQBaATAgBOQAGAOgDAOQgQBXhBA6QgQANgSACQAGAagNAdQgOAegYAYQgLALgOAHIAAAFIAAAJIAAAHIgBACIgBACIgEADIgDAEIgBABQAAACgDADQgEAGgCAHIgBANIgBAFIABAAIABAlQAAAOAFAOQARA5AcA1QAcA2gBA/IgBAYIgBABIgBACIAAADIABABIAAABIADABIgBAAIADAFIADAEIABAEIAAACIgBACIgBABIAAABIgCABIgBABIgEACIgVAFQgZAGgHAEIgaAJIgDACIgBgBIgBgCQgEgGAFgHQAFgGAIgDIALgGQAGgDAGABIAAAAQABgEADgBQAFgCgEgFQgDgBgBgEQAAgEACgDIAFgIIABgCQgIgUgFgaQgJgygaguQgagvgVgyQgFgNgDgNQgDgCAAgEQgBgHgCgHIgEgMIgGAFIgCAFQgGAMAAAOQgCA5AJA1QAJA1AGA2QAEApgEAlIgDAGIgBAGIgIAIIgYAdQgJAMgHANIgBACIgGgBgAA2BzIAAgCIAAAAgAgHBzIABAAIgBgCIAAACgAlzBmIAAgBIgCgBIACACgAlWBCIAAABIACAAIgCgBgACrkOIABAAIABgBIgGgCIAEADgAA8ktIABAAIgBgBIAAABgAFik1IACABIgBgCgAEll6IABAAIAAgBgAFfmLIAAgBIgCgBIACACgAAEnwIABAAIABAAIgBgCIgBACgAAgogIACACIAJgIQgFAEgGACg");
	this.shape_87.setTransform(402.3,64.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(79,49,55,0.502)").s().p("AhSJSIgIgCIgBgCIgBgDIAAgDQgBgFADgDIADgDIACgEIACgEIgCAAIgCAAIgFgCIgDgCQgEgFADgGQACgGAEgGQAFgJAIgIIAAAAQAAgEABgDIAFgKQACgDABgFIABgCQgDgEAAgGIAAgRQgLgQgEgZIgLg/QgEgfgJgcQgFgRACgNIgDAAQAAgMgEgJIgBgKQABgIgCgGIgDhJQgBgUAHgRIgBAAIAAAAQgGgFgFgGIAAgBIAAgKIAAgNIAAgCIAAgCIAAgCIABgEIgFgEIgEgGIgDgEIgBgCIAAgBIgDgCIgBgBIgDgEIgDACQgiAZgoAGQgfAGgggFIgBgBIgCABIgCADIgBABQgGADgGgBIACADIAIAMIAJALQADAEAAADIABABIABABIABABIADACIABACIABAFQABAMgGAHQgKALgMAHQgIAFgIgEIgCgCIgCgBIgCgCIgBgCIAAgCIAAgGIAAAAIgBAAQgHAEgDgHQgEgGgIgDQgHgCACgGQgFADgFgGQgDgFgBgFIgBgOQAAABgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgIgDgEgHQgCgEABgFIAAgKIAAgFIAAgEIADgDQADgFAFgDIAVgLIADgBIAHAAIADABIACACIADADIACAEIAEADIAAABIABACIgBACIAEAAIgBAAIgCgEIABgDIAFgHIABAAIAEgCIAEgCIAAAAIAFACIABAAIgBgKIABgSQAAgFABgDIAXgaIABAAIAAADQAfggArghQAkgdAagmQASgbAKgfQAFgPALgKQABgEAEgEIAKgLIAQgTIAPgMIgBAAIACgBIAEgDIAFgDQAJgFAKgEIATgJIAIAAQAAgDAEgCIABABIAAgGIABgZQABgMgFgLIAAgEIgGACQgLgFgLgNQgLgNgBgTIgBgaQAAgGACgDIgBgBIgCgDIgBgBIgCgCQgEgBgCgEIgEgIIgCgEIADgFIABAAIAKgBIAKABQASgBAIgOIAEgHIAAAAIACgCIABgDIAAgDIAAAAIACgFQAGgQALgOIADgEQgBgEAGgDIAAgCIAAgBIAAgCIAAgDIACgCQAHgGAIgFIAZgLIAPgGQBCgFAhAwQALgKANgIQAngVApgNQAwAFAVAvQAUAqgEAuQgDAtAAAtIABADQAAADACACQACADAFADQAKAFgBALQgPgHgIgKQgDgBgCgCIgDgEIgEgDIgBgBIAAACQgBAIACAJQACAHAEAHIAJAUQAGALgCAKIAAAAQgSABgKgQIgTgbQgKgOgHgQQgDgGgBADIgBABQgOADgIgQQgGgNgCgOQgBgPADgPQACgKAAgMQgGgCgCgEIgGgKIgHgIIgHgIIgBgBQgVgCgVAFQAIAvgbAsQgcAvgwAGQgHgEgNAEIgFABQgagBAAAXIABACQADAGAFADQAGAFAHABIAFACQAHAAAHgDIADABIgBgCIAEAAIAJAAIACACIAAABIABAAIgCgDIAEAAIADgBQBaATAgBOQAGAOgDAOQgQBXhBA6QgQANgSACQAGAagNAdQgOAegYAYQgLALgOAHIAAAFIAAAJIAAAHIgBACIgBACIgEADIgDAEIgBABQAAACgDADQgEAGgCAHIgBANIgBAFIABAAIABAlQAAAOAFAOQARA5AcA1QAcA2gBA/IgBAYIgBABIgBACIAAADIABABIAAABIADACIgBAAIADAEIADAEIABAEIAAACIgBACIgBABIAAAAIgCACIgBABIgEACIgVAFQgZAGgHAEIgaAJIgDACIgBgBIgBgCQgEgGAFgHQAFgGAIgDIALgGQAGgDAGABIAAAAQABgEADgBQAFgCgEgFQgDgBgBgEQAAgEACgDIAFgIIABgCQgIgTgFgbQgJgygaguQgagvgVgyQgFgNgDgNQgDgCAAgEQgBgHgCgHIgEgLIgGAEIgCAFQgGAMAAAOQgCA5AJA1QAJA1AGA2QAEAogEAnQgCACgBADIgBAGIgIAIIgYAdQgJAMgHANIgBACIgGgBgAA2BzIAAgCIAAAAgAgHBzIABAAIgBgCIAAACgAlzBmIAAgBIgCgBIACACgAlWBCIAAABIACAAIgCgBgACrkOIABAAIABgBIgGgCIAEADgAA8ktIABAAIgBgBIAAABgAFik1IACABIgBgCgAEll6IABAAIAAgBgAFfmLIAAgBIgCgBIACACgAAEnwIABAAIABAAIgBgCIgBACgAAgogIACACIAJgIQgFAEgGACg");
	this.shape_88.setTransform(400.3,60.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(79,49,55,0.502)").s().p("ACGJiIAAACIgCABIACgDgAhBJXIAAABQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAIgBAAIAEgFgABWJMQgFgDgIgBIABgRQACgJAEgDQgFAAgCgDIAAgFIAGgcIAAgIIABAAIAAgBQgKgbgQgfQgNgbAAgoQgEgKgBgLQAAgMAGgFQgEgFgDgHIgEgIIADgLIgBgIIACAAIgDgHIgBgBQgEgLgCgOQgFgggDgNQgEgPgNgmIgBgIIgIgVIgHAKIAAABIgBAKIgKAaQgNAigEAZIgHAvQgEAcgGARQgIAaAFBCQABATgBAQQgEAGAAALQgLAMgGAXQgCAFgTAjIgIARQgFgEgJgBIAAgHIABgTQAAgHAHgLIgBgBQgFgEAAgGIAAgIQACgIAJgHIgBgFQgKg8AAgmQABgjAGgMQAGgLAAgZIABgEIACAAIABAAQgCgOgBgSIgBg0QAAgmAEgSIABgGIAAgPIAAgCIgBgNIABgKIABgFIAFgHIgEgCQgKgHgBgJIABgLIAAgGIABgDQgVgOgHgXIAAgnIgeAsQgqA8gZAAIgLAAIAAABQABADgGAIIAAABIAFAIIgBACQAFADADAGQABAEAAAGIAAADQgBAIgEAGIgFAGIgGACQgFADgJAAQgTAAgGgGQgCgCAAgGIAAgGIgDADIgEgFIgBgEQgJgGgCgGQgCgCAAgJIAAgBQgDgDgBgDIAAgJQgBgHAHgJQAFgIAFAAIAAgBQADgFAEgCQgLgQAAgOQAAgHA8hpQBDh2AVg0IAAAAQALgXAfgXQAqgdA3gJIAAgBIACABIgBgIIgBgOQgBgJAAgEIgDACQgNAHggAAQgIAAgCgEIACgCQgHgFgGgQQgEgPAAgLIAAgEIgDgGQgDgKgEgBIgZgGQgMgDAAgHQAAgIAKgEQAXgHAGgEQAEgCALgLQAGgHAFgCIAAgDIAAgGQAAgHAEgPIAHgVQAGgVAKgNIAGgDIADgBIAAAAQAAgKAkgMQAogOAiAIQAaAFAOAKQAJAIASAQQAFAGAEAHQACgCAFgBIAFAAIABgBIACgBQADgHAYgQQAWgOAQgHIATgJIABgBIALgDIASgBIADABIALADQAIACAHAGIAMAOQAHAJADAPIAEAZIAAACIABABIAAAEQABAPAAAaQABAdgTAjQgSAkAAAHIADAUIAAADIABACQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgDAAgEgEIgCgEIgCAbQAAAnADAFIgDACIgCgDIgCABQgGAAgMgRQgLgPgEgLQgDgMgBgJIgBgSQgGgLgBgYIABgKIABgDIAAgeQAAgSgHgXQgBgEgFgGQgHgHgFgCQgKgGgEgBIgHgBIgPgDIAAABIgCAEIgDABIgEAAQgGADgKACIADAZIAAAVQAAAOgHARIgOAfQgJATgXAJIgvAIIgUAKIAAAMQAAAKAHANIAYANIAPAIIADAAIAYAQQARALANAMIAMANIAHAHIAAABIAHAKIAGALQAMAcABA2IAAAYQgBARgHAIQgBARgJAbQgNAqgCAIQgJApgEAJQgNAXgVALIgBABQAAAKgHAMQgGAHgHAFIgCABIABAJIACANIABACIADAVIAGAiIAABzQASAuAGA+IADAmQgEAPgBAUQgBAOgMAuIgIAeIgEgBgAhiBxIAAgBIgBAAIABABgAk1BhIAAABIABgBIgBAAgAgQlAIABAAIgBAAgAEcluIADACQgCgHAAgLIgBAQgAD7l4IAAABIAAgBgAhLnjIABAAIgBgBg");
	this.shape_89.setTransform(402.9,67.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(79,49,55,0.502)").s().p("ACXJUIgEgBIABgRQABgIAEgDQgEgBgCgCIAAgFIAFgcIAAgIIACAAIAAgBQgKgcgQgeQgNgbAAgoQgEgKgBgLQAAgMAFgFQgDgFgEgHIgDgIIACgMIAAgHIABgBIgDgGIAAgBQgEgMgDgNQgEgggDgNQgEgPgNgmIgDgIIgHgVIgHAKIAAABIgBAKIgKAaQgNAigEAYIgHAwQgEAcgGARQgIAaAEBCIABAaIgIATQgGAPgOArIgNAoQgHgMgPgDIAAgQQABgGAGgLIgBgBQgEgFAAgFIAAgJQACgHAJgIIgBgEQgKg8AAgnQAAgiAHgMQAGgLAAgZIAAgEIACgBIACAAQgDgNgBgSIAAg0QAAgmADgSIACgHIAAgOIAAgDIgBgMIABgKIABgGIAFgHIgEgCQgLgHAAgJIABgLIAAgFIABgEQgVgOgHgWIAAgoIgeAtQgqA8gZAAIgLgBIAAABQAAAEgFAIIgBABIAGAIIgBACQAFADACAGQACAEAAAGIAAACQgBAJgEAGIgGAGIgFACQgGADgIAAQgTAAgGgGQgDgCAAgGIABgGIgDACIgFgEIAAgFQgKgFgCgGQgBgCAAgJIAAgBQgDgDgBgDIgBgJQAAgHAGgJQAFgIAGgBIAAAAQADgFAEgDQgLgPAAgOQAAgHA7hpQBEh2AUg0IABAAQAKgXAggXQAqgdA2gKIAAAAIACAAIAAgBIAGADQAIgPAAgLIABgMIgUgKIgvgIQgXgJgJgTIgOgfQgHgSAAgOIABgUIADgZQgLgCgGgEIgEABIgDgCIgCgDIAAgBIgPADIgGABQgFAAgKAHQgFACgGAHQgGAGgBAEQgHAXAAASIAAAeIABACIABAKQAAAZgHALIAAARQgBAJgEANQgEALgLAPQgMARgGAAIgCgBIgCADIgDgCQADgFAAgnIgCgbIgCADQgEAFgCAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAIACgCIAAgDIACgUQAAgIgSgjQgSgjAAgdQAAgbABgPIAAgDIABgCIAAgCIAEgZQADgOAHgJIAMgOQAHgGAIgCIALgDIADgBIASABIAMADIAAABIAUAJQAPAHAWAOQAYAPADAIIACABIABABIAFAAQAFABACACQAEgHAGgGQARgRAJgHQAOgKAZgFQAigIApAOQAlAMAAAJIgBABIAEABIAFADQAKANAGAUIAHAWQAFAPAAAHIAAAGIgBACQAGADAFAGQALAMAEACQAGADAYAIQAKADAAAJQAAAGgNADIgZAHQgDABgEAJIgCAHIAAADQAAALgFAQQgGAQgGAFIACACQgDAEgHAAQggAAgNgIIgEgCQABAFgCAJIgBAOQAAAGgDAEIATAKIAPAJIACAAQANAIALAIQASALANAMIAMANIAHAHIAAAAIAHALIAGAKQAMAdAAA2IABAXQgBASgHAIQgBARgJAbQgNApgCAJQgJApgFAIQgMAYgVALIgBABQAAAKgHALQgGAIgIAFIgCABIACAJIACAMIAAADIAEAVIAFAiIAABzQATAuAGA+IADAuQgBAJABAHIgOA1IgMAxQgGgEgHgCgAgYB9IAAgBIgBAAIABABgAjrBtIAAABIABgBIgBAAgABAkvIAAAAIABgBIgBAAIgBAAIABABgAjAlhIAEgCIgCgQQAAALgCAHgAiclsIAAgBIAAgBIAAACgADDmdIAAAAIADgBIAAgBIAAAAIgDACgACqnZIAAABIAAgBg");
	this.shape_90.setTransform(395.3,66.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84}]}).to({state:[{t:this.shape_85}]},14).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},3).to({state:[{t:this.shape_87}]},8).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_85}]},12).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},39).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_87}]},11).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_85}]},12).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_89}]},27).to({state:[{t:this.shape_90}]},6).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(366,4.1,55.1,123.8);


(lib.galeriaOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// maska (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsfCWQgLgzgMgiIgJgYIAegoQAMgaAcgaIA0gyQCViTDJhAQAGgBAEACQCCgvCNgPQD0gaDkBMQD4BSC/DBIgJAcQgMAggYA6QgYA5gHBjQicirjWhGIgigLQjSg9jmAnQjZAli6B0Qi5B0hhCgQgDh6gYhtg");
	mask.setTransform(-2.2,-174);

	// swiatlo
	this.instance = new lib.Wygenerujklatkipośrednie42("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(96.6,-199.3,1,1,-5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-28.3,x:-105.6,y:-111.9},9).wait(1));

	// GALERIA
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#973E3E").s().p("ApyCwQgLgBgMgFQgLgFgMgIQgLgJgKgNQgLgQgFgRQgGgRABgPQABgPAFgMQAHgSANgNQAMgMAMgIIAOgJIAMgGIAIgEIAJgEIAJgFQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIACABIACAEIAGAJIAMARIABAEIgBABIgBABIgDgDIgFgFIgJgFQgIgDgPADQgPAEgUANIgMAKQgHAGgFAIQgFAIgEAMQgEANAFARQAEASANASQALAOAMAJQAMAJALAEQAKAFAGAAQAVADAQgEQARgEANgLIALgIQAGgGADgFIABgEQAAgDgCgCIgagkIgJgMQgEgEgCAAQgEgBgEADIgEABIgEADIgBAAIgBgBIgBgBIACgDIAKgHIAKgGIAFgDIAEgDIAHgHIAIgFIADgBQAAAAAAgBQAAAAABAAQAAAAAAAAQAAABABAAIAAACIgBABIgCACIgCACQgEAEAAADQABAFADAFIAHAKIAIALIARAXIAFAHIABAEIgBACQgEAJgGAIQgGAHgHAGIgNALQgIAGgMAGQgMAHgQAEQgMAEgOAAIgIgBgAI7B6IgDgBIgLgGIgIgHIgFgCIgEgDIgIgEIgHgFIgCgBIgBgCIACgBIABAAIADACIAEAAQADACADgCIAHgIIAIgMIAFgJIAMgSIAHgOIACgLIABgJIABgRIABgWIABgWIABgOIgBgOIgDgKIgDgFIgDgDIgBgBIAAgCIABgBIACABIAHAEIAIAGIAFACIAGAEIALAGIACACIAAABIgCABIgDAAIgDAAIgCACIgBAFIgBAFIgGBZIAOgJIAWgNIAWgMIANgIIAGgFIAEgFIABgDIgBgEIgBgCIAAgCIABgBIADABIAIAGIAFADIAFADIAIAEIAGAEIACACIAAABIgBABQgBAAAAAAQAAABgBgBQAAAAAAAAQgBAAAAAAIgEgCIgGgBIgIABIgJAEIgMAGIgTAJIgUAMIgSAKIgMAHQgGAFgDAFIgGALIgMASIgFAJIgIANQgCAFgBAEQAAAEAEADIAEAEIAEADIABACIAAABIgBAAIgBAAgAnIBaIgBgBQgBAAAAgBQAAAAAAAAQABAAAAAAQAAgBAAAAIABgBIADgCIADgCQAHgEABgHQABgIgBgLIgPixIAAgJQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAIAFAGIANAOIAXAaIAdAhIAcAgIAXAZQAIAJAGAEQAGAEAEABIAGABIAFgBIAEgBIACgBIABACQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAIgDACIgGADIgNAFIgPAGIgFACIgDgBIAAgBIAAgCIACgCQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIgsgwIgBgBIgBAAIgyAVIgBABIAAABIAEAtQAAAGACAEIACAIQACAEADABIAFgBIACgBIACAAIABACQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgCACIgHACIgIADIgFACIgEACIgIAEIgJAEIgDABIgBAAgAm7hbIAJBNQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIAsgTIABAAIgBgCIgyg7IgDgDQgBAAAAABQAAAAAAAAQAAABAAABQAAAAAAABgAHmBHIgMgEIgNgHQgFgDgCgEQgFgHgDgLIgGgdIgEgRIgDgQIgCgMIgBgCIgCgBIgZgKIgCAAIgBACIgCAGIgMAhIgHAVQgCAGABAEQAAAEAEADIAFACIAEACIABABIAAACIgCABIgDAAIgKgFIgKgDIgEgDIgEgBIgJgDIgIgCIgCgBIgBgCIABgCIACAAIADABIADAAQAEAAACgDIAFgIIAJgVIAMghIARgtIALgeIAGgQIADgJIACgKQgBgEgEgDIgEgCIgDgBIgBgBIAAgCIABgCIADABIAKAEIAJAEIAFACIAGACIALADIAJAEQAKADAJAGQAKAGAFAJIAEAKQABAGAAAIQAAAIgDAJQgFAOgLAMQgLAMgUALIAKAtIAJAjQAEAOAFAFQADAGAEACIAFACIACABIABABIAAACQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgFgBgAG2iXIgBABIgeBSIAAACIAAACQACADAGADIANAHIAIABQAFABAEgBQAHgDAIgIQAHgJAFgPQAJgYgFgQQgEgRgRgGIgJgDIgGgBIgCABg");
	this.shape.setTransform(-0.3,-182.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AC4A4A").s().p("Aj5BzIABgCIABgBIAEgBIAEgCQAEgCAAgEIABgKIgEgXIgHgiIgLguIgGggIgEgQIgDgJQgBgHgDgDQgEgDgGAAIgFABIgFABIgCgBIAAgBQgBAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAIAEgBIANgDIAMgCIAGgBIAGgCIANgDIALgDIADAAIACACIgBABIgBABIgEABIgFACQgGACgBAEQgBAEABAHIACAJIAEARIAGAfIALAvQAGAdAEANQAEAOAEACQAEADAJgBQAJAAAQgEQALgCAIgDQAJgDADgHIADgIIABgJIAAgCIACgCIACABIABADIABAHIAAAKIABALIgCAFQgBACgDABIgKADIgbAFIgWAEIgQADIgOADIgEABIgHACIgIACIgIACIgDAAIgCgBgAD3BqIgbgGIgVgEIgOgDIgJgCIgEAAIgIgBIgIgCIgIgBIgDgBIgBgBIABgCIACgBIAEABIAFAAQAEAAABgEQADgDABgGIAGgXIAGgjIAJguIAGgfIADgRIABgKQABgGgCgEQgBgEgHgCIgEgBIgFgCIgBgBIgBgBIABgCIAEAAIANADIANACIAGACIAHABIAPADIASADIARADIAJACIAHAAIAGAAIACAAIACAAIABABIgBACIgBAEIgDAIIgBAFIgCAHIgCAFIgBACIgCABIgCgCIABgCIAAgEIAAgGQgBgDgDgDIgOgGIgIgCIgNgCIgMgDIgHgBIgCAAIAAADIgNBIIgBADIACAAIAHACIAPACIAOADIAKABIAIAAQADAAADgBIADgCIABgBIACABIAAABIgCAFIgDAJIgCAGIgBAHIgBAEIgBADQgBABAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAIgBgBIAAgCIABgEIgBgFQAAgDgCgDQgDgCgIgDIgJgCIgMgCIgNgDIgHgBIgCABIAAABIgEAVIgCAKIgDAOIgDANIgBAJQgBAIABAGQACAFAHACQAHAEAOACIANACQAJABAGgBQAFgBAEgEQAEgEACgHIACgDIACgBIABACIAAADIgCAGIgDAKIgDAJQgCAEgEABIgCAAIgJgBg");
	this.shape_1.setTransform(1.6,-194.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CA5757").s().p("AAUBnIgVgBIgRAAIgOAAIgEAAIgHAAIgJAAIgIABIgDgBIgBgBIAAgCIACgBIAFAAIAEgBQAEgBABgEIACgJIACgYIAAgjIAAgvIAAggIAAgRIgBgKQAAgHgCgDQgDgEgGgBIgFAAIgFgBIgBAAIgBgCIABgCIADAAIAOAAIAMAAIAGABIAHgBIANAAIALAAIADAAIABACIgBACIgBAAIgEAAIgFABQgGABgCADQgCAEAAAHIAAAKIgBARIAAAgIAAAvIABAsQABAOAEADQADAEAJABQAIACARAAQALAAAJgBQAIgCAFgGQADgDACgEIACgIIABgCIACgBIACABIAAADIAAAGIgCALIgCAKQgBADgBACQgCABgDABIgLAAIgbAAg");
	this.shape_2.setTransform(2.1,-196.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#58273C").s().p("ApzDYQgKgBgMgFQgMgFgMgIQgLgJgKgNQgLgQgFgRQgFgRABgPQABgPAFgMQAHgSANgNIACgCIgCgCQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAIALgNQAFgGAIgDQAGgBAFgEIAPgIIAMABIADgCIAJgFQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIABABIADAEIABABIAFABQAAAAABAAQABAAAAAAQABABAAAAQAAAAABAAIACAEQAAABAAAAQABABAAAAQAAABAAAAQAAAAABAAIAAAAIABAAIACAAIABABIABABIABABIABACIgBAEIAAAEIAAADIgBACIAAAAIAAACIgBABIgCABIgCgDIgFgFIgJgFQgIgDgQADQgPAEgTAOIgNAKQgGAGgGAIQgFAIgDAMQgEANAEARQAFASAMASQALAOAMAJQAMAJALAEQALAFAGAAIAJABQAKgDANAAQAOgBAKgJIAKgHIACgBIABAAIACABIABAAIAGgFQAGgGACgFIABgEQABgDgCgCIgagkIgKgMQgDgEgDAAQgDgBgFADIgBAAIgBABIgCABIgBAAIgCACIgCAAIgBgBIAAgBIACgDIAAAAIAAgBIAAgFIAAgDIAAgBIAAgBIABgEIABgBIACgBIACAAIABgBIANABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABIABgBIAEgDIAIgHIADgCIgBgBIgCgBIABgEIAEgGIADgFQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAIACABIABABIABACIAAACIAAADIAAADIAAADIgCADIAAAAIgDACIgCACQgEAEABADQAAAFADAFIAIAKIAIALIARAXIAEAHIACAEIgBACQgEAJgGAIQgGAHgHAGIgNALQgIAGgNAGQgMAHgQAEQgMAEgNAAIgJgBgAI7CiIgDgBIgLgGIgJgHIgEgCIgEgDIgJgEIgDgCIgBAAIgBgCIgCgBIgCgBIAAgCIABgBIABAAIgBgCIgBgEIAAgEQABgEADAAIACAAIAAAAIACAAIACAAIACADIABACIADABQAEABACACIAAgBIAIgMIAGgJIALgSIAIgOIACgLIAAgJIABgSIABgWIACgVIAAgOIgBgOIgCgKIgEgFIgDgDIgBgBIABgCIgBgCIAAgEIAAgFQAAgEAEAAIAAgBIACABIABABQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIABAEQAEABABAEQABAEAEACIAIAEQACACACACIABgCQACgDADAAIABAAIABAAIACABIABABIABACIAAAEIAAADIAAAAIAAABIAAACIAAACIgBABIAAAAIAAABIgCABIgCAAIgDAAIgCACIgCAFIgBAFIgFBQIAJgIQAMgIANgGIAWgLIAVgJIACAAIABgCIACgDIgBgEIgCgCIAAgCIACgBIACABIAIAGIADABIABgDIACgBIAIABIAEAAIAFAAIACAAIABABIABACIAAACIAAACIAAAEIAAAFIgBABIABABIAAABIgCABQAAABAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAIgFgCIgGgBIgIABIgJAEIgMAGIgSAKIgVAMIgSAKIgLAHQgGAFgDAFIgHALIgLASIgGAJIgHANIgBADIABAAIABABIABABIAAABIABABIAAgBIABAAIABgBIACAAIACAAIABADIAAAFIAAADIAAADIgBAEIABACIgBABIgBABIAAgBgAnICCIgCgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAgBIAAgBIAAAAIgCgDIACgFIAAgBIABgEQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAFgCAGABIAAAAIAAgRIgQixIAAgJQAAgBAAAAQABgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAIAGAGIAMAOIAYAaIAdAhIAcAfIAWAZQAJAKAFAEIAFADQACgEAEgCIAGgEIAFgCIABgBIAAgBIABAAIACgBIACABIABAAIABABIgBAJIgBAFIABABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgDACIgHADIgMAFIgQAGIgFACIgDgBIAAgBIABgCIABgCQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBgBIgrgxIgCgBIgBAAIgyAVIgBABIAAACIAFAtQAAAGABAEIACAFIAAgCIABgBIACAAIAFgBIAAgBIABgBIAAgBIABgBIACgBIACABIABABIABACIAAADIAAAEIAAAEIgBABIABABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgBACIgIACIgHADIgFACIgFACIgIAEIgIAEIgDABIgBAAgAm7gzIAJBJIACgBIAAAAIAJgFIALgGIAGgDIANgGIgvg1IgDgCQAAAAAAAAQAAAAAAAAQAAABAAABQAAAAAAABgAHmBvIgNgEIgNgHQgEgDgDgEQgFgHgDgLIgGgdIgEgSIgCgQIgDgMIAAgBIgCgBIgagKIgBAAIgBACIgCAGIgMAgIgIAWIAAAEIAAgBIABAAIAAAAIABgBIABAAIACABIABABIABABIAAAAIABABIABgBIACAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAAAIABAEIgBADIABAGQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQgBAAAAAAQgBAAAAgBIgBAAIgLgFIgJgDIgFgDIgEgBIgIgDIgJgCIgCgBIAAgCIgBgBIABgFIABgBIAAgCIAAgEQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAEABQADAAADADIADACIABgDIAKgWIAMggIAQgtIALgeIAGgQIADgJIACgKQAAgEgFgDIgDgCIgEgBIgBgBIAAgCIAAAAIgBgBIgBgBIAAgBIAAgCIAAgBIAAgCIABgDQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIACgBIAEABIAEACIADACIAEAEIABACIAAABIAAAAIABAAQAEACADAEIAFADIABgBIAAgBIABAAIAAgBIABgBIACgBIAAAAIAMAEQAGACAFADIALAIQAEADgBAEIABABQAJAGAGAJIADAKQACAGAAAIQgBAIgCAJQgGAOgKAMQgMAMgTALIAJAtIAJAjIADAIIABAAQADAAADACIAEACIAGACIAGADIACABIAAACIgCADIAAABIgBABIAAABIAAACIAAACIAAABIAAAAIAAACQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgEgBgAG2hvIgCABIgdBQIAPAIIAJADQAKADAIgFQAIgFAIgDIAHgQQAIgYgEgQQgDgLgIgGIgBgBIgGgEIgDgBIgKgDIgGgBIgBABgAjmAnIABgCIABgBIgBgBIAAgDIABgDIAAgBIAAgBIAAgCIAAgBIABAAIAAgBIABgBIABgBIABgBIABAAIABAAIAHACIAAgFIgEgWIgHgiIgLgvIgGggIgEgQIgDgJQgBgHgDgDQgEgDgGAAIgFABIgFABIgCgBIAAgBIAAgBIgBgCIABgEIABgCIgBgBIABgBIgBgBIAAgBIAAgBIAAgBIABgBIABAAIACgBIACgBIABAAIABAAIAAgBIAIABIABABQAEgDAFAAQANABAJgFIAEAAIAGgEQADgCAEgBIACAAIAAAAIABABIABABIABAAIAAACIgBAEIAAAEIAAADIABABIgBABIgBABIgEABIgFACQgGACgBAEQgBAEABAHIACAJIAEARIAGAfIALAwQAGAdAEANQADAJADAEIAjgHIAHgCIAKgCIABgBIAOABIACAAIACgDIADgIIABgJIAAgCIACgCIACABIABADIABAHIAAAKIABAKIgCAFQgBACgDABIgKADIgbAFIgWAEIgQADIgOADIgEABIgHACIgIACIgIACIgDAAIgCgBgAEKAeIgbgGIgVgEIgOgDIgJgCIgEAAIgIgBIAAAAIgHgBIgBgBIgIgBIgDgBIgBgBIABgCIAAAAIAAgCIgBgDIAAgDIABgEIAAgBQAKgBALAAIAFgVIAGgjIAJgvIAGgfIADgRIABgKQABgGgCgEQgBgEgHgCIgEgBIgFgCIgBgBIgBgBIABgBIgBgEIAAgCIAAgEIAAgEQAAAAAAAAQABgBAAAAQAAgBAAAAQABAAAAgBIACAAIACABIAAABIABABIAAAAIAJADIAGAFIABACIAFABIALAEIAGACIAEAAIAAgBIABAAIABAAIANADIAPADIAPAEQAHADAIACIAEgFIAAAAIAAgBIAAgCIABgCIABgCIAAAAIAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAIABABIACAAIABADIgBAFIAAAAIAAAEQAAAEgBABIgBABIgBAEIgDAIIgBAFIgCAHIgCAFIgBACIgCABIgCgCIABgCIAAgEIAAgGQgBgDgDgDIgOgGIgIgCIgNgCIgMgDIgHgBIgCAAIAAADIgMBEIAdAHQAKADAKAAIABgBIACgBIADgCIADgCIABgBIAAgCIABgCIACgBIACgBIABABIACAAQABAEAAAEQAAAFgCAEIgCADIgDAKIgCAGIgBAHIgBAEIgBADQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgBgBIAAgCIABgEIgBgFQAAgDgCgDQgDgCgIgDIgJgCIgMgDIgNgDIgHgBIgCABIAAABIgEAWIgCAKIgDAOIgDANIgBAJIAAAKQAPADAPAIQAOAHAPgGIAIgDIADgGQADgCAAgEIAAgHQgBgFAFAAIAAAAIABABIABABQAEANgHAJIAAAAIgDAKIgDAJQgCAEgEABIgCAAIgJgBgAgoAEIgBgBIABgCIgBgEIABgHIABgBQAAgDAEAAIAAgBQAAABABAAQAAABABAAQABAAAAAAQABAAAAAAIAGgBIACAAIABAAIABgYIAAgjIAAgwIAAggIAAgRIAAgKQgBgHgCgDQgCgEgHgBIgFAAIgEgBIgCAAIgBgCIABgCIABAAIAAgCIAAgDIAAgEIACgEQABgDADAAQAFgBAEADIAGAGQADAEABAEIAAAAIAEAAIAGABIAHgBIABAAIABgFQAEgFAGgCQAFgCAGAAIABAAIACAAIABAAIABABIABABIAAABIAAACIgBADIgBACIAAADIAAACIAAABIgBACIgBAAIgDAAQgFADgGgBIgDADQgCAEgBAHIAAAKIAAARIAAAgIAAAwIABAsQABAOAEADIABgBIADAAIAKABIA3AAIACgCQADgDABgEIADgIIABgCIACgBIABABIABADIgBAGIgCALIgCAKQAAACgCACQgBABgEABIgLAAIgbAAIgVgBIgRAAIgNAAIgEAAIgIAAIgIAAIgGABIgBAAIAAAAIgCABQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBgBg");
	this.shape_3.setTransform(-0.4,-185.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// szyld
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#B56028","#D7824A","#E29850","#D7824A","#B66028"],[0,0.165,0.502,0.847,1],-83.2,0,83.3,0).s().p("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");
	this.shape_4.setTransform(-2.2,-174);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D17436").s().p("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");
	this.shape_5.setTransform(-1.8,-176.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E29850").s().p("ArsFFQgOgdAegZIABgBQAIAMgCAOIAAAAQgDAPgOAQQgBABAAAAQAAABgBAAQAAAAgBABQgBAAAAAAIgCgFgArnEBIgCgGQgCgQAQgNIAFgCQATAVgfAQIgDABIgCgBgAr5DWQAAgEABgCIAEgGIAKgKIAFgCQAPABAQADIACACIgCAFQgGAMgOAEQgHADgJABIgCAAQgIAAgFgHgALcDNQgfgXAEgiIgEgBQgMgFAGgZIADgCQARAEADAPIgBALIAAABIAMATQACAFADADQAHARAEATQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgMgHgAp2CjIAGgDQAJAAADAJIABACQgQAEgIAPIgEACQgSgRAbgMgAo/ClIgBAAQgDgFABgLIAAAAIACgCIAFACQAIACACAFIAHAHIAAABIgHADIgHABQgFAAgCgDgALZB1IABAAIADgCIABAEQADAMgBAAQgBAAgGgOgAKDBtQABgOAOgIIAFgCQAdAWguADQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgAskAfQAMgbAdgZIA0gxQCViUDJhAQAGgBAEADIAEADIAAACIABAAIgUAHQi0BAiFCBQg8A6gyBIIgBABIgGAIIgBABQgJAOAAASQAAAAAAABQAAAAAAAAQgBABAAAAQgBABgBAAQgLgiAQgjgArOBaIgDAAIgKgDIAAgCQAFgOANgEIAHgCIAAAAIACAFQAIAUgRAAIgFAAgAryBDIgBgCIgCgCQgDgHAJgBQAHgDAHABQAIABAGAIIACADQgJAKgHABIgDABQgHAAgHgKgAnEBIQgIgFgFgEIgEgHIAAAAIAAAAQgGgOAGgUIABgCIACAAQAMAKAGANQAFAMgCAQIAAAAIgBACIgCAAIgBAAIAAAAIAAABIgDgCgAmIBAQAAgOAPgHQBKgkBOgVQBCgUBFgKIgBAAQgEgDgCgEQgCgEAAgGQgBgIAJAAIAAAAIALAEIADACIABABIAPAIIABABIAEAEIAQgCQgEgBgHgDIAAgDQABgIAIgFIABgBIAFgCIADAIQAEALgDADQAygFAyAAQBwgBBsAaQAoAKAoAOQAtAOAjAXQgegGghgJIgigLIghgKQhYghhjgCQjJgCi5A6QhKAYg/AdIAAgDgArhAvQgBgFgEgFIAAgDIADgJIAEgIQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAIAGACAKIAAAJIgDALIgCADQgIgDgDgEgAKnAbIADgBIABgBQAEAQgBAAQgBAAgGgOgAMaAAIABgBIAFgMIgIgGIgNgMQhThGhVhAQgwgjgxgiIAEAAQCPBQCBBmQAqAiggAkQgLgFAFgNgAkFgZIAAgDIACgJQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAIAFACQADgEAGgCIABgBQANAUgFAGIAAACQgJAEgGAAQgMAAgBgNgAFQgqQgSgUATgLIABgBIAFAEQAAgIADgIQAEgJAIgLQABgCAEgBIADAJQAHAVgPAeIgBABQgBADgDABIgEgGQgDAFgFADIgCABIgDgBgALKgwIgGgDIAAgCIAAAAQABgJAJgFIAFgCQANAYgMAAQgDAAgHgDgAhBhcIABgBIADgBIAGAGQAJAMgIASIgCADQgbgJASgcgAn/hPQAAgEAFgBQAQgCAGALIACAIIABAEIgDACQgGADgFAAQgLAAgFgVgAB8hDQgNgFgBgIIAAgJQABgGADgHIABgBIADgBIACABQARAMgHAVIgBACIgBACIgEgBgACOh1IAAgBIABgBQASASgNAZIgBAEQgBABgDACQgXgZAWgXgAH6hrQACgFAFgCQAPAFgMAJQgFADgDAAQgEAAACgKgAohh1IgJgDIgCgBIAAgCQgEgNAIgFIAFgCIABgBIAEAGQAMAVgNAAIgCAAgAoGh+QgNgOAGgLIACgCIAGgGIABAAQAKAIACAHIAAADQAAAHgGAFIgDADIgBAAIgBAAIgDAAgAI3iDIgJgHQgEgEgDgHIgFgKIgBgCIgBgHQABgEAIgCIAEAAIAKACIAMAJQADAIgIAPIgEAHIgBABIgBABIgBAAgAFkiTIgBgBIgCgFIAAgEQABgEADgDQADgFAIAAIAAAAQATAFgIAQIgBADIgDADQgDADgDAAQgFAAgIgIgAkfiQIgRgSIAIgCIAIANQAAgEAEALIACADIAAABIgFgEgAhii5QgWgEAXgYIABgBQAZAFgDATIAAACIgBAEIgCAAIgGABIgPgCgACKi7IgDAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgHQACgNAMgIIAGgCQAdAhgkAAIgIgBgAlhjXQgLgRAUgXIADgCIABAGIABgIIACgCIABAAIACACQAKAMAEAOIACADQACAIAAAHIAAABIAAAAIgBAAQgRgGgFgOIgCANIgCAKIgBADIgCABQgFgEgCgEgAGGjwIgPgHIgGgCIgLgFQAGgMAMgHIAMgGQAJAHAEAHIABAEIABgDIACgFIADgCQAGAFACAHIABAHIAAAFIAAADIgBACQgKAAgDgGIgEALIgBACIgIgFgAhzkPQgSgKALgaIADgCQAOAOgGAVIAAABIgBADIgDgBgACXkVIgBAAQgKgJADgNQACgHgFAAIgBAAQgHAFgHADQgHACgGgBIgJgEIABgEQADgJAHgGQAJgHAPgCIAAAAIABAAQAqARgaAkIgBAAIgDgBgAickVQgBgGAAgEQACgRAVgHIAAgBIABABQAOAQghARIgCABIgCAAg");
	this.shape_6.setTransform(-2,-177);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D7824A").s().p("ArxE/QgDgYAJgWQAGgMAJgJIADAAQAfgRgTgVIgFACQgQAOACAPQgYAEAEgRQAIgDAFgEIAWgNQAOgFAGgLQgEANAAAOQAKgGAJgNIAMgSIAHAFQAJAEAHAIIgBAHQgDAQgPgGQgLgEgBAJIgiBBQACgOgIgMIgBABQgeAZAOAeQgHAEgGADIgBgIgALlDHIAMAIQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgEgTgHgQIADAEQASAUgLAXIgMgQgALWCMIAAgBIABgLIAKAGIgBgDQgNgWgRgTQATgNAXALQgOAGgRAFQAAABABAAQAAABAAAAQABAAAAAAQAAABABAAQALAEAIAFIgBAAQALAcgGgaQAVAPgbAQQgBAIACAHIgMgTgAqpBkIABAAIgHAIIAGgIgAruBbQAPgGAIgNIgBgBQAHgCAJgKIgCgDQgGgIgIgBIAAgFQADAEAIACIACgDIADgKQADADABAFQADAKABAIQgNAFgFANIAAACIAKADQgIAIgTAAIgLgBgAnmAwIAeAJQAFAFAIAEIADACIgEACQgWgHgUgPgAm4BDIABAAIgBABIAAgBgAm0BBIACAAIgCAAgAruA9IgBgBIAFAAIABABIgFAAgAmvAyIADgPIAAAAQADAJgGAHIAAgBgArfAcIACAAIAAADIgCgDgAKlAGQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAABQAGAFAFAJIgDABQgQgEAFgLgAkEgoIABAAIAHAGIAAADIgIgJgAgzg7IAEgCQAIgHAEgTIABAEIABAGQgIAFgBAIIAAADQAHADAEABIgQACIgEgEgACeg/QAEgGAFgEIABgBIgEALIgGAAgACIhDIgDgGIAEACIABgDIABgBIAAAKIgDgCgAllkRQgwATguAZQhsA7hdBLIgSAOQCFiAC0hAgAoUh0IgEgHQAPACgMgWIAFgHQAAAAABAAQAAAAABAAQAAABAAABQAAAAAAABQABASgHAOIAAgBgAn5iEIABAAIADgCIABAFQgDgBgCgCgAIriQIAFgKQADAGAEAEQgIADgHAIIADgLgAJMiRIgFgBQAIgPgDgIIABABQATALgLARQgEgEgFgBgAFtiYQAMALAHgGQgFAGgEAAQgFAAgFgLgAoQiiIALgHQAAAFADAEIAAABIgCADQgFgFgHgBgAnwirIABAAIAJABQAGACAFAFIgCAAIgQABQgUAAARgJgAIdisIADAAIAJgBIABAGIABADIgOgIgAI2i0QACgDgDgFIAOAIIgFAAIACACIgKgCgAlFjeIgHgEIACgOQAFAOARAGIgEAAIgFAHQgGgEgCgFgAlgjWIgEgIQgIgNAIgMQgBgMAPgOIAFgCQAGAEADAEIgCACIgBAIIgBgFIgDABQgUAXALARQgBAHgFAAIgCAAgAkzjcIAAgBQAAgHgCgHIAFAMIgBADIgCAAgAGNjwIACgFIAIAEIAAABQgBAOgMAFQgCgLAFgIgAlFkJQAEACAGgBIAEAZQgEgOgKgMgAF0j4IAAgBIAGgGIAGADQgFAFgEAAIgDgBgACbkHQgQgZAKgYQAFAAgCAHQgDANAKAJIgDAVIgBgBgAk4kIIgBAAIAIgCIACACQABABgBAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgIgCgABtk4QgBgHAFgEIAKgDQgHAGgDAJIgEABIAAgCg");
	this.shape_7.setTransform(-2.9,-176.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BB642B").s().p("AsfAKQgQhHgQglIAJgNQAMAiALAzQAYBsADB6QBhigC5hzQC6h1DZglQDmgnDSA9IAiALQDWBHCcCqQAHhiAYg5QAYg6AMghIAJAJQgIAeglBZQgYA5gHBiQioi3jphEQjTg+joAnQjZAli6B1Qi5BzhhCgQgDh6gYhtg");
	this.shape_8.setTransform(-2.2,-156.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.4,-212,166.5,79.8);


(lib.galeriaButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// galeria
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#973E3E").s().p("ApyCwQgLgBgMgFQgLgFgMgIQgLgJgKgNQgLgQgFgRQgGgRABgPQABgPAFgMQAHgSANgNQAMgMAMgIIAOgJIAMgGIAIgEIAJgEIAJgFQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIACABIACAEIAGAJIAMARIABAEIgBABIgBABIgDgDIgFgFIgJgFQgIgDgPADQgPAEgUANIgMAKQgHAGgFAIQgFAIgEAMQgEANAFARQAEASANASQALAOAMAJQAMAJALAEQAKAFAGAAQAVADAQgEQARgEANgLIALgIQAGgGADgFIABgEQAAgDgCgCIgagkIgJgMQgEgEgCAAQgEgBgEADIgEABIgEADIgBAAIgBgBIgBgBIACgDIAKgHIAKgGIAFgDIAEgDIAHgHIAIgFIADgBQAAAAAAgBQAAAAABAAQAAAAAAAAQAAABABAAIAAACIgBABIgCACIgCACQgEAEAAADQABAFADAFIAHAKIAIALIARAXIAFAHIABAEIgBACQgEAJgGAIQgGAHgHAGIgNALQgIAGgMAGQgMAHgQAEQgMAEgOAAIgIgBgAI7B6IgDgBIgLgGIgIgHIgFgCIgEgDIgIgEIgHgFIgCgBIgBgCIACgBIABAAIADACIAEAAQADACADgCIAHgIIAIgMIAFgJIAMgSIAHgOIACgLIABgJIABgRIABgWIABgWIABgOIgBgOIgDgKIgDgFIgDgDIgBgBIAAgCIABgBIACABIAHAEIAIAGIAFACIAGAEIALAGIACACIAAABIgCABIgDAAIgDAAIgCACIgBAFIgBAFIgGBZIAOgJIAWgNIAWgMIANgIIAGgFIAEgFIABgDIgBgEIgBgCIAAgCIABgBIADABIAIAGIAFADIAFADIAIAEIAGAEIACACIAAABIgBABQgBAAAAAAQAAABgBgBQAAAAAAAAQgBAAAAAAIgEgCIgGgBIgIABIgJAEIgMAGIgTAJIgUAMIgSAKIgMAHQgGAFgDAFIgGALIgMASIgFAJIgIANQgCAFgBAEQAAAEAEADIAEAEIAEADIABACIAAABIgBAAIgBAAgAnIBaIgBgBQgBAAAAgBQAAAAAAAAQABAAAAAAQAAgBAAAAIABgBIADgCIADgCQAHgEABgHQABgIgBgLIgPixIAAgJQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAIAFAGIANAOIAXAaIAdAhIAcAgIAXAZQAIAJAGAEQAGAEAEABIAGABIAFgBIAEgBIACgBIABACQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAIgDACIgGADIgNAFIgPAGIgFACIgDgBIAAgBIAAgCIACgCQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIgsgwIgBgBIgBAAIgyAVIgBABIAAABIAEAtQAAAGACAEIACAIQACAEADABIAFgBIACgBIACAAIABACQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgCACIgHACIgIADIgFACIgEACIgIAEIgJAEIgDABIgBAAgAm7hbIAJBNQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIAsgTIABAAIgBgCIgyg7IgDgDQgBAAAAABQAAAAAAAAQAAABAAABQAAAAAAABgAHmBHIgMgEIgNgHQgFgDgCgEQgFgHgDgLIgGgdIgEgRIgDgQIgCgMIgBgCIgCgBIgZgKIgCAAIgBACIgCAGIgMAhIgHAVQgCAGABAEQAAAEAEADIAFACIAEACIABABIAAACIgCABIgDAAIgKgFIgKgDIgEgDIgEgBIgJgDIgIgCIgCgBIgBgCIABgCIACAAIADABIADAAQAEAAACgDIAFgIIAJgVIAMghIARgtIALgeIAGgQIADgJIACgKQgBgEgEgDIgEgCIgDgBIgBgBIAAgCIABgCIADABIAKAEIAJAEIAFACIAGACIALADIAJAEQAKADAJAGQAKAGAFAJIAEAKQABAGAAAIQAAAIgDAJQgFAOgLAMQgLAMgUALIAKAtIAJAjQAEAOAFAFQADAGAEACIAFACIACABIABABIAAACQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgFgBgAG2iXIgBABIgeBSIAAACIAAACQACADAGADIANAHIAIABQAFABAEgBQAHgDAIgIQAHgJAFgPQAJgYgFgQQgEgRgRgGIgJgDIgGgBIgCABg");
	this.shape.setTransform(-0.3,-182.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AC4A4A").s().p("Aj5BzIABgCIABgBIAEgBIAEgCQAEgCAAgEIABgKIgEgXIgHgiIgLguIgGggIgEgQIgDgJQgBgHgDgDQgEgDgGAAIgFABIgFABIgCgBIAAgBQgBAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAIAEgBIANgDIAMgCIAGgBIAGgCIANgDIALgDIADAAIACACIgBABIgBABIgEABIgFACQgGACgBAEQgBAEABAHIACAJIAEARIAGAfIALAvQAGAdAEANQAEAOAEACQAEADAJgBQAJAAAQgEQALgCAIgDQAJgDADgHIADgIIABgJIAAgCIACgCIACABIABADIABAHIAAAKIABALIgCAFQgBACgDABIgKADIgbAFIgWAEIgQADIgOADIgEABIgHACIgIACIgIACIgDAAIgCgBgAD3BqIgbgGIgVgEIgOgDIgJgCIgEAAIgIgBIgIgCIgIgBIgDgBIgBgBIABgCIACgBIAEABIAFAAQAEAAABgEQADgDABgGIAGgXIAGgjIAJguIAGgfIADgRIABgKQABgGgCgEQgBgEgHgCIgEgBIgFgCIgBgBIgBgBIABgCIAEAAIANADIANACIAGACIAHABIAPADIASADIARADIAJACIAHAAIAGAAIACAAIACAAIABABIgBACIgBAEIgDAIIgBAFIgCAHIgCAFIgBACIgCABIgCgCIABgCIAAgEIAAgGQgBgDgDgDIgOgGIgIgCIgNgCIgMgDIgHgBIgCAAIAAADIgNBIIgBADIACAAIAHACIAPACIAOADIAKABIAIAAQADAAADgBIADgCIABgBIACABIAAABIgCAFIgDAJIgCAGIgBAHIgBAEIgBADQgBABAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAIgBgBIAAgCIABgEIgBgFQAAgDgCgDQgDgCgIgDIgJgCIgMgCIgNgDIgHgBIgCABIAAABIgEAVIgCAKIgDAOIgDANIgBAJQgBAIABAGQACAFAHACQAHAEAOACIANACQAJABAGgBQAFgBAEgEQAEgEACgHIACgDIACgBIABACIAAADIgCAGIgDAKIgDAJQgCAEgEABIgCAAIgJgBg");
	this.shape_1.setTransform(1.6,-194.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CA5757").s().p("AAUBnIgVgBIgRAAIgOAAIgEAAIgHAAIgJAAIgIABIgDgBIgBgBIAAgCIACgBIAFAAIAEgBQAEgBABgEIACgJIACgYIAAgjIAAgvIAAggIAAgRIgBgKQAAgHgCgDQgDgEgGgBIgFAAIgFgBIgBAAIgBgCIABgCIADAAIAOAAIAMAAIAGABIAHgBIANAAIALAAIADAAIABACIgBACIgBAAIgEAAIgFABQgGABgCADQgCAEAAAHIAAAKIgBARIAAAgIAAAvIABAsQABAOAEADQADAEAJABQAIACARAAQALAAAJgBQAIgCAFgGQADgDACgEIACgIIABgCIACgBIACABIAAADIAAAGIgCALIgCAKQgBADgBACQgCABgDABIgLAAIgbAAg");
	this.shape_2.setTransform(2.1,-196.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#58273C").s().p("ApzDYQgKgBgMgFQgMgFgMgIQgLgJgKgNQgLgQgFgRQgFgRABgPQABgPAFgMQAHgSANgNIACgCIgCgCQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAIALgNQAFgGAIgDQAGgBAFgEIAPgIIAMABIADgCIAJgFQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIABABIADAEIABABIAFABQAAAAABAAQABAAAAAAQABABAAAAQAAAAABAAIACAEQAAABAAAAQABABAAAAQAAABAAAAQAAAAABAAIAAAAIABAAIACAAIABABIABABIABABIABACIgBAEIAAAEIAAADIgBACIAAAAIAAACIgBABIgCABIgCgDIgFgFIgJgFQgIgDgQADQgPAEgTAOIgNAKQgGAGgGAIQgFAIgDAMQgEANAEARQAFASAMASQALAOAMAJQAMAJALAEQALAFAGAAIAJABQAKgDANAAQAOgBAKgJIAKgHIACgBIABAAIACABIABAAIAGgFQAGgGACgFIABgEQABgDgCgCIgagkIgKgMQgDgEgDAAQgDgBgFADIgBAAIgBABIgCABIgBAAIgCACIgCAAIgBgBIAAgBIACgDIAAAAIAAgBIAAgFIAAgDIAAgBIAAgBIABgEIABgBIACgBIACAAIABgBIANABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABIABgBIAEgDIAIgHIADgCIgBgBIgCgBIABgEIAEgGIADgFQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAIACABIABABIABACIAAACIAAADIAAADIAAADIgCADIAAAAIgDACIgCACQgEAEABADQAAAFADAFIAIAKIAIALIARAXIAEAHIACAEIgBACQgEAJgGAIQgGAHgHAGIgNALQgIAGgNAGQgMAHgQAEQgMAEgNAAIgJgBgAI7CiIgDgBIgLgGIgJgHIgEgCIgEgDIgJgEIgDgCIgBAAIgBgCIgCgBIgCgBIAAgCIABgBIABAAIgBgCIgBgEIAAgEQABgEADAAIACAAIAAAAIACAAIACAAIACADIABACIADABQAEABACACIAAgBIAIgMIAGgJIALgSIAIgOIACgLIAAgJIABgSIABgWIACgVIAAgOIgBgOIgCgKIgEgFIgDgDIgBgBIABgCIgBgCIAAgEIAAgFQAAgEAEAAIAAgBIACABIABABQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIABAEQAEABABAEQABAEAEACIAIAEQACACACACIABgCQACgDADAAIABAAIABAAIACABIABABIABACIAAAEIAAADIAAAAIAAABIAAACIAAACIgBABIAAAAIAAABIgCABIgCAAIgDAAIgCACIgCAFIgBAFIgFBQIAJgIQAMgIANgGIAWgLIAVgJIACAAIABgCIACgDIgBgEIgCgCIAAgCIACgBIACABIAIAGIADABIABgDIACgBIAIABIAEAAIAFAAIACAAIABABIABACIAAACIAAACIAAAEIAAAFIgBABIABABIAAABIgCABQAAABAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAIgFgCIgGgBIgIABIgJAEIgMAGIgSAKIgVAMIgSAKIgLAHQgGAFgDAFIgHALIgLASIgGAJIgHANIgBADIABAAIABABIABABIAAABIABABIAAgBIABAAIABgBIACAAIACAAIABADIAAAFIAAADIAAADIgBAEIABACIgBABIgBABIAAgBgAnICCIgCgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAgBIAAgBIAAAAIgCgDIACgFIAAgBIABgEQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAFgCAGABIAAAAIAAgRIgQixIAAgJQAAgBAAAAQABgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAIAGAGIAMAOIAYAaIAdAhIAcAfIAWAZQAJAKAFAEIAFADQACgEAEgCIAGgEIAFgCIABgBIAAgBIABAAIACgBIACABIABAAIABABIgBAJIgBAFIABABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgDACIgHADIgMAFIgQAGIgFACIgDgBIAAgBIABgCIABgCQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBgBIgrgxIgCgBIgBAAIgyAVIgBABIAAACIAFAtQAAAGABAEIACAFIAAgCIABgBIACAAIAFgBIAAgBIABgBIAAgBIABgBIACgBIACABIABABIABACIAAADIAAAEIAAAEIgBABIABABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgBACIgIACIgHADIgFACIgFACIgIAEIgIAEIgDABIgBAAgAm7gzIAJBJIACgBIAAAAIAJgFIALgGIAGgDIANgGIgvg1IgDgCQAAAAAAAAQAAAAAAAAQAAABAAABQAAAAAAABgAHmBvIgNgEIgNgHQgEgDgDgEQgFgHgDgLIgGgdIgEgSIgCgQIgDgMIAAgBIgCgBIgagKIgBAAIgBACIgCAGIgMAgIgIAWIAAAEIAAgBIABAAIAAAAIABgBIABAAIACABIABABIABABIAAAAIABABIABgBIACAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAAAIABAEIgBADIABAGQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQgBAAAAAAQgBAAAAgBIgBAAIgLgFIgJgDIgFgDIgEgBIgIgDIgJgCIgCgBIAAgCIgBgBIABgFIABgBIAAgCIAAgEQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAEABQADAAADADIADACIABgDIAKgWIAMggIAQgtIALgeIAGgQIADgJIACgKQAAgEgFgDIgDgCIgEgBIgBgBIAAgCIAAAAIgBgBIgBgBIAAgBIAAgCIAAgBIAAgCIABgDQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIACgBIAEABIAEACIADACIAEAEIABACIAAABIAAAAIABAAQAEACADAEIAFADIABgBIAAgBIABAAIAAgBIABgBIACgBIAAAAIAMAEQAGACAFADIALAIQAEADgBAEIABABQAJAGAGAJIADAKQACAGAAAIQgBAIgCAJQgGAOgKAMQgMAMgTALIAJAtIAJAjIADAIIABAAQADAAADACIAEACIAGACIAGADIACABIAAACIgCADIAAABIgBABIAAABIAAACIAAACIAAABIAAAAIAAACQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgEgBgAG2hvIgCABIgdBQIAPAIIAJADQAKADAIgFQAIgFAIgDIAHgQQAIgYgEgQQgDgLgIgGIgBgBIgGgEIgDgBIgKgDIgGgBIgBABgAjmAnIABgCIABgBIgBgBIAAgDIABgDIAAgBIAAgBIAAgCIAAgBIABAAIAAgBIABgBIABgBIABgBIABAAIABAAIAHACIAAgFIgEgWIgHgiIgLgvIgGggIgEgQIgDgJQgBgHgDgDQgEgDgGAAIgFABIgFABIgCgBIAAgBIAAgBIgBgCIABgEIABgCIgBgBIABgBIgBgBIAAgBIAAgBIAAgBIABgBIABAAIACgBIACgBIABAAIABAAIAAgBIAIABIABABQAEgDAFAAQANABAJgFIAEAAIAGgEQADgCAEgBIACAAIAAAAIABABIABABIABAAIAAACIgBAEIAAAEIAAADIABABIgBABIgBABIgEABIgFACQgGACgBAEQgBAEABAHIACAJIAEARIAGAfIALAwQAGAdAEANQADAJADAEIAjgHIAHgCIAKgCIABgBIAOABIACAAIACgDIADgIIABgJIAAgCIACgCIACABIABADIABAHIAAAKIABAKIgCAFQgBACgDABIgKADIgbAFIgWAEIgQADIgOADIgEABIgHACIgIACIgIACIgDAAIgCgBgAEKAeIgbgGIgVgEIgOgDIgJgCIgEAAIgIgBIAAAAIgHgBIgBgBIgIgBIgDgBIgBgBIABgCIAAAAIAAgCIgBgDIAAgDIABgEIAAgBQAKgBALAAIAFgVIAGgjIAJgvIAGgfIADgRIABgKQABgGgCgEQgBgEgHgCIgEgBIgFgCIgBgBIgBgBIABgBIgBgEIAAgCIAAgEIAAgEQAAAAAAAAQABgBAAAAQAAgBAAAAQABAAAAgBIACAAIACABIAAABIABABIAAAAIAJADIAGAFIABACIAFABIALAEIAGACIAEAAIAAgBIABAAIABAAIANADIAPADIAPAEQAHADAIACIAEgFIAAAAIAAgBIAAgCIABgCIABgCIAAAAIAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAIABABIACAAIABADIgBAFIAAAAIAAAEQAAAEgBABIgBABIgBAEIgDAIIgBAFIgCAHIgCAFIgBACIgCABIgCgCIABgCIAAgEIAAgGQgBgDgDgDIgOgGIgIgCIgNgCIgMgDIgHgBIgCAAIAAADIgMBEIAdAHQAKADAKAAIABgBIACgBIADgCIADgCIABgBIAAgCIABgCIACgBIACgBIABABIACAAQABAEAAAEQAAAFgCAEIgCADIgDAKIgCAGIgBAHIgBAEIgBADQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgBgBIAAgCIABgEIgBgFQAAgDgCgDQgDgCgIgDIgJgCIgMgDIgNgDIgHgBIgCABIAAABIgEAWIgCAKIgDAOIgDANIgBAJIAAAKQAPADAPAIQAOAHAPgGIAIgDIADgGQADgCAAgEIAAgHQgBgFAFAAIAAAAIABABIABABQAEANgHAJIAAAAIgDAKIgDAJQgCAEgEABIgCAAIgJgBgAgoAEIgBgBIABgCIgBgEIABgHIABgBQAAgDAEAAIAAgBQAAABABAAQAAABABAAQABAAAAAAQABAAAAAAIAGgBIACAAIABAAIABgYIAAgjIAAgwIAAggIAAgRIAAgKQgBgHgCgDQgCgEgHgBIgFAAIgEgBIgCAAIgBgCIABgCIABAAIAAgCIAAgDIAAgEIACgEQABgDADAAQAFgBAEADIAGAGQADAEABAEIAAAAIAEAAIAGABIAHgBIABAAIABgFQAEgFAGgCQAFgCAGAAIABAAIACAAIABAAIABABIABABIAAABIAAACIgBADIgBACIAAADIAAACIAAABIgBACIgBAAIgDAAQgFADgGgBIgDADQgCAEgBAHIAAAKIAAARIAAAgIAAAwIABAsQABAOAEADIABgBIADAAIAKABIA3AAIACgCQADgDABgEIADgIIABgCIACgBIABABIABADIgBAGIgCALIgCAKQAAACgCACQgBABgEABIgLAAIgbAAIgVgBIgRAAIgNAAIgEAAIgIAAIgIAAIgGABIgBAAIAAAAIgCABQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBgBg");
	this.shape_3.setTransform(-0.4,-185.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#B56028","#D7824A","#E29850","#D7824A","#B66028"],[0,0.165,0.502,0.847,1],-83.2,0,83.3,0).s().p("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");
	this.shape_4.setTransform(-2.2,-174);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E29850").s().p("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");
	this.shape_5.setTransform(-2,-177);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D17436").s().p("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");
	this.shape_6.setTransform(-1.8,-176.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D7824A").s().p("ArxE/QgDgYAJgWQAGgMAJgJIADAAQAfgRgTgVIgFACQgQAOACAPQgYAEAEgRQAIgDAFgEIAWgNQAOgFAGgLQgEANAAAOQAKgGAJgNIAMgSIAHAFQAJAEAHAIIgBAHQgDAQgPgGQgLgEgBAJIgiBBQACgOgIgMIgBABQgeAZAOAeQgHAEgGADIgBgIgALlDHIAMAIQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgEgTgHgQIADAEQASAUgLAXIgMgQgALWCMIAAgBIABgLIAKAGIgBgDQgNgWgRgTQATgNAXALQgOAGgRAFQAAABABAAQAAABAAAAQABAAAAAAQAAABABAAQALAEAIAFIgBAAQALAcgGgaQAVAPgbAQQgBAIACAHIgMgTgAqpBkIABAAIgHAIIAGgIgAruBbQAPgGAIgNIgBgBQAHgCAJgKIgCgDQgGgIgIgBIAAgFQADAEAIACIACgDIADgKQADADABAFQADAKABAIQgNAFgFANIAAACIAKADQgIAIgTAAIgLgBgAnmAwIAeAJQAFAFAIAEIADACIgEACQgWgHgUgPgAm4BDIABAAIgBABIAAgBgAm0BBIACAAIgCAAgAruA9IgBgBIAFAAIABABIgFAAgAmvAyIADgPIAAAAQADAJgGAHIAAgBgArfAcIACAAIAAADIgCgDgAKlAGQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAABQAGAFAFAJIgDABQgQgEAFgLgAkEgoIABAAIAHAGIAAADIgIgJgAgzg7IAEgCQAIgHAEgTIABAEIABAGQgIAFgBAIIAAADQAHADAEABIgQACIgEgEgACeg/QAEgGAFgEIABgBIgEALIgGAAgACIhDIgDgGIAEACIABgDIABgBIAAAKIgDgCgAllkRQgwATguAZQhsA7hdBLIgSAOQCFiAC0hAgAoUh0IgEgHQAPACgMgWIAFgHQAAAAABAAQAAAAABAAQAAABAAABQAAAAAAABQABASgHAOIAAgBgAn5iEIABAAIADgCIABAFQgDgBgCgCgAIriQIAFgKQADAGAEAEQgIADgHAIIADgLgAJMiRIgFgBQAIgPgDgIIABABQATALgLARQgEgEgFgBgAFtiYQAMALAHgGQgFAGgEAAQgFAAgFgLgAoQiiIALgHQAAAFADAEIAAABIgCADQgFgFgHgBgAnwirIABAAIAJABQAGACAFAFIgCAAIgQABQgUAAARgJgAIdisIADAAIAJgBIABAGIABADIgOgIgAI2i0QACgDgDgFIAOAIIgFAAIACACIgKgCgAlFjeIgHgEIACgOQAFAOARAGIgEAAIgFAHQgGgEgCgFgAlgjWIgEgIQgIgNAIgMQgBgMAPgOIAFgCQAGAEADAEIgCACIgBAIIgBgFIgDABQgUAXALARQgBAHgFAAIgCAAgAkzjcIAAgBQAAgHgCgHIAFAMIgBADIgCAAgAGNjwIACgFIAIAEIAAABQgBAOgMAFQgCgLAFgIgAlFkJQAEACAGgBIAEAZQgEgOgKgMgAF0j4IAAgBIAGgGIAGADQgFAFgEAAIgDgBgACbkHQgQgZAKgYQAFAAgCAHQgDANAKAJIgDAVIgBgBgAk4kIIgBAAIAIgCIACACQABABgBAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgIgCgABtk4QgBgHAFgEIAKgDQgHAGgDAJIgEABIAAgCg");
	this.shape_7.setTransform(-2.9,-176.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BB642B").s().p("AsfAKQgQhHgQglIAJgNQAMAiALAzQAYBsADB6QBhigC5hzQC6h1DZglQDmgnDSA9IAiALQDWBHCcCqQAHhiAYg5QAYg6AMghIAJAJQgIAeglBZQgYA5gHBiQioi3jphEQjTg+joAnQjZAli6B1Qi5BzhhCgQgDh6gYhtg");
	this.shape_8.setTransform(-2.2,-156.3);

	this.instance = new lib.galeriaOver();
	this.instance.parent = this;
	this.instance.setTransform(32.1,-141.1,1,1,0,0,0,32.1,-141.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.4,-212,166.5,79.8);


(lib.facet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.instance = new lib.Wygenerujklatkipośrednie23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-383.7,-316,1,1,-6.3,0,0,-10,-11.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:-103.3,x:-375.3,y:-330.7},3).to({scaleX:1,scaleY:1,rotation:-161.5,y:-341.1},2).to({regX:-10.1,regY:-11.6,scaleX:1,scaleY:1,rotation:-174,x:-384.3,y:-351.6},2).wait(7).to({regX:-10,scaleX:1,scaleY:1,rotation:-183.3,y:-351.5},0).wait(2).to({regX:-10.1,scaleX:1,scaleY:1,rotation:-174,y:-351.6},0).wait(2).to({regX:-10,scaleX:1,scaleY:1,rotation:-183.3,y:-351.5},0).wait(2).to({regX:-10.1,scaleX:1,scaleY:1,rotation:-174,y:-351.6},0).wait(2).to({regX:-10,scaleX:1,scaleY:1,rotation:-183.3,y:-351.5},0).wait(2).to({regX:-10.1,scaleX:1,scaleY:1,rotation:-174,y:-351.6},0).wait(2).to({regX:-10,scaleX:1,scaleY:1,rotation:-183.3,y:-351.5},0).wait(2).to({regX:-10.1,scaleX:1,scaleY:1,rotation:-174,y:-351.6},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:0},0).to({regX:-10,regY:-11.5,scaleX:1,scaleY:1,rotation:-161.5,x:-375.3,y:-341.1},2).to({scaleX:1,scaleY:1,rotation:-103.3,y:-330.7},1).to({scaleX:1,scaleY:1,rotation:-6.3,x:-383.7,y:-316},2).wait(5));

	// Warstwa 2
	this.instance_1 = new lib.Wygenerujklatkipośrednie21("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-393.2,-335.4,1,1,0,0,0,-2.5,-7.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:-129.3,x:-393.1,y:-335.2},7).wait(27).to({startPosition:0},0).to({scaleX:1,scaleY:1,rotation:0,x:-393.2,y:-335.4},5).wait(5));

	// facet
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9E523F").s().p("Ag/HUQgHgFgDgHQgEgHAAgIQgBgJAGgGQAHgGABgLIABgDIAAgDIgDgFIgEgEIgEgEIgBgDIAAgEIAAgIIABgHQACgFADgDQgEgQgIgUQgIgSABgUQABgYAQgSQAGgHAIgGIgCgCIAAgEIAAgEIABgDQACgEAEgDIAOgFIAAgDIgDgEIgBgDIgBgFIAAgDIAAgEIABgBIgJgWQgBgjgzg1IgNgNIgIgSQgLgagFgOIAAgEQgCgzAagrQAMgTAPgNQAAgGABgHQAFgagEgYQgEgagPgUQgvgYgBhBIABgQQgCgwAigiIAEgEQAYgZAngPQCFAAADBxQALAEAPAKQAjAWAHAPQADACAAAFIgBAEQgBAHgEACQgHAJgNAAQgLAAgHgFIgCAAIgBACIgCADIgDASIgGAaQAMADAAALQAAAGgDAFIgFAGQgHAHgIgBIgIgBIgKABQgNABgRgJIgPAAIAAAOQACANgCAIIAAADQAJAHAWAOIAhATIAQAOIAEAFIAOAUQAhAyAAApQAAAfgLALIgCAQQAGAMAEANQAFAMABAZIAAAcQAAAagEAPQgEASgIAJQAMAmACArQABAmgBAnQgBAhgCAhQAAAEgCADQgJALgNgGQgXgMgaANQgFALgMgBIh7gBg");
	this.shape.setTransform(-392.5,-330.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9E523F").s().p("Ag5HTQgHgFgDgIQgDgGgBgJQAAgIAGgGQAHgHAAgKIABgDIAAgEIgDgEIgEgEIgEgEIgBgEIAAgDIAAgIIABgHQACgFAEgEQgFgPgHgUQgIgSABgVQAAgXAQgSQAHgIAHgFIgBgCIgBgEIAAgEIABgDQADgFAEgCIAOgFIAAgDIgEgEIgBgEIAAgEIAAgEIAAgDIAAgBIgIgWQgBgjgzg1IgOgNIgIgSQgLgagEgOIgBgEQgCgzAbgrIALgPIgBAAQAHgKAJgIQgBgFACgHQAEgWgCgVIABAAIgBgDQgHgYgQgTQgxgUgHhBIgBgPQgFgwAegmIADgDQAWgcAmgSQCFgMANBxQALADAQAIQAkATAJAPQACABABAFIAAAFQgBAGgDADQgHAJgNACQgLAAgHgEIgDAAIAAACIgCAEIgBASIgDAaQAMADAAAKQABAFgDAGIgFAHQgFAHgIAAIgJAAIgJACQgNABgSgHIgNACIAAAMIAAACIAAAEIAAAAIAAAJIgBAMIAAACQAIAIAXAOIALAHIABAAIAVAMIARANIAEAGIAOAUQAhAxAAAqQAAAfgLALIgDAQQAHAMAEAMQAFANAAAZIAAAcQAAAZgEAQQgDASgJAJQAMAmACAqQACAngBAnQgBAhgDAhQAAAEgCADQgJALgNgHQgXgLgaAMQgFALgMAAIh7gBg");
	this.shape_1.setTransform(-393.1,-330.7);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9E523F").s().p("AgyHQQgHgFgDgHQgDgHgBgIQAAgIAGgGQAHgHAAgKIABgEIAAgDIgDgEIgEgFIgEgDIgBgEIAAgEIAAgIIABgHQACgFAEgDQgFgQgHgTQgIgSABgVQAAgXAQgTQAHgHAHgGIgBgCIgBgEIAAgEIABgDQADgEAEgCIAOgGIAAgDIgEgEIgBgDIAAgEIAAgEIAAgEIAAgBIgIgWQgBgjgzg0IgOgOIgIgSQgLgZgEgNIgBgGQgCgzAbgrIALgPIgBAAQAHgJAIgIIABgJIABgEQADgSgBgRIgBgCQgIgZgSgRQgzgQgMhAIgCgQQgKguAbgoIAEgEQATgdAlgWQCDgXAWBwQALABARAHQAlARAKAOQADABABAEIAAAFQAAAHgDADQgGAJgNADQgKABgIgDIgDAAIAAACIgBAEIgBATIAAAaQAMABACAKQABAFgDAHIgEAGQgFAIgIABQgEABgFAAIgJACQgNADgSgGIgGACIgFAJIAAAIIAAABIAAABIABAEIgBAAIAAAKIAAAFIAAAAIAAAEIAAACQAIAHAXAPIALAGIABAAIAVANIARANIAEAFIAOAUQAhAyAAApQAAAfgLAMIgDAQQAHALAEANQAFANAAAZIAAAcQAAAZgEAPQgDASgJAJQAMAnACAqQACAmgBAnQgBAhgDAhQAAAEgCAEQgJAKgNgGQgXgLgaAMQgFALgMAAIh7gCg");
	this.shape_2.setTransform(-393.8,-330.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},12).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},5).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},12).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},5).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},43).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},12).to({state:[{t:this.shape}]},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(12).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-407.9,-377.7,30.9,93.9);


(lib.email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// e-mail maska (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjFBrIgBgBIgBgEIAAgBQAAgEABgBIACgBIACAAIACgBIABAAIAAgCIAAgFIgCgTIgBgbIgCglIgDgYIgBgNIAAgHIgBgFIAAAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAIgBABIgDAAIgDgCIgCgFIAAgBQgBgDACgCIABgBIACAAIAGAAIAGgBIAEAAIAEAAIAIAAIAJgBIAIgBIADAAIACAAIACgBIABgBIABAAIABAAIABACQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIABAfIAAADQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgBAAQgDgBABgEIAAgCIAAgCIgBgBIAAgDQAAAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBIgBAAIgCAAIgGABQgDgBgCACIgBAAIgBAAIADAtIADAAIAGAAIAGAAIADgBIAEgCIAAgBIABgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQACArgCAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIgBgBIgBgEIAAgEIAAgCIgCgEIgDgBIgEAAIgEgBIgGABIgCAAIABAPIABAKIABAMQAAAGABADQAAAIACADIABgBQADAEAHgBIAFgBIADgBIACgBIACgEIAAgIIABgEQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQADAAABAGIAAADIABAIIAAAKIAAAHIgBAGIgCAEIgBAAIgFAAIgvACIgDgBgAheBlQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIgBgDIAAgBIAAgFQAAAAABAAQAAgBAAAAQAAAAAAAAQABgBAAAAIABAAIACAAIABAAIABAAIACgFIAAAAQABgGgBgFIABirQABgDADAAQAAgBABAAQAAABAAAAQABAAAAABQAAAAABABIAvCJIAaiRQACABACADIAYChQABAJACAGIABABIAAABIABADIABABIABgCIABAAIACgLIAAgBIAAgBIAAAAQAFgkAGgkIAKhBIACgIQACAAACACIABABIABAGIAFAPIAIAcIAKAeIAAABIABABIAAACIACAFIADAIIABAGIACAEIABAFIADAMIADALIAAABIABACIAAABIAEALIABACIACACIAAAAIABACIACAAIABAAIACgBIABAAIAAgCIAAgEIAAgIIAAgBIAAgFIAAgDIgBgCIAAgBIAAgEIgCgUIAAgCIgDgkIgBgNIgBgNIgBgNIgBgIIAAgEIAAAAIgBgCIgBABIgCgBIgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQgCgCAAgDIgBAAQABgDACgCQAAAAgBgBQAAAAAAAAQABgBAAAAQAAAAAAAAIADAAIAEgBIAGAAIAEAAIAFAAIAFgBIAFAAIACAAIACACIABAFIAAADIAAACIgBABIgCAAIgBAAIgBAAIgBABIgCACIABAFIAAAAIAAAIIAAABIAAAEIAAAIIACAQIABAIIAAABIADAhIgBAEIABAIIAAAFIAAABIABAHIAAAEIAAACIABAKIABACIAAAIIABADIACACIADAAIACAAIABAAIACAAQACACABADIAAACIgBADQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgBABIgBABIAAAAQgGAAgFgBIggACIgCABIgHAAIgBAAIgCAAIgDAAIgBAAIAAgBIgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAgBIAAgDQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIABgBIgBAAIgMgoIgVACIgEAAIgEAdIAAABIAAADIAAABIgBABIAAAEIABABIACAAIADAAIABACQABABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQABABgBAAQAAABAAAAQAAABAAAAIgCACIgCABIgNABIgBAAIgKAAIgQAAIgBAAIgBAAIgBgBIgBAAQgDgCAAgEQAAgDACgCIABgCIAAAAIgBgGIgNhfIgSBlIgCAOIAAACQgBABAAAAQAAABgBAAQAAABAAAAQgBAAAAgBIgBAAIgBgBIAAgBIgBgBIgCgDIgCgJIggheIgBgEIAABcIABAFIAAAEIAHABQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABIABAEIAAAEQAAABAAABQAAAAgBAAQAAABAAAAQAAAAgBAAIgCAAIgBAAIgIAAIgFAAIgEABIgEABIgBAAIgEAAIgBAAIgCgBgAAzASIALAAIAGgBIgLgngACgBVIgJAAIAAgEIAAgBQgBgFABAAIAHgDIAAgCIABgFIAAAAIgBgTIgBgGIgBgCIgBgPIAAgCIAAgBIgCglIAAgCIgCgRIgBgGIAAgEIgBgIIAAgIIgBgEIAAAAIgCgDIgCgBIgCABQgFABAAgHIAAAAQAAgBAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABAAAAAAIACAAIAGgBIAGAAIAEAAIABAAIAEAAIAGgBIAGAAIABAAIADACIAAADIAAAGQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgBAAIgBAAIgCAAIgCACQAAABAAAAQAAAAAAABQAAAAAAABQAAABAAABIAAAAIAAABIAAAHIAAABIAAABIABALIAAAGIABAJIAEA3IAAAIIACAQIABADIACAHIAAAAIAEABQADACAHgBIAHgCIABAAIACgDIABgCIACgOQAAgBAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQADAAABAGIAAAEIAAAFIAAAFIAAAGIABAKIAAABQAAADgBABIgBAAIgCADIgBAAIgFAAIgLACIghAAgAiPAuIAAgDIAAgCIAAgBIAAgRIAAAAIACgGIAAgBIADAAIAkgCIAEgBQABgBADAIIABABQAAAGgEABIgBABIgDACIgGACIgKAEIgKAFIgGACIgDADIgDADIgBAAQgBAAgCgEg");
	mask.setTransform(109.4,-50.2);

	// blysk
	this.instance = new lib.Wygenerujklatkipośrednie15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(130,-36.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:119.5,y:-44.8},11,cjs.Ease.get(0.5)).to({x:102.4,y:-49.9},9,cjs.Ease.get(0.5)).to({startPosition:0},15,cjs.Ease.get(0.5)).to({x:119.5,y:-44.8},25,cjs.Ease.get(0.5)).to({x:93.5,y:-66.8},23).wait(1));

	// pomarancz
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC8C2D").s().p("AjgBzIAAjlIHBAAIAADlg");
	this.shape.setTransform(109.1,-50.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(84));

	// cien
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6A2626").s().p("AjHBvIgBgCIgBgEQgBgEACgCIACgBIABAAIAAAAQAAgFABgBIACgBIAAgBQABgHgCgMIgBgaIgDgmIgCgXIgBgNIgBgIIgBgEIAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgCAAIgDAAIgDgBQgCgDAAgDQgBgEADgBIABgBIABAAIAAgBQgBgEACgBIABgCIACABIAGgBIAGAAIAEgBIAEAAIAIAAIAJgBIAIAAIADAAIACAAIACgCIABgBIABAAIABAAIABACQABAAAAABQAAAAAAABQABAAAAABQAAABgBAAIABAfIAAADQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgBAAIAAACIAAADQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgEAAAAgFIAAgCIAAgCIAAgBIAAgDQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgBAAIgCAAIgGAAIgDABIADAmIADAAIAGAAIAGAAIADgBIAEgBIAAgBIABgBQAAAAABgBQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQACArgCAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIgBgBIgBAKIgCgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAgBIgBgDIAAgDIgCgDIgEgBIgDAAIgFgBIgCABIAAAHIABAKIABAMQAAAGABAEQAAAHACADIABAAQADADAHgBIAFgBIADAAIAAgHIABgDQAAgBAAgBQAAgBAAAAQABgBAAAAQAAgBABAAIABABIABgEQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBABAAQADAAABAGIAAAEIABAIIAAAKIAAAGIgBAGIgCAEIgBABIgBADIgCADQAAAAgBABQAAAAgBAAQAAAAgBAAQgBgBgBAAIgxADIgCgBgAhgBpIgBgCIgBgFIAAgEIACgCIABAAIABAAIAAgBIAAgEQABgBAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIABgBIACAAIABAAIgBgIIABirQABgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAAAAIAAgDQABgEADAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAABIAvCKIgCgFIAYiFQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAIABgIQACAAACADIAYChQABAKACAFIABABIAAABIABADIABgEIAAgBQAEglAHgkQALhKABAAIACABIACgIQACAAACADIABABIABAFIAFAPIAIAcIAKAeIAAACIABACIAAAAIACAGIADAHIABAGIACAFIABAEIADAMIADALIAAACIABABIAAABIAEAMIABACIACACIAAAAIABABIACAAIgBgSIgCgcIgDgkIgCgZIgBgNIgBgIIAAgEIgBAAIgBgCIAAAAIgCAAIgBgBQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgCgFQAAgDABgCQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIACAAIgBgBQABgDACgCQAAAAAAgBQgBAAABAAQAAAAAAgBQAAAAAAAAIADABIAEgBIAGgBIAEAAIAFAAIAFAAIAFgBIACAAIACACIABAFIAAADIABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIACgBIAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIACAAIAGgBIAGAAIAEAAIABAAIAEAAIAGgBIAGAAIABAAIADACIAAAEIAAAGQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgBAAIAAAGQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgCAAIAAAAIAAAHIAAABIAAABIABAMIAAAFIABAJIAEA4IAAAHIACAQIABADIACAHIAAABIAEAAQADACAHgBIAHgBIACgNQAAAAAAgBQABAAAAgBQAAAAAAAAQABAAAAAAIABAAIABgFQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQADAAABAGIAAAEIAAAGIAAAEIAAAHIABAJIAAABQAAAEgBABIgBAAIgCADIAAAAIgBAEIgBAAIgCADIgBAAIgFAAIgLABIgqAAIgBgFIgBABIAAAEIgCACIgCABQgGABgFgBIggACQgFABgIAAIgCAAIgBAAIgBgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgBAAgBIABgDQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIABgBIgBAAIgMgoIgVACIgEAVIAAABIAAADIAAACIgBAAIAAAEIABACIACAAIADAAIABABQABABAAAAQABABAAAAQAAABAAABQAAAAAAABQABABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgCADIgCAAIAAAFIgBACQgBABgqAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgBAAQgDgDAAgDQAAgDABgCIABgCIABAAIgBgGIgMhWIgPBVIgCANIAAACQAAABgBAAQAAABgBAAQAAABAAAAQgBAAAAAAIgBADIAAABQAAABgBABQAAABgBAAQAAAAgBAAQAAAAgBAAIgBgBIAAgBIgBgCIgCgCIgCgJIgdhWIAABIIABAFIAAAEIAHABQABAAAAAAQAAAAABAAQAAABAAAAQABABAAAAIABAEIAAAFQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgCABIAAAEQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgDABQgEABgEgCIgFABIgEABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABIgBAAIgFAAIAAAAIgCgBgACZBOIAAgCQgBgEABgBIADgBIAAgBIgBgTIgCgbIgDgkQAAgQgCgJQAAgIgBgEIAAgIIgBgFIgBAAIgBgDIgBAAIgDABQgEAAgBgHIgCAAIgBAAIAAAGQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAIgBAAIAAABIAAAHIAAABIAAAEIAAAIIACARIABAIIAAAAIADAhIgBAEIABAIIAAAGIAAABIABAGIAAAEIAAACIABAKIABACIAAAIIABADIACACIADAAIACAAIABAAIACABQACABABAEIAAACIABAAIAAAAgAA1APIALgBIgHgZIACgPgAiQAxIgBgCIAAgCIAAgBIAAgRIABAAIABgGIAAgCIACAAIAAAAIACgFIAAgCIADAAIAkgCIAEgBQABAAADAHIABABQAAAHgEABIgBAAQAAAGgDABIgEADIgGACIgKAEIgKAEIgGADIgDADQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIAAABQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAgBg");
	this.shape_1.setTransform(109.2,-49.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(84));

	// daszek maska (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjmALIAAAAIgCgEIgUglIgKgSIgBgCIgBgDIISAfIgCA/IgDAAIggABIhkACIlRAKg");
	mask_1.setTransform(110.2,-74.3);

	// daszek blysk
	this.instance_1 = new lib.Wygenerujklatkipośrednie43("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(114,-64.1);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({_off:false},0).to({x:107,y:-86.9},9).wait(1));

	// skrzynka maska (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("ADuC3IlZgGQhSAAgUgBIALgBIgMgBIgIhOIgFgoIAAgBIgRisQA5gGA6gKIAHAVIDOgCIAhAAIALgOIADgFIjvgFIAFAAQCXgTCXgYIAmgCIgDAIIAAANIABBRIAAAuIABCTIAAABIAABHg");
	mask_2.setTransform(108.9,-51.2);

	// blyski na skrzynce
	this.instance_2 = new lib.Wygenerujklatkipośrednie35("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(125.1,-22.5,0.998,0.998,-1.8);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:121.1,y:-32.5},11,cjs.Ease.get(0.5)).to({x:116.3,y:-41},24,cjs.Ease.get(0.5)).to({x:121.1,y:-32.5},25,cjs.Ease.get(0.5)).to({x:98.1,y:-81},23,cjs.Ease.get(0.5)).wait(1));

	// skrzynka
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CB4553").s().p("ADjAfQhdgJjBgbIh8gRQhLgLAHAAQD6AHD+AOQgGAVgCAZIgSgDg");
	this.shape_2.setTransform(110.7,-74.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A33A50").s().p("AjmALIAAAAIgCgEIgUglIgKgSIgBgCIgBgDIISAfIgCA/IgDAAIggABIhkACIlRAKgAixgbIB8ASQDBAaBcAKIASACQADgZAFgVQj+gOj5gGQgHAABLAKg");
	this.shape_3.setTransform(110.2,-74.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#592631").s().p("AjPDOIgsmhIAAgEIAAAEIADgHIAJgWIAEArIgBABIABABIAFArIAAAAIAEAsIARCtIAAABIAFAoIAIBOIAMABIgLABQAUABBSAAIFZAFIgBACIgvAvgAhvh8IgCgEIAXAAIDvAFIgDAFIgLANIghABIjOACg");
	this.shape_4.setTransform(107.5,-52.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#773341").s().p("AjbAZIAAAAIgEgqIgBgBIABgBIgFgrIACgEIAAgCIAzBgIGOgWIABAAIAEgBQiXAYiXATIgEAAIgYAAIACAFQg6ALg4AFg");
	this.shape_5.setTransform(106.3,-69.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5C232F").s().p("Aj/gjIAAACIgCAEIgJAWIgDAHIAAgEIAAgEIAAglIAPgQIABADIAKASIAUAlIACADIAAAAIAWAsIFRgKIBkgCIAggBIgKAFIgXABIgmACIgFAAIAAAAImOAXg");
	this.shape_6.setTransform(109.3,-73.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#893A4A").s().p("ADuC3IlZgGQhSAAgUgBIALgBIgMgBIgIhOIgFgoIAAgBIgRisQA5gGA6gKIAHAVIDOgCIAhAAIALgOIADgFIjvgFIAFAAQCXgTCXgYIAmgCIgDAIIAAANIABBRIAAAuIABCTIAAABIAABHg");
	this.shape_7.setTransform(108.9,-51.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82.3,-79.7,54.4,51.7);


(lib.dziadekPojawiaSie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// okno
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D4F4F").s().p("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");
	this.shape.setTransform(50.2,52.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB7777").s().p("AHlKjQnUgLoNgSIgsiCIgCgEIAPAAIAFAAIA7ABIBDACICNADQEPAIEBAOIAFAAICBAIICAAIIgjB3IgDAAgAHOEbQAgh+AdiMQAAAAAAAAQAAgBABAAQAAAAABAAQABgBABAAQAWA5gEA2QgDAkgPAiQgTAtgoApIgDABIgDAAgAKFjqIgFgLQgHgFgMADQgLADgGgKQgEgJAEgJQAIgPAPgCQBCACgTA4QgBADgDACQgFACgEAAQgKAAgGgKgAqkklIgBgCQAmgdA5gKQAQgBAHAPIACAEQgeApglAAQgYAAgcgSgAG7mPIhlh4QgIgJASgBQCaBCA6CXQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQg6gRg+hJgAFrmQIgDgBQgIgGABgJQABgIAIABIAAgBIAJAGQAFACADAEQAEAGgFAFQgFACgEAAIgGgBgAlWmvIgKgCQgFADgFgCQgFgCgFgGIgFgIIAAgDIAAgEQABgDADgCIAFgDIABgBIAUABIAGACIACAEIAEAHQADAFgCAGIgCAIIgEAAIgCAAgAEunLIgHgDQgGgEgCgHIAAgDIACgIIACgCIAFgCIABgBQAHADAIgBQAIAAABAIIABAIQAAAFgFAEQgEADgGAAIgFAAgAg0ngQgQgFgCgPQAAgFACgCIgBgBQgGgMAGgNQACgFAFgBQAKADACALQACAJAEAKQACAEgCADIAEAEQAEAGgEAFQgDAFgFAAIgEgBgAk5njIgBAAQgFgDACgGIAAgBIAAgDIACgHQADgGAGgCIAJgDQAIABAGAEQAHAEgBAJQAAAFgEAFIgGACQgHACgHAAQgGAAgGgBgADWnuIgCgHIgBgIIAAgBQAAgGADgEIACgCIACgCIACgCIACgBIAEgBIABgBQAJgBAGAHQADAEAFACQAKADACAKQgCAIgHAAIgBAAQgJAAgHADIgGAEQgDADgHAAIgGgIgABrn0IAAAAQgCgIAGgGQAJgJgFgMQgDgIAKgBQAFABAEAEIABAAQAEADADAGQACAFABAFIAAABQgFAKgGAIQgGAIgGAAQgFAAgHgHgAAZn8QAAgMAGgJQACgEAEgBIAEABQAEAAACACIAHAHIADAEIgBAHQgCAEgDADQgGAEgFAGQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgNgCABgMgAj0oEIgCgEIgBgIIAAgHIAAgIIAEgDIANgFIAIgDQAXgDgIATQgEAKgHAGIgIAGIgCAAQgDACgEAAQgEAAgFgCgAigoTQgCgFAAgFIAAgBIAAgLIAEgDIALgGIAFgCQAMADgGAJIgDAGQgDAHgCAIQgBAHgHAAQgFgDgDgEgABMowIgBgGIgBgVIgHgHIgKgLIgEgDQgcgFggAEIAAABIAAAEIAAALQgBAIADAHQAFAMgGAKIgBAAQgRACgCgRIgBgQIAAgKIAAgEIAAgTIABgEIAEgEIAEgDQgRACgSAIQgOAHgKgLQAAgEABgCQAEgGAGgDIAGgDIACAAQAHgDAFgEQAEgDACgDQAJgOAOgEQAfADAgAIQAWAGAPAOQAJAJAHANQAIAQgHAPIAAAEQADARABASQAAANgMAEQgOgIgCgSg");
	this.shape_1.setTransform(55.1,48.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A06767").s().p("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IAAAAIgFADQgDADgBADIgBADIAAAEIAFAIQAFAFAFADIAAACIgBADQgHABgFgCIgEgEIgIgHQgFADgCAFgAk3mvQgCAPALAJQARAOAUgHIAEgDIALgMIAEgHIgCgDQgEgEgEgCQgFAAgEADIgHAIIgOgDQgGgCAAgGIABAAQAMADANgEIAGgCQAEgFABgGQABgIgHgEQgHgEgIgBIgJADQgGACgDAGIgCAGIAAAEIAAABIgFgCQgJABgBAKgAjxniIgFABIgBACIgDACIgDADQgEAJADAKQACAIAGAGQAQANATABIAFgCIADgCQAIgIAGgJQAFgFgCgJIgCgDQgEgEgEgBIgBAAQAIgGAEgKQAHgTgXADIgHACIgOAGIgEADIAAAHIAAAIIABAIIADADQAIAFAIgEIABgBQAAAJgJADQgOAEABgLQACgQgQgGIAAAAgADvmoIgHgJQgDgEgEgDQAEgCABgHIADgJIAAABIAAAIIACAHIAHAIQAGgBAEgDIAGgDIgEAGQgEALgKAAIgBAAgAiPneQgEgEAEgFIACgDIAAAAQAAAGADAFQACAEAFADQAIAAABgHQABgJADgGQAFgDADgFQABAWAKAUQgagBgSgRgACgneQgCgGgFgDQAHAAACAIIABADQACAFgCADQAAgFgDgFgAgIn8IADgcIABAQQACASAPgCIABAAQAGgLgFgMQgCgGAAgIIAAgLIAAgEIAAgBQAhgEAcAEIAEAEQgFAAgFABQgMACgNAGQgSAKgDASIAAAEIgBACIgHAQQgDAGgHAGIgCADQgMgJACgUgAgPovQgDgCgDAAIgPgBQgKAHgPAFIgEACIgDgNQADgEAAgEQAAgHAGgGIACgCIANgEQgGADgEAFQgCADAAADQALAMAOgHQARgIAQgCIgDADIgEAEIAAAEIgBATIAAADQgBgHgIgGgAgkpQQADgCABgDIAIgCQgFAFgIACIABAAg");
	this.shape_2.setTransform(53,43.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(51));

	// skrzydlo l
	this.instance = new lib.Wygenerujklatkipośrednie53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.3,59.6,1,1,0,0,0,-30,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42).to({startPosition:0},0).to({regX:-30.3,regY:-2.6,scaleX:0.25,rotation:-6.6,x:0.2,y:59.5},3).wait(6));

	// skrzydlo p
	this.instance_1 = new lib.Wygenerujklatkipośrednie57("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(97.9,63.4,1,1,0,0,0,27,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41).to({startPosition:0},0).to({regX:26.9,scaleX:0.17},4).wait(6));

	// z cienia
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4F3137").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_3.setTransform(50,61.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(79,49,55,0.957)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_4.setTransform(50,61.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(79,49,55,0.918)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_5.setTransform(50,61.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(79,49,55,0.875)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_6.setTransform(50,61.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(79,49,55,0.831)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_7.setTransform(50,61.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(79,49,55,0.792)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_8.setTransform(50,61.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(79,49,55,0.749)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_9.setTransform(50,61.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(79,49,55,0.71)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_10.setTransform(50,61.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(79,49,55,0.667)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_11.setTransform(50,61.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(79,49,55,0.624)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_12.setTransform(50,61.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(79,49,55,0.584)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_13.setTransform(50,61.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(79,49,55,0.541)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_14.setTransform(50,61.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(79,49,55,0.502)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_15.setTransform(50,61.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(79,49,55,0.459)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_16.setTransform(50,61.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(79,49,55,0.416)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_17.setTransform(50,61.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(79,49,55,0.376)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_18.setTransform(50,61.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(79,49,55,0.333)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_19.setTransform(50,61.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(79,49,55,0.29)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_20.setTransform(50,61.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(79,49,55,0.251)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_21.setTransform(50,61.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(79,49,55,0.208)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_22.setTransform(50,61.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(79,49,55,0.169)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_23.setTransform(50,61.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(79,49,55,0.125)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_24.setTransform(50,61.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(79,49,55,0.082)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_25.setTransform(50,61.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(79,49,55,0.043)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_26.setTransform(50,61.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(79,49,55,0)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_27.setTransform(50,61.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[]},4).wait(23));

	// postac ciemna
	this.instance_2 = new lib.Wygenerujklatkipośrednie74("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(27.9,84.5,0.826,0.827);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#392428").s().p("AigDtIAAgBIgogTQgigOgIgNQgDgGAAgVQgBgTAWg+IAZhCIAAAAQALglAjglQARgSAZgSQAFgEAUgEQATgDAPgBIAFgBQgDgFgDgIIgEgbQgBgaAUAHIAEACIADgHQgBAAgBAAQgBAAAAAAQgBABAAAAQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgGAAAAgHQgBgBAAgFIAAgDQgOgDgSgBQgBABAAgGQAAgEAFAAQgEgDAJgDQAJgBAIABQgMgMgJgPIACAAIAJADIAJAAIAAAAIABgBQAaADAQAMIgEgIIgBgCQgOgRAAgBIABgFIACgCQAGACAIAJQALAIAHAKQAegXAtABQAxAAAjAcIAIAHQAFgGALgGQALgGAFADQAGAAADAGIABACIgNAJIABABIAQgKIAGgQIACgBQAEAIABAGIABAEQABAQgLAJQgEAHgHAEIAAACIADgBQALgGAIADQAIABAFAJIAAACQgUAGgUAPIgEACIAAAJQAAANgCAQQACAHABAIQAAAdgPAKQgOAagMAOIgFAFQAMATAOAdIAAAAQAKATARA/QAQA5AAAIQAAAOgIAIQgMANgeAEIhNALQhAAIgvAAIgBAAQhpAAgqgLg");
	this.shape_28.setTransform(49.1,83.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(57,36,40,0.749)").s().p("AigDtIAAAAIgogTQgigPgIgNQgDgGAAgVQgBgTAWg+IAZhCIAAAAQALglAjgkQARgTAZgSQAEgEAVgEQATgDAPgBIAGgBQgEgFgDgIIgEgbQgBgaAUAHIAEACIADgHQgBAAgBAAQgBAAAAAAQgBABAAAAQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgGAAAAgHQgBgBAAgFIAAgCQgOgEgSgBQgBABAAgGQAAgEAFAAQgEgDAJgDQAJgBAIABQgMgMgJgPIACAAIAJADIAJAAIAAAAIABgBQAaADAQAMIgEgIIgBgCQgOgRAAgBIABgFIACgCQAFACAJAJQALAIAHAKQAegXAtABQAxAAAjAcIAIAHQAFgGALgGQAKgGAHADQAFABADAFIABACIgNAKIABAAIAQgKIAGgQIACgBQAEAIABAGIABAEQABAQgKAJQgFAHgHAFIABABIACgBQALgGAIADQAJABAEAJIAAACQgUAGgUAPIgEADIAAAIIgCAdQACAHABAIQAAAdgPAKQgOAagMAOIgEAFQALATAOAdQALATAQA/QAQA5AAAIQAAAOgIAJQgMAMgeAEIhNALQhAAIgvAAQhqAAgqgLg");
	this.shape_29.setTransform(49.1,83.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(57,36,40,0.502)").s().p("AigDtIAAAAIgogTQgigPgIgNQgDgGAAgVQgBgTAWg+IAZhCIAAAAQALglAjgkQARgTAZgSQAEgEAVgEQATgDAPgBIAGgBQgEgFgDgIIgEgbQgBgaAUAHIAEACIADgHQgBAAgBAAQgBAAAAAAQgBABAAAAQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgGAAAAgHQgBgBAAgFIAAgCQgOgEgSgBQgBABAAgGQAAgEAFAAQgEgDAJgDQAJgBAIABQgMgMgJgPIACAAIAJADIAJAAIAAAAIABgBQAaADAQAMIgEgIIgBgCQgOgRAAgBIABgFIACgCQAFACAJAJQALAIAHAKQAegXAtABQAxAAAjAcIAIAHQAFgGALgGQAKgGAHADQAFABADAFIABACIgNAKIABAAIAQgKIAGgQIACgBQAEAIABAGIABAEQABAQgKAJQgFAHgHAFIABABIACgBQALgGAIADQAJABAEAJIAAACQgUAGgUAPIgEADIAAAIIgCAdQACAHABAIQAAAdgPAKQgOAagMAOIgEAFQALATAOAdQALATAQA/QAQA5AAAIQAAAOgIAJQgMAMgeAEIhNALQhAAIgvAAQhqAAgqgLg");
	this.shape_30.setTransform(49.1,83.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(57,36,40,0.251)").s().p("AigDtIAAAAIgogTQgigPgIgNQgDgGAAgVQgBgTAWg+IAZhCIAAAAQALglAjgkQARgTAZgSQAEgEAVgEQATgDAPgBIAGgBQgEgFgDgIIgEgbQgBgaAUAHIAEACIADgHQgBAAgBAAQgBAAAAAAQgBABAAAAQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgGAAAAgHQgBgBAAgFIAAgCQgOgEgSgBQgBABAAgGQAAgEAFAAQgEgDAJgDQAJgBAIABQgMgMgJgPIACAAIAJADIAJAAIAAAAIABgBQAaADAQAMIgEgIIgBgCQgOgRAAgBIABgFIACgCQAFACAJAJQALAIAHAKQAegXAtABQAxAAAjAcIAIAHQAFgGALgGQAKgGAHADQAFABADAFIABACIgNAKIABAAIAQgKIAGgQIACgBQAEAIABAGIABAEQABAQgKAJQgFAHgHAFIABABIACgBQALgGAIADQAJABAEAJIAAACQgUAGgUAPIgEADIAAAIIgCAdQACAHABAIQAAAdgPAKQgOAagMAOIgEAFQALATAOAdQALATAQA/QAQA5AAAIQAAAOgIAJQgMAMgeAEIhNALQhAAIgvAAQhqAAgqgLg");
	this.shape_31.setTransform(49.1,83.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(57,36,40,0)").s().p("AigDtIAAgBIgogTQgigOgIgNQgDgGAAgVQgBgTAWg+IAZhCIAAAAQALglAjglQARgSAZgSQAFgEAUgEQATgDAPgBIAFgBQgDgFgDgIIgEgbQgBgaAUAHIAEACIADgHQgBAAgBAAQgBAAAAAAQgBABAAAAQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgGAAAAgHQgBgBAAgFIAAgDQgOgDgSgBQgBABAAgGQAAgEAFAAQgEgDAJgDQAJgBAIABQgMgMgJgPIACAAIAJADIAJAAIAAAAIABgBQAaADAQAMIgEgIIgBgCQgOgRAAgBIABgFIACgCQAGACAIAJQALAIAHAKQAegXAtABQAxAAAjAcIAIAHQAFgGALgGQALgGAFADQAGAAADAGIABACIgNAJIABABIAQgKIAGgQIACgBQAEAIABAGIABAEQABAQgLAJQgEAHgHAEIAAACIADgBQALgGAIADQAIABAFAJIAAACQgUAGgUAPIgEACIAAAJQAAANgCAQQACAHABAIQAAAdgPAKQgOAagMAOIgFAFQAMATAOAdIAAAAQAKATARA/QAQA5AAAIQAAAOgIAIQgMANgeAEIhNALQhAAIgvAAIgBAAQhpAAgqgLg");
	this.shape_32.setTransform(49.1,83.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},24).to({state:[{t:this.shape_28}]},17).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[]},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,x:49.1,y:83.8},24).to({_off:true},17).wait(10));

	// glowa
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#593E37").s().p("AgDAAIgCAAIALAAQAAABgGAAg");
	this.shape_33.setTransform(64.1,76.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#725149").s().p("AgEAPIgFgBQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgDAAgFgDIgEgBQgLgBgLABIgBgBIgBgBQgCgEAEgEQADgCADAAQAYgDALANIgHgWIAAgFQAEgDAEgFQACAJACAPQAFAXAZAAQAJAAADgLIAAgLQAAgJgFgQIgDgHIACACQAGAIAJAEIABATQAAAggWAAQgYAAgJgSg");
	this.shape_34.setTransform(58.4,80.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#442F2B").s().p("AhCA3QgIgJAAgKQAAgIACgHQgFgKgKgZQgSgsgDAAIAAAAQgBAAgBAAQgBABAAAAQgBAAAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgGAAAAgHQgBAAAAgFIAAgDIAEABIABgBQASAIANAKIADAJQAGAIAFAPIAJAWIAAAEQAMgOAbgEQATgDAMAHQAPAHABAQIAAADQAKgDAHAFQADgeApgDQAigBAHAWQACAGABAJQAAAdgPAKQgGADgHABIgIABQgOAAgKgFQgIgEgHgHIgCgDIgEgFQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBgBAAAAIgBgCIgDgCIgGgBQgIAAgBACQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgCAGQgCAHgEAFQgEAEgFAEQgIAFgPAAQggAAgNgPgAgYAEQghAJAAAZQAAAGANAHQAMAGAKAAQARAAAIgTIAEgTQAAgSgQAAQgHAAgIADgABaACIgIABQgNACgKAOIgGAKQACAGAGAHQALANATAAQAOAAAGgQIACgPQAAgXgVAAIgCABgAgWAvQgEgEABgHQABgFACgDIACgBQALgEAHAIIACADIgBAFQgCAHgGADIgGABQgEAAgDgDgABDAsIgDgCQgEgDAAgFIABgEIAEgFQANgFAFAJQADAEgBAFIgHAGg");
	this.shape_35.setTransform(56.8,72.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#BC8A7E").s().p("AheBFQgPgdgDgeQgIgHgEgNIgFgbQAAgaATAHIAEACIADgHIAAAAQADAAASArQAKAaAGAKQgCAGAAAIQAAALAHAIQANAQAhAAQAOAAAIgGIAAAFIAIAXQgMgOgWADQgEABgCACQgEADACAFIAAABIACABQALgBALABIADABQAEADADAAQABAAABgBQAAAAABAAQAAAAABAAQAAgBABAAIAEABQALASAYAAQAVAAAAggIgBgUQAKAFAOAAIAIgBQAIgBAFgEQgOAagMAOQgeAhglAAQhTAAgig/gAAUBNQgCgPgCgJQAEgFACgHIACgFQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABgDAIAAIAGABIADACIABACQABABAAAAQAAABABAAQAAABABAAQAAAAABABIAEAGIACAHQAFAQAAAKIAAALQgCALgKAAQgYAAgGgYgAgnAvQgNgGAAgGQAAgZAhgKQAfgIAAAYIgEATQgIASgQAAQgLAAgMgGgAgPAYIgBABQgCACgCAGQgBAGAEAEQAFAGAIgEQAGgDACgGIAAgFIgBgEQgEgFgHAAIgHACgABCAnQgGgIgBgGIAGgKQAJgOANgBIAIgBQAXgBAAAWIgCAPQgGAQgOAAQgTAAgLgMgABGAWIgEAFIAAAEQAAAEADADIADACIACABIAEABQAGAAAAgCIAGgFQABgGgDgEQgDgGgGAAQgEAAgFADgAAaAPIAAgCQAAgQgPgHQgNgHgTADQgbAEgLANIAAgDIgJgXQgGgOgGgIIgDgKIAHAFIAAgCIAAgCIAHACQABAAAAAAQABAAABAAQAAgBABAAQAAAAAAgBIAAgCIAGACIABgCIAAgBIAEgCQgCgKgGgJIALAGIAAgCQgEgTgLgPQAfgXArABQAxAAAjAcIAIAHIgDAFQgCACAAAEIAAACIAEACIAAAAIACABIAIADQgMAKAAAGQAAABAAABQAAABAAAAQABABAAAAQAAAAAAABIAEABIAGgEIABAAQgBAIAFAHQgCAGAEAHQAIABAHgDIAAAJQAAAMgBAQQgIgWgiACQgpACgDAeQgHgFgKADg");
	this.shape_36.setTransform(56.3,72.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C5A0A8").s().p("ABoA1QgEgHACgGQgFgHABgHIgBAAIgGADIgEgBQAAAAAAgBQAAAAgBAAQAAgBAAgBQAAgBAAgBQAAgFAMgLIgIgDIgCgBIAAAAIgEgCIAAgBQAAgEACgCIADgFQAFgGALgGQALgFAGACQAFABADAFIABACIgNAKIABAAIARgKIAGgQIACgBQADAIABAGIABAEQABAQgLAIQgEAHgHAFIABABIACgBQALgGAIADQAJABAEAJIABACQgVAGgUAPIgEADQgEACgFAAIgGgBgAheAcQgNgJgRgJIgCACIgEgBQgOgDgRgCQgCABAAgGQAAgDAFAAQgEgDAJgDQAJgBAIABQgMgMgJgPIACAAIAJADIAJAAIAAAAIACgBQAZADAQAMIgDgIIgCgCQgOgRAAgBIABgFIACgCQAGACAIAJQALAIAIAKQALAPAEASIAAACIgLgGQAGAJACAKIgEACIAAABIgBACIgGgCIAAACQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgHgCIAAACIAAACIgHgFg");
	this.shape_37.setTransform(57.4,64.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},41).wait(10));

	// tulow
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#80664D").s().p("AiWCoIAAAAIgogTQgigPgHgNQgEgGAAgVQAAgTAVg+IAZhBIAAAAQALglAjglQARgTAZgSQAFgDAVgFQASgDAPgBQBIgGAMAGIAAAAQACAAAEAEQACACAHAAIABABQA9AZAgArQASAZAYAyIAAAAQALATARA+QAPA5AAAIQAAAPgIAIQgLAMgfAEIhNALQhAAIgvAAIgBAAQhoAAgrgLgAhgiXQgXAMgSAaIAAAAQgeAhgNAlIgWA9QgVA9AAAPQABAsBrAVQA3ALA7ABQAkAABCgKIBDgLIAAAAQAmgDALgMIAAAAQAGgGAAgQQAAgGgRg3QgSg4gJgVQgNgegfgoIAAAAQgQgZgLgLQgVgUgigGQgvgHghAAQgtAAgYANg");
	this.shape_38.setTransform(48.1,90.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#605039").s().p("AhzCcQhrgVAAgsQAAgQAUg8IAXg9QAMglAeghIAAAAQATgaAXgMQAqgXBrARQAiAGAVAUQALALAQAZIAAAAQAeAoAOAeQAIAVASA4QARA3AAAGQAAAQgFAGIAAAAQgLALgnAEIAAAAIhCALQhCAKglAAQg7gBg3gLg");
	this.shape_39.setTransform(48,91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_39},{t:this.shape_38}]},41).wait(10));

	// za okn
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4F3137").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_40.setTransform(50,61.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7C5C47").s().p("AhZCPQgHgLAUAHQAFACABACgAmJCPQAAgBAFgDIAEgCIAFgCQAMAFgCACIgBABgApICPQADgCADAAQAFgCAHAEIAAAAgADbCGIAAgHQACgUAIAVIgEAIQgDAGgCAAQgCAAABgIgAplCKQgIgBAHgHIABgBIABAAIADgEIADgCQAFgDAGAAIAAADIAAADIAAABIgBABIAAAAIgCACIgDAEIgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAIgIABgAi8CFIgEgCIgHgGQgJgJAOgKIAIACIgFABIgBABIgCABIADABQAJAEALAAQAEAFABAHQgFAHgHAAIgBAAQgFAAgEgCgAldB6QgIgFgLgBQAEgFAJABIAGACQgBAFAMABIADADQAAAEADAEIgGABQgEgGgHgEgAplB/IAAgBIABACIgBgBgAkSBuQAHgPAEAWIAAACQgPAAAEgJgAovBuQAAgEACgCQACABADgEIAEAAQAAAEgCACQgEAHgDAAQgBAAgBgEgAEFBsQgEgCgFgJIAAAAQgIgMAMgJQAFgBADACIADAEQAGAIACAIQgEAMgGAAIgEgBgAplBpQACgCAEABIgEAFIgCgEgAkBBiQgIgIABgLQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAMAFIAHAFQgCAFADAGIADAGIgDAAQgIAAgHgGgAAxBiQgMgKAHgMQALgIALAKQAJAHACAKQgGAJgIAAQgGAAgIgGgAjQBfQgDgJAQAIIAAAAQABAAAAAAQAAAAAAABQABAAAAABQAAABAAABIgEACIgFABQgEgBgCgFgApEBIQgFgKAMAGIAAACQgBAGgCAAQgBAAgDgEgAkkBEQADgCACgEIADgBQAIgFADgGQAFAOgOAJQgGgCgEgDgAlCA5IAAAAIADALQgHADgDAAQgHAAAOgOgAj9ApIAEABIACgCQARADgNAGQAGAIgKADIgKACQgPAAATgVgAkwA6IgDgDIAAgCIAGAAIAAABIgCAFIgBgBgAIHAtQADgEAIgEIAAgBQAOgIAKANQABAEgCADIgEADQgJAFgIABQgSgEAFgIgAKEAyIAAAEIgGACQgbgHAhABgABTAlIABgBQABAAADgDQACACACAHQgJAIgDAAQgDAAAGgNgAkoAoQgCgFgFgCIgCgBIACgBIACgCIAGAAIABAIIABACIgCADIgBgCgAgnAnQgJgEAPgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAEAGgEAAIgIgDgAAjAoQgDgGgFgCIAAgCIABgBIAKADIABAGIgCABIgBACIgBgBgAgGAlIgDgBQAGgEAFgHIAHgDQADAEABAEQgDALgHAAQgDAAgGgEgAp9AYIAAgDQgCgIADAAQADAAAKARQgEAFgDAAQgEAAgDgLgAgPASIgCAAQgbANAUgXIABAAIAAAAIABAAIACACIAHADQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIACAAIACgCIAAAAIAFABIgJALIgDADQgDgFAEgEgAhJAaQgSgMANgHQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQAIARgEAAIgCgBgAluAUQgOgQARgJQALACAHAHQALALgJAJQgFADgEAAQgIAAgGgHgAHyAGQAVABgWAIQgdgMAeADgAB7APQgCgBACgFQAGgJABAKIABACQgEADgEAAgAp4AKIgIgDQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAgEADgCIADAAIAJACQABAAAAAAQABAAABAAQAAgBABAAQAAAAAAgBIANgYIACADQADAIACAJIgBAAQgCAIgKAHIgDABIgIAAIgCAAIgCAAgAELgNQABgLAEAWQgDAKgCAAQgCAAACgVgAhugFIgBgCQgCgIADgIQAEgBACACIAKAFQADABABACQACAEgFAEQAAABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAIgGABQgGAAgCgDgAkxgUQAIACABACQAAAAgBABQgBAAAAABQAAAAAAABQAAAAAAABIgCABQgJADgEAAQgFAAANgMgAEqgrIgCgGQgBgDACgEIAEABQAEACAEADIACACIABADQAEAGABAFIgBADIgCAOIgEADQgEgOgIgPgApzgeQgKgJATAGQAAAHgDAAQgCAAgEgEgApnggQAAgZANALIgDAFQgHALgCAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBgAjSgpIgBgBQgKgHAHgLIAAgBIABAAIABAAQABAAAAAAQABAAABAAQAAAAAAAAQABAAAAABIAEACQAGAHAGAEQAAAEgBABIgEACIgGABQgDAAgEgCgABzgtIgBgBQgEgGADgGIACgEQACgBAEAAQAFAHAGAFIADAEQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAAADQgEACgEAAQgHAAgFgGgAkTgxIAAgBIACgGIADAAQALACgKAEIgFABIgBAAgAgChSQAKgCgHAHQgDAFgBAAQgCAAADgKgApThTIACgGQAHgQAFgNIADADIADANIABADQgBAFgEAHIgCACIgCADQgDADgEABIgEABQgDgDACgDgAEVhlQAAgHAKAQIACAGQgEADgCAAQgHAAABgSgAAMhiQAFgBADABIAAAIIgBABIABAAIAAABIgBAAIgBACIgEABQgBgDgBgKgAEIhnQAKgJgBAMIgKADQgFAAAGgGgAEMiDQgBAAAAgBQAAAAgBAAQAAgBgBAAQgBAAgBAAIgIACIgEAAQgCgDgBgDIADgDIAbAAQAHAFACAIIAAABQgBAIgDAIIgDADIgMgYgAJPh5IACABQAAAAAAAAQAAABABAAQAAABAAAAQABABABABQgCABgIACQgUgTAZALgApxh4QgBgQABgEQAAgBAAgBQABAAAAAAQAAAAAAAAQABABAAABIADAKQgCAOgCAAIgBgEgAmZiMIAXAAIgIABIgJAAQgGAAAAgBgABNiLIgCgBIAUAAQgFABgGAAIgHAAg");
	this.shape_41.setTransform(53.1,102.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A88168").s().p("AjJCNIgDgIQgCgQALALIADAEIADgCIACgBIAEACQAFADAFgBIADAEIADAEIgdAAIAAAAIAAAAIgDACQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBgAKECNQgDgFAIgBIAAAGgAI6CNQgOgNAYACQAUAAgVALgAIHCNQgGgEAHgCIAIgDQAVgEgMANgADBCNQAGgGAKACIAHABIAIADgAgHCNQAHgEAHABIAAADgAgbCNIAGgEQAEABACACIABABgAhiCNIgHgMQANgCAFAKIACAEgAiICNIgCAAIgBAAIgPAAIAAgCQgBgOAOABQAMAAADALIAAAEgAjwCNIABgBQABgDAIgFQAEABACACIABABIAEAEIAAABgAj3CNQgBgCgBgFIAJAHgAk5CNQgKgGgEgGQgDgEAAgEQAPgBANAHQAMAFACAJgAlPCNQACAAACgDQAAgEgCgEIACACIACAAIADAEIgDAFgAmPCNIACgEQAGgJAHAIIABABQgFADAAABgAnACNIgBAAIgDgBQAFgEAIgBIAFAGgApMCNIABgBIADgEIADAAQAFAAADADQgDAAgDACgAqKCNIAAgNIADACIAEADQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABIgCACIgBACIAAAAgAl2CFIgFACIAEgDIAGgEQADAAADADQAJAHgHACIgDAAQACgCgMgFgAkDCBQgCgOAJAHQgGAEAJAIIAAAAQgDAFgCAAQgDAAgCgKgAmlB+QgCgUAPANIACADQgGAOgEAAQgDAAgCgKgApFCIQgFgBgCgDQAJgMAFgPIAAABIACAEIABABQAAAHgCAHQgBAFgEAEIAAAAIgDACIAAAAgAn4B7QgBgHACgCIgBgGQgCgOAKAIQABgRAMARQgBADgDADQgEAEgCABIgCACIAHAFIACAEQgHAKgFAAQgFAAgBgLgAhHCBQgagHAagHQABAAABAAQAAABABAAQAAAAABAAQAAABABAAIACADQAGAGgBADQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgJgCgApyB8IgFgCIgJgFQgCgDABgDIABgFQACgGAEgDIgDAAQgGgBgDgCQAGgCADgHIABgCIACABIAGAHQAAgKACgJIABABIADADIgBARQAJABAGAJIACAEIAAAAIgBABIgBADIgEAHIgBAAIAAABIAAAAIgCADIgEABIgFABIgCAAgAoNBzIAAgDQAAgWAPATQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgFAFQgDADgCAAQgDAAgBgGgAKBBqQAGAAACABQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABIgEADQgCADgEABQgUgMAWgBgAI+BdIAhgUQACgBADACQAGANgQALQgQAMgRAIQgRgMAWgNgAmMB1QgVgBATgLIAGACIgCgGQgCgNAIAHIADACQACACACADIgFAIIgCACQAFAGgKAAIgDgBgAB+BrIAAgFIAEgFQADABADAEQADADABADQgGAJgDAAQgEAAgBgKgAFrBwIgCgIQgFgTAQAMQADACAAAEQgCAGgCAEQAAABgBAAQAAABgBAAQAAABgBAAQAAAAAAAAQgCAAgDgEgAkmBoQgBgFABgCIAHABIACACQACACABADQgEAKgEAAQgDAAgBgLgAi6BuIgDgBIACgBIABgBIAFgBIATgEQAEACADAFQABABAAAAQABABAAAAQAAAAAAAAQgBABAAAAIgMACIgCAAQgKAAgIgEgAG2BjQATgBgRANQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgUgOAWAAgApQBsIgBgGQAAgKAEgBIADABIABABIAFAHQAAAEgDACQgEAFgDAAIgCgDgAlCBrIgDgBQgKgBADgEQACgDAGgDQAEAAADADQALAJgOAAIgCAAgABeBXQABgEADgEQAHgIAHAJQACADAAADIgCAKQgCADgDADIgBAAIgHACQgJgJAEgIgAooBmQgDgBABgLQAFgfALAbQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQgDAFgEADQgCAEgCAAIgBgBgAljBbQgCgQALALQADACABADQgFAKgDAAQgDAAgCgKgAjNBXQgBgIAEgBQAEgBAJAIQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAIgDAEQgQgIADAJQACAFAEABIgCAAQgEAAgCgMgACgBXQgFgTAPANQADABAAAEQgEANgDAAQgDAAgDgMgApTBbIACAAIgEAEIACgEgAEQBPIgDgEQgCgRARgFQADgBADADQACADABADIgDAZQgBAIgJABQgCgIgGgIgAnWBaQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIgDgEQgCgQAPANIACAEQgGAKgEAAQAAAAgBAAQAAAAgBAAQAAgBAAgBQgBAAAAgBgAAYBbQAAgDABgDIAAAHIgBgBgAhNBWQgWgBATgOQADAAACACQAQANgQAAIgCAAgAGwBBQAIgLAMgDQADAAADABQAIAHgGAJQgGAIgJAFIgHACQgPgGAJgMgAiwBQQgFgEgBgFIABgGIABgFQAEgJAKgDIAAAAQAJABADAGIAEAEIACAEQgEAHgEACQgEAHgJAEIgHgDgAE/A9QgLgPgKgRQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAPgGAMAQQANAQAIAPQgFAHgGAAQgIAAgIgMgAmaBHQgWgBAUgOQABAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQARAOgRAAIgCAAgAFmA4QABgTAMAVIACAFQgHAIgDAAQgGAAABgPgAGIBGIgEAAQgBgEgBgLQABgHAKARIACAFIAAAAIgHAAgAjOBFIgJgEIgIgFQgJgIAEgJQAFAAADABQACgGAIgBIARgCIAKgBQADAAADADIABABQABAAAAABQAAAAABABQAAAAAAABQAAAAgBABQgHAUgZgHQAFAHgDAHIgBAAgAIiBBQgJgBAAgJQAIgBAJgFIAEgDQASgDAGARQAAADgDACQgCADgEAAIgbgDgAAtAyQgBgQALAMQADACABAEQgGAIgDAAQgEAAgBgKgAAgA4IAAgaQAFACADAGIABABIABgCIACAEIgCABQAEAIAAAIIgEAAQgFAAgFgCgACqAxIgBgGQgEgSAMAKIACACQACABABAEQgEANgDAAQgDAAgCgGgAkuAzIgGgDIgGgFIgBgCQgHgHABgJQAJAAAIAEIACgCIAEACIgCABIACABQAFACACAFIABACIABAGIgBABIgFAEIAAAAIgEABIgDgBgAkgAmIAEgBQAHAAgCAHIAAABQgCAGgCAAQgDAAgCgNgAJ1ApQgEgCgEgFQgBgCAAgDQALgMAPALIADADQADAEgDADIgDADIgHACQgFAAgFgCgAgXAlIAMgMIADgDIAIgLIAIgLIACAAIABAAQAIAEgGALIgEAFIgCADQgGAHgFAEQgGAEgGAAIgHgBgAkRAQQAFABACAEQAAADgFAFQgDAEgBAAQgDAAAFgRgAqDAaIgHAAIAAgUQAMgDAHAIQgDAAACAIIAAABQgDAGgHAAIgBAAgAk3AZQgVgBATgLIAGADQALAJgMAAIgDAAgAoCAPQAAgTANARQgBAEgDACQgEAFgCAAQgEAAABgJgABLALQAAgQARAPQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAIgCACIgHAGIgEACQgGAAAAgNgApQALIAAgKIABgBIABgBIAAgBIADgGQACgCAGAHQADgCAFAOQgBADgCACQgJAIgCgEQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgDAAgBgJgAAqALQAFgEADAAQAEABABAFIgPADQgFAAAHgFgAD5gHQAIgJAGAKIADAFQAAAEgCAFQgCAEgGADIgGABQgMgLALgMgAHQgGQABgMAJgJIAFgBQAOAFgCAOQgBALgJAHQgCACgDAAQgNgFABgMgAFNAAQgBgQALALQACADABACQgGAJgDAAQgEAAAAgJgAkOgBQgSAAAHgKIAGgGIACgBQADAAACABQAQAQgRAAIgBAAgAFrgNQAAgRAPAPQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQgHAJgEAAQgEAAgBgLgAAZgaIAAAMQgTgBATgLgAlwgXQAAgDABgDIABgBQACgEAEgCQAFgCAGAAIAGACQAKAGgJAHQgEADgEACIgGABQgGAAgGgGgACjgZQgLgJAFgQQAFgMAKAGQAGADABAFIgCAPQgBAJgJAAIgEgBgAnqgcIgBgFQgEgaALAQIgDALQgBAGgBAAIgBgCgAgegdQgZgFAbgIQADABACACQAKALgJAAIgIgBgAAPghQgVgBATgLQADAAACADQANAJgPAAIgBAAgAJHguIAHgBQATgEgLALIgBACIgGAEQgXgHAPgFgAAghMIABAAQADADABADIgCAKIgBAPIgCAEgAIeg4QAVgEgOAOQgCACgEABQgagJAZgEgADsg4QgFgTAPANQACABABAEQgEANgDAAQgEAAgCgMgAnkg0IgBgHIADgCQACABAFAGQgDAGgDAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgBgBgBgAlzgxQgVgBAUgLQAEAAACACIAFAHIgFADIgFAAgApohDQALgdAHAhIgCAEQgKAHgEAAQgHAAAFgPgAoag2QgVgGAUgKQAOgHAIAHIABABIABACIACACQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgBACQgDAGgIgBIgIAAIgBABIgCgBgAEUhGQgJgYAZARIABADQgDASgFAAQgEAAgFgOgAhvhHIAFABQAXAMgVABIgDAAQgWAAASgOgACrhKQAAgUANAWIACAFQgHAIgEAAQgFAAABgPgAAEg/QgagIAhgEQADAAACADIAFgEIAEABIAAAOIgCAAIgDAAIgEABQgEAAgIgDgAFhhDQgVgJAVgHIAEAAIAHAAQAIAAAEAGIABABQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAIgDADIAAACIgBABQgEADgFAAQgGAAgHgEgAh9hDQgMgDgHgJQgLgNAQgHIAGADQAJAEAGAIQAGAJgIAHIgEABIgBAAgAqKhcQAEAAAEAMQgCAEgCACIgEADgAIJhYIAEAAIAFAEIgFAGQgCACgEABQgTgMAVgBgAGXhNIABgIQACgJAHALQgFAHgDAAIgCgBgAjkhUIgBgDQAAgJAJgBIAQgCQAGABADAGQAGAJgNAEQgFACgFAAQgKAAgGgHgAlehQQgZgFAbgIQAEAAACADQAKALgKAAIgIgBgAhThRQgWgBATgLQAEAAACADQANAJgOAAIgCAAgAGQhoIABgEQABgGADAKIACALQgEAGgBAAQgEAAACgRgAkuhZIgGgBQgQgFAYgHIAGADIABACQAIAJgJAAIgIgBgAi3hqIAFACQAXAMgVAAIgDAAQgWAAASgOgAIUhlQgEgBgDgEIAAgBQgCgDABgEQAIgIAJAEQAFABADADQAJAHgKAGIgGACQgFAAgFgCgACdhoQgKgHgDgLQAAgCACgDQAHgHAKAGQAIAFAFAJQACACABAEQgFAIgGAAQgFAAgGgEgADBhyQgFgUAOANIAEAFQgFANgDAAQgDAAgCgLgAmhhuQgKgIAAgMQgBgHAEgFIASAAQAFAGABAJQABAOgOAFIgEgCgAiEhwQgZgEAagJQAEABACACQALALgKAAIgIgBgAoQh7QAAgWAQATQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQgHAHgDAAQgEAAAAgJgAJph3IgHgHQgHgJASgBQATAAgRAQQgCACgDAAIgBgBgAoviIIABgGIAJAAIADAEQAAAEgDACQgEAFgDAAQgDAAAAgJgACGiOIAMAAIABACIACAEQgHAIgEAAQgFAAABgOgAEwiBIgDgGIAAgBIAAgBIgBgCIAAgDIATAAQgEAKgDgBQgEAFgCAAIgCgBg");
	this.shape_42.setTransform(52.6,102.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9C745A").s().p("AJDCOQAWgLgUAAQgYgCAOANIghAAQALgNgUAEIgIADIAAgEQgBgCgDgBQgNgHgKAOIgEAGIhwAAQAFgCACgKIgCgFIgDgFQgDgFgGgBQADgEACgGQgBgEgDgCQgPgMAFATIACAIIgDAAIgDAEQgIAMAPAKIAIADIhwAAIADgIQADgLACgNIgBAAIgCgDQAJAFAFgQQAKgBABgIIADgZQgBgDgDgDQgCgDgEABQgQAFACARQgDgCgFABQgMAJAHAMIgFgDIgEAAIgEABQgJAEAEAJQAFARAKARIABABIgOAAQgCgEgIgDIAEgIQgIgVgCAUIAAAHQgDABgCACIgDADIgHgBQgLgCgFAGIiYAAIgBgBQAAgJgIgCIAAAMIgZAAIAAgDQgHgBgHAEIgHAAIgCgBQgBgCgEgBIgGAEIgmAAQgCgCgEgCQgUgHAHALIgCAAIgBgEQgFgKgNACIAHAMIgcAAIAAgEQgDgLgNAAQgNgBABAOIAAACIgOAAIgCgEIgDgEQAHAAAFgHQgBgHgFgFIANgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQgDgFgEgCIgTAEIgIgCIgEgGIAFgCQAAgBgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIAAAAIACgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgJgIgFABIgDgJIABAAQACgHgEgHQAZAHAHgUQAAgBAAAAQAAgBAAgBQAAAAAAAAQgBgBgBAAQAJgBgLgKQgCgDgEAAQgVAGAMAFIgQACQgIABgCAGQgDgBgFAAQgEAJAJAIIAIAFIgBAVIgIgHIgFgCQgIADgCAFIgGgFIgNgFQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQAAALAIAIQAJAIAJgCQAEAGAGAGQABACADABQAFgCADgEQAGAOALgCIAHAGIgBABIgDACIgDgEQgMgLADAQIACAIIgRAAIgBgBQACgDgDgDIgDgDQgHgOgQgCIgCAAIgBAFIgCACQgJgHACAOQACARAIgMQABAFABACIgpAAQgCgJgMgFQgNgHgPABIgDgDIACAAQAQAAgKgMIADABQAQAAgLgJQgDgDgEAAQgGADgCADIgCgBQgJAHgBAFIgGgCQgKgBgDAFIgFgBQAGgKgFgQQgBgJgHADQgKAHgDAHQgJgHADANIABAGIgFgCQgTALAVABQANABgFgGIACgCQACAFAGAFQgFAGAHAGIgDADIgEACIgBgBQgHgIgGAJIgDAEIgiAAIgFgGQgJABgEAEIgDgBIgCACIhoAAIgBAAQgGgEgGACQgDgDgEAAIADgCIACACQAJgCABgJIABgHQgFgEAFADIABgLIACgGIgBAAQABgGgEgDIgFgDIAAgEQgNgBgJAIIgCAAIgDAEIgCADIgCAEIgEANIgCAFQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAABIAAABIAAABIgBABQgHAHAHABIAAACIgBADIgSAAIABgEIAAgNIAHgBIAEgBIADgDIAAAAIAAgBIABAAIADgHIACgDIABgBIgBAAIAFgFQgEgBgDACQgFgJgJgBIABgRIgEgDIAAgBQgCAJgBAKIgFgHIgCgBIABgEIgPgFIAAgwIAGAAQAIAAAEgGIAAgBIAAADQAEATAKgNQgLgRgCAAQgIgIgLADIAAgTQAFAAAFgFIAKgNIABgFQgGgOgNAKIgCACIAAghIAEgDQACgCABgEQgEgMgDAAIAAgyIACAAQAAAGAFAGQAIAJAGgJIADgGIgBgGIAHAAQgBAEABAQQABALAEgVIgDgKIANAAQABAJALgJIAjAAIgBAGQgBAQALgMQADgCAAgEIgDgEIAnAAIgBAHQAAAQAKgMQADgDABgDIgFgFIBNAAQgDAEAAAIQABAMAJAIIAFACQAOgFgCgOQgBgJgEgGIACAAQAAACAPgBIAHgBIBfAAQgaAFAXANQARALAVgBQAEAAAFgEQACgHgHgDQgOgFgOgHIgCgCIFmAAQABAGAGAFQAPAOAJgQIgBgBIgBgIIAZAAQgBAZAPgTIgBgEIgCgCIBQAAQADAGAHgGIAUAAIgCADQABADACADIAEAAIAIgCQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIANAYIADgDQADgIABgIIgBgBQgBgHgIgGIARAAIAAADIABACIABABIAAABIADAGIABABQAPAhATgTQgBgHgFgJIgFgMIAfAAIAAACQAAAXATgTQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBAAAAIgCgCIAFAAIACAAIAQAAQACAOAKgOIByAAQAAAHAJAGQAMgCAGgIIADgDIBfAAIAAAnQgKgEgKAKQgHA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");
	this.shape_43.setTransform(52.5,102.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8C6851").s().p("AF1COIgHgEQgPgJAHgMIADgFIADAAQAEAIAEgHQAFACAEAFIACAEIACAFQgCALgFACIgCABIgDgBgAHrCOIADgGQAKgOANAHQADABABACIAAAEQgHACAGAEgAEACOIgCgBQgJgSgGgQQgEgKAJgEIAFAAIADAAIAGADIAAAAQAFAIAEADIABADIABAAQgCAMgDAMIgDAIgADhCOIgIgEIADgCQACgCADgBQgBAPAHgNQAIADACAEgAAhCOIAAgMQAIACABAJIAAABgAiKCOIABgBIACABgAjvCOIgJgHIAAAAQgJgIAGgEIADgCIAAgGIACAAQARADAHANIACAEQADADgBADIgEgEIgBgBQgCgCgEgBQgIAFgBADIgBABgAlICOIADgFIgDgEQAHADAFAGgAljCOIgFgCQAHgBgJgIQgDgCgDAAIgGAEQgHgGAEgHQgGgEgCgFIAFgIQgCgDgCgDIgDgCQAEgGAKgHQAGgDABAIQAGARgGAKIAEAAQALACAIAEQAHAFAEAFQACAEAAAFQgCADgCAAgAnICOIACgCIADAAIADABIABABgApgCOIABgDIAAgCIAAAAIAIgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBIABgBIADgDIACgCIAAAAIABgBIAAgBIAAgEIAAgCQgGgBgFAEIgDABIgDAFIgBAAIABgBIgBgCQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIABgGIAEgMIACgEIADgDIAEgEQAJgIAOAAIgBAFIAFADQAEADAAAGIAAAAIgBAGIgCALQgFgEAFAFIgBAHQgBAJgJACIgCgCIAAAAQAEgFABgEQACgHAAgHIgBgBIgCgEIAAgBQgFAPgJALIgDAEIADAGgApMBcQgEAAAAALIABAGIACADQADAAAEgGQADgCAAgDIgFgHIgBgBIgDgBIAAAAgAo9BpIAEgKIABgBIgDAAIgCALgAqACOIgCgCIACgCQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBIgEgCQgEgRALgHIgBAFQgBACACAEIAJAFIAFABIAAAOIgBAEgAqDCOIAAgBIADABgAAHCGIABgHQACgEAFgCQAFgCAFAAIABAAIAAATIgHACQgHAAgFgGgAg6CCQABgDgGgHQgBgGAKgEQADAAACACIAOAJQAJAHgIAIIgHACQgJgCgIgGgAoNB8QgBgGACgDQABAKAIgGIADACIACAEQgHAKgDAAQgEAAgBgLgACuCBQgFgEgDgDQgJAIAAgTQAAgRAJALIAAAAIAEgDQAHgCAEAFIAIANIADAFQgEAJgGAAQgEAAgEgDgAHHBwQASAAgRARIgEABQgWgSAZAAgAjSBwQgDAEgGACQgDgBgBgCQgGgGgEgGIgDgHQgDgFACgFQACgFAHgDIAGACIAHAGIABgUIAJAEIAEAJQgEAAABAJQACAOAGgCIAFgBIADAFQgOAKAJAKIgDAAQgKAAgEgMgAFEB3QgNgFgCgLIABgHQAHgEAJACQAJAEAFAGQADADAAAEQgEAKgIAAIgHgCgAlKB3IgCAAQgMgBABgGQABgEAJgHIACABQgDAEAKABQAKAMgPAAIgBAAgAnBB1QgUgBASgLQAFABACACQALAJgOAAIgCAAgAIBBgQAGgLALgCQAEgBADACQAGAHgDAJQgDAHgIAFIgGADQgPgFAFgOgAgFBwQgWgCAUgOIAEACQAPAOgQAAIgBAAgAAhBCIAFgCQAEgBACADQADACAAADIgDAeQgCAJgJABgABsBnQADgDACgEIACgJQAAgDgCgDQgHgKgHAJQgDADgBAEIgDgIIABgFQAJgHAKAIQAKAJAHAKIACAEIgEAFQgEAFgFAAQgFAAgFgFgAkcBjIgCAAIgHgBQgGgCANgJQAEACACACQALAIgMAAIgDAAgAnjBYQAAgSAMANIADADQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgIAHgDAAQgEAAABgKgAqJBLIAPAFIgBAEIgBABQgDAHgGADIgEABgAoEBUQgCgQAPANIACAEQgGAKgEAAQgEAAgBgLgAh2BaQgXAAAUgPIAFACQAPANgPAAIgCAAgAnABVQgHgMAJgKQAKgKAIALIACAEIgEAKQgCAJgJAAQgDAAgEgCgAGFBGIAEAAIAHABQAIADgNAKIgEABQgTgNARgCgAkqA8IgDAAQgBALgKgBIgBgDIgDgLIAAAAQgBgIADgGIABABIAGAGIAGADIAAACIADADIABABIACgGIAAAAIABAAIAFgEIABgBIgBgGIACgDIgBgCIgBgIQgBgFACgEQAJgDAAAGIAAADIAHgJQgHAZAJgLQAFgFAAgDQADAFgEALQAFAAgDAFIgDAGQgDAFgIAGIgDABQgCADgDADQgJAJgLADIAIgTgAkbAmIgEABQADAVAGgOIAAgBQACgHgHAAIAAAAgAJ1A/QATgBgQAOIgFACQgUgPAWAAgAlzBMQgVAAATgMQAEAAACADQALAJgNAAIgCAAgAgnBAQgOgNAVgDIAAAAQAHAAADAEQAHAFAEAHQAEAGgFAEIgGABQgNgDgIgIgAi0A7IABABIgBAGIgBAGQgSgBATgMgAopA7QABgUAMASQAAADgDADQgFAFgCAAQgDAAAAgJgAB4BBQgMgIgDgLIABgGIADgDQgCgHAIgJQAGgIAHAJQACACABAFQAAAEgDAFIgCADQAHAFAEAGQACADAAAEQgEAJgGAAQgEAAgFgDgAGwAmQAUgBgRAOQgCACgDAAQgUgOAWgBgAmvAtQgRgNATgKIAEACQAIAHAKAAQANABgCAMIgEAEQgHADgGAAQgJAAgJgGgACgAvQgPgKAGgNIAEgEIAIABQAHgBAFAIIACAEIABAEQgMgKAEASIABAFIgCABQgEAAgFgDgAlxArQgEgBgCgDQABgJAJgBIAggEQAEABACADQAEACgCADQgFAPgQAAQgKAAgNgGgAHwApQgFgBgEgDQAAgFACgBQASgIASgFQAKgEAEAJIABADIgBAEQgBADgCACIAAABQgIAEgDAEIgCABIgBAAQgNgBgNgDgADOAhQgLgRABgRQAAgEADgFQAIgCADAHQAFAMAJANIAEAGQgEASgGAAQgFAAgHgLgApOAmQgGgSAFgSIAAAKQABAOAGgHQACADAJgHQACgCABgDQgFgOgDABQgGgGgCACIAAgBQAQggATASQgCAIgEAJQgGAKgCALQgFAUgRAFIgDgDgAiwAmQgDgDgDgBIgKACQgNgFAWgHQADABACADQALAJgIACIgBgBgABWAXIAAAAIAHgGIADADQADACAAADIgFAGQgDADgBAAQgDgBgBgKgAAiAcIgBABIAAgBQABgFgBgCIAAgPQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAABQAKgEAGACQgDABgFAEQgMAIAZgGIgJAHIADAAQAHAAgCAIIgLABIgKgCgAiEARQgLgPARgGIAHADQAFABAEAHIABAHQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgGAHgGAAQgGAAgF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");
	this.shape_44.setTransform(52.5,102.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]}).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.6,-19.1,145.2,141.3);


(lib.dziadekJest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"koniec":103});

	// dymek
	this.instance = new lib.Wygenerujklatkipośrednie79("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(58.5,91.9,0.071,0.068,0,0,0,-26.8,-57.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({regX:-27,regY:-58,scaleX:1.14,scaleY:1.11,y:91.8},4,cjs.Ease.get(1)).to({scaleX:0.85,scaleY:0.93},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(0.5)).to({_off:true},63).wait(34));

	// okno
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D4F4F").s().p("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");
	this.shape.setTransform(50.2,52.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB7777").s().p("AHlKjQnUgLoNgSIgsiCIgCgEIAPAAIAFAAIA7ABIBDACICNADQEPAIEBAOIAFAAICBAIICAAIIgjB3IgDAAgAHOEbQAgh+AdiMQAAAAAAAAQAAgBABAAQAAAAABAAQABgBABAAQAWA5gEA2QgDAkgPAiQgTAtgoApIgDABIgDAAgAKFjqIgFgLQgHgFgMADQgLADgGgKQgEgJAEgJQAIgPAPgCQBCACgTA4QgBADgDACQgFACgEAAQgKAAgGgKgAqkklIgBgCQAmgdA5gKQAQgBAHAPIACAEQgeApglAAQgYAAgcgSgAG7mPIhlh4QgIgJASgBQCaBCA6CXQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQg6gRg+hJgAFrmQIgDgBQgIgGABgJQABgIAIABIAAgBIAJAGQAFACADAEQAEAGgFAFQgFACgEAAIgGgBgAlWmvIgKgCQgFADgFgCQgFgCgFgGIgFgIIAAgDIAAgEQABgDADgCIAFgDIABgBIAUABIAGACIACAEIAEAHQADAFgCAGIgCAIIgEAAIgCAAgAEunLIgHgDQgGgEgCgHIAAgDIACgIIACgCIAFgCIABgBQAHADAIgBQAIAAABAIIABAIQAAAFgFAEQgEADgGAAIgFAAgAg0ngQgQgFgCgPQAAgFACgCIgBgBQgGgMAGgNQACgFAFgBQAKADACALQACAJAEAKQACAEgCADIAEAEQAEAGgEAFQgDAFgFAAIgEgBgAk5njIgBAAQgFgDACgGIAAgBIAAgDIACgHQADgGAGgCIAJgDQAIABAGAEQAHAEgBAJQAAAFgEAFIgGACQgHACgHAAQgGAAgGgBgADWnuIgCgHIgBgIIAAgBQAAgGADgEIACgCIACgCIACgCIACgBIAEgBIABgBQAJgBAGAHQADAEAFACQAKADACAKQgCAIgHAAIgBAAQgJAAgHADIgGAEQgDADgHAAIgGgIgABrn0IAAAAQgCgIAGgGQAJgJgFgMQgDgIAKgBQAFABAEAEIABAAQAEADADAGQACAFABAFIAAABQgFAKgGAIQgGAIgGAAQgFAAgHgHgAAZn8QAAgMAGgJQACgEAEgBIAEABQAEAAACACIAHAHIADAEIgBAHQgCAEgDADQgGAEgFAGQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgNgCABgMgAj0oEIgCgEIgBgIIAAgHIAAgIIAEgDIANgFIAIgDQAXgDgIATQgEAKgHAGIgIAGIgCAAQgDACgEAAQgEAAgFgCgAigoTQgCgFAAgFIAAgBIAAgLIAEgDIALgGIAFgCQAMADgGAJIgDAGQgDAHgCAIQgBAHgHAAQgFgDgDgEgABMowIgBgGIgBgVIgHgHIgKgLIgEgDQgcgFggAEIAAABIAAAEIAAALQgBAIADAHQAFAMgGAKIgBAAQgRACgCgRIgBgQIAAgKIAAgEIAAgTIABgEIAEgEIAEgDQgRACgSAIQgOAHgKgLQAAgEABgCQAEgGAGgDIAGgDIACAAQAHgDAFgEQAEgDACgDQAJgOAOgEQAfADAgAIQAWAGAPAOQAJAJAHANQAIAQgHAPIAAAEQADARABASQAAANgMAEQgOgIgCgSg");
	this.shape_1.setTransform(55.1,48.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A06767").s().p("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IAAAAIgFADQgDADgBADIgBADIAAAEIAFAIQAFAFAFADIAAACIgBADQgHABgFgCIgEgEIgIgHQgFADgCAFgAk3mvQgCAPALAJQARAOAUgHIAEgDIALgMIAEgHIgCgDQgEgEgEgCQgFAAgEADIgHAIIgOgDQgGgCAAgGIABAAQAMADANgEIAGgCQAEgFABgGQABgIgHgEQgHgEgIgBIgJADQgGACgDAGIgCAGIAAAEIAAABIgFgCQgJABgBAKgAjxniIgFABIgBACIgDACIgDADQgEAJADAKQACAIAGAGQAQANATABIAFgCIADgCQAIgIAGgJQAFgFgCgJIgCgDQgEgEgEgBIgBAAQAIgGAEgKQAHgTgXADIgHACIgOAGIgEADIAAAHIAAAIIABAIIADADQAIAFAIgEIABgBQAAAJgJADQgOAEABgLQACgQgQgGIAAAAgADvmoIgHgJQgDgEgEgDQAEgCABgHIADgJIAAABIAAAIIACAHIAHAIQAGgBAEgDIAGgDIgEAGQgEALgKAAIgBAAgAiPneQgEgEAEgFIACgDIAAAAQAAAGADAFQACAEAFADQAIAAABgHQABgJADgGQAFgDADgFQABAWAKAUQgagBgSgRgACgneQgCgGgFgDQAHAAACAIIABADQACAFgCADQAAgFgDgFgAgIn8IADgcIABAQQACASAPgCIABAAQAGgLgFgMQgCgGAAgIIAAgLIAAgEIAAgBQAhgEAcAEIAEAEQgFAAgFABQgMACgNAGQgSAKgDASIAAAEIgBACIgHAQQgDAGgHAGIgCADQgMgJACgUgAgPovQgDgCgDAAIgPgBQgKAHgPAFIgEACIgDgNQADgEAAgEQAAgHAGgGIACgCIANgEQgGADgEAFQgCADAAADQALAMAOgHQARgIAQgCIgDADIgEAEIAAAEIgBATIAAADQgBgHgIgGgAgkpQQADgCABgDIAIgCQgFAFgIACIABAAg");
	this.shape_2.setTransform(53,43.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(109));

	// skrzydlo l
	this.instance_1 = new lib.Wygenerujklatkipośrednie53("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.2,59.5,0.254,1,-6.6,0,0,-30.3,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(103).to({startPosition:0},0).to({regX:-30,regY:-2.5,scaleX:1,rotation:0,x:0.3,y:59.6},3).wait(3));

	// skrzydlo p
	this.instance_2 = new lib.Wygenerujklatkipośrednie57("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(97.9,63.4,0.165,1,0,0,0,26.9,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(103).to({startPosition:0},0).to({regX:27,scaleX:1},4).wait(2));

	// z cienia
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(79,49,55,0)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_3.setTransform(50,61.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(79,49,55,0.2)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_4.setTransform(50,61.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(79,49,55,0.4)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_5.setTransform(50,61.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(79,49,55,0.6)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_6.setTransform(50,61.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(79,49,55,0.8)").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_7.setTransform(50,61.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4F3137").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_8.setTransform(50,61.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},103).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	// glowa
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#593E37").s().p("AgDAAIgCAAIALAAQAAABgGAAg");
	this.shape_9.setTransform(64.1,76.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#725149").s().p("AgEAPIgFgBQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgDAAgFgDIgEgBQgLgBgLABIgBgBIgBgBQgCgEAEgEQADgCADAAQAYgDALANIgHgWIAAgFQAEgDAEgFQACAJACAPQAFAXAZAAQAJAAADgLIAAgLQAAgJgFgQIgDgHIACACQAGAIAJAEIABATQAAAggWAAQgYAAgJgSg");
	this.shape_10.setTransform(58.4,80.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#442F2B").s().p("AhCA3QgIgJAAgKQAAgIACgHQgFgKgKgZQgSgsgDAAIAAAAQgBAAgBAAQgBABAAAAQgBAAAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgGAAAAgHQgBAAAAgFIAAgDIAEABIABgBQASAIANAKIADAJQAGAIAFAPIAJAWIAAAEQAMgOAbgEQATgDAMAHQAPAHABAQIAAADQAKgDAHAFQADgeApgDQAigBAHAWQACAGABAJQAAAdgPAKQgGADgHABIgIABQgOAAgKgFQgIgEgHgHIgCgDIgEgFQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBgBAAAAIgBgCIgDgCIgGgBQgIAAgBACQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgCAGQgCAHgEAFQgEAEgFAEQgIAFgPAAQggAAgNgPgAgYAEQghAJAAAZQAAAGANAHQAMAGAKAAQARAAAIgTIAEgTQAAgSgQAAQgHAAgIADgABaACIgIABQgNACgKAOIgGAKQACAGAGAHQALANATAAQAOAAAGgQIACgPQAAgXgVAAIgCABgAgWAvQgEgEABgHQABgFACgDIACgBQALgEAHAIIACADIgBAFQgCAHgGADIgGABQgEAAgDgDgABDAsIgDgCQgEgDAAgFIABgEIAEgFQANgFAFAJQADAEgBAFIgHAGg");
	this.shape_11.setTransform(56.8,72.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BC8A7E").s().p("AheBFQgPgdgDgeQgIgHgEgNIgFgbQAAgaATAHIAEACIADgHIAAAAQADAAASArQAKAaAGAKQgCAGAAAIQAAALAHAIQANAQAhAAQAOAAAIgGIAAAFIAIAXQgMgOgWADQgEABgCACQgEADACAFIAAABIACABQALgBALABIADABQAEADADAAQABAAABgBQAAAAABAAQAAAAABAAQAAgBABAAIAEABQALASAYAAQAVAAAAggIgBgUQAKAFAOAAIAIgBQAIgBAFgEQgOAagMAOQgeAhglAAQhTAAgig/gAAUBNQgCgPgCgJQAEgFACgHIACgFQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABgDAIAAIAGABIADACIABACQABABAAAAQAAABABAAQAAABABAAQAAAAABABIAEAGIACAHQAFAQAAAKIAAALQgCALgKAAQgYAAgGgYgAgnAvQgNgGAAgGQAAgZAhgKQAfgIAAAYIgEATQgIASgQAAQgLAAgMgGgAgPAYIgBABQgCACgCAGQgBAGAEAEQAFAGAIgEQAGgDACgGIAAgFIgBgEQgEgFgHAAIgHACgABCAnQgGgIgBgGIAGgKQAJgOANgBIAIgBQAXgBAAAWIgCAPQgGAQgOAAQgTAAgLgMgABGAWIgEAFIAAAEQAAAEADADIADACIACABIAEABQAGAAAAgCIAGgFQABgGgDgEQgDgGgGAAQgEAAgFADgAAaAPIAAgCQAAgQgPgHQgNgHgTADQgbAEgLANIAAgDIgJgXQgGgOgGgIIgDgKIAHAFIAAgCIAAgCIAHACQABAAAAAAQABAAABAAQAAgBABAAQAAAAAAgBIAAgCIAGACIABgCIAAgBIAEgCQgCgKgGgJIALAGIAAgCQgEgTgLgPQAfgXArABQAxAAAjAcIAIAHIgDAFQgCACAAAEIAAACIAEACIAAAAIACABIAIADQgMAKAAAGQAAABAAABQAAABAAAAQABABAAAAQAAAAAAABIAEABIAGgEIABAAQgBAIAFAHQgCAGAEAHQAIABAHgDIAAAJQAAAMgBAQQgIgWgiACQgpACgDAeQgHgFgKADg");
	this.shape_12.setTransform(56.3,72.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C5A0A8").s().p("ABoA1QgEgHACgGQgFgHABgHIgBAAIgGADIgEgBQAAAAAAgBQAAAAgBAAQAAgBAAgBQAAgBAAgBQAAgFAMgLIgIgDIgCgBIAAAAIgEgCIAAgBQAAgEACgCIADgFQAFgGALgGQALgFAGACQAFABADAFIABACIgNAKIABAAIARgKIAGgQIACgBQADAIABAGIABAEQABAQgLAIQgEAHgHAFIABABIACgBQALgGAIADQAJABAEAJIABACQgVAGgUAPIgEADQgEACgFAAIgGgBgAheAcQgNgJgRgJIgCACIgEgBQgOgDgRgCQgCABAAgGQAAgDAFAAQgEgDAJgDQAJgBAIABQgMgMgJgPIACAAIAJADIAJAAIAAAAIACgBQAZADAQAMIgDgIIgCgCQgOgRAAgBIABgFIACgCQAGACAIAJQALAIAIAKQALAPAEASIAAACIgLgGQAGAJACAKIgEACIAAABIgBACIgGgCIAAACQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgHgCIAAACIAAACIgHgFg");
	this.shape_13.setTransform(57.4,64.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#725149").s().p("AgjAjQgMgKABgIIgBAAIABgCQAHgNANgHQAKADAHAHIgIgWIAAgFQAFgDAEgFQACAJACAPQAFAWAYAAQAKAAACgKIAAgKQAAgLgEgPIgDgHIACACQAGAHAIAEIACAUQgBAggVAAQgYAAgJgSIgBAAQABAEAAAFIAAACQgBAIgJAEIgBABQgEAEgEAAQgEAAgFgDg");
	this.shape_14.setTransform(58.8,81.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BC8A7E").s().p("AheBFQgPgdgDgeQgIgHgEgNIgFgbQAAgaATAHIAEACIADgHIAAAAQADAAASArQAKAaAGAKQgCAGAAAIQAAALAHAIQANAQAhAAQAOAAAIgGIAAAFIAIAXQgHgIgKgCQgMAHgHANIgBACIABABQgBAHAMAKQAJAHAHgIIABgBQAJgEAAgHIABgCQAAgGgBgEIAAAAQALASAYAAQAVAAAAggIgBgUQAKAFAOAAIAIgBQAIgBAFgEQgOAagMAOQgeAhglAAQhTAAgig/gAAUBNQgCgPgCgJQAEgFACgHIACgFQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABgDAIAAIAGABIADACIABACQABABAAAAQAAABABAAQAAABABAAQAAAAABABIAEAGIACAHQAFAQAAAKIAAALQgCALgKAAQgYAAgGgYgAgnAvQgNgGAAgGQAAgZAhgKQAfgIAAAYIgEATQgIASgQAAQgLAAgMgGgAgPAYIgBABQgCACgCAGQgBAGAEAEQAFAGAIgEQAGgDACgGIAAgFIgBgEQgEgFgHAAIgHACgABCAnQgGgIgBgGIAGgKQAJgOANgBIAIgBQAXgBAAAWIgCAPQgGAQgOAAQgTAAgLgMgABGAWIgEAFIAAAEQAAAEADADIADACIACABIAEABQAGAAAAgCIAGgFQABgGgDgEQgDgGgGAAQgEAAgFADgAAaAPIAAgCQAAgQgPgHQgNgHgTADQgbAEgLANIAAgDIgJgXQgGgOgGgIIgDgKIAHAFIAAgCIAAgCIAHACQABAAAAAAQABAAABAAQAAgBABAAQAAAAAAgBIAAgCIAGACIABgCIAAgBIAEgCQgCgKgGgJIALAGIAAgCQgEgTgLgPQAfgXArABQAxAAAjAcIAIAHIgDAFQgCACAAAEIAAACIAEACIAAAAIACABIAIADQgMAKAAAGQAAABAAABQAAABAAAAQABABAAAAQAAAAAAABIAEABIAGgEIABAAQgBAIAFAHQgCAGAEAHQAIABAHgDIAAAJQAAAMgBAQQgIgWgiACQgpACgDAeQgHgFgKADg");
	this.shape_15.setTransform(56.3,72.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#725149").s().p("AgMAVQgDACgGAAQgIAAgFgHQgEgFAAgDQAAgIAPAEIADABIgFgRIAAgFQAFgDADgFQACAJACAPQAGAXAYAAQAJAAADgLIAAgLQAAgJgFgQIgDgHIACACQAGAIAJAEIABATQAAAggWAAQgSAAgLgMg");
	this.shape_16.setTransform(59.6,80.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BC8A7E").s().p("AheBFQgPgdgDgeQgIgHgEgNIgFgbQAAgaATAHIAEACIADgHIAAAAQADAAASArQAKAaAGAKQgCAGAAAIQAAALAHAIQANAQAhAAQAOAAAIgGIAAAFIAGASIgEgBQgNgEAAAIQAAADADAFQAEAHAJAAQAGAAADgCQAKAMAUAAQAVAAAAggIgBgUQAKAFAOAAIAIgBQAIgBAFgEQgOAagMAOQgeAhglAAQhTAAgig/gAAUBNQgCgPgCgJQAEgFACgHIACgFQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABgDAIAAIAGABIADACIABACQABABAAAAQAAABABAAQAAABABAAQAAAAABABIAEAGIACAHQAFAQAAAKIAAALQgCALgKAAQgYAAgGgYgAgnAvQgNgGAAgGQAAgZAhgKQAfgIAAAYIgEATQgIASgQAAQgLAAgMgGgAgPAYIgBABQgCACgCAGQgBAGAEAEQAFAGAIgEQAGgDACgGIAAgFIgBgEQgEgFgHAAIgHACgABCAnQgGgIgBgGIAGgKQAJgOANgBIAIgBQAXgBAAAWIgCAPQgGAQgOAAQgTAAgLgMgABGAWIgEAFIAAAEQAAAEADADIADACIACABIAEABQAGAAAAgCIAGgFQABgGgDgEQgDgGgGAAQgEAAgFADgAAaAPIAAgCQAAgQgPgHQgNgHgTADQgbAEgLANIAAgDIgJgXQgGgOgGgIIgDgKIAHAFIAAgCIAAgCIAHACQABAAAAAAQABAAABAAQAAgBABAAQAAAAAAgBIAAgCIAGACIABgCIAAgBIAEgCQgCgKgGgJIALAGIAAgCQgEgTgLgPQAfgXArABQAxAAAjAcIAIAHIgDAFQgCACAAAEIAAACIAEACIAAAAIACABIAIADQgMAKAAAGQAAABAAABQAAABAAAAQABABAAAAQAAAAAAABIAEABIAGgEIABAAQgBAIAFAHQgCAGAEAHQAIABAHgDIAAAJQAAAMgBAQQgIgWgiACQgpACgDAeQgHgFgKADg");
	this.shape_17.setTransform(56.3,72.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#725149").s().p("AgEAPIgBAAQABAEABAGQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAQgpAFgBgVIAAAAIgBgBQgCgEAEgEIABgBIAAAAIABAAIAEgBQAYgDALANIgHgWIAAgFQAEgDAEgFQACAJACAPQAFAXAZAAQAJAAADgLIAAgLQAAgJgFgQIgDgHIACACQAGAIAJAEIABATQAAAggWAAQgYAAgJgSg");
	this.shape_18.setTransform(58.4,80.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BC8A7E").s().p("AheBFQgPgdgDgeQgIgHgEgNIgFgbQAAgaATAHIAEACIADgHIAAAAQADAAASArQAKAaAGAKQgCAGAAAIQAAALAHAIQANAQAhAAQAOAAAIgGIAAAFIAIAXQgMgOgWADIgEACIgBAAIgBAAIAAABQgEADACAFIAAABIABAAQABAVAogFQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgGgBgEIAAAAQALASAYAAQAVAAAAggIgBgUQAKAFAOAAIAIgBQAIgBAFgEQgOAagMAOQgeAhglAAQhTAAgig/gAAUBNQgCgPgCgJQAEgFACgHIACgFQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABgDAIAAIAGABIADACIABACQABABAAAAQAAABABAAQAAABABAAQAAAAABABIAEAGIACAHQAFAQAAAKIAAALQgCALgKAAQgYAAgGgYgAgnAvQgNgGAAgGQAAgZAhgKQAfgIAAAYIgEATQgIASgQAAQgLAAgMgGgAgPAYIgBABQgCACgCAGQgBAGAEAEQAFAGAIgEQAGgDACgGIAAgFIgBgEQgEgFgHAAIgHACgABCAnQgGgIgBgGIAGgKQAJgOANgBIAIgBQAXgBAAAWIgCAPQgGAQgOAAQgTAAgLgMgABGAWIgEAFIAAAEQAAAEADADIADACIACABIAEABQAGAAAAgCIAGgFQABgGgDgEQgDgGgGAAQgEAAgFADgAAaAPIAAgCQAAgQgPgHQgNgHgTADQgbAEgLANIAAgDIgJgXQgGgOgGgIIgDgKIAHAFIAAgCIAAgCIAHACQABAAAAAAQABAAABAAQAAgBABAAQAAAAAAgBIAAgCIAGACIABgCIAAgBIAEgCQgCgKgGgJIALAGIAAgCQgEgTgLgPQAfgXArABQAxAAAjAcIAIAHIgDAFQgCACAAAEIAAACIAEACIAAAAIACABIAIADQgMAKAAAGQAAABAAABQAAABAAAAQABABAAAAQAAAAAAABIAEABIAGgEIABAAQgBAIAFAHQgCAGAEAHQAIABAHgDIAAAJQAAAMgBAQQgIgWgiACQgpACgDAeQgHgFgKADg");
	this.shape_19.setTransform(56.3,72.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#725149").s().p("AgKASIgFgJIABABIgHgWIAAgFQAFgDAEgFQACAJABAPQAHAXAXAAQAKAAACgLIAAgLQAAgJgFgQIgDgHIACACQAHAIAIAEIABATQAAAggVAAQgWAAgKgPgAgmAVQgEgDAAgDQAAgHAOAAQAOABAAAHQAAADgEADQgEACgFAAQgHAAgEgDg");
	this.shape_20.setTransform(59.2,80.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BC8A7E").s().p("AheBFQgPgdgDgeQgIgHgEgNIgFgbQAAgaATAHIAEACIADgHIAAAAQADAAASArQAKAaAGAKQgCAGAAAIQAAALAHAIQANAQAhAAQAOAAAIgGIAAAFIAIAXIgCgBIAFAJQALAPAWAAQAVAAAAggIgBgUQAKAFAOAAIAIgBQAIgBAFgEQgOAagMAOQgeAhglAAQhTAAgig/gAgNBeQAAADAEADQAEADAHAAQAFAAADgCQAEgDAAgDQAAgHgOgBIgBAAQgMAAAAAHgAAUBNQgCgPgCgJQAEgFACgHIACgFQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABgDAIAAIAGABIADACIABACQABABAAAAQAAABABAAQAAABABAAQAAAAABABIAEAGIACAHQAFAQAAAKIAAALQgCALgKAAQgYAAgGgYgAgnAvQgNgGAAgGQAAgZAhgKQAfgIAAAYIgEATQgIASgQAAQgLAAgMgGgAgPAYIgBABQgCACgCAGQgBAGAEAEQAFAGAIgEQAGgDACgGIAAgFIgBgEQgEgFgHAAIgHACgABCAnQgGgIgBgGIAGgKQAJgOANgBIAIgBQAXgBAAAWIgCAPQgGAQgOAAQgTAAgLgMgABGAWIgEAFIAAAEQAAAEADADIADACIACABIAEABQAGAAAAgCIAGgFQABgGgDgEQgDgGgGAAQgEAAgFADgAAaAPIAAgCQAAgQgPgHQgNgHgTADQgbAEgLANIAAgDIgJgXQgGgOgGgIIgDgKIAHAFIAAgCIAAgCIAHACQABAAAAAAQABAAABAAQAAgBABAAQAAAAAAgBIAAgCIAGACIABgCIAAgBIAEgCQgCgKgGgJIALAGIAAgCQgEgTgLgPQAfgXArABQAxAAAjAcIAIAHIgDAFQgCACAAAEIAAACIAEACIAAAAIACABIAIADQgMAKAAAGQAAABAAABQAAABAAAAQABABAAAAQAAAAAAABIAEABIAGgEIABAAQgBAIAFAHQgCAGAEAHQAIABAHgDIAAAJQAAAMgBAQQgIgWgiACQgpACgDAeQgHgFgKADg");
	this.shape_21.setTransform(56.3,72.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#725149").s().p("AgdAfQgDgBgBgEIAAgGQAAgKAKgDIgHgUIAAgFQAFgDAEgFQACAJACAPIADAIIAEAFQAIAJAOAAQAKAAACgKIAAgKQAAgLgFgPIgCgHIACACQAGAHAIAEIABAUQAAAggVAAQgNAAgJgFIgBACQgEAFgGAAQgHAAgCgDg");
	this.shape_22.setTransform(60.1,80.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BC8A7E").s().p("AheBFQgPgdgDgeQgIgHgEgNIgFgbQAAgaATAHIAEACIADgHIAAAAQADAAASArQAKAaAGAKQgCAGAAAIQAAALAHAIQANAQAhAAQAOAAAIgGIAAAFIAHAVQgKADAAAKIAAAGQABAEADABQACAEAHAAQAGAAAEgGIABgCQAKAFANAAQAVAAAAggIgBgUQAKAFAOAAIAIgBQAIgBAFgEQgOAagMAOQgeAhglAAQhTAAgig/gAAbBbIgEgFIgDgJQgCgPgCgJQAEgFACgHIACgFQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABgDAIAAIAGABIADACIABACQABABAAAAQAAABABAAQAAABABAAQAAAAABABIAEAGIACAHQAFAQAAAKIAAALQgCALgKAAQgPAAgIgKgAgnAvQgNgGAAgGQAAgZAhgKQAfgIAAAYIgEATQgIASgQAAQgLAAgMgGgAgPAYIgBABQgCACgCAGQgBAGAEAEQAFAGAIgEQAGgDACgGIAAgFIgBgEQgEgFgHAAIgHACgABCAnQgGgIgBgGIAGgKQAJgOANgBIAIgBQAXgBAAAWIgCAPQgGAQgOAAQgTAAgLgMgABGAWIgEAFIAAAEQAAAEADADIADACIACABIAEABQAGAAAAgCIAGgFQABgGgDgEQgDgGgGAAQgEAAgFADgAAaAPIAAgCQAAgQgPgHQgNgHgTADQgbAEgLANIAAgDIgJgXQgGgOgGgIIgDgKIAHAFIAAgCIAAgCIAHACQABAAAAAAQABAAABAAQAAgBABAAQAAAAAAgBIAAgCIAGACIABgCIAAgBIAEgCQgCgKgGgJIALAGIAAgCQgEgTgLgPQAfgXArABQAxAAAjAcIAIAHIgDAFQgCACAAAEIAAACIAEACIAAAAIACABIAIADQgMAKAAAGQAAABAAABQAAABAAAAQABABAAAAQAAAAAAABIAEABIAGgEIABAAQgBAIAFAHQgCAGAEAHQAIABAHgDIAAAJQAAAMgBAQQgIgWgiACQgpACgDAeQgHgFgKADg");
	this.shape_23.setTransform(56.3,72.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#725149").s().p("AgQAXQgBAFgHAAQgGAAgBgDIgBgDQAAgHAIAAIADAAIgEgGIABABIgHgWIAAgFQAFgDAEgFQACAJABAPQAHAXAXAAQAKAAACgLIAAgLQAAgJgFgQIgDgHIACACQAHAIAIAEIABATQAAAggVAAQgSAAgKgKg");
	this.shape_24.setTransform(60.2,80.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BC8A7E").s().p("AheBFQgPgdgDgeQgIgHgEgNIgFgbQAAgaATAHIAEACIADgHIAAAAQADAAASArQAKAaAGAKQgCAGAAAIQAAALAHAIQANAQAhAAQAOAAAIgGIAAAFIAIAXIgCgBIAEAGIgDAAQgIAAAAAHIABADQABADAGAAQAIAAAAgFQAKAKATAAQAVAAAAggIgBgUQAKAFAOAAIAIgBQAIgBAFgEQgOAagMAOQgeAhglAAQhTAAgig/gAAUBNQgCgPgCgJQAEgFACgHIACgFQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABgDAIAAIAGABIADACIABACQABABAAAAQAAABABAAQAAABABAAQAAAAABABIAEAGIACAHQAFAQAAAKIAAALQgCALgKAAQgYAAgGgYgAgnAvQgNgGAAgGQAAgZAhgKQAfgIAAAYIgEATQgIASgQAAQgLAAgMgGgAgPAYIgBABQgCACgCAGQgBAGAEAEQAFAGAIgEQAGgDACgGIAAgFIgBgEQgEgFgHAAIgHACgABCAnQgGgIgBgGIAGgKQAJgOANgBIAIgBQAXgBAAAWIgCAPQgGAQgOAAQgTAAgLgMgABGAWIgEAFIAAAEQAAAEADADIADACIACABIAEABQAGAAAAgCIAGgFQABgGgDgEQgDgGgGAAQgEAAgFADgAAaAPIAAgCQAAgQgPgHQgNgHgTADQgbAEgLANIAAgDIgJgXQgGgOgGgIIgDgKIAHAFIAAgCIAAgCIAHACQABAAAAAAQABAAABAAQAAgBABAAQAAAAAAgBIAAgCIAGACIABgCIAAgBIAEgCQgCgKgGgJIALAGIAAgCQgEgTgLgPQAfgXArABQAxAAAjAcIAIAHIgDAFQgCACAAAEIAAACIAEACIAAAAIACABIAIADQgMAKAAAGQAAABAAABQAAABAAAAQABABAAAAQAAAAAAABIAEABIAGgEIABAAQgBAIAFAHQgCAGAEAHQAIABAHgDIAAAJQAAAMgBAQQgIgWgiACQgpACgDAeQgHgFgKADg");
	this.shape_25.setTransform(56.3,72.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#725149").s().p("AgEAPIgBAAQgFgGgUgDQgMgCgHABIgBgCIAAgDQAAgJAaADQAJABAFACIgDgJIAAgFQAFgDAEgFQACAJACAPQAFAXAYAAQAKAAACgLIAAgLQAAgJgFgQIgCgHIACACQAGAIAIAEIABATQAAAggVAAQgYAAgKgSg");
	this.shape_26.setTransform(58.4,80.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BC8A7E").s().p("AheBFQgPgdgDgeQgIgHgEgNIgFgbQAAgaATAHIAEACIADgHIAAAAQADAAASArQAKAaAGAKQgCAGAAAIQAAALAHAIQANAQAhAAQAOAAAIgGIAAAFIADAJQgFgCgIgBQgagDAAAKIAAADIABACQAHgBAMACQATACAFAHIABAAQALASAYAAQAVAAAAggIgBgUQAKAFAOAAIAIgBQAIgBAFgEQgOAagMAOQgeAhglAAQhTAAgig/gAAUBNQgCgPgCgJQAEgFACgHIACgFQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABgDAIAAIAGABIADACIABACQABABAAAAQAAABABAAQAAABABAAQAAAAABABIAEAGIACAHQAFAQAAAKIAAALQgCALgKAAQgYAAgGgYgAgnAvQgNgGAAgGQAAgZAhgKQAfgIAAAYIgEATQgIASgQAAQgLAAgMgGgAgPAYIgBABQgCACgCAGQgBAGAEAEQAFAGAIgEQAGgDACgGIAAgFIgBgEQgEgFgHAAIgHACgABCAnQgGgIgBgGIAGgKQAJgOANgBIAIgBQAXgBAAAWIgCAPQgGAQgOAAQgTAAgLgMgABGAWIgEAFIAAAEQAAAEADADIADACIACABIAEABQAGAAAAgCIAGgFQABgGgDgEQgDgGgGAAQgEAAgFADgAAaAPIAAgCQAAgQgPgHQgNgHgTADQgbAEgLANIAAgDIgJgXQgGgOgGgIIgDgKIAHAFIAAgCIAAgCIAHACQABAAAAAAQABAAABAAQAAgBABAAQAAAAAAgBIAAgCIAGACIABgCIAAgBIAEgCQgCgKgGgJIALAGIAAgCQgEgTgLgPQAfgXArABQAxAAAjAcIAIAHIgDAFQgCACAAAEIAAACIAEACIAAAAIACABIAIADQgMAKAAAGQAAABAAABQAAABAAAAQABABAAAAQAAAAAAABIAEABIAGgEIABAAQgBAIAFAHQgCAGAEAHQAIABAHgDIAAAJQAAAMgBAQQgIgWgiACQgpACgDAeQgHgFgKADg");
	this.shape_27.setTransform(56.3,72.8);

	this.instance_3 = new lib.Wygenerujklatkipośrednie86("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(57.4,72.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_13},{t:this.shape_15},{t:this.shape_11},{t:this.shape_14},{t:this.shape_9}]},3).to({state:[{t:this.shape_13},{t:this.shape_17},{t:this.shape_11},{t:this.shape_16},{t:this.shape_9}]},4).to({state:[{t:this.shape_13},{t:this.shape_19},{t:this.shape_11},{t:this.shape_18},{t:this.shape_9}]},2).to({state:[{t:this.shape_13},{t:this.shape_21},{t:this.shape_11},{t:this.shape_20},{t:this.shape_9}]},3).to({state:[{t:this.shape_13},{t:this.shape_23},{t:this.shape_11},{t:this.shape_22},{t:this.shape_9}]},1).to({state:[{t:this.shape_13},{t:this.shape_25},{t:this.shape_11},{t:this.shape_24},{t:this.shape_9}]},3).to({state:[{t:this.shape_13},{t:this.shape_17},{t:this.shape_11},{t:this.shape_16},{t:this.shape_9}]},5).to({state:[{t:this.shape_13},{t:this.shape_27},{t:this.shape_11},{t:this.shape_26},{t:this.shape_9}]},1).to({state:[{t:this.instance_3}]},81).to({state:[{t:this.instance_3}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(103).to({_off:false},0).to({scaleX:0.9,scaleY:0.91,x:47.6},5).wait(1));

	// reka
	this.instance_4 = new lib.Wygenerujklatkipośrednie76("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(29.3,100.9,0.995,0.995,61.9,0,0,-14.4,14.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:14,scaleX:0.99,scaleY:0.99,rotation:3.5,x:29.4,y:101},4).to({startPosition:0},1).to({regX:-14.3,rotation:11.8},2).to({startPosition:0},1).to({scaleX:0.99,scaleY:0.99,rotation:3.5},2).to({startPosition:0},2).to({scaleX:0.99,scaleY:0.99,rotation:11.8},2).to({startPosition:0},5).to({scaleX:0.99,scaleY:0.99,rotation:3.5},2).to({startPosition:0},2).to({regX:-14.4,regY:14.1,scaleX:1,scaleY:1,rotation:61.9,x:29.3,y:100.9},4).wait(76).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.9,rotation:0,skewX:61.6,skewY:62.3,x:22.4,y:98.5},5).wait(1));

	// tulow
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#80664D").s().p("AiWCoIAAAAIgogTQgigPgHgNQgEgGAAgVQAAgTAVg+IAZhBIAAAAQALglAjglQARgTAZgSQAFgDAVgFQASgDAPgBQBIgGAMAGIAAAAQACAAAEAEQACACAHAAIABABQA9AZAgArQASAZAYAyIAAAAQALATARA+QAPA5AAAIQAAAPgIAIQgLAMgfAEIhNALQhAAIgvAAIgBAAQhoAAgrgLgAhgiXQgXAMgSAaIAAAAQgeAhgNAlIgWA9QgVA9AAAPQABAsBrAVQA3ALA7ABQAkAABCgKIBDgLIAAAAQAmgDALgMIAAAAQAGgGAAgQQAAgGgRg3QgSg4gJgVQgNgegfgoIAAAAQgQgZgLgLQgVgUgigGQgvgHghAAQgtAAgYANg");
	this.shape_28.setTransform(48.1,90.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#605039").s().p("AhzCcQhrgVAAgsQAAgQAUg8IAXg9QAMglAeghIAAAAQATgaAXgMQAqgXBrARQAiAGAVAUQALALAQAZIAAAAQAeAoAOAeQAIAVASA4QARA3AAAGQAAAQgFAGIAAAAQgLALgnAEIAAAAIhCALQhCAKglAAQg7gBg3gLg");
	this.shape_29.setTransform(48,91);

	this.instance_5 = new lib.Wygenerujklatkipośrednie87("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(48.1,90.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28}]}).to({state:[{t:this.instance_5}]},103).to({state:[{t:this.instance_5}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(103).to({_off:false},0).to({scaleX:0.9,scaleY:0.91,x:39.2,y:89.1},5).wait(1));

	// za okn
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4F3137").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_30.setTransform(50,61.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7C5C47").s().p("AhZCPQgHgLAUAHQAFACABACgAmJCPQAAgBAFgDIAEgCIAFgCQAMAFgCACIgBABgApICPQADgCADAAQAFgCAHAEIAAAAgADbCGIAAgHQACgUAIAVIgEAIQgDAGgCAAQgCAAABgIgAplCKQgIgBAHgHIABgBIABAAIADgEIADgCQAFgDAGAAIAAADIAAADIAAABIgBABIAAAAIgCACIgDAEIgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAIgIABgAi8CFIgEgCIgHgGQgJgJAOgKIAIACIgFABIgBABIgCABIADABQAJAEALAAQAEAFABAHQgFAHgHAAIgBAAQgFAAgEgCgAldB6QgIgFgLgBQAEgFAJABIAGACQgBAFAMABIADADQAAAEADAEIgGABQgEgGgHgEgAplB/IAAgBIABACIgBgBgAkSBuQAHgPAEAWIAAACQgPAAAEgJgAovBuQAAgEACgCQACABADgEIAEAAQAAAEgCACQgEAHgDAAQgBAAgBgEgAEFBsQgEgCgFgJIAAAAQgIgMAMgJQAFgBADACIADAEQAGAIACAIQgEAMgGAAIgEgBgAplBpQACgCAEABIgEAFIgCgEgAkBBiQgIgIABgLQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAMAFIAHAFQgCAFADAGIADAGIgDAAQgIAAgHgGgAAxBiQgMgKAHgMQALgIALAKQAJAHACAKQgGAJgIAAQgGAAgIgGgAjQBfQgDgJAQAIIAAAAQABAAAAAAQAAAAAAABQABAAAAABQAAABAAABIgEACIgFABQgEgBgCgFgApEBIQgFgKAMAGIAAACQgBAGgCAAQgBAAgDgEgAkkBEQADgCACgEIADgBQAIgFADgGQAFAOgOAJQgGgCgEgDgAlCA5IAAAAIADALQgHADgDAAQgHAAAOgOgAj9ApIAEABIACgCQARADgNAGQAGAIgKADIgKACQgPAAATgVgAkwA6IgDgDIAAgCIAGAAIAAABIgCAFIgBgBgAIHAtQADgEAIgEIAAgBQAOgIAKANQABAEgCADIgEADQgJAFgIABQgSgEAFgIgAKEAyIAAAEIgGACQgbgHAhABgABTAlIABgBQABAAADgDQACACACAHQgJAIgDAAQgDAAAGgNgAkoAoQgCgFgFgCIgCgBIACgBIACgCIAGAAIABAIIABACIgCADIgBgCgAgnAnQgJgEAPgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAEAGgEAAIgIgDgAAjAoQgDgGgFgCIAAgCIABgBIAKADIABAGIgCABIgBACIgBgBgAgGAlIgDgBQAGgEAFgHIAHgDQADAEABAEQgDALgHAAQgDAAgGgEgAp9AYIAAgDQgCgIADAAQADAAAKARQgEAFgDAAQgEAAgDgLgAgPASIgCAAQgbANAUgXIABAAIAAAAIABAAIACACIAHADQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIACAAIACgCIAAAAIAFABIgJALIgDADQgDgFAEgEgAhJAaQgSgMANgHQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQAIARgEAAIgCgBgAluAUQgOgQARgJQALACAHAHQALALgJAJQgFADgEAAQgIAAgGgHgAHyAGQAVABgWAIQgdgMAeADgAB7APQgCgBACgFQAGgJABAKIABACQgEADgEAAgAp4AKIgIgDQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAgEADgCIADAAIAJACQABAAAAAAQABAAABAAQAAgBABAAQAAAAAAgBIANgYIACADQADAIACAJIgBAAQgCAIgKAHIgDABIgIAAIgCAAIgCAAgAELgNQABgLAEAWQgDAKgCAAQgCAAACgVgAhugFIgBgCQgCgIADgIQAEgBACACIAKAFQADABABACQACAEgFAEQAAABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAIgGABQgGAAgCgDgAkxgUQAIACABACQAAAAgBABQgBAAAAABQAAAAAAABQAAAAAAABIgCABQgJADgEAAQgFAAANgMgAEqgrIgCgGQgBgDACgEIAEABQAEACAEADIACACIABADQAEAGABAFIgBADIgCAOIgEADQgEgOgIgPgApzgeQgKgJATAGQAAAHgDAAQgCAAgEgEgApnggQAAgZANALIgDAFQgHALgCAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBgAjSgpIgBgBQgKgHAHgLIAAgBIABAAIABAAQABAAAAAAQABAAABAAQAAAAAAAAQABAAAAABIAEACQAGAHAGAEQAAAEgBABIgEACIgGABQgDAAgEgCgABzgtIgBgBQgEgGADgGIACgEQACgBAEAAQAFAHAGAFIADAEQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAAADQgEACgEAAQgHAAgFgGgAkTgxIAAgBIACgGIADAAQALACgKAEIgFABIgBAAgAgChSQAKgCgHAHQgDAFgBAAQgCAAADgKgApThTIACgGQAHgQAFgNIADADIADANIABADQgBAFgEAHIgCACIgCADQgDADgEABIgEABQgDgDACgDgAEVhlQAAgHAKAQIACAGQgEADgCAAQgHAAABgSgAAMhiQAFgBADABIAAAIIgBABIABAAIAAABIgBAAIgBACIgEABQgBgDgBgKgAEIhnQAKgJgBAMIgKADQgFAAAGgGgAEMiDQgBAAAAgBQAAAAgBAAQAAgBgBAAQgBAAgBAAIgIACIgEAAQgCgDgBgDIADgDIAbAAQAHAFACAIIAAABQgBAIgDAIIgDADIgMgYgAJPh5IACABQAAAAAAAAQAAABABAAQAAABAAAAQABABABABQgCABgIACQgUgTAZALgApxh4QgBgQABgEQAAgBAAgBQABAAAAAAQAAAAAAAAQABABAAABIADAKQgCAOgCAAIgBgEgAmZiMIAXAAIgIABIgJAAQgGAAAAgBgABNiLIgCgBIAUAAQgFABgGAAIgHAAg");
	this.shape_31.setTransform(53.1,102.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A88168").s().p("AjJCNIgDgIQgCgQALALIADAEIADgCIACgBIAEACQAFADAFgBIADAEIADAEIgdAAIAAAAIAAAAIgDACQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBgAKECNQgDgFAIgBIAAAGgAI6CNQgOgNAYACQAUAAgVALgAIHCNQgGgEAHgCIAIgDQAVgEgMANgADBCNQAGgGAKACIAHABIAIADgAgHCNQAHgEAHABIAAADgAgbCNIAGgEQAEABACACIABABgAhiCNIgHgMQANgCAFAKIACAEgAiICNIgCAAIgBAAIgPAAIAAgCQgBgOAOABQAMAAADALIAAAEgAjwCNIABgBQABgDAIgFQAEABACACIABABIAEAEIAAABgAj3CNQgBgCgBgFIAJAHgAk5CNQgKgGgEgGQgDgEAAgEQAPgBANAHQAMAFACAJgAlPCNQACAAACgDQAAgEgCgEIACACIACAAIADAEIgDAFgAmPCNIACgEQAGgJAHAIIABABQgFADAAABgAnACNIgBAAIgDgBQAFgEAIgBIAFAGgApMCNIABgBIADgEIADAAQAFAAADADQgDAAgDACgAqKCNIAAgNIADACIAEADQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABIgCACIgBACIAAAAgAl2CFIgFACIAEgDIAGgEQADAAADADQAJAHgHACIgDAAQACgCgMgFgAkDCBQgCgOAJAHQgGAEAJAIIAAAAQgDAFgCAAQgDAAgCgKgAmlB+QgCgUAPANIACADQgGAOgEAAQgDAAgCgKgApMCEQAJgMAFgPIAAABIACAEIABABQAAAHgCAHQgBAFgEAEIAAAAIgDACQgFgBgCgDgAn4B7QgBgHACgCIgBgGQgCgOAKAIQABgRAMARQgBADgDADQgEAEgCABIgCACIAHAFIACAEQgHAKgFAAQgFAAgBgLgAhHCBQgagHAagHQABAAABAAQAAABABAAQAAAAABAAQAAABABAAIACADQAGAGgBADQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgJgCgApyB8IgFgCIgJgFQgCgDABgDIABgFQACgGAEgDIgDAAQgGgBgDgCQAGgCADgHIABgCIACABIAGAHQAAgKACgJIABABIADADIgBARQAJABAGAJIACAEIAAAAIgBABIgBADIgEAHIgBAAIAAABIAAAAIgCADIgEABIgFABIgCAAgAoNBzIAAgDQAAgWAPATQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgFAFQgDADgCAAQgDAAgBgGgAKBBqQAGAAACABQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABIgEADQgCADgEABQgUgMAWgBgAI+BdIAhgUQACgBADACQAGANgQALQgQAMgRAIQgRgMAWgNgAmMB1QgVgBATgLIAGACIgCgGQgCgNAIAHIADACQACACACADIgFAIIgCACQAFAGgKAAIgDgBgAB+BrIAAgFIAEgFQADABADAEQADADABADQgGAJgDAAQgEAAgBgKgAFrBwIgCgIQgFgTAQAMQADACAAAEQgCAGgCAEQAAABgBAAQAAABgBAAQAAABgBAAQAAAAAAAAQgCAAgDgEgAkmBoQgBgFABgCIAHABIACACQACACABADQgEAKgEAAQgDAAgBgLgAi6BuIgDgBIACgBIABgBIAFgBIATgEQAEACADAFQABABAAAAQABABAAAAQAAAAAAAAQgBABAAAAIgMACIgCAAQgKAAgIgEgAG2BjQATgBgRANQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgUgOAWAAgApQBsIgBgGQAAgKAEgBIADABIABABIAFAHQAAAEgDACQgEAFgDAAIgCgDgAlCBrIgDgBQgKgBADgEQACgDAGgDQAEAAADADQALAJgOAAIgCAAgABeBXQABgEADgEQAHgIAHAJQACADAAADIgCAKQgCADgDADIgBAAIgHACQgJgJAEgIgAooBmQgDgBABgLQAFgfALAbQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQgDAFgEADQgCAEgCAAIgBgBgAljBbQgCgQALALQADACABADQgFAKgDAAQgDAAgCgKgAjNBXQgBgIAEgBQAEgBAJAIQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAIgDAEQgQgIADAJQACAFAEABIgCAAQgEAAgCgMgACgBXQgFgTAPANQADABAAAEQgEANgDAAQgDAAgDgMgApTBbIACAAIgEAEIACgEgAEQBPIgDgEQgCgRARgFQADgBADADQACADABADIgDAZQgBAIgJABQgCgIgGgIgAnWBaQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIgDgEQgCgQAPANIACAEQgGAKgEAAQAAAAgBAAQAAAAgBAAQAAgBAAgBQgBAAAAgBgAAYBbQAAgDABgDIAAAHIgBgBgAhNBWQgWgBATgOQADAAACACQAQANgQAAIgCAAgAGwBBQAIgLAMgDQADAAADABQAIAHgGAJQgGAIgJAFIgHACQgPgGAJgMgAiwBQQgFgEgBgFIABgGIABgFQAEgJAKgDIAAAAQAJABADAGIAEAEIACAEQgEAHgEACQgEAHgJAEIgHgDgAE/A9QgLgPgKgRQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAPgGAMAQQANAQAIAPQgFAHgGAAQgIAAgIgMgAmaBHQgWgBAUgOQABAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQARAOgRAAIgCAAgAFmA4QABgTAMAVIACAFQgHAIgDAAQgGAAABgPgAGIBGIgEAAQgBgEgBgLQABgHAKARIACAFIAAAAIgHAAgAjOBFIgJgEIgIgFQgJgIAEgJQAFAAADABQACgGAIgBIARgCIAKgBQADAAADADIABABQABAAAAABQAAAAABABQAAAAAAABQAAAAgBABQgHAUgZgHQAFAHgDAHIgBAAgAIiBBQgJgBAAgJQAIgBAJgFIAEgDQASgDAGARQAAADgDACQgCADgEAAIgbgDgAAtAyQgBgQALAMQADACABAEQgGAIgDAAQgEAAgBgKgAAgA4IAAgaQAFACADAGIABABIABgCIACAEIgCABQAEAIAAAIIgEAAQgFAAgFgCgACqAxIgBgGQgEgSAMAKIACACQACABABAEQgEANgDAAQgDAAgCgGgAkuAzIgGgDIgGgFIgBgCQgHgHABgJQAJAAAIAEIACgCIAEACIgCABIACABQAFACACAFIABACIABAGIgBABIgFAEIAAAAIgEABIgDgBgAkgAmIAEgBQAHAAgCAHIAAABQgCAGgCAAQgDAAgCgNgAJ1ApQgEgCgEgFQgBgCAAgDQALgMAPALIADADQADAEgDADIgDADIgHACQgFAAgFgCgAgXAlIAMgMIADgDIAIgLIAIgLIACAAIABAAQAIAEgGALIgEAFIgCADQgGAHgFAEQgGAEgGAAIgHgBgAkRAQQAFABACAEQAAADgFAFQgDAEgBAAQgDAAAFgRgAqDAaIgHAAIAAgUQAMgDAHAIQgDAAACAIIAAABQgDAGgHAAIgBAAgAk3AZQgVgBATgLIAGADQALAJgMAAIgDAAgAoCAPQAAgTANARQgBAEgDACQgEAFgCAAQgEAAABgJgABLALQAAgQARAPQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAIgCACIgHAGIgEACQgGAAAAgNgApQALIAAgKIABgBIABgBIAAgBIADgGQACgCAGAHQADgCAFAOQgBADgCACQgJAIgCgEQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgDAAgBgJgAAqALQAFgEADAAQAEABABAFIgPADQgFAAAHgFgAD5gHQAIgJAGAKIADAFQAAAEgCAFQgCAEgGADIgGABQgMgLALgMgAHQgGQABgMAJgJIAFgBQAOAFgCAOQgBALgJAHQgCACgDAAQgNgFABgMgAFNAAQgBgQALALQACADABACQgGAJgDAAQgEAAAAgJgAkOgBQgSAAAHgKIAGgGIACgBQADAAACABQAQAQgRAAIgBAAgAFrgNQAAgRAPAPQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQgHAJgEAAQgEAAgBgLgAAZgaIAAAMQgTgBATgLgAlwgXQAAgDABgDIABgBQACgEAEgCQAFgCAGAAIAGACQAKAGgJAHQgEADgEACIgGABQgGAAgGgGgACjgZQgLgJAFgQQAFgMAKAGQAGADABAFIgCAPQgBAJgJAAIgEgBgAnqgcIgBgFQgEgaALAQIgDALQgBAGgBAAIgBgCgAgegdQgZgFAbgIQADABACACQAKALgJAAIgIgBgAAPghQgVgBATgLQADAAACADQANAJgPAAIgBAAgAJHguIAHgBQATgEgLALIgBACIgGAEQgXgHAPgFgAAghMIABAAQADADABADIgCAKIgBAPIgCAEgAIeg4QAVgEgOAOQgCACgEABQgagJAZgEgADsg4QgFgTAPANQACABABAEQgEANgDAAQgEAAgCgMgAnkg0IgBgHIADgCQACABAFAGQgDAGgDAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgBgBgBgAlzgxQgVgBAUgLQAEAAACACIAFAHIgFADIgFAAgApohDQALgdAHAhIgCAEQgKAHgEAAQgHAAAFgPgAoag2QgVgGAUgKQAOgHAIAHIABABIABACIACACQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgBACQgDAGgIgBIgIAAIgBABIgCgBgAEUhGQgJgYAZARIABADQgDASgFAAQgEAAgFgOgAhvhHIAFABQAXAMgVABIgDAAQgWAAASgOgACrhKQAAgUANAWIACAFQgHAIgEAAQgFAAABgPgAAEg/QgagIAhgEQADAAACADIAFgEIAEABIAAAOIgCAAIgDAAIgEABQgEAAgIgDgAFhhDQgVgJAVgHIAEAAIAHAAQAIAAAEAGIABABQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAIgDADIAAACIgBABQgEADgFAAQgGAAgHgEgAh9hDQgMgDgHgJQgLgNAQgHIAGADQAJAEAGAIQAGAJgIAHIgEABIgBAAgAqKhcQAEAAAEAMQgCAEgCACIgEADgAIJhYIAEAAIAFAEIgFAGQgCACgEABQgTgMAVgBgAGXhNIABgIQACgJAHALQgFAHgDAAIgCgBgAjkhUIgBgDQAAgJAJgBIAQgCQAGABADAGQAGAJgNAEQgFACgFAAQgKAAgGgHgAlehQQgZgFAbgIQAEAAACADQAKALgKAAIgIgBgAhThRQgWgBATgLQAEAAACADQANAJgOAAIgCAAgAGQhoIABgEQABgGADAKIACALQgEAGgBAAQgEAAACgRgAkuhZIgGgBQgQgFAYgHIAGADIABACQAIAJgJAAIgIgBgAi3hqIAFACQAXAMgVAAIgDAAQgWAAASgOgAIUhlQgEgBgDgEIAAgBQgCgDABgEQAIgIAJAEQAFABADADQAJAHgKAGIgGACQgFAAgFgCgACdhoQgKgHgDgLQAAgCACgDQAHgHAKAGQAIAFAFAJQACACABAEQgFAIgGAAQgFAAgGgEgADBhyQgFgUAOANIAEAFQgFANgDAAQgDAAgCgLgAmhhuQgKgIAAgMQgBgHAEgFIASAAQAFAGABAJQABAOgOAFIgEgCgAiEhwQgZgEAagJQAEABACACQALALgKAAIgIgBgAoQh7QAAgWAQATQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQgHAHgDAAQgEAAAAgJgAJph3IgHgHQgHgJASgBQATAAgRAQQgCACgDAAIgBgBgAoviIIABgGIAJAAIADAEQAAAEgDACQgEAFgDAAQgDAAAAgJgACGiOIAMAAIABACIACAEQgHAIgEAAQgFAAABgOgAEwiBIgDgGIAAgBIAAgBIgBgCIAAgDIATAAQgEAKgDgBQgEAFgCAAIgCgBg");
	this.shape_32.setTransform(52.6,102.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9C745A").s().p("AJDCOQAWgLgUAAQgYgCAOANIghAAQALgNgUAEIgIADIAAgEQgBgCgDgBQgNgHgKAOIgEAGIhwAAQAFgCACgKIgCgFIgDgFQgDgFgGgBQADgEACgGQgBgEgDgCQgPgMAFATIACAIIgDAAIgDAEQgIAMAPAKIAIADIhwAAIADgIQADgLACgNIgBAAIgCgDQAJAFAFgQQAKgBABgIIADgZQgBgDgDgDQgCgDgEABQgQAFACARQgDgCgFABQgMAJAHAMIgFgDIgEAAIgEABQgJAEAEAJQAFARAKARIABABIgOAAQgCgEgIgDIAEgIQgIgVgCAUIAAAHQgDABgCACIgDADIgHgBQgLgCgFAGIiYAAIgBgBQAAgJgIgCIAAAMIgZAAIAAgDQgHgBgHAEIgHAAIgCgBQgBgCgEgBIgGAEIgmAAQgCgCgEgCQgUgHAHALIgCAAIgBgEQgFgKgNACIAHAMIgcAAIAAgEQgDgLgNAAQgNgBABAOIAAACIgOAAIgCgEIgDgEQAHAAAFgHQgBgHgFgFIANgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQgDgFgEgCIgTAEIgIgCIgEgGIAFgCQAAgBgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIAAAAIACgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgJgIgFABIgDgJIABAAQACgHgEgHQAZAHAHgUQAAgBAAAAQAAgBAAgBQAAAAAAAAQgBgBgBAAQAJgBgLgKQgCgDgEAAQgVAGAMAFIgQACQgIABgCAGQgDgBgFAAQgEAJAJAIIAIAFIgBAVIgIgHIgFgCQgIADgCAFIgGgFIgNgFQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQAAALAIAIQAJAIAJgCQAEAGAGAGQABACADABQAFgCADgEQAGAOALgCIAHAGIgBABIgDACIgDgEQgMgLADAQIACAIIgRAAIgBgBQACgDgDgDIgDgDQgHgOgQgCIgCAAIgBAFIgCACQgJgHACAOQACARAIgMQABAFABACIgpAAQgCgJgMgFQgNgHgPABIgDgDIACAAQAQAAgKgMIADABQAQAAgLgJQgDgDgEAAQgGADgCADIgCgBQgJAHgBAFIgGgCQgKgBgDAFIgFgBQAGgKgFgQQgBgJgHADQgKAHgDAHQgJgHADANIABAGIgFgCQgTALAVABQANABgFgGIACgCQACAFAGAFQgFAGAHAGIgDADIgEACIgBgBQgHgIgGAJIgDAEIgiAAIgFgGQgJABgEAEIgDgBIgCACIhoAAIgBAAQgGgEgGACQgDgDgEAAIADgCIACACQAJgCABgJIABgHQgFgEAFADIABgLIACgGIgBAAQABgGgEgDIgFgDIAAgEQgNgBgJAIIgCAAIgDAEIgCADIgCAEIgEANIgCAFQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAABIAAABIAAABIgBABQgHAHAHABIAAACIgBADIgSAAIABgEIAAgNIAHgBIAEgBIADgDIAAAAIAAgBIABAAIADgHIACgDIABgBIgBAAIAFgFQgEgBgDACQgFgJgJgBIABgRIgEgDIAAgBQgCAJgBAKIgFgHIgCgBIABgEIgPgFIAAgwIAGAAQAIAAAEgGIAAgBIAAADQAEATAKgNQgLgRgCAAQgIgIgLADIAAgTQAFAAAFgFIAKgNIABgFQgGgOgNAKIgCACIAAghIAEgDQACgCABgEQgEgMgDAAIAAgyIACAAQAAAGAFAGQAIAJAGgJIADgGIgBgGIAHAAQgBAEABAQQABALAEgVIgDgKIANAAQABAJALgJIAjAAIgBAGQgBAQALgMQADgCAAgEIgDgEIAnAAIgBAHQAAAQAKgMQADgDABgDIgFgFIBNAAQgDAEAAAIQABAMAJAIIAFACQAOgFgCgOQgBgJgEgGIACAAQAAACAPgBIAHgBIBfAAQgaAFAXANQARALAVgBQAEAAAFgEQACgHgHgDQgOgFgOgHIgCgCIFmAAQABAGAGAFQAPAOAJgQIgBgBIgBgIIAZAAQgBAZAPgTIgBgEIgCgCIBQAAQADAGAHgGIAUAAIgCADQABADACADIAEAAIAIgCQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIANAYIADgDQADgIABgIIgBgBQgBgHgIgGIARAAIAAADIABACIABABIAAABIADAGIABABQAPAhATgTQgBgHgFgJIgFgMIAfAAIAAACQAAAXATgTQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBAAAAIgCgCIAFAAIACAAIAQAAQACAOAKgOIByAAQAAAHAJAGQAMgCAGgIIADgDIBfAAIAAAnQgKgEgKAKQgHA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");
	this.shape_33.setTransform(52.5,102.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8C6851").s().p("AF1COIgHgEQgPgJAHgMIADgFIADAAQAEAIAEgHQAFACAEAFIACAEIACAFQgCALgFACIgCABIgDgBgAHrCOIADgGQAKgOANAHQADABABACIAAAEQgHACAGAEgAEACOIgCgBQgJgSgGgQQgEgKAJgEIAFAAIADAAIAGADIAAAAQAFAIAEADIABADIABAAQgCAMgDAMIgDAIgADhCOIgIgEIADgCQACgCADgBQgBAPAHgNQAIADACAEgAAhCOIAAgMQAIACABAJIAAABgAiKCOIABgBIACABgAjvCOIgJgHIAAAAQgJgIAGgEIADgCIAAgGIACAAQARADAHANIACAEQADADgBADIgEgEIgBgBQgCgCgEgBQgIAFgBADIgBABgAlICOIADgFIgDgEQAHADAFAGgAljCOIgFgCQAHgBgJgIQgDgCgDAAIgGAEQgHgGAEgHQgGgEgCgFIAFgIQgCgDgCgDIgDgCQAEgGAKgHQAGgDABAIQAGARgGAKIAEAAQALACAIAEQAHAFAEAFQACAEAAAFQgCADgCAAgAnICOIACgCIADAAIADABIABABgApgCOIABgDIAAgCIAAAAIAIgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBIABgBIADgDIACgCIAAAAIABgBIAAgBIAAgEIAAgCQgGgBgFAEIgDABIgDAFIgBAAIABgBIgBgCQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIABgGIAEgMIACgEIADgDIAEgEQAJgIAOAAIgBAFIAFADQAEADAAAGIAAAAIgBAGIgCALQgFgEAFAFIgBAHQgBAJgJACIgCgCIAAAAQAEgFABgEQACgHAAgHIgBgBIgCgEIAAgBQgFAPgJALIgDAEIADAGgApMBcQgEAAAAALIABAGIACADQADAAAEgGQADgCAAgDIgFgHIgBgBIgDgBIAAAAgAo9BpIAEgKIABgBIgDAAIgCALgAqACOIgCgCIACgCQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBIgEgCQgEgRALgHIgBAFQgBACACAEIAJAFIAFABIAAAOIgBAEgAqDCOIAAgBIADABgAAHCGIABgHQACgEAFgCQAFgCAFAAIABAAIAAATIgHACQgHAAgFgGgAg6CCQABgDgGgHQgBgGAKgEQADAAACACIAOAJQAJAHgIAIIgHACQgJgCgIgGgAoNB8QgBgGACgDQABAKAIgGIADACIACAEQgHAKgDAAQgEAAgBgLgACuCBQgFgEgDgDQgJAIAAgTQAAgRAJALIAAAAIAEgDQAHgCAEAFIAIANIADAFQgEAJgGAAQgEAAgEgDgAHHBwQASAAgRARIgEABQgWgSAZAAgAjSBwQgDAEgGACQgDgBgBgCQgGgGgEgGIgDgHQgDgFACgFQACgFAHgDIAGACIAHAGIABgUIAJAEIAEAJQgEAAABAJQACAOAGgCIAFgBIADAFQgOAKAJAKIgDAAQgKAAgEgMgAFEB3QgNgFgCgLIABgHQAHgEAJACQAJAEAFAGQADADAAAEQgEAKgIAAIgHgCgAlKB3IgCAAQgMgBABgGQABgEAJgHIACABQgDAEAKABQAKAMgPAAIgBAAgAnBB1QgUgBASgLQAFABACACQALAJgOAAIgCAAgAIBBgQAGgLALgCQAEgBADACQAGAHgDAJQgDAHgIAFIgGADQgPgFAFgOgAgFBwQgWgCAUgOIAEACQAPAOgQAAIgBAAgAAhBCIAFgCQAEgBACADQADACAAADIgDAeQgCAJgJABgABsBnQADgDACgEIACgJQAAgDgCgDQgHgKgHAJQgDADgBAEIgDgIIABgFQAJgHAKAIQAKAJAHAKIACAEIgEAFQgEAFgFAAQgFAAgFgFgAkcBjIgCAAIgHgBQgGgCANgJQAEACACACQALAIgMAAIgDAAgAnjBYQAAgSAMANIADADQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgIAHgDAAQgEAAABgKgAqJBLIAPAFIgBAEIgBABQgDAHgGADIgEABgAoEBUQgCgQAPANIACAEQgGAKgEAAQgEAAgBgLgAh2BaQgXAAAUgPIAFACQAPANgPAAIgCAAgAnABVQgHgMAJgKQAKgKAIALIACAEIgEAKQgCAJgJAAQgDAAgEgCgAGFBGIAEAAIAHABQAIADgNAKIgEABQgTgNARgCgAkqA8IgDAAQgBALgKgBIgBgDIgDgLIAAAAQgBgIADgGIABABIAGAGIAGADIAAACIADADIABABIACgGIAAAAIABAAIAFgEIABgBIgBgGIACgDIgBgCIgBgIQgBgFACgEQAJgDAAAGIAAADIAHgJQgHAZAJgLQAFgFAAgDQADAFgEALQAFAAgDAFIgDAGQgDAFgIAGIgDABQgCADgDADQgJAJgLADIAIgTgAkbAmIgEABQADAVAGgOIAAgBQACgHgHAAIAAAAgAJ1A/QATgBgQAOIgFACQgUgPAWAAgAlzBMQgVAAATgMQAEAAACADQALAJgNAAIgCAAgAgnBAQgOgNAVgDIAAAAQAHAAADAEQAHAFAEAHQAEAGgFAEIgGABQgNgDgIgIgAi0A7IABABIgBAGIgBAGQgSgBATgMgAopA7QABgUAMASQAAADgDADQgFAFgCAAQgDAAAAgJgAB4BBQgMgIgDgLIABgGIADgDQgCgHAIgJQAGgIAHAJQACACABAFQAAAEgDAFIgCADQAHAFAEAGQACADAAAEQgEAJgGAAQgEAAgFgDgAGwAmQAUgBgRAOQgCACgDAAQgUgOAWgBgAmvAtQgRgNATgKIAEACQAIAHAKAAQANABgCAMIgEAEQgHADgGAAQgJAAgJgGgACgAvQgPgKAGgNIAEgEIAIABQAHgBAFAIIACAEIABAEQgMgKAEASIABAFIgCABQgEAAgFgDgAlxArQgEgBgCgDQABgJAJgBIAggEQAEABACADQAEACgCADQgFAPgQAAQgKAAgNgGgAHwApQgFgBgEgDQAAgFACgBQASgIASgFQAKgEAEAJIABADIgBAEQgBADgCACIAAABQgIAEgDAEIgCABIgBAAQgNgBgNgDgADOAhQgLgRABgRQAAgEADgFQAIgCADAHQAFAMAJANIAEAGQgEASgGAAQgFAAgHgLgApOAmQgGgSAFgSIAAAKQABAOAGgHQACADAJgHQACgCABgDQgFgOgDABQgGgGgCACIAAgBQAQggATASQgCAIgEAJQgGAKgCALQgFAUgRAFIgDgDgAiwAmQgDgDgDgBIgKACQgNgFAWgHQADABACADQALAJgIACIgBgBgABWAXIAAAAIAHgGIADADQADACAAADIgFAGQgDADgBAAQgDgBgBgKgAAiAcIgBABIAAgBQABgFgBgCIAAgPQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAABQAKgEAGACQgDABgFAEQgMAIAZgGIgJAHIADAAQAHAAgCAIIgLABIgKgCgAiEARQgLgPARgGIAHADQAFABAEAHIABAHQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgGAHgGAAQgGAAgF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");
	this.shape_34.setTransform(52.5,102.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).wait(109));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.6,-19.1,145.2,141.3);


(lib.dziadekigraficiarka = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{jeszczeNiePyta:0,pyta:55,nieMa:159,jest:211,pyta2:215,stop:254,"koniec":315,nieMa2:319});

	// timeline functions:
	this.frame_159 = function() {
		this.stop();
	}
	this.frame_254 = function() {
		this.stop();
	}
	this.frame_315 = function() {
		this.gOdp.gotoAndPlay("koniec");
		this.dzPyta.gotoAndPlay("koniec");
	}
	this.frame_319 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(159).call(this.frame_159).wait(95).call(this.frame_254).wait(61).call(this.frame_315).wait(4).call(this.frame_319).wait(1));

	// dziadek
	this.instance = new lib.dziadekPojawiaSie();
	this.instance.parent = this;
	this.instance.setTransform(208.6,-316,1,1,0,0,0,51.9,51.5);

	this.dzPyta = new lib.dziadekJest();
	this.dzPyta.parent = this;
	this.dzPyta.setTransform(208.6,-316,1,1,0,0,0,51.9,51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.dzPyta}]},51).to({state:[]},108).to({state:[{t:this.instance}]},1).to({state:[{t:this.dzPyta}]},51).to({state:[]},108).wait(1));

	// graficiarka odp
	this.gOdp = new lib.graficiarkaodpowiada();
	this.gOdp.parent = this;
	this.gOdp.setTransform(362.5,110.2,1,1,0,0,0,359.6,110.6);
	this.gOdp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gOdp).wait(55).to({_off:false},0).to({_off:true},104).wait(56).to({_off:false},0).to({_off:true},104).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(136.1,-386.6,145.1,141.3);


(lib.dymekZmailem = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_38 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.email_btn.addEventListener("click", ClickToMail);
		
		function ClickToMail() {
			window.open("mailto:habela@graphic-designer.com", "_self");
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(38).call(this.frame_38).wait(1));

	// Layer 2
	this.email_btn = new lib.emailbtn();
	this.email_btn.parent = this;
	this.email_btn.setTransform(21.6,176,1,1,0,0,0,295.8,40.3);
	this.email_btn._off = true;
	new cjs.ButtonHelper(this.email_btn, 0, 1, 2, false, new lib.emailbtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.email_btn).wait(38).to({_off:false},0).wait(1));

	// list 2
	this.instance = new lib.Wygenerujklatkipośrednie92("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(31.2,38.2,0.327,0.27,10.3);
	this.instance._off = true;

	this.instance_1 = new lib.Wygenerujklatkipośrednie93("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(85.4,77.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},35).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({scaleX:0.4,scaleY:0.35,rotation:9,x:65.2,y:54.5},1,cjs.Ease.get(-1)).to({scaleX:0.63,scaleY:0.59,rotation:5.6,x:73.2,y:55.7},1).to({_off:true,scaleX:1,scaleY:1,rotation:0,x:85.4,y:77.6},1).wait(1));

	// list 1
	this.instance_2 = new lib.Wygenerujklatkipośrednie89("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(121.8,-30,0.053,0.086,-83.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({scaleX:0.15,scaleY:0.18,rotation:14.3,guide:{path:[121.7,-29.9,121.7,-38,122.7,-54.3,123.7,-70.4,123.7,-71.9,123.7,-72.9,123.7,-73.9,122.8,-86.3,112,-99.6,111.8,-99.9,111.7,-100,106.6,-106.2,100.9,-110,95.1,-114,90.7,-114,80.4,-114,75.7,-108,74.3,-106.2,73.4,-104,72.1,-100.8,71.8,-96.6]}},5).to({scaleX:0.31,scaleY:0.07,rotation:-153.2,guide:{path:[71.9,-96.6,71.8,-95.3,71.8,-93.9,71.8,-89.5,73.6,-86.5,77.1,-80.5,87.7,-75.9,89,-75.4,92.9,-73.6,96.5,-72,97.7,-72,104.2,-72,110.7,-72,117.5,-72,123.7,-74,132.5,-76.8,139.9,-83.9,151.7,-95.3,151.7,-108.9,151.7,-117.6,148,-124.5,141.6,-136.7,123.8,-143.6,109.7,-149,94.7,-149.6,94.5,-149.6,94.4,-149.6,86,-149.6,79.8,-148.1]}},8).to({scaleX:0.42,scaleY:0.58,rotation:-149.4,guide:{path:[79.9,-148.2,73.8,-146.6,69.9,-143.6,61.9,-137.3,61.9,-122.9,61.9,-121.6,62.2,-118,62.5,-113.7,62.9,-112.9,65,-108.4,73.6,-104.1,73.7,-104,73.9,-103.9,78.2,-101.9,84.9,-99.9,91.5,-97.9,93.8,-97.9,103.6,-97.9,112,-99.7,130.4,-103.6,141.8,-115.9,145.5,-120,148.1,-124.6,149.9,-127.7,151.2,-131,151.8,-132.7,152.3,-134.3]}},6).to({scaleX:0.57,scaleY:0.27,rotation:-322.9,guide:{path:[152.3,-134.3,153.8,-139.2,153.8,-143.6,153.8,-174.1,113.8,-187.7,100.8,-192.2,84.9,-194.3,74.9,-195.6,68.9,-195.6,55.4,-195.6,51.6,-195.4,44.6,-195,39.1,-193.2,30.6,-190.3,4.1,-173.6,-0.3,-170.8,-4.1,-167.9]}},5).to({scaleX:0.79,scaleY:0.65,rotation:-342.2,guide:{path:[-4.3,-167.9,-7.1,-165.7,-9.6,-163.4,-9.7,-163.2,-9.9,-163.1,-10.4,-162.7,-11,-162.1,-12.5,-160.7,-14.8,-158.1,-20.3,-152.1,-25,-144.9,-30.6,-136.6,-33.6,-132,-38.9,-123.6,-40.4,-118.9,-42.4,-112.3,-45,-106.4,-47.3,-101.2,-47.4,-100.9,-47.7,-99.6,-47.9,-90.4,-47.9,-90,-49.4,-85.8,-50.9,-81.1,-51.4,-78.4,-51.6,-77.2,-51.5,-73.6,-51.4,-69.8,-51.4,-69.2,-51.5,-57.5,-50.4,-55,-48.8,-51.5,-48.9,-50.9,-49.1,-49.6,-48.4,-47,-48.1,-45.5,-46.6,-41,-45.1,-36.8,-44.9,-36.5,-44.3,-35.5,-41.8,-30.2,-39.6,-25.7,-38.4,-24.5,-30.8,-8.5,-8.1,15.7]}},9).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Drzwi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// drzwi glowa
	this.instance = new lib.DrzwiGlowa();
	this.instance.parent = this;
	this.instance.setTransform(-5,-79.2,1,1,0,0,0,-5,-79.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).to({_off:true},13).wait(131));

	// drzwi1
	this.instance_1 = new lib.Drzwi1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5,-79.2,1,1,0,0,0,-5,-79.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},26).wait(13).to({_off:false},0).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,234,264);


(lib.cmy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cma lata4
	this.instance = new lib.cma();
	this.instance.parent = this;
	this.instance.setTransform(228.4,-91.7,1,1,0,0,180,-245.7,-99.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[229,-92.2,229.1,-92.1,229.2,-91.9,229.5,-91.5,229.9,-91.2,230.1,-90.8,230.2,-89.9,230.2,-88.9,230.2,-88.8,230.2,-84.6,226.7,-83.2,225.6,-82.7,221.2,-82.7,219.7,-82.7,218.2,-83.4,215.2,-84.9,213.2,-85.7,209.2,-87.1,208.2,-87.3,207.5,-87.4,204,-87.4,199.8,-87.4,197.5,-86.5,194.5,-85.2,194.5,-82.4,194.5,-80.6,195.6,-79.3,196.6,-78.1,199,-76.9,201.5,-75.6,202.6,-75,203.3,-74.7,203.5,-74.6,204.1,-74.4,206.5,-74.4,208.4,-74.4,208.8,-74.5,209.5,-74.8,211.2,-76.1,211.2,-76.2,211.2,-76.2,211.6,-76.4,212.2,-77.1,212.9,-77.6,213.5,-77.7,214.4,-77.7,215.2,-77.7,218.4,-77.7,219.5,-76.4,220.2,-75.5,220.2,-72.9,220.2,-70.4,219.9,-69.9,219.6,-69.3,218.5,-68.6,217.5,-67.9,215.7,-67.2,214.5,-66.6,211.7,-66.4,210,-66.2,209,-66.2,205.5,-66.2,205.1,-66.5,204.1,-67.7,201,-69.7,199.2,-70.8,197.6,-72.3,196.7,-73.1,195.9,-74.1,193.8,-76.7,193.2,-78.7,192.5,-81.3,189.2,-87.2,186.9,-91.1,185.7,-91.9,184.5,-92.7,180.8,-92.7,175.9,-92.7,174.2,-92.2,172.1,-91.6,171.2,-91.3,169.7,-90.9,169,-90.4,166.8,-88.9,166,-87.2,165.2,-85.6,165.1,-84.9,165,-84.5,165,-83.4,165,-81.1,165.1,-80.9,165.4,-80,167.7,-78.7,171.9,-76.2,176.8,-76.2,177.9,-76.2,178.8,-76.3,182.5,-76.7,184.2,-78.7,185.7,-80.4,185.7,-83.5,185.7,-86.1,183.5,-87.7,181.6,-88.9,179.5,-88.9,177.5,-88.9,176.5,-87.7,175.5,-86.5,175.5,-84.4,175.5,-82.1,177.2,-78.9,178,-77.3,178.8,-76.3,179.4,-75.5,180,-74.9,183.8,-71.3,184.1,-71.1,186.5,-69.4,190.2,-69.4,191.9,-69.4,193.9,-70.3,195,-70.9,197.5,-72.2,197.6,-72.2,197.6,-72.3,199.9,-73.3,202.6,-75,203.3,-75.5,204,-75.9,204.9,-76.5,206,-77.3,207.7,-78.6,209.8,-80.3,212.9,-82.4,216.5,-82.4,218.7,-82.4,219.8,-82,221,-81.4,222.7,-79.4,224.7,-77.1,225,-76,225,-75.9,225,-73.8,225,-69.7,221,-66.2,220.3,-65.6,218.8,-65.2,218.3,-65.1,217.7,-65,215.1,-64.7,214,-64.4,213.1,-64.2,209.4,-63.6,207,-63.3,205,-62.7,204.6,-62.6,204.2,-62.4,202.1,-61.6,200.9,-59.5,199.7,-57.7,199.7,-55.6,199.7,-54.1,199.9,-53.7,200.2,-52.8,201.5,-52.1,201.6,-52.1,201.7,-52,201.9,-51.9,202.3,-51.6,202.6,-51.3,203,-50.9,204.2,-50,205.8,-50,206.3,-50,207.8,-50.4,209.2,-50.9,209.5,-51,210.6,-51.5,211,-51.9,211.2,-52,212.5,-52,213.5,-52,214.7,-51.3,216,-50.4,216,-49.5,216,-48.8,211.7,-46.7,207.5,-44.8,207.5,-44.8,207.2,-44.5,207,-44.2,203.6,-40.6,203,-39.7,202.2,-38.7,202.2,-36.1,202.2,-33,204.3,-33,207.8,-33.2,209.2,-32.3,209.4,-32.2,209.5,-32.1,212.1,-30.4,213,-29.4,214.7,-27.6,214.7,-25.3,214.7,-22.1,211.7,-21.3,210.8,-21,207.5,-21,204.8,-20.7,201.7,-21.5,198.3,-22.4,196.2,-24,191.2,-27.8,190.4,-29.3,190,-30.1,190,-33.6,190,-36.9,190.3,-37.3,190.8,-37.8,194,-41.5,195.2,-43.2,196.7,-43.8,197,-43.9,197.3,-44,198.5,-44.3,202.2,-44.3,204.4,-44.3,206.5,-44.3,206.7,-44.3,207,-44.2,207.9,-43.9,209.5,-42.5,210.7,-41.3,211.1,-39.4,211.2,-38.7,211.2,-37.3,211.2,-34.4,209.5,-32.1,209.4,-31.9,209.2,-31.8,207.2,-29.3,204.5,-29.3,202.9,-29.3,201.2,-30.3,199.1,-31.5,198,-33.8,196.6,-36.4,196.4,-37.1,196.2,-37.7,196.2,-39.8,196.2,-41.8,196.7,-43.8,196.9,-44.7,197.3,-45.6,198.1,-48.1,199.5,-50,199.8,-50.5,200.4,-51.1,200.9,-51.6,201.5,-52.1,202.6,-53,204.1,-54.1,206.7,-56.1,206.7,-58.5,206.7,-59.3,206.2,-60.4,205.6,-61.5,205,-62.7,204.9,-62.9,204.7,-63.2,204.3,-63.5,202.5,-63.6,200.3,-63.6,200,-63.7,199.8,-63.7,199.1,-64,198.7,-64.2,196.3,-64.2,193.3,-64.2,193.1,-64,192.4,-63.3,191.2,-62.9,190,-62.5,189.2,-61.7,187.8,-60.5,187.2,-60.2,186.1,-59.4,185.4,-58.7,185,-58.1,184.2,-56.8,183.9,-56.2,183.7,-54.9,183.5,-53.8,183.5,-53.1,183.5,-50.6,184,-50.3,184.3,-50,187.5,-50,188.1,-50,192.5,-50.5,192.6,-50.5,196,-50.4,198.1,-50.4,199.2,-50.8,199.4,-50.8,200.4,-51.1,201.1,-51.3,202.3,-51.6,203,-51.8,204,-52,207.2,-52.8,209,-54,213.9,-57.2,216.2,-59.8,218.3,-62.3,218.8,-65.2,219,-66.1,219,-66.9,219,-67.7,218.5,-68.6,218,-70,216.5,-71.7,214.8,-73.6,213.5,-74.7,211.9,-75.8,211.3,-76.1,211.3,-76.1,211.2,-76.1,210.5,-76.4,208.7,-76.7,206.7,-77,206.1,-77.3,206.1,-77.3,206,-77.3,205.6,-77.5,203.5,-78.7,203.3,-78.8,202,-79.9,201.6,-80.2,201,-80.6,200.5,-80.8,200.2,-81.2,199.8,-81.6,198,-85.4,197.7,-86,197.5,-86.5,195.9,-89.7,195.8,-89.8,195.7,-90.2,195.7,-94.2,195.7,-96.9,196,-98.4,196,-98.8,197.5,-101.9,198.1,-103.9,200.2,-105.7,201.7,-106.8,203,-107.1,203.3,-107.2,205.1,-107.2,205.7,-107.2,206.4,-107.1,210.3,-106.8,213,-104.2,215.5,-101.7,215.5,-99.3,215.5,-97.7,213.7,-96.1,212,-94.7,210.6,-94.7,209.2,-94.7,207.7,-95.8,205.7,-97.3,205.7,-99.9,205.7,-100.8,205.5,-101.4,205.2,-101.9,205.2,-103.3,205.2,-105.4,206.4,-107.1,206.6,-107.5,206.8,-107.8,207.9,-109.1,211.7,-113.7,212.1,-114.2,216,-115.9,217.8,-117,218.3,-117.1,218.8,-117.2,221.2,-117.2,224,-117.2,227.9,-115.7,230.9,-114.5,232,-113.7,235.9,-110.4,236.5,-109.6,237.7,-108.1,237.7,-105.4,237.7,-99.5,230.2,-99.6,225.7,-99.6,225.1,-99.5,222.7,-99.1,222.7,-97,222.7,-96.4,223.1,-95.8]}},119).to({guide:{path:[223.1,-95.8,222.7,-96.4,222.7,-97,222.7,-99.1,225.1,-99.5,225.7,-99.6,230.2,-99.6,237.7,-99.5,237.7,-105.4,237.7,-108.1,236.5,-109.6,235.9,-110.4,232,-113.7,230.9,-114.5,227.9,-115.7,224,-117.2,221.2,-117.2,218.8,-117.2,218.3,-117.1,217.8,-117,216,-115.9,212.1,-114.2,211.7,-113.7,207.9,-109.1,206.8,-107.8,206.6,-107.5,206.4,-107.1,205.2,-105.4,205.2,-103.3,205.2,-101.9,205.5,-101.4,205.7,-100.8,205.7,-99.9,205.7,-97.3,207.7,-95.8,209.2,-94.7,210.6,-94.7,212,-94.7,213.7,-96.1,215.5,-97.7,215.5,-99.3,215.5,-101.7,213,-104.2,210.3,-106.8,206.4,-107.1,205.7,-107.2,205.1,-107.2,203.3,-107.2,203,-107.1,201.7,-106.8,200.2,-105.7,198.1,-103.9,197.5,-101.9,196,-98.8,196,-98.4,195.7,-96.9,195.7,-94.2,195.7,-90.2,195.8,-89.8,195.9,-89.7,197.5,-86.5,197.7,-86,198,-85.4,199.8,-81.6,200.2,-81.2,200.5,-80.8,201,-80.6,201.6,-80.2,202,-79.9,203.3,-78.8,203.5,-78.7,205.6,-77.5,206,-77.3,206.1,-77.3,206.1,-77.3,206.7,-77,208.7,-76.7,210.5,-76.4,211.2,-76.1,211.3,-76.1,211.3,-76.1,211.9,-75.8,213.5,-74.7,214.8,-73.6,216.5,-71.7,218,-70,218.5,-68.6,219,-67.7,219,-66.9,219,-66.1,218.8,-65.2,218.3,-62.3,216.2,-59.8,213.9,-57.2,209,-54,207.2,-52.8,204,-52,203,-51.8,202.3,-51.6,201.1,-51.3,200.4,-51.1,199.4,-50.8,199.2,-50.8,198.1,-50.4,196,-50.4,192.6,-50.5,192.5,-50.5,188.1,-50,187.5,-50,184.3,-50,184,-50.3,183.5,-50.6,183.5,-53.1,183.5,-53.8,183.7,-54.9,183.9,-56.2,184.2,-56.8,185,-58.1,185.4,-58.7,186.1,-59.4,187.2,-60.2,187.8,-60.5,189.2,-61.7,190,-62.5,191.2,-62.9,192.4,-63.3,193.1,-64,193.3,-64.2,196.3,-64.2,198.7,-64.2,199.1,-64,199.8,-63.7,200,-63.7,200.3,-63.6,202.5,-63.6,204.3,-63.5,204.7,-63.2,204.9,-62.9,205,-62.7,205.6,-61.5,206.2,-60.4,206.7,-59.3,206.7,-58.5,206.7,-56.1,204.1,-54.1,202.6,-53,201.5,-52.1,200.9,-51.6,200.4,-51.1,199.8,-50.5,199.5,-50,198.1,-48.1,197.3,-45.6,196.9,-44.7,196.7,-43.8,196.2,-41.8,196.2,-39.8,196.2,-37.7,196.4,-37.1,196.6,-36.4,198,-33.8,199.1,-31.5,201.2,-30.3,202.9,-29.3,204.5,-29.3,207.2,-29.3,209.2,-31.8,209.4,-31.9,209.5,-32.1,211.2,-34.4,211.2,-37.3,211.2,-38.7,211.1,-39.4,210.7,-41.3,209.5,-42.5,207.9,-43.9,207,-44.2,206.7,-44.3,206.5,-44.3,204.4,-44.3,202.2,-44.3,198.5,-44.3,197.3,-44,197,-43.9,196.7,-43.8,195.2,-43.2,194,-41.5,190.8,-37.8,190.3,-37.3,190,-36.9,190,-33.6,190,-30.1,190.4,-29.3,191.2,-27.8,196.2,-24,198.3,-22.4,201.7,-21.5,204.8,-20.7,207.5,-21,210.8,-21,211.7,-21.3,214.7,-22.1,214.7,-25.3,214.7,-27.6,213,-29.4,212.1,-30.4,209.5,-32.1,209.4,-32.2,209.2,-32.3,207.8,-33.2,204.3,-33,202.2,-33,202.2,-36.1,202.2,-38.7,203,-39.7,203.6,-40.6,207,-44.2,207.2,-44.5,207.5,-44.8,207.5,-44.8,211.7,-46.7,216,-48.8,216,-49.5,216,-50.4,214.7,-51.3,213.5,-52,212.5,-52,211.2,-52,211,-51.9,210.6,-51.5,209.5,-51,209.2,-50.9,207.8,-50.4,206.3,-50,205.8,-50,204.2,-50,203,-50.9,202.6,-51.3,202.3,-51.6,201.9,-51.9,201.7,-52,201.6,-52.1,201.5,-52.1,200.2,-52.8,199.9,-53.7,199.7,-54.1,199.7,-55.6,199.7,-57.7,200.9,-59.5,202.1,-61.6,204.2,-62.4,204.6,-62.6,205,-62.7,207,-63.3,209.4,-63.6,213.1,-64.2,214,-64.4,215.1,-64.7,217.7,-65,218.3,-65.1,218.8,-65.2,220.3,-65.6,221,-66.2,225,-69.7,225,-73.8,225,-75.9,225,-76,224.7,-77.1,222.7,-79.4,221,-81.4,219.8,-82,218.7,-82.4,216.5,-82.4,212.9,-82.4,209.8,-80.3,207.7,-78.6,206,-77.3,204.9,-76.5,204,-75.9,203.3,-75.5,202.6,-75,199.9,-73.3,197.6,-72.3,197.6,-72.2,197.5,-72.2,195,-70.9,193.9,-70.3,191.9,-69.4,190.2,-69.4,186.5,-69.4,184.1,-71.1,183.8,-71.3,180,-74.9,179.4,-75.5,178.8,-76.3,178,-77.3,177.2,-78.9,175.5,-82.1,175.5,-84.4,175.5,-86.5,176.5,-87.7,177.5,-88.9,179.5,-88.9,181.6,-88.9,183.5,-87.7,185.7,-86.1,185.7,-83.5,185.7,-80.4,184.2,-78.7,182.5,-76.7,178.8,-76.3,177.9,-76.2,176.8,-76.2,171.9,-76.2,167.7,-78.7,165.4,-80,165.1,-80.9,165,-81.1,165,-83.4,165,-84.5,165.1,-84.9,165.2,-85.6,166,-87.2,166.8,-88.9,169,-90.4,169.7,-90.9,171.2,-91.3,172.1,-91.6,174.2,-92.2,175.9,-92.7,180.8,-92.7,184.5,-92.7,185.7,-91.9,186.9,-91.1,189.2,-87.2,192.5,-81.3,193.2,-78.7,193.8,-76.7,195.9,-74.1,196.7,-73.1,197.6,-72.3,199.2,-70.8,201,-69.7,204.1,-67.7,205.1,-66.5,205.5,-66.2,209,-66.2,210,-66.2,211.7,-66.4,214.5,-66.6,215.7,-67.2,217.5,-67.9,218.5,-68.6,219.6,-69.3,219.9,-69.9,220.2,-70.4,220.2,-72.9,220.2,-75.5,219.5,-76.4,218.4,-77.7,215.2,-77.7,214.4,-77.7,213.5,-77.7,212.9,-77.6,212.2,-77.1,211.6,-76.4,211.2,-76.2,211.2,-76.2,211.2,-76.1,209.5,-74.8,208.8,-74.5,208.4,-74.4,206.5,-74.4,204.1,-74.4,203.5,-74.6,203.3,-74.7,202.6,-75,201.5,-75.6,199,-76.9,196.6,-78.1,195.6,-79.3,194.5,-80.6,194.5,-82.4,194.5,-85.2,197.5,-86.5,199.8,-87.4,204,-87.4,207.5,-87.4,208.2,-87.3,209.2,-87.1,213.2,-85.7,215.2,-84.9,218.2,-83.4,219.7,-82.7,221.2,-82.7,225.6,-82.7,226.7,-83.2,230.2,-84.6,230.2,-88.8,230.2,-88.9,230.2,-89.9,230.1,-90.8,229.9,-91.2,229.5,-91.5,229.2,-91.9,229.1,-92.1,229,-92.2]}},1).to({guide:{path:[229,-92.2,229.1,-92.1,229.2,-91.9,229.5,-91.5,229.9,-91.2,230.1,-90.8,230.2,-89.9,230.2,-88.9,230.2,-88.8,230.2,-84.6,226.7,-83.2,225.6,-82.7,221.2,-82.7,219.7,-82.7,218.2,-83.4,215.2,-84.9,213.2,-85.7,209.2,-87.1,208.2,-87.3,207.5,-87.4,204,-87.4,199.8,-87.4,197.5,-86.5,194.5,-85.2,194.5,-82.4,194.5,-80.6,195.6,-79.3,196.6,-78.1,199,-76.9,201.5,-75.6,202.6,-75,203.3,-74.7,203.5,-74.6,204.1,-74.4,206.5,-74.4,208.4,-74.4,208.8,-74.5,209.5,-74.8,211.2,-76.1,211.2,-76.2,211.2,-76.2,211.6,-76.4,212.2,-77.1,212.9,-77.6,213.5,-77.7,214.4,-77.7,215.2,-77.7,218.4,-77.7,219.5,-76.4,220.2,-75.5,220.2,-72.9,220.2,-70.4,219.9,-69.9,219.6,-69.3,218.5,-68.6,217.5,-67.9,215.7,-67.2,214.5,-66.6,211.7,-66.4,210,-66.2,209,-66.2,205.5,-66.2,205.1,-66.5,204.1,-67.7,201,-69.7,199.2,-70.8,197.6,-72.3,196.7,-73.1,195.9,-74.1,193.8,-76.7,193.2,-78.7,192.5,-81.3,189.2,-87.2,186.9,-91.1,185.7,-91.9,184.5,-92.7,180.8,-92.7,175.9,-92.7,174.2,-92.2,172.1,-91.6,171.2,-91.3,169.7,-90.9,169,-90.4,166.8,-88.9,166,-87.2,165.2,-85.6,165.1,-84.9,165,-84.5,165,-83.4,165,-81.1,165.1,-80.9,165.4,-80,167.7,-78.7,171.9,-76.2,176.8,-76.2,177.9,-76.2,178.8,-76.3,182.5,-76.7,184.2,-78.7,185.7,-80.4,185.7,-83.5,185.7,-86.1,183.5,-87.7,181.6,-88.9,179.5,-88.9,177.5,-88.9,176.5,-87.7,175.5,-86.5,175.5,-84.4,175.5,-82.1,177.2,-78.9,178,-77.3,178.8,-76.3,179.4,-75.5,180,-74.9,183.8,-71.3,184.1,-71.1,186.5,-69.4,190.2,-69.4,191.9,-69.4,193.9,-70.3,195,-70.9,197.5,-72.2,197.6,-72.2,197.6,-72.3,199.9,-73.3,202.6,-75,203.3,-75.5,204,-75.9,204.9,-76.5,206,-77.3,207.7,-78.6,209.8,-80.3,212.9,-82.4,216.5,-82.4,218.7,-82.4,219.8,-82,221,-81.4,222.7,-79.4,224.7,-77.1,225,-76,225,-75.9,225,-73.8,225,-69.7,221,-66.2,220.3,-65.6,218.8,-65.2,218.3,-65.1,217.7,-65,215.1,-64.7,214,-64.4,213.1,-64.2,209.4,-63.6,207,-63.3,205,-62.7,204.6,-62.6,204.2,-62.4,202.1,-61.6,200.9,-59.5,199.7,-57.7,199.7,-55.6,199.7,-54.1,199.9,-53.7,200.2,-52.8,201.5,-52.1,201.6,-52.1,201.7,-52,201.9,-51.9,202.3,-51.6,202.6,-51.3,203,-50.9,204.2,-50,205.8,-50,206.3,-50,207.8,-50.4,209.2,-50.9,209.5,-51,210.6,-51.5,211,-51.9,211.2,-52,212.5,-52,213.5,-52,214.7,-51.3,216,-50.4,216,-49.5,216,-48.8,211.7,-46.7,207.5,-44.8,207.5,-44.8,207.2,-44.5,207,-44.2,203.6,-40.6,203,-39.7,202.2,-38.7,202.2,-36.1,202.2,-33,204.3,-33,207.8,-33.2,209.2,-32.3,209.4,-32.2,209.5,-32.1,212.1,-30.4,213,-29.4,214.7,-27.6,214.7,-25.3,214.7,-22.1,211.7,-21.3,210.8,-21,207.5,-21,204.8,-20.7,201.7,-21.5,198.3,-22.4,196.2,-24,191.2,-27.8,190.4,-29.3,190,-30.1,190,-33.6,190,-36.9,190.3,-37.3,190.8,-37.8,194,-41.5,195.2,-43.2,196.7,-43.8,197,-43.9,197.3,-44,198.5,-44.3,202.2,-44.3,204.4,-44.3,206.5,-44.3,206.7,-44.3,207,-44.2,207.9,-43.9,209.5,-42.5,210.7,-41.3,211.1,-39.4,211.2,-38.7,211.2,-37.3,211.2,-34.4,209.5,-32.1,209.4,-31.9,209.2,-31.8,207.2,-29.3,204.5,-29.3,202.9,-29.3,201.2,-30.3,199.1,-31.5,198,-33.8,196.6,-36.4,196.4,-37.1,196.2,-37.7,196.2,-39.8,196.2,-41.8,196.7,-43.8,196.9,-44.7,197.3,-45.6,198.1,-48.1,199.5,-50,199.8,-50.5,200.4,-51.1,200.9,-51.6,201.5,-52.1,202.6,-53,204.1,-54.1,206.7,-56.1,206.7,-58.5,206.7,-59.3,206.2,-60.4,205.6,-61.5,205,-62.7,204.9,-62.9,204.7,-63.2,204.3,-63.5,202.5,-63.6,200.3,-63.6,200,-63.7,199.8,-63.7,199.1,-64,198.7,-64.2,196.3,-64.2,193.3,-64.2,193.1,-64,192.4,-63.3,191.2,-62.9,190,-62.5,189.2,-61.7,187.8,-60.5,187.2,-60.2,186.1,-59.4,185.4,-58.7,185,-58.1,184.2,-56.8,183.9,-56.2,183.7,-54.9,183.5,-53.8,183.5,-53.1,183.5,-50.6,184,-50.3,184.3,-50,187.5,-50,188.1,-50,192.5,-50.5,192.6,-50.5,196,-50.4,198.1,-50.4,199.2,-50.8,199.4,-50.8,200.4,-51.1,201.1,-51.3,202.3,-51.6,203,-51.8,204,-52,207.2,-52.8,209,-54,213.9,-57.2,216.2,-59.8,218.3,-62.3,218.8,-65.2,219,-66.1,219,-66.9,219,-67.7,218.5,-68.6,218,-70,216.5,-71.7,214.8,-73.6,213.5,-74.7,211.9,-75.8,211.3,-76.1,211.3,-76.1,211.2,-76.1,210.5,-76.4,208.7,-76.7,206.7,-77,206.1,-77.3,206.1,-77.3,206,-77.3,205.6,-77.5,203.5,-78.7,203.3,-78.8,202,-79.9,201.6,-80.2,201,-80.6,200.5,-80.8,200.2,-81.2,199.8,-81.6,198,-85.4,197.7,-86,197.5,-86.5,195.9,-89.7,195.8,-89.8,195.7,-90.2,195.7,-94.2,195.7,-96.9,196,-98.4,196,-98.8,197.5,-101.9,198.1,-103.9,200.2,-105.7,201.7,-106.8,203,-107.1,203.3,-107.2,205.1,-107.2,205.7,-107.2,206.4,-107.1,210.3,-106.8,213,-104.2,215.5,-101.7,215.5,-99.3,215.5,-97.7,213.7,-96.1,212,-94.7,210.6,-94.7,209.2,-94.7,207.7,-95.8,205.7,-97.3,205.7,-99.9,205.7,-100.8,205.5,-101.4,205.2,-101.9,205.2,-103.3,205.2,-105.4,206.4,-107.1,206.6,-107.5,206.8,-107.8,207.9,-109.1,211.7,-113.7,212.1,-114.2,216,-115.9,217.8,-117,218.3,-117.1,218.8,-117.2,221.2,-117.2,224,-117.2,227.9,-115.7,230.9,-114.5,232,-113.7,235.9,-110.4,236.5,-109.6,237.7,-108.1,237.7,-105.4,237.7,-99.5,230.2,-99.6,225.7,-99.6,225.1,-99.5,222.7,-99.1,222.7,-97,222.7,-96.4,223.1,-95.8]}},119).wait(1));

	// cma lata3
	this.instance_1 = new lib.cma();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-312.5,-148.5,1,1,0,0,180,-245.7,-99.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[-312.4,-148.4,-311.7,-149,-309.4,-150,-307.2,-150.9,-306.9,-150.9,-305.4,-150.9,-303.9,-149.7,-302.2,-148.3,-301.4,-145.9,-301.3,-145.6,-300.6,-144.5,-299.9,-143.7,-299.9,-142.9,-299.9,-141.5,-299.9,-140.1,-299.9,-133.5,-304.9,-131,-307.2,-129.7,-310,-129.5,-310.6,-129.5,-311.1,-129.5,-312.7,-129.5,-314.2,-130.4,-315.3,-131,-316.4,-132,-318.9,-134.2,-318.9,-136.2,-318.9,-138,-316.9,-139.5,-315.3,-140.5,-314.1,-140.5,-312,-140.5,-311,-138.2,-309.9,-136,-309.9,-131.5,-309.9,-130.4,-310,-129.5,-310.2,-127.9,-310.9,-126.6,-312.8,-122.5,-318.7,-121.1,-319,-121,-319.2,-121,-322.2,-120.4,-324.2,-120.1,-325.4,-119.9,-326.2,-119.7,-330.7,-118.9,-332.9,-117.5,-332.8,-116.2,-330.9,-115,-329.2,-114,-328.1,-114,-327.6,-114,-326.3,-114.5,-325.1,-114.9,-324,-115.6,-323.7,-115.8,-323.4,-116,-321.6,-117.3,-321.4,-117.3,-321,-117.5,-318.9,-117.5,-310.4,-117.5,-310.4,-109.7,-310.4,-106.9,-310.8,-105.9,-311.2,-105,-312.9,-102.9,-313.4,-102.2,-314.2,-101.3,-314.5,-100.9,-315,-100.5,-316.7,-98.3,-319.1,-97.5,-319.2,-97.5,-319.6,-97.4,-321,-97,-323.5,-97,-323.7,-97,-324,-97,-325.8,-97,-326.8,-97.3,-328.3,-97.7,-330,-99,-330.6,-99.4,-331.1,-99.9,-332,-100.7,-332.8,-101.8,-333.8,-103,-333.8,-103.5,-334,-103.7,-334,-103.7,-334,-106.4,-328.5,-108.4,-325.8,-109.5,-323,-110,-320,-110,-317.6,-107.2,-316.5,-105.9,-315.5,-104,-315.3,-103.6,-315.1,-103.3,-314.7,-102.3,-314.3,-101.3,-313,-97.9,-313,-95,-313,-92.3,-314.3,-90.1,-315.5,-88.5,-317.3,-87.1,-318.5,-86.3,-320,-85.5,-325.2,-82.7,-330.2,-82.5,-330.7,-82.5,-331.2,-82.5,-331.2,-82.5,-331.5,-82.5,-331.7,-82.5,-332,-82.5,-335.1,-82.5,-335.6,-82.5,-336.2,-82.5,-340.5,-83,-344.7,-83.5,-345.4,-83.5,-350.7,-83.5,-352.4,-82.5,-354,-81.5,-354.2,-78.5,-354.4,-77.7,-354.4,-77,-354.4,-75.1,-353.4,-73,-352,-70,-349.4,-70,-348.6,-70,-346,-72.2,-342.6,-75,-341.4,-76,-341,-76.4,-340.9,-76.5,-340.2,-77,-338.3,-77.5,-337.4,-77.7,-336.9,-77.8,-336.4,-77.9,-336.4,-78,-335.7,-78.5,-333.6,-78.5,-330,-78.5,-328.9,-76,-328.4,-74.9,-328.4,-72.7,-328.4,-70.2,-330.4,-68,-332.2,-66,-333.6,-66,-336.5,-66,-338.5,-69.5,-340.2,-73.7,-341,-75,-341.2,-75.5,-341.5,-76,-342.7,-78.4,-343.1,-78.6,-344.5,-80.5,-346.5,-80.5,-347.5,-80.5,-352.5,-79.5,-352.8,-79.4,-353.3,-79,-353.8,-78.6,-354.3,-78.5,-354.3,-78.5,-354.5,-78.5,-355.2,-78.4,-355.8,-77.7,-356.2,-77.5,-357,-77,-360,-74.7,-361.6,-71.7,-361.6,-71.6,-361.7,-71.5,-362.9,-69.2,-362.9,-67.2,-362.9,-63.5,-360.5,-60,-359.7,-59,-358.9,-58,-354.8,-53.5,-350.1,-53.5,-347.6,-53.5,-344.2,-57.8,-340.9,-62,-336.4,-62,-330.9,-62,-330.9,-55.8,-330.9,-52.3,-333.1,-50.8,-333.2,-50.7,-333.5,-50.6,-335.1,-49.8,-339.1,-49.7,-343.4,-49.7,-344.7,-49.2,-347.4,-48.3,-347.4,-45,-347.4,-41.7,-345.1,-40.5,-343.9,-39.9,-342.6,-40,-341.1,-40,-339.6,-41.3,-338.2,-42.5,-336.9,-42.5,-334,-42.5,-333.2,-40,-332.9,-39.1,-332.9,-37.8,-332.9,-35.6,-335.4,-34.5,-337.9,-33.5,-342.9,-33.5,-347.7,-33.5,-350,-35.1,-350.8,-35.8,-351.4,-36.5,-352.9,-38.6,-352.9,-44.5,-352.9,-47.4,-352.6,-48.3,-351.7,-50.3,-348.4,-52,-344.5,-54,-341.4,-54,-337.2,-54,-334.9,-52.4,-334,-51.8,-333.1,-50.8,-331.6,-49.2,-329.9,-46.5,-327.8,-43.4,-327.2,-40.6,-326.9,-38.9,-326.9,-35.5,-326.9,-32.8,-327.1,-31.6,-327.5,-29.3,-328.9,-27.5,-329.1,-27.2,-330.4,-25,-330.7,-24.4,-330.9,-24,-331.6,-22.7,-331.9,-22.5,-332.2,-22.2,-333.2,-21.3,-334.2,-20.5,-335.1,-20.5,-336.1,-20.5,-337.5,-22.2,-339.1,-24.2,-339.9,-25,-339.9,-25.7,-339.9,-26.5,-336.4,-26.5,-332.9,-26.5,-331.7,-25.4,-330.9,-24,-329.4,-21.3,-329.4,-17.8,-329.4,-14.2,-330.4,-11.5,-331.7,-8.4,-334.4,-6.5,-338,-4,-343.6,-4,-349.5,-4,-353.9,-8,-358.9,-12.6,-358.9,-20,-358.9,-26.5,-351.9,-26.5,-347.5,-26.5,-345.4,-23,-344,-20.7,-343.9,-18,-343.9,-17.8,-343.9,-17.5,-343.9,-11.5,-347.9,-11.5,-348.4,-11.5,-349.4,-12.5,-350.4,-13.5,-350.4,-14,-350.4,-15.7,-347.4,-17,-345.2,-17.9,-343.9,-18,-343.7,-18,-343.6,-18,-340.9,-18,-336.9,-15.9,-333.5,-14.1,-330.4,-11.5,-329.9,-11,-329.4,-10.5,-327.1,-8.5,-325.2,-4.3,-325,-3.9,-324.9,-3.5,-323.9,-1.3,-323.9,2.2,-323.9,4.9,-324,5.5,-324.5,7.2,-326.4,8.5,-327,8.9,-328.7,11,-330.7,13,-332.4,13,-333.7,13,-335.4,9.5,-336.9,6.3,-336.9,4.5,-336.9,-1.8,-334.4,-3.5,-332.9,-4.5,-328.4,-4.5,-326.5,-4.5,-325.2,-4.3,-324.5,-4.2,-324,-4,-321.1,-3.1,-319.4,0,-317.2,3.6,-316.9,4.5,-316.4,6,-316.4,8.5,-316.4,12.2,-316.9,13,-317.4,13.7,-323.4,19,-324.5,20,-329.4,22.1,-332.4,23.3,-332.4,26.2,-332.4,28.6,-330.4,30,-328.9,31,-327.1,31,-324.7,31,-320,27.1,-315.8,23.7,-314.9,22,-313.4,17.6,-312.7,16.2,-311.7,14,-307.6,14,-304.8,14,-303.4,16.5,-302.4,18.2,-302.4,20.2,-302.4,24.1,-306.7,27.5,-311.4,31,-318.4,32,-333.2,34,-337.4,34,-341,34,-343,32.5,-345.5,30.6,-348.4,25,-350.2,21.5,-351.9,17.9,-352.4,16.6,-352.4,11.7,-352.4,11.5,-352.4,11.3,-352.3,5.3,-350.8,3,-349.3,0.5,-345.4,0.5,-342.4,0.5,-340.9,2.5,-339.4,4.4,-339.4,7.7,-339.4,10.6,-341.9,12,-343.7,13,-346.1,13,-349.6,13,-352.4,11.3,-356,9.1,-358.3,4,-361.4,-2.8,-361.4,-12.5,-361.4,-17.2,-361.1,-19,-360.5,-21.9,-358.4,-26,-356.5,-29.6,-355.6,-30.6,-354.7,-31.3,-353.7,-32.1,-352.4,-33.2,-350.9,-34.5,-350.5,-34.8,-350,-35.1,-349,-35.9,-347.2,-36.8,-344,-38.5,-341.9,-39,-339.9,-39.5,-337.1,-39.8,-334.9,-40,-333.6,-40,-333.4,-40,-333.2,-40,-330.8,-39.9,-329.9,-39,-328.9,-38.1,-328.9,-35.5,-328.9,-30.1,-335.9,-28.5,-338.2,-28,-344.1,-28,-348.2,-28,-350.7,-29.5,-352,-30.3,-353.7,-32.1,-355.4,-33.7,-357.4,-36,-361.7,-41.2,-362.4,-42.9,-362.9,-44.3,-362.9,-49.5,-363,-50.9,-362.9,-51.9,-362.7,-53.6,-361.9,-57,-361.7,-57.9,-361,-58.9,-360.6,-59.5,-360.5,-60,-360.4,-60.3,-360.4,-60.5,-360.3,-61.3,-360.1,-62.3,-359.9,-63.2,-359.9,-63.5,-359,-64.7,-358.4,-65.5,-358.2,-65.6,-358.1,-65.7,-357.7,-66.2,-357.4,-66.5,-356.2,-67.5,-355.7,-67.7,-355,-68.2,-354,-68.5,-353.5,-68.5,-352,-69,-350.5,-69.5,-349.6,-69.5,-348.7,-69.5,-347.9,-69,-346.9,-68.3,-346.9,-67.2,-346.9,-65.5,-348.9,-64,-350.8,-62.5,-352.9,-62.5,-355.5,-62.5,-358.1,-65.7,-359.7,-67.7,-361.4,-71,-361.5,-71.2,-361.7,-71.5,-364.9,-78.1,-364.9,-80.7,-364.9,-84.5,-361.4,-88.5,-357.9,-92.5,-354.6,-92.5,-353.9,-92.5,-351.9,-91,-351.7,-90.8,-351.6,-90,-351.4,-89.1,-351.4,-89,-350.7,-87.7,-350,-87.4,-348.3,-86.6,-347.4,-86,-344.9,-86,-342.4,-86,-342.2,-86.4,-342.2,-86.8,-341.9,-88.6,-341.7,-89.5,-341.3,-91.7,-338.4,-93,-338.1,-93,-335.3,-95,-333.9,-95.9,-332.9,-96.3,-332.3,-96.5,-331.9,-96.5,-328.4,-96.5,-324.2,-93.6,-322.6,-92.5,-320.9,-91,-318.7,-89,-317.2,-87.1,-314.4,-83.3,-314.4,-79.7,-314.4,-76.5,-316.9,-76,-319,-76,-321.1,-76,-325.4,-76,-326.2,-76.2,-328.1,-77,-329,-80.5,-329,-81,-330.1,-82.5,-330.2,-82.5,-330.2,-82.6,-330.2,-82.7,-330.3,-82.7,-331.6,-84.5,-332,-85,-332.5,-86.2,-333,-88,-333,-88,-333,-88,-333.5,-89.9,-333.5,-91.5,-333.5,-93,-333.2,-94.4,-333.2,-95.4,-333,-96.3,-332.3,-98.7,-331.1,-99.9,-330.3,-100.6,-329.5,-101,-327.3,-101.8,-325.7,-102.3,-323.1,-103.2,-321.8,-103.4,-321.5,-103.5,-319.8,-103.5,-319.1,-103.5,-318,-103.5,-316.5,-103.5,-315.1,-103.3,-314,-103.2,-313,-102.9,-310.3,-102.3,-308,-101,-302.5,-97.9,-302.5,-92.7,-302.5,-89.6,-304,-88.5,-305.3,-87.5,-308.5,-87.5,-311.7,-87.5,-314.3,-90.1,-315.8,-91.5,-317,-93.5,-318.3,-95.7,-319.1,-97.5,-320,-99.9,-320,-101.7,-320,-102.8,-319.9,-103.5,-319.8,-104.4,-319.8,-104.8,-319.5,-105.8,-318,-107,-317.8,-107,-317.6,-107.2,-316.9,-107.5,-315.3,-108,-313.6,-108.5,-312.5,-110,-313.1,-110.6,-315.3,-111.3,-319.3,-112.5,-319.5,-112.6,-322.8,-113.7,-324.1,-115.6,-325,-116.9,-325,-118.5,-325,-119.5,-324.3,-120.1,-323.7,-120.8,-322.3,-121,-320.9,-121.2,-319.5,-121,-319.4,-121,-319.3,-121,-316.6,-121,-315.5,-120.5,-315.1,-120.3,-313.3,-119.3,-311.8,-118.5,-311.5,-118.5,-310.8,-118.5,-310.3,-119.5,-309.8,-120.5,-309.5,-122.5,-309.5,-124.4,-310.5,-126,-310.7,-126.2,-311,-126.6,-311.6,-127.4,-313,-129,-313.6,-129.6,-314.3,-130.4,-315.1,-131,-316,-131.5,-316.2,-131.8,-316.5,-132,-317.3,-132.5,-319,-133.5,-321.8,-135.3,-324,-135.5,-325.3,-136,-329,-136,-332.5,-136,-334.5,-135.3,-339.6,-133.5,-343,-132.3,-345.3,-131.5,-347,-131,-352.3,-129.3,-356,-125.2,-359.5,-121.4,-359.5,-118,-359.5,-113.9,-356.5,-111.5,-354,-109.5,-351,-109.5,-347.1,-109.5,-344,-111.5,-340.5,-113.7,-340.5,-117,-340.5,-118.2,-342.2,-120.2,-343.1,-121.4,-343.8,-122,-344.2,-122.3,-344.5,-122.5,-345.7,-123.3,-347.3,-123.4,-347.7,-123.5,-350.7,-123.5,-354.3,-123.5,-354.5,-123.5,-356.5,-123.1,-356.5,-121.2,-356.5,-119.2,-353.5,-117.5,-351,-116,-349.7,-116,-346,-116,-344.5,-120,-344.1,-120.9,-343.8,-122,-343,-125.8,-343,-132.3,-343,-132.4,-343,-132.5,-343,-138.4,-348.3,-140.4,-348.3,-140.4,-348.5,-140.5,-351.2,-141.5,-357.5,-141.5,-365.3,-141.7,-368.4,-140.1,-371,-138.9,-371,-135.7,-371,-134.3,-370.6,-133.5,-369.9,-132.4,-368,-131.5,-366.4,-130.7,-365.6,-130.4,-364.2,-130,-362.5,-130,-357,-130,-353.1,-133.7,-351.5,-135.5,-348.3,-140.4,-347.8,-141.3,-347.2,-142.2,-343.5,-148.1,-340.3,-150.6,-335.6,-154.5,-328.7,-154.5,-325.2,-154.5,-322.8,-150.7,-320.6,-147.4,-316,-148.5]}},239).wait(1));

	// cma lata2
	this.instance_2 = new lib.cma();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-280.2,-158.1,1,1,0,0,0,-245.7,-99.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({guide:{path:[-280.1,-158.1,-281.7,-157.4,-283.9,-155.5,-285.4,-154.2,-288.4,-151.4,-288.6,-151.2,-290.2,-148.3,-291.9,-145.3,-291.9,-144.9,-291.9,-140.7,-286.1,-139.4,-283.2,-138.7,-280.1,-138.9,-275.2,-138.9,-270.8,-141.1,-270.5,-141.3,-270.2,-141.4,-263.6,-144.8,-263.4,-144.9,-260,-146,-254.8,-148.2,-249.7,-150.5,-246.9,-151.9,-248.7,-152.7,-249.6,-152.8,-250.1,-152.9,-252.6,-152.9,-258.5,-152.9,-263.9,-150.4,-270.4,-147.3,-270.4,-142.6,-270.4,-142,-270.2,-141.4,-269.8,-139.7,-268.4,-138.9,-266.7,-137.9,-263.9,-137.9,-261.2,-137.9,-255.4,-141,-248,-145.1,-247.4,-145.4,-244.6,-146.4,-241,-147.3,-237.2,-148.4,-235.6,-148.4,-234.5,-148.4,-232.9,-146.4,-231.4,-144.5,-231.4,-143.4,-231.4,-139,-239.2,-138.3,-247.5,-138.5,-248.4,-138.4,-252,-137.7,-256.6,-135.7,-262.4,-133,-262.4,-130.6,-262.4,-129,-259.3,-127.9,-256.7,-126.9,-253.9,-126.9,-248.4,-126.9,-243.8,-131.7,-238.7,-137,-234.4,-137.9,-234.3,-137.9,-233.5,-138.4,-232.7,-138.9,-231.9,-138.9,-230.9,-138.9,-229.9,-138.9,-229.8,-138.9,-229.7,-138.9,-229.2,-139,-228.3,-139.7,-227.4,-140.3,-226.4,-140.4,-225.2,-140.5,-222.8,-140.4,-221.6,-140.4,-219.9,-140.4,-217.5,-140.4,-213.4,-140.4,-210.4,-139.7,-210.4,-136.1,-210.4,-132.4,-214.7,-130,-216.4,-129,-218.8,-128.2,-221.9,-127.2,-228.4,-126.4,-237.7,-125.5,-241,-124.9,-246.4,-123.7,-246.4,-119.9,-246.4,-116.4,-240.7,-116.2,-237.7,-116.2,-233.9,-116.9,-228,-117.5,-226.5,-115.3,-225.9,-114.2,-225.9,-109.9,-225.9,-109.6,-225.9,-109.3,-226,-107.4,-226.9,-104.8,-227.6,-102.8,-228.9,-100.4,-232.7,-92.9,-237.6,-92.9,-241.2,-92.9,-243.2,-94.6,-244.2,-95.6,-245,-97.2,-245.2,-97.8,-245.4,-98.4,-245.7,-99.4,-246.3,-102.7,-246.9,-105.9,-246.9,-106.1,-246.9,-107.5,-245.4,-108.3,-243.9,-109.1,-240.9,-109.4,-237.9,-109.6,-234.6,-109.4,-226.5,-109.4,-226.4,-109.4,-226.1,-109.3,-225.9,-109.3,-222.3,-108.7,-220.4,-106.4,-214.6,-99.2,-214.2,-98.5,-213.4,-97,-213.4,-93.4,-213.4,-89.2,-213.7,-88.5,-214.4,-87.1,-218.9,-83.4,-221.5,-81.2,-224,-80.3,-226.5,-79.4,-230.1,-79.4,-236.2,-79.4,-241.4,-83.9,-246.4,-88.2,-246.4,-93.4,-246.4,-95.8,-245,-97.2,-244.6,-97.6,-244.2,-97.9,-240.8,-99.5,-238.4,-101.4,-236.5,-102.7,-233.7,-103.8,-230.7,-104.9,-228.6,-104.9,-227.7,-104.9,-226.9,-104.8,-221.9,-104.4,-219.9,-101.4,-218.4,-99.2,-218.4,-94.9,-218.4,-90.9,-218.7,-90.2,-219.1,-89.5,-220.5,-88.2,-222,-86.9,-224.9,-84.9,-226.9,-84.9,-228.9,-84.9,-228.9,-85,-229.1,-85.7,-229.4,-86.4,-229.4,-87.1,-229.4,-88.6,-227.4,-89.4,-226,-89.9,-224.6,-89.9,-222,-89.9,-220.5,-88.2,-220.1,-87.9,-219.9,-87.4,-218.9,-85.7,-218.9,-83.4,-218.9,-81.5,-221,-79.9,-221.4,-79.6,-225.6,-76.8,-232.4,-72.5,-232.4,-66.9,-232.4,-61.4,-223.9,-58.9,-218.8,-57.4,-213.4,-57.4,-210.2,-57.4,-208.4,-58.4,-205.9,-59.7,-205.9,-62.4,-205.9,-67.1,-211.9,-67.4,-218.2,-66.9,-218.9,-66.9,-219.8,-66.9,-220.4,-67.9,-220.9,-68.8,-220.9,-69.9,-220.9,-71.8,-216,-74.9,-211.5,-77.9,-209.9,-77.9,-209.2,-77.9,-203.5,-77.8,-201,-77.9,-199.7,-78.6,-198.4,-79.2,-198.4,-80.4,-198.4,-81.4,-200.5,-83.5,-203.2,-85.9,-203.9,-87.9,-204.9,-90.6,-205.2,-91.9,-205.4,-93,-205.4,-94.9,-205.4,-99,-204.4,-100.4,-203.2,-101.9,-199.4,-101.9,-194.4,-101.9,-190,-93.9,-187.6,-89.5,-186.7,-88.4,-184.8,-85.9,-182.6,-85.9,-182.5,-85.9,-178.2,-87.9,-173.8,-89.9,-172.9,-90.4,-172.5,-90.5,-172.2,-90.7,-170.9,-91.7,-169.4,-93.4,-167.5,-95.7,-166.4,-96.4,-160.9,-100,-157,-103.1,-155.2,-104.4,-150.6,-104.4,-145.6,-104.4,-142.9,-101.4,-140.4,-98.6,-140.4,-94.1,-140.4,-91,-144.4,-89.2,-148.8,-87.8,-149.9,-87.4,-150.8,-87,-152.2,-86.1,-153.8,-85.1,-155.4,-84.4,-156.5,-83.9,-161.9,-83.9,-166.5,-83.9,-167.6,-84.2,-169.6,-84.8,-170.9,-87.4,-171.5,-88.7,-172.2,-90.7,-172.8,-92.3,-173.4,-94.4,-173.7,-95.5,-174,-97.3,-174.2,-99,-174.4,-99.4,-174.9,-101.5,-178,-106.2,-180.9,-110.8,-182.4,-111.9,-188.2,-116,-190,-116.7,-190.4,-116.8,-192.9,-116.8,-193.7,-116.9,-194.9,-116.9,-197.7,-116.9,-200.4,-116.9,-203.4,-116.2,-203.4,-112.6,-203.4,-111.5,-201.9,-110.9,-200.6,-110.4,-198.9,-110.4,-195.4,-110.4,-193.9,-112.9,-192.9,-114.5,-192.9,-116.8,-192.9,-116.9,-192.9,-116.9,-192.9,-118.8,-193.8,-121,-195,-123.7,-197.4,-125.4,-199.2,-126.7,-200.7,-126.9,-202.8,-126.9,-204.4,-126.9,-207.1,-126.9,-209.5,-126.4,-212.4,-125.9,-214.9,-124.9,-220.9,-122.3,-220.9,-117.6,-220.9,-115.2,-218.9,-113.4,-216.7,-111.4,-213.4,-111.4,-209.9,-111.4,-208.4,-114.9,-207.4,-117,-207.4,-119.6,-207.4,-123.7,-209.5,-126.4,-210,-126.9,-210.5,-127.4,-211.9,-128.7,-214.7,-130,-216.1,-130.7,-217.9,-131.4,-218.2,-131.5,-221.1,-131.8,-223.6,-132.1,-224.4,-132.9,-224.7,-133.2,-227.9,-135.3,-229.9,-136.6,-229.9,-137.9,-229.9,-138.4,-229.7,-138.9,-229.4,-139.4,-229,-139.9,-227.7,-141.1,-227.4,-141.9,-226.4,-144,-226.4,-145.9,-226.4,-152,-233.3,-152.7,-241.2,-152.3,-242.9,-152.9,-243,-152.9,-246.2,-156,-249.2,-159,-252.4,-159.4,-256.7,-159.9,-262.9,-159.9,-266.7,-159.9,-271.2,-159.4,-273.6,-159.1,-275.1,-159]}},119).wait(1).to({x:-280.2,y:-158.1},0).to({guide:{path:[-280.1,-158.1,-281.7,-157.4,-283.9,-155.5,-285.4,-154.2,-288.4,-151.4,-288.6,-151.2,-290.2,-148.3,-291.9,-145.3,-291.9,-144.9,-291.9,-140.7,-286.1,-139.4,-283.2,-138.7,-280.1,-138.9,-275.2,-138.9,-270.8,-141.1,-270.5,-141.3,-270.2,-141.4,-263.6,-144.8,-263.4,-144.9,-260,-146,-254.8,-148.2,-249.7,-150.5,-246.9,-151.9,-248.7,-152.7,-249.6,-152.8,-250.1,-152.9,-252.6,-152.9,-258.5,-152.9,-263.9,-150.4,-270.4,-147.3,-270.4,-142.6,-270.4,-142,-270.2,-141.4,-269.8,-139.7,-268.4,-138.9,-266.7,-137.9,-263.9,-137.9,-261.2,-137.9,-255.4,-141,-248,-145.1,-247.4,-145.4,-244.6,-146.4,-241,-147.3,-237.2,-148.4,-235.6,-148.4,-234.5,-148.4,-232.9,-146.4,-231.4,-144.5,-231.4,-143.4,-231.4,-139,-239.2,-138.3,-247.5,-138.5,-248.4,-138.4,-252,-137.7,-256.6,-135.7,-262.4,-133,-262.4,-130.6,-262.4,-129,-259.3,-127.9,-256.7,-126.9,-253.9,-126.9,-248.4,-126.9,-243.8,-131.7,-238.7,-137,-234.4,-137.9,-234.3,-137.9,-233.5,-138.4,-232.7,-138.9,-231.9,-138.9,-230.9,-138.9,-229.9,-138.9,-229.8,-138.9,-229.7,-138.9,-229.2,-139,-228.3,-139.7,-227.4,-140.3,-226.4,-140.4,-225.2,-140.5,-222.8,-140.4,-221.6,-140.4,-219.9,-140.4,-217.5,-140.4,-213.4,-140.4,-210.4,-139.7,-210.4,-136.1,-210.4,-132.4,-214.7,-130,-216.4,-129,-218.8,-128.2,-221.9,-127.2,-228.4,-126.4,-237.7,-125.5,-241,-124.9,-246.4,-123.7,-246.4,-119.9,-246.4,-116.4,-240.7,-116.2,-237.7,-116.2,-233.9,-116.9,-228,-117.5,-226.5,-115.3,-225.9,-114.2,-225.9,-109.9,-225.9,-109.6,-225.9,-109.3,-226,-107.4,-226.9,-104.8,-227.6,-102.8,-228.9,-100.4,-232.7,-92.9,-237.6,-92.9,-241.2,-92.9,-243.2,-94.6,-244.2,-95.6,-245,-97.2,-245.2,-97.8,-245.4,-98.4,-245.7,-99.4,-246.3,-102.7,-246.9,-105.9,-246.9,-106.1,-246.9,-107.5,-245.4,-108.3,-243.9,-109.1,-240.9,-109.4,-237.9,-109.6,-234.6,-109.4,-226.5,-109.4,-226.4,-109.4,-226.1,-109.3,-225.9,-109.3,-222.3,-108.7,-220.4,-106.4,-214.6,-99.2,-214.2,-98.5,-213.4,-97,-213.4,-93.4,-213.4,-89.2,-213.7,-88.5,-214.4,-87.1,-218.9,-83.4,-221.5,-81.2,-224,-80.3,-226.5,-79.4,-230.1,-79.4,-236.2,-79.4,-241.4,-83.9,-246.4,-88.2,-246.4,-93.4,-246.4,-95.8,-245,-97.2,-244.6,-97.6,-244.2,-97.9,-240.8,-99.5,-238.4,-101.4,-236.5,-102.7,-233.7,-103.8,-230.7,-104.9,-228.6,-104.9,-227.7,-104.9,-226.9,-104.8,-221.9,-104.4,-219.9,-101.4,-218.4,-99.2,-218.4,-94.9,-218.4,-90.9,-218.7,-90.2,-219.1,-89.5,-220.5,-88.2,-222,-86.9,-224.9,-84.9,-226.9,-84.9,-228.9,-84.9,-228.9,-85,-229.1,-85.7,-229.4,-86.4,-229.4,-87.1,-229.4,-88.6,-227.4,-89.4,-226,-89.9,-224.6,-89.9,-222,-89.9,-220.5,-88.2,-220.1,-87.9,-219.9,-87.4,-218.9,-85.7,-218.9,-83.4,-218.9,-81.5,-221,-79.9,-221.4,-79.6,-225.6,-76.8,-232.4,-72.5,-232.4,-66.9,-232.4,-61.4,-223.9,-58.9,-218.8,-57.4,-213.4,-57.4,-210.2,-57.4,-208.4,-58.4,-205.9,-59.7,-205.9,-62.4,-205.9,-67.1,-211.9,-67.4,-218.2,-66.9,-218.9,-66.9,-219.8,-66.9,-220.4,-67.9,-220.9,-68.8,-220.9,-69.9,-220.9,-71.8,-216,-74.9,-211.5,-77.9,-209.9,-77.9,-209.2,-77.9,-203.5,-77.8,-201,-77.9,-199.7,-78.6,-198.4,-79.2,-198.4,-80.4,-198.4,-81.4,-200.5,-83.5,-203.2,-85.9,-203.9,-87.9,-204.9,-90.6,-205.2,-91.9,-205.4,-93,-205.4,-94.9,-205.4,-99,-204.4,-100.4,-203.2,-101.9,-199.4,-101.9,-194.4,-101.9,-190,-93.9,-187.6,-89.5,-186.7,-88.4,-184.8,-85.9,-182.6,-85.9,-182.5,-85.9,-178.2,-87.9,-173.8,-89.9,-172.9,-90.4,-172.5,-90.5,-172.2,-90.7,-170.9,-91.7,-169.4,-93.4,-167.5,-95.7,-166.4,-96.4,-160.9,-100,-157,-103.1,-155.2,-104.4,-150.6,-104.4,-145.6,-104.4,-142.9,-101.4,-140.4,-98.6,-140.4,-94.1,-140.4,-91,-144.4,-89.2,-148.8,-87.8,-149.9,-87.4,-150.8,-87,-152.2,-86.1,-153.8,-85.1,-155.4,-84.4,-156.5,-83.9,-161.9,-83.9,-166.5,-83.9,-167.6,-84.2,-169.6,-84.8,-170.9,-87.4,-171.5,-88.7,-172.2,-90.7,-172.8,-92.3,-173.4,-94.4,-173.7,-95.5,-174,-97.3,-174.2,-99,-174.4,-99.4,-174.9,-101.5,-178,-106.2,-180.9,-110.8,-182.4,-111.9,-188.2,-116,-190,-116.7,-190.4,-116.8,-192.9,-116.8,-193.7,-116.9,-194.9,-116.9,-197.7,-116.9,-200.4,-116.9,-203.4,-116.2,-203.4,-112.6,-203.4,-111.5,-201.9,-110.9,-200.6,-110.4,-198.9,-110.4,-195.4,-110.4,-193.9,-112.9,-192.9,-114.5,-192.9,-116.8,-192.9,-116.9,-192.9,-116.9,-192.9,-118.8,-193.8,-121,-195,-123.7,-197.4,-125.4,-199.2,-126.7,-200.7,-126.9,-202.8,-126.9,-204.4,-126.9,-207.1,-126.9,-209.5,-126.4,-212.4,-125.9,-214.9,-124.9,-220.9,-122.3,-220.9,-117.6,-220.9,-115.2,-218.9,-113.4,-216.7,-111.4,-213.4,-111.4,-209.9,-111.4,-208.4,-114.9,-207.4,-117,-207.4,-119.6,-207.4,-123.7,-209.5,-126.4,-210,-126.9,-210.5,-127.4,-211.9,-128.7,-214.7,-130,-216.1,-130.7,-217.9,-131.4,-218.2,-131.5,-221.1,-131.8,-223.6,-132.1,-224.4,-132.9,-224.7,-133.2,-227.9,-135.3,-229.9,-136.6,-229.9,-137.9,-229.9,-138.4,-229.7,-138.9,-229.4,-139.4,-229,-139.9,-227.7,-141.1,-227.4,-141.9,-226.4,-144,-226.4,-145.9,-226.4,-152,-233.3,-152.7,-241.2,-152.3,-242.9,-152.9,-243,-152.9,-246.2,-156,-249.2,-159,-252.4,-159.4,-256.7,-159.9,-262.9,-159.9,-266.7,-159.9,-271.2,-159.4,-273.6,-159.1,-275.1,-159]}},119).wait(1));

	// cma lata1
	this.instance_3 = new lib.cma();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-220.7,-105.9,1,1,0,0,0,-245.7,-99.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-217.7,y:-102.4},119).wait(1).to({x:-220.7,y:-105.9},0).to({x:-217.7,y:-102.4},119).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-317.8,-165.1,551.5,80.4);


(lib.parkaOkno = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// facet1
	this.instance = new lib.facet();
	this.instance.parent = this;
	this.instance.setTransform(-396.1,-328.6,1,1,0,0,0,-392.5,-330.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},78).wait(27));

	// ramie
	this.instance_1 = new lib.Wygenerujklatkipośrednie29("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-401.6,-336.5,0.999,0.999,-10.4,0,0,-7,-10.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(78).to({_off:false},0).wait(27));

	// facet2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9E523F").s().p("AhjHUQgHgFgDgHQgDgHgBgIQAAgJAGgGQAHgGAAgLIABgDIAAgDIgDgFIgEgEIgEgEIgBgDIAAgEIAAgIIABgHQACgFAEgDQgFgQgHgUQgIgSABgUQAAgYAQgSQAHgHAHgGIgBgCIgBgEIAAgEIABgDQADgEAEgDIAOgFIAAgDIgEgEIgBgDIAAgFIAAgDIAAgEIAAgBIgIgWQgBgjgzg1IgOgNIgIgSQgLgagEgOIgBgEQgCgzAbgrQAMgTAPgNQgBgGACgHQAEgagDgYQgEgagPgUQgwgYAAhBIAAgQQgBgwAhgiIAEgEQAYgZAogPQCFAAADBxQAKAEAQAKQAiAWAIAPQACACAAAFIAAAEQgCAHgDACQgHAJgOAAQgKAAgHgFIgDAAIgBACIgBADIgEASIgFAaQAMADAAALQAAAGgEAFIgFAGQgGAHgJgBIgIgBIgJABQgOABgRgJIgNAAIAAAOQABANgBAIIAAADQAIAHAWAOIAgATIARAOIAEAFIAOAUQAhAyAAApQAAAfgLALIgDAQQAHAMAEANQAEAKABAUIACAAIgBAdIAAAhIgCAKIgDAJIgBgBQgDAPgIAIQAMAmACArQACAmgBAnQgBAhgDAhQAAAEgCADQgJALgNgGQgXgMgaANQgFALgMgBIh7gBgAC9DCIABAFIAAABg");
	this.shape.setTransform(-392.5,-328.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9E523F").s().p("AiEHUQgIgFgCgHQgEgHgBgIQAAgJAGgGQAHgGABgLIABgDIAAgDIgEgFIgEgEIgDgEIgCgDIAAgEIAAgIIACgHQABgFAEgDQgFgQgHgUQgIgSABgUQABgYAQgSQAGgHAHgGIgBgCIgBgEIAAgEIABgDQADgEAEgDIAOgFIAAgDIgEgEIgBgDIAAgFIAAgDIAAgEIAAgBIgIgWQgBgjgzg1IgNgNIgJgSQgLgagEgOIgBgEQgCgzAbgrQAMgTAPgNQgBgGACgHQAEgagDgYQgEgagPgUQgwgYAAhBIABgQQgCgwAhgiIAFgEQAYgZAngPQCFAAADBxQAKAEAQAKQAjAWAHAPQACACABAFIgBAEQgCAHgDACQgHAJgOAAQgKAAgHgFIgCAAIgBACIgCADIgEASIgFAaQAMADAAALQAAAGgEAFIgEAGQgHAHgJgBIgIgBIgIABQgOABgQgJIgPAAIAAAOQACANgCAIIAAADQAIAHAXAOIAfATIARAOIAEAFIAOAUQAhAyAAApQAAAfgLALIgDAQQAHAMAEANQAEAKABAUIADgBQASgDAAANQABAJgIABQAMAEAAALQAAAKgGACQAGAGAaAKQATAJAAAJQABAGgHADQgGAFgHAAQgIAAgLgFQgXgBgOgIQgEAPgIAIQANAmACArQABAmgBAnQgBAhgCAhQAAAEgDADQgIALgNgGQgYgMgaANQgFALgKgBIh8gBgADJDXIgDABQgLAAgBgLIACgDIgBgCQgDgHgCgNIgJgWQgEgIAAgFIADgJIACgHQAAgYAUASIAHADQAXAJAAAdIAAAKIAAAGQAAARgBADQgDAPgQABIgDgBg");
	this.shape_1.setTransform(-389.1,-328.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9E523F").s().p("AhqCYIAIgRIACAAQACgMAFgSIACgLIgGgHQgygSgJhBIgBgOQgIgvAdgnIADgEQAVgdAlgUQCEgRASBxQAKACARAIQAlARAKAPQACABABAFIAAAFQgBAFgDADQgGAKgNABQgLACgHgEIgDgBIAAADIgBADIgBATIgDAaQANACABAKQABAGgDAFIgEAHQgGAHgIABIgJAAIgJADQgNABgSgGIgBAAQgFgEgLAGQgJAFgFAGIABAPQAAAJAEAMg");
	this.shape_2.setTransform(-392.5,-359.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9E523F").s().p("AiLE5QgHgFgDgHQgEgHAAgIQgBgJAGgGQAHgGABgLIABgDIAAgDIgDgFIgEgEIgEgEIgBgDIAAgEIAAgIIABgHQACgFADgDQgEgQgIgUQgIgSABgUQABgYAQgSQAGgHAIgGIgCgCIAAgEIAAgEIABgDQACgEAEgDIAOgFIAAgDIgDgEIgBgDIgBgFIAAgDIAAgEIABgBIgJgWQgBgigzg1IgNgNIgIgSQgLgagFgOIAAgFQgCgzAagrQAMgTAPgNIAAgEQAHgHAGgJIAGgLICFAAQADAKAGAKIAFALIAIAEIAQAOIAEAFIAOAUQAhAyAAAqQAAAfgLALIgCAQQAGAMAEANQAFAKABAUIACgBQATgDAAANQAAAJgIABQANAEAAALQAAAJgHACQAGAGAaAKQAUAJAAAJQAAAGgGADQgGAFgIAAQgHAAgLgFQgYgBgOgIQgEAPgHAIQAMAmACArQABAmgBAnQgBAhgCAhQAAAEgCADQgJALgNgGQgXgMgaANQgEALgMgBIh8gBgADDA8IgEABQgLAAAAgLIABgDIAAgCQgEgHgCgNIgJgWQgEgHAAgFIADgJIACgHQAAgYAUASIAIADQAWAJAAAcIAAAKIAAAGQAAARgBADQgDAPgQABIgCgBg");
	this.shape_3.setTransform(-388.5,-313);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9E523F").s().p("AiXHXQgIgFgCgHQgEgHgBgIQAAgIAGgGQAHgHABgKIABgEIAAgDIgEgEIgEgFIgDgDIgCgEIAAgEIAAgIIACgHQABgFAEgDQgFgQgHgTQgGgNgBgPIgBgBQgFgNgCgNQAAgXATgVIADgDQALgLAOgIIgFAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAIAHgCIgNgDIACgBIATAAIAAgBIgDgEIgBgEIABgEIAAgEIAAgDIABgBIgEgRIgBgGQACgjgtg6IgMgOIgGgUQgIgagDgNIAAgGIAAgCQACgRAFgRQAJgeATgYIAPgRQAEgIAUgYQAHgKAIgIIACgEIADgHIACAAIAAgDIAGgbIAEgLIgHgHIgBAAIgUgiQgZgoABgqQgBgZADgMQAEgWANgOQAHgGAIgMIANgRIAUgNQCEgRARBxQALACARAIQAlARAJAPQADABABAFIAAAFQgBAGgDADQgGAKgOABQgKACgHgEIgDgBIAAADIgBADIgBATIgDAaQANACABAKQAAAGgCAFIgFAHQgFAHgIABIgJAAIgJADQgNABgTgGIAAAAQgFgEgMAGQgIAFgFAGIABAPIAAABIABAKIABAFIABAAIAAABIAAABIABADIgBAAIAAAMIAJAIQArAnAAAGQAAAKgKAAIgHgDIADAEIALASIACAEIADAHIACAEQASAogBAgIgBAKQgDAfgLAKIgFAQQAGAMACANQACALAAAUIACAAQAQgCABAJIAAAEQgBAJgGAAQALAGgBALQgCAJgGACIAEAEIgHABQAAAEgFAGIALAAIAGAFIALAIIAHAEIADACIACABIgFAcIgGAAQgGgBgLgHQgQgEgLgGIgIgGIgDAGIgDAFIAEAPIAEAWQADARABASQABAmgBAnQgBAhgCAhQAAAEgDAEQgIAKgNgGQgYgLgZAMQgFALgLAAIh8gCgAg2DbIAFAAIgFgBIAAABgAhyDbIACAAIAAgCIgCACgAC2DbIgDAAQgLAAgBgLIACgDIgBgBQgDgHgCgLIAAgCIgJgXIgBgBIAAgVIACgHQAAgVAQAMIAEADIAHADQAHACAEAEQAMALAAAVIAAALIAAAFQAAARgBAEQgCAKgJAEIgIABIgDAAgAB7DHIAOAAIAAADIAAACQAAAEgGAEQgDADgFABgAB7CuQALAFAEAGIgOABgACTCFQAAgCABgGIABgBIACAVQgEgHAAgFgAigmEIABgDIgBAEIAAABIAAgCg");
	this.shape_4.setTransform(-387.2,-328.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9E523F").s().p("AifHZQgIgFgCgIQgEgGgBgJQAAgIAGgGQAHgHABgKIABgDIAAgEIgEgEIgEgEIgDgEIgCgEIAAgDIAAgIIACgHQABgFAEgEQgFgPgHgUQgGgNgBgOIgBgCQgFgNgCgMQAAgaAWgWQAOgOASgIIgQgDQACgDADgBIAJgCIAGgBIAAgCIgDgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIABgEIAAgEIABgEIABgBQgCgLgDgMQAGgjgog9IgLgPIgEgUQgGgagCgOIABgGIAAgBQAHgyAigkQAQgQAQgLIABgEQAIgFAIgIIATgYIACAAIAGgPIABgEIACAAIAAgEIABgEIABgDIABgDIACgFIABgGIgGgGQgDgMgWgjQgYgpAAguQgBgTAFgHQAHgMAHgYQAUgYAhgSQCDgRASBxQALACAQAIQAlARAKAPQACABABAFIAAAFQAAAGgEADQgFAKgOABQgKACgIgEIgDgBIAAADIgBADIgBATIgDAaQANACABAKQABAGgDAFIgEAHQgGAHgIABIgIAAIgJADQgOABgSgGIgBAAQgEgEgMAGIgIAFQgBAKgGAPIgDAFIACAAIgCACIAAADIgCALQgCARAHAaIAEAMIAHAGIANAPIAEAHIAKAWIACAHIACAFQAQApgEAgIgBAKQgGAfgNAJIgFAPQAEANABANQACALgCAUIADAAQASAAgCAMQgCAJgHAAQALAHgCAKQgCAJgHACQAFAHAXAOIADADIACABIgFAcIgGgBQgGgBgLgHQgWgFgNgKIgGAKIAEAPIAEAXQADARABARQABAngBAnQgBAhgCAhQAAAEgDADQgIALgNgHQgYgLgZAMQgFALgLAAIh8gBgAg+DcIAFAAIgFgBIAAABgAh6DcIACAAIAAgBIgCABgACuDcIgDAAQgLAAgBgKIACgEIgBgBQgDgHgCgKIAAgDIgJgWQgEgIAAgFIADgJIACgHQAAgWAQAMIAEADIAHADQAHADAEAEQAMAKAAAWIAAAKIAAAFQAAASgBADQgCALgJADIgIABIgDAAgABzC9QAOAHAAAIQABAFgHAEQgDADgFABg");
	this.shape_5.setTransform(-386.4,-329);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},78).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},5).to({state:[{t:this.shape_5}]},4).to({state:[{t:this.shape_4}]},7).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).wait(2));

	// kobita
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9E523F").s().p("AhXDDIABgDIACgDIABgCIAAAAIAAgBIAEgFQAEgFAAgHIAAgBIAAgBIgBgrIAAgFIgEAAIgCAAQgCADgEAAQgPAAgYhCIgGgUQgcgDgBgOQABgNAVABIAAgPIABgTQAAgLAEgLIAHgTIABgDIAAAAQAAgDAIgLIALgRIAGgHIABgBIAAgGIgBgDQgDgLgCgLQABgWAigNQAIgHARgFQAegJAnAFQAsAFAYARIAIAFQAVAQATAbQAHAJACAUIABAhQgBARgDAPIAAAAQgSATgBAjIgCgEIgEAGIgRAUIgUASQgWADAAAUQAAAHADAHQAFAKAKADQAEACAGACIABACIAGgBIAJAAIAIgBQADgFAAgEIAAgMQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIgJAEQgDACgFAAQgMAAAAgOQAAgHADgEQABgJAJgFQALgGAOADIAFABIAEACIAAgBIAAgDIAIALIAEAFQASARAAAZQAAAWgMAQQgVAbgyAAQg1AAgbggQgTgOgJgVIgBABIAAAGQgEAJAAAMQAAAMAIAWIAEADIAFAHIACADIACADg");
	this.shape_6.setTransform(-227,-367.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9E523F").s().p("AhKDiIgDgBIgEAHIgKgTIADgGQAQgbADgNQADgLAAgYQAAgIgCgGIACgMQAAgHgDgFIAAgCQABgJgBgLQAAgLgDgJQAEgeACggQAAgRgEgLQgbgDgJgNIgMgUQgGgJABgRQACgVAOgQQAGgLASgKQAUgBAJgMQAOgJAVgaQAQgUAIgTIBKAAIAMAOQAPAPAEANQADAIAAASQAAASgOAaQgTAjgDAKIgEAfIgFAwIgBAAIgEBRIAEAfQgEAMAAAQQAAAQACARQACASAFAIQgCAFAAAHQgBALABAKQACAKAEAFQgbAIgcAAQgtAAgygUgABcigIACgGIAAAAIgCAGgAB7APIABADIgEADIADgGg");
	this.shape_7.setTransform(-236.3,-323.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9E523F").s().p("Ah1DvIgDgBIgEAHIgKgUIADgFQAQgcADgNIADgSQALAAAGgJQAFgHAAgJQAAgPgFgiQgFgjAAgQQAAgKgIgQIgEgHIAAgCQAAgQgEgLQgbgDgJgMIgMgVQgGgIABgRQACgVAOgRQAGgLASgJQAUgCAJgMQAOgIAVgaIAJgMQANgSAGgRIAAAAIABgBIAEgFQAEgFAAgGIAtAAIADAJIAEADQANATAIAIIALANQAGAHACAHIACAMQAEAFACAHQAFAFAFAIQAIAHAIANIALAYQAJARANAjIAJAaQAFAIAFAPQAGANABAKIABAIQADAEADAJQABADgfBHQgfBJgFABQgOAFgEgQIAJgdQAAgMAXhAIAKgiQgIgIgIgSQgIgTgNgmQgHgRgSghIgIgQQgMAPgFARIgEAIIgEAfIgFAvIgBAAIgEBSIAAAAIAAAOIgBAQIgCAQQAAAJADAGQAAAQACAPQACASAFAIQgCAGAAAHQgBALABAKQACAJAEAGQgbAHgbAAQguAAgygTg");
	this.shape_8.setTransform(-232,-325.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9E523F").s().p("AiOGlIgCgBIgEAHIgKgTIACgFQAIAIAMAAQAVAAAEgkQACgSgCgVIAAgGQAHgHAAgQQAAgggLgpIgBgFQgEgWgJgXQAAgPgIgNIAAAAIgBAAIgFgIQgfgDgMgXQgIgOAAgTQAAgyA8gNIABAAIAjguQAMgPAMgMQAHgIAMgHIACgBIAAAAQADgGAAgGIAAgCIAAAAIgBgrIAAgGIgEABIgCAAQgCACgEAAQgPAAgXhBIgHgUQgcgDAAgOQAAgOAVABIAAgQIABgTQAAgKAEgLIAHgUIACgCIAAgBQAAgCAHgMIALgQIAGgIIABgBIAAgGIgBgDQgDgKgBgMQAAgVAjgOQAIgHAQgEQAegJAnAEQAsAFAZARIAHAFQAWAQASAbQAHAKACAUIABAgQAAARgDAPIAAABQgTATgBAkIgBgFIgFAHIgRAUIgUARQgWADAAAUQAAAHADAHQAFALAKACQAEADAGABIACACIAFgBIAJABIAIgBQADgFAAgEIAAgMQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAgBIgJAFQgDACgEAAQgNAAAAgOQAAgIADgEQABgJAKgFQAKgGAOADIAGACIAEABIAAAAIgBgEIAIALIAEAFQATASAAAZQAAAWgNAQQgVAbgyAAQg1AAgcghQgTgNgIgWIgBABIAAAGQgEAKAAAMQAAALAJAWIACAEIAFAHIADADIABACIAMAOQALALAFAJIAGAFQAeAWAKATIAMAMQAOAPAVAeIARAXQAHAGAJANQAHAIAEAIQAOAKACAKIABABIACACIAAAAIgCADQAAAGgDAHQgBAEhDAnQgwAbgRAHQgBAGgNAKIgIAGQAAgQgEgVIACAAIAIgCIAYgSQAHgJA6gmIALgJQgGgFgHgIQgOgRgXghQgMgOgZgaIgBgBIgSAfQgWAkgGATQgcAjAAAlQgBAaADAYQAEAdAJALQAAAIACAGQAAAPACAQQACASAEAIQgBAFAAAHQgCALACAKQABAKAEAFQgZAHgcAAQguAAgzgTg");
	this.shape_9.setTransform(-229.5,-343.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9E523F").s().p("AiXGeIgDgBIgEAHIgKgUIADgFQAHAJAMAAQAVAAAEgkQACgSgCgVIAAgGQAIgHAAgQQAAgggMgqIgBgFQgDgVgJgYQAAgOgJgNIAAgBIAAAAIgFgHQgfgDgNgXQgHgOAAgTQAAgzA8gMIABAAIAjgvQALgPANgLIAFgGIAEAAQADgIAIgDQAEgFAAgHIAAgBIAAgBIgCgrIAAgCIABAAIgBgBIgBgBIAAAAIAAgBIgCgFIAAgBIgBAAIgCAAQgCACgEgBIgDgBQgNAAgDgaIAAgRIgEgcIgDgVQgagJADgOQADgNAUAGIAEgQQADgQACgCQACgLAHgJIAKgSIACgCIABAAQAAgDAKgKIAOgNIAIgGIAAAAIACgHIAAgDIAAgWQAFgVAkgFQAJgGARgBQAggCAlANQAqAOAVAXIAGAGQASAUALAeQAGALgDAUIgGAgQgEAQgGAPQgXAPgIAjIgBgFIgGAGIgVAPQgOAHgJAGQgXgCgEATQgBAHACAIQABALAKAFIAJAGIABACIAGABIAJACIAHAAQAEgEABgEIADgMQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIgJACQgEACgEgBQgMgDADgOQABgHAEgDQADgJAKgDQAMgDAMAGIAGACIADADIAAgBIABgDQACAGADAGIADAGQAOAVgFAYQgFAWgQANQgaAVgxgKQgzgMgUglQgPgSgFgXIAAABIgDAGIAAABIABAAIgBAHIAAAIQAAAMAIAWIAEADIAGAKIABACIABABIAHAIIAFAGIAAAAIABABIAIAJIAHAKIAGAEQAeAWAKAUIALAMQAOAOAWAeIAQAXQAHAGAJANQAHAJAFAIQAOAKACAKIABAAIABACIAAABIgCADQABAFgEAIQgBADhCAoQgxAbgQAHQgCAFgNALIgHAFQAAgPgEgVIABgBIAJgCIAYgSQAHgJA5glIALgJQgGgGgHgIQgOgQgXghQgLgPgagaIAAAAIgSAeQgWAlgFATQgeAiAAAmQAAAaADAXQAEAeAIALQABAIACAFQAAAQACAPQACASAFAIQgCAGAAAHQgBALABAKQACAJAEAGQgbAHgcAAQguAAgygTg");
	this.shape_10.setTransform(-228.6,-342.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9E523F").s().p("AiiGXIgDgBIgEAHIgKgTIADgFQAHAIAMAAQAVAAAEgkQACgSgCgVIAAgGQAIgHAAgQQAAgggMgpIgBgFQgDgVgJgYQAAgPgJgNIAAAAIAAAAIgFgIQgfgDgNgXQgHgOAAgTQAAgyA8gNIABAAIATgaIABgBIAMgPIADgEIABgCQARgVATgOIAFgEIACgCQAEgGAAgGIAAgCIAAAAIgBgeIgBgCQgBgLAAgMIAAgFIgFAAIAAgBIgBAAIgDAAIgFAAIgBgBQgGgCgDgDQgFgFAAgQIABgQIAAgBIABgDQAAgFABgFIABgTIABgVQgZgNAFgNQAFgMATAJIAHgPQAGgPACgDQAEgKAIgIIANgPIACgCIABAAQAAgDAMgIIAQgLIAJgEIAAgBIADgGIAAgDIAEgWQAHgUAlABQAKgEARACQAgADAjATQAnAVAQAZIAFAHQAPAXAGAgQAEALgGAUIgLAeQgHAPgIAOQgJAFgQASIgOAQIgHAFIgXALIgdAIQgWAHgDAHQgDAHABAHQAAAMAJAGIAIAIIAAACIAHACIAHADIAIABQAEgCACgEIAFgMQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgKABQgDABgEgCQgMgFAFgNQADgHAEgCQAFgIAKgCQAIgBAeAeQALAXgKAWQgIAVgSAKQgdARgvgSQgvgUgOgoQgJgOgDgPIAAAIQAAAMAIAWIAEADQANATAHAHQAHAHAFAHIAEAGIAGAFIAOALQASAQAIAOIALAMQAOAPAWAeIAQAXQAHAGAJANQAHAIAFAIQAOAKACAKIABABIABACIAAAAIgCADQABAGgEAHQgBAEhCAnQgxAbgQAIQgCAFgNAKIgHAGQAAgQgEgVIABAAIAJgCIAYgSQAHgJA5gmIALgJQgGgFgHgIQgOgRgXghQgLgOgagaIAAgBIgSAfQgVAkgGATQgeAjAAAlQAAAaADAYQAEAdAIAMQABAHACAGQAAAPACAQQACASAFAIQgCAFAAAHQgBALABAKQACAKAEAFQgaAHgdAAQguAAgygTg");
	this.shape_11.setTransform(-227.5,-342);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9E523F").s().p("AiKGlIgDgBIgEAHIgKgTIADgFQAHAIAMAAQAVAAAEgkQACgSgCgVIAAgGQAIgHAAgQQAAgggMgpIgBgFQgDgWgJgXQAAgPgJgNIAAAAIAAAAIgGgIQgegDgNgXQgHgOAAgTQAAgyA8gNIAAAAIAkguQALgPANgMQAGgIANgHIABgBIAAAAQAEgGAAgGIAAgCIAAAAIgCgrIAAgGIgDABIgCAAQgCACgEAAQgQAAgXhBIgHgUQgcgDAAgOQAAgOAWABIAAgQIAAgTQABgKAEgLIAHgUIABgCIAAgBQAAgCAHgMIAMgQIAGgIIAAgBIABgGIgBgDQgDgKgCgMQAAgVAjgOQAIgHAQgEQAegJAnAEQAsAFAZARIAIAFQAVAQASAbQAIAKACAUIAAAgQAAARgDAPIAAABQgSATgBAkIgCgFIgFAHIgRAUIgUARQgWADAAAUQAAAHAEAHQAEALAKACQAEADAHABIABACIAGgBIAJABIAHgBQAEgFAAgEIAAgMQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAgBIgIAFQgDACgFAAQgMAAAAgOQAAgIADgEQABgJAJgFQALgGANADIAGACIAEABIAAAAIAAgEIAIALIAEAFQASASAAAZQAAAWgMAQQgVAbgyAAQg1AAgcghQgTgNgIgWIgBABIgBAGQgDAKAAAMQAAALAHAWIAEAEIAFAHIACADIACACIALAOIABAAIAAABIABAAIAIAJIAHAKIAGAFIAAAAQAEALALAVIAAAGIAAABIAHAGQAHAOAGAJIAHAOQAJASANAiIAJAbQAFAIAFAPQAGANABALIABAIQADAEADAIQABADgfBIQgfBIgFACQgOAEgEgPIAJgeQAAgLAXhBIAKgiQgIgIgIgSQgIgUgNgmQgHgQgPgdIgGALQgWAkgHATQgcAjAAAlQAAAaADAYQADAdAJALQABAIACAGQAAAPABAQQACASAFAIQgCAFAAAHQgBALABAKQACAKAEAFQgaAHgcAAQguAAgygTg");
	this.shape_12.setTransform(-229.9,-343.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9E523F").s().p("AgBG1QgRADgkAAQhCAAgPgVIgDgEIgCgMIACgGQAAgXAHgPIAXgyIAIgSQgCgdgKgjIgBgFQgDgVgJgYQAAgOgJgOIAAAAIAAAAIgGgIQgegCgNgXQgHgPAAgSQAAgzA8gMIAAgBIAkguQALgPANgLQAGgJANgHIABgBIAAAAQAEgGAAgGIAAgCIAAAAIgCgrIAAgFIgDAAIgCAAQgCADgEgBQgQAAgXhBIgHgUQgcgDAAgOQAAgOAWACIAAgQIAAgTQABgLAEgLIAHgUIABgCIAAAAQAAgDAHgMIAMgQIAGgIIAAAAIABgGIgBgEQgDgKgCgLQAAgWAjgNQAIgHAQgFQAegJAnAEQAsAGAZARIAIAEQAVAQASAbQAIAKACAUIAAAhQAAAQgDAQIAAAAQgSATgBAkIgCgFIgFAHIgRAUIgUASQgWADAAAUQAAAHAEAGQAEALAKACQAEADAHABIABACIAGAAIAJAAIAHgBQAEgFAAgEIAAgMQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIgIAEQgDACgFAAQgMAAAAgOQAAgHADgFQABgIAJgFQALgHANAEIAGABIAEACIAAgBIAAgEIAIAMIAEAFQASARAAAZQAAAWgMAQQgVAbgyAAQg1AAgcghQgTgNgIgVIgBABIgBAGQgDAJAAAMQAAAMAHAWIAEADIAFAHIACADIACACIALAOIABABIAAAAIABAAIAIAJIAHAKIAGAFIAAAAIAEAKQARAIABAXIACAAIAAABIAAAAIAEAJQADAPAEAKIAAAGIACAKQADATACAlIABAcQACAJAAAQQACAPgBALIgCAHQACAFAAAIQAAAEgzA7IgYAcIAIAeQAIAoAAAUIAAAVQgDAQgRAAQgHAAgKgKgAAnBaQgWAkgHATQgcAjAAAmQAAATACASQALANAKATIARgXIAOgTQAMgUAIgJQgGgLgDgTIAAgEQgBgVgBgkIgGgkIAAABg");
	this.shape_13.setTransform(-229.9,-342.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9E523F").s().p("AAqG0QgSACgiAAQhDAAgOgUIgDgEIgCgMIACgGQAAgXAHgQIAXgxIAIgSQgCgdgKgjIgBgFQgEgVgIgYQAAgPgJgNIAAAAIgGgIQgegDgNgXQgIgOABgTQAAgyA7gNIABAAIANgSIgngMQg5gVAAgGQAAgFAEgCIgQgIQAAgIAKgBQgUgEgGgEQgFgCAAgGQAAgKAPABQAPABAmALQAJAAAUAKIAfAJIAqACIAGABQAEgGAGgFQgFgKgFgXIgIgmIAAAAIgGAFIgCAAQgCADgEAAQgPAAgYhCIgGgUQgdgDAAgOQABgNAVABIAAgQIABgTQAAgLAEgLIAHgTIABgDIAAAAQAAgDAHgLIAMgRIAGgHIAAgBIABgGIgBgDQgDgLgCgLQABgWAigNQAJgHAPgFQAegJAoAFQAsAFAYARIAIAFQAVAQATAbQAHAJACAUIABAhQAAARgEAPQgSATgBAkIgCgEIgEAHIgRATIgUASQgXADAAAUQABAHADAHQAEAKAKADQAEACAHACIABACIAGgBIAJAAIAIgBQADgFAAgEIAAgMQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAIgIAEQgDACgFAAQgMAAAAgOQAAgHADgEQABgJAJgFQALgGANADIAHABIADACIAAgBIAAgDIAIALIAEAFQASARAAAZQABAWgNAQQgVAbgyAAQggAAgWgLIgDgCQgGgJgRgLIgIgFQgKgFgEADIABAHIACAPIAHAIQAKAKAGAEQAFAGAKAKIAXAVIADAIIAEAMQABAGABAUQgIAXgTAsQgYA3gHAlQgHASAAASQAAAUACASIANASIAAABQAOAcAKASIAAAAIAIAdQAIApAAAUIAAAUQgEARgQAAQgHAAgLgKg");
	this.shape_14.setTransform(-367.2,-329.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9E523F").s().p("ABuG0QgRACgjAAQhCAAgPgUIgCgEIgCgMIACgGQAAgXAHgQIAVgxIAIgSQgBgdgKgjIAAgFQgEgVgJgYQAAgPgIgNIAAAAIgGgIQgfgDgMgXQgIgOAAgTQAAgyA8gNIABAAIANgRIgngNQg5gVAAgGQAAgFAEgCIgRgIQAAgIAKgBQgTgEgGgEQgFgCAAgGQAAgKAPABQAPABAmALQAJAAAUAKIAfAJIApACIAGABQAEgGAGgEQgGgLgFgXIgHgmIAAAAIgGAFIgCAAQgCADgEAAQgQAAgWhCIgGgUQgdgDAAgOQAAgNAWABIAAgQIAAgTQABgLAEgLIAHgTIABgDIAAAAQAAgDAHgLIALgRIAGgHIAAgBIABgGIgBgDQgDgLgCgLQAAgWAjgNQAIgHAQgFQAfgJAnAFQAsAFAZARIAIAFQAVAQASAbQAIAJACAUIAAAhQAAARgDAPQgSATgBAkIgCgEIgEAHIgSATIgTASQgXADAAAUQAAAHAEAHQAEAKAKADQAEACAHACIABACIAGgBIAJAAIAIgBQADgFAAgEIAAgMQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIgIAEQgDACgFAAQgMAAAAgOQAAgHADgEQABgJAJgFQALgGANADIAGABIAEACIAAgBIAAgDIAIALIAEAFQASARAAAZQAAAWgMAQQgVAbgyAAQggAAgWgLIgDgCQgGgJgRgLIgIgFQgKgFgFAEIABAGIADAPIAHAIQAJAKAHAEQAEAGALAKIAXAVIADAIIADAMQACAGABAUQgIAXgUAsQgYA3gGAlQgHASAAASQgBAUACASIAOASIAAABQANAcALASIAAAAIAHAdQAJApAAAUIAAAUQgEARgQAAQgHAAgMgKgAkEhvQgHgYgDgXQAAgfAIAEQAIAFAEAlQAFAJALAeQALAdAAAEQAAAKgKAAQgOAAgNgyg");
	this.shape_15.setTransform(-379.6,-334.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9E523F").s().p("AAZCyIgDgCQgFgIgRgLIAAgBIgCgBIgGgDIgEgDIgEgBIAAABIAAADIACADIg0AAIAAgCIgBgEIgCgFIgCgJIgDgQIAAAAIgGAGIgCAAQgCACgEAAQgOAAgUg1IgFgMIgGgVQgQgBgHgFIgCgDQgEgDAAgFQAAgFAEgCIACgCQAFgDALAAIAAgPIABgTQAAgKAEgLIAHgUIABgDIAAAAQAAgCAIgMIALgQIAGgIIABgBIAAgGIgBgDQgDgKgCgMQABgWAigMQAJgHAQgGQAegIAnAEQArAFAZARIAIAFQAVAQATAbQAHAJACAVIABAgQAAARgEAPQgSAUgBAiIgCgEIgEAHIgRAUIgUASQgHAAgEACQgLAGAAAOQAAAHADAHQAEAKALADQADADAHABIABACIAHAAIAIAAIAIgBQADgGAAgDIAAgNQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIgJAFQgDACgFAAQgMgBAAgOQAAgHADgEQABgFAEgFIAFgEQALgGAOADIAGABIADACIAAgBIAAgDIAGAIIACADIAEAGQASAQAAAaIAAAKQgBAHgDAHIgCAGIgCACIgEAGQgVAbgyAAQggAAgWgMg");
	this.shape_16.setTransform(-371,-360.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9E523F").s().p("ACXFFQgRACgkAAQhCAAgPgUIgDgEIgBgMIABgGQAAgXAHgQIAXgxIAIgSQgCgdgKgjIgBgFQgDgVgJgYQAAgPgJgNIAAAAIgFgIQgegDgNgXQgHgNAAgTQAAgyA7gNIABAAIAMgRIglgOQgcgKgOgGIgJAAQgRAAgfgNQgWgEgTgIIgBAAQgQAAgQgNIgDgCIAAAAQgGgHgIgIIgBgkIgFgiIAOgLQADAAAJAHIAAAEIgBACQAFACAGAFQAZAdAHAEIA2AUIANAFIAmAKQAJAAAUAKIAeAJIAfACIACgDIAFgJIgEgKIgDgKIgCgDIgBgDIgDgKIA0AAIAEALIAQAHQAmAVAAASIAAACIAVATIADAIIAEAMQACAHAAAUQgIAXgTAsQgYA2gGAlQgIASAAASQAAAUACASIAOASIgBABQAOAcAKASIABAAIAHAdQAIApAAAUIAAAUQgDARgRAAQgHAAgLgKgAi1lMQADgCADAAIgFACg");
	this.shape_17.setTransform(-383.7,-323.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9E523F").s().p("ACEFsQgRACgkAAQhCAAgOgUIgCgEIgCgMIACgGQgBgXAHgQIAWgxIAIgSQgCgdgJgjIgBgFQgEgVgJgYQAAgPgIgNIAAAAIgFgIQgfgDgMgXQgIgOAAgTQAAgxA7gNIABAAIAMgRIglgOQgbgKgPgHIgJABIgLgBIgKgDIAAg6IAKADIABABIAmAKQAGAAAJAEQgdgYAAgJQAAgaAZAVIAhAjIAfAPIAGgNIACgFIgFgKIgGgSQAAgRALAPIACgCQABAAAFAHQAAgHADAAQAAgHAHAFIABAAIACgrQADADADAFIACAHIgHAgIAGAFIAAgFIgBgDQAAgTALASIANALIABABQAHgDARAMQAUAPAFAOQAEAEAEADQACAEAAAFIAAACIAVATIAEAIIADAMQACAHAAAUQgHAXgUArQgYA3gGAlQgHASgBASQAAAUACASIAOASIAAABQANAcAKASIABAAIAHAdQAIApAAAUIAAAUQgDARgRAAQgHAAgLgKgAiKi3QgBgMABgKIAAgBIgIgTQgNgTgHgUIAAAAQgMgMgCgUIAAgEQACgIgBgMIAagZIAWgcIAQADQADADABALIgDACIgCABIACAMQgDAnABAIIAFAKIgFAEIAMAMIALAaIABACIgbAZQABAIADAPQAEAQAAAGQAAAKgKAAQgNAAgEgXgAAzkYIADAAIgDABg");
	this.shape_18.setTransform(-381.8,-327.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9E523F").s().p("AByGxQgRACgkAAQhBAAgPgUIgDgEIgBgMIABgGQAAgXAHgQIAWgxIAIgSQgCgdgKgjIgBgFQgCgVgJgYQAAgPgJgNIAAAAIgFgIQgfgDgNgXQgHgOAAgTQAAgyA8gNIABAAIAMgQIgmgOQgcgKgOgHIgJABIgLgBIgKgDIAAg6IAKADIABABIAmAKQAGAAAJADQgegXAAgJQAAgaAaAVIAiAjIAnATIABAAIAFABIACgDIAGgJIgFgKIgDgKIgCgEIAAgBIgEgFQAAgOgKgKQgNgBgOgGQgPgCgSgVIgJgDIgEgEQgIgHgIgLQgGgCgDgGIgBgFIgMgRQAAgLADgEIgCgFQgLgsAAguIgBgYQABgJAGgFQgEgSATgVQADgIAKgJQAUgSAfgHQAigIAZAJIAHACQAWAJAXAUQAJAHAJASIAMAeQAGAPADAQQgGAXALAiIgCgEIgBAIIgGAXIgHASQABALACAIQAFAUASAAQAIAAAFgEIgEgJQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIgFAHQgCACgDABQgKAEgFgNQgCgHABgEQgDgJAFgHQAGgJALgBIAFgBIAEABIAAgBIgCgDIAKAIIAFAEQAUALAJAXQAGARgBAQIgBAGQgGAfglAOIgHADIgLAGQgRAJgSABQAfATAAAQIAAABIAVAUIADAIIAEAMQACAHAAATQgIAXgTAsQgYA3gGAlQgIASAAASQAAAUACASIAOASIgBABQAOAcAKASIABAAIAHAdQAIApAAAUIAAAUQgDARgRAAQgHAAgLgKgAichyQgCgMABgKIAAgCIgIgSQgMgTgHgUIgBAAQgLgMgCgUIAAgEQACgIgBgMIAagZIAVgcIARADQACADACALIgDACIgCABIACAMQgEAnACAIIAEAKIgEAEIAMAMIALAaIABACIgbAZQABAIADAPQAEAQAAAGQAAAKgKAAQgOAAgDgXg");
	this.shape_19.setTransform(-380,-334.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},40).to({state:[{t:this.shape_8},{t:this.shape_6}]},2).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},4).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},14).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).to({state:[{t:this.shape_14}]},13).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_17},{t:this.shape_16,p:{scaleX:1,rotation:0,x:-371,y:-360.7}}]},1).to({state:[{t:this.shape_18},{t:this.shape_16,p:{scaleX:0.883,rotation:-6,x:-374.5,y:-360.3}}]},3).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18},{t:this.shape_16,p:{scaleX:0.883,rotation:-6,x:-374.5,y:-360.3}}]},5).to({state:[{t:this.shape_19}]},4).to({state:[{t:this.shape_18},{t:this.shape_16,p:{scaleX:0.883,rotation:-6,x:-374.5,y:-360.3}}]},7).to({state:[{t:this.shape_17},{t:this.shape_16,p:{scaleX:1,rotation:0,x:-371,y:-360.7}}]},3).wait(2));

	// kobita idzie n
	this.instance_2 = new lib.kobitaidzie3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-174.6,-341.8,1,1,0,0,0,-229,-342.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-229.6,y:-342.7},39).to({_off:true},1).wait(65));

	// kobita idzie2
	this.instance_3 = new lib.kobitaidzie2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-236.1,-302.5,1,1,0,0,0,-235.7,-302.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(65).to({_off:false},0).to({x:-366.2,y:-290.5},12).to({_off:true},1).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-411.5,-386.5,255.2,104.9);


(lib.oknoButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// otwarte
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D4F4F").s().p("AnsBRIgriGIADABQgEgHACgHQACggAegMIAsCAQINATHVALIAAACQgCACAAADQAAAAAAABQgBAAAAAAQAAABAAABQAAAAAAABQgFAIgEAJQgHANgIAJQgDAGAAAHQnPgDoXgbg");
	this.shape.setTransform(70.7,130.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB7777").s().p("AH1BSQnUgLoNgTIgsiAIgCgEIAPAAIAFAAIA7ABIBDACICNADQEPAHEBAPIAFAAICBAIICAAHIgjB3IgDAAg");
	this.shape_1.setTransform(74.1,126.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6CBDA4").s().p("AHKBfQgPgBgIgNQgJgNAAgUQABgRAFgNQAFgPALgHQAKgHAMAAQAOABAJALQAJAMAAAUQAAARgGAPQgGAPgJAHQgKAIgLAAIgCAAgAHMANQgEAFgDAMQgEALAAAMQAAAKADAGQADAFAEAAQAEAAAFgFQAEgFADgKQAEgMAAgNQAAgKgDgFQgDgFgEAAQgFAAgEAEgAGMBcQgFAAgDgDQgEgDgCgEQgCgEgBgHQgDAGgFAFIgIAGQgFACgEAAQgLgBgHgNQgFgMgBgPQAAgSAHgQQAGgPALgIQAJgIALABQAGAAAFACQAEADADAGIAHgbIgPgBIAEgUIANgBIASgGIAHABIgYB0IAAABIgBAFIABAEIACABQADAAAFgGIAHANQgEAIgHAEQgGAEgFAAIgBAAgAFvAKQgEAFgFAMQgDALAAAMQgBAHADAFQACAEAEAAQAEAAAEgFQAFgEAFgNQAGgOACgRQgGgIgGgBQgEAAgGAGgAD/BUQgIAAgFgHQgEgHAAgIIACgPIAFgfIABgHQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQgFADgDAJQgFAIgDAKQgDALgEAVIgCAPIgVgBIAMhMIgKAAIACgTQAOAAANgHIAHAAIgEATQAEgHAEgEIAIgFQAEgCAFAAQAIAAAGAIQAEAIAAAJIgBAGIgBAHIgEAhIgCAIIABADIACABQAEAAAFgHIAGAOQgHAJgFADQgEAEgGAAIgBgBgACfBRQgEAAgEgDQgDgCgCgEQgDgFgBgFIgHAKQgEAEgEABQgEACgFAAQgHAAgGgGQgGgFgDgKQgCgJAAgNQAAgbANgRQANgTARABQAGAAAFADQAEACAFAHIAEgJIARABIgMBDIgBAJIABADIABABIAEgBIAFgFIAIANQgHAJgFADQgGAEgFAAIgCAAgAB8AHQgHAOABARQAAAHACAFQADAFACAAQAFAAADgEQAFgFAEgNQAGgNACgTQgDgDgDgBIgFgDIgBAAQgIAAgGANgAAuBMQgPgBgIgMQgIgNAAgTQAAgQAHgPQAFgNAMgJQALgIAMAAQAMABAHAJQAGAJAAALQAAAHgCAFQgDAEgFAAQgDgBgDgCQgCgCgCgDIgBgHIgCgFIgCgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgDAAgEAEQgFAFgEALQgDALAAALQAAAJADAGQAEAFAGAAQAFAAAGgDQAGgDAHgGIAHAPQgSAUgSAAIgBAAgAhdBCIADgTIAEAAIAFgBIADgDIACgJIAMhMIABgGQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQgCgBgEgBIgEAAIAEgUIAvADIgEATIgEAAIgFABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAIgBAKIgOBOIAAAFQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAFABIAEAAIgEAUgAi2A5QgFgIABgLIABgPIAHgqIgPgBIADgRQAHgCAFgEQAEgEAEgIQAEgIADgKIAQABIgGAjIAUABIgEATIgUgBIgHAtIgBAJIABAFQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQACAAAEgEQAEgDAFgIIAJAMQgKAQgGAFQgHAFgHAAQgJgBgHgIgAjeA/QgFAAgDgDQgEgCgDgEQgCgFgBgFIgHAKQgEAEgEABQgEACgFAAQgHAAgGgGQgFgFgDgKQgDgJAAgNQAAgaANgSQANgTAQABQAHAAAEADQAFACAEAHIAGgJIAQABIgNBDIgBAJIABADIADABIADgBIAFgFIAHANQgGAJgFADQgGAEgFAAIgBAAgAkCgKQgGANgBARQABAHACAFQADAFADAAQADAAAEgEQAFgFAFgNQAEgNAEgSQgEgEgDgBIgFgDIgBAAQgIAAgGAOgAlHA0QgFgHABgJIABgPIAFgbIABgLQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgFAAgFAHQgHAIgHAQQgEAPgEARIgCAPIgWgBIAUh4IgKgBIADgTQAMgBAPgGIAHAAIgLBBQAEgIAFgEIAJgFQAEgCAFAAQAHABAEADQAEADADAGQACAGAAAHIAAAEIgBAHIgGAjIgBAHIABAEIACABIAEgBIAFgGIAHAOQgHAJgFAEQgGADgGAAQgHgBgFgGgAm0A1QgGAAgEgEQgFgEgDgGQgBgEAAgHIgIANQgFAGgEACQgFACgFAAQgIAAgFgIQgFgHABgKIAAgGIABgIIAIgnIgLAAIADgUIAOgCQAHgCAHgEIAGABIgMBDIgBAHQAAABAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAQAAAAABAAQACAAAEgFQAGgIAEgOQAFgPADgZIACgLIAVABIgKBAIgBAHQABADABADQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAIAAAGgOQAIgPAAgMIgBgHIgBgHIgCgHIgBgFQAAgIAEgEQAEgEAEAAQADAAADADQADAEABAFQACAFgBAJQAAAVgHATQgHAVgMALQgJAKgKAAIgBgBg");
	this.shape_2.setTransform(73.4,114.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#224D3F").s().p("AHLBfQgPgBgKgNQgIgNAAgUQABgRAFgNQAGgPAKgHQAKgHAMAAQAOABAJALQAKAMAAAUQgBARgGAPQgGAPgKAHQgJAIgLAAIgBAAgAHMANQgEAFgDAMQgEALAAAMQAAAKADAGQADAFAEAAQAFAAAEgFQAEgFAEgKQADgMAAgNQAAgKgCgFQgDgFgFAAQgFAAgEAEgAGMBcQgEAAgEgDQgEgDgCgEQgCgEgBgHQgDAGgFAFIgJAGQgEACgFAAQgLgBgGgNQgGgMABgPQAAgSAGgQQAGgPAKgIQAKgIALABQAHAAAEACQAEADADAGIAGgbIgOgBIAEgUIANgBIASgGIAHABIgXB0IgBABIgBAFIABAEIADABQACAAAGgGIAGANQgFAIgGAEQgGAEgFAAIgBAAgAFwAKQgGAFgDAMQgFALAAAMQABAHACAFQACAEADAAQAEAAAFgFQAFgEAFgNQAFgOADgRQgGgIgFgBQgGAAgEAGgAD/BUQgIAAgEgHQgFgHAAgIIACgPIAFgfIABgHQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQgDADgFAJQgEAIgDAKQgDALgDAVIgDAPIgVgBIAMhMIgLAAIADgTQAOAAANgHIAGAAIgDATQAEgHAFgEIAIgFQAEgCAEAAQAIAAAFAIQAFAIAAAJIAAAGIgCAHIgEAhIgCAIIABADIACABQAEAAAFgHIAGAOQgHAJgFADQgEAEgGAAIgBgBgACgBRQgFAAgDgDQgEgCgCgEQgDgFgBgFIgHAKQgEAEgEABQgEACgFAAQgIAAgFgGQgFgFgDgKQgDgJAAgNQAAgbANgRQANgTARABQAFAAAFADQAFACAEAHIAGgJIAQABIgNBDIgBAJIABADIACABIAEgBIAFgFIAHANQgGAJgFADQgGAEgFAAIgBAAgAB8AHQgGAOAAARQgBAHADAFQADAFADAAQAEAAADgEQAFgFAFgNQAEgNAEgTQgEgDgDgBIgFgDIgBAAQgIAAgGANgAAuBMQgOgBgJgMQgIgNAAgTQAAgQAGgPQAHgNAKgJQALgIANAAQAMABAHAJQAHAJAAALQgBAHgDAFQgDAEgEAAQgDgBgCgCQgDgCgCgDIgBgHIgCgFIgCgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgDAAgEAEQgFAFgDALQgFALAAALQAAAJAFAGQADAFAGAAQAEAAAHgDQAGgDAHgGIAHAPQgSAUgSAAIgBAAgAhdBCIAEgTIADAAIAGgBIACgDIACgJIANhMIABgGQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBgBgFgBIgEAAIAEgUIAuADIgDATIgEAAIgFABQgBAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAIgCAKIgMBOIgBAFQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAFABIAEAAIgDAUgAi1A5QgGgIAAgLIABgPIAIgqIgQgBIAFgRQAGgCAFgEQAEgEAEgIQAEgIAEgKIAPABIgGAjIAUABIgEATIgUgBIgHAtIgBAJIABAFQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQACAAAEgEQAEgDAFgIIAJAMQgKAQgGAFQgGAFgJAAQgIgBgGgIgAjeA/QgFAAgEgDQgDgCgDgEQgCgFgBgFIgHAKQgEAEgEABQgEACgFAAQgIAAgFgGQgGgFgCgKQgDgJAAgNQAAgaANgSQANgTAQABQAGAAAGADQAEACAFAHIAEgJIARABIgMBDIgBAJIABADIACABIADgBIAFgFIAIANQgHAJgGADQgFAEgFAAIgBAAgAkCgKQgHANAAARQAAAHADAFQACAFADAAQAFAAADgEQAFgFAEgNQAFgNADgSQgDgEgDgBIgFgDIgBAAQgIAAgGAOgAlHA0QgFgHABgJIABgPIAFgbIABgLQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQgFAAgGAHQgHAIgFAQQgGAPgDARIgCAPIgWgBIAUh4IgKgBIADgTQANgBAOgGIAGAAIgKBBQAEgIAFgEIAJgFQAEgCAFAAQAGABAFADQAFADACAGQACAGAAAHIgBAEIAAAHIgGAjIgBAHIABAEIACABIADgBIAGgGIAHAOQgHAJgGAEQgFADgFAAQgIgBgFgGgAm0A1QgHAAgEgEQgEgEgDgGQgBgEAAgHIgJANQgEAGgFACQgEACgFAAQgIAAgEgIQgGgHABgKIAAgGIABgIIAHgnIgKAAIADgUIAOgCQAHgCAHgEIAGABIgMBDIgBAHQAAABAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAAAQADAAAEgFQAFgIAFgOQAEgPAEgZIACgLIAWABIgLBAIgBAHQAAADACADQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAHAAAIgOQAGgPABgMIgBgHIgCgHIgBgHIgBgFQABgIADgEQAEgEADAAQAEAAADADQADAEABAFQABAFAAAJQABAVgIATQgHAVgMALQgJAKgKAAIgBgBg");
	this.shape_3.setTransform(71.9,116.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7D4F4F").s().p("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");
	this.shape_4.setTransform(70.9,71.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BB7777").s().p("AHlKjQnUgLoNgSIgsiCIgCgEIAPAAIAFAAIA7ABIBDACICNADQEPAIEBAOIAFAAICBAIICAAIIgjB3IgDAAgAHOEbQAgh+AdiMQAAAAAAAAQAAgBABAAQAAAAABAAQABgBABAAQAWA5gEA2QgDAkgPAiQgTAtgoApIgDABIgDAAgAKFjqIgFgLQgHgFgMADQgLADgGgKQgEgJAEgJQAIgPAPgCQBCACgTA4IgEAFQgFACgEAAQgKAAgGgKgAqkklIgBgCQAmgdA5gKQAQgBAHAPIACAEQgeApglAAQgYAAgcgSgAG7mPIhlh4QgIgJASgBQCaBCA6CXQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQg6gRg+hJgAFrmQIgDgBQgIgGABgJQABgIAIABIAAgBIAJAGQAFACADAEQAEAGgFAFQgFACgEAAIgGgBgAlWmvIgKgCQgFADgFgCQgFgCgFgGIgFgIIAAgDIAAgEQABgDADgCIAFgDIABgBIAUABIAGACIACAEIAEAHQADAFgCAGIgCAIIgEAAIgCAAgAEunLIgHgDQgGgEgCgHIAAgDIACgIIACgCIAFgCIABgBQAHADAIgBQAIAAABAIIABAIQAAAFgFAEQgEADgGAAIgFAAgAg0ngQgQgFgCgPQAAgFACgCIgBgBQgGgMAGgNQACgFAFgBQAKADACALQACAJAEAKQACAEgCADIAEAEQAEAGgEAFQgDAFgFAAIgEgBgAk5njIgBAAQgFgDACgGIAAgBIAAgDIACgHQADgGAGgCIAJgDQAIABAGAEQAHAEgBAJQAAAFgEAFIgGACQgHACgHAAQgGAAgGgBgADWnuIgCgHIgBgIIAAgBQAAgGADgEIACgCIACgCIACgCIACgBIAEgBIABgBQAJgBAGAHQADAEAFACQAKADACAKQgCAIgHAAIgBAAQgJAAgHADIgGAEQgDADgHAAIgGgIgABrn0IAAAAQgCgIAGgGQAJgJgFgMQgDgIAKgBQAFABAEAEIABAAQAEADADAGQACAFABAFIAAABQgFAKgGAIQgGAIgGAAQgFAAgHgHgAAZn8QAAgMAGgJQACgEAEgBIAEABQAEAAACACIAHAHIADAEIgBAHQgCAEgDADQgGAEgFAGQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgNgCABgMgAj0oEIgCgEIgBgIIAAgHIAAgIIAEgDIANgFIAIgDQAXgDgIATQgEAKgHAGIgIAGIgCAAQgDACgEAAQgEAAgFgCgAigoTQgCgFAAgFIAAgBIAAgLIAEgDIALgGIAFgCQAMADgGAJIgDAGQgDAHgCAIQgBAHgHAAQgFgDgDgEgABMowIgBgGIgBgVIgHgHIgKgLIgEgDQgcgFggAEIAAABIAAAEIAAALQgBAIADAHQAFAMgGAKIgBAAQgRACgCgRIgBgQIAAgKIAAgEIAAgTIABgEIAEgEIAEgDQgRACgSAIQgOAHgKgLQAAgEABgCQAEgGAGgDIAGgDIACAAQAHgDAFgEQAEgDACgDQAJgOAOgEQAfADAgAIQAWAGAPAOQAJAJAHANQAIAQgHAPIAAAEQADARABASQAAANgMAEQgOgIgCgSg");
	this.shape_5.setTransform(75.8,67.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A06767").s().p("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BIgFACQgDACgBAEIgBADIAAAEIAFAHQAFAHAFABIAAADIgBADQgHABgFgCIgEgEIgIgHQgFADgCAEgAk3mvQgCAPALAIQARAPAUgHIAEgDIALgMIAEgHIgCgDQgEgEgEgBQgFgBgEADIgHAIIgOgDQgGgCAAgGIABAAQAMADANgEIAGgDQAEgEABgGQABgIgHgEQgHgEgIgBIgJADQgGACgDAFIgCAHIAAAEIAAABIgFgCQgJABgBAKgAjxniIgFABIgBABIgDADIgDADQgEAJADAKQACAIAGAGQAQANATABIAFgCIADgCQAIgIAGgIQAFgHgCgIIgCgDQgEgEgEgBIgBAAQAIgHAEgJQAHgTgXADIgHACIgOAGIgEADIAAAIIAAAHIABAIIADADQAIAFAIgEIABgBQAAAJgJADQgOAEABgLQACgQgQgGIAAAAgADvmpIgHgIQgDgEgEgCQAEgDABgHIADgJIAAABIAAAIIACAGIAHAIQAGAAAEgDIAGgDIgEAGQgEALgKAAIgBgBgAiPnfQgEgDAEgFIACgDIAAAAQAAAGADAEQACAFAFADQAIAAABgIQABgHADgHQAFgDADgFQABAWAKATQgaAAgSgSgACgneQgCgGgFgDQAHAAACAHIABAEQACAFgCADQAAgFgDgFgAgIn8IADgcIABARQACARAPgCIABAAQAGgKgFgNQgCgGAAgIIAAgLIAAgEIAAgBQAhgFAcAGIAEADQgFAAgFABQgMACgNAGQgSAJgDATIAAAFIgBABIgHAQQgDAHgHAFIgCACQgMgIACgUgAgPowQgDgBgDAAIgPgBQgKAHgPAEIgEADIgDgNQADgEAAgFQAAgHAGgFIACgCIANgEQgGADgEAFQgCADAAAEQALAKAOgGQARgIAQgCIgDADIgEAEIAAAEIgBATIAAAEQgBgJgIgGgAgkpQQADgCABgDIAIgCQgFAFgIADIABgBg");
	this.shape_6.setTransform(73.6,62.3);

	this.instance = new lib.Wygenerujklatkipośrednie53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(20.8,78.7,0.254,1,-6.6,0,0,-30.3,-2.6);

	this.instance_1 = new lib.Wygenerujklatkipośrednie57("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(118.5,82.6,0.165,1,0,0,0,26.9,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4F3137").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH9Abg7HNQgVCIhMCyIhMCxQjygMkhgHg");
	this.shape_7.setTransform(70.7,80.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.instance_1},{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(2));

	// otwieranie
	this.instance_2 = new lib.oknootw();
	this.instance_2.parent = this;
	this.instance_2.setTransform(72.7,70.7,1,1,0,0,0,52,51.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// zamkniete
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7D4F4F").s().p("AnsBRIgriGIADABQgEgHACgHQACggAegMIAsCAQINATHVALIAAACQgCACAAADQAAAAAAABQgBAAAAAAQAAABAAABQAAAAAAABQgFAIgEAJQgHANgIAJQgDAGAAAHQnPgDoXgbg");
	this.shape_8.setTransform(70.7,130.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BB7777").s().p("AH1BSQnUgLoNgTIgsiAIgCgEIAPAAIAFAAIA7ABIBDACICNADQEPAHEBAPIAFAAICBAIICAAHIgjB3IgDAAg");
	this.shape_9.setTransform(74.1,126.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6CBDA4").s().p("AHKBfQgPgBgIgNQgJgNAAgUQABgRAFgNQAFgPALgHQAKgHAMAAQAOABAJALQAJAMAAAUQAAARgGAPQgGAPgJAHQgKAIgLAAIgCAAgAHMANQgEAFgDAMQgEALAAAMQAAAKADAGQADAFAEAAQAEAAAFgFQAEgFADgKQAEgMAAgNQAAgKgDgFQgDgFgEAAQgFAAgEAEgAGMBcQgFAAgDgDQgEgDgCgEQgCgEgBgHQgDAGgFAFIgIAGQgFACgEAAQgLgBgHgNQgFgMgBgPQAAgSAHgQQAGgPALgIQAJgIALABQAGAAAFACQAEADADAGIAHgbIgPgBIAEgUIANgBIASgGIAHABIgYB0IAAABIgBAFIABAEIACABQADAAAFgGIAHANQgEAIgHAEQgGAEgFAAIgBAAgAFvAKQgEAFgFAMQgDALAAAMQgBAHADAFQACAEAEAAQAEAAAEgFQAFgEAFgNQAGgOACgRQgGgIgGgBQgEAAgGAGgAD/BUQgIAAgFgHQgEgHAAgIIACgPIAFgfIABgHQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQgFADgDAJQgFAIgDAKQgDALgEAVIgCAPIgVgBIAMhMIgKAAIACgTQAOAAANgHIAHAAIgEATQAEgHAEgEIAIgFQAEgCAFAAQAIAAAGAIQAEAIAAAJIgBAGIgBAHIgEAhIgCAIIABADIACABQAEAAAFgHIAGAOQgHAJgFADQgEAEgGAAIgBgBgACfBRQgEAAgEgDQgDgCgCgEQgDgFgBgFIgHAKQgEAEgEABQgEACgFAAQgHAAgGgGQgGgFgDgKQgCgJAAgNQAAgbANgRQANgTARABQAGAAAFADQAEACAFAHIAEgJIARABIgMBDIgBAJIABADIABABIAEgBIAFgFIAIANQgHAJgFADQgGAEgFAAIgCAAgAB8AHQgHAOABARQAAAHACAFQADAFACAAQAFAAADgEQAFgFAEgNQAGgNACgTQgDgDgDgBIgFgDIgBAAQgIAAgGANgAAuBMQgPgBgIgMQgIgNAAgTQAAgQAHgPQAFgNAMgJQALgIAMAAQAMABAHAJQAGAJAAALQAAAHgCAFQgDAEgFAAQgDgBgDgCQgCgCgCgDIgBgHIgCgFIgCgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgDAAgEAEQgFAFgEALQgDALAAALQAAAJADAGQAEAFAGAAQAFAAAGgDQAGgDAHgGIAHAPQgSAUgSAAIgBAAgAhdBCIADgTIAEAAIAFgBIADgDIACgJIAMhMIABgGQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQgCgBgEgBIgEAAIAEgUIAvADIgEATIgEAAIgFABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAIgBAKIgOBOIAAAFQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAFABIAEAAIgEAUgAi2A5QgFgIABgLIABgPIAHgqIgPgBIADgRQAHgCAFgEQAEgEAEgIQAEgIADgKIAQABIgGAjIAUABIgEATIgUgBIgHAtIgBAJIABAFQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQACAAAEgEQAEgDAFgIIAJAMQgKAQgGAFQgHAFgHAAQgJgBgHgIgAjeA/QgFAAgDgDQgEgCgDgEQgCgFgBgFIgHAKQgEAEgEABQgEACgFAAQgHAAgGgGQgFgFgDgKQgDgJAAgNQAAgaANgSQANgTAQABQAHAAAEADQAFACAEAHIAGgJIAQABIgNBDIgBAJIABADIADABIADgBIAFgFIAHANQgGAJgFADQgGAEgFAAIgBAAgAkCgKQgGANgBARQABAHACAFQADAFADAAQADAAAEgEQAFgFAFgNQAEgNAEgSQgEgEgDgBIgFgDIgBAAQgIAAgGAOgAlHA0QgFgHABgJIABgPIAFgbIABgLQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgFAAgFAHQgHAIgHAQQgEAPgEARIgCAPIgWgBIAUh4IgKgBIADgTQAMgBAPgGIAHAAIgLBBQAEgIAFgEIAJgFQAEgCAFAAQAHABAEADQAEADADAGQACAGAAAHIAAAEIgBAHIgGAjIgBAHIABAEIACABIAEgBIAFgGIAHAOQgHAJgFAEQgGADgGAAQgHgBgFgGgAm0A1QgGAAgEgEQgFgEgDgGQgBgEAAgHIgIANQgFAGgEACQgFACgFAAQgIAAgFgIQgFgHABgKIAAgGIABgIIAIgnIgLAAIADgUIAOgCQAHgCAHgEIAGABIgMBDIgBAHQAAABAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAQAAAAABAAQACAAAEgFQAGgIAEgOQAFgPADgZIACgLIAVABIgKBAIgBAHQABADABADQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAIAAAGgOQAIgPAAgMIgBgHIgBgHIgCgHIgBgFQAAgIAEgEQAEgEAEAAQADAAADADQADAEABAFQACAFgBAJQAAAVgHATQgHAVgMALQgJAKgKAAIgBgBg");
	this.shape_10.setTransform(73.4,114.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#224D3F").s().p("AHLBfQgPgBgKgNQgIgNAAgUQABgRAFgNQAGgPAKgHQAKgHAMAAQAOABAJALQAKAMAAAUQgBARgGAPQgGAPgKAHQgJAIgLAAIgBAAgAHMANQgEAFgDAMQgEALAAAMQAAAKADAGQADAFAEAAQAFAAAEgFQAEgFAEgKQADgMAAgNQAAgKgCgFQgDgFgFAAQgFAAgEAEgAGMBcQgEAAgEgDQgEgDgCgEQgCgEgBgHQgDAGgFAFIgJAGQgEACgFAAQgLgBgGgNQgGgMABgPQAAgSAGgQQAGgPAKgIQAKgIALABQAHAAAEACQAEADADAGIAGgbIgOgBIAEgUIANgBIASgGIAHABIgXB0IgBABIgBAFIABAEIADABQACAAAGgGIAGANQgFAIgGAEQgGAEgFAAIgBAAgAFwAKQgGAFgDAMQgFALAAAMQABAHACAFQACAEADAAQAEAAAFgFQAFgEAFgNQAFgOADgRQgGgIgFgBQgGAAgEAGgAD/BUQgIAAgEgHQgFgHAAgIIACgPIAFgfIABgHQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQgDADgFAJQgEAIgDAKQgDALgDAVIgDAPIgVgBIAMhMIgLAAIADgTQAOAAANgHIAGAAIgDATQAEgHAFgEIAIgFQAEgCAEAAQAIAAAFAIQAFAIAAAJIAAAGIgCAHIgEAhIgCAIIABADIACABQAEAAAFgHIAGAOQgHAJgFADQgEAEgGAAIgBgBgACgBRQgFAAgDgDQgEgCgCgEQgDgFgBgFIgHAKQgEAEgEABQgEACgFAAQgIAAgFgGQgFgFgDgKQgDgJAAgNQAAgbANgRQANgTARABQAFAAAFADQAFACAEAHIAGgJIAQABIgNBDIgBAJIABADIACABIAEgBIAFgFIAHANQgGAJgFADQgGAEgFAAIgBAAgAB8AHQgGAOAAARQgBAHADAFQADAFADAAQAEAAADgEQAFgFAFgNQAEgNAEgTQgEgDgDgBIgFgDIgBAAQgIAAgGANgAAuBMQgOgBgJgMQgIgNAAgTQAAgQAGgPQAHgNAKgJQALgIANAAQAMABAHAJQAHAJAAALQgBAHgDAFQgDAEgEAAQgDgBgCgCQgDgCgCgDIgBgHIgCgFIgCgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgDAAgEAEQgFAFgDALQgFALAAALQAAAJAFAGQADAFAGAAQAEAAAHgDQAGgDAHgGIAHAPQgSAUgSAAIgBAAgAhdBCIAEgTIADAAIAGgBIACgDIACgJIANhMIABgGQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBgBgFgBIgEAAIAEgUIAuADIgDATIgEAAIgFABQgBAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAIgCAKIgMBOIgBAFQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAFABIAEAAIgDAUgAi1A5QgGgIAAgLIABgPIAIgqIgQgBIAFgRQAGgCAFgEQAEgEAEgIQAEgIAEgKIAPABIgGAjIAUABIgEATIgUgBIgHAtIgBAJIABAFQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQACAAAEgEQAEgDAFgIIAJAMQgKAQgGAFQgGAFgJAAQgIgBgGgIgAjeA/QgFAAgEgDQgDgCgDgEQgCgFgBgFIgHAKQgEAEgEABQgEACgFAAQgIAAgFgGQgGgFgCgKQgDgJAAgNQAAgaANgSQANgTAQABQAGAAAGADQAEACAFAHIAEgJIARABIgMBDIgBAJIABADIACABIADgBIAFgFIAIANQgHAJgGADQgFAEgFAAIgBAAgAkCgKQgHANAAARQAAAHADAFQACAFADAAQAFAAADgEQAFgFAEgNQAFgNADgSQgDgEgDgBIgFgDIgBAAQgIAAgGAOgAlHA0QgFgHABgJIABgPIAFgbIABgLQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQgFAAgGAHQgHAIgFAQQgGAPgDARIgCAPIgWgBIAUh4IgKgBIADgTQANgBAOgGIAGAAIgKBBQAEgIAFgEIAJgFQAEgCAFAAQAGABAFADQAFADACAGQACAGAAAHIgBAEIAAAHIgGAjIgBAHIABAEIACABIADgBIAGgGIAHAOQgHAJgGAEQgFADgFAAQgIgBgFgGgAm0A1QgHAAgEgEQgEgEgDgGQgBgEAAgHIgJANQgEAGgFACQgEACgFAAQgIAAgEgIQgGgHABgKIAAgGIABgIIAHgnIgKAAIADgUIAOgCQAHgCAHgEIAGABIgMBDIgBAHQAAABAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAAAQADAAAEgFQAFgIAFgOQAEgPAEgZIACgLIAWABIgLBAIgBAHQAAADACADQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAHAAAIgOQAGgPABgMIgBgHIgCgHIgBgHIgBgFQABgIADgEQAEgEADAAQAEAAADADQADAEABAFQABAFAAAJQABAVgIATQgHAVgMALQgJAKgKAAIgBgBg");
	this.shape_11.setTransform(71.9,116.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7D4F4F").s().p("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");
	this.shape_12.setTransform(70.9,71.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BB7777").s().p("AHmKjQnVgLoNgSIgsiCIgCgEIAPAAIAFAAIA7ABIBDACICNADQEPAIEBAOIAGAAICBAIIB/AIIgjB3IgCAAgAHOEbQAhh+AciMQAAAAAAAAQABgBAAAAQABAAAAAAQABgBABAAQAWA5gEA2QgDAkgPAiQgTAtgnApIgEABIgDAAgAKGjqIgFgLQgIgFgMADQgLADgFgKQgFgJAFgJQAIgPAOgCQBDACgUA4IgDAFQgGACgEAAQgKAAgFgKgAqkklIgBgCQAmgdA5gKQAQgBAHAPIACAEQgeApglAAQgZAAgbgSgAG7mPIhlh4QgHgJARgBQCbBCA5CXQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQg6gRg+hJgAFrmQIgCgBQgJgGACgJQABgIAHABIAAgBIAKAGQAEACAEAEQAEAGgGAFQgEACgFAAIgGgBgAlWmvIgKgCQgFADgFgCQgFgCgFgGIgFgIIAAgDIAAgEQABgDADgCIAFgDIABgBIAUABIAGACIACAEIAEAHQADAFgCAGIgCAIIgEAAIgCAAgAEunLIgGgDQgGgEgDgHIAAgDIACgIIACgCIAGgCIAAgBQAIADAHgBQAJAAABAIIAAAIQAAAFgEAEQgFADgGAAIgFAAgAg0ngQgQgFgCgPQAAgFACgCIgBgBQgGgMAGgNQACgFAFgBQAKADACALQACAJAEAKQACAEgCADIAEAEQAEAGgEAFQgDAFgFAAIgEgBgAk5njIgBAAQgFgDACgGIAAgBIAAgDIACgHQADgGAGgCIAJgDQAIABAGAEQAHAEgBAJQAAAFgEAFIgGACQgIACgGAAQgGAAgGgBgADWnuIgCgHIAAgIIAAgBQgBgGAEgEIACgCIABgCIADgCIABgBIAFgBIAAgBQAJgBAGAHQAEAEAEACQAKADACAKQgBAIgIAAIgBAAQgIAAgHADIgGAEQgEADgGAAIgHgIgABsn0IgBAAQgBgIAFgGQAKgJgFgMQgDgIAJgBQAGABAEAEIAAAAQAFADACAGQADAFAAAFIAAABQgFAKgGAIQgFAIgHAAQgFAAgGgHgAAZn8QAAgMAGgJQADgEADgBIAFABQADAAADACIAGAHIADAEIgBAHQgBAEgEADQgGAEgEAGQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgMgCAAgMgAj0oEIgCgEIgBgIIAAgHIAAgIIAEgDIANgFIAIgDQAXgDgIATQgEAKgHAGIgIAGIgCAAQgEACgDAAQgFAAgEgCgAigoTQgCgFAAgFIAAgBIAAgLIAEgDIALgGIAFgCQAMADgGAJIgDAGQgDAHgCAIQgBAHgHAAQgFgDgDgEgABMowIAAgGIgBgVIgHgHIgLgLIgEgDQgcgFggAEIAAABIAAAEIAAALQgBAIADAHQAFAMgGAKIgBAAQgRACgCgRIgBgQIAAgKIAAgEIAAgTIABgEIAEgEIAEgDQgRACgSAIQgOAHgKgLQAAgEABgCQAEgGAGgDIAGgDIACAAQAHgDAFgEQAEgDACgDQAJgOAOgEQAgADAgAIQAWAGAOAOQAKAJAGANQAIAQgHAPIABAEQACARABASQABANgNAEQgNgIgDgSg");
	this.shape_13.setTransform(75.8,67.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A06767").s().p("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BIgFACQgDACgBAEIgBADIAAAEIAFAHQAFAHAFABIAAADIgBADQgHABgFgCIgEgEIgIgHQgFADgCAEgAk3mvQgCAPALAIQARAPAUgHIAEgDIALgMIAEgHIgCgDQgEgEgEgBQgFgBgEADIgHAIIgOgDQgGgCAAgGIABAAQAMADANgEIAGgDQAEgEABgGQABgIgHgEQgHgEgIgBIgJADQgGACgDAFIgCAHIAAAEIAAABIgFgCQgJABgBAKgAjxniIgFABIgBABIgDADIgDADQgEAJADAKQACAIAGAGQAQANATABIAFgCIADgCQAIgIAGgIQAFgHgCgIIgCgDQgEgEgEgBIgBAAQAIgHAEgJQAHgTgXADIgHACIgOAGIgEADIAAAIIAAAHIABAIIADADQAIAFAIgEIABgBQAAAJgJADQgOAEABgLQACgQgQgGIAAAAgADwmpIgIgIQgDgEgEgCQAEgDACgHIACgJIAAABIABAIIACAGIAGAIQAHAAADgDIAGgDIgDAGQgFALgKAAIAAgBgAiPnfQgEgDAEgFIACgDIAAAAQAAAGADAEQACAFAFADQAIAAABgIQABgHADgHQAFgDADgFQABAWAKATQgaAAgSgSgAChneQgDgGgEgDQAGAAADAHIABAEQABAFgBADQgBgFgCgFgAgIn8IADgcIABARQACARAPgCIABAAQAGgKgFgNQgCgGAAgIIAAgLIAAgEIAAgBQAigFAcAGIAEADQgFAAgFABQgNACgMAGQgTAJgDATIAAAFIgBABIgHAQQgDAHgHAFIgCACQgMgIACgUgAgPowQgDgBgDAAIgPgBQgKAHgPAEIgEADIgDgNQADgEAAgFQAAgHAGgFIACgCIANgEQgGADgEAFQgCADAAAEQALAKAOgGQARgIAQgCIgDADIgEAEIAAAEIgBATIAAAEQgBgJgIgGgAgkpQQADgCABgDIAIgCQgFAFgIADIABgBg");
	this.shape_14.setTransform(73.6,62.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#643E35").s().p("AC6HkIgvgBIgcAAIgDAAIAAgBIgcgBIAAgBIgJAAIhBgCIhKgCQgqhOgqhTQhWimgWh/QgeiaA0hzQATgqAeglQBIhYB7gnQAPgEBPgOQBMgNAKgBQAdAAAsACQg0MMgICbIBIADIAAAfIhVgCgAAGgmQhsABh4AIIAAAIQAAAcAGAiQATBxBNCTIBLCQIAzAAIBBACIAoABIAAABIANAAIAAABIAPABIATAAIAAAAQAHjyAOj1IgogBIgfgBIAAAAIgcgBIgJAAIgVAAIgsABgAB2mMIgDACIgEABIghAJIgHACQgjAKgeANQhRAhg1AyQheBZAACOQB4gLBsgEIBBgDIAJAAIAAgBIAfAAIAIAAIAUAAIAKAAIARAAIAQAAIAEhDQAGh/gDh9IAAgFIAAgOIAAgGIgDAAIgXABIgFABIgZADIAAADIgCgBQgGAAgHAFg");
	this.shape_15.setTransform(52.1,79.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#422624").s().p("AEYHNIhTgDIg1gBIAAgBIgWgBIgeAAIAAgBIgKAAIhBgCIhigDIhUihQhWilgVh+QgiixBQh3Qg0BzAeCbQAWB+BVCmQAqBTAqBPIBKACIBBABIAKAAIAAABIAbABIAAABIADAAIAdAAIAuACIBWACIAAAaIgDAAgACeGPIAAgBQAGjsAKjtIgeAAIAAgBIgWAAIgogBIhBAAQhtgBh2AFIAAgIQB3gHBsgCIBBgBIAKAAIAbABIAAAAIAgABIAoABQgOD1gIDyIgLAAgACyhzQAJiggCifIgPABIAAABIgDABIgDABIgqAGIgoAJQgiAJgfAKQhNAag4AqQA0gyBRghQAfgNAigKIAHgCIAhgJIAEAAIADgCQAJgGAGABIAAgCIAagDIAFgCIAWgBIADAAIABAGIAAAOIAAAFQADB9gHB/IgEBEIgPAAg");
	this.shape_16.setTransform(51,85.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#643E35").s().p("AA0HqIhLgDIgXgBIAAgBIgWgBIgogCIAAAAIgEAAIgLAAIgFAAIhVgCIgaAAQAAgHgCgIIgBgSIABAAIAAgBQAHjuAOjyIABgDIAAgUIACgIIABgSIADg0QAGh/gDh9IAAgFIAAgJIABgPIgBgSQACgHACgbIABgVQAngBAmABIAQAAIAEAAIAAABIAjADIAGADQALADARACIAQADQBRAUA6AvQAXASATAXQBtB/gfDvQgVCHhMCzIgXA2Ig1B6IgLAAgAipgWIAAACQgTDrgMDpIBIADIAQAAIAEABIAAAAIA+ACIAAABIAXABIAkACIALAAIBDieQAOggALggQAuh6AOhgQAAgFACgFIg+gJQhFgLg/gJIgHAAIgtgGIAAgCIgogEIAAgBIgEAAIgLgBIgFAAIgjgDIgEAAIgBAAIgBAQgAiTmbIAAAGIAAABIAAAEIAAAQIAAAAQgFCegOCgIAmACIAQABIAEAAIAAABIAkADQALACAPAAIAAABIAXADQBDAHBIAKIAsAGIAVAEQAJighKheQgigtg1geQgZgOgbgLQgVgIgYgGQgYgHgagFIAAgCIgDgBIgBAAIgGgBIgCAAIgFAAIgBgBIgIAAIgDgBg");
	this.shape_17.setTransform(92.1,80.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#422624").s().p("AAMH0IhogFIgCAAIhTgCIgogBIAAg7IAHABIAAgBIgHAAIAAgBQAGjjAKjjIADAAIAAgDIABgEIAAg0IAAAAQAIiRgBiQIAAiEIANAAIACAAIACAAIAEAAIgBAVQgCAbgCAHIABASIgBAPIAAAJIAAAFQADB9gGB/IgDA0IgBASIgCAIIAAAUIgBADQgODygHDuIgBAAIAAABIABASQACAIAAAGIAaABIBVACIAFAAIALAAIAEAAIAAAAIAoACIAWABIAAABIAWABIBMADIgLAaIhBgDgAAxG9QAbhCAdhEQAchFATg9QAbhUALhGIABgKIgngHIiMgWIgsgHIg8gJIgCAAIAAgBIglgEIAAgCIgBAAIgBAAIABgQIABAAIAEAAIAhADIACAAIAGABIgBgBIALABIAEAAIAAABIAoAEIAAACIAsAGIAHAAQBAAJBFALIA+AKQgCAEAAAFQgOBgguB6QgLAggOAgIhDCeIgLAAgAhSguIAHABIgHgBgADEgrQABhzgthPQguhRhegqQgUgKgYgIQgcgJgggGIgCAAIAAgCIgRgCIAAAAIAAgQIAAgEIAAgBIAAgGIAAgBIADABIAJABIAFAAIACAAIAGABIABAAIADABIAAACQAaAFAYAHQAYAGAUAIQAcALAZAOQA1AeAiAtQBKBegJCgIgVgEg");
	this.shape_18.setTransform(88.5,81.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4F3137").s().p("Aj+HXQgqhOgqhTQhVimgWh/QhPmZIMhhQH+Abg7HNQgWCIhLCyIhMCxQjzgMkhgHg");
	this.shape_19.setTransform(70.7,80.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).to({state:[]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.2,141.3);


(lib.drzwiButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.instance = new lib.Drzwi();
	this.instance.parent = this;
	this.instance.setTransform(-5,-79.2,1,1,0,0,0,-5,-79.2);

	this.instance_1 = new lib.DrzwiUchylone();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5,-79.2,1,1,0,0,0,-5,-79.2);

	this.instance_2 = new lib.drzwiUchyloneDown();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-5,-79.2,1,1,0,0,0,-5,-79.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,234.1,264);


// stage content:
(lib._4kamienicaHTML5test = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.soundONbtn.visible = false;
		
		this.soundOFFbtn.addEventListener("click", SoundOff.bind(this));
		
		function SoundOff() 
		{
			createjs.Sound.muted = true;
			this.soundOFFbtn.visible = false;
			this.soundONbtn.visible = true;
		}
		
		this.soundONbtn.addEventListener("click", SoundOn.bind(this));
		
		function SoundOn()
		{
			createjs.Sound.muted = false;
			this.soundOFFbtn.visible = true;
			this.soundONbtn.visible = false;
		}
		
		this.drzwiButton.addEventListener("click", fl_ClickToGoToWebPage);
		this.galeriaButton.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("gallery.html", "_self");
		}
		
		
		this.emailButton.addEventListener("click", dymekEmailStart.bind(this));
		
		function dymekEmailStart(){
		   this.dymekEmail.play();
		}
		
		this.kamienica.addEventListener("click", dymekEmailOff.bind(this));
		this.tlo.addEventListener("click", dymekEmailOff.bind(this));
		
		function dymekEmailOff()
		{
		   this.dymekEmail.gotoAndStop(0);
		}
		
		this.dziadekIgraficiarka.addEventListener("tick", everyFrame.bind(this));
		
		function everyFrame()
		{
		    if (this.dziadekIgraficiarka.currentLabel == "pyta" )
		    {
			    this.graficiarka.visible = false;
				this.graficiarka.gotoAndStop(0);
		    }
		
			if (this.dziadekIgraficiarka.currentLabel == "nieMa" ) 
			{
				this.graficiarka.visible = true;
				this.graficiarka.play();
			}
		
			if (this.dziadekIgraficiarka.currentLabel == "pyta2" )
		    {
			    this.graficiarka.visible = false;
				this.graficiarka.gotoAndStop(0);
		    }
			
			if (this.dziadekIgraficiarka.currentLabel == "stop" )
		    {
			    this.dziadekIgraficiarka.gOdp.stop();
				this.dziadekIgraficiarka.dzPyta.stop();
		    }
		
			if (this.dziadekIgraficiarka.currentLabel == "nieMa2" ) 
			{
				this.graficiarka.visible = true;
				this.graficiarka.play();
			}
		}
		
		this.oknoButton.addEventListener("click", dziadekIgraficiarkaStart.bind(this));
		
		function dziadekIgraficiarkaStart()
		{
		   this.dziadekIgraficiarka.gotoAndPlay("jest");
		}
		
		this.kamienica.addEventListener("click", dziadekIgraficiarkaOff.bind(this));
		this.tlo.addEventListener("click", dziadekIgraficiarkaOff.bind(this));
		
		function dziadekIgraficiarkaOff()
		{
			if (this.dziadekIgraficiarka.currentLabel == "stop" )
			this.dziadekIgraficiarka.gotoAndPlay("koniec");
		}
		
		/* var soundTr:SoundTransform = new SoundTransform();
		soundTr.volume = 1;
		
		soundONbtn.visible = false;
		
		function SoundOff(event:MouseEvent):void
		{
			soundTr.volume = 0;
		    odglosyMiasta.soundTransform = soundTr;
			graficiarka.soundTransform = soundTr;
			soundOFFbtn.visible = false;
			soundONbtn.visible = true;
		}
		soundOFFbtn.addEventListener(MouseEvent.CLICK, SoundOff);
		
		function SoundOn(event:MouseEvent):void
		{
			soundTr.volume = 1;
			odglosyMiasta.soundTransform = soundTr;
			graficiarka.soundTransform = soundTr;
			soundOFFbtn.visible = true;
			soundONbtn.visible = false;
		}
		soundONbtn.addEventListener(MouseEvent.CLICK, SoundOn);
		
		
		kamienica.drzwiButton.addEventListener(MouseEvent.CLICK, goToGaleria);
		kamienica.galeriaButton.addEventListener(MouseEvent.CLICK, goToGaleria);
		
		function goToGaleria(event:MouseEvent):void
		{
		    navigateToURL(new URLRequest("gallery.html"), "_self");
		}
		
		emailButton.addEventListener(MouseEvent.CLICK, dymekEmailStart);
		
		function dymekEmailStart(event:MouseEvent):void
		{
		   dymekEmail.play();
		}
		
		kamienica.addEventListener(MouseEvent.CLICK, dymekEmailOff);
		tlo.addEventListener(MouseEvent.CLICK, dymekEmailOff);
		
		function dymekEmailOff(event:MouseEvent):void
		{
		   dymekEmail.gotoAndStop(1);
		}
		
		dziadekIgraficiarka.addEventListener(Event.ENTER_FRAME, everyFrame);
		
		function everyFrame(event:Event):void 
		{
		    if (dziadekIgraficiarka.currentLabel == "pyta" )
		    {
			    graficiarka.visible=false;
				graficiarka.gotoAndStop(1);
		    }
			if (dziadekIgraficiarka.currentLabel == "nieMa" ) 
			{
				graficiarka.visible=true;
				graficiarka.play();
			}
			if (dziadekIgraficiarka.currentLabel == "pyta2" )
		    {
			    graficiarka.visible=false;
				graficiarka.gotoAndStop(1);
		    }
			if (dziadekIgraficiarka.currentLabel == "stop" )
		    {
			    dziadekIgraficiarka.gOdp.stop();
				dziadekIgraficiarka.dzPyta.stop();
		    }
			if (dziadekIgraficiarka.currentLabel == "nieMa2" ) 
			{
				graficiarka.visible=true;
				graficiarka.play();
			}
		}
		
		oknoButton.addEventListener(MouseEvent.CLICK, dziadekIgraficiarkaStart);
		
		function dziadekIgraficiarkaStart(event:MouseEvent):void
		{
		   dziadekIgraficiarka.gotoAndPlay("jest");
		}
		
		kamienica.addEventListener(MouseEvent.CLICK, dziadekIgraficiarkaOff);
		tlo.addEventListener(MouseEvent.CLICK, dziadekIgraficiarkaOff);
		
		function dziadekIgraficiarkaOff(event:MouseEvent):void
		{
			if (dziadekIgraficiarka.currentLabel == "stop" )
			dziadekIgraficiarka.gotoAndPlay("koniec");
		}
			
		
		
				
				
				
				*/
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(240));

	// soundOFF
	this.soundOFFbtn = new lib.soundOFF();
	this.soundOFFbtn.parent = this;
	this.soundOFFbtn.setTransform(1860,0.3);
	new cjs.ButtonHelper(this.soundOFFbtn, 0, 1, 2, false, new lib.soundOFF(), 3);

	this.timeline.addTween(cjs.Tween.get(this.soundOFFbtn).wait(240));

	// soundON
	this.soundONbtn = new lib.soundON();
	this.soundONbtn.parent = this;
	this.soundONbtn.setTransform(1860,0.3);
	new cjs.ButtonHelper(this.soundONbtn, 0, 1, 2, false, new lib.soundON(), 3);

	this.timeline.addTween(cjs.Tween.get(this.soundONbtn).wait(240));

	// dymekEmail
	this.dymekEmail = new lib.dymekZmailem();
	this.dymekEmail.parent = this;
	this.dymekEmail.setTransform(1765.6,321.2,1,1,0,0,0,268.8,-82);

	this.timeline.addTween(cjs.Tween.get(this.dymekEmail).wait(240));

	// LATARNIE
	this.instance = new lib.latarnia();
	this.instance.parent = this;
	this.instance.setTransform(1940,332,1,1,0,0,180);

	this.instance_1 = new lib.latarnia();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1041,318);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(240));

	// cmy
	this.instance_2 = new lib.cmy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1460.2,324.6,1,1,0,0,0,-42.1,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(240));

	// dziadek i graficiarka
	this.dziadekIgraficiarka = new lib.dziadekigraficiarka();
	this.dziadekIgraficiarka.parent = this;
	this.dziadekIgraficiarka.setTransform(1709.9,83.7,1,1,0,0,0,208.6,-316);

	this.timeline.addTween(cjs.Tween.get(this.dziadekIgraficiarka).wait(240));

	// oknoButton
	this.oknoButton = new lib.oknoButton();
	this.oknoButton.parent = this;
	this.oknoButton.setTransform(1637.3,13.1);
	this.oknoButton.cache(-2,-2,149,145);
	new cjs.ButtonHelper(this.oknoButton, 0, 1, 2, false, new lib.oknoButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.oknoButton).wait(240));

	// graficiarka
	this.graficiarka = new lib.graficiarka();
	this.graficiarka.parent = this;
	this.graficiarka.setTransform(1832.9,502.8,1,1,0,0,0,370.7,53.8);

	this.timeline.addTween(cjs.Tween.get(this.graficiarka).wait(240));

	// e-mail Ramka
	this.emailButton = new lib.emailRamkaButton();
	this.emailButton.parent = this;
	this.emailButton.setTransform(1612.8,396.4,1,1,0,0,0,27.1,25.9);
	new cjs.ButtonHelper(this.emailButton, 0, 1, 2, false, new lib.emailRamkaButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.emailButton).wait(240));

	// e-mail
	this.skrzynka = new lib.email();
	this.skrzynka.parent = this;
	this.skrzynka.setTransform(1623.2,411.1,1,1,0,0,0,119.3,-38.8);

	this.timeline.addTween(cjs.Tween.get(this.skrzynka).wait(240));

	// STELAZ
	this.instance_3 = new lib.stelaz();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1237,419);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(240));

	// szczurza zaslona
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C87A48").s().p("AkHE7QhegGghgfIgHgHQgLgOABgRIADgOQAAgpAOghQAPgmAhgbQA4guBSgBQBQgBA6ArQA+AuAABOQAAAugZAWQghAdhLAJQglAEgtAAIgsgBgAA3DsQgKgdAAgmQAAhEAlgjQAhgeAyAAQAvABAkAaQAIAGAHAHQgeBZAICCQgmgFgagPQgZAVgRAAQg6AAgWg8gAmPBCIgeAAIAAkeQA4AAA5gGIAKAFQAOAIANAKQA3ArAAA+QAAAzgXAoQgpBGhmADIgJAAgAi4hOQgJghgCgnIABghQAAgUANgSQAOgUAfgSQA3ghBIgGQBMgHAyAgQAgAUAOAgQAMAbAAAkQAABYgZAgQgxBAilAAQhbAAgdhogADghaQgDgVACgaIACgZQAAglABgWIADgWQANg6AtgHQBQgKA3AFIAIABIAADUQhCAagqAwQgMADgFAAQhEAAgNhDg");
	this.shape.setTransform(1087.8,535.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B36544").s().p("AljDmQAhAfBeAGIh/ADgAAFDiQAZgXAAgtQAAhOg9gvQg6gphQABQhSABg4AsQghAcgPAmIAAhWQBmgDAphHQAXgnAAgzQAAg+g3grQgNgKgOgIIB9AAQgNASAAAUIgBAhQACAnAJAhQAdBpBbAAQClAAAxhBQAZggAAhYQAAgkgMgbIA/AAQgBAWAAAlIgCAYQgCAbAEAVQAMBDBEAAQAFAAAMgDQgeAhgTAsQgGAMgEANQgHgHgIgHQgkgZgvAAQgyAAghAdQglAjAABDQAAAnAKAdQAWA8A6AAQARAAAZgVQAaAPAmAEIAAAJIl6AIQBLgJAggcg");
	this.shape_1.setTransform(1084.3,540.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B06B4F").s().p("ANBiEIADgBQATB/gNCJIgBADQgeh4AWiSgAs3BdQgHgPgFgPQgSg6ALhCIAEgVIAAgBIADAPQAUBUAEBdIgBAEQgGgKgFgKg");
	this.shape_2.setTransform(1210.2,544.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4F3137").s().p("At0CgIg5gBIg3gBIAAgjQgCg8AUg6IAJgUQAbhBAvgnIAEAbQgLBDASA5QAFAQAHAOIAMBigANFifQAPALAPANQA/A5AlBdQASAvAMA6IgfABIhjAEIhGADg");
	this.shape_3.setTransform(1215.1,548);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7A4949").s().p("AwKDmIAAgDIgBgJQgHiCAehYQAEgMAGgMQATgtAdghQArgwBCgbIAABUIgPAHIAOEjIADAcIi/AEIAAgHgAvMAiIgJAVQgUA6ACA8IAAAjIA3ABIA5ABIAYAAIgMhiQAFALAGAKIABgFQgEhdgUhUIgDgPIAAABIgEAVIgEgbQgvAngbBAgAL1CvIAMk/QgMgGgNgEIAAhSQBEAWA0AqQATAPASATQBqBxAeDeIkWAFgAMaCyIBGgDIBjgEIAfgBQgMg6gSgvQglhdg/g5QgPgNgPgLgAMNhxQgWCSAeB5IABgEQANiKgTh+IgDABg");
	this.shape_4.setTransform(1215.4,543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(240));

	// sczur
	this.instance_4 = new lib.szczur();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1500,400,1.001,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(240));

	// swiatlo off
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DD8B55").s().p("AADAEIgGgHIADADIACACIABABIABABIgBAAg");
	this.shape_5.setTransform(1152.7,63.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EEA26F").s().p("AAAAAIABAAIgBAAg");
	this.shape_6.setTransform(1272.7,111.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7D4F4F").s().p("AABAAIABAAIgDAAIACAAg");
	this.shape_7.setTransform(1321.6,126.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A06767").s().p("ALjFFIAIgBIgFABgArqlDIADgBIAAACIgDgBg");
	this.shape_8.setTransform(1152.7,112.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E09563").s().p("AAAAAIAAAAIAAABg");
	this.shape_9.setTransform(1278.3,89.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4F3137").s().p("AvUFVQhEh1gihbIgNgpQgMgQgBgCIA0gDIEfgTIAGA9IAZEgIjFASIgthOgArYAsIEKgYQgOBQgXBaQgaBfghBkIiSANgAH0EHIgKgYQhDihgSh5IgBgKIE8gdIAHBtIAHBoIAMC1IjcANIgag+gALOCFIABgBIgBAAgAMQCDIgKjZIAAgCIDXgRICEgKQgVBzg7CQQghBRghBJIi3ALgAw9i8QBAhWCpguIAAAAQAGgBAFgDQAJABAIgEIAWgFIACAVIAcFDIkQAfIhFAIQgniTBDhcgArWgBIgRlUQCggSBQBMQAPATALAYQAXAxAHBEQgCAwgHA1IkOAdgAK5mhIAUElIk+AMQgLkeE1gTgAL0miIAYAAIADAAQB8AGBSAhQAcAMAWAOQBOBDALB1IgCATIgBALIiXAFIiuAHIgdABg");
	this.shape_10.setTransform(1200.9,98.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#643E35").s().p("AwgEwQgVgkgTgjQgihKgSg+QhqlpF6hnIAAgBQAHgBAGgEIAIABQAGgBAFgDIAagFQArgJAmgDIAAAAIADAAIACgBIDmA0IADACIAgAfIAHAIIAHAKQANAlAGAuIABAAIADABQAAAJABAJIABACQAFAGAFAFIgIABIgEAFQACAiAAAlIgBAVQgIhEgXgxQgLgXgPgTQhOhni3AVIAVF2IARgCIEOgeIgFAhIkZAWIAUFvIgQACIgZkgIgFg+IgBgPIAAgBIgjADIk6AYIACAGQAfBqBUCPIA7BmIglAEQgOgbhQiKgAtYkqIAAAAQlIBZBREyIAHgBIBFgIIEQgeIgclDIgBgVIgCgbIgTADIgXAFQgHAEgKgBQgFADgGABgAHVFTIgIgTIgTguQhMi2gTiJQhCm8HqAWQD5AMBjB9IAMATQAMAkAEApIAAABIABACIAAACIACACIACABQAGAOAPAKIAAAAQgLAAgIgCIgBABIgBABIgBAAIgCABQABAlgEAoQgMh1hNhDQhchPi6gJIgbAAIAQE8IAUAAIAdgCICvgGICWgGIgDAQIlxAXIATGbIgaABIgMi1IgHhoIgHhsIgBgRIlQAWIABAKQASB5BDChIAvBuIgxADIgPgjgAGMhCIAUAAIE+gMIgUkmIgCgYQlVALAZE/g");
	this.shape_11.setTransform(1199.2,93.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#422624").s().p("AviFJQhTiPgghqIgBgGIE5gZIAjgCIAAABIABAPIkfATIg0ADQAAADAMAPIAOApQAhBcBEB0IAuBPIgHAAIg8hmgArfAsIEagWIgCAJIkJAYIAYFiIgTACgAHcDjQhDihgRh5IgCgKIFQgWIABARIk8AcIACAKQARB5BDCiIAKAXIAbA+IgLABIgvhugAL4hZIFygXIgCAIIiDALIjXARIgBAAIAAABIALDaIAICxIgUACgAtilMIAAAAQAGgBAGgDQAJABAIgEIAWgFIATgDIACAbIgWAEQgIAFgJgCQgGAEgGAAIAAABQipAug/BWQhDBbAnCTIgIABQhQkyFHhZgAr0lhQC2gVBPBnQhQhNigATIAQFTIABAJIgSACgAK/muIACAYQk1ATAKEfIgTAAQgak/FWgLgALnmuIAbAAQC5AJBcBPQgXgOgbgLQhSgih8gFIgDAAIgYgBIAOEkIgUABgAnWlPIABABIAGAIIAAABIgHgKg");
	this.shape_12.setTransform(1200.1,97.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[]},134).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},105).wait(1));

	// okno maska (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuiFVQhUiPgfhqIAAAAQgMgQgBgCIAAAAIFUgWIAeFdIjFASIgthOgAqmAsIEKgYQgOBQgXBaIAAAAQgZBfgiBkIAAAAIiSANgAIBFJIAEAAIAAAAgAI2FGIAKgBIDcgNIAAADIjmAMIAAgBgAIcDvQhDihgSh5IAAAAIgBgKIAAAAIE8gcIAaGJIjcANIgkhWgAM3E2IATgBIC4gLIgDAHIAAAAIjIAKgAM4hYIFbgbQgVBzg7CQIAAAAQghBRggBJIAAAAIi4ALgAwLi8QBAhVCpgvIAAAAIAAAAQAGgBAFgDIAAAAQAJABAIgEIAAAAIAXgFIAAAAIAdFYIlVAnQgniTBDhcgArQAkIAAABIgiABgAq1lVQCggSBRBNIAAAAQAtA7ALBkIAAAAQgDAwgHA1IAAAAIkOAegALrmhIAUElIk+AMQgLkeE1gTgAMmmiIAbAAIAAAAQCmAIBbA5IAAAAQBNBDAMB1IAAAAIgDATIAAAAIgBALIAAAAIliAOgAyai4IADgBIAAAAIAAABIAAAAIgDAAgAmrlaIAGAGIAAAAIABADIAAAAIgHgJgASAl4IAJAJIAAAAIACAGIAAAAIgLgPg");
	mask.setTransform(1195.9,98.4);

	// parka okno
	this.instance_5 = new lib.parkaOkno();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1217.3,113.8,1,1,0,0,0,-286,-336.1);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(134).to({_off:false},0).to({_off:true},105).wait(1));

	// designed by Hanna
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E99863").s().p("AoSBcIgCgBIgBgBIABgBIABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIACAAIADgDIACgFIAAgMIAAgSIAAgZIAAgRIAAgJIAAgEIgBgGQgCgDgDAAIgCAAIgEAAIgBAAIgBgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIAIAAQADAAAEABIAFAAIAFAAQADgBAEAAIAGAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAABAAIABABIgBABIgCAAIgCAAIgCAAQgBAAAAAAQgBAAAAABQgBAAAAABQgBAAAAABQgBACAAAEIAAAEIAAAJIAAARIAAADIAAABIABAAIA2AAIAAgBIAAgDIAAgRIAAgJIAAgEIgCgGQgCgDgCAAIgDAAIgDAAIgCAAQgBAAABgBQgBAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIAHAAQADAAAFABIAFAAIAFAAQACgCAEABIAGAAIADABIAAABIAAABIgCAAIgCAAIgCAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAABAAAAQgCACABAEQgBACAAADIAAAJIAAARIAAAZIAAARIABAMQAAADABADQABABAEABIADAAIAEABIABAAIABABIgBABIgCAAIgNAAIgJAAIgEAAQgEgBgDABIgGAAIgCAAIgBgBIAAgBIACAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIACAAIADgCIABgGIABgMIAAgRIAAgNIgBgBIg1AAIgBABIAAANIAAARQgBAHABAFQAAADACADIAEACIADAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAIACAAIAAABIgBABIgCAAIgMAAIgJAAIgFAAQgEAAgDABIgGAAgAprBbIgIAAIgEAAIgGABIgGAAIgCgBIAAgBQgBgBABABQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIACAAIACAAIADgCIABgFIAAgHIAAgEIAAgKIgBgIIgCgFIgCgDQgEgEAAgEIgGgJIgGgJIgEgHIgEgFIgEgDIgCgBIgDgBIgBAAIgBgBIABgBIACAAIAEAAIAGAAIAFAAIAGAAIAIAAIACAAIAAABIgBABIgCAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAADIABADIACAFIAGAJQACAFADAEQACAFADADIADAFIABgEIAFgHIAFgJQACgGACgCQABgDACgCQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIgBgBIgCgCIgBAAIgBgBIAAgBIACAAIAGAAIAGAAIAEAAIAFAAIAEAAIACAAIAAABIAAABIgCAAIgCAAIgDACQgBAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAABQgCABgCAFQgEADgBAGQgEAEgDAGQgDAEgCAFIgDAFQgDADABADIABAGIAAAKIAAAEIAAAHQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABIAEACIADAAIADAAIACABIAAAAIAAABIgCABIgMgBgArJBcIgGgBIgGAAIgFAAIgDAAIgEAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAIgEAAIgCAAIgBgBQAAgBABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIADAAIACgBIACgCIABgEIABgLIAAgPIAAgUIgBgPIABgHIAAgFQgBgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAIgEgDIgCAAIgCAAIgCgBIgBgBIABAAIACAAIAHAAIAGAAIAEAAIAHAAIAGAAIAFAAQAKAAAHADQAFADACAFQACAEAAADQAAAFgCAFIgFAGQgEACgDAEIALAFIAIAIQADAFABAIQgBAFgDAHQgEAGgGAEQgIADgKABIgEAAgArEBWIAGgBQADgCADgDIADgLIgBgHQgBgEgDgDQgCgFgFgCIgEgDIgGAAIgGAAQgBgBABABIAAAcQgBAFACADQAAACADACIAFABIABAAIADAAgArOAnIADAAQADgBADABIAEgCIAEgEIABgIIgBgJQgDgGgCgCQgDgDgGABIgDgBIgCAAQgBAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAABABIAAAdIAAACIABAAIAAAAIACAAgAtkBbIgIAAIgHgBIgFAAIgDAAIgEAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBABAAAAIgEAAIgBgBIgBgBQgBgBABABQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIACAAIACAAIADgCIABgFIAAgLIAAgOIAAgVIAAgPIAAgHIAAgFIgBgEQgBgDgDAAIgCAAIgDAAIgBgBIgBAAIABgBIACAAIAGAAIAHAAIAFAAIAFAAIAHAAIAIAAQAGgBAKACQAIAAAKAEQAIACAHAIIAIAMQADAHABAMIgCANIgFAMIgHAIIgIAGQgGAEgHABIgUADIgHgBgAtvAHIAAABQgBACABAFQgBACABAGIgBAKQAAAHABAIQgBAJABAHIAAAIIABAFQgBABAAAAQAAABABAAQAAABAAAAQAAAAABABIAFADIALACQAIAAAHgCIAMgGQAGgHACgGQACgIAAgJIgCgOQgCgGgCgDQgDgGgCgBQgHgGgFgDQgGgDgGAAIgLgBIgEAAIgDABIgBAAIgBABgAjgBaIgDgBIgJgJIgNgMIgOgNIgNgNIgKgKIgGgGIAAAAIABAwQAAAHABADQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAIAEAAIADABIABAAIABABIgBABIgCAAIgKAAIgGAAIgFAAIgIABIgCgBIgBAAIgEABIgKAAQgHgBgHAAIgDAAIgBgBQAAgBABABQgBAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIABgBIAAgCIgJgXIgBgBIgeAAQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgGAQIgCAEIAAADIABADIAEABIADAAIAAABIAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgHAAIgGAAIgGAAIgJAAIgCAAIAAgBIAAgBIADAAQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAAAAAQAEAAACgDIAEgHQAPgkASgpQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAIACACIADAKIAHAQIAIARIAHASIAGAOQACAFADADQABADACABIADABIACAAIACAAIABABQAAgBABAAIABAAIADAAIADAAIADgEIAAgLIABhIQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIACABIADABIAEAFIAJAKIALAMIAOANIAHAHIAJAIIAHAHIAEAEIAAAAQgBgaAAgbQAAgHgBgBIgEgEIgDAAIgDAAIgCgBIAAAAIABgBIACAAIAJAAIAHAAIAEAAIAIAAIACAAIABABIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgCAAIgCAAQgBAAgBAAQgBAAAAABQAAAAgBABQAAAAAAABIgBAIQgBAmAAAlIAAADIgCABIgCgBgAlwAYIgMAdIAAABIAAAAIAYAAIABAAIAAgBIgMgdIAAgBIAAgBIAAABIgBAAIAAABgAv7BaIgDgCIgJgJIgNgNIgOgNIgNgNIgKgLIgFgGIgBAAIACAxQgBAHACADQAAABAAAAQAAABABAAQAAABAAAAQABAAABAAIADABIADAAIACAAIAAABIAAABIgCABIgLgBIgFAAIgFAAIgIAAIgCAAIgBgBIABgBIABAAIADgBIACAAIADgEIABgKIABhIQgBAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIADABIACADIAEAEIAJAJIAMANIANANIAHAIIAJAIIAHAHIAEAEIAAAAQgBgaAAgbIgBgIIgDgEIgEAAIgDAAIgBAAIAAgBQgBAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIADAAIAJAAIAGAAIAFAAIAHAAIACAAIABABIAAABIgCAAIgCAAIgCAAQgBAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABQgCACABAFQgDAnABAmIAAADIgCABIgCgBgAhqBZIgCgBIgKgKIgNgLIgOgNIgNgNIgKgKIgGgGIAAAAQAAAXACAZQgBAHACADQAAAAAAABQAAAAABABQAAAAAAAAQABABABAAIADAAIADABIACAAIAAABIAAABIgCAAIgLAAIgFAAIgFAAIgJABIgCgBIgBgBIABgBIABAAIADAAIADAAIADgEIABgLIAAhIQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIADABIADACIAEAEIAIAKQAGAEAGAIIANANIAIAHIAKAIIAGAHIAEAEIAAAAQgBgaAAgbIgBgIQAAgBgBAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgDAAIgBAAIAAgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQABgBAAAAIADAAIAJAAIAGAAIAFAAIAHAAIACAAIABABIAAABIgCAAIgCAAIgCAAQgBAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABQgCACAAAFQgCAnACAlIgBADIgBABIgDgBgAujBaIgNAAIgKAAIgIAAIgGgBIgDAAIgEAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBABAAAAIgEAAIgBgBIgBgBQgBgBABABQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIACAAIACAAIADgCIABgFIAAgLIAAgOIAAgVIAAgPIAAgHQgBgDABgCQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAgCgEgBIgCAAIgCAAIgBAAIgBAAQgBAAAAAAQAAgBAAAAQAAAAABAAQAAAAABgBIACAAIAGAAIAHAAIAFAAIAEABIAIAAIAJAAIAIAAIAEAAIADAAIACgBIABAAIABAAIABAAIAAABQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAABAAQgBACAAAEIgBADIAAADIAAADIAAABQgBAAAAABIgBgBIAAgBIAAgCIgBgDIgCgCQgCgDgEABIgEAAIgGgBIgGAAIgDAAIgBAAIAAABIAAAfIABABIAEAAIAHAAIAGAAIAEAAIAEAAIACgCIABgBIABAAIABABQAAAAAAAAQAAAAgBAAQAAABAAAAQAAABABAAQgBACAAAFQAAAAAAAAQAAAAgBABQAAAAAAABQAAAAABABIAAADIAAACQgBAAAAAAQAAAAgBAAQAAAAABABQAAAAAAAAIgBABIgBAAIAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgBgCIgCgDQAAgBgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAIgEAAIgFAAIgGAAIgEAAQgBgBAAABQgBAAABABIAAAKIgBAFIABAHIAAAFQAAAHAEACQADACAKAAQACgBADAAIAGgBIAEgDIACgGQgBAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAgBABAAIABABIAAACQAAABgBAAQAAAAAAABQAAAAAAABQAAABABAAQgBACAAAEIgBADIgCADIgEAAgAycBWQgKgDgIgGQgJgGgEgJQgEgJgBgMQAAgKAEgHQABgJAGgFQAFgGAGgDQAIgFAJgBQAIgBAIAAQAFAAAEABIAIABQAEgBABACIAFABIAFAAIABABIABABIgBABIAAAGIAAANIgBACIgBAAIgBAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAABAAIgBgFIgDgGIgGgFIgJgDQgGgCgHAAQgDAAgEABQgFgBgDACQgFABgDAEQgFADgDAJQgEAGAAAMQAAAMAGALQAFAJAJAHQAKAGANABIAFAAQAAgBAAAAQABAAAAAAQABAAABgBQAAAAABAAIACgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAIAAgLIAAgIIgBgGQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAIgEgCIgCAAIgDAAIgBAAQgBAAAAAAQAAgBgBAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIACAAIAHAAIAHAAIAFAAIAHAAIAHAAIACAAIABABQgBAAAAABQAAAAgBAAQAAAAABAAQAAAAAAAAIgBAAIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAQgBAAgBAAQAAAAgBAAQgBABAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAABQAAAAAAABIAAAHIAAAIQgBAGABAHIAAADIgBABQgGABgEACQgGAAgEACQgGgBgFABIgVgDgAhZBYIgBgBIAAgBIADAAIACAAQAFgCACgCIAEgHQAOgkARgoQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAABAAIABADIAEAJIAGAPIAJASIAIASQACAIAEAGQACAFACADIADADIADABIACABIACAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAABABIgBABIgEAAIgJABQgHgBgHAAIgDAAIgBgBQAAgBABABQgBAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIABgBIAAgCIgKgXIgBgCIgeABQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgGAQIgBAEIgBADIABADIAEABIADAAIABABIgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgHAAIgHAAIgFAAIgKABIgBgBgAgrAVIgMAdIAAACIAZgBQgBAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAIAAAAIgMgdIAAgBIgBAAIAAAAIAAAAIAAABgAA+BXIgCgBIgBgBIABgBIABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIACAAIADgDIABgFIABgMQgBgJAAgJIgBgZIAAgRIAAgJIgBgFIgBgGQgCgDgDABIgCAAIgDAAIgCAAIAAgBQgBAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQADgBAEABQADgBAEACIAFAAIAFAAQADgCAEAAIAFAAQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAIABABIAAABIgCAAIgCAAIgCAAQgBAAAAAAQgBAAAAABQgBAAAAABQgBAAAAABQgBACAAAEIAAAFIABAJIAAARIAAADIAAABIABAAIA1gBIAAgBIAAgDIAAgSIgBgIIAAgFIgCgGQgCgDgCABIgDAAIgDAAIgBAAIgBgBQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAHAAQADgCAFACIAFAAIAFAAQACgBAEAAIAGAAIACABIABABIgBABIgCAAIgBAAIgCAAQgBAAgBAAQAAAAgBABQAAAAgBABQAAAAAAABQgCACABAEQgBABABAEIAAAIIABASIABAYIAAASIACAMQAAADABADQABABAEABQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAIAEAAIABAAIABABIgBABIgCABIgNAAIgJAAIgEAAQgEgBgDABIgGABIgCgBIgBgBIAAgBIACAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAIACgBIADgCIABgFIAAgNIgBgSIAAgMIgBgBIg1ABIgBABQAAAGABAHQgBAJABAIQAAAHABAFIACAGIAEACIADAAIAEABIACAAIAAABIgBABIgCAAIgMAAIgJAAIgFAAQgEAAgDABIgGAAgAzbBWIgIgBIgEAAIgGABIgGAAIgCgBIgBgBQAAgBABABQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIADAAIACAAIACgCIABgEIABgLIAAgPIAAgVIgBgPIABgHIAAgFIgCgDQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAAAIgDAAIgCAAIgBgBIgBgBQAAAAAAAAQgBAAAAAAQABAAAAAAQAAgBABAAIACAAIAGAAIAGABIAFAAIAEAAIAGAAIAFAAIACAAQAAAAAAAAQgBAAAAAAQABAAAAABQAAAAABAAQgBAAAAABIgBAAIgCAAIgCAAQgBAAgBAAQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAAAQAAAAgBAAQAAABAAABQAAAAABABIAAAFIgBAHIAAAPIAAAVQAAAIABAIQgBAFABAFQAAABAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAAAQAAABABAAQABAAABAAIADABIADAAIACAAIAAABIAAABIgCAAIgMAAgA00BVIgJgDIgCgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgGQAAgEABgCQgBgBAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIAAgCQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIABABIAAABIAAADIABADQAAAFAEACIAIAEIAIACQAHAAAFgEQAEgGABgGIgBgFIgEgFIgIgGQgDgDgEgCQgLgHgEgGQgFgGABgJQgBgIAFgFQADgEAIgEQAGgEAKACQAGgBAFACIAHABQAAgBAAABIABABIAAAFQgBACABAIIgBADIgBABQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgBgDIgCgFIgFgDQgEgCgFAAQgFgBgDACQgFABgBADQgEADABAEIABAGQAAACAEADIAIAGIAFADIANAJIAHAKQACAEAAAGQgBAGgCAGQgEAFgGAFQgFADgFABQgGAAgEABIgLgBgACxBUIAAgBIAAgBIADAAIACAAQAEgBACgCIADgHIAdhOQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIADABIABAEIAEAIIAHAQIAJASIAIARIAHAOQACAFADADIAEAEIACABIADAAIACAAQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAABIgFABIgJAAQgHgBgIABIgCAAIgBgBQgBgBABABIABgBIABgBIABgCIgLgYIgBgBQgPAAgPABQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgFAQIgCAEIAAADIABADIAEABIADAAIABABIgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgEgBgDABQgEgBgDABIgFAAQgFAAgEABIgCgBgADcAQIgKAeIAAABIAAAAQAMgBAMABQAAgBABAAIAAAAIgOgeIAAAAIAAgBIAAABIgBAAIAAAAgA1bBTIgMAAIgKAAIgIgBIgHAAIgDAAIgEAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAABAAAAIgEAAIgCgBIgBgBQAAgBABABQgBAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIACAAIADAAIACgCIABgFIABgKIAAgPIAAgVIgBgOIABgHIAAgFQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgDgEAAIgCAAIgDAAIgBgBIgBgBQAAAAAAAAQgBAAABAAQAAAAAAAAQAAgBABAAIACAAIAHAAIAGABIAFAAIAFAAIAIAAQAEgBAFABIAIAAIAEAAIADAAIACAAIABgBIABAAIAAAAIABABQgBAAAAAAQAAABgBAAQAAAAABAAQAAABAAAAQgBACABAEQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAADIAAADIgBABQgBAAABABIgCgBIABgBIgBgCIAAgDIgCgCQgCgCgEABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgGAAIgGgBIgEAAIgBAAIAAABIAAAeIABABIAEAAIAHAAIAHAAIAEAAIAEAAIACgBIABgBIABgBIABABQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBABABAFQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIAAADIAAACQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAABABIgBABIgBgBIAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBIgBgCIgCgDQgBgBAAAAQAAAAgBAAQgBAAAAgBQgBAAgBAAIgDAAIgGAAIgGgBIgEAAQgBAAABABQgBgBAAABIAAAKIAAAGIAAAGIAAAGQAAAGAEACQAEACAJABQACgBAEAAQADgBADAAIADgDIACgGQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQgBgBABAAIABABIABACQgBABAAAAQAAAAgBABQAAAAABABQAAABAAAAQgBACABAEIgBAEIgCACIgFAAgAEdBTIgCgBIgBgBQgBgBABABIACgBIADAAIACAAIACgCIABgFIAAgKIgBgPIgBgVIgBgOIAAgIIAAgFQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAIgCAAIgDAAIgBgBIgBgBIABgBIACAAIAGAAIAGAAIAEgBIAHAAIAGAAIAFAAQALAAAGADQAGACACAFQACAFAAADQABAFgCAEIgFAIQgEABgCAEIAKAEIAJAJQADAEABAJQAAAGgCAGQgEAFgGAFQgIADgKABIgEAAIgGAAIgGAAIgFAAIgDAAIgEAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABAAAAIgEAAgAFCBMIAGgBIAGgFIACgLQgCgCAAgFQgBgEgDgDQgCgFgFgCIgEgDIgHAAIgFAAQgBAAAAABIACAcQAAAFABADQAAACAEACIAFAAIABAAIADAAgAE1AeIADAAIAGgBIAEgCIAEgEIABgIIgCgJQgDgGgCgBQgEgDgFABIgDAAIgDAAQgBgBABABQgBAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAPACAOIAAABIABAAIAAAAIACABgA3gBQIgIAAQgDgBgEAAIgFAAIgDAAIgEAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAIgEAAIgBAAQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAAAABAAQgBgBABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIADAAIACgBIADgCIABgEIAAgLIAAgPIAAgUIAAgPIAAgHIAAgEQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQgBgBgBAAIgCAAIgCAAIgBgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQABAAAAgBQAAAAABAAIACAAIAGAAIAHAAIAFABIAFAAIAHAAIAIAAQAHgBAJACQAJAAAJAFQAIABAHAIIAIANQADAGABAMIgCAOIgFALIgHAIIgIAGIgNAFIgUACIgHgBgA3rgDIAAACQgBABABAEQgBADABAGIgBAJQAAAIABAHQgBAIABAIIAAAIIABAFQgBABAAAAQAAABABAAQAAABAAAAQAAAAABABIAFADIALACQAIAAAHgCQAGgCAGgEQAGgGACgGQACgIAAgJIgCgOQgCgGgCgDQgDgGgCgBIgMgIQgGgDgGgBIgLAAIgEgBIgEABIgBAAIAAABgAF2BRIgCgBIgBgBQgBgBABABIACgBIADAAIACAAIACgCIABgFIAAgLIgBgPIgBgUIgBgPIgBgIIAAgEQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAAAgBgBQgBgCgDgBIgCABIgCAAIgCgBIgBgBIABgBIACAAQADgBAEAAIAGAAIAFAAIAFAAIAIAAIAIgBIAIAAIAEAAIADAAIACgBIABAAIABAAIABAAIAAABQAAAAAAAAQAAAAgBABQAAAAAAAAQAAABABAAIAAAGQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIAAACQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAIAAACQgBgBAAABIgBAAIAAgBIgBgCIAAgCIgCgDQgCgCgEABQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQgDAAgDABIgFAAIgEgBQgBAAAAABIAAABQAAAPABAPIABABIAAAAIAEAAIAHgBIAHAAIAEAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAIACgCIABgBIABAAIABABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgCACACAEIAAADIAAADIAAACQgBABAAAAQAAAAAAAAQAAABAAAAQAAAAABAAIgBABIgBAAIAAgBIgBgCIgBgCIgCgDQAAgCgFAAIgDAAQgEgBgCABIgFAAIgEAAQgBAAAAABQgBgBABABIAAAKIAAAGIABAHIAAAGQABAGAEACQADACAKgBIAFAAQADgCADAAIAEgDIABgGQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQgBgBABAAIABABIABACQgBABAAAAQAAAAAAABQAAAAAAABQAAABABAAQgBACAAAEIAAADIgCADIgFAAIgMABIgKAAIgIAAIgHAAIgDAAIgEAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABAAAAIgEAAgAHGBPIgBgBIgBgBQgBgBABABIACgBIACAAIACAAIADgDIAAgEQgBgEABgHIgBgPIgBgVIgBgOIgBgIIAAgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQgBgBgBAAIgBAAIgDAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIABgCIACAAIAGAAQADgBADABIAFAAIAFAAIAGgBIAGAAIACAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAABAAIAAABIgCAAIgDAAIgCAAQgBAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAABQAAAAAAABIAAAFIAAAIIABAOQAAAKACALQAAALABAHQABAFACACIAGACIAKABQAFgCAEABQADgBACgCIACgEIABgEQgBAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAIABgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIAAACIAAADQgBACABAEIAAAFIAAAAIABAAQAEgBABgCIAEgHQAMgnAQgoQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAABIACADIAEAJIAHAQIAJARIAJASIAHAOIAFAIQABADADABIACABIADABIACgBQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAABIgFABIgJAAIgPAAIgCAAIgBgBQgBgBABABQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIABgBIAAgCIgLgXIgBgCIgeABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAABABQgEAHgBAJQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAIAAADIABADIAEABIADAAQAAAAAAAAQgBAAAAAAQABAAAAABQAAAAABAAIgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgHAAQgEgBgDABIgFAAQgFAAgEABIgBAAIgFAAQgHAAgFABIgKAAQgFgBgDABIgIAAIgDAAIgEAAIgFABIgEAAgAIqAHIgKAfIAAABIAYgBIABgBIAAAAIgOgeIAAAAIAAgBIAAABIgBAAIAAAAgAKsBCQgPgGgGgNQgJgPAAgNQgCgNAEgJQAEgMAIgIQAGgKAKgDQAKgGANABQAPgDAMAJQANAFAJAPQAGAPACAPQABANgGAPQgHANgLAIQgOAHgOACQgRAAgMgHgAKqgbQgJAHgGANQgFALAAAPQABAMAHAMQAHALALAGQAKAGAPAAQAMgBALgGQAJgIAGgLQAFgOgBgLQgBgLgDgIIgKgRQgHgIgJgCQgKgGgIACIgDAAQgNAAgJAIgAM3BBQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAABAAQgBAAAAgBQAAAAABAAQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABgBQAAAAABAAQAFgHAJgIIAOgRQAHgKAEgJQADgJAAgMQAAgNgDgGQgFgHgEgBIgIgCQgFAAgDABQgDABgEAEIgCAFIgCAFQgBABAAABQAAAAAAABQAAAAAAABQAAAAABABIgBACIgCABIAAgBIgBgCIAAgEIgBgIIgBgHIABgBIABgBIAKgFQAGgCAKAAQALgBAIAEQAIAEAFAHQADAHABAKQAAAKgEALQgFAJgHAJQgIAIgGAJIgOANIgBABQAFgBAFABIAEAAQAEgBADAAIAIgBIAFAAQAHgBAEgEQADgDABgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABABIABABIAAACQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgBAHIgBAGIAAAFIgEAEQgDgBgFACIg3ACIgCgBgAOgA9QgGgEgFgFQgFgHgCgGQgDgIgBgHIgDgNQAAgQADgPQAEgQAHgHQAHgKAPABQAKgCAHAGQAGAEAGAIQAEAJACALQACAJABAJQgBAQgCAPQgEAOgHAIQgJAHgLACQgKgBgFgCgAObghQgEAOABAYIACASQACAKADAIQACAHAFAFQAFAEAGAAQAFAAAEgHQAEgGABgLQACgMgBgNQAAgIgCgKIgFgTQgCgIgFgFQgFgEgGABIgBAAQgHAAgEAMgAPrA6IgBgBQAAAAAAAAQgBAAAAAAQABAAAAAAQAAgBABAAQgBgBABABIADgBIAFAAIAEAAIAEgDQgBgDACgCQgBgGABgIIgBgUIgCgWIAAgLIAAgKIgBgEQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAAAAAQgCAAgDADIgHADQgDABgCACQgBAAABABIgBAAIgBgBIgBgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIABgBIADgCQACgEAEgCIAJgHQADgEAFgCIAFgFQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIABAAIAAADQgBAAABALIABAdQAAAOACAMIABAUQgBAIACAGQgBACACADIAFACIADABIAEgBIACAAIABABQgBAAAAAAQAAAAAAAAQAAAAAAABQABAAAAAAIAAABIgCAAIgOAAIgJABIgGAAQgFAAgEABQgFAAgEABIgCgBgARBA4IgHgCIgCgCIAAgDIgBgGIAAgHIAAgGIABgCIABgBIABABIAAABQABAJACAEQACAEAGACQAEABAFAAQAGgBAFgDQAEgCAEgHQADgGAAgKQAAgJgFgGIgKgIIgMgGQgHgDgDABIgCgBIgBgCIACgqQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAjgCIAEAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAIACAAIABAAIABAAIABADQgBACABAFQgCAFABAHQgBAAAAAAQAAABgBAAQAAAAABAAQAAABAAAAIgBABIgBgBQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQgEgCgFACQgOAAgMABIgBAUIAQADIAQAIIALAMQAEAGABAIQAAAIgCAIQgDAHgFAHQgFAGgIAFQgKADgLABQgEgBgDABgAK4AsQgJgEgEgHQgFgHgBgJQgBgGACgFQABgGACgBQABgEADgCQADgFAHgCQAGgDAIAAIAFAAIAHABIADABQAAAAAAgBQABAAAAAAQAAAAABAAQAAABABAAIACAAIABAAQAAgBABABIAAADIAAADQgBAEABACIAAAEIgBABQgBgBABABIgBAAIgBgCIAAgDIgDgDQgBgDgEgBQgFgCgFABQgKAAgFAHQgFAFAAAMQAAAJAGAHQAEAGAFAEQAFACAGABIAIgCIAEgDIACgDQAAAAAAgBQgBAAAAgBQABAAAAgBQAAAAABgBIAAgBIABgBIABABIAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAABIgBAHIAAAEIgDABQgFAAgDACIgGAAIgDAAQgJAAgHgEgATCAvQgBgBAAAAQAAAAgBAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAGgIAJgJIAPgSQAHgIAEgLQADgJABgNQAAgNgDgHIgIgJIgIgBQgFAAgDABQgFACgDADQgCACAAAEIgCAGIgBAEQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgCACIAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAABgBIAAgEIgBgIIAAgHIAAgBIABgCIAKgFIARgCQALgCAIAFQAHACAFAJQADAHABAKQgBALgEAMQgFAKgHAIQgIAHgHALIgPAOQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIAKgBIAEAAQAEgBADABQADgCAFABIAFgBQAHgBAEgEIAFgJQgBgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQgBgBABAAIABABIABACQgBAAAAABQAAAAgBAAQAAABABAAQAAABAAABIgBAHIgBAGIgBAFIgDAEQgDAAgGABIg3ADIgBAAgAUqAoQgGgCgEgHQgFgGgCgHQgDgIAAgIQgCgGAAgGQAAgRADgQQAEgQAJgJQAHgJAPAAQAJgCAIAGQAFAEAFAJQAEAJACALQACAJAAAKQgBARgDAPQgEAPgIAIQgJAIgLABQgJAAgGgDgAUpg5QgFAOAAAaIACASQABAKADAJQADAHAEAFQAEAEAGAAQAFAAAFgHQAFgIAAgKQADgLgBgOQABgJgCgLQgBgLgDgJIgHgMQgEgFgGABIgBAAQgJAAgDANgAV2AlIgBgBQAAAAAAAAQgBgBAAAAQABAAAAAAQAAAAABAAQgBgBABAAIADAAIAFAAIAEgBIAEgDQAAgDABgCIABgPIgBgUIAAgYIAAgLQgBgGABgFIAAgDQgBgBAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQgBgBgEADQgEABgDADQgDABgCACQgBAAABABIgBAAIgBgBIgBgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIABgBIADgDIAHgGIAJgHQAEgFAEgCQADgEADAAIABgCIADAAIABAAIAAADQgBAAAAALIAAAfIAAAcIABATQgBAJABAGQAAACABAEIAFACQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAABAAIAEAAIACAAIABAAQgBAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAIAAABQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQgIgBgGABIgJABIgGAAIgJABIgJABIgCAAgAXQAhIAAgCQgBAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAIABgDQABgHAEgLQADgKAHgOQAEgNAJgPQAGgRAIgPIglADQgEAAgCACQgFAAgCACQgDACgBAEQgBACAAADQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAABABIgCAAIAAAAIAAgCIAAgHIABgJQgBgEABgDQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIAAgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIACAAQACgBAEABQAEgBAHABIAugEQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIACAAQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAIAAABQgEAFgEAMQgFALgEAOIgJAYIgIAVIgCARIgBAEIABACIgEAEQgDABgEADIgHACIgCAAgASFARIgBgCIACgKQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAIACAAIAogCQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAIABACIgCACIgFABIgHACQgGAAgFADQgGAAgEACQgGAAgBACIgEACIgDABIAAgBg");
	this.shape_13.setTransform(1500.3,795.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(240));

	// amorki
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#84461E").s().p("AtyHoIgEgNIACgBIAEAMQAFAKAFAAQADAAAFgIQAAgDgDgDIgFgFIAAgBQAEgBADAGIACACIABgFQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgDgCgCgFIAAgBIAKAJIAAAJIgEACIABADQAAACgCAEQgDAFgDAAQgKAAgEgLgAt+G/QABgRgGgGQgMgNgUgKQgMgFAAgOQAAgJALgJIATgPIACABIgRAPQgNALAAAGQAAAMAQAHQAUAKAKAOQAEAHgBAPQAAAPAEAIIAAABQgHgHABgRgAtiHJIABgBQABABAAAAQABAAAAAAQAAABABAAQAAgBABAAIABACIAAgDIABgBIACgDIgBAJIAAAAIAAABQACACAAADIAAABIgBACQgCgGgHgHgAtfGcQAAgZgFgPIAAgCIADAAQABANADAJIAAA8IgBAAQgBgIAAgggAuUF6IAAgFIACAAQgBAJARADIgFABQgFAAgIgIgAwTFyIgFgBQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIgCAAIgCAAIgGgLIAAgBIAAgBIAAAAIADAGQACAEAEAAQAHACACgDQABgEABgBIACABIgBADIgBAEIgFACQAFADACgCIADgFIgBgFIgCgFIgDACIgGABQgDgBgEgEQgDgEABgDIACgCIAAABIAEAFQABADADABIAFgBIACgCIACAAIACgEIAFgDIgDAAIgBgBQAkgKAQgXQAOgaALgLIADAAIgDAGQgFAPgZAYQgQARgOAFIgCAAIgBACQgDACgEAAIAAAAQgFAFgBADQgBACACAFIAAAHIgBADIgEAEIgDAAIgEAAgAwEFqIAAAAIgBABIABgBgAQ6FhIgCgFIAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAIABAGQABADAFADQAGgBADgEIABgCIADgEIACAAIABADIgEAFIgCABQgDADgDABIgFAAQgEAAgCgCgAtsFhIAAgLQAagrAIgQQARghAEgbIACAAIAAACQAAAOgXAyIgWAlQgMAVACAGgAuPFbIAAgIIgBAAIAAg0QAFgQAGgNIACAAIAAACQAAACgFAKIgFANQgBADAAAVIAAAUIACAAIgBASgAwWFYQgFgBgCgEQAAAAAAgBQAAgBgBAAQAAgBABAAQAAgBAAAAIABgDIABABQAEAIADABQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIABgBQAAgFACgCQAEABgDAGIgBADQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAIgEgBgARNFRQgCgFAMgKQAGgGACgFIAAgBIABAAQABgFgCgFIgDgIQgDgFgHgCIAAgBQAKABADAGQABABADAIQACAGgBAFQADACABACIgTAYIgEAAIAAABIgBACQgCgBgBgEgARTFPIAJgKQABAAABgBQAAAAAAgBQABAAAAgBQAAgBgBAAQgIAGgDAIgARhE9IADgCIgBgBIgCADgAQkE7IgGgRQgEgYgFgMIgRgNIgIgHIABgGIACACIAKAJIANANIABABIAAAAQADADACAGIAFAcQAEAKALANQALAOAAACIABABIgBAAIgBACIgWgZgAwbFMQgFgBADgIQABgDAHgHIACABIAAACIgDADQgBABAAAAQgBAAAAABQgBAAAAABQAAAAAAABQgBABAEAFIALgGIACABQgBADgGADQgEACgEAAIgDAAgAwVE2QAGgGAEgLQADgKgDgNIgBgCIABgCIgCAAQgBgIAAgDQAEgKAMgEQARgGAcAJQgGABgYgDQgXAAgEANQgBADAEAMQADAMgEALQgCAJgJAKIgCgCgARBEpIgBgBQgBgFAOgLQAPgKgCgIQgDgIgRgEIgQgGIAAgBIgBgBIAcAJQAKADACAHQADAHgLAKQgRAQgBADIgCAAgAwOEQIADgBIgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAABgAvAEMQAvgFAmgUIA3giIADABQgHADgEAFQgeAVgOAHQgmATgxAFIgBgCgAvtEKQgDgDgBgDIABgEQACgFARgBQAPgCALAAIABACIgWACQgUADAAABQgBACADAIIgBAAIgCAAgAvTD1IACgBQAJgHAFgKIAJgWIABAAIADACIgCACQgEAFgGAQQgFALgLAGQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAgAPkDyIgDgEIgCgDIABgIQABgEgBgDQgBgCgFgFIAAgBQgDAAgEgCIAAgBIgDAAQgOgGgQgQQgZgZgFgOIgCgGIADgBQALAMANAaQARAWAjAKIgBABIgDAAIAFADIACAEIACAAIADACIAFACQACgCACgDIADgFIABAAIABACQABACgDAEQgDAEgEABIgFgBIgEgCIgBAFIgBAGIACAEQADACAEgDIgEgBIgCgEIgBgEIACAAQACABABAEQABACAIgBQAEgBACgEIACgFIABAAIABACQAAACgCAEQgEAEgDABIgCAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgGACIgEAAIgDAAgAQ1DuIADgVIgBgEQABgDgBgEIgBgFQgJgagIgIIgXgQIgGgCIgCgCIgUgMIAAgCIASALIADABIALAGQARAKAFAFQAIAIAJAaIACAFIAAACQgBAKABAMIAAABIgDAHIgBADIgCABIAAgDgAPcDpIABAAIABABIgCgBgAPmDWIgBgDQgCgFAEgCQACACAAAGIAAAAQABABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAEgBAEgHIABgBIABACQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQgCAEgFABIgDAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAslDPQAEgBACgEIAAgDIgEgIQAGgCABAHQABAEgBADIgDAFIgDACIgDgDgAsxDPIAAgCIACgBIAEADIgEACIgCgCgAPpDKQgGgEgBgDIABAAIALAGQAEgGAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIgDgEIgBgBIADgBQAHAGABAEQADAHgGABIgDABQgDAAgEgCgAu1DHQAGgOArgKIgGgBQgGgCgPgIIAAgBQAEgBALAGQAKAFAHABIADAAIAFABQAYgBABgBIABgBIADgDIABACQgBAEgGABIADACQAGADABACQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABgBAAIgNgIIgIAAIgQgBQgbAHgIAEQgIADgEAEQgDAFgFABgAPgClQgEgMAEgLQAEgMgBgEQgFgNgWABQgYADgHgBQAcgKASAGQAMAFADAJQABADgCAIIgBABIAAABIAAADQgEAMAEAKQAEAMAGAFIgDACQgIgKgDgIgAshC2IgCgBIgEgUQgCgKABgHIgCgBQgFgWgNgaIgCgDQgCgHgEgGIAAAAQgHgNgNgLIgCgCIABAAIgDgDQgagWgjgIQAhACAcAZIAEAEQAUgWABgZIAAgJQAAglgLgIQAPAFABAnIgBAQIAAgBIAAABQAAAPgGAJQgFAHgMAMQAQAPALAUIgBABIAEAFQAJAOAJAjIgBAAQADAFACANQADAQAAADIgCADIAAgBgAseCMQgBgUgIgNIgPgfQgKgUgKgMIAAgBQAbAeAUA6IAAAnIgBABIgCgfgAupChIgCgCIgOgGIgEgDQgQgLgLgCIgCAAIADgCIAGABIAJABIAHAHIARAKIAUAHIgFADQgDgDgFAAgAPkCQIAAgCIACACIAAABQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAgANBB1QgRgIgngcIADgBIA4AjQAlAUAvAFIAAABQgxgFgmgTgAvWCNIAAgBIABABgAPCCJQADgHAAgCQgBgCgTgCIgXgCIACgCQAKgBAPACQASACABAEIABAEQAAADgDADIgDABIgBgBgAvdCKIACgBIABABIgDAAgAwOBrIABgEQgGgSAAgWQAAgbAHgNIAKgVIAIgOIgBgBIADgFQAAgMgKgdQAHAHAEARQACAKAAAHIgDAFIAAACQAAACgMAXQgNAYAAAaQAAAZAJAUQAQAUAbAHIgFABQgbAAgRgegAPwCAIACAAIgBACgA1RB9IgCgDIgBgDQAAgDATgPIAVgSIAAgBQgOAJgCAAIgLAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgEAQgPQASgPAEgIQAEgHABgNIACgVIAKgqIAJggIgCAAIAAgBIABAAIAEghQACggAFgQQAJgeAPgJQAGgEBLgfQAcgLAwAqQAiAeAgAtIAFgDIACAAQgEAHgFAFQgEADgBADQgCAJACAIIANAVIgEABQgLgMgCgJQgDgIADgKIACgFIgQgSIgFACQAAAEAGAIQAGAJAAACQgOgCgBABIgDADIADAFQADADAKAEQgOABgHADIgIAEQADAEADABIASgGIAAACIgEAEIgDAFQgBAJANADQADABADgCIAHgDIABACIgEAEQgDACgBADQgBAEADADIgDABIAAAAQgDgIABgEQgKACgGgIQgFgIADgEIgDACQgDABgDgBQgLgCABgIQABgDAIgEIAJgFIgFgIQABgDADgBQAFgDAGABIgBgBQgFgFgCgGIAAgHQADgLANAJQALAIABAGIAEgEQgMgJgagpQgkgqg6gOQgHgCgbANQgPAHgZANQgUAKgHALIgIAXQgDANgEAgIgEAkIgCAAQgBALgHAcIgKAjQgBAYgIARQgKAWgZASQAcgGAGgMIADABQgLAOgUASIgSAQIACAEIACACQAbAAAMgHQAHgEAQgQIAEgFIAIgLIACgLQABgHACgCQADACAAAGQAAAFgHANIgGAKIgEAGIAAABQAWgIALgQIATgbQADgDAHgYQAJgXAQAAQANAAAAABQAAABAfAAIAWgBIABgCIABACIAAAAQA0gCAbgMQAVgKANgZIABAAIABACQAAAHgLALQgMANgOAFIgQAGQgKACgQABIgiAGIgDAAQgPAsgLAAQgDAAgCgCQgEANgEAHQgGAPgPAAQgFAAgBgEIAAgDQAAgEAHgNIAIgPIAAgHIgBgCIgGADQgIAAgCgCQACgFAHgLIAKgQIgMAAQgQAAgIALIgFANQgCADgDAKQgDAJgDAEQgWAegFAGQgNAOgKAAQgFAAgBgCIAAgBIgBgBQgFAGgIAGQgSAMgUAAQgLAAgDgCgAyiArQAAAGgPAdQAAADABACQARgIAGgNIAJgWQACAEAAAFIACABQAGAAAHgTIAKgWIgsgCQAAAFgHAKIgLAQIAJAAQACgCAEgBgAObBmQgGgQgFgFQgHgJgRgJQgLgFgFAAIgLgEQgHgBgTACQAggGAWAJIAEADIgEgKQgEgLAGgEQgBAFAFAUIgBAAIAUAPIAKAWQAFALAIAHIACABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABQgKgGgFgLgA0uBrQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAIgHQAKgJAFgIIAGgMQADgIADgCQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQgTAtgPAAgAPoBiQACgKABgNQAEgYgEgLQgEgMgHgJIACgCQAIAKAFANQAEALgBATQgCAVgGAJIgBABIgBgDgAL3BPIgDgFQgBgCABgFQABgGAHACIgEAHIAAAEQABADAFACQAGACADgGIADACIgBACQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgGABQgFAAgDgDgAL4A0QgBgDAEgRQACgNACgEIgBAAQAKgjAJgOIAEgFIgCgBQAMgTAPgQQgMgLgEgHQgGgKAAgOIAAgBIgBAAIAAgRQABgmAPgFQgMAIAAAkIAAALQACAYATAWIAEgEQAdgYAggCQgjAIgZAWIgDACIAAABIgCABQgMAMgHANQgFAFgCAIIgCADQgNAagFAUIgBABQAAAHgCAKIgEAVIgBABIgBAAIgBgCgA0HAwIAAgDQAAgGAJgPIAAAAIABABQAAADgDAGIgFAIIAAAGQAKgDAEgJIAFgOIACAAIAAABQgJAcgIAAQgFAAgBgDgANOAqQAtgLAOgGIAQgKIAHgGIAKgCIAFgBIAEACIgCABQgLACgQAKQgPALgKACQgnAIgGAAIgCAAgAPVAUQAWgQAHgHIAKgNIgJAPQgMAQgPAFgA0KAHIAAgEQAAgDADgGQACgJADgBIABACIgGAPIAAAGIACAAQAGAAADgGIAEgJIACAAIgEAKQgEAIgIAAQgBAAAAAAQgBgBgBAAQAAAAAAgBQgBgBAAAAgAOyAJIABAAIACAAIgDAAgAO2AIQAigIARgfIAHgRIgEAQQgSApgfAAgAtTgEIAAgEIAAgDIACAAIAEAIIAAABIgBAAQgEAAgBgCgAuXgZIADgCIACAAIADADQABABAAAAQABABAAAAQABAAAAAAQABABAAAAIACAAQACAAAEgEIAEgFIAEAAQAAAEgFAFIgBABQgFAFgEAAgAP8gdQAAgSgEgGQAGACAAAXQAAAEgCAGIAAgLgAvAgXIgVgNQgPgKAAgGIAAgDIABAAIAMANQAMALAyAGQgBABgTABIgTAAgAtmggIgJABQgGAAgBgBQAQgIAEABIAKgMIAWgYQAOgNAHgJIABgCIACACIABABQgIALgOAOIgPAQIAAAAIABACIgCADIAAgDIAAAAIgHAHIgNANIAAABIgBAAIgCABgAwqggIgRgCIgKgGQAPAFATAAIgFADIgBAAIgBAAgAyAgvIAAgEQAAgCAJgDQAJgDAAACQgBgDgPAIQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQADACAcADQgBABgYAAQgIgDgCgCgAzfgwIAGgDQADgDABgDIACABIgBABIgEAGIgEACIgDgBgAwugyIgFgBIgBgBQABgGACgCQAFACABACIACAAIACABQAAABAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAIgEAAIgGgCIgBgDIAAABQAAABgBABQAAABAAAAQgBABAAAAQAAAAAAAAIgBAAgAxQgzIgFgDQAAAAgBgBQAAAAA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gMgCgAryiQIAEgCIgEADIAAgBgANZiUQgFgGAAgEIADAAIAFAEQADAEACAAQAEAAACgCIADgEIACABIADACIgMAKQgEAAgGgFgAvBiRIgBgBIAEABIgDAAgAsJiTIABgDIABAAIABAEIgCABIgBgCgAr1iXQAPgJAGgGQAKgIgCgHIACAAIAAAIQgFAIgZAQIgBgCgAzLiWIgDgCIACgFQADgFADgCQAGgDANAFQgGADgBgDQgCgDgFACIgFACQgEADgBADIAAADIAKgEIACACIgFACIgGACIgBAAgAOFiYQgTAAAAgBQAygGAMgLIALgNIABgBIABAEQAAAFgQAKIgVANIgTAAgAxKidIgIgGQgEgEAAgCQADgLAPAIQAPAHgCAGIgCACIgEgHQgGgGgIgCQgDgBgCACIgDADQgBACAEACQAFAEACADgAsUihIACgCQABAAAAABQAAAAAAABQABAAAAABQAAABAAABIgCAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAgAM+igIAAABIgBgCIgBAAIAAAAIgOgOIgGgHIAAABIgBACIgCgCIABgDIABAAIgQgPQgNgPgIgLIABgBIABgBIACABQAHAJANAOIAWAYIALAMQADgBARAHQgBACgGAAgAQBigIgFgDQAfgBAWgNQADgDANgEQANgDAHABIAKABQAKABADADIgBABIgMgDQgIgDgFABQgQAEgNAGIgMAFIgCABQgOAIgXABIAAAAIgBAAgAwOikQgHgCgGgJIgFABQgCgBAAgIQAAAAABAAQAAAAAAABQAAAAABABQAAAAAAABIABADIACgBQgGgLABgDQAEgIAFgFQALgLALAIIgBACQgJgDgJAHQgGAEgCAGQgBADAGAJQAHALANADQAEABAGgFIAFgGIACADIgBABQAAADgGADQgFADgGAAIgIgBgAr+imIAJgGIAFgEIAFgEQAKgHADgGIABACIgMALQAJgFAIAAQgLAJgMAFIgNAHIgCgCgAsLitIAAgBIAHgFIAKgIIACgBQAOgJAJgBIAAABIgZANQgLAHgGAGIAAgCgASwixIgEgHIAAgBIABAAQABACAEADQAFAEAGgBQADgBAAgFQgCgFgMgIIgSgKIABgCIATAKQAMAIACAGQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABQA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IACAAQAJAGACAFIAAAEQgBAEgDABIgBAAQgEAAgDgDgAx2j0QgBgDABgEIACgDIACAAQgCAGABADIgCACgAtzj4QADgNgDgPQgFABgDADIgGAHIgDgDQAAgEAGgEQAEgEAGgBIgBgDIABADIAHgBIABADQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAgBAAIgFABQAHAQgCAGQgCAGgDABgANFj7QADgGAGgFIADAAQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABAAIgPANgAxmkHQAAgCAEgBIAAABIgBABIgBABIAAAJIADgDIABABIgBADIgFABIAAgLgAPRkAIAAABIAAAAIAAgBgAvBkCQAAgFAKgGQANgHAQAHIgBACQgbgEgIAQgALZkMIAAgCIACAAIAAACIAAACIgBAAIAAAAIgBgCgAvfkOQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIADgEIAAgEIAAABIgLgCQADgGgCgEQgDgFgLgHQABgBAEAAIADABQAMAIAFAKIADAIQgBADgCACIgEAEIgDgCgANOkjIgUggQgEgNACgMQABgRALgEIACABQgKAMgBAMQgBAJAEAMQAGATAXASQAWAQAXAAIgEABIgEAAQgdAAgVgWgAQzkOQAMgDAEgDQABgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQgBgBgFAAIgbAHIAAgBQADgDADgBQAQgFAIABQAFABAAADQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBABIgFADIgMACIgBAAgAxtkPIgBAAQAGgGADgBQAHgFAIAFIgKgBIgGADIgDAEIgDABIgBAAgALGkSIAFACIgBABIgEgDgAOXkRIADgCIgBACIgCAAgALfkSIAAgEIACAAIAAADIgBABgAKuktIAAgJIACAAQgBAHAJAJQAHAFAPAJIgBACQgZgPgGgIgASdkZIgFgCIABgBIALADIAAgCQgBgEgFgCIgEgDQgGgCgCADQgBADgFgDQAMgFAGADQADACAEAFIACAGIgEABIAAAAIgGgCgAQhkdQACgDAGgEQAEgCgBgDIgDgDQgDgCgCABQgJACgFAGIgFAHIgBgBQgCgHAOgHQAPgHADAKQABACgFAEIgIAHgALpkfQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAIADABQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABgAxHkkIgCgGIABgJQAAgLALgDQgDgEAAgFQAAgGACgGQAFgLAIACQgBgEADgEQAEgGAIAAQAFAAAKAEQABgEAVgMQAIgGAVAHIAGADIAFACIACgCQABgCAKAAQAOAAAGACQADABAEAFQAFgFADAAIASAJIAHAGIAQAAQAKACACAGQABACgCAIQAPAFAAAIIgFAIQABABAAAGQAAAHgBAEQgDAEgHAHIgJAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAGgCQAHgCABgDIACgJQAAgJACgDIABgFQAAgBgGgEIgHgFQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIABgFQAAgHgOAAIgIAAIABADIgDABIgIgKQgIgIgHAAIgEABIAAAFQAAAAAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgDAAgFgFQgFgGgOAAQgJAAgEADQAAABAAAAQgBABAAAAQgBAAAAABQAAAAgBAAIgGgEQgIgEgOAAQgNAAgLAJIgJAJIgHgDQgFgDgEAAQgIAAgCAGQgBAIgDABQgFABgDAHQgCAEAAADIACAFQADADAAACQAAAEgFABQgGACgBAEQgCAGAAAGIACAEIACADIgBADQABAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgCAAgDgFgAPTkmQgFgDgBgDIgBgCIACgCIAGAFQAGAFAEgBQAMgDAIgLQAFgIgBgDQgCgGgGgFQgIgGgKADIAAgCQAKgIAMALQAFAFADAHQABAEgGAKIACACIACgEQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAJgDAAIgEgBQgHAKgGABIgIABQgHAAgFgCgALHksQgLgFgLgIQAHAAAJAEIgMgLIACgBQADAFAJAIIAFADIAFAEIAJAGIgCACIgNgHgAufknIgBgBIAAgBIAAAAIgBgBIgBgBIAAgBIAAgBIgCgBIgCAAIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIgBAAIgBAAIgDABIgCAAIgDgBIAAgBIAAgBIADgCIADgCIADgBIACAAIABABIABABIABACIABACIABACIADABIABAAIABABIAAACIAAABIAAABIACABQAFAAAFgDIAEgBIAHgBIABABIABAAIAAABIACAAIABgBIABgBIADgCIABAAIADAAIAAABIABABIAAABIgBABIgCADIgBABIgBACIAAABIgCAAIgBAAIgCAAIgCAAIgCgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQgHgBgGAEIgEACIgDAAIgDgBgALSk4IgZgNIABgBQAIABAPAIIACACIAJAIIAHAEIABABIgBADQgGgHgLgGgANukuQgHgBgEgDIAAgCQACAAALAFQALACAGgIIACAAIADABIgHAHIgGABIgLgCgAvTkvQAEgBAGgGQAGgEAFAAIgBACQgEADgPAJgAxYkvIAMACIACAAIAAABIgOgDgALek2IgCgCIAEABIAGAEIAAADIgBAAIAAAAIgHgGgAPYkwQAKgFAEgDQACgEADgCIgEAAQgDAAgGgFIgBgCQAGgBAGACIAHAFQABADgFAFQgEAFgDAAIgLACIgCAAgAu4k3IAEgEIABgBIAEACIgIAGgARCk5IAIgGQAGgEgBgCQgBgFgIACQgIACgEAFIgDAGIgBAAQAGgNAKgCQAKgCACAHQABACgFAEQgEAFgFABgANylEQgGgBgCgCIAHAAIAKAEIgCACIAAAAIgHgDgANalJQgCgGAIgGQALgJACgEIABgBIACADQABAEgOAMQgFAGABACIAFADIgBACQgIgDgBgDgAQAlLIAPgUQAHgMgEgKQAHgCABgCIAEgFQgHgGgCgDIAKgMQgEgEgIgFQgJgEgIgCQgBgBAFgFIgDgDIgLgCQACgEAEgDQgGgIgFgDQgKgIgXACIAGgHQgCgCgHgBQgIgCgHgGIADgGIADgEQgBgEgGgDQgIgFgKAGIgDgFQgDgDgFABIgNAEQgFABgPAOIgOANQABADACACIAFABIAAABQAEAAAHgCQACABAAAGQABADAEADIAEAFIgBACQgGgGgPgGIgHgEQgPADgKANQALgSALgCIgCgFQgCgGALgJQANgKAQgGQAqgPAKAhQACAIAZAIQAYAIAGASQAAABAQAMQARANACAFIgDACIgIAHIABACQABADAIAEQgBADgGAFIgFAFIAEALQAAAFgFAIQgHAJgMAIQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAAAgAPIlNIgBgDQgBgBADgHQADgGACgCQgSgMgBgEQgCgGAUgKIAEgBQAEgBABABIgLAJQgEAEgIADIAVAOIgKAWIgCABgAOhlfQgEgEgIABIABAAQgDAEADADIgHADQAAABAAAAQAAAAAAAAQgBgBAAAAQAAgBgBgBQgBgFACgCIgJACQAAABAAAAQAAABgBgBQAAAAAAAAQgBgBAAgBQgDgLASAGQATAFACAHIACAGIgDABQgCgIgDgFgARjmNQgCgFgEgGIAAgCIAGAHQAFAJALAmIABACIgCABIgPgsgANYliQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBgBgBQgBgCABgDIAAgDIgGABQATgPAKATQABAEgBABIgCABQgBgGgEgCQgDgDgGAAIAAABQABAEgDAHIgDgBgAOal2QgGgDgRACQALgKALAFQAHACAGAGQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAgBABQgFgEgEgBgARMl2QABgCgCgGIABgBIACAEQACADgCAEIgBAAIgBgCgANGl/QgDgHALgWQgHATAEARIgBABQgCgCgCgGgANnmAQgHgEgKAAIgBgCQAIgEAKAFIALAHIAAACQgEAAgHgEgAQ5l9IAAgDIAAgBIADADIABgKIgBgBIgCgBIAAgBQAEABABACIgBAMgAOxmQQgDgCgBgDIADgIQAFgKAMgIIAEgBQADgBACABQgMAIgCAEQgCAEADAGIgLACIgBAAIABADIACAEQABAAABABQAAAAAAAAQABAAAAABQABAAAAAAIgDACIgEgDgARCmRIgEgDIgFgDIgKAAQAHgFAIAFQACABAGAGIAAABIgBAAIgDgCgARUmhIgfgOQgEgBgTAEQgEABgFAEIgCAAQAFgEANgDQAMgCAIABIAMADQAGACACADIAKAIIgDgCgANAmwIgFgIQgDgIAagRQAZgSASgBQgCAFgUAJIgYAJQgRAQABAEQACAIAHAFIALgGIAAgBIABADQABABgEADIgGADIgBAAQgFAAgFgHgAOXm5IAAgCQAFABAFAEQAGAFAFABIgBADQgQgIgEgEg");
	this.shape_14.setTransform(1499.1,257.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(240));

	// amorki szczegoly
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BB642B").s().p("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");
	this.shape_15.setTransform(1499,262.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D17436").s().p("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");
	this.shape_16.setTransform(1498.1,258.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E29850").s().p("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");
	this.shape_17.setTransform(1495.1,252.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(240));

	// amorki wypelnienie
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D7824A").s().p("AtzHfQgEgHgCgLIgCgdQgJgGgOgOIgWgbQAAgLAKgFQAOgHAIgSIAAgVQAAgNADgJIADgrQgeALgRAJQgJAFgJAMQgIAMgEAEIgNAOQgLAGgJAKIgBgBQgNACAAANIABAGQgQARgCAAQgKAAgCgLIAAgLQAAgZAMgUQANgVAAgHIgDgMIgCgMQAAgNAFgBIAmgBIAfgPIAEgBIgBgDQAAgMALgMQAPgPAdgGIAIgBIgBAAIgfgTIAAAAIgXgNIgJgEQgGgDglgJQgagHgFgIIgDgIIgBgUIgBgEIgBgXQAAgmAXgfIAAgBQAHgLgFgNIABgIIgBABIgCACIgDgGIgHAJIgBAGIgBABQghAcgkAEIgCABIgOAJIgMgEQgHAAgEAHIgBACIgBACIgHAAIgMAcIgJATIgDABQgQAIgCARIgGABQgIAAgDgHIgBgHIAOgcQgGgCgCgEIgBgHQAAgPASgVQgIgDgGACQgFABgEADIgTAmQgiBBgbAAIgEAAQgXAUgXAAQgVAAgGgIIgDgKIAZgRIgCgDIgBgHQAAgJAgggIADgDIACgFIgBgEQAAgEAEgKQAEgKAAgIIABgQQACgJAEABQABgLgBgKQAFgUgBgTQgBggAUgeIAGgTQARguBAgIIAOgBIgDgFQgCgEAAgJQAAgSAWgaQAcgfAjAIQgIgOAPgVQAQgXAbgDQBtgOAlAcQAKAIAEAMQALgLAAAVQAAAGgDAJQgEAMgJAAIgDAHIAKAcQALAdAAAZQAAATgKASQgJASgQAGQAcALAFAYIARgFIARgPIAvgtQAkgbAAAsQAAALg/A0QgTAegMAGIAIANQAIAPAAAIQADAGAAAGQAAANgFAQQgFAOgHAGIAQAeQAHAQAFAQQAYAnAAAdIgBAUQgCAKgGAEQgLASgJAKIgKAZIgEAPIgDADQgTAxgMATQgBAKACAKQADARAFACIAAAOQAAAPADAZQACAZAAAMQAAAbgQAAQgRAAgBgTgAQsFHQgIgXAAgRQAAgPgUgUIgIgJQgHAHgKAAQgTAAgBgRIACgOIgGgFQgZgEgRgYIgIgMQgKgKgEgJQgOgNgHgCQhQghgUgKQgSgKgJgLQgIAJgEAAQgIAAgDgHIgBgIQAAgJANgGIgBgFQAAgFAEgJIgBgEIAAgbQAAgrAqgsQgDgFgDgGIgGgZQAAgHACgHIAAgCQAAgUABgGQADgRAMgIQgYgKgMgNQgRgTgTgMQgKgHgLgJIgNgJQgZgRAAgBQAAgNAKAAIAAgBQAAhDA/AyQAgAZAgAmQAbAAANgNIAGgGQgOgIgLgXIgHgTIgFgIQgGgKAAgUQAQgQgEgRIADgDIAAgLQAAgIADgIQgEgDgCgFIgCgMQAAgLAXgQQAWgPAcgIQBJgVAEAvQAbAAAaApQARgIAWAFQA5ANABBDIAHAAQAnABAZASQAdAUgBAnIAKAlQAGAWANAUIADAFQAMADARAGQA3AUAAAFQAAAFgDAEIAEABQAJAEAAANQAAAVgeAAQgiAAhagrIgfgPQASAWARAcQAAAHgFAEQgEACgFAAQgLAAglgwIgdgnQg6ACgQAMIgKAJQgHAEgOAAQgdAAgLgTQAOAqAVAeQAOAUAAAqQAAAKgGAMIgEAQQgFARgJAGIAGAkIgFAuIAZAnIAMAIQAcAWAOAbQADAoAVANQAUANAAAIQAAALgIAJIAAABQAIAOAAAEQAAAHgDAGQgDAFgEACQgBAHgEAIQgGAMgMAAQgOAAgKgegAN+BAIgCgJIAAgUIgXADQgHAEgGAAIgEAAQgKAGgJADIgGAKIAJgIQAGgDANAAQAOAAATAKIAGAEIAAAAgAPOi2IgBgFIgBAAIACAFgAPqjkIAAACIAAADIAYAAQgLgEgEgGIAAgCIgJAHg");
	this.shape_18.setTransform(1498.6,257.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(240));

	// GALERIA Button
	this.galeriaButton = new lib.galeriaButton();
	this.galeriaButton.parent = this;
	this.galeriaButton.setTransform(1500,404.8);
	new cjs.ButtonHelper(this.galeriaButton, 0, 1, 2, false, new lib.galeriaButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.galeriaButton).wait(240));

	// kolumny sczegoly
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BB642B").s().p("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");
	this.shape_19.setTransform(1504.1,360.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E29850").s().p("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BAHADQAcALAPAaIACAEIgCAHIgBADIAAABIgCACQgDACgHAAQgCAAg6gsgAgRwnIgGgFIgEgFIAAgBIABgHQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQAFgHARAGIACACQACADAAAHIgCAKIgMAFIgFgEgAmtwuQgDgCAAgEQAAgIADgGIADgEQAGgHAKACIAIADIADACQACADAAAHQAAAFgJAKIgLAKIgMgLgAldxLIgDgEQAAgFACgFIAFgIQALgLARAGIADACQACADAAAHQAAAIgXAQIgCABIgMgKgAj+xzIgBgBIgCgDIAAAAQAAgKAHgGIASgFIAKADIADACQACADAAAHQAAAIgJAFIgQAHIgMgKgAD5x+QgCgCAAgEQAAgNAHgEQAHgDANgBQALgBARACIADACQABACABAEIAAAEQAAAMgPAEQgZAGgFADIgNgLgAglyRIAAgQQAAgIACgFQAIgRAiAJIADACIABADIABAHQAAAIgdAgQgQAAgEgPgAikyIIgIgIIAAgDQABgEACgDQACgEAEgDQAOgMAgAGIADACIAAABQACACAAAHQAAAMgPAEQgZAGgFADIgHgGgACiyVQAAgXAZAKIADACQACADAAAHIgDAKIgMAFIgPgOgABJySIgBgJQAAgNADgEQAGgFAVAFIADACQACADAAAHQAAAFgJAKIgLAKQgLgEgDgHg");
	this.shape_20.setTransform(1502.1,356.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D17436").s().p("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");
	this.shape_21.setTransform(1501,357.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(240));

	// komlumny
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D7824A").s().p("ArjTGQgcgFABggQABgnAngGIAGAAIgFgHQhTh/AViiQAQiAAHiBQAUl8AJloQhKAeAKg/IgBAAIACgFIAFgTIABAAIgIgFIgBAAQhWAOgchiIAAgBQgMgbACgxQADhCBHgTQB0gfAvBiQAGgNAMgQQASgaAZgNQh4AJhmgmQgXgJAFgiQA/m3GbiuQCfhECogOQIygfE8G0QBBBZghArQAzAWASAiQARAagHAnQAFASgEAQQACAygyAnQgaAYgXAGQABAjgOAgIgEADQgKAEgIACQgDADgFABIgCAEQACAQgBATQAAAdgEAcQAPBTgCBfIgCBBQAyGTg0GTQgHAygMAvIgBA7QgBA4geAzQAQgFAUAAQAnAfgTAOQAGAPgRAQIgBABIgDAIIgEAEQg+AZg4gGQhLAXgvgwIAAgEQgBgSANgHQgGgPANgUQAGgJAJAAIAFABQAFgEAKgBIAAgBIASgFIgGgRQgDAMgFgUQhwnsBmnoQAciFgBiOIAAgDIAAgHIAAgKQABgkAHgiIgDgDQgXgUgiAGQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBIgBgBIgBAAQgEgpgIgoQgegDgmgVQg3ggAHgsQgTg1AbgjQgEAAgEgLIgKgaIgKABIAHgHQhRiwjXglQj2gqjLBxQidBYgeCtIAGABIAEAFIAFALIAAADQABAHgEAFIgGAHIgnAIQBaAJgBA7QAUAhgZAzQgTAogqATQAMALgBAHIAAAAQAbA2hAAOIgjAHQAKAnAEAuQADAcAAAdQAtDGAZDYQAlE9glE1QgDAZgIAXQAMA2giAeIA5ADIAGACQAJBChRAKQgoAFgnAAQg5AAg4gKgAJWJMIACAHIAAgIIgCABgAI4lZIABAAIgBgDIAAADgALTlaIAIAAIAAgBIgIABgAMeluIAAAAIAAgEgAIop/QBRAPAdA3IAAgCIABgGQgLAGAPgmQAJgWAOgSIiKAKgAHFp5QgEAOgJAPQAQgRAdgNIAEgBIgkACg");
	this.shape_22.setTransform(1501.5,357.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(240));

	// cien kolumn
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(79,49,55,0.502)").s().p("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");
	this.shape_23.setTransform(1498.6,332.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(240));

	// DRZWI Button
	this.drzwiButton = new lib.drzwiButton();
	this.drzwiButton.parent = this;
	this.drzwiButton.setTransform(1383.2,245);
	new cjs.ButtonHelper(this.drzwiButton, 0, 1, 2, false, new lib.drzwiButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.drzwiButton).wait(240));

	// KAMIENICA
	this.kamienica = new lib.kamienica_1();
	this.kamienica.parent = this;
	this.kamienica.setTransform(1488,401.5,1,1,0,0,0,665,405.5);

	this.timeline.addTween(cjs.Tween.get(this.kamienica).wait(240));

	// odglosyMiasta
	this.odglosyMiasta = new lib.odglosyMiasta_1();
	this.odglosyMiasta.parent = this;
	this.odglosyMiasta.setTransform(1459,677);

	this.timeline.addTween(cjs.Tween.get(this.odglosyMiasta).wait(240));

	// BG
	this.tlo = new lib.BG_1();
	this.tlo.parent = this;
	this.tlo.setTransform(1511,589.5,1,1,0,0,0,1495,597.5);

	this.timeline.addTween(cjs.Tween.get(this.tlo).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1516,397,2990,1195);
// library properties:
lib.properties = {
	width: 3000,
	height: 810,
	fps: 12,
	color: "#9E6C58",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/BG.jpg", id:"BG"},
		{src:"images/Drzwi10001.png", id:"Drzwi10001"},
		{src:"images/Drzwi10002.png", id:"Drzwi10002"},
		{src:"images/Drzwi10003.png", id:"Drzwi10003"},
		{src:"images/Drzwi10004.png", id:"Drzwi10004"},
		{src:"images/drzwiglowapng0001.png", id:"drzwiglowapng0001"},
		{src:"images/drzwiglowapng0002.png", id:"drzwiglowapng0002"},
		{src:"images/drzwiglowapng0003.png", id:"drzwiglowapng0003"},
		{src:"images/drzwiglowapng0004.png", id:"drzwiglowapng0004"},
		{src:"images/drzwiglowapng0005.png", id:"drzwiglowapng0005"},
		{src:"images/drzwiglowapng0007.png", id:"drzwiglowapng0007"},
		{src:"images/drzwiglowapng0008.png", id:"drzwiglowapng0008"},
		{src:"images/drzwiglowapng0009.png", id:"drzwiglowapng0009"},
		{src:"images/drzwiglowapng0010.png", id:"drzwiglowapng0010"},
		{src:"images/drzwiglowapng0011.png", id:"drzwiglowapng0011"},
		{src:"images/drzwiglowapng0012.png", id:"drzwiglowapng0012"},
		{src:"images/DrzwiUchylone0001.png", id:"DrzwiUchylone0001"},
		{src:"images/DrzwiUchylone0002.png", id:"DrzwiUchylone0002"},
		{src:"images/DrzwiUchylone0003.png", id:"DrzwiUchylone0003"},
		{src:"images/DrzwiUchylone0004.png", id:"DrzwiUchylone0004"},
		{src:"images/kamienica.png", id:"kamienica"},
		{src:"images/latarnia.png", id:"latarnia"},
		{src:"images/stelaz.png", id:"stelaz"},
		{src:"sounds/mieszaniefarbywsprayu.mp3", id:"mieszaniefarbywsprayu"},
		{src:"sounds/odglosyMiasta.mp3", id:"odglosyMiasta"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;