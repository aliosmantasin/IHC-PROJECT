/**  Initialize Swiper **/
const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
      ,/*
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },*/
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });

    swiper.el.addEventListener("mouseenter", () => {
      swiper.autoplay.stop();
    });
    
    swiper.el.addEventListener("mouseleave", () => {
      swiper.autoplay.start();
    });

/**  Initialize Swiper **/

var swiper = new Swiper(".mySeceondSwiper", {
  slidesPerView: 1, // Mobilde 1 slide göster
  spaceBetween: 0,
  autoplay: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // Büyük ekranlarda 4 slide göster
    768: {
      slidesPerView: 4,
    },
  },
});



var swiper = new Swiper(".myOrtaklarSwiper", {
  slidesPerView: 1, // Mobilde 1 slide göster
  spaceBetween: 30,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '" style="background-color: #232445;"></span>';
    },
  },
  breakpoints: {
    // Büyük ekranlarda 4 slide göster
    768: {
      slidesPerView: 1,
    },
  },
});





/*************************************************Canvas JS Alanı Başı***/
/*************************************************Canvas JS Alanı Başı***/
/*************************************************Canvas JS Alanı Başı***/
(function (cjs, an) {
var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];
(lib.AnMovieClip = function(){
    this.actionFrames = [];
    this.ignorePause = false;
    this.gotoAndPlay = function(positionOrLabel){
        cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
    }
    this.play = function(){
        cjs.MovieClip.prototype.play.call(this);
    }
    this.gotoAndStop = function(positionOrLabel){
        cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
    }
    this.stop = function(){
        cjs.MovieClip.prototype.stop.call(this);
    }
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:
function mc_symbol_clone() {
    var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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
(lib.Sembol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // Katman_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#744538").s().p("AAJA5QgNgCgMgPQgMgPgDgUQgEgSAGgSQAFgUAQgEQAHgCAFADQAEADACAFQACAFgCACIgDgGQgFgIgIAEQgLADgEARQgFARAEAQQADARAKAOQAJANAKACQAKACAHgFIAGgEQAAADgDAEQgHAHgKAAIgEAAg");
    this.shape.setTransform(5.2554,6.7205,0.6741,0.6741);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#EEAFA0").s().p("AAJBjQhEgIgMhTQgOhYBLgRQAVgFATANQASANAEAWIAWCOQABADgVAFQgPAEgPAAIgPgBg");
    this.shape_1.setTransform(4.8908,6.6903,0.6741,0.6741);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,13.4);
(lib.Sembol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // Katman_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#744538").s().p("AhGAMQAbgXAkgNQAsgOAbAGQATAFAIAJIgHgDQgKgEgLgBQgXgFgtAPQgcAJgiAXIgQANIgGAGQgFgDAYgUg");
    this.shape.setTransform(6.1597,4.793,0.6054,0.6052);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#744538").s().p("Ag7AnIgFgCQgLgHgCgOQgBgIACgIQACgJAJgHQAKgJAcgJQATgFAVAAIAiADIAfAEQAAACgfgBIgigBQgVAAgRAFQgcAKgIAHQgNAJACARQABAKAIAIIAHAFIgBABIgCgBg");
    this.shape_1.setTransform(5.808,19.8091,0.6054,0.6052);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#744538").s().p("AhIAhQgFgIADgOQAEgQAOgKQANgKAWgFQAigJAiABQAdABAAACIgdACQgkADgeAHQgUAFgNAJQgMAIgFAOQgDALADAIIAEAGIgBABQgCAAgEgGg");
    this.shape_2.setTransform(4.4998,15.0319,0.6054,0.6052);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#744538").s().p("AhfAfIAFgHQAHgHAKgHQAdgVAlgLQAngKAiADIAWAEQAIACAAABIgfgBQgmgBggAKQghAJggATQgXARgCAAIAAAAg");
    this.shape_3.setTransform(5.7808,9.1715,0.6054,0.6052);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#EEAFA0").s().p("AATCjIglgPQgPAEgRAAQghABgDgQQgEgQAHgQQAFgLAHgEQAFgEAhgNQgSADgTAAQglAAgBgMQgCgVAEgHQAIgQAkgMIAdgIQgTAAgTAAQgmgEAAgLQgBgRACgEQAEgJASgIQAbgNAWgPQgRAEgRgBQghgCAHgYIApghQAzghAzAEQA1ADgGAlQgCATgOARIAaAaQATAhgcAhIgIAPIAUARQANAYgjAjIAHAWQADAZgRARQgKALgUAAQgMAAgQgFg");
    this.shape_4.setTransform(6.7432,13.1044,0.6054,0.6052);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#EEAFA0").s().p("AggAGQAQgnAUgIQAWgIAMAcQAFAOACAOIhZAlQAEgSAIgUg");
    this.shape_5.setTransform(5.6142,2.5798,0.6054,0.6052);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,23.3);
(lib.Rectangle_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // Katman_1
    this.shape = new cjs.Shape();
    this.shape.graphics.lf(["#1A2E40","#253F55","#2D4B66"],[0.18,0.675,0.996],-22.9,44.8,20.4,-41.5).s().p("AlkDFIF3pcIFSDSIl3Jdg");
    this.shape.setTransform(35.675,40.75);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.Rectangle_3, new cjs.Rectangle(0,0,71.4,81.5), null);
(lib.Rectangle_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // Katman_1
    this.shape = new cjs.Shape();
    this.shape.graphics.lf(["#1A2E40","#253F55","#2D4B66"],[0.18,0.675,0.996],-22.9,40.5,20.7,-37.6).s().p("AlSCoIFTohIFRDSIlSIhg");
    this.shape.setTransform(33.85,37.775);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.Rectangle_2_0, new cjs.Rectangle(0,0,67.7,75.6), null);
(lib.Rectangle_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // Katman_1
    this.shape = new cjs.Shape();
    this.shape.graphics.lf(["#1A2E40","#253F55","#2D4B66"],[0,0.608,0.996],-14.9,41.5,-4.7,-12.7).s().p("AjpDqIFToiICABQIlTIgg");
    this.shape.setTransform(23.35,31.25);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.Rectangle_2, new cjs.Rectangle(0,0,46.7,62.5), null);
(lib.Rectangle_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // Katman_1
    this.shape = new cjs.Shape();
    this.shape.graphics.lf(["#1A2E40","#253F55","#2D4B66"],[0,0.608,0.996],-14.9,41.5,-4.7,-12.7).s().p("AjpDpIFTohICABQIlTIhg");
    this.shape.setTransform(23.35,31.275);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.Rectangle_1_1, new cjs.Rectangle(0,0,46.7,62.6), null);
(lib.Rectangle_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // Katman_1
    this.shape = new cjs.Shape();
    this.shape.graphics.lf(["#C19B44","#AD802E","#F5E089","#F5E089","#F3DD86","#D9BC64","#C6A24A","#B88F3A","#B08431","#AD802E"],[0,0.122,0.263,0.369,0.376,0.498,0.62,0.737,0.855,0.969],2.6,20.1,0.1,-24.5).s().p("AibD0IExnrIAGAEIkxHrg");
    this.shape.setTransform(15.575,24.75);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.Rectangle_1_0, new cjs.Rectangle(0,0,31.2,49.5), null);
(lib.Rectangle_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // Katman_1
    this.shape = new cjs.Shape();
    this.shape.graphics.lf(["#BBBABA","#FFFFFF"],[0,0.788],7.6,4.7,-8,-5).s().p("AoEI/IMi0MIDnCPIsiULg");
    this.shape.setTransform(51.65,71.75);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.Rectangle_1, new cjs.Rectangle(0,0,103.3,143.5), null);
(lib.Rectangle_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // Katman_1
    this.shape = new cjs.Shape();
    this.shape.graphics.lf(["#C19B44","#AD802E","#F5E089","#F5E089","#F3DD86","#D9BC64","#C6A24A","#B88F3A","#B08431","#AD802E"],[0,0.122,0.263,0.369,0.376,0.498,0.62,0.737,0.855,0.969],2.6,20.1,0.1,-24.5).s().p("AibD0IExnrIAGAEIkxHrg");
    this.shape.setTransform(15.575,24.75);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.Rectangle_0, new cjs.Rectangle(0,0,31.2,49.5), null);
(lib.Rectangle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // Katman_1
    this.shape = new cjs.Shape();
    this.shape.graphics.lf(["#BBBABA","#FFFFFF"],[0,0.788],8.5,5.3,-8.8,-5.5).s().p("AofKRIN72bIDEB6It8Wbg");
    this.shape.setTransform(54.4,77.875);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.Rectangle, new cjs.Rectangle(0,0,108.8,155.8), null);
(lib.Group_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // Katman_1
    this.shape = new cjs.Shape();
    this.shape.graphics.lf(["#FDF3AF","#F5E089","#F0DA83","#D3B35B","#BE9741","#B18633","#AD802E","#E0C46C","#F5E089","#F1DB84","#E7CE76","#D6B85F","#BF9942","#AD802E"],[0,0.145,0.165,0.31,0.439,0.549,0.627,0.773,0.843,0.871,0.902,0.937,0.976,1],-11.6,2.7,11.7,-2.7).s().p("AgJB4QgEgBgFgDIgJgEIgJAAIgKgBIgHgGIgHgHIgJgDIgJgEQgCgCgDgGIgFgIIgHgGIgHgHQgCgDAAgGIgCgJIgGgIQgDgFgBgEIAAgJIABgKQgEgLAAgGIAEgJIAEgJQgBgNACgGQACgDAEgEIAHgHIADgJQACgGACgDQACgCAGgDQAGgCACgCIAGgIQAEgFADgCQACgBAHgBIAJgCIAIgFQAFgEAEgBQADgBAGACIAJABQADAAAGgDQAGgCADAAQADABAGADIAJAEIAJAAQAGAAADABQAGADAJAKIAJADIAIAEQADACACAGIAFAIIAIAHIAHAGQADAFABANIAFAIQAEAFABAEQABADgCAGIgBAKIADAIQACAGgBADQAAAGgHAMIAAAJQAAAGgCAEQgBADgEAEIgHAHIgDAJIgEAIQgCADgGADIgJAEIgGAIQgDAFgDACQgDABgGABIgKACIgIAFIgIAFQgDABgGgCIgKgBQgDAAgFADIgIACIgBAAg");
    this.shape.setTransform(11.9525,11.975);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,23.9,24), null);
(lib.CompoundPath_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // Katman_1
    this.shape = new cjs.Shape();
    this.shape.graphics.lf(["#BBBABA","#FFFFFF"],[0,0.788],43.4,-20.2,-59.8,28).s().p("AmiBhIFCoDIICFBIlAIDgAlSBPIGhEEIEEmhImhkEg");
    this.shape.setTransform(41.85,41.85);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.CompoundPath_2, new cjs.Rectangle(0,0,83.7,83.7), null);
(lib.Group_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // Katman_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AgIANQgFgEgBgIQgCgGAEgFQAFgEAHgBQAGAAAEADIAAABIABAAQAEAEABAGQABAFgEAFQgEAFgHACIgCAAQgEAAgEgDg");
    this.shape.setTransform(1.5895,1.6325);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0.1,3.2,3.1), null);
(lib.Group_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // Katman_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("Ag2BqQgfgzgDg+QgBgnAKgvQAIgiASgwQAFgKAEgCQAHgEAMAHQBHApAdBnQAUBBgIA2QgDAdgQAfQgQAdgWAVQg0gdggg2g");
    this.shape.setTransform(8.8948,18.9523);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(0,0,17.8,37.9), null);
(lib.Group_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // Katman_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("AimhnQBSgBAgAEQA/AIAlAfQA8AzAbAiQAhAsgCAkQiSh2i6hZg");
    this.shape.setTransform(16.6556,10.4545);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(0,0.1,33.3,20.799999999999997), null);
(lib.Group_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // Katman_1
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#000000").s().p("AjMFSQg3ABgognQgngnAAg4IAAmZQAAg3AngoQAognA3AAIGZAAQA3AAAoAnQAnAogBA3IAAGZQABA4gnAnQgoAng3gBg");
    this.shape_1.setTransform(33.85,33.85);
    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.Group_2_1, new cjs.Rectangle(0,0,67.7,67.7), null);
(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // Katman_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("AiFhQIDzB6IAHhkQACABAHBEIAIBGg");
    this.shape.setTransform(13.4,8.075);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,26.8,16.2), null);
(lib.Group_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // Katman_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("Ag5DYQgJgKABgSQAAgKAFgVQAKgwgGgyQgGgygWgsIgVgoQgMgYgFgRQgHgXADgWQAEgYAQgPQBKg4BQA9QA0AmATBMQAUBPgcBQQgcBRhBAxQgSAPgVAEIgJABQgRAAgKgMg");
    this.shape.setTransform(12.754,22.7826);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0,0,25.5,45.6), null);
(lib.Group_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // Katman_1
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AkwB6QgUgIgLgTQgLgTAHgTQAAgeAygSQAbgJA5gMIGnhsQAygMAZAFQATADAOANQAQAOABATQABAZgWAUQgPANgeAMQhHAdhdAaQg6AQhtAbQhqAZg/AKQgWAEgSAAQgYAAgRgHg");
    this.shape_1.setTransform(34.2723,12.9565);
    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.Group_6_1, new cjs.Rectangle(0,0.1,68.6,25.799999999999997), null);
(lib.Group_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // Katman_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("AxSJxQimrJACgBIK/ikQABAAAUBSQAqg9BAgpIgBAAQA2g1A9hQQB8iiAqiLQAfhlAGiBQADhBgDgtIggiSQgIgmAUgiQAVghAmgKQCFgkBtAIQCrAMArB8QA8Cvg1DyQgMA1gfBvQgXBQAAAZIABApQCVgiABACIgBAAIJFiGQAkgFAiAGQBqATAnB1QAnB1haBNQgcAZgmARIggANIAQACQATAEASANQA4AoARBqQARBphUBGQgaAWgiAQIgcALIASABQAWADAUALQA/AiASBeQARBchVBRQgvAsgxAXQAsgKAAABQAAACgiAIQA1AHAcA1QAOAbADAZQAiCBhCBKQghAlgoALIvuDrQiZAjiWguIAPBDIq/CkQgCAAiorJg");
    this.shape.setTransform(127.0854,133.8531);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,254.2,267.7), null);
(lib.Sembol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // Katman_1
    this.instance = new lib.Sembol2("synched",0);
    this.instance.setTransform(5.05,6.75,1,1,0,0,0,5,6.7);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,13.5);
(lib.Ornaments = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // Katman_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("As1lNIWClKIDpPlI2CFKg");
    mask.setTransform(123.45,77.8);
    // Katman_3
    this.shape = new cjs.Shape();
    this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(242,220,133,0)","#F2DC85","#E9D179","#DBBE66","#C7A44C","#AE8230","#AD802E"],[0,0.871,0.871,0.902,0.933,0.965,1,1],-10.8,10.5,17.7,-16.9).s().p("AimAnICAjNIDNCAIiADNgAiGAfICmBoIBnimIilhng");
    this.shape.setTransform(45.025,70.4);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.lf(["#F5E089","#F0DA83","#D3B35B","#BE9741","#B18633","#AD802E","#BC953F","#D0B058","#E0C56D","#ECD47D","#F2DD86","#F5E089","#F2DC85","rgba(242,220,133,0)","rgba(0,0,0,0)"],[0,0.016,0.118,0.212,0.286,0.341,0.388,0.467,0.545,0.631,0.725,0.843,0.871,0.871,1],-10.8,10.5,17.7,-16.9).s().p("AimAnICAjNIDNCAIiADNgAiGAfICmBoIBnimIilhng");
    this.shape_1.setTransform(45.025,70.4);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.lf(["#1A2E40","#253F55","#2D4B66"],[0.18,0.675,0.996],53.3,-19.9,-20.2,7.6).s().p("AiyAqICJjcIDcCJIiJDcgAiQAiICyBvIBviyIiyhvg");
    this.shape_2.setTransform(45.7,86);
    this.instance = new lib.Rectangle_0();
    this.instance.setTransform(77,53.45,1,1,0,0,0,15.6,24.8);
    this.instance.shadow = new cjs.Shadow("rgba(22,34,54,0)",-1,4,8);
    this.instance_1 = new lib.Rectangle_1_1();
    this.instance_1.setTransform(72.6,46.95,1,1,0,0,0,23.4,31.2);
    this.instance_1.shadow = new cjs.Shadow("rgba(22,34,54,0.247)",-4,13,29);
    this.instance_2 = new lib.Rectangle_2_0();
    this.instance_2.setTransform(64.4,41.95,1,1,0,0,0,33.9,37.8);
    this.instance_2.shadow = new cjs.Shadow("rgba(22,34,54,0.247)",-6,22,46);
    this.instance_3 = new lib.CompoundPath_2();
    this.instance_3.setTransform(41.9,78.45,1,1,0,0,0,41.9,41.9);
    this.instance_3.alpha = 0.1992;
    this.instance_3.compositeOperation = "multiply";
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.lf(["#C19B44","#AD802E","#F5E089","#F5E089","#F3DD86","#D9BC64","#C6A24A","#B88F3A","#B08431","#AD802E"],[0,0.122,0.263,0.369,0.376,0.498,0.62,0.737,0.855,0.969],-23.3,25.5,19,-20.7).s().p("AjgA1ICskVIEUCtIirEUg");
    this.shape_3.setTransform(204,67.825);
    this.instance_4 = new lib.Rectangle_1_0();
    this.instance_4.setTransform(184.75,99.65,1,1,0,0,0,15.6,24.8);
    this.instance_4.shadow = new cjs.Shadow("rgba(22,34,54,0)",-1,4,8);
    this.instance_5 = new lib.Rectangle_2();
    this.instance_5.setTransform(200.15,104.1,1,1,0,0,0,23.4,31.2);
    this.instance_5.shadow = new cjs.Shadow("rgba(22,34,54,0.247)",-4,13,29);
    this.instance_6 = new lib.Rectangle_3();
    this.instance_6.setTransform(199.55,106.15,1,1,0,0,0,35.6,40.8);
    this.instance_6.shadow = new cjs.Shadow("rgba(22,34,54,0.247)",-7,23,49);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.lf(["#1A2E40","#253F55","#2D4B66"],[0.18,0.675,0.996],43.4,-20.2,-59.8,28).s().p("AmhBiIFAoDIIEFAIlCIEgAlSBPIGhEEIEEmhImhkEg");
    this.shape_4.setTransform(219.05,81.15);
    this.instance_7 = new lib.Rectangle();
    this.instance_7.setTransform(149.55,77.9,1,1,0,0,0,54.4,77.9);
    this.instance_7.alpha = 0.1016;
    this.instance_7.compositeOperation = "multiply";
    this.instance_8 = new lib.Rectangle_1();
    this.instance_8.setTransform(156.35,81.35,1,1,0,0,0,51.6,71.8);
    this.instance_8.alpha = 0.1992;
    this.instance_8.compositeOperation = "multiply";
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().ls(["rgba(0,0,0,0)","rgba(242,220,133,0)","#F2DC85","#E9D179","#DBBE66","#C7A44C","#AE8230","#AD802E"],[0,0.871,0.871,0.902,0.933,0.965,1,1],69,-32.2,-69,32.3).p("AL6EtI0fEyIjUuLIUfkyg");
    this.shape_5.setTransform(123.475,78.325);
    var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.instance,this.instance_1,this.instance_2,this.instance_3,this.shape_3,this.instance_4,this.instance_5,this.instance_6,this.shape_4,this.instance_7,this.instance_8,this.shape_5];
    for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }
    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.instance_8},{t:this.instance_7},{t:this.shape_4},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape_3},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.Ornaments, new cjs.Rectangle(41.3,11.5,164.39999999999998,132.7), null);
(lib.Ara10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // Katman_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AAiC7IADgTIADgaQACgfgBglQgCgogIgoQgHgkgOgsQgNgjgNgbIgeg3QABAAAJAOIALAQIANAXQANAcANAiQAPAoAIAoQAIAqABAoQABAlgDAfIgEAaIgEATQgDARgBAAIACgRg");
    this.shape.setTransform(20.3715,-59.1628,0.5987,0.5987);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AAAA2QAKgbgBgbQgCgcgKgaQgMgUABAAIAEAEIAKAPQANAXACAgQABAdgMAaIgHAPIgFAFIAIgVg");
    this.shape_1.setTransform(70.1209,40.154,0.5987,0.5987);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("AgNBOIAEgGQAHgIAEgHQARgbgCgfQgCghgTgYIgNgOIgFgFQAAgBAGAFQAHAFAIAIQAVAYADAjQACAhgUAbQgFAJgHAGIgFAEIgBAAg");
    this.shape_2.setTransform(74.2546,17.7051,0.5987,0.5987);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FFFFFF").s().p("AgGBIQAEgIAEgNQALgYgCgbQgCgcgMgYQgNgSAAgBIAFAEQAGAFAFAIQAOAWACAfQACAcgMAaIgIAOIgEAFIAAAAg");
    this.shape_3.setTransform(77.0408,-29.9482,0.5987,0.5987);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#FFFFFF").s().p("AAjBgQACgMABgUQAAgSgDgQQgEgXgHgRQgIgTgMgSQgKgQgLgLIgSgPIgGgGIAIAEQAHAEAMAKQAKAJAMASQANASAIAUQAIATADAWQADAQgBAUQgCARgCAGQgBAIgBAAIgBAAg");
    this.shape_4.setTransform(73.3297,-8.3049,0.5987,0.5987);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#FFFFFF").s().p("AjaAzQgBgDDbgyQDagzABADQABACjbAzQjTAwgIAAIAAAAg");
    this.shape_5.setTransform(-51.1859,-9.1472,0.5987,0.5987);
    this.instance = new lib.Group_6_1();
    this.instance.setTransform(52.45,-30.5,0.5987,0.5987,0,0,0,34.5,13.1);
    this.instance.alpha = 0.3008;
    this.instance_1 = new lib.Group_7();
    this.instance_1.setTransform(7,-63.8,0.5987,0.5987,0,0,0,12.8,22.9);
    this.instance_1.alpha = 0.3008;
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#1F2D34").s().p("AiaAkQgBgCCbgkQCagkABADQABACibAkQiQAhgKAAIgBAAg");
    this.shape_6.setTransform(61.9615,30.9659,0.5987,0.5987);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#1F2D34").s().p("AiaAkQAAgDCagjQCbgkAAADQABADibAjQiOAhgMAAIgBAAg");
    this.shape_7.setTransform(63.1889,-15.221,0.5987,0.5987);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#1F2D34").s().p("AhsAZQgBgCBtgZQBtgZAAACQABADhtAZQhhAXgLAAIgBgBg");
    this.shape_8.setTransform(64.416,8.1147,0.5987,0.5987);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#1F2D34").s().p("AiqAoQgBgDCrgnQCrgnAAACQABADisAnQieAlgLAAIgBAAg");
    this.shape_9.setTransform(22.7939,-29.6603,0.5987,0.5987);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#FFFFFF").s().p("AhHByQgvgdgNg3QgMg1AdgwQAegvA2gNQA2gMAvAdQAwAdAMA3QANA1gdAwQgeAwg3AMQgQAEgPAAQgkAAgigVg");
    this.shape_10.setTransform(-46.849,7.9439,0.5987,0.5987);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#1F2D34").s().p("AgCABQhTlkgnizQAtCxBSFlQBTFkAnCzQgsiyhTlkg");
    this.shape_11.setTransform(-60.7944,35.613,0.5987,0.5987);
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#1F2D34").s().p("AgCABQhTllgnizQAsCyBTFlQBTFlAnCyQgsixhTllg");
    this.shape_12.setTransform(-18.7234,25.7875,0.5987,0.5987);
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#EE7B65").s().p("AoFp3IK+ikIFNWTIq+Ckg");
    this.shape_13.setTransform(-39.7472,30.7192,0.5987,0.5987);
    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#EE7B65").s().p("AkPGEQB8ihAqiLQAfhkAGiCIAAhtIggiTQgIgmAUghQAVghAlgKQBcgZBnAyQB5A7AtCEQA9CygGC4QgCA0gIBLQgIBDAAAUIACBZIr0CZQA2g1A9hRg");
    this.shape_14.setTransform(2.0005,-49.3644,0.5987,0.5987);
    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f("#EE7B65").s().p("An3NuQh2gVhkhCIjhvBIAOhcQARhvBMhUQBNhTBugaIVck/QAkgEAhAGQBrATAnB0QAnB1hbBOQgcAYgmASIggAMIAQACQAUAFASAMQA4ApARBqQARBqhUBGQgaAVgiAQIgcALIASACQAWADAUALQA+AiASBdQASBehZBSQgcAagjAVIgeAQQA8ACAeA4QAPAcADAbQAjCChCBKQghAkgoALIvuDrQhBAQhCAAQgzAAg0gKg");
    this.shape_15.setTransform(24.6946,12.9531,0.5987,0.5987);
    this.instance_2 = new lib.Group_1();
    this.instance_2.setTransform(-5.25,0.5,0.5988,0.5988,0,0,0,127.2,134);
    this.instance_2.alpha = 0.3008;
    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f("#EE7B65").s().p("AxSJxQimrJACgBIK/ikQABAAAUBSQAqg9BAgpIgBAAQA2g1A9hQQB8iiAqiLQAfhlAGiBIAAhuIggiSQgIgmAUgiQAVghAmgKQCFgkBtAIQCrAMArB8QA8Cvg1DyQgMA1gfBvQgXBQAAAZIABApQCVgiABACIgBAAIJFiGQAkgFAiAGQBqATAnB1QAnB1haBNQgcAZgmARIggANIAQACQATAEASANQA4AoARBqQARBphUBGQgaAWgiAQIgcALIASABQAWADAUALQA/AiASBeQARBchVBRQgvAsgxAXQAsgKAAABQAAACgiAIQA1AHAcA1QAOAbADAZQAiCBhCBKQghAlgoALIvuDrQiZAjiWguIAPBDIq/CkQgCAAiorJg");
    this.shape_16.setTransform(-5.2711,0.4426,0.5988,0.5988);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.instance_2},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_1},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.4,-80.6,162.8,161.2);
// stage content:
(lib.AnimateİlkAdım = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);
    // PARMAKLAR_YENİ
    this.instance = new lib.Sembol1("synched",0);
    this.instance.setTransform(449.75,200.8,1,1,0,0,0,6.7,11.6);
    var instanceFilter_1 = new cjs.ColorFilter(0.97,0.97,0.97,1,1.53,1.53,1.56,0);
    this.instance.filters = [instanceFilter_1];
    this.instance.cache(-2,-2,18,27);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(901));
    this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(901));
    // Manin_HEADS
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("AgJAmIAAhLIATAAIAABLg");
    this.shape.setTransform(266.525,70.65);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#000000").s().p("AgJArQgFgFAAgMIAAglIgKAAIAAgRIAKAAIAAgOIATgFIAAATIASAAIAAARIgSAAIAAAcQAAAHABAEQACADAEAAIAFAAIAFgCIADAPIgJADQgFABgGAAQgJAAgFgFg");
    this.shape_1.setTransform(261.9,69.775);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("AgSAlQgFgBgDgDQgCgDgCgEQgCgEABgFQAAgHACgFQAEgEAFgCQAGgDAIgBQAHgBAKAAQABgIgCgEQgDgEgHAAIgMABIgKAEIgFgPQAGgDAJgBQAHgCAJAAQAHAAAFACQAGACADADQADAEACAFIABALIgBAMIAAANIAAAMQAAAGADAGIgRAAIgDgKIAAAAQgDAEgGAEQgEADgJAAQgFAAgEgCgAgEAGQgEABgCACQgBACgBADQABAEACADQACACAFAAQAEAAAEgDQAEgCABgDIAAgKIgIAAIgHABg");
    this.shape_2.setTransform(255.5,70.625);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#000000").s().p("AgPAmIgMgFIAGgOIAJADQAGACAGAAQADAAADgBQACgDAAgDQAAgDgCgCIgGgEIgIgDQgEgBgEgDQgEgBgCgFQgDgEAAgHQAAgLAHgGQAGgFAMgBQAIABAHABIALAEIgEAOIgJgCQgFgCgGAAQgHAAAAAHQAAACACACIAGADIAIAEIAIADQAEACACAEQADAEAAAHQAAAMgHAGQgIAGgNABQgIAAgHgCg");
    this.shape_3.setTransform(248.725,70.65);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#000000").s().p("AgVAmIAAhKIAPAAIACAKIABAAQACgFAEgDQAEgDAGAAIAJABIgDATQgEgCgEAAQgFAAgEADQgDACAAAFIAAAvg");
    this.shape_4.setTransform(243.4,70.575);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#000000").s().p("AgJAmIAAhLIATAAIAABLg");
    this.shape_5.setTransform(238.375,70.65);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#000000").s().p("AgeA1IAAhoIA9AAIAAASIgpAAIAAAaIAmAAIAAARIgmAAIAAArg");
    this.shape_6.setTransform(232.775,69.15);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#000000").s().p("AgVAmIAAhKIAPAAIADAKIAAAAQADgFADgDQAFgDAFAAIAJABIgDATQgEgCgEAAQgFAAgEADQgCACgBAFIAAAvg");
    this.shape_7.setTransform(222.8,70.575);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#000000").s().p("AgYAdQgIgLAAgSQAAgTAJgKQAKgKAQAAIALACQAFACAFADQAEAEACAFQADAGAAAIIAAAHIgCAHIgsAAQABAJAEAFQAFAFAJAAQAGAAAFgCIAHgDIAGAMQgEAEgHACQgJACgIABQgRAAgJgLgAgIgTQgDAFgBAIIAbAAQABgIgEgFQgDgEgHAAQgGAAgEAEg");
    this.shape_8.setTransform(215.95,70.65);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#000000").s().p("AgYAyIADgPIAFABQADAAADgEQAEgDABgHIgfhKIAXAAIANAqIADALIABAAIACgLIALgqIAUAAIgXBCIgFAQIgGAMIgGAIQgEADgFAAQgIAAgEgDg");
    this.shape_9.setTransform(208.575,72.2);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#000000").s().p("AgIA1IAAhKIASAAIAABKgAgIgjQgDgDAAgEQAAgEADgDQADgDAFAAQAFAAAEADQADADAAAEQAAAEgDADQgEADgFAAQgFAAgDgDg");
    this.shape_10.setTransform(203,69.075);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#000000").s().p("AgVAmIAAhKIAPAAIADAKIAAAAQADgFADgDQAFgDAFAAIAJABIgCATQgFgCgEAAQgFAAgEADQgCACgCAFIAAAvg");
    this.shape_11.setTransform(198.8,70.575);
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#000000").s().p("AgSAlQgEgBgEgDQgDgDgBgEQgBgEAAgFQAAgHADgFQADgEAFgCQAGgDAIgBQAHgBAKAAQABgIgCgEQgDgEgHAAIgLABIgLAEIgFgPQAGgDAJgBQAHgCAJAAQAHAAAFACQAGACADADQADAEACAFIABALIgBAMIAAANIAAAMQABAGACAGIgRAAIgDgKIAAAAQgEAEgFAEQgEADgJAAQgFAAgEgCgAgEAGQgEABgCACQgBACAAADQgBAEADADQADACAEAAQAFAAADgDQAEgCABgDIAAgKIgIAAIgHABg");
    this.shape_12.setTransform(191.95,70.625);
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#000000").s().p("AAQA1IgegtIgGAAIAAAtIgUAAIAAhoIAUAAIAAAuIAFgCIAcgsIAXAAIgeAsIgHAGIAHAEIAjAyg");
    this.shape_13.setTransform(184.075,69.15);
    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#000000").s().p("AgSAlQgFgBgDgDQgDgDgBgEQgCgEAAgFQABgHADgFQACgEAHgCQAFgDAIgBQAHgBAKAAQABgIgCgEQgDgEgHAAIgLABIgMAEIgEgPQAGgDAJgBQAIgCAHAAQAJAAAFACQAFACADADQADAEABAFIABALIAAAMIgBANIABAMQABAGACAGIgQAAIgEgKIgBAAQgDAEgFAEQgEADgIAAQgGAAgEgCgAgEAGQgDABgCACQgCACAAADQAAAEACADQADACAEAAQAFAAADgDQADgCACgDIAAgKIgJAAIgGABg");
    this.shape_14.setTransform(171.5,70.625);
    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f("#000000").s().p("AgaAtQgIgKABgUQgBgSAJgLQAJgKAQgBIAHABIAGACIAAgeIAUAAIAABNIAAAMIABAPIgNAAIgEgKIAAAAQgDAFgGAEQgFADgHAAQgOAAgIgJgAgKgCQgDAEAAAOQAAAKADAFQAEAGAGAAQAGAAACgCQAEgDABgFIAAggIgFgCIgGgBQgHAAgFAGg");
    this.shape_15.setTransform(163.8,69.25);
    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f("#000000").s().p("AgHAQIAAgfIAQAAIgGAfg");
    this.shape_16.setTransform(158.25,65.525);
    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f("#000000").s().p("AgSAlQgFgBgDgDQgDgDgBgEQgBgEAAgFQAAgHADgFQACgEAHgCQAFgDAIgBQAHgBAKAAQABgIgCgEQgCgEgIAAIgLABIgLAEIgFgPQAGgDAJgBQAHgCAJAAQAIAAAEACQAGACADADQADAEABAFIACALIgBAMIgBANIABAMQABAGACAGIgRAAIgDgKIAAAAQgDAEgGAEQgEADgJAAQgFAAgEgCgAgEAGQgDABgDACQgBACAAADQgBAEADADQADACAEAAQAFAAADgDQAEgCABgDIAAgKIgJAAIgGABg");
    this.shape_17.setTransform(152.25,70.625);
    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f("#000000").s().p("AgYAyIADgPIAFABQADAAADgEQAEgDABgHIgfhKIAXAAIANAqIADALIABAAIACgLIALgqIAUAAIgXBCIgFAQIgGAMIgGAIQgEADgFAAQgIAAgEgDg");
    this.shape_18.setTransform(145.075,72.2);
    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics.f("#000000").s().p("AANAnIAAgqQAAgJgCgFQgDgEgGABQgFAAgEADQgEADgBAFIAAAwIgUAAIAAhLIAQAAIACAKIABAAQADgFAGgDQAEgDAJgBQAGABAEABQAFACADADQADAEABAFQACAGAAAJIAAAug");
    this.shape_19.setTransform(137.475,70.55);
    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics.f("#000000").s().p("AgSAlQgFgBgCgDQgDgDgCgEQgCgEAAgFQAAgHAEgFQACgEAHgCQAFgDAIgBQAHgBAKAAQABgIgCgEQgDgEgHAAIgLABIgMAEIgEgPQAGgDAIgBQAJgCAHAAQAIAAAGACQAFACADADQADAEABAFIABALIAAAMIgBANIABAMQAAAGADAGIgQAAIgEgKIgBAAQgDAEgFAEQgEADgIAAQgGAAgEgCgAgEAGQgDABgCACQgCACAAADQAAAEACADQADACAEAAQAFAAADgDQADgCACgDIAAgKIgJAAIgGABg");
    this.shape_20.setTransform(129.55,70.625);
    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics.f("#000000").s().p("AAhAnIAAgqQAAgJgCgEQgCgEgGAAQgFAAgEACQgDAEgBAEIAAAxIgTAAIAAgpQAAgKgCgEQgCgEgGAAQgFAAgDACQgDADgCAEIAAAyIgTAAIAAhLIAPAAIACAKIABAAQADgFAGgDQAFgDAIgBQAIAAADADQAFADACAHQAEgFAFgEQAFgDAIgBQAGABAFABQAEACADADQADAEABAGIABAQIAAAsg");
    this.shape_21.setTransform(119.975,70.55);
    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics.f("#000000").s().p("AgMAxQgFgDABgJIAAhZIASAAIAABPQAAAEABADQACACADABIAEgBIADgBIADAPIgHADIgLABQgIAAgEgFg");
    this.shape_22.setTransform(112.15,69.25);
    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics.f("#000000").s().p("AAYA1IgJgXIgfAAIgIAXIgUAAIAmhpIAOAAIAlBpgAALANIgIgWIgDgRIAAAAIgDARIgHAWIAVAAg");
    this.shape_23.setTransform(104.975,69.1);
    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics.f("#000000").s().p("AgJA1IAAhoIATAAIAABog");
    this.shape_24.setTransform(279.675,69.15);
    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics.f("#000000").s().p("AgJA1IAAhWIgfAAIAAgSIBRAAIAAASIgfAAIAABWg");
    this.shape_25.setTransform(273.3,69.15);
    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics.f("#000000").s().p("AgWA1IgNgFIAHgSIAFACIAFADIAHABIAIABQAIAAAFgDQAFgEAAgFQAAgGgDgCIgJgGIgLgFQgHgCgFgEQgFgEgDgFQgEgGAAgJQAAgHADgGQACgFAFgEQAFgEAGgCQAHgCAHABQAIgBAIACQAJACAFACIgHASQgDgCgHgCQgGgCgHAAQgHAAgEADQgDADAAAFQgBAEAEADIAIAGIAMAFIALAHQAGADADAFQAEAGgBAIQAAAIgCAHQgDAFgFAEQgFAFgHACQgIACgHAAQgLAAgJgCg");
    this.shape_26.setTransform(257.2,69.15);
    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics.f("#000000").s().p("AAPA1IgWgpIgLgCIAAArIgUAAIAAhnIAHgBIAIgBIAHAAIAHAAQAIAAAGABQAHABAFAEQAHADACAGQAEAGAAAIQAAANgGAIQgGAHgKAEIAHAEIAZAogAgSghIAAAeIAIAAQAJAAAFgEQAEgEAAgJQAAgGgDgEQgFgEgHAAIgGAAg");
    this.shape_27.setTransform(249.1,69.075);
    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics.f("#000000").s().p("AgJA1IAAhoIATAAIAABog");
    this.shape_28.setTransform(242.125,69.15);
    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics.f("#000000").s().p("AAQA1IgXgpIgLgCIAAArIgUAAIAAhnIAHgBIAIgBIAHAAIAIAAQAHAAAGABQAHABAGAEQAFADAEAGQADAGAAAIQAAANgGAIQgGAHgKAEIAIAEIAXAogAgSghIAAAeIAJAAQAIAAAEgEQAGgEAAgJQAAgGgFgEQgEgEgHAAIgGAAg");
    this.shape_29.setTransform(224.5,69.075);
    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics.f("#000000").s().p("AgeA1IAAhoIA9AAIAAASIgpAAIAAAYIAlAAIAAASIglAAIAAAZIAqAAIAAATg");
    this.shape_30.setTransform(215.9,69.15);
    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics.f("#000000").s().p("AgJA1IAAgoIgjhAIAZAAIATAnIABALIABAAIACgMIATgmIAWAAIgiBAIAAAog");
    this.shape_31.setTransform(207.425,69.15);
    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics.f("#000000").s().p("AgKBBIAAhoIAUAAIAABogAgJgwQgDgCAAgFQAAgDADgDQADgDAGAAQAGAAAEADQADADAAADQAAAFgDACQgEADgGAAQgGAAgDgDg");
    this.shape_32.setTransform(200.925,67.95);
    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics.f("#000000").s().p("AAPA1IgWgpIgLgCIAAArIgVAAIAAhnIAIgBIAIgBIAIAAIAHAAQAHAAAGABQAHABAGAEQAFADAEAGQADAGAAAIQAAANgGAIQgGAHgKAEIAHAEIAYAogAgSghIAAAeIAJAAQAIAAAEgEQAFgEABgJQAAgGgFgEQgEgEgHAAIgGAAg");
    this.shape_33.setTransform(194.6,69.075);
    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics.f("#000000").s().p("AAYA1IgJgXIgfAAIgIAXIgUAAIAmhpIAOAAIAlBpgAALANIgIgWIgDgRIAAAAIgDARIgHAWIAVAAg");
    this.shape_34.setTransform(185.225,69.1);
    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics.f("#000000").s().p("AAYA1IgJgXIgfAAIgIAXIgUAAIAmhpIAOAAIAlBpgAALANIgIgWIgDgRIAAAAIgDARIgHAWIAVAAg");
    this.shape_35.setTransform(163.125,69.1);
    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics.f("#000000").s().p("AgSA2IgIAAIgIgBIgGAAIAAhoIAHgBIAIAAIAIgBIAHAAQANAAAKAEQAKAEAGAHQAGAHADAJQADAKAAAMQAAAJgDAKQgCALgHAHQgGAIgKAEQgKAFgPAAgAgUgiIAABFIACABIADAAIAEAAIACAAQAJAAAEgDQAGgDADgFQAEgGABgGIABgNIgBgNQgBgGgDgFQgDgFgGgDQgFgCgIAAIgHAAg");
    this.shape_36.setTransform(153.925,69.15);
    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics.f("#000000").s().p("AAYA1IgJgXIgfAAIgIAXIgUAAIAmhpIAOAAIAlBpgAALANIgIgWIgDgRIAAAAIgDARIgHAWIAVAAg");
    this.shape_37.setTransform(144.375,69.1);
    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics.f("#000000").s().p("AgJA1IAAgoIgjhAIAZAAIATAnIABALIABAAIACgMIATgmIAWAAIgiBAIAAAog");
    this.shape_38.setTransform(136.725,69.15);
    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics.f("#000000").s().p("AAZA1Igmg2IgIgRIgBAAIACARIAAA2IgTAAIAAhpIAPAAIAmA3IAIAQIABAAIgCgQIAAg2IATAAIAABog");
    this.shape_39.setTransform(127.375,69.125);
    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics.f("#000000").s().p("AAYA1IgJgXIgfAAIgIAXIgUAAIAmhpIAOAAIAlBpgAALANIgIgWIgDgRIAAAAIgDARIgHAWIAVAAg");
    this.shape_40.setTransform(117.925,69.1);
    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics.f("#000000").s().p("AAeA1IAAg2IACgVIAAAAIgGARIgXAmIgGAAIgXgmIgHgRIgBAAIADAVIAAA2IgTAAIAAhoIATAAIAcAvIAEAMIAAAAIAFgMIAagvIATAAIAABog");
    this.shape_41.setTransform(107.4,69.15);
    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics.f("#000000").s().p("AggA1IAAhoIAUAAIAABVIAtAAIAAATg");
    this.shape_42.setTransform(97.925,69.15);
    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics.f("#000000").s().p("AAYA1IgJgXIgfAAIgIAXIgUAAIAmhpIAOAAIAlBpgAALANIgIgWIgDgRIAAAAIgDARIgHAWIAVAAg");
    this.shape_43.setTransform(89.175,69.1);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23,p:{x:104.975}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:184.075}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:232.775}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_13,p:{x:176.425}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_6,p:{x:236.425}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_23,p:{x:265.675}},{t:this.shape_25},{t:this.shape_24}]},900).wait(1));
    // Text_4
    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics.f("#000000").s().p("AAOA1IgYgiIgGAAIAAAiIgNAAIAAhpIANAAIAAA/IAFgBIAXggIAOAAIgXAeIgFAEIAGAHIAaAig");
    this.shape_44.setTransform(231.4,110.1);
    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics.f("#000000").s().p("AgFA1IAAhKIALAAIAABKgAgFgmQgDgDABgDQgBgDADgCQACgDADAAQAEAAACADQACACABADQgBADgCADQgCACgEAAQgDAAgCgCg");
    this.shape_45.setTransform(225.3,110.05);
    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics.f("#000000").s().p("AgJAxQgFgDAAgKIAAhZIAMAAIAABWQAAAGACABQABADADAAIAEAAIAFgCIACAKQgDABgEABIgHABQgGAAgEgFg");
    this.shape_46.setTransform(221.725,110.2);
    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics.f("#000000").s().p("AgFA1IAAhKIALAAIAABKgAgFgmQgCgDgBgDQABgDACgCQACgDADAAQAEAAACADQACACABADQgBADgCADQgCACgEAAQgDAAgCgCg");
    this.shape_47.setTransform(216.95,110.05);
    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics.f("#000000").s().p("AgJAxQgFgDAAgKIAAhZIAMAAIAABWQAAAGACABQABADADAAIAEAAIAFgCIACAKQgDABgEABIgHABQgGAAgEgFg");
    this.shape_48.setTransform(213.375,110.2);
    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics.f("#000000").s().p("AgSAmIAAhKIAJAAIACAJIABAAQACgFAEgDQADgCAHAAIAJABIgCAMIgJgCQgGAAgEAEQgDADgBAGIAAAzg");
    this.shape_49.setTransform(208.55,111.525);
    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics.f("#000000").s().p("AgMAlQgGgDgEgFQgEgGgCgHQgCgHAAgJQAAgSAJgKQAIgLAPAAIAKACQAFABAEADQAEADADAGQADAGAAAJIgBAKIgvAAIABAMQABAFADAEQADADAEACQAFACAGAAQAFAAAFgCIAIgEIAEAJQgEADgHACQgHACgIABQgHAAgHgDgAATgHQAAgLgEgFQgFgFgIAAQgIAAgFAFQgFAFgBALIAkAAIAAAAg");
    this.shape_50.setTransform(201.725,111.6);
    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics.f("#000000").s().p("AgHAqQgEgFAAgMIAAgrIgMAAIAAgKIAMAAIAAgPIALgEIAAATIAVAAIAAAKIgVAAIAAApQAAAIACADQACADAFAAIAGgBIAGgCIADAJIgJADQgFACgFAAQgIAAgEgGg");
    this.shape_51.setTransform(195.375,110.775);
    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics.f("#000000").s().p("AgMAlQgGgDgEgFQgEgGgCgHQgCgHAAgJQAAgSAJgKQAIgLAPAAIAKACQAFABAEADQAEADADAGQADAGAAAJIgBAKIgvAAIABAMQABAFADAEQADADAEACQAFACAGAAQAFAAAFgCIAIgEIAEAJQgEADgHACQgHACgIABQgHAAgHgDgAATgHQAAgLgEgFQgFgFgIAAQgIAAgFAFQgFAFgBALIAkAAIAAAAg");
    this.shape_52.setTransform(189.075,111.6);
    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics.f("#000000").s().p("AgFA1IAAgqIgjg/IAPAAIAZAuIABAIIADgIIAYguIANAAIgiA/IAAAqg");
    this.shape_53.setTransform(182.375,110.1);
    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics.f("#000000").s().p("AgFA1IAAhKIALAAIAABKgAgFgmQgDgDABgDQgBgDADgCQACgDADAAQAEAAACADQACACABADQgBADgCADQgCACgEAAQgDAAgCgCg");
    this.shape_54.setTransform(172.2,110.05);
    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics.f("#000000").s().p("AAOA1IgXgiIgHAAIAAAiIgNAAIAAhpIANAAIAAA/IAFgBIAXggIAOAAIgXAeIgFAEIAGAHIAZAig");
    this.shape_55.setTransform(167.15,110.1);
    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics.f("#000000").s().p("AgMAlQgGgDgEgFQgEgGgCgHQgCgHAAgJQAAgSAJgKQAIgLAPAAIAKACQAFABAEADQAEADADAGQADAGAAAJIgBAKIgvAAIABAMQABAFADAEQADADAEACQAFACAGAAQAFAAAFgCIAIgEIAEAJQgEADgHACQgHACgIABQgHAAgHgDgAATgHQAAgLgEgFQgFgFgIAAQgIAAgFAFQgFAFgBALIAkAAIAAAAg");
    this.shape_56.setTransform(159.275,111.6);
    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics.f("#000000").s().p("AgJAxQgFgDAAgKIAAhZIAMAAIAABWQAAAGACABQABADADAAIAEAAIAFgCIACAKQgDABgEABIgHABQgGAAgEgFg");
    this.shape_57.setTransform(153.875,110.2);
    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics.f("#000000").s().p("AgOAmIgKgEIADgLIAJAEQAGACAFAAQAGAAAEgDQAEgDAAgGQAAgEgCgDIgHgEIgIgDIgIgEQgEgCgDgEQgDgEAAgHQAAgKAGgFQAGgGAKAAQAJABAFABIAKAEIgDAKIgJgEQgFgBgFAAQgGAAgDADQgDACAAAFQAAAEADACIAHAEIAHAEIAJAEQAEABADAFQACAEAAAGQAAAGgBADQgCAFgDADQgDADgFACQgFACgGAAQgIAAgGgCg");
    this.shape_58.setTransform(147.925,111.6);
    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics.f("#000000").s().p("AgMAlQgGgDgEgFQgEgGgCgHQgCgHAAgJQAAgSAJgKQAIgLAPAAIAKACQAFABAEADQAEADADAGQADAGAAAJIgBAKIgvAAIABAMQABAFADAEQADADAEACQAFACAGAAQAFAAAFgCIAIgEIAEAJQgEADgHACQgHACgIABQgHAAgHgDgAATgHQAAgLgEgFQgFgFgIAAQgIAAgFAFQgFAFgBALIAkAAIAAAAg");
    this.shape_59.setTransform(141.025,111.6);
    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics.f("#000000").s().p("AAiA1IAAhGIACgQIgBAAIgGAPIgbAuIgDAAIgdguIgFgPIgBAAIACAQIAABGIgMAAIAAhpIAKAAIAhA1IAEAMIAFgMIAfg1IAKAAIAABpg");
    this.shape_60.setTransform(131.275,110.1);
    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics.f("#000000").s().p("AAVA1IgmgxIgHAAIAAAxIgMAAIAAhpIAMAAIAAAxIAHgCIAigvIAPAAIgiAtIgHAGIAIAEIAmAyg");
    this.shape_61.setTransform(257.1,110.1);
    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics.f("#000000").s().p("AgFBAIAAhoIALAAIAABogAgGgxQgCgCgBgEQABgDACgCQACgDAEAAQAEAAADADQACACAAADQAAAEgCACQgDACgEAAQgEAAgCgCg");
    this.shape_62.setTransform(250,108.975);
    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics.f("#000000").s().p("AgeA1IAAhpIAMAAIAABdIAxAAIAAAMg");
    this.shape_63.setTransform(244.425,110.1);
    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics.f("#000000").s().p("AgGBAIAAhoIAMAAIAABogAgGgxQgDgCABgEQgBgDADgCQADgDADAAQAEAAADADQACACABADQgBAEgCACQgDACgEAAQgDAAgDgCg");
    this.shape_64.setTransform(237.9,108.975);
    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics.f("#000000").s().p("AgeA1IAAhpIAMAAIAABdIAxAAIAAAMg");
    this.shape_65.setTransform(232.325,110.1);
    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics.f("#000000").s().p("AAVA1IgcguIgPgBIAAAvIgMAAIAAhnIANgCIAOAAQAGAAAFACQAHABAEADQAGAEACAFQADAGAAAIQAAAMgHAIQgGAGgLADIAIAGIAaApgAgWgoIAAAmIAMAAQAKAAAGgFQAGgFAAgLQAAgIgFgFQgFgGgJABIgFAAIgDAAIgEAAg");
    this.shape_66.setTransform(223.85,110.05);
    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics.f("#000000").s().p("AgcA1IAAhpIA5AAIAAALIgsAAIAAAjIAnAAIAAAKIgnAAIAAAlIAsAAIAAAMg");
    this.shape_67.setTransform(215.2,110.1);
    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics.f("#000000").s().p("AgFA1IAAheIghAAIAAgLIBNAAIAAALIghAAIAABeg");
    this.shape_68.setTransform(206.9,110.1);
    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics.f("#000000").s().p("AgcA1IAAhpIA5AAIAAALIgsAAIAAAjIAnAAIAAAKIgnAAIAAAlIAsAAIAAAMg");
    this.shape_69.setTransform(198.9,110.1);
    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics.f("#000000").s().p("AgFBAIAAhoIALAAIAABogAgGgxQgCgCgBgEQABgDACgCQACgDAEAAQAEAAADADQACACAAADQAAAEgCACQgDACgEAAQgEAAgCgCg");
    this.shape_70.setTransform(180.25,108.975);
    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics.f("#000000").s().p("AAVA1IgmgxIgHAAIAAAxIgMAAIAAhpIAMAAIAAAxIAHgCIAigvIAPAAIgiAtIgHAGIAIAEIAmAyg");
    this.shape_71.setTransform(173.85,110.1);
    this.shape_72 = new cjs.Shape();
    this.shape_72.graphics.f("#000000").s().p("AgcA1IAAhpIA5AAIAAALIgsAAIAAAjIAnAAIAAAKIgnAAIAAAlIAsAAIAAAMg");
    this.shape_72.setTransform(165.05,110.1);
    this.shape_73 = new cjs.Shape();
    this.shape_73.graphics.f("#000000").s().p("AgeA1IAAhpIAMAAIAABdIAxAAIAAAMg");
    this.shape_73.setTransform(157.525,110.1);
    this.shape_74 = new cjs.Shape();
    this.shape_74.graphics.f("#000000").s().p("AgUA1QgIgCgEgCIAEgMIALAEQAGACAJAAIAIgBIAHgDQAEgCACgDQABgDAAgFQAAgGgDgEQgEgFgGgCIgLgHQgHgCgFgDQgGgDgEgHQgDgFAAgIQAAgNAIgHQAJgHAPAAQAJgBAHACIAMADIgEAMIgKgEQgHgBgIAAQgJAAgFAEQgFAEAAAHQAAAFAEAFQAEADAFAEIALAFQAHADAGAEQAFADAEAGQAEAFAAAJQAAAGgDAGQgCAGgFADQgEAEgHACQgGACgIABQgLAAgHgCg");
    this.shape_74.setTransform(149.175,110.1);
    this.shape_75 = new cjs.Shape();
    this.shape_75.graphics.f("#000000").s().p("AgcA1IAAhpIA4AAIAAALIgsAAIAAAjIApAAIAAAKIgpAAIAAAlIAtAAIAAAMg");
    this.shape_75.setTransform(141.35,110.1);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53,p:{x:182.375}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},18).to({state:[{t:this.shape_60},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_53,p:{x:190.575}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},882).wait(1));
    // Text_3
    this.shape_76 = new cjs.Shape();
    this.shape_76.graphics.f("#000000").s().p("AgJAyQgFgFAAgJIAAhZIAMAAIAABWQAAAFACADQABACADAAIAEAAIAFgCIACAKQgDABgEABIgHAAQgGAAgEgDg");
    this.shape_76.setTransform(195.025,155.3);
    this.shape_77 = new cjs.Shape();
    this.shape_77.graphics.f("#000000").s().p("AgFA1IAAhKIALAAIAABKgAgFgmQgDgDAAgDQAAgDADgCQACgDADAAQADAAADADQACACAAADQAAADgCADQgDACgDAAQgDAAgCgCg");
    this.shape_77.setTransform(190.25,155.15);
    this.shape_78 = new cjs.Shape();
    this.shape_78.graphics.f("#000000").s().p("AgRA1IgIAAIgIAAIgEgBIAAhoIAGAAIAHgBIAIAAIAHAAQAMAAAIAEQAKAEAGAHQAGAHADAKQADAJgBAMQABAKgDAKQgDAJgGAIQgGAHgKAFQgJAFgMAAgAgZAqIADAAIAFAAIAEAAIADABQAKAAAGgEQAIgEAEgGQAEgGACgIQACgIAAgHIgCgPQgCgHgEgGQgEgGgGgEQgIgEgJAAIgEAAIgFAAIgEABIgDAAg");
    this.shape_78.setTransform(183.55,155.225);
    this.shape_79 = new cjs.Shape();
    this.shape_79.graphics.f("#000000").s().p("AgFAmIAAhLIALAAIAABLg");
    this.shape_79.setTransform(172.45,156.7);
    this.shape_80 = new cjs.Shape();
    this.shape_80.graphics.f("#000000").s().p("AgKAlQgFgDgFgFQgDgGgCgHQgBgHgBgJQABgSAHgKQAJgLAPAAQAHABAFABIAJADIgDALIgIgDQgEgCgFAAQgUAAAAAcIABALQABAFACAEQAEAEAEADQADACAGAAQAFAAAFgCIAHgEIADAJQgEAEgGACQgGABgHAAQgHAAgHgCg");
    this.shape_80.setTransform(167.2,156.7);
    this.shape_81 = new cjs.Shape();
    this.shape_81.graphics.f("#000000").s().p("AASAnIAAgrQAAgLgDgGQgEgGgIAAQgHAAgGAFQgFAEgCAGIAAAzIgMAAIAAhLIAIAAIACAJIABAAQAEgEAGgDQAGgEAHAAQAGABAFABQAFABADAEQADAEACAGQABAGAAAJIAAAtg");
    this.shape_81.setTransform(159.65,156.6);
    this.shape_82 = new cjs.Shape();
    this.shape_82.graphics.f("#000000").s().p("AgPAlIgHgEIgFgHQgBgDAAgFQAAgHACgFQADgEAFgCQAFgDAHgBIAOgBIAEAAIAEAAIAAgIQAAgHgDgEQgDgDgJAAIgEAAIgGACIgGABIgFACIgEgJQAGgEAHgBQAIgCAHAAQAIAAAFADQAEABADAEQACADABAEIABAJIAAAQIgBAQIABALIABAJIgJAAIgDgKIAAAAIgEADIgFAEIgGADIgIABQgFgBgEgBgAgBAEIgIACIgFAEQgCADAAADQAAAFAEAEQAEADAFAAIAHgBIAGgDIAEgDIACgFIAAgMIgEAAIgFAAg");
    this.shape_82.setTransform(151.625,156.7);
    this.shape_83 = new cjs.Shape();
    this.shape_83.graphics.f("#000000").s().p("AgUAzIgKgEIAAhjIAMAAIAAAlIAAAAQAEgEAFgDQAGgCAFAAQAPAAAHAJQAHAKAAASQAAAUgJAKQgKAKgQAAQgJAAgHgCgAgLgJQgFAEgCAHIAAAlIAHADIAJABQAIAAAHgIQAFgHAAgPIgBgLIgCgIQgDgDgEgCQgDgDgFAAQgGAAgFAFg");
    this.shape_83.setTransform(144.25,155.275);
    this.shape_84 = new cjs.Shape();
    this.shape_84.graphics.f("#000000").s().p("AgPAlIgHgEIgFgHQgBgDAAgFQAAgHACgFQADgEAFgCQAFgDAHgBIAOgBIAEAAIAEAAIAAgIQAAgHgDgEQgDgDgJAAIgEAAIgGACIgGABIgFACIgEgJQAGgEAHgBQAIgCAHAAQAIAAAFADQAEABADAEQACADABAEIABAJIAAAQIgBAQIABALIABAJIgJAAIgDgKIAAAAIgEADIgFAEIgGADIgIABQgFgBgEgBgAgBAEIgIACIgFAEQgCADAAADQAAAFAEAEQAEADAFAAIAHgBIAGgDIAEgDIACgFIAAgMIgEAAIgFAAg");
    this.shape_84.setTransform(136.125,156.7);
    this.shape_85 = new cjs.Shape();
    this.shape_85.graphics.f("#000000").s().p("AgFA1IAAgqIgjg/IAPAAIAZAuIABAIIADgIIAYguIANAAIgiA+IAAArg");
    this.shape_85.setTransform(129.525,155.2);
    this.shape_86 = new cjs.Shape();
    this.shape_86.graphics.f("#000000").s().p("AgeA1IAAhpIAMAAIAABeIAxAAIAAALg");
    this.shape_86.setTransform(204.375,155.2);
    this.shape_87 = new cjs.Shape();
    this.shape_87.graphics.f("#000000").s().p("AgGBAIAAhoIAMAAIAABogAgGgxQgDgCABgEQgBgDADgCQADgDADAAQAEAAADADQACACABADQgBAEgCACQgDACgEAAQgDAAgDgCg");
    this.shape_87.setTransform(197.85,154.075);
    this.shape_88 = new cjs.Shape();
    this.shape_88.graphics.f("#000000").s().p("AgRA1IgIAAIgIAAIgEgBIAAhoIAGAAIAHgBIAIAAIAHAAQALAAAJAEQAKAEAGAHQAGAHADAKQACAJAAAMQAAAKgCAKQgDAJgGAIQgGAHgKAFQgJAFgMAAgAgZAqIADAAIAEAAIAFAAIADABQAKAAAGgEQAIgEADgGQAFgGACgIQABgIABgHIgCgPQgCgHgEgGQgEgGgHgEQgHgEgJAAIgEAAIgFAAIgEABIgDAAg");
    this.shape_88.setTransform(190.95,155.225);
    this.shape_89 = new cjs.Shape();
    this.shape_89.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
    this.shape_89.setTransform(179.675,155.2);
    this.shape_90 = new cjs.Shape();
    this.shape_90.graphics.f("#000000").s().p("AgHAzQgIgDgGgHQgHgHgDgJQgEgLAAgOQAAgOAEgKQAEgKAHgHQAGgHAIgDQAHgCAJAAIAOAAQAGABAEACIgDAMQgHgEgNAAQgGAAgFACQgGADgFAEQgFAGgDAIQgDAIAAALQAAALADAIQADAIAEAGQAFAFAHACQAFADAHAAIAMgBIAJgEIADAKQgFADgHACQgHABgHAAQgKAAgHgDg");
    this.shape_90.setTransform(173.375,155.2);
    this.shape_91 = new cjs.Shape();
    this.shape_91.graphics.f("#000000").s().p("AAfA2IgxhFIgIgQIAAAAIABAQIAABEIgMAAIAAhqIAHAAIAxBFIAIAOIABAAIgCgOIAAhEIAMAAIAABqg");
    this.shape_91.setTransform(163.925,155.2);
    this.shape_92 = new cjs.Shape();
    this.shape_92.graphics.f("#000000").s().p("AAeA1IgLgdIgmAAIgKAdIgNAAIAohpIAFAAIAoBpgAAPANIgMgfIgDgPIgDAQIgMAeIAeAAg");
    this.shape_92.setTransform(154.525,155.125);
    this.shape_93 = new cjs.Shape();
    this.shape_93.graphics.f("#000000").s().p("AgLA2IgHAAIgHgBIgHgBIAAhnIANgBIAQgBIALABQAGACAFACQAFADADAFQADAEAAAJIgBAHIgDAHQgDAEgEACQgDADgFACIAAAAQAEABAEABQAEABADADQAEADACAFQABAEAAAGQAAAJgDAFQgDAGgGAEQgFAEgHACQgHABgHABgAgUAqIADABIAFAAIAEAAIAEAAIAJgBIAIgEQADgDACgDQACgDAAgFQAAgGgCgFQgDgDgEgCQgEgDgFAAIgJgBIgNAAgAgNgqIgHABIAAAjIAIAAIAGAAIAGAAIAGgDIAGgEQACgCACgDQABgDAAgEQAAgFgCgDQgCgEgDgBIgHgDIgHgBg");
    this.shape_93.setTransform(145.975,155.2);
    this.shape_94 = new cjs.Shape();
    this.shape_94.graphics.f("#000000").s().p("AAeA1IgLgdIgmAAIgKAdIgNAAIAohpIAFAAIAoBpgAAPANIgMgfIgDgPIgDAQIgMAeIAeAAg");
    this.shape_94.setTransform(137.025,155.125);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},29).to({state:[{t:this.shape_85},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]},871).wait(1));
    // Text_2
    this.shape_95 = new cjs.Shape();
    this.shape_95.graphics.f("#000000").s().p("AAmAnIAAgsIgBgKIgCgHIgEgDQgDgCgEAAQgIAAgEAEQgEAFgCAHIAAAyIgLAAIAAgqIgBgKIgCgIQgBgDgDgBQgCgCgFAAQgHAAgEAEQgFAEgCAHIAAAzIgMAAIAAhKIAIAAIADAJIABAAIAJgIQAFgEAIAAQAHAAAGAEQADACACAHQAEgGAGgDQAGgEAIAAQAGAAAEACQAFABADAEQACAEABAGQACAGAAAKIAAAsg");
    this.shape_95.setTransform(226.85,201.7);
    this.shape_96 = new cjs.Shape();
    this.shape_96.graphics.f("#000000").s().p("AgFA1IAAhKIALAAIAABKgAgFgmQgCgDAAgDQAAgDACgCQACgDADAAQADAAADADQACACAAADQAAADgCADQgDACgDAAQgDAAgCgCg");
    this.shape_96.setTransform(218.7,200.25);
    this.shape_97 = new cjs.Shape();
    this.shape_97.graphics.f("#000000").s().p("AgHAqQgEgFAAgMIAAgrIgMAAIAAgKIAMAAIAAgPIALgEIAAATIAVAAIAAAKIgVAAIAAApQAAAIACADQACADAFAAIAGgBIAGgCIADAJIgJADQgFACgFAAQgIAAgEgGg");
    this.shape_97.setTransform(214.175,200.975);
    this.shape_98 = new cjs.Shape();
    this.shape_98.graphics.f("#000000").s().p("AgFA1IAAhKIALAAIAABKgAgFgmQgCgDAAgDQAAgDACgCQACgDADAAQAEAAACADQACACABADQgBADgCADQgCACgEAAQgDAAgCgCg");
    this.shape_98.setTransform(209.65,200.25);
    this.shape_99 = new cjs.Shape();
    this.shape_99.graphics.f("#000000").s().p("AgNBFIgKgDIADgLIAIADQAEABAHABQAFgBAEgBQAEgBADgDQACgCABgFIABgJIAAgHIgBAAQgDAEgEACQgFACgGABQgQAAgHgKQgHgKAAgTQAAgTAJgKQAJgKARABQAJgBAGACIALADIAABLQAAAOgIAHQgIAHgPAAQgIAAgFgBgAgMgUQgFAHAAANIABAMQABAFACAEQACAEAEACQADACAFAAQAHAAAFgDQAEgFACgHIAAgmQgGgDgKAAQgJAAgGAHgAgEgwIgHgEIgGgGQgCgDgBgEIAHgEQADAFAEADQAFAEAEAAQAFAAAEgEQAEgDADgFIAGADIgCAHIgFAGIgHAFQgEABgEAAIgHgBg");
    this.shape_99.setTransform(203.425,201.75);
    this.shape_100 = new cjs.Shape();
    this.shape_100.graphics.f("#000000").s().p("AgcA1IAAhpIA5AAIAAALIgsAAIAAAjIAnAAIAAAKIgnAAIAAAmIAsAAIAAALg");
    this.shape_100.setTransform(195.75,200.3);
    this.shape_101 = new cjs.Shape();
    this.shape_101.graphics.f("#000000").s().p("AAPA1IgYgjIgIAAIAAAjIgLAAIAAhpIALAAIAAA/IAHgCIAWgeIAOAAIgXAdIgFAEIAHAGIAYAjg");
    this.shape_101.setTransform(184.55,200.3);
    this.shape_102 = new cjs.Shape();
    this.shape_102.graphics.f("#000000").s().p("AgFA1IAAhKIALAAIAABKgAgFgmQgDgDAAgDQAAgDADgCQACgDADAAQADAAADADQADACgBADQABADgDADQgDACgDAAQgDAAgCgCg");
    this.shape_102.setTransform(178.45,200.25);
    this.shape_103 = new cjs.Shape();
    this.shape_103.graphics.f("#000000").s().p("AAmAnIAAgsIAAgKIgDgHIgEgDQgDgCgEAAQgIAAgEAEQgEAFgCAHIAAAyIgLAAIAAgqIAAgKIgDgIQgBgDgDgBQgDgCgEAAQgHAAgEAEQgFAEgCAHIAAAzIgMAAIAAhKIAJAAIACAJIAAAAIAJgIQAGgEAJAAQAHAAAEAEQAEACADAHQADgGAGgDQAGgEAHAAQAHAAAFACQADABADAEQAEAEABAGQABAGAAAKIAAAsg");
    this.shape_103.setTransform(170.45,201.7);
    this.shape_104 = new cjs.Shape();
    this.shape_104.graphics.f("#000000").s().p("AgMAlQgGgDgEgFQgEgFgCgIQgCgHAAgJQAAgSAJgKQAIgLAPAAIAKACQAFABAEADQAEADADAGQADAGAAAKIgBAJIgvAAIABAMQABAFADADQADAEAEACQAFACAGAAQAFAAAFgCIAIgEIAEAIQgEAEgHACQgHADgIgBQgHAAgHgCgAATgHQAAgMgEgEQgFgFgIAAQgIAAgFAFQgFAEgBAMIAkAAIAAAAg");
    this.shape_104.setTransform(160.525,201.8);
    this.shape_105 = new cjs.Shape();
    this.shape_105.graphics.f("#000000").s().p("AgXAsQgIgKAAgTQAAgTAKgKQAJgKAPAAIAIABIAHACIAAggIAMAAIAABOIABAPIAAAMIgIAAIgCgLIgBAAQgDAGgGADQgGADgGAAQgPAAgHgJgAgNgHQgFAHAAAPIABAKQABAGACADQACAFAEACQAEACAEAAQAIAAAEgEQAFgEABgJIAAgkIgGgCIgJgBQgJAAgHAGg");
    this.shape_105.setTransform(152.55,200.4);
    this.shape_106 = new cjs.Shape();
    this.shape_106.graphics.f("#000000").s().p("AgPAlIgHgEIgFgHQgBgDAAgFQAAgHACgFQADgEAFgCQAFgDAHgBIAOgBIAEAAIAEAAIAAgIQAAgHgDgEQgDgDgJAAIgEAAIgGACIgGABIgFACIgEgJQAGgEAHgBQAIgCAHAAQAIABAFACQAEACADADQACADABAEIABAIIAAARIgBAQIABALIABAJIgJAAIgDgKIAAAAIgEADIgFAEIgGADIgIAAQgFAAgEgBgAgBAEIgIACIgFAEQgCADAAADQAAAFAEAEQAEADAFAAIAHgBIAGgDIAEgEIACgDIAAgNIgEgBIgFAAg");
    this.shape_106.setTransform(144.775,201.8);
    this.shape_107 = new cjs.Shape();
    this.shape_107.graphics.f("#000000").s().p("AAPA1IgYgjIgIAAIAAAjIgLAAIAAhpIALAAIAAA/IAHgCIAWgeIAOAAIgXAdIgFAEIAHAGIAYAjg");
    this.shape_107.setTransform(138.2,200.3);
    this.shape_108 = new cjs.Shape();
    this.shape_108.graphics.f("#000000").s().p("AAeA1IgLgdIgmAAIgKAdIgNAAIAohpIAFAAIAoBpgAAPANIgMgfIgDgPIgDAQIgMAeIAeAAg");
    this.shape_108.setTransform(129.725,200.225);
    this.shape_109 = new cjs.Shape();
    this.shape_109.graphics.f("#000000").s().p("AAiA1IAAhGIACgQIgBAAIgGAPIgbAuIgDAAIgdguIgFgPIgBAAIACAQIAABGIgMAAIAAhpIAKAAIAhA1IAEAMIAFgMIAfg1IAKAAIAABpg");
    this.shape_109.setTransform(239.225,200.3);
    this.shape_110 = new cjs.Shape();
    this.shape_110.graphics.f("#000000").s().p("AgGBAIAAhoIAMAAIAABogAgGgxQgDgCABgEQgBgDADgCQADgDADAAQAEAAADADQACACABADQgBAEgCACQgDACgEAAQgDAAgDgCg");
    this.shape_110.setTransform(231.15,199.175);
    this.shape_111 = new cjs.Shape();
    this.shape_111.graphics.f("#000000").s().p("AgFA1IAAheIghAAIAAgLIBNAAIAAALIghAAIAABeg");
    this.shape_111.setTransform(224.8,200.3);
    this.shape_112 = new cjs.Shape();
    this.shape_112.graphics.f("#000000").s().p("AgFBAIAAhoIALAAIAABogAgGgxQgCgCgBgEQABgDACgCQACgDAEAAQAEAAADADQACACAAADQAAAEgCACQgDACgEAAQgEAAgCgCg");
    this.shape_112.setTransform(218.5,199.175);
    this.shape_113 = new cjs.Shape();
    this.shape_113.graphics.f("#000000").s().p("AgJA/QgJgDgFgHQgHgHgDgKQgDgKgBgOQAAgOAFgKQAEgKAHgHQAGgHAIgDQAIgDAIAAIAPABIAKADIgDALQgHgDgOAAQgGAAgFACQgGACgFAFQgFAFgDAIQgDAIAAAMQAAALACAIQADAIAFAFQAEAGAHACQAEADAIAAQAKAAAGgEIAAgdIgYgDIAAgHIAjAAIAAAuIgFADIgIADIgIABIgIABQgJAAgIgDgAAAgtIgHgDIgGgGIgFgIIAHgDQACAFAFACQAFADAGAAQAIAAAEgDQAGgDABgEIAHACQgCAFgCADQgCAEgEACIgHAEIgJABIgHgBg");
    this.shape_113.setTransform(211.75,199.125);
    this.shape_114 = new cjs.Shape();
    this.shape_114.graphics.f("#000000").s().p("AAVA1IgmgxIgHAAIAAAxIgMAAIAAhpIAMAAIAAAyIAHgDIAigvIAPAAIgiAtIgHAGIAJAEIAlAyg");
    this.shape_114.setTransform(190.95,200.3);
    this.shape_115 = new cjs.Shape();
    this.shape_115.graphics.f("#000000").s().p("AgFBAIAAhoIALAAIAABogAgGgxQgCgCgBgEQABgDACgCQACgDAEAAQAEAAADADQACACAAADQAAAEgCACQgDACgEAAQgEAAgCgCg");
    this.shape_115.setTransform(183.85,199.175);
    this.shape_116 = new cjs.Shape();
    this.shape_116.graphics.f("#000000").s().p("AAiA1IAAhGIACgQIgBAAIgGAPIgbAuIgDAAIgdguIgFgPIgBAAIACAQIAABGIgMAAIAAhpIAKAAIAhA1IAEAMIAFgMIAfg1IAKAAIAABpg");
    this.shape_116.setTransform(175.725,200.3);
    this.shape_117 = new cjs.Shape();
    this.shape_117.graphics.f("#000000").s().p("AgcA1IAAhpIA5AAIAAALIgsAAIAAAjIAnAAIAAAKIgnAAIAAAmIAsAAIAAALg");
    this.shape_117.setTransform(165.95,200.3);
    this.shape_118 = new cjs.Shape();
    this.shape_118.graphics.f("#000000").s().p("AgRA1IgIAAIgIAAIgEgBIAAhoIAGAAIAHgBIAIAAIAHAAQAMAAAIAEQAKAEAGAHQAGAHADAKQACAJAAAMQAAAKgCAKQgDAJgGAIQgGAHgKAFQgJAFgMAAgAgZAqIADAAIAFAAIAEAAIADABQAKAAAGgEQAIgEADgGQAFgGACgIQACgIAAgHIgCgPQgCgHgEgGQgEgGgGgEQgIgEgJAAIgEAAIgFAAIgEABIgDAAg");
    this.shape_118.setTransform(157.1,200.325);
    this.shape_119 = new cjs.Shape();
    this.shape_119.graphics.f("#000000").s().p("AAVA1IglgxIgHAAIAAAxIgNAAIAAhpIANAAIAAAyIAHgDIAhgvIAPAAIgiAtIgHAGIAIAEIAmAyg");
    this.shape_119.setTransform(139.05,200.3);
    this.shape_120 = new cjs.Shape();
    this.shape_120.graphics.f("#000000").s().p("AAeA1IgLgdIgmAAIgKAdIgNAAIAohpIAFAAIAoBpgAAPANIgMgfIgDgPIgDAQIgMAeIAeAAg");
    this.shape_120.setTransform(129.725,200.225);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_108,p:{x:129.725}},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100,p:{x:195.75}},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},39).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_108,p:{x:147.625}},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_100,p:{x:203.3}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109}]},861).wait(1));
    // Text_1
    this.shape_121 = new cjs.Shape();
    this.shape_121.graphics.f("#000000").s().p("AgHA2IgEAAIABgGIACAAIACAAIAFgBIACgBIABgCIAAgCQAAgEgMgBIAGgMQgHAAgFgCIgIgEIADgKIAJADIALACQAGAAAEgDQAEgCAAgHQAAgDgCgDIgHgDIgIgEIgIgEQgEgDgDgEQgDgEAAgGQAAgLAGgFQAGgFAKAAQAJAAAFABIAKAEIgDAKIgJgDQgFgBgFgBQgGABgDACQgDACAAAGQAAADADADIAHADIAHAEIAJAEQAEADADAFQACADAAAGQAAAJgFAGQgFAHgLABIgDAEQAHABACAEQADACAAAEQAAAGgFAFQgEADgIAAg");
    this.shape_121.setTransform(229.575,248.35);
    this.shape_122 = new cjs.Shape();
    this.shape_122.graphics.f("#000000").s().p("AgPAlIgHgEIgFgHQgBgEAAgEQAAgHACgEQADgFAFgCQAFgCAHgCIAOgBIAEAAIAEAAIAAgIQAAgHgDgEQgDgDgJAAIgEAAIgGACIgGABIgFACIgEgJQAGgDAHgCQAIgBAHAAQAIAAAFACQAEACADADQACADABAEIABAIIAAARIgBAQIABAKIABAKIgJAAIgDgKIAAAAIgEADIgFAEIgGACIgIABQgFABgEgCgAgBAEIgIACIgFAEQgCADAAADQAAAGAEADQAEADAFAAIAHgBIAGgDIAEgEIACgDIAAgNIgEgBIgFAAg");
    this.shape_122.setTransform(222.575,246.9);
    this.shape_123 = new cjs.Shape();
    this.shape_123.graphics.f("#000000").s().p("AgPAlIgHgEIgFgHQgBgEAAgEQAAgHACgEQADgFAFgCQAFgCAHgCIAOgBIAEAAIAEAAIAAgIQAAgHgDgEQgDgDgJAAIgEAAIgGACIgGABIgFACIgEgJQAGgDAHgCQAIgBAHAAQAIAAAFACQAEACADADQACADABAEIABAIIAAARIgBAQIABAKIABAKIgJAAIgDgKIAAAAIgEADIgFAEIgGACIgIABQgFABgEgCgAgBAEIgIACIgFAEQgCADAAADQAAAGAEADQAEADAFAAIAHgBIAGgDIAEgEIACgDIAAgNIgEgBIgFAAg");
    this.shape_123.setTransform(215.175,246.9);
    this.shape_124 = new cjs.Shape();
    this.shape_124.graphics.f("#000000").s().p("AAiA0IAAhFIACgQIgBAAIgGAOIgbAvIgDAAIgdgvIgFgOIgBAAIACAQIAABFIgMAAIAAhoIAKAAIAhA1IAEAMIAFgMIAfg1IAKAAIAABog");
    this.shape_124.setTransform(205.725,245.4);
    this.shape_125 = new cjs.Shape();
    this.shape_125.graphics.f("#000000").s().p("AAVApIgGAEIgIAFIgHADQgFACgGgBQgHAAgGgCQgHgBgEgFQgFgDgCgGQgDgGgBgGQAAgGADgGQACgGADgEQAEgEAEgDIAKgHIgGgLQgDgGAAgGIABgHIAFgGQACgDAEgCQAEgCAGAAQAHAAADACQADACADADIAEAFIABAGQAAAHgFAHQgEAGgKAGIAFAKIAGAHIAHAJIAIAJIADgFIAEgGIADgHIACgGIAJAFIgDAGIgDAHIgFAHIgDAGIAFAFIAFAEIAEADIAFACIgIAIQgIgEgKgJgAgWABIgGAHIgEAIQgCADABAFQAAAFABAEQADADADACIAHAFQAFABAFAAIAHgBIAGgCIAGgEIAEgEIgJgJIgHgLIgHgJIgFgIgAgOgpQgDACAAAFQAAAEACAFIAFAIQAHgEADgFQADgEAAgDQAAgFgCgDQgBgDgGAAQgGAAgCADg");
    this.shape_125.setTransform(190,245.4);
    this.shape_126 = new cjs.Shape();
    this.shape_126.graphics.f("#000000").s().p("AgFAlIAAhJIALAAIAABJg");
    this.shape_126.setTransform(177.6,246.9);
    this.shape_127 = new cjs.Shape();
    this.shape_127.graphics.f("#000000").s().p("AgHAqQgEgFAAgMIAAgrIgMAAIAAgKIAMAAIAAgPIALgEIAAATIAVAAIAAAKIgVAAIAAApQAAAIACADQACADAFAAIAGgBIAGgCIADAJIgJADQgFACgFAAQgIAAgEgGg");
    this.shape_127.setTransform(173.075,246.075);
    this.shape_128 = new cjs.Shape();
    this.shape_128.graphics.f("#000000").s().p("AgPAlIgHgEIgFgHQgBgEAAgEQAAgHACgEQADgFAFgCQAFgCAHgCIAOgBIAEAAIAEAAIAAgIQAAgHgDgEQgDgDgJAAIgEAAIgGACIgGABIgFACIgEgJQAGgDAHgCQAIgBAHAAQAIAAAFACQAEACADADQACADABAEIABAIIAAARIgBAQIABAKIABAKIgJAAIgDgKIAAAAIgEADIgFAEIgGACIgIABQgFABgEgCgAgBAEIgIACIgFAEQgCADAAADQAAAGAEADQAEADAFAAIAHgBIAGgDIAEgEIACgDIAAgNIgEgBIgFAAg");
    this.shape_128.setTransform(166.675,246.9);
    this.shape_129 = new cjs.Shape();
    this.shape_129.graphics.f("#000000").s().p("AgOAlIgKgDIADgLIAJAEQAGACAFAAQAGAAAEgDQAEgCAAgHQAAgEgCgDIgHgEIgIgEIgIgCQgEgDgDgEQgDgEAAgGQAAgLAGgGQAGgEAKgBQAJAAAFACIAKADIgDAKIgJgCQgFgCgFAAQgGAAgDADQgDABAAAHQAAADADACIAHAEIAHADIAJAFQAEABADAFQACAEAAAHQAAAEgBAFQgCAEgDADQgDADgFABQgFACgGAAQgIAAgGgCg");
    this.shape_129.setTransform(159.975,246.9);
    this.shape_130 = new cjs.Shape();
    this.shape_130.graphics.f("#000000").s().p("AgSAmIAAhKIAIAAIADAJIABAAQACgFAEgDQADgCAHAAIAJABIgDAMIgIgCQgGAAgEAEQgDADgBAGIAAAzg");
    this.shape_130.setTransform(154.8,246.825);
    this.shape_131 = new cjs.Shape();
    this.shape_131.graphics.f("#000000").s().p("AgFAlIAAhJIALAAIAABJg");
    this.shape_131.setTransform(149.75,246.9);
    this.shape_132 = new cjs.Shape();
    this.shape_132.graphics.f("#000000").s().p("AgcA0IAAhoIA5AAIAAAMIgsAAIAAAkIApAAIAAAKIgpAAIAAAug");
    this.shape_132.setTransform(144.125,245.4);
    this.shape_133 = new cjs.Shape();
    this.shape_133.graphics.f("#000000").s().p("AgHA2IgEAAIABgGIACAAIACAAIAFgBIACgBIABgCIAAgCQAAgEgMgBIAGgMQgHAAgFgCIgIgEIADgKIAJADIALACQAGAAAEgDQAEgCAAgHQAAgDgCgDIgHgDIgIgEIgIgEQgEgDgDgEQgDgEAAgGQAAgLAGgFQAGgFAKAAQAJAAAFABIAKAEIgDAKIgJgDQgFgBgFgBQgGABgDACQgDACAAAGQAAADADADIAHADIAHAEIAJAEQAEADADAFQACADAAAGQAAAJgFAGQgFAHgLABIgDAEQAHABACAEQADACAAAEQAAAGgFAFQgEADgIAAg");
    this.shape_133.setTransform(132.825,248.35);
    this.shape_134 = new cjs.Shape();
    this.shape_134.graphics.f("#000000").s().p("AgFBAIAAhoIALAAIAABogAgGgxQgCgCAAgEQAAgDACgCQADgDADAAQAEAAADADQACACABADQgBAEgCACQgDACgEAAQgDAAgDgCg");
    this.shape_134.setTransform(127.55,244.275);
    this.shape_135 = new cjs.Shape();
    this.shape_135.graphics.f("#000000").s().p("AgHBFIgDAAIABgGIACAAIABAAIAGgBIABgBIACgCIAAgCQAAgEgMgBIAGgMIgSgCIgLgEIAEgLIALAEQAGABAJAAIAIgBIAHgCQAEgDACgDQABgDAAgEQAAgHgDgEQgEgDgGgDIgLgGQgHgCgFgFQgGgDgEgGQgDgGAAgIQAAgMAIgIQAJgHAPAAQAJAAAHACQAIABAEACIgEALIgKgDQgHgCgIABQgJAAgFADQgFAFAAAGQAAAGAEAEQAEAEAFADIALAGQAHADAGAEQAFAEAEAGQAEAEAAAIQAAAMgHAIQgIAHgNACIgDAFQAGABADAEQADACAAAEQAAAGgFAFQgFADgHAAg");
    this.shape_135.setTransform(244.525,246.85);
    this.shape_136 = new cjs.Shape();
    this.shape_136.graphics.f("#000000").s().p("AAeA1IgLgdIgmAAIgKAdIgNAAIAohpIAFAAIAoBpgAAPANIgMgfIgDgPIgDAQIgMAeIAeAAg");
    this.shape_136.setTransform(236.175,245.325);
    this.shape_137 = new cjs.Shape();
    this.shape_137.graphics.f("#000000").s().p("AAeA1IgLgdIgmAAIgKAdIgNAAIAohpIAFAAIAoBpgAAPANIgMgfIgDgPIgDAQIgMAeIAeAAg");
    this.shape_137.setTransform(227.425,245.325);
    this.shape_138 = new cjs.Shape();
    this.shape_138.graphics.f("#000000").s().p("AAVApIgGAEIgIAFIgHADQgFACgGgBQgHAAgHgCQgGgBgEgFQgFgDgDgGQgDgGAAgGQABgGACgGQACgGAEgEQADgEAFgDIAJgHIgGgLQgCgGgBgGIABgHIAFgGQACgDAEgCQAEgCAGAAQAGAAAEACQAEACACADIAEAFIABAGQAAAHgFAHQgFAGgJAGIAFAKIAGAHIAIAJIAHAJIADgFIADgGIAEgHIACgGIAJAFIgCAGIgEAHIgEAHIgEAGIAFAFIAFAEIAEADIAEACIgHAIQgIgEgKgJgAgWABIgGAHIgEAIQgCADAAAFQABAFACAEQACADADACIAHAFQAFABAFAAIAHgBIAGgCIAFgEIAFgEIgIgJIgIgLIgHgJIgFgIgAgOgpQgDACAAAFQAAAEACAFIAFAIQAIgEACgFQADgEAAgDQAAgFgDgDQAAgDgHAAQgFAAgCADg");
    this.shape_138.setTransform(201.4,245.4);
    this.shape_139 = new cjs.Shape();
    this.shape_139.graphics.f("#000000").s().p("AgFA0IAAhoIALAAIAABog");
    this.shape_139.setTransform(188.825,245.4);
    this.shape_140 = new cjs.Shape();
    this.shape_140.graphics.f("#000000").s().p("AgFA0IAAhcIghAAIAAgMIBNAAIAAAMIghAAIAABcg");
    this.shape_140.setTransform(182.5,245.4);
    this.shape_141 = new cjs.Shape();
    this.shape_141.graphics.f("#000000").s().p("AAeA1IgLgdIgmAAIgKAdIgNAAIAohpIAFAAIAoBpgAAPANIgMgfIgDgPIgDAQIgMAeIAeAAg");
    this.shape_141.setTransform(174.975,245.325);
    this.shape_142 = new cjs.Shape();
    this.shape_142.graphics.f("#000000").s().p("AgUA0QgIgBgEgCIAEgMIALAFQAGABAJAAIAIgBIAHgDQAEgCACgDQABgDAAgFQAAgHgDgDQgEgEgGgEIgLgGQgHgCgFgDQgGgEgEgFQgDgGAAgJQAAgMAIgHQAJgHAPgBQAJABAHABIAMAEIgEALIgKgDQgHgCgIAAQgJAAgFAEQgFAFAAAGQAAAFAEAEQAEAEAFAEIALAGQAHADAGACQAFAEAEAGQAEAFAAAJQAAAGgDAGQgCAGgFADQgEAEgHACQgGADgIgBQgLAAgHgCg");
    this.shape_142.setTransform(166.625,245.4);
    this.shape_143 = new cjs.Shape();
    this.shape_143.graphics.f("#000000").s().p("AAVA1IgcguIgPgCIAAAwIgNAAIAAhnIAOgBIANgBQAHAAAGACQAGABAFADQAEADADAGQADAGAAAIQAAAMgHAHQgHAIgKACIAHAGIAaApgAgWgpIAAAnIAMAAQAKAAAGgFQAHgFAAgLQAAgIgGgFQgGgFgIAAIgEAAIgFAAIgDAAg");
    this.shape_143.setTransform(158.55,245.35);
    this.shape_144 = new cjs.Shape();
    this.shape_144.graphics.f("#000000").s().p("AgFA0IAAhoIALAAIAABog");
    this.shape_144.setTransform(151.575,245.4);
    this.shape_145 = new cjs.Shape();
    this.shape_145.graphics.f("#000000").s().p("AgHBFIgDAAIABgGIACAAIABAAIAGgBIABgBIACgCIAAgCQAAgEgMgBIAGgMIgSgCIgLgEIAEgLIALAEQAGABAJAAIAIgBIAHgCQAEgDACgDQABgDAAgEQAAgHgDgEQgEgDgGgDIgLgGQgHgCgFgFQgGgDgEgGQgDgGAAgIQAAgMAIgIQAJgHAPAAQAJAAAHACIAMADIgEALIgKgDQgHgCgIABQgJAAgFADQgFAFAAAGQAAAGAEAEQAEAEAFADIALAGQAHADAGAEQAFAEAEAGQAEAEAAAIQAAAMgHAIQgIAHgNACIgDAFQAGABADAEQADACAAAEQAAAGgFAFQgFADgHAAg");
    this.shape_145.setTransform(133.675,246.85);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132,p:{x:144.125}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124,p:{x:205.725}},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121}]},49).to({state:[{t:this.shape_134},{t:this.shape_145},{t:this.shape_132,p:{x:145.775}},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_124,p:{x:217.125}},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},851).wait(1));
    // Text_0
    this.shape_146 = new cjs.Shape();
    this.shape_146.graphics.f("#000000").s().p("AgPAlIgHgEIgFgHQgBgEAAgEQAAgHACgEQADgFAFgCQAFgCAHgCIAOgBIAEAAIAEAAIAAgIQAAgHgDgEQgDgDgJAAIgEAAIgGACIgGABIgFACIgEgJQAGgEAHgBQAIgBAHAAQAIAAAFACQAEACADADQACADABAEIABAIIAAARIgBAQIABAKIABAKIgJAAIgDgKIAAAAIgEADIgFAEIgGACIgIABQgFABgEgCgAgBAEIgIACIgFAEQgCADAAADQAAAGAEADQAEADAFAAIAHgBIAGgDIAEgEIACgDIAAgNIgEgBIgFAAg");
    this.shape_146.setTransform(194.325,292);
    this.shape_147 = new cjs.Shape();
    this.shape_147.graphics.f("#000000").s().p("AAOA0IgYgiIgGAAIAAAiIgNAAIAAhoIANAAIAABAIAFgDIAXgeIAOAAIgXAcIgFAGIAGAFIAaAig");
    this.shape_147.setTransform(187.75,290.5);
    this.shape_148 = new cjs.Shape();
    this.shape_148.graphics.f("#000000").s().p("AgFA1IAAhKIALAAIAABKgAgFgmQgDgDABgDQgBgDADgDQACgCADAAQAEAAACACQACADABADQgBADgCADQgCACgEAAQgDAAgCgCg");
    this.shape_148.setTransform(181.65,290.45);
    this.shape_149 = new cjs.Shape();
    this.shape_149.graphics.f("#000000").s().p("AgMA1IAAhAIgMAAIAAgKIAMAAIAAgEIABgMQABgFADgDQACgEAFgCQACgBAHAAIAIABIAIACIgDAKIgGgCIgHgBQgDABgDABQAAAAAAABQgBAAAAAAQgBABAAAAQAAABAAABIgBAFIAAAIIAAACIATAAIAAAKIgTAAIAABAg");
    this.shape_149.setTransform(177.7,290.45);
    this.shape_150 = new cjs.Shape();
    this.shape_150.graphics.f("#000000").s().p("AgFA1IAAhKIALAAIAABKgAgFgmQgCgDAAgDQAAgDACgDQACgCADAAQADAAADACQADADAAADQAAADgDADQgDACgDAAQgDAAgCgCg");
    this.shape_150.setTransform(172.9,290.45);
    this.shape_151 = new cjs.Shape();
    this.shape_151.graphics.f("#000000").s().p("AgHAqQgEgFAAgMIAAgrIgMAAIAAgKIAMAAIAAgPIALgEIAAATIAVAAIAAAKIgVAAIAAApQAAAIACADQACADAFAAIAGgBIAGgCIADAJIgJADQgFACgFAAQgIAAgEgGg");
    this.shape_151.setTransform(168.375,291.175);
    this.shape_152 = new cjs.Shape();
    this.shape_152.graphics.f("#000000").s().p("AgSAmIAAhKIAIAAIADAJIABAAQACgFAEgDQADgCAHAAIAJABIgDAMIgIgCQgGAAgEAEQgDADgBAGIAAAzg");
    this.shape_152.setTransform(163.8,291.925);
    this.shape_153 = new cjs.Shape();
    this.shape_153.graphics.f("#000000").s().p("AgMAkQgGgCgEgGQgEgEgCgIQgCgHAAgJQAAgSAJgKQAIgLAPABIAKABQAFABAEADQAEADADAGQADAGAAAKIgBAJIgvAAIABAMQABAFADADQADAEAEACQAFACAGAAQAFAAAFgCIAIgEIAEAIQgEAEgHACQgHACgIAAQgHAAgHgDgAATgIQAAgLgEgEQgFgFgIAAQgIAAgFAFQgFAEgBALIAkAAIAAAAg");
    this.shape_153.setTransform(156.975,292);
    this.shape_154 = new cjs.Shape();
    this.shape_154.graphics.f("#000000").s().p("AgUA0QgIgBgEgCIAEgMIALAFQAGABAJAAIAIgBIAHgDQAEgCACgDQABgDAAgFQAAgHgDgEQgEgEgGgDIgLgFQgHgDgFgDQgGgEgEgFQgDgGAAgJQAAgMAIgHQAJgIAPAAQAJABAHABIAMAEIgEAKIgKgCQgHgCgIAAQgJAAgFAEQgFAFAAAFQAAAHAEADQAEAEAFAEIALAGQAHACAGADQAFAFAEAFQAEAFAAAIQAAAHgDAGQgCAGgFADQgEAEgHACQgGACgIAAQgLAAgHgCg");
    this.shape_154.setTransform(149.175,290.5);
    this.shape_155 = new cjs.Shape();
    this.shape_155.graphics.f("#000000").s().p("AAVAlIgRgWIgEgJIgEAJIgQAWIgNAAIAbglIgagkIAPAAIAOAUIAEAIIAEgIIAPgUIANAAIgaAkIAbAlg");
    this.shape_155.setTransform(137.35,292);
    this.shape_156 = new cjs.Shape();
    this.shape_156.graphics.f("#000000").s().p("AgSA0IgKgCIADgLIAJACQAEACAGAAQAFAAADgCQAFgBADgDIAFgHQACgEAAgFQAAgLgHgFQgFgEgLgBIgKAAIAAgDIAUgiIAHgGIgKACIgcAAIAAgMIA0AAIAAAFIgYAkIgEAEIAAAAIAEgBQAGAAAFADQAFACAEADQAEADACAFQACAGAAAHQAAAHgDAHQgDAGgFAEQgEAFgHACQgHACgGAAQgHAAgFgBg");
    this.shape_156.setTransform(129.55,290.6);
    this.shape_157 = new cjs.Shape();
    this.shape_157.graphics.f("#000000").s().p("AAeA1IgLgdIgmAAIgKAdIgNAAIAohpIAFAAIAoBpgAAPANIgMgfIgDgPIgDAQIgMAeIAeAAg");
    this.shape_157.setTransform(207.425,290.425);
    this.shape_158 = new cjs.Shape();
    this.shape_158.graphics.f("#000000").s().p("AAVA0IgmgwIgHAAIAAAwIgMAAIAAhoIAMAAIAAAyIAHgCIAjgwIAOAAIgiAtIgGAFIAIAGIAlAwg");
    this.shape_158.setTransform(198.85,290.5);
    this.shape_159 = new cjs.Shape();
    this.shape_159.graphics.f("#000000").s().p("AgGBAIAAhoIAMAAIAABogAgGgxQgCgCAAgEQAAgDACgCQACgDAEAAQAEAAADADQADACgBADQABAEgDACQgDACgEAAQgEAAgCgCg");
    this.shape_159.setTransform(191.75,289.375);
    this.shape_160 = new cjs.Shape();
    this.shape_160.graphics.f("#000000").s().p("AgcA0IAAhoIA5AAIAAAMIgsAAIAAAkIApAAIAAAKIgpAAIAAAug");
    this.shape_160.setTransform(185.925,290.5);
    this.shape_161 = new cjs.Shape();
    this.shape_161.graphics.f("#000000").s().p("AgFBAIAAhoIALAAIAABogAgGgxQgCgCAAgEQAAgDACgCQADgDADAAQAEAAADADQADACAAADQAAAEgDACQgDACgEAAQgDAAgDgCg");
    this.shape_161.setTransform(179.65,289.375);
    this.shape_162 = new cjs.Shape();
    this.shape_162.graphics.f("#000000").s().p("AgFA0IAAhcIghAAIAAgMIBNAAIAAAMIggAAIAABcg");
    this.shape_162.setTransform(173.3,290.5);
    this.shape_163 = new cjs.Shape();
    this.shape_163.graphics.f("#000000").s().p("AAVA1IgcgtIgPgDIAAAwIgNAAIAAhnIAOgBIANgBQAHAAAGABQAGACAEADQAFADADAHQADAFAAAIQAAAMgHAHQgGAIgLACIAHAGIAaApgAgWgpIAAAnIAMAAQAKAAAGgFQAGgFABgLQgBgIgFgFQgGgFgIgBIgFAAIgDABIgEAAg");
    this.shape_163.setTransform(165.95,290.45);
    this.shape_164 = new cjs.Shape();
    this.shape_164.graphics.f("#000000").s().p("AgcA0IAAhoIA4AAIAAAMIgsAAIAAAiIAoAAIAAAKIgoAAIAAAmIAtAAIAAAKg");
    this.shape_164.setTransform(157.3,290.5);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146}]},61).to({state:[{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157}]},839).wait(1));
    // check_0
    this.shape_165 = new cjs.Shape();
    this.shape_165.graphics.f("#FFFFFF").s().p("AhsgBIAfgfIA7A0IBihjIAdAfIiDB/g");
    this.shape_165.setTransform(103.475,291.75);
    this.shape_166 = new cjs.Shape();
    this.shape_166.graphics.f("#EE7B65").s().p("AhlCZQgVAAgPgPQgPgPAAgWIAAjJQAAgWAPgPQAPgPAVAAIDLAAQAVAAAPAPQAPAPAAAWIAADJQAAAWgPAPQgPAPgVAAg");
    this.shape_166.setTransform(103.15,291.1);
    this.shape_167 = new cjs.Shape();
    this.shape_167.graphics.f("#FFFFFF").s().p("AhsAAIAfggIA7A0IBihiIAdAeIiDCAg");
    this.shape_167.setTransform(103.475,246.35);
    this.shape_168 = new cjs.Shape();
    this.shape_168.graphics.f("#EE7B65").s().p("AhlCZQgVAAgPgPQgPgPAAgWIAAjKQAAgVAPgPQAPgPAVAAIDLAAQAVAAAPAPQAPAPAAAVIAADKQAAAWgPAPQgPAPgVAAg");
    this.shape_168.setTransform(103.15,245.75);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_166},{t:this.shape_165}]},61).to({state:[{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165}]},839).wait(1));
    // check_4
    this.shape_169 = new cjs.Shape();
    this.shape_169.graphics.f("#FFFFFF").s().p("AhsAAIAfggIA7A0IBihiIAdAeIiDCAg");
    this.shape_169.setTransform(103.475,246.35);
    this.shape_170 = new cjs.Shape();
    this.shape_170.graphics.f("#EE7B65").s().p("AhlCZQgVAAgPgPQgPgPAAgWIAAjKQAAgVAPgPQAPgPAVAAIDLAAQAVAAAPAPQAPAPAAAVIAADKQAAAWgPAPQgPAPgVAAg");
    this.shape_170.setTransform(103.15,245.75);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_170},{t:this.shape_169}]},49).to({state:[{t:this.shape_170},{t:this.shape_169}]},851).wait(1));
    // check_3
    this.shape_171 = new cjs.Shape();
    this.shape_171.graphics.f("#FFFFFF").s().p("AhsgBIAfgfIA7A0IBihiIAdAeIiDCAg");
    this.shape_171.setTransform(103.475,201);
    this.shape_172 = new cjs.Shape();
    this.shape_172.graphics.f("#EE7B65").s().p("AhlCZQgVAAgPgPQgPgPAAgVIAAjLQAAgVAPgPQAPgPAVAAIDLAAQAVAAAPAPQAPAPAAAVIAADLQAAAVgPAPQgPAPgVAAg");
    this.shape_172.setTransform(103.15,200.35);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_172},{t:this.shape_171}]},39).to({state:[{t:this.shape_172},{t:this.shape_171}]},861).wait(1));
    // check_2
    this.shape_173 = new cjs.Shape();
    this.shape_173.graphics.f("#FFFFFF").s().p("AhsgBIAfgfIA7A0IBihjIAdAfIiDCAg");
    this.shape_173.setTransform(103.475,155.625);
    this.shape_174 = new cjs.Shape();
    this.shape_174.graphics.f("#EE7B65").s().p("AhlCZQgVAAgPgPQgPgPAAgWIAAjKQAAgVAPgPQAPgPAVAAIDLAAQAVAAAPAPQAPAPAAAVIAADKQAAAWgPAPQgPAPgVAAg");
    this.shape_174.setTransform(103.15,155);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_174},{t:this.shape_173}]},29).wait(872));
    // check_1
    this.shape_175 = new cjs.Shape();
    this.shape_175.graphics.f("#FFFFFF").s().p("AhsgBIAfgfIA7A0IBihiIAdAeIiDB/g");
    this.shape_175.setTransform(103.475,110.25);
    this.shape_176 = new cjs.Shape();
    this.shape_176.graphics.f("#EE7B65").s().p("AhlCZQgVAAgPgPQgPgPAAgVIAAjLQAAgVAPgPQAPgPAVAAIDLAAQAVAAAPAPQAPAPAAAVIAADLQAAAVgPAPQgPAPgVAAg");
    this.shape_176.setTransform(103.15,109.6);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_176},{t:this.shape_175}]},18).to({state:[{t:this.shape_176},{t:this.shape_175}]},882).wait(1));
    // fingers
    this.shape_177 = new cjs.Shape();
    this.shape_177.graphics.f("#744538").s().p("AgqAHQARgNAVgIQAbgJAPAEQAIACAFADQAEACAAABQgHgDgKgCQgOgCgbAIQgQAFgVAOIgKAIIgDAEQgDgCAOgMg");
    this.shape_177.setTransform(449.5243,193.961);
    this.shape_178 = new cjs.Shape();
    this.shape_178.graphics.f("#744538").s().p("AgmAWQgGgEgCgIQgBgFACgFQABgGAFgDQAHgHAQgEQAPgEAdACIATADQAAACgTgBQgegCgNAEQgQAGgFAEQgIAGABAJQABAHAFAEIADADIAAABIgEgCg");
    this.shape_178.setTransform(449.155,208.9383);
    this.shape_179 = new cjs.Shape();
    this.shape_179.graphics.f("#744538").s().p("AgrAUQgDgGACgHQADgKAHgFQAJgGANgEQATgEAVAAQASABAAABIgRABQgWABgSAFQgNADgHAFQgHAEgDAJQgCAGACAFIACAEQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBgBgBg");
    this.shape_179.setTransform(447.875,204.125);
    this.shape_180 = new cjs.Shape();
    this.shape_180.graphics.f("#744538").s().p("Ag5ASIAOgMQAQgMAYgHQAWgGAVACQASACAAACIgTgBQgWAAgTAGQgUAFgTALQgOALgCAAIAAgBg");
    this.shape_180.setTransform(449.125,198.3056);
    this.shape_181 = new cjs.Shape();
    this.shape_181.graphics.f("#B77864").s().p("AALBiIgVgJQgKACgKABQgTAAgCgKQgDgJAFgKQACgGAEgDIAXgKQgrAGgCgLQgBgNACgEQAFgKAWgHIARgFQgtABAAgKQgBgKABgDQADgFALgFQAQgHANgJQgKACgKgBQgUgBAEgOIAZgUQAegUAfACQAfACgDAXQgCALgIAKIAQAQQALAUgRATIgEAJIAMALQAHAOgUAVIAEANQACAPgLALQgGAGgLAAQgIAAgKgDg");
    this.shape_181.setTransform(450.0737,202.2307);
    this.shape_182 = new cjs.Shape();
    this.shape_182.graphics.f("#B77864").s().p("AgTADQAKgXAMgEQANgFAGARQAEAIABAIIg1AWQACgLAFgMg");
    this.shape_182.setTransform(448.95,191.7682);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177}]}).to({state:[{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177}]},900).wait(1));
    // right_hand
    this.shape_183 = new cjs.Shape();
    this.shape_183.graphics.f("#F9AC9D").s().p("AhyA2QABgoARgnQAghRBKgCIBpBTIhNCGg");
    this.shape_183.setTransform(288.075,221.7);
    this.shape_184 = new cjs.Shape();
    this.shape_184.graphics.f("#F9AC9D").s().p("ABDClQgQgGgMgGIgIgFQgHAGgLADQgUAFgTgOQgTgOg5hEIg2hCIAjiLIApAEIAUgNQAWgNAQgBQANAAAYAEQAWADADgBIAPgJQAKgEAGAHQALAOgDAUQgEAZgiAIIgjAAIADATQAEAWAGAIQAFAJA+BOIA9BNIAHAKQAFALgEAJQgIAPgggIQgFAFgJAEQgKAEgJAAQgHAAgIgDg");
    this.shape_184.setTransform(307.6013,232.649);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_184},{t:this.shape_183}]}).to({state:[{t:this.shape_184},{t:this.shape_183}]},900).wait(1));
    // B_Ok
    this.instance_1 = new lib.Ara10("synched",0);
    this.instance_1.setTransform(374.8,-84.45);
    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:374.7952,y:-67.5769},0).wait(1).to({x:374.7897,y:-50.7038},0).wait(1).to({x:374.7832,y:-33.8308},0).wait(1).to({x:374.7758,y:-16.9577},0).wait(1).to({x:374.7672,y:-0.0846},0).wait(1).to({x:374.7574,y:16.7885},0).wait(1).to({x:374.7463,y:33.6615},0).wait(1).to({x:374.7436,y:50.5346},0).wait(1).to({x:374.7448,y:67.4077},0).wait(1).to({x:374.7462,y:84.2808},0).wait(1).to({x:374.7477,y:101.1538},0).wait(1).to({x:374.7492,y:118.0269},0).wait(1).to({x:374.7507,y:134.9},0).wait(1).to({x:374.7522,y:135.6407},0).wait(1).to({x:374.7536,y:136.3815},0).wait(1).to({x:374.7549,y:137.1222},0).wait(1).to({x:374.7561,y:137.863},0).wait(1).to({x:374.7571,y:138.6037},0).wait(1).to({x:374.7581,y:139.3444},0).wait(1).to({x:374.7589,y:140.0852},0).wait(1).to({x:374.7596,y:140.8259},0).wait(1).to({x:374.7602,y:141.5667},0).wait(1).to({x:374.7607,y:142.3074},0).wait(1).to({x:374.7611,y:143.0481},0).wait(1).to({x:374.7615,y:143.7889},0).wait(1).to({x:374.7619,y:144.5296},0).wait(1).to({x:374.7622,y:145.2704},0).wait(1).to({x:374.7624,y:146.0111},0).wait(1).to({x:374.7626,y:146.7519},0).wait(1).to({x:374.7628,y:147.4926},0).wait(1).to({x:374.763,y:148.2333},0).wait(1).to({x:374.7632,y:148.9741},0).wait(1).to({x:374.7633,y:149.7148},0).wait(1).to({x:374.7634,y:150.4556},0).wait(1).to({x:374.7636,y:151.1963},0).wait(1).to({y:151.937},0).wait(1).to({x:374.7637,y:152.6778},0).wait(1).to({x:374.7638,y:153.4185},0).wait(1).to({x:374.7639,y:154.1593},0).wait(1).to({y:154.9},0).wait(1).to({x:374.764,y:155.6407},0).wait(1).to({y:156.3815},0).wait(1).to({y:157.1222},0).wait(1).to({y:157.863},0).wait(1).to({y:158.6037},0).wait(1).to({y:159.3444},0).wait(1).to({y:160.0852},0).wait(1).to({y:160.8259},0).wait(1).to({y:161.5667},0).wait(1).to({y:162.3074},0).wait(1).to({y:163.0481},0).wait(1).to({y:163.7889},0).wait(1).to({y:164.5296},0).wait(1).to({y:165.2704},0).wait(1).to({y:166.0111},0).wait(1).to({y:166.7519},0).wait(1).to({y:167.4926},0).wait(1).to({y:168.2333},0).wait(1).to({y:168.9741},0).wait(1).to({y:169.7148},0).wait(1).to({y:170.4556},0).wait(1).to({y:171.1963},0).wait(1).to({y:171.937},0).wait(1).to({y:172.6778},0).wait(1).to({y:173.4185},0).wait(1).to({y:174.1593},0).wait(1).to({y:174.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(825));
    // Sertifika
    this.shape_185 = new cjs.Shape();
    this.shape_185.graphics.lf(["#FDF3AF","#F5E089","#DBBE66","#C7A34B","#B8903A","#B08431","#AD802E","#B08431","#B88F3A","#C6A24A","#D9BC64","#F3DD86","#F5E089","#FDF3AF"],[0,0.078,0.165,0.247,0.333,0.412,0.49,0.561,0.631,0.706,0.78,0.855,0.863,1],-8.6,3.1,10.3,-1.3).s().p("AACA0IADAAIgDgBQgDgBAAgEIAEAAQABAAAAAAQABABAAAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAIgCABIACAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQgBABAAAAIgFABQgBgFADgCgAgJA7QgBgFAEgBIAEgBIgEAAQgEgCABgEIADAAIACAAIADADIAAADQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgDADIgCAAgAALAzIADAAIgDAAQgFAAAAgGQAGgBACACIABAEIgBABIACAAIAAADQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABQgCABgEAAQgCgEAFgDgAgPA6IgEAAQAAgGAFAAIADAAIgDgBQgFgCACgEIAFABIACADIABADIgCAAIACAAIgBAEIgDACgAgZA5IgDgCQAAgEAFAAIADAAIgDgBQgEgDACgEIADABIACABIACADQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgCAAIACAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgDACgAAYA2QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIgBgCIABgBIAEAAQAEgBABAFIgFABIgBAAgAgiA2IgDgBQABgFAFABIADAAIgDgBQgEgDADgEIACABIACABQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgBAAIABABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgDABgAAeAyIgCgDIAAgBIAAAAIgBgDIACgDIAEgCQADADgEADIgEACIACAAIADgBQAFAAAAAFIgDABIgCAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAgAgqAzIgDgCQAAgEAFAAIAEABIgDgCQgDgDACgEIADACIACABIABADQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAIgBAAIABABIgCADIgDABgAATAtQABgEAGAAQACAEgEADIgEABQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBgAAmAuIgCgDIAFgBQAFgBABAEIgDACIgDABQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBAAAAgBgAgzAuIgDgCQACgEAFACIADAAIgDgBQgDgEADgDIADABIABABIABAEIgBADIgBgBIABABIgCADIgDABgAAjAoIABgDIACgCIACgBQADAEgDADIgDACIgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAgAAuAqIgCgCIABgBIADgCQAFgBACAEIgDACIgCABIgBAAIgDgBgAg4AqQgCAAgDgDQABgDAFAAIADACIgCgCQgDgDADgEQAEACAAACIABACIgBAEIgBAAIgBgBIABABIgCADIgBAAIgCAAgAAqAkIABgDIACgBIACgCQAEADgDADIgEAEgAA2AlIgDgCIABgBIADgBQAFgCACADIgFAEgAhAAkQgCAAgCgDQACgEAEADIADABIgCgCQgCgFADgCIAEADIAAAEIgCADIgCACIgCABIgCgBgAAxAgIABgEIABgCIADgCQAEADgDAFIgDACIgBAAIgCgCgAA0AigAA6AeIABgCIADgCQAEgBADADIgDADIgCABIgDAAgAhLAaQADgDAEACIACACIACABIgBABIgCACIgCAAQgDAAgDgFgAA4AaIAAgDIABgCIACgCQAEADgCADIgCADIgBACIgCgEgAA7AcgAhBAbIgCgDQgDgDAEgDQAFAEgBADIgBACIgBABgABAAYIABgCIADgCQAEgDADAEIgCADIgCABIgEAAgAhRATQADgDAEACIADAEIAAABIgDABIgBAAQgDAAgDgFgAA+AVIAAgEIABgCIACgCQAEACgCAEIgCADIgBABIgCgCgABBAWgAhJASQgCgFAEgBQAFAEgCADIgBACIgBABgABGAQIgDgCIAAgEIACgEQAEACgBAFIgBADIACgDQAEgDADADIgCADIgCABIgDABgAhWALQAEgEADAFIADADIgBABIgCABQgEAAgDgGgAhOALQgBgFAEgBQADAEgBAEIgCACIgBAAgABLAJIAAAAIABgBIACgCQADgEAEADQgCAEgCABIgDABgABIAHIgBgDQAAgCACgCQAFABgBAEIgCAEIAAAAIgDgCgAhaADQADgDADAEIADAEIgBAAIgCABQgEAAgCgGgAhTADQgBgDAFgCQADAEgCAEIgCABIgBAAIgCgEgABPACIAAgBIAAAAIgDgBIgBgCIABgGQAFABAAAFIgBACIACgCQACgEAEAEQAAACgCABIgDACgAhbAAIgDgFQAEgDADAFIACACIgBgDQAAgEAEgBQABACAAADIgBADIgCABIgCAAIgCABgABUgEIgBgBIAAgCIACgDQACgEAEADQgBAGgEABgAhYgGIgDgCIgBgDIABgGQABABABAAQAAABABAAQAAABAAAAQABAAAAABIABADIgBADIAAACgABRgFIgCgCQgCgDACgFQAFAAAAAFIgCAFgABWgNIgBAAIACgGQACgEAEACQAAAHgEABgABUgOIgCgBQgDgCACgGQAFAAAAAEIgBAGgABXgWIABgFQADgFADACQABAHgEABgABTgXQgCgDABgFQAEgBABAFIAAAFgABYgfIABgFQABgFAFACQAAAFgDADgABXgfIgDAAQgDgCABgGQAFgBABAEIAAAFgABXgnIgCgBIgDgDIgBgEQAFgCABAEIABAEIABgEQAAgEAFAAQABAEgBACQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABIgCABgABXgvIgCgCIgBgFIACgEQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAIABAFIgBADIgBABg");
    this.shape_185.setTransform(414.3781,144.7);
    this.shape_186 = new cjs.Shape();
    this.shape_186.graphics.f("#FFFFFF").s().p("AgGAUQgFgEgBgGIAFgBQABAFACABQADADAEgBQAEgBACgDQACgDAAgEQgBgEgEgBQgDgBgDABIgBABIgBAAIgBgEIABAAIABAAIAEgCQADgDgBgEQgBgDgDgBQgBgCgDABQgFABgCAEIAAAGIgFABQgBgEABgEQACgHAIgBQAGgCAEACQAEACABAGQABAEgBACIgDADQADABACACQADABABADQABAGgDAFQgDAEgHACIgEABQgEAAgCgCg");
    this.shape_186.setTransform(418.875,138.8179);
    this.shape_187 = new cjs.Shape();
    this.shape_187.graphics.f("#FFFFFF").s().p("AgKANQABgFAEgEIAFgEIAEgEQACgEgBgDQgBgDgDgCQgBgCgEABQgFACgBAEIgBAGIgFACQgBgFABgEQADgHAIgCQAGgCAEADQAEADABAFQACAFgDAEIgGAGIgDADIgDAEQgDADAAADIAWgFIABAFIgbAHQgCgGACgEg");
    this.shape_187.setTransform(415.775,139.6719);
    this.shape_188 = new cjs.Shape();
    this.shape_188.graphics.f("#FFFFFF").s().p("AgHARQgEgFgCgJQgCgGABgFQABgKAJgCQAHgCAFAFQAEAFACAJQACAHgBAGQgBAJgJACIgDABQgFAAgEgFgAgCgQQgFABgBAFQgBAFACAIQABAGADADQADAGAEgBQAEgBACgEQABgFgCgJQgCgHgDgEQgCgDgDAAIgBAAg");
    this.shape_188.setTransform(412.3367,140.3644);
    this.shape_189 = new cjs.Shape();
    this.shape_189.graphics.f("#FFFFFF").s().p("AgKANQABgFAEgEIAFgEIAEgEQACgEgBgDQgBgDgDgCQgBgCgEABQgFACgBAEIgBAGIgFACQgBgFABgEQADgHAIgCQAGgCAEADQAEADABAFQACAFgDAEIgGAGIgDADIgDAEQgDADAAADIAWgFIABAFIgbAHQgCgGACgEg");
    this.shape_189.setTransform(409.275,141.1719);
    this.shape_190 = new cjs.Shape();
    this.shape_190.graphics.f("#FFFFFF").s().p("AgHgHIAFgBQADgBACACQADABABAFQABADgCADQgBACgFABIgDABgAgCgHIgDABIADAOIACgBQAIgCgCgGQgBgEgDgBIgCgBIgCAAg");
    this.shape_190.setTransform(418.7167,144.48);
    this.shape_191 = new cjs.Shape();
    this.shape_191.graphics.f("#FFFFFF").s().p("AgHgHIAEgBIAEAAIACADIABAEIgDABIAHAHIgCAAIgFgHIgEABIACAIIgCAAgAgCgHIgDABIABAGIAEAAIACgBQAAgBAAAAQABAAAAAAQAAgBAAAAQAAgBgBAAIgBgDIgBAAIgCAAg");
    this.shape_191.setTransform(417,144.8875);
    this.shape_192 = new cjs.Shape();
    this.shape_192.graphics.f("#FFFFFF").s().p("AgDgIIAAAAIAKAOIgBABIgEgGIgGABIgBAHIgBAAgAgDgEIgBAFIAFgBIgCgFIgCgBg");
    this.shape_192.setTransform(415.575,145.3);
    this.shape_193 = new cjs.Shape();
    this.shape_193.graphics.f("#FFFFFF").s().p("AgJgEIABgBIAGAKIABABIAAAAIAAABIABABIAAgEIAAgLIAAAAIAHAKIABADIAAgBIABgOIABgBIgBASIgBAAIgGgLIgCgDIAAADIAAANIAAAAg");
    this.shape_193.setTransform(413.35,145.6);
    this.shape_194 = new cjs.Shape();
    this.shape_194.graphics.f("#FFFFFF").s().p("AgDgIIAAgBIAKAPIgBAAIgEgFIgGACIgBAGIgBAAgAgDgEIgBAGIAFgCIgCgEIgCgCg");
    this.shape_194.setTransform(411.975,146.15);
    this.shape_195 = new cjs.Shape();
    this.shape_195.graphics.f("#FFFFFF").s().p("AAAgHIgHABIAAgBIAPgEIAAACIgHABIAEATIgBABg");
    this.shape_195.setTransform(415.65,133.85);
    this.shape_196 = new cjs.Shape();
    this.shape_196.graphics.f("#FFFFFF").s().p("AgDALIgBgBIAFAAIAEgDQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgCIgCgBIgDgBIgFAAIgCgDQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAgBQACgCADAAIAFgBIgBACIgEAAQAAABgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAIgBADIABACIABABIADABIAEAAIACABIABACQABABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgCACgDABIgEABIgBgBg");
    this.shape_196.setTransform(413.9638,134.3583);
    this.shape_197 = new cjs.Shape();
    this.shape_197.graphics.f("#FFFFFF").s().p("AgHgIIAKgDIABABIgJACIABAIIAJgCIAAABIgIACIACAJIAJgDIAAACIgKADg");
    this.shape_197.setTransform(412.075,134.8);
    this.shape_198 = new cjs.Shape();
    this.shape_198.graphics.f("#FFFFFF").s().p("AgIgIIAGgCIAFAAQABAAAAAAQAAABABAAQAAAAABABQAAAAAAABIAAAEIgDACIAEABIACACQABADgCACQgCACgDABIgGACgAAAAAIgEABIACAJIAEgBQAGgCgBgEQgBgDgEAAIgCAAgAgBgJIgFABIACAIIAEgBIAEgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIgCAAIgBAAg");
    this.shape_198.setTransform(410.1917,135.2917);
    this.shape_199 = new cjs.Shape();
    this.shape_199.graphics.f("#FFFFFF").s().p("AgIBrIgJgEIgHgDIgHAAQgIAAgCgBQgDgBgEgFQgDgEgDgBIgHgDQgGgCgCgCIgGgIIgDgGIgGgFQgEgDgDgEQgCgDAAgGIgCgHIgEgGQgEgFgBgEIABgJIABgIIgCgHIgCgIIADgJQACgDABgEIABgHIABgKIAGgHIAFgGIADgHQACgGACgCQACgDAGgCIAGgEIAFgGIAGgHQACgBAIgBIAHgCIAGgEIAIgFIAKABIAHABIAHgCIAJgCQAFAAAEAEIAHADQADABAEgBQAHAAACABQAEABAEAFIAFAFIAHADIAJAEIAFAIIAEAGIAGAFIAHAGIACAKQAAAEACADQAAADAEADQAEAFAAAEIAAAJIgBAHIACAHQACAHAAACIgEAJQgCADgBAEIAAAHIgBAKIgGAHQgEADgBADIgDAGQgBAGgDADIgIAFIgHAEIgEAGQgFAGgCABQgCABgHABIgHACIgGAEQgFAEgEAAQgEACgFgCIgIgBIgHACQgDACgEAAIgBAAgAgXhmQgDAAgFAEIgHAEIgHACQgHABgCABIgGAHIgFAGIgHAEQgGADgBACQgCACgCAGIgDAHIgFAGQgFAEgBADQgBABAAAIIAAAHQgBADgDAEQgDAGAAADQAAADACAFIACAHIgBAIIAAAJQAAADAEAFIAEAGIACAIIACAJQACADAFADIAGAFIAEAHQACAFACACIAJAEIAHADIAGAFQAEAFADABIAJABIAHAAIAHADIAJAEIAIgCIAFgCIACAAIAIABIAJAAIAIgEIAGgEIAIgCQAFAAAEgCQADgCADgFIAFgGIAGgEIAIgFIAEgIQABgFACgCQABgDAEgDIAGgHIABgJQgBgEABgEIADgHQADgFAAgDQABgDgCgGIgCgGIABgIIAAgJIgEgIQgDgDgCgEIgBgHIgCgJIgHgGIgGgFIgEgHIgFgHQgDgDgFgBIgHgDIgGgFQgEgFgDgBIgJgBIgIAAIgHgDQgFgDgDgBIgJACIgHACIgHgBIgHAAIgCAAg");
    this.shape_199.setTransform(414.0542,140.7542);
    this.shape_200 = new cjs.Shape();
    this.shape_200.graphics.f().s("#F8F0F0").ss(0.5).p("ABogXQAAADgBAFQgBAGAAADQAAACADAFQACAFgBADQAAADgDAFQgDAFAAADQgBACAAAGQAAAGgBACQgBADgEAEQgFAEgBACQgBACgCAGQgCAGgCACQgCACgFACQgFADgCACQgCABgDAFQgEAFgCABQgDACgFABQgGAAgCABQgCABgFAEQgFADgDABQgDABgFgBQgHgCgCAAQgKAFgFgBQgDAAgFgDQgGgDgCAAQgCgBgGAAQgGAAgDgBQgDgBgDgEQgEgFgCgBQgMgDgEgDQgCgCgDgFQgCgGgCgCQgKgGgCgFQgCgDgBgFQAAgGgBgCQgBgCgEgFQgDgFgBgDQgBgDABgFQABgGAAgDQgEgKABgFQAAgDACgFQAEgGAAgCQgBgLADgFQABgDAEgEQAFgFABgBQABgCACgGQABgFACgDQAEgEALgFQABgBAEgFQADgFADgBQAEgDAMgBQACgBAFgEQAFgDADgBQAFgBALACQADAAAFgCQAFgBADAAQAFAAAKAGQAGABALABQADABAEAEQAEAEACACQACABAGACQAFABADACQAEAEAEALQACABAFAEQAFADABADQACACAAAGQABAGABACQABACAEAFQADAFABADg");
    this.shape_200.setTransform(414.0772,140.7775);
    this.shape_201 = new cjs.Shape();
    this.shape_201.graphics.lf(["#1A2E40","#253F55","#2D4B66"],[0.18,0.675,0.996],-10.7,2.5,10.7,-2.5).s().p("AgIBuQgEAAgFgDIgIgEIgIAAIgJgBIgGgGIgHgGQgMgDgEgEQgDgCgCgFIgEgIQgKgGgDgFQgCgDgBgFIgCgJIgEgHIgFgIIABgJIABgIIgDgIQgCgFABgDIADgJIAEgHIABgJIABgJQABgDAEgEIAGgGIADgIQACgGACgCQAEgEAKgFIAGgHQAEgFACgBQAFgDAMgBIAHgFQAFgEADAAQAFgCAMADIAIgCIAIgCQAGABALAGIAJAAIAIABQAFADAIAJIAIADQAGACACACQADACACAFIAEAHIAHAGQAFADACADQADAFAAAMIAFAHIAEAIIAAAJIgBAIIACAIQACAFAAADIgDAIIgEAIIAAAJQAAAGgCADQgBAFgKAIQgDAMgEAEIgGAFQgHACgBACIgGAHQgEAFgCABIgIADIgJABQgJAIgGABQgDABgFgBIgJgBQgJAEgGAAIgBAAg");
    this.shape_201.setTransform(414.05,140.7775);
    this.instance_2 = new lib.Group_2();
    this.instance_2.setTransform(414.1,140.8,1,1,0,0,0,12,12);
    this.instance_2.shadow = new cjs.Shadow("rgba(7,7,7,0.4)",0,5,24);
    this.shape_202 = new cjs.Shape();
    this.shape_202.graphics.f().s().p("AgJAUQgHgEgDgLQgCgJAEgIQAEgHAJgDQAEgBAEABQAFACADACIAFAHIACAKIgeAGQACAGAEAEQAEADAFgBQAFgCACgFIACgFIAHgCIgBAGQAAAEgCABQgDAFgEACIgGACIgEAAQgEAAgFgDgAgDgPQgFABgDAEQgCAFABAFIAWgFQgBgFgCgCQgDgDgEAAIgDAAg");
    this.shape_202.setTransform(381.3667,144.8808);
    this.shape_203 = new cjs.Shape();
    this.shape_203.graphics.f().s().p("AACAaQgCgCAAgEIgHgbIgFACIgCgGIAGgCIgDgMIAIgBIACAMIAGgCIABAGIgGACIAGAaQAAABABAAQAAABAAAAQAAAAABAAQAAABAAAAIADAAIABgBIABAAIACAFIgDACIgDAAIgDAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
    this.shape_203.setTransform(377.925,145.0417);
    this.shape_204 = new cjs.Shape();
    this.shape_204.graphics.f().s().p("AgNAWQgFgDgBgFQgBgGADgEQACgEAGgCIAKgDQABgBAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIAAgCQgBgEgDgBIgHAAQgGABgBAEIgBAFIgGACQgCgIAEgEQAFgEAGgCQAIgCAEACQAFACABAGIAGAXIABACIACAAIABAAIACAAIABAFIgDABIgCABQgEABgCgCIgCgEQgBADgEADQgEADgEABIgEABQgDAAgDgCgAADAAIgDABIgEABIgGADQgDADABAEQABADADABQACACAEgBQACgBADgDQAGgEgCgHIgBgEIgDACg");
    this.shape_204.setTransform(374.9295,146.5281);
    this.shape_205 = new cjs.Shape();
    this.shape_205.graphics.f().s().p("AgIAUQgHgFgCgJQgDgLAEgHQAEgHAJgCQAGgCAFACQAGACACAJIgGACQgCgEgDgCQgDgCgEABQgGABgCAIQgBAEACAGQABAGAEAEQAEAEAEgCQAFgBABgDQADgDAAgFIAGgCQABAJgDAFQgEAFgIABIgFABQgEAAgEgDg");
    this.shape_205.setTransform(370.4468,147.4183);
    this.shape_206 = new cjs.Shape();
    this.shape_206.graphics.f().s().p("AgGgLIAGgCIAKApIgHACgAgJgbIAHgCIACAIIgIACg");
    this.shape_206.setTransform(367.25,147.325);
    this.shape_207 = new cjs.Shape();
    this.shape_207.graphics.f().s().p("AgDgEIgGABIgCgGIAHgBIgCgHQgBgEABgDQABgEAHgCIABAAIABAAIACAGIgCABIgBAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAIACAJIAHgCIABAGIgHACIAJAjIgIACg");
    this.shape_207.setTransform(365.05,147.675);
    this.shape_208 = new cjs.Shape();
    this.shape_208.graphics.f().s().p("AgGgLIAGgCIAKApIgHACgAgJgbIAHgCIACAIIgIACg");
    this.shape_208.setTransform(363.2,148.275);
    this.shape_209 = new cjs.Shape();
    this.shape_209.graphics.f().s().p("AACAaQgCgCAAgEIgHgbIgFACIgCgGIAGgCIgDgMIAIgBIACAMIAGgCIABAGIgGACIAGAaQAAABABAAQAAABAAAAQAAAAABAAQAAABAAAAIADAAIABgBIABAAIACAFIgDACIgDAAIgDAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
    this.shape_209.setTransform(361.325,148.8917);
    this.shape_210 = new cjs.Shape();
    this.shape_210.graphics.f().s().p("AgKgSIAHgBIACAIIABgHQADgEAFAAIAAAAIABgBIACAIIgBgBIgBABQgGABgCAEQgBAEAAAFIAGAYIgGABg");
    this.shape_210.setTransform(358.7,150);
    this.shape_211 = new cjs.Shape();
    this.shape_211.graphics.f().s().p("AgJAUQgHgEgDgLQgCgJAEgIQAEgHAJgDQAEgBAEABQAFACADACIAFAHIACAKIgeAGQACAGAEAEQAEADAFgBQAFgCACgFIACgFIAHgCIgBAGQAAAEgCABQgDAFgEACIgGACIgEAAQgEAAgFgDgAgDgPQgFABgDAEQgCAFABAFIAWgFQgBgFgCgCQgDgDgEAAIgDAAg");
    this.shape_211.setTransform(355.3667,150.9808);
    this.shape_212 = new cjs.Shape();
    this.shape_212.graphics.f().s().p("AgKAdQgLgGgEgSQgDgLAFgKQAFgLANgDQAKgCAHAEQAHAFADAHIgIABQgDgFgEgCQgFgDgGACQgIACgEAHQgEAIADALQADALAGAEQAGAGAIgCQAJgCADgIQACgEgBgGIAIgCQABAKgEAHQgFAJgMADIgGABQgGAAgFgDg");
    this.shape_212.setTransform(350.0038,151.325);
    this.shape_213 = new cjs.Shape();
    this.shape_213.graphics.f().s().p("AgJgHIADAAIANAMIgBgCIAAgDIgDgKIACAAIAFASIgDAAIgNgMIABAEIADALIgCAAg");
    this.shape_213.setTransform(380.525,151.325);
    this.shape_214 = new cjs.Shape();
    this.shape_214.graphics.f().s().p("AgEAJQgDgCgBgFQgBgEACgDQABgDAFgBQADgBADACQACADACAEQABAEgCADQgCADgEABIgCAAQAAAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAgAgBgHQgDABgBACQgBADABADQAAAEACABQADACACgBQADAAABgDQABgCAAgDQgBgEgCgCIgEgBIgBAAg");
    this.shape_214.setTransform(378.0129,151.8976);
    this.shape_215 = new cjs.Shape();
    this.shape_215.graphics.f().s().p("AgDgIIADgBIADASIgCABg");
    this.shape_215.setTransform(376.05,152.375);
    this.shape_216 = new cjs.Shape();
    this.shape_216.graphics.f().s().p("AAAgFIgGABIgBgCIAOgEIAAADIgGABIAFAQIgCABg");
    this.shape_216.setTransform(374.2,152.65);
    this.shape_217 = new cjs.Shape();
    this.shape_217.graphics.f().s().p("AgEgJIACAAIAKAQIgCAAIgEgGIgGACIgCAHIgCAAgAgDgFIgBAGIAFgBIgCgFIgCgCIAAACg");
    this.shape_217.setTransform(372.75,153.3);
    this.shape_218 = new cjs.Shape();
    this.shape_218.graphics.f().s().p("AgDgIIADgBIAEASIgDABg");
    this.shape_218.setTransform(370.8,153.625);
    this.shape_219 = new cjs.Shape();
    this.shape_219.graphics.f().s().p("AgDAJQgDgCgBgFIAAgEIADgEQABgCADgBIAEAAIAAACIgEAAQgDABgBACQgBADABADQAAADADACQABACADgBIAFgCIAAACIgFACIgCAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
    this.shape_219.setTransform(369.1667,153.9393);
    this.shape_220 = new cjs.Shape();
    this.shape_220.graphics.f().s().p("AgHgHIAKgDIABACIgIACIACAGIAHgCIAAACIgHABIACAHIAHgCIABACIgKADg");
    this.shape_220.setTransform(367.025,154.475);
    this.shape_221 = new cjs.Shape();
    this.shape_221.graphics.f().s().p("AgIgIIAGgBIAEAAIADAEQAAADgDACIAHAHIgCABIgHgHIgDABIACAIIgCAAgAgCgHIgDABIACAGIADAAIACgCQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIAAAAIgCAAg");
    this.shape_221.setTransform(365,155.0125);
    this.shape_222 = new cjs.Shape();
    this.shape_222.graphics.f().s().p("AgGgIIAFgBQAGgCACAGQAAADgBACQgCABgEABIgBAAIABAIIgBAAgAAAgHIgDABIACAGIABAAIAEgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIgBAAIgBAAg");
    this.shape_222.setTransform(362.6833,155.5089);
    this.shape_223 = new cjs.Shape();
    this.shape_223.graphics.f().s().p("AgGgIIAFgBQAGgCACAGQAAADgBACQgCABgEABIgBAAIABAIIgBAAgAAAgHIgDABIACAGIABAAIAEgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIgBAAIgBAAg");
    this.shape_223.setTransform(360.5333,156.0089);
    this.shape_224 = new cjs.Shape();
    this.shape_224.graphics.f().s().p("AgFgJIADAAIAKAQIgCAAIgEgGIgHACIgBAHIgCAAgAgDgFIgBAGIAFgBIgCgFIgCgDIAAADg");
    this.shape_224.setTransform(358.7,156.55);
    this.shape_225 = new cjs.Shape();
    this.shape_225.graphics.f().s().p("AgGgHIALgDIAAACIgHACIABAGIAHgBIABABIgIACIABAIIgBABg");
    this.shape_225.setTransform(355.2,157.225);
    this.shape_226 = new cjs.Shape();
    this.shape_226.graphics.f().s().p("AgEAJQgDgCgBgFQgBgEACgDQABgDAFgBQADgBADACQACADACAEQABAEgCADQgCADgEABIgCAAQAAAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAgAgBgHQgDABgBACQgBADABADQAAAEACABQADACACgBQADAAABgDQABgCAAgDQgBgEgCgCIgEgBIgBAAg");
    this.shape_226.setTransform(352.9629,157.7476);
    this.shape_227 = new cjs.Shape();
    this.shape_227.graphics.f("#1D334B").s().p("AgDAGQgCgCAAgDQgBgCABgCQACgCACgBQACgBACACQACABABAEQABACgCACIgEADIgBAAIgDgBgAgBgEQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAABIAAADQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAABAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBIAAgDQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAAAgBgBIgCAAIgBAAg");
    this.shape_227.setTransform(387.0612,159.0667);
    this.shape_228 = new cjs.Shape();
    this.shape_228.graphics.f("#1D334B").s().p("AAAgEIgEABIAAgBIAJgCIAAABIgEABIADALIgBAAg");
    this.shape_228.setTransform(385.65,159.325);
    this.shape_229 = new cjs.Shape();
    this.shape_229.graphics.f("#1D334B").s().p("AgFgFIAEgBQACAAACABQACABABADQAAACgBADQgBACgEAAIgCABgAgCgFIgCABIADAJIABAAIAEgCIAAgDQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIgCgBIgCAAg");
    this.shape_229.setTransform(384.0063,159.8417);
    this.shape_230 = new cjs.Shape();
    this.shape_230.graphics.f("#1D334B").s().p("AgEgFIAGgBIAAABIgEABIAAAEIAFgBIABABIgFABIABAEIAFgBIAAACIgGABg");
    this.shape_230.setTransform(382.75,160.075);
    this.shape_231 = new cjs.Shape();
    this.shape_231.graphics.f("#1D334B").s().p("AAAgEIgEABIAAgBIAJgCIAAABIgEABIADALIgCAAg");
    this.shape_231.setTransform(381.45,160.275);
    this.shape_232 = new cjs.Shape();
    this.shape_232.graphics.f("#1D334B").s().p("AgFgEIABgBIAIAJIABAAIgBgCIgBgCIgBgGIABgBIADAMIgBABIgJgIIABACIABAHIgBABg");
    this.shape_232.setTransform(380.35,160.625);
    this.shape_233 = new cjs.Shape();
    this.shape_233.graphics.f("#1D334B").s().p("AgEgFIAGgBIAAABIgEABIABAEIAEgBIABABIgFABIABAEIAFgBIAAACIgGABg");
    this.shape_233.setTransform(379.05,160.925);
    this.shape_234 = new cjs.Shape();
    this.shape_234.graphics.f("#1D334B").s().p("AgCAGIABAAIABAAIADgBIAAgDIAAAAIgBgBIgCAAIgDgBIgBgCIABgCQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIACAAIAAABIgCABIgCAAIgBACIABABIABABIABAAIADAAQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABIgDACIgDAAg");
    this.shape_234.setTransform(377.9583,161.1875);
    this.shape_235 = new cjs.Shape();
    this.shape_235.graphics.f("#1D334B").s().p("AgEgFIAGgBIAAABIgFABIABAEIAFgBIAAABIgEABIABAEIAEgBIABACIgGABg");
    this.shape_235.setTransform(376.85,161.475);
    this.shape_236 = new cjs.Shape();
    this.shape_236.graphics.f("#1D334B").s().p("AgFgFIADgBIADAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAIAFAFIgCABIgEgFIgCAAIABAGIgBAAgAgCAAIACAAIACgBIAAgCIgBgCIgDABIgCAAg");
    this.shape_236.setTransform(375.75,161.7375);
    this.shape_237 = new cjs.Shape();
    this.shape_237.graphics.f("#1D334B").s().p("AgEgFIADgBQAEgBABADQABABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAIAAAAIAAAFIgBABgAgBAAIABAAIACgBIABgCIgCgCIgCAAIgBAAg");
    this.shape_237.setTransform(374.4583,162.0525);
    this.shape_238 = new cjs.Shape();
    this.shape_238.graphics.f("#1D334B").s().p("AABACIgFgGIABAAIAEAFIACgHIACAAIgCAIIABAFIgCAAg");
    this.shape_238.setTransform(372.675,162.375);
    this.shape_239 = new cjs.Shape();
    this.shape_239.graphics.f("#1D334B").s().p("AgEgFIACgBIACALIAFgBIAAABIgGACg");
    this.shape_239.setTransform(371.85,162.675);
    this.shape_240 = new cjs.Shape();
    this.shape_240.graphics.f("#1D334B").s().p("AgFgFIAEgBQACAAACABQACABABADQAAACgBADQgBACgEAAIgCABgAgCgFIgCABIADAJIABAAIAEgCIAAgDQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIgCgBIgCAAg");
    this.shape_240.setTransform(370.5563,162.9917);
    this.shape_241 = new cjs.Shape();
    this.shape_241.graphics.f("#1D334B").s().p("AgBAHIgCgEIgCgHIABAAIACAHIACACQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIACgCIABgDIgCgHIABAAIACAHQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIgCAAIgBAAg");
    this.shape_241.setTransform(369.1313,163.2125);
    this.shape_242 = new cjs.Shape();
    this.shape_242.graphics.f("#1D334B").s().p("AgDAGQgCgCAAgDQgBgCABgCQACgCACgBQACgBACACQACABABAEQABACgCACIgEADIgBAAIgDgBgAgBgEQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAABIAAADQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAABAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBIAAgDQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAAAgBgBIgCAAIgBAAg");
    this.shape_242.setTransform(367.7113,163.5667);
    this.shape_243 = new cjs.Shape();
    this.shape_243.graphics.f("#1D334B").s().p("AgFgFIADgBIADAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAIAFAFIgCABIgEgFIgCAAIABAGIgBAAgAgCAAIACAAIACgBIAAgCIgBgCIgDABIgCAAg");
    this.shape_243.setTransform(366.4,163.9375);
    this.shape_244 = new cjs.Shape();
    this.shape_244.graphics.f("#1D334B").s().p("AgEgFIADgBQAEgBABADQABABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAIAAAAIAAAFIgBABgAgBAAIABAAIACgBIABgCIgCgCIgCAAIgBAAg");
    this.shape_244.setTransform(365.1083,164.2525);
    this.shape_245 = new cjs.Shape();
    this.shape_245.graphics.f("#1D334B").s().p("AgCAGIABAAIABAAIADgBIAAgDIAAAAIgBgBIgCAAIgDgBIgBgCIABgCQAAgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAIACAAIAAABIgCABIgCAAIgBACIABABIABABIABAAIADAAQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABIgDACIgDAAg");
    this.shape_245.setTransform(363.5083,164.5875);
    this.shape_246 = new cjs.Shape();
    this.shape_246.graphics.f("#1D334B").s().p("AgBgFIABgBIACAMIgBABg");
    this.shape_246.setTransform(362.675,164.775);
    this.shape_247 = new cjs.Shape();
    this.shape_247.graphics.f("#1D334B").s().p("AgEgFIAGgBIAAABIgEABIABAEIAEgBIAAABIgEABIABAEIAEgBIABACIgGABg");
    this.shape_247.setTransform(361.3,165.125);
    this.shape_248 = new cjs.Shape();
    this.shape_248.graphics.f("#1D334B").s().p("AAAgEIgEABIAAgBIAJgCIAAABIgEABIADALIgCAAg");
    this.shape_248.setTransform(359.95,165.325);
    this.shape_249 = new cjs.Shape();
    this.shape_249.graphics.f("#1D334B").s().p("AgDgGIACgBIAHAMIgCAAIgCgEIgFACIAAAEIgCABgAgCgCIgBADIAEgBIgCgCIAAgDIgBADg");
    this.shape_249.setTransform(359.225,165.65);
    this.shape_250 = new cjs.Shape();
    this.shape_250.graphics.f("#1D334B").s().p("AgCAGQgCgCAAgDIAAgCIABgDQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAIADAAIAAABIgDABIgCACIAAADQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAIADgCIABABIgEACIgCAAIgCgBg");
    this.shape_250.setTransform(357.9375,165.8708);
    this.shape_251 = new cjs.Shape();
    this.shape_251.graphics.f("#1D334B").s().p("AgBgFIABgBIACAMIgBABg");
    this.shape_251.setTransform(356.975,166.075);
    this.shape_252 = new cjs.Shape();
    this.shape_252.graphics.f("#1D334B").s().p("AgDgFIAGgBIAAABIgFABIACAEIAEAAIAAAAIgEABIAAAGIAAAAg");
    this.shape_252.setTransform(356.175,166.275);
    this.shape_253 = new cjs.Shape();
    this.shape_253.graphics.f("#1D334B").s().p("AgBgFIABgBIACAMIgBABg");
    this.shape_253.setTransform(355.375,166.475);
    this.shape_254 = new cjs.Shape();
    this.shape_254.graphics.f("#1D334B").s().p("AAAgEIgEABIAAgBIAJgCIAAABIgEABIADALIgBAAg");
    this.shape_254.setTransform(354.35,166.625);
    this.shape_255 = new cjs.Shape();
    this.shape_255.graphics.f("#1D334B").s().p("AgFgFIAEgBIACAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAIAFAFIgBABIgFgFIgCAAIACAGIgCAAgAgCAAIACAAIABgBIAAgCIgBgCIgBABIgCAAg");
    this.shape_255.setTransform(353.4,166.9875);
    this.shape_256 = new cjs.Shape();
    this.shape_256.graphics.f("#1D334B").s().p("AgEgFIAGgBIAAABIgFABIACAEIAEgBIAAABIgEABIABAEIAEgBIABACIgGABg");
    this.shape_256.setTransform(352.2,167.225);
    this.shape_257 = new cjs.Shape();
    this.shape_257.graphics.f("#1D334B").s().p("AgCAGQgCgCAAgDIAAgCIABgDQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIADAAIAAABIgDABIgCACIAAADQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAAAAAAAQAAABAAAAQAAAAABAAQABAAAAAAIADgCIABABIgEACIgCAAIgCgBg");
    this.shape_257.setTransform(351.0375,167.4708);
    this.shape_258 = new cjs.Shape();
    this.shape_258.graphics.f("#1D334B").s().p("AgCAGIABAAIABAAIADgBIAAgDIAAAAIgBgBIgCAAIgDgBIgBgCIABgCQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIACAAIAAABIgCABIgCAAIgBACIABABIABABIABAAIADAAQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABIgDACIgDAAg");
    this.shape_258.setTransform(349.3083,167.8875);
    this.shape_259 = new cjs.Shape();
    this.shape_259.graphics.f("#1D334B").s().p("AgBgFIABgBIACAMIgBABg");
    this.shape_259.setTransform(348.525,168.075);
    this.shape_260 = new cjs.Shape();
    this.shape_260.graphics.f("#1D334B").s().p("AgGgEIACgBIABAFIAGgBIgBgFIABgBIAEAMIgCABIgCgGIgFABIABAGIgBABg");
    this.shape_260.setTransform(347.45,168.325);
    this.shape_261 = new cjs.Shape();
    this.shape_261.graphics.f("#1D334B").s().p("AAAgEIgEABIAAgBIAJgCIAAABIgEABIADALIgCAAg");
    this.shape_261.setTransform(346,168.575);
    this.shape_262 = new cjs.Shape();
    this.shape_262.graphics.f("#1D334B").s().p("AgPATQgDgBgBgEQgBgFACgFQABgFADgFIAIgJQAEgEADgBIAFAAIACADQAAADgBADIgGAFIgGAGIgHACIgBAFIABAFIAAADIACACIABABIADAAQADgBADgDQAEgDAEgFIAHgJIAFgLIABAAIgDAGIgEAHIgEAGIgGAHIgFAFIgHADIgDABIgEgCgAgDgPIgEAFIgDAHIgCAEIAFgCIAFgEIAEgFQACgDgBgDIgBgCIgCAAIgDADg");
    this.shape_262.setTransform(397.9333,169.0542);
    this.shape_263 = new cjs.Shape();
    this.shape_263.graphics.f("#1D334B").s().p("AgjAQIADgKIAEgKIADgKIAHgBIgJAVIAAAAIADgGIAFgIQACgEADgDQADgDAEgBQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABIAAAEIgCAEIgBAFIgCACIABABIADgHIAEgIQACgEADgCIAHgEQADgBACABQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAIAAAEIgCAGIgCAGIgDAFIgCAFIAAAEIABACIACAAQADgBACgDQADgCADgEIAGgKIAGgMIABAAIgGANIgGAJIgGAHQgDAEgDAAQgDABgCgCIgDgEIAAgEIACgFIADgGIADgGIACgEIAAgEQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIgBAAIgFACIgFAFIgEAHIgEAIIgEAJIgCAJIgHACIAEgMIAEgKIADgIQABgEAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAgBAAIgFADIgFAGIgFAIIgEAJIgDAIIgCAHIgHABg");
    this.shape_263.setTransform(392.575,170.4667);
    this.shape_264 = new cjs.Shape();
    this.shape_264.graphics.f("#1D334B").s().p("AgXAVQgCgCgBgDQgBgEACgGQABgFADgEQADgGAEgEQAEgEAEgBIAEAAIACABIACACIACACIACgHIAGgBIgEALIgEAKIgDAIIAAAGQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAIAFgDIAFgHIAGgJIAFgNIACABIgFAKIgGAKQgDAFgDADQgEAEgDABQgBAAAAAAQgBAAgBAAQAAAAAAAAQAAAAgBAAIgCgDIAAgEIAAgCIAAgBIgCAFIgEAEIgEAEIgFACIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgFgRQgDABgDADQgDAEgCAEQgDAFAAAFQgCAFABAFQABAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAIAEgFIAEgGIADgGQAAgDAAgEIAAgGIgBgDIgCgBIgCAAg");
    this.shape_264.setTransform(387.305,171.5893);
    this.shape_265 = new cjs.Shape();
    this.shape_265.graphics.f("#1D334B").s().p("AgYAMIADgKIAEgJIADgJIAGgBIgJAUIABAAIADgGIAFgIIAFgHQADgCACgBQADgBADABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAAAFIgCAFIgCAGIgDAFIgCAFIAAAEQAAAAAAABQABAAAAAAQABAAAAAAQABAAABAAQADAAADgDQADgDAEgHIADgEIADgGIACgFIACgEIABAAIgEAJIgFAJIgDAFIgEAFIgEAEIgFACQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgCgBAAgDQgBgDABgEIADgHIAEgJQABgEAAgCQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgCAAIgEACIgFAHIgFAIIgEAIIgEAIIgCAHIgGACg");
    this.shape_265.setTransform(382.625,172.7917);
    this.shape_266 = new cjs.Shape();
    this.shape_266.graphics.f("#1D334B").s().p("AgPADIAHgTIAGgBIgIAUIAAAAIADgEIADgFIAEgGIAEgGIABgCIACgBIACAAIACgBIgDAGIAAAFIACAEIADAAIADgBIACgCIACgDIADgCIAAAAIgCADIgCADIgDACIgDACQgEAAgCgBQgCgCgBgDIAAgFIgBAAIgGAKIgIAMIgCAHIgDAIIgGACg");
    this.shape_266.setTransform(378.775,173.575);
    this.shape_267 = new cjs.Shape();
    this.shape_267.graphics.f("#1D334B").s().p("AgYAWQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgGIACgIIAEgIIAFgMIAHgCIgFAMIgFAKIgDAIQAAABAAAAQgBABAAABQAAAAAAABQAAAAAAAAIACADIACAAIAEgCIAEgEIAEgGIADgFIADgEIAAgEIAGgPIAHgCIgHAPIgEAJIgCAHIAAAEIABACIACAAIAFgCIAEgFIAFgHIADgGIAEgHIACgEIABgBIgCAGIgEAGIgEAHIgEAHIgFAFIgFADQgBAAAAAAQgBAAgBAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIgBgEIABgCIAAgBIgEAGIgDAFIgFAEIgEACIgCABIgDgBg");
    this.shape_267.setTransform(375.0667,174.4583);
    this.shape_268 = new cjs.Shape();
    this.shape_268.graphics.f("#1D334B").s().p("AgTArIgHgDIgGgFIgDgHQgBgEABgDQAAAAABgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABIgBADIgCABIgBAAIgBAAIgBADIAAAEQABACACACQABADADABIAHACIAHgBQAHgCADgEQAEgEACgGQACgFAAgHIgBgLQgDgIAAgIIACgNQACgGAEgEQAEgDAGgCQAFgBAFACQADACABAEQABADgCACQgCACgDABIABgEIgBgEQAAgEgDgBQgCgBgDAAQgEABgCADQgDACgBADQgCADAAAEIAAAIIABAJIABAIQACAKgBAIQgCAHgDAFQgEAFgEADIgKAEIgGABIgDAAg");
    this.shape_268.setTransform(369.9313,173.5133);
    this.shape_269 = new cjs.Shape();
    this.shape_269.graphics.f("#1D334B").s().p("AgPATQgDgBgBgEQgBgFACgFQABgFADgFIAIgJQAEgEADgBIAFAAIACADQAAADgBADIgGAFIgGAGIgHACIgBAFIABAFIAAADIACACIABABIADAAQADgBADgDQAEgDAEgFIAHgJIAFgLIABAAIgDAGIgEAHIgEAGIgGAHIgFAFIgHADIgDABIgEgCgAgDgPIgEAFIgDAHIgCAEIAFgCIAFgEIAEgFQACgDgBgDIgBgCIgCAAIgDADg");
    this.shape_269.setTransform(363.2333,177.1542);
    this.shape_270 = new cjs.Shape();
    this.shape_270.graphics.f("#1D334B").s().p("AgjAQIADgKIAEgKIADgKIAHgBIgJAVIAAAAIADgGIAFgIQACgEADgDQADgDAEgBQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABIAAAEIgCAEIgBAFIgCACIABABIADgHIAEgIQACgEADgCIAHgEQADgBACABQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAIAAAEIgCAGIgCAGIgDAFIgCAFIAAAEIABACIACAAQADgBACgDQADgCADgEIAGgKIAGgMIABAAIgGANIgGAJIgGAHQgDAEgDAAQgDABgCgCIgDgEIAAgEIACgFIADgGIADgGIACgEIAAgEQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIgBAAIgFACIgFAFIgEAHIgEAIIgEAJIgCAJIgHACIAEgMIAEgKIADgIQABgEAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAgBAAIgFADIgFAGIgFAIIgEAJIgDAIIgCAHIgHABg");
    this.shape_270.setTransform(357.875,178.5667);
    this.shape_271 = new cjs.Shape();
    this.shape_271.graphics.f("#1D334B").s().p("AgXAVQgCgCgBgDQgBgEACgGQABgFADgEQADgGAEgEQAEgEAEgBIAEAAIACABIACACIACACIACgHIAGgBIgEALIgEAKIgDAIIAAAGQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAIAFgDIAFgHIAGgJIAFgNIACABIgFAKIgGAKQgDAFgDADQgEAEgDABQgBAAAAAAQgBAAgBAAQAAAAAAAAQAAAAgBAAIgCgDIAAgEIAAgCIAAgBIgCAFIgEAEIgEAEIgFACIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgFgRQgDABgDADQgDAEgCAEQgDAFAAAFQgCAFABAFQABAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAIAEgFIAEgGIADgGQAAgDAAgEIAAgGIgBgDIgCgBIgCAAg");
    this.shape_271.setTransform(352.605,179.7393);
    this.shape_272 = new cjs.Shape();
    this.shape_272.graphics.f("#1D334B").s().p("AgsAwIgCAAIgDgBIgBgDQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIADgCIACAAIACACIAAACIgBABIABABIADAAQAFgBAEgEQAEgFACgGQAEgGACgHIAFgPIAEgPIACgOIAAgCIABgDIABgDIACgBIAAACIAAADIAAADIABAGIADAIIACAIIADAIIADAKIABAGIAAAHIABAAIABgKIADgLIADgKIADgKIAFgLIAFgJIAGgHIAGgEQAEAAACABQADACAAACIAAAEIgBADIgCADIgDACIAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgEgBQgEABgCADIgGAHIgFAJIgDAIIgHAYIgGAbIgBAAIgBgMIgDgKIgDgJIgDgJIgDgJIgBgEIgBgEIgCALIgEANQgBAHgDAIQgCAHgEAGQgDAHgEAEQgFAFgFABg");
    this.shape_272.setTransform(347.1292,178.9438);
    this.shape_273 = new cjs.Shape();
    this.shape_273.graphics.f().ls(["#F6C961","#B07B29","#F6C961","#D0A449","#AD8334","#946C26","#845D1E","#7F581B","#8C6422","#AE8535","#E5B957","#F6C961"],[0,0.235,0.459,0.529,0.608,0.678,0.745,0.796,0.827,0.89,0.976,1],-26.1,6.1,26.2,-6.1).p("AkFA9IILh5");
    this.shape_273.setTransform(372.1,178.7);
    this.shape_274 = new cjs.Shape();
    this.shape_274.graphics.f("#1D334B").s().p("AgDAOIAAgEIADAAIABAAQABAAAAAAQABgBAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIgBgBQAAABgBABQAAAAAAAAQgBABgBAAQAAAAgBAAQgDABgCgCQgCgCgBgEQgBgFABgDQACgDAFgBIADAAIAEAAIAEARQABAEgCACQgCADgEABIgDAAIgDAAgAgBgJIgCADQgBAAAAABQAAAAAAABQAAAAAAABQAAABABAAIACADIABABIADgBIAAgBIgCgJIgBAAIgBAAg");
    this.shape_274.setTransform(404.3467,182.9625);
    this.shape_275 = new cjs.Shape();
    this.shape_275.graphics.f("#1D334B").s().p("AgJgHIAEgBIABADIACgDIACgCIADAAIACABIACACIABADIACALIgEABIgDgJIgBgEIgCAAIgCABIgBADIADALIgFABg");
    this.shape_275.setTransform(402.225,183.125);
    this.shape_276 = new cjs.Shape();
    this.shape_276.graphics.f("#1D334B").s().p("AgDgEIAEgBIAFASIgFABgAgDgHIgBgCIAAgCQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIABACIgBACIgBABIgCAAg");
    this.shape_276.setTransform(400.5875,183.0417);
    this.shape_277 = new cjs.Shape();
    this.shape_277.graphics.f("#1D334B").s().p("AAAAKIgDgBIgCgEIgBgDQgCgEACgDQACgDAEAAIACgBIADAAIAAAEIgDAAIgCAAIgBACQgBABAAAAQAAABAAAAQAAABAAAAQAAAAABABIABACIAAABIABABIACAAIACgBIACgBIABAEIgCACIgDABIgCAAIgBAAg");
    this.shape_277.setTransform(399.4429,183.7);
    this.shape_278 = new cjs.Shape();
    this.shape_278.graphics.f("#1D334B").s().p("AgBAKIgDAAIABgEIACAAIACAAIABAAIABgCIgBgBIgCgBIgBAAIgCgBIgCgBIgBgCQAAgBgBAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABgCADgBIADAAIADAAIAAAEIgCAAIgCAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABAAAAIABABIABABIACAAIACAAIACABIABACQABADgBACQgCACgDABIgDAAg");
    this.shape_278.setTransform(397.775,184.0875);
    this.shape_279 = new cjs.Shape();
    this.shape_279.graphics.f("#1D334B").s().p("AgDgEIAEgBIAFASIgFABgAgDgHIgBgCIAAgCQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIABACIgBACIgBABIgCAAg");
    this.shape_279.setTransform(396.3375,184.0417);
    this.shape_280 = new cjs.Shape();
    this.shape_280.graphics.f("#1D334B").s().p("AgJgKIAEgBIABACIAAAAIACgDIACgBQAEgBACACQACACABAFQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIAAADIgCADIgEABIgCAAIgBAAIABAIIgEABgAAAgJIgCACIAAACIACAHIAAAAIABAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAIgBgEIgBgEIgDgBIAAAAg");
    this.shape_280.setTransform(394.875,185.1938);
    this.shape_281 = new cjs.Shape();
    this.shape_281.graphics.f("#1D334B").s().p("AgDgEIAEgBIAFASIgFABgAgDgHIgBgCIAAgCQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIABACIgBACIgBABIgCAAg");
    this.shape_281.setTransform(393.2875,184.7417);
    this.shape_282 = new cjs.Shape();
    this.shape_282.graphics.f("#1D334B").s().p("AgFANQgCgCgBgFQgBgEABgDQACgDAEgBIACAAIAAAAIAAgHIAEgBIAEASIABADIABADIgDABIgCgCIgBACIgEACIgBAAIgEgBgAgDABQgBAAAAAAQAAABAAAAQAAABAAABQAAAAABABIACAEQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAAAIADgBIAAgCIgCgHIgBgBIgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAABg");
    this.shape_282.setTransform(391.93,185.0917);
    this.shape_283 = new cjs.Shape();
    this.shape_283.graphics.f("#1D334B").s().p("AgDAKIgCAAIgBgCIgBgCIAAgDIACgDIADAAIADgBQAAgBAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgDABIgDACIgBgEIACgCIAFgBIACAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAABIACABIABADIABADIAAACIACADIABADIgFABIgBgCIgCACIgCACIgBAAIgCAAgAgBADIgBABIABACIABAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAgBIAAgBIAAgCIgCAAIgBAAIAAACg");
    this.shape_283.setTransform(390,185.9375);
    this.shape_284 = new cjs.Shape();
    this.shape_284.graphics.f("#1D334B").s().p("AAAALQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBIgCgJIgCABIgCgEIADgBIAAgDIAEgDIABAFIAEgBIABAEIgFABIACAGIABADIACABIAAgBIACgBIABAEIgCABIgCABIgCAAIgCgBg");
    this.shape_284.setTransform(387.35,186.27);
    this.shape_285 = new cjs.Shape();
    this.shape_285.graphics.f("#1D334B").s().p("AgDAJQgDgCgBgFQgCgEACgDQACgDAEgBIACAAIADABIACACIACADIAAACIAAABIgKACQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABIADAAIACgBIACgBIACACIgCADIgEABIgDAAQAAAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAAAgAgDgDIAAADIAGgBIgBgDIgCgBIgDACg");
    this.shape_285.setTransform(385.7929,186.8833);
    this.shape_286 = new cjs.Shape();
    this.shape_286.graphics.f("#1D334B").s().p("AgOgGIAEgBIABADIACgDIADgBIADAAIACABQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIADgBIADgBIACABIABACIACAEIACAKIgFABIgCgKIgBgDIgDgBIgCACIAAACIADAMIgFABIgCgKIgBgDIgCgBIgCABIgBADIADALIgFABg");
    this.shape_286.setTransform(383.325,187.5);
    this.shape_287 = new cjs.Shape();
    this.shape_287.graphics.f("#1D334B").s().p("AgCAKIgCAAIgBgCIgCgCIAAgDIACgDIADAAIADgBQAAgBAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgDABIgDACIgCgEIAEgCIAEgBIACAAIADABIABABIABADIABADIAAACIABADIABADIgDABIgCgCIgBACIgDACIgBAAIgBAAgAgCADIAAABIABACIABAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABgBAAAAIABgBIgBgCIgCAAIgBAAIgBACg");
    this.shape_287.setTransform(380.95,188.0875);
    this.shape_288 = new cjs.Shape();
    this.shape_288.graphics.f("#1D334B").s().p("AAAALQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIgDgJIgDABIAAgEIACgBIgBgDIAFgDIABAFIADgBIABAEIgEABIACAGIABADIABABIABgBIACgBIACAEIgCABIgEABIgBAAIgCgBg");
    this.shape_288.setTransform(378.3,188.37);
    this.shape_289 = new cjs.Shape();
    this.shape_289.graphics.f("#1D334B").s().p("AgDgEIAEgBIAFASIgFABgAgDgHIgBgCIAAgCQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIABACIgBACIgBABIgCAAg");
    this.shape_289.setTransform(377.0875,188.5417);
    this.shape_290 = new cjs.Shape();
    this.shape_290.graphics.f("#1D334B").s().p("AgBAKIgDAAIABgEIACAAIACAAIABAAIABgCIgBgBIgCgBIgBAAIgCgBIgCgBIgBgCQgBgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAIADAAIADAAIAAAEIgCAAIgCAAQAAAAgBAAQAAABgBAAQAAAAAAAAQAAABAAAAIABABIABABIACAAIACAAIACABIABACQABADgBACQgCACgDABIgDAAg");
    this.shape_290.setTransform(375.875,189.2375);
    this.shape_291 = new cjs.Shape();
    this.shape_291.graphics.f("#1D334B").s().p("AgFgHIAEgBIABACIABgCIACgBIACAAIABAEIgDAAIgBABIgBADIADALIgEABg");
    this.shape_291.setTransform(373.325,189.75);
    this.shape_292 = new cjs.Shape();
    this.shape_292.graphics.f("#1D334B").s().p("AgEAJIgCgDIgCgEQgBgEACgDQACgDAEgBIADAAIADABIACAEIACADQABAEgCADQgCADgEABIgDAAIgDgBgAAAgFQgBAAAAAAQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABIABACIABACIABABIABAAIADgCIAAgEIgCgEIgCgBIAAAAg");
    this.shape_292.setTransform(371.7629,190.1875);
    this.shape_293 = new cjs.Shape();
    this.shape_293.graphics.f("#1D334B").s().p("AAAANQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIgFgVIAEgBIAEATIABABIABABIABgBIABAAIABADIgCABIgCABIgBAAIgCAAg");
    this.shape_293.setTransform(370.275,190.1833);
    this.shape_294 = new cjs.Shape();
    this.shape_294.graphics.f("#1D334B").s().p("AgEAJIgCgDIgCgEQgBgEACgDQACgDAEgBIADAAIADABIACAEIACADQABAEgCADQgCADgEABIgDAAIgDgBgAAAgFQgBAAAAAAQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABIABACIABACIABABIABAAIADgCIAAgEIgCgEIgCgBIAAAAg");
    this.shape_294.setTransform(368.6629,190.8875);
    this.shape_295 = new cjs.Shape();
    this.shape_295.graphics.f("#1D334B").s().p("AgFANQgCgCgBgFQgBgEABgDQACgDAEgBIACAAIAAAAIAAgHIAEgBIAEASIABADIABADIgDABIgCgCIgBACIgEACIgBAAIgEgBgAgDABQgBAAAAAAQAAABAAAAQAAABAAABQAAAAABABIACAEQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAAAIADgBIAAgCIgCgHIgBgBIgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAABg");
    this.shape_295.setTransform(366.73,190.9917);
    this.shape_296 = new cjs.Shape();
    this.shape_296.graphics.f("#1D334B").s().p("AgOgGIAEgBIABADIACgDIADgBIADAAIACABQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIADgBIADgBIACABIABACIACAEIACAKIgFABIgCgJIgBgEIgDgBIgCACIAAADIADALIgFAAIgCgJIgBgDIgCgBIgCACIgBACIADALIgFABg");
    this.shape_296.setTransform(363.175,192.2);
    this.shape_297 = new cjs.Shape();
    this.shape_297.graphics.f("#1D334B").s().p("AgDAKIgCgCIgCgEIgDgKIAFgBIADAJQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABIABAAIADgBIABgDIgEgLIAGgBIACAMIABADIABACIgDABIgBgCIgCADIgEABIgCABIgBgBg");
    this.shape_297.setTransform(360.7,192.775);
    this.shape_298 = new cjs.Shape();
    this.shape_298.graphics.f("#1D334B").s().p("AgBAKIgDAAIABgEIACAAIACAAIABAAIABgCIgBgBIgCgBIgBAAIgCgBIgCgBIgBgCQgBgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAIADAAIADAAIAAAEIgCAAIgCAAQAAAAgBAAQAAABgBAAQAAAAAAAAQAAABAAAAIABABIABABIACAAIACAAIACABIABACQABADgBACQgCACgDABIgDAAg");
    this.shape_298.setTransform(358.875,193.1875);
    this.shape_299 = new cjs.Shape();
    this.shape_299.graphics.f("#1D334B").s().p("AgJgKIAEgBIABACIAAAAIACgDIACgBQAEgBACACQACACABAFQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIAAADIgCADIgEABIgCAAIgBAAIABAIIgEABgAAAgJIgCACIAAACIACAHIAAAAIABAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAIgBgEIgBgEIgDgBIAAAAg");
    this.shape_299.setTransform(356.975,194.0438);
    this.shape_300 = new cjs.Shape();
    this.shape_300.graphics.f("#1D334B").s().p("AgDgEIAEgBIAFASIgFABgAgDgHIgBgCIAAgCQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQABABAAAAQAAAAAAAAIABACIgBACIgBABIgCAAg");
    this.shape_300.setTransform(355.4375,193.5917);
    this.shape_301 = new cjs.Shape();
    this.shape_301.graphics.f("#1D334B").s().p("AgOgGIAEgBIABADIACgDIADgBIADAAIACABQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIADgBIADgBIACABIABACIACAEIACAKIgFABIgCgKIgBgDIgDgBIgCACIAAACIADAMIgFABIgCgKIgBgDIgCgBIgCABIgBADIADALIgFABg");
    this.shape_301.setTransform(352.525,194.7);
    this.shape_302 = new cjs.Shape();
    this.shape_302.graphics.f("#1D334B").s().p("AgDAJQgDgCgBgFQgCgEACgDQACgDAEgBIACAAIADABIACACIACADIAAACIAAABIgKACQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABIADAAIACgBIACgBIACACIgCADIgEABIgDAAQAAAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAgAgDgDIAAADIAGgBIgBgDIgCgBIgDACg");
    this.shape_302.setTransform(350.0929,195.2333);
    this.shape_303 = new cjs.Shape();
    this.shape_303.graphics.f("#1D334B").s().p("AgFgHIAEgBIABACIABgCIACgBIACAAIABAEIgDAAIgBABIgBADIADALIgEAAg");
    this.shape_303.setTransform(348.325,195.6);
    this.shape_304 = new cjs.Shape();
    this.shape_304.graphics.f("#1D334B").s().p("AgEAJIgCgDIgCgEQgBgEACgDQACgDAEgBIADAAIADABIACAEIACADQABAEgCADQgCADgEABIgDAAIgDgBgAAAgFQgBAAAAAAQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABIABACIABACIABABIABAAIADgCIAAgEIgCgEIgCgBIAAAAg");
    this.shape_304.setTransform(346.7629,195.9875);
    this.shape_305 = new cjs.Shape();
    this.shape_305.graphics.f("#1D334B").s().p("AgKgMIAFgBIAFAVIAKgDIABAFIgPAEg");
    this.shape_305.setTransform(344.825,196.2);
    this.shape_306 = new cjs.Shape();
    this.shape_306.graphics.f("#8B8B87").s().p("AABAGIgBgIIAAAAIACAIgAAAgDIgBAAIAAgBIAAgBIAAAAIABAAIAAABIAAABg");
    this.shape_306.setTransform(411.125,190.6);
    this.shape_307 = new cjs.Shape();
    this.shape_307.graphics.f("#8B8B87").s().p("AAAAEQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDIACgBIABgBIABABIAAABIgBAAIgBAAQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIABACIACABIABgBIABABIgCABIgCAAIAAgBg");
    this.shape_307.setTransform(410.4875,190.8833);
    this.shape_308 = new cjs.Shape();
    this.shape_308.graphics.f("#8B8B87").s().p("AAAAFIgCgIIABAAIABACIAAgCIACgBIABAAIAAACIgBgBIgCACIAAABIABAFg");
    this.shape_308.setTransform(409.6,191.05);
    this.shape_309 = new cjs.Shape();
    this.shape_309.graphics.f("#8B8B87").s().p("AgBAEQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIAAgDIADgBQAAgBAAAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAABABIAAAAIgFABIABACIABAAIADgBIAAABIgBABIgCABIgBAAIgBgBgAAAgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABIADAAIgBgCIgBgBIAAABg");
    this.shape_309.setTransform(408.7875,191.3);
    this.shape_310 = new cjs.Shape();
    this.shape_310.graphics.f("#8B8B87").s().p("AAAAAIgEgCIACgBIACADIABgEIABAAIgCAEIAFAEIgBAAIgEgDIgBAEIgBABg");
    this.shape_310.setTransform(407.85,191.5);
    this.shape_311 = new cjs.Shape();
    this.shape_311.graphics.f("#8B8B87").s().p("AgBAEQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIAAgDIADgBQAAgBAAAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABIAAAAIgFABIABACIABAAIADgBIAAABIgBABIgCABIgBAAIgBgBgAAAgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABIADAAIgBgCIgBgBIAAABg");
    this.shape_311.setTransform(406.8875,191.75);
    this.shape_312 = new cjs.Shape();
    this.shape_312.graphics.f("#8B8B87").s().p("AgBAGQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgDIACgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAABIAAgBIAAgBIgBgDIABgBIADAMIgBAAIAAgBIgDACIAAAAIgBgBgAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIAAADIABACIACABIABgBIAAgDIAAAAIgBgCIgBAAIAAAAg");
    this.shape_312.setTransform(405.3625,191.8833);
    this.shape_313 = new cjs.Shape();
    this.shape_313.graphics.f("#8B8B87").s().p("AgBAFIgBgDIgBgFIABAAIABAFIABACIAAAAIACgBIAAgDIgBgEIABAAIADAIIgBAAIgBgBIgBABIgCABIAAAAIgBAAg");
    this.shape_313.setTransform(404.25,192.3125);
    this.shape_314 = new cjs.Shape();
    this.shape_314.graphics.f("#8B8B87").s().p("AAAAFIgBgIIAAAAIABACIAAgCIABgBIABAAIAAABIgBAAIgBABIAAACIABAFg");
    this.shape_314.setTransform(403.35,192.5);
    this.shape_315 = new cjs.Shape();
    this.shape_315.graphics.f("#8B8B87").s().p("AAAADIgCgEIgBAAIAAAAIABgBIAAgCIABAAIABACIACgBIAAABIgCABIAAAEIAAABIADAAIAAAAIAAAAIABABIgBAAIgBAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
    this.shape_315.setTransform(402.65,192.6292);
    this.shape_316 = new cjs.Shape();
    this.shape_316.graphics.f("#8B8B87").s().p("AgBAEQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIAAgDIADgCQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAABAAIAAABIgFABIABACIABABIADgCIAAABIgBABIgCAAIgBABIgBgBgAAAgDQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABIADgBIgBgBIgBgBIAAAAg");
    this.shape_316.setTransform(401.3375,193.05);
    this.shape_317 = new cjs.Shape();
    this.shape_317.graphics.f("#8B8B87").s().p("AAAAFIgCgIIABAAIABACIAAgCIACgBIABAAIAAACIgBgBIgCACIAAABIABAFg");
    this.shape_317.setTransform(400.4,193.2);
    this.shape_318 = new cjs.Shape();
    this.shape_318.graphics.f("#8B8B87").s().p("AAAAFIgCgCIgBgCIAAgDIADgBIACAAIACADIAAADIgDACIgBAAgAAAgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAACIABACIABABIABgCIAAgCIgBgCIgBgBIAAABg");
    this.shape_318.setTransform(399.55,193.4375);
    this.shape_319 = new cjs.Shape();
    this.shape_319.graphics.f("#8B8B87").s().p("AABAGIgCgLIABAAIACALg");
    this.shape_319.setTransform(398.725,193.425);
    this.shape_320 = new cjs.Shape();
    this.shape_320.graphics.f("#8B8B87").s().p("AAAAFIgCgCIgBgCIAAgDIADgBIACAAIACADIAAADIgDACIgBAAgAAAgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBABAAAAIAAACIACACIABABIACgCIAAgCIgBgCIgCgBIAAABg");
    this.shape_320.setTransform(398,193.7875);
    this.shape_321 = new cjs.Shape();
    this.shape_321.graphics.f("#8B8B87").s().p("AgBAGQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgDIACgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABIAAgBIAAgBIgBgDIABgBIADAMIgBAAIAAgBIgDACIAAAAIgBgBgAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIAAADIABACIACABIABgBIAAgDIAAAAIgBgCIgBgBIAAABg");
    this.shape_321.setTransform(396.9125,193.8333);
    this.shape_322 = new cjs.Shape();
    this.shape_322.graphics.f("#8B8B87").s().p("AAAADIgCgEIgBAAIAAAAIABgBIAAgCIABAAIABACIACgBIAAABIgCABIABAEIAAABIACAAIAAAAIAAAAIABABIgBAAIgBAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
    this.shape_322.setTransform(395.55,194.2792);
    this.shape_323 = new cjs.Shape();
    this.shape_323.graphics.f("#8B8B87").s().p("AABAGIgBgIIAAAAIACAIgAAAgEIgBAAIAAgBIAAAAIAAAAIABAAIAAAAIAAABg");
    this.shape_323.setTransform(394.925,194.35);
    this.shape_324 = new cjs.Shape();
    this.shape_324.graphics.f("#8B8B87").s().p("AAAAFIgBgIIAAAAIABACIAAgCIABgBIABAAIAAABIgBAAIgBABIAAACIABAFg");
    this.shape_324.setTransform(394.35,194.6);
    this.shape_325 = new cjs.Shape();
    this.shape_325.graphics.f("#8B8B87").s().p("AAAADIgCgEIgBAAIAAAAIABgBIAAgCIABAAIABACIACgBIAAABIgCABIAAAEIAAABIADAAIAAAAIAAAAIABABIgBAAIgBAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
    this.shape_325.setTransform(393.65,194.7292);
    this.shape_326 = new cjs.Shape();
    this.shape_326.graphics.f("#8B8B87").s().p("AABAGIgBgIIAAAAIACAIgAAAgEIgBAAIAAgBIAAAAIAAAAIABAAIAAAAIAAABg");
    this.shape_326.setTransform(393.025,194.8);
    this.shape_327 = new cjs.Shape();
    this.shape_327.graphics.f("#8B8B87").s().p("AAAAHIgDgMIABAAIAAACIAAAAIABgCIABgBIADAAIABAEIAAACQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgCAAIAAAAIgBAAIABABIAAAEgAAAgFQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAABIAAADIABAAQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIABgBIAAgCIgBgCIgCgBIAAAAg");
    this.shape_327.setTransform(392.2875,195.35);
    this.shape_328 = new cjs.Shape();
    this.shape_328.graphics.f("#8B8B87").s().p("AABAGIgBgIIAAAAIACAIgAAAgEIgBAAIAAgBIAAAAIAAAAIABAAIAAAAIAAABg");
    this.shape_328.setTransform(391.475,195.15);
    this.shape_329 = new cjs.Shape();
    this.shape_329.graphics.f("#8B8B87").s().p("AAAAEQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDIACgBIABgBIABABIAAABIgBAAIgBAAQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIABACIACABIABgBIABABIgCABIgCAAIAAgBg");
    this.shape_329.setTransform(390.8875,195.4333);
    this.shape_330 = new cjs.Shape();
    this.shape_330.graphics.f("#8B8B87").s().p("AgBAEIABAAIABgBIABAAIABgCIgBAAIgCgBIgBAAIgBAAIAAAAIAAgDIACgBIACAAIAAABIgCAAIgBABIAAABIAAABIABAAIABAAIACAAIABABIgBACIgCABIgCABg");
    this.shape_330.setTransform(389.9375,195.6625);
    this.shape_331 = new cjs.Shape();
    this.shape_331.graphics.f("#8B8B87").s().p("AgBAFIgBgDIgCgFIABAAIACAFIABACIABAAIACgBIAAgDIgBgEIABAAIABAIIgBAAIAAgBIgBABIgBABIgBAAIgBAAg");
    this.shape_331.setTransform(389,195.8625);
    this.shape_332 = new cjs.Shape();
    this.shape_332.graphics.f("#8B8B87").s().p("AgBAEIABAAIABgBIABAAIABgCIgBAAIgCgBIgBAAIgBAAIAAAAIAAgDIACgBIACAAIAAABIgCAAIgBABIAAABIAAABIABAAIABAAIACAAIABABIgBACIgCABIgCABg");
    this.shape_332.setTransform(387.9875,196.1125);
    this.shape_333 = new cjs.Shape();
    this.shape_333.graphics.f("#8B8B87").s().p("AAAAFIgBgIIAAAAIABACIAAgCIABgBIABAAIAAABIgBAAIgBABIAAACIABAFg");
    this.shape_333.setTransform(386.7,196.4);
    this.shape_334 = new cjs.Shape();
    this.shape_334.graphics.f("#8B8B87").s().p("AgBAEQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIAAgDIADgCQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAABAAIAAABIgFABIABACIABABIADgCIAAABIgBABIgCAAIgBABIgBgBgAAAgDQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABIADgBIgBgBIgBgBIAAAAg");
    this.shape_334.setTransform(385.8375,196.65);
    this.shape_335 = new cjs.Shape();
    this.shape_335.graphics.f("#8B8B87").s().p("AAAAHIgDgMIABAAIAAABIAAAAIABgBIABgBIADABIABADIAAADQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgCABIAAgBIgBAAIABACIAAADgAAAgEQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIAAADIABACQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIABgBIAAgCIgBgCIgCgBIAAABg");
    this.shape_335.setTransform(384.7875,197.1);
    this.shape_336 = new cjs.Shape();
    this.shape_336.graphics.f("#8B8B87").s().p("AAAAFIgCgIIABAAIABACIAAgCIACgBIABAAIAAACIgBgBIgCACIAAABIABAFg");
    this.shape_336.setTransform(383.85,197.05);
    this.shape_337 = new cjs.Shape();
    this.shape_337.graphics.f("#8B8B87").s().p("AAAAFIgCgCIgBgCIAAgDIADgBIACAAIACADIAAADIgDACIgBAAgAAAgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAACIABACIABABIABgCIAAgCIgBgCIgBgBIAAABg");
    this.shape_337.setTransform(383,197.2875);
    this.shape_338 = new cjs.Shape();
    this.shape_338.graphics.f("#8B8B87").s().p("AAAAEQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDIACgBIABgBIABABIAAABIgBAAIgBAAQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIABACIACABIABgBIABABIgCABIgCAAIAAgBg");
    this.shape_338.setTransform(382.0375,197.4833);
    this.shape_339 = new cjs.Shape();
    this.shape_339.graphics.f("#8B8B87").s().p("AgEAGIgCgIIABAAIAAABIAAAAIABgBIACgBIACABIABgBIABgBQABgBAAAAQAAAAABAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIABAFIgBAAIgCgFIAAgBIgCAAIgBABIAAACIABAEIgCABIAAgFIgBgCIgCAAIgBABIAAACIABAFg");
    this.shape_339.setTransform(380.775,197.8417);
    this.shape_340 = new cjs.Shape();
    this.shape_340.graphics.f("#8B8B87").s().p("AgCAFQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAgCADgBIACgBIgBAAIAAgBIgBAAIgDABIAAgBIABgBIACAAIABAAIABACIACAFIgBAAIgBgCIgBADIgBAAIAAAAIgCAAgAAAAAIgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAIABACIABAAIACgCIAAgCIAAAAg");
    this.shape_340.setTransform(379.55,198.15);
    this.shape_341 = new cjs.Shape();
    this.shape_341.graphics.f("#8B8B87").s().p("AABAGIgCgLIABAAIACALg");
    this.shape_341.setTransform(378.725,198.125);
    this.shape_342 = new cjs.Shape();
    this.shape_342.graphics.f("#8B8B87").s().p("AABAGIgCgLIABAAIACALg");
    this.shape_342.setTransform(378.225,198.225);
    this.shape_343 = new cjs.Shape();
    this.shape_343.graphics.f("#8B8B87").s().p("AgBAFIgBgDIgCgFIACAAIABAFIABACIAAAAIACgBIAAgDIgBgEIABAAIACAIIgBAAIAAgBIgBABIgCABIAAAAIgBAAg");
    this.shape_343.setTransform(377.5,198.5625);
    this.shape_344 = new cjs.Shape();
    this.shape_344.graphics.f("#8B8B87").s().p("AgCAFIgCgIIABAAIAAACIABAAIABgCIABgBIACABQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIACAEIgCABIgBgEIgBgCIgBgBIgBACIAAABIABAFg");
    this.shape_344.setTransform(375.975,198.95);
    this.shape_345 = new cjs.Shape();
    this.shape_345.graphics.f("#8B8B87").s().p("AAAAFIgCgCIgBgCIAAgDIADgBIACAAIACADIAAADIgDACIgBAAgAAAgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBABAAAAIAAACIABACIACABIACgCIAAgCIgBgCIgCgBIAAABg");
    this.shape_345.setTransform(374.85,199.1875);
    this.shape_346 = new cjs.Shape();
    this.shape_346.graphics.f("#8B8B87").s().p("AABAGIgBgIIAAAAIACAIgAAAgDIgBAAIAAgBIAAgBIAAAAIABAAIAAABIAAABg");
    this.shape_346.setTransform(374.075,199.25);
    this.shape_347 = new cjs.Shape();
    this.shape_347.graphics.f("#8B8B87").s().p("AAAADIgCgEIgBAAIAAAAIABgBIAAgCIABAAIABACIACgBIAAABIgCABIABAEIAAABIACAAIAAAAIAAAAIABABIgBAAIgBAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
    this.shape_347.setTransform(373.5,199.4292);
    this.shape_348 = new cjs.Shape();
    this.shape_348.graphics.f("#8B8B87").s().p("AgCAFQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAgCADgBIACgBIgBAAIAAgCIgCAAIgCACIAAgBIABgBIACAAIABAAIACABIABAGIgBAAIgBgBIgBACIgBAAIgBAAIgBAAgAAAAAIgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIABABIABAAIACgBIAAgDIAAAAg");
    this.shape_348.setTransform(372.7,199.7);
    this.shape_349 = new cjs.Shape();
    this.shape_349.graphics.f("#8B8B87").s().p("AAAADIgBgEIgBAAIAAAAIABgBIAAgCIAAAAIABACIABgBIAAABIgBABIAAAEIAAABIACAAIABAAIAAAAIABABIgBAAIgBAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
    this.shape_349.setTransform(371.85,199.8292);
    this.shape_350 = new cjs.Shape();
    this.shape_350.graphics.f("#8B8B87").s().p("AABAGIgBgIIAAAAIACAIgAAAgEIgBAAIAAgBIAAAAIAAAAIABAAIAAAAIAAABg");
    this.shape_350.setTransform(370.725,200);
    this.shape_351 = new cjs.Shape();
    this.shape_351.graphics.f("#8B8B87").s().p("AAAAEQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDIACgBIABgBIABABIAAABIgBAAIgBAAQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIABACIACABIABgBIABABIgCABIgCAAIAAgBg");
    this.shape_351.setTransform(370.1375,200.2833);
    this.shape_352 = new cjs.Shape();
    this.shape_352.graphics.f("#8B8B87").s().p("AAAAFIgCgIIABAAIABACIAAgCIABgBIACAAIAAACIgCgBIgBABIAAACIABAFg");
    this.shape_352.setTransform(369.25,200.5);
    this.shape_353 = new cjs.Shape();
    this.shape_353.graphics.f("#8B8B87").s().p("AgBAEQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIAAgDIADgBQAAgBAAAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAIAAABIgFABIABACIABABIADgCIAAABIgBABIgCAAIgBABIgBgBgAAAgDQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABIADgBIgBgBIgBgBIAAAAg");
    this.shape_353.setTransform(368.4375,200.7);
    this.shape_354 = new cjs.Shape();
    this.shape_354.graphics.f("#8B8B87").s().p("AAAAAIgEgCIACgBIACADIABgEIACAAIgDAEIAFAEIgBAAIgEgDIgBAEIgBABg");
    this.shape_354.setTransform(367.45,200.95);
    this.shape_355 = new cjs.Shape();
    this.shape_355.graphics.f("#8B8B87").s().p("AgBAEQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIAAgDIADgCQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAIAAABIgFABIABACIABABIADgCIAAABIgBABIgCAAIgBABIgBgBgAAAgDQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABIADgBIgBgBIgBgBIAAAAg");
    this.shape_355.setTransform(366.5375,201.15);
    this.shape_356 = new cjs.Shape();
    this.shape_356.graphics.f("#8B8B87").s().p("AgBAGQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgDIACgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAABIAAgBIAAgBIgBgDIABgBIADAMIgBAAIAAgBIgDACIAAAAIgBgBgAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIAAADIABACIACABIABgBIAAgDIAAAAIgBgCIgBAAIAAAAg");
    this.shape_356.setTransform(365.0125,201.3333);
    this.shape_357 = new cjs.Shape();
    this.shape_357.graphics.f("#8B8B87").s().p("AgBAFIgBgDIgCgFIABAAIACAFIABACIABAAIABgBIAAgDIgBgEIABAAIACAIIgBAAIAAgBIgBABIgBABIgBAAIgBAAg");
    this.shape_357.setTransform(363.9,201.7625);
    this.shape_358 = new cjs.Shape();
    this.shape_358.graphics.f("#8B8B87").s().p("AAAAFIgBgIIABAAIAAACIAAgCIABgBIABAAIAAABIgBAAIgBABIAAACIABAFg");
    this.shape_358.setTransform(363,201.95);
    this.shape_359 = new cjs.Shape();
    this.shape_359.graphics.f("#8B8B87").s().p("AAAADIgBgEIgBAAIAAAAIABgBIAAgCIABAAIAAACIABgBIAAABIgBABIAAAEIAAABIACAAIABAAIAAAAIAAABIAAAAIgBAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
    this.shape_359.setTransform(362.3,202.0292);
    this.shape_360 = new cjs.Shape();
    this.shape_360.graphics.f("#8B8B87").s().p("AgBAEIABAAIABgBIABAAIABgCIgBAAIgCgBIgBAAIgBAAIAAAAIAAgDIACgBIACAAIAAABIgCAAIgBABIAAABIAAABIABAAIABAAIACAAIABABIgBACIgCABIgCABg");
    this.shape_360.setTransform(361.4875,202.3125);
    this.shape_361 = new cjs.Shape();
    this.shape_361.graphics.f("#8B8B87").s().p("AAAAFIgCgCIgBgCIAAgDIADgBIACAAIACADIAAADIgDACIgBAAgAAAgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBABAAAAIAAACIABACIACABIACgCIAAgCIgBgCIgCgBIAAABg");
    this.shape_361.setTransform(360.55,202.5375);
    this.shape_362 = new cjs.Shape();
    this.shape_362.graphics.f("#8B8B87").s().p("AgCAFIgCgIIABAAIAAACIABAAIABgCIABgBIACAAQAAABAAAAQABAAAAAAQAAAAAAABQAAAAAAABIACAEIgCABIgBgEIgBgDIgBAAIgBACIAAACIABAEg");
    this.shape_362.setTransform(359.525,202.8);
    this.shape_363 = new cjs.Shape();
    this.shape_363.graphics.f("#8B8B87").s().p("AgBAEIABAAIABgBIABAAIABgCIgBAAIgCgBIgBAAIgBAAIAAAAIAAgDIACgBIACAAIAAABIgCAAIgBABIAAABIAAABIABAAIABAAIACAAIABABIgBACIgCABIgCABg");
    this.shape_363.setTransform(357.9875,203.1625);
    this.shape_364 = new cjs.Shape();
    this.shape_364.graphics.f("#8B8B87").s().p("AABAGIgBgIIAAAAIACAIgAAAgEIgBAAIAAgBIAAAAIAAAAIABAAIAAAAIAAABg");
    this.shape_364.setTransform(357.325,203.15);
    this.shape_365 = new cjs.Shape();
    this.shape_365.graphics.f("#8B8B87").s().p("AgBAFIgBgDIgBgFIABAAIABAFIAAACIABAAIACgBIAAgDIgBgEIABAAIADAIIgBAAIgBgBIgBABIgCABIAAAAIgBAAg");
    this.shape_365.setTransform(356.55,203.4625);
    this.shape_366 = new cjs.Shape();
    this.shape_366.graphics.f("#8B8B87").s().p("AADADIgBgBIgCABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBgBAAIAAgDIADgCQAAAAABAAQAAAAAAAAQAAAAAAABQABAAAAAAIAAgCIABAAIADAMIgBABgAgBgEQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIAAACIABACIABAAIABgBQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIAAgBIgCgCIAAgBIgBAAg");
    this.shape_366.setTransform(355.5625,203.875);
    this.shape_367 = new cjs.Shape();
    this.shape_367.graphics.f("#8B8B87").s().p("AAAAAIAAgBIABAAIAAAAIAAABIgBACIAAAAg");
    this.shape_367.setTransform(354.275,204.475);
    this.shape_368 = new cjs.Shape();
    this.shape_368.graphics.f("#8B8B87").s().p("AgEAGIgCgIIABAAIAAABIAAAAIABgBIACgBIACABIABgBIABgBQABgBAAAAQAAAAABAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIABAFIgBAAIgCgFIAAgBIgCAAIgBABIAAACIABAEIgCABIAAgFIgBgCIgCAAIgBABIAAACIABAFg");
    this.shape_368.setTransform(353.175,204.2917);
    this.shape_369 = new cjs.Shape();
    this.shape_369.graphics.f("#8B8B87").s().p("AgBAFQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBgCADgBIABgBIAAAAIgBgBIAAAAIgCABIgBgBIABgBIACAAIABAAIABACIACAFIgBAAIgBgBIgBACIgBAAIAAAAIgBAAgAAAAAIgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAABABIAAABIABAAIABgBIAAgDIAAAAg");
    this.shape_369.setTransform(351.95,204.55);
    this.shape_370 = new cjs.Shape();
    this.shape_370.graphics.f("#8B8B87").s().p("AABAGIgBgIIAAAAIACAIgAAAgEIgBAAIAAgBIAAAAIAAAAIABAAIAAAAIAAABg");
    this.shape_370.setTransform(351.125,204.6);
    this.shape_371 = new cjs.Shape();
    this.shape_371.graphics.f("#8B8B87").s().p("AgCAFIgCgIIABAAIAAABIABAAIABgBIABgBIACAAQAAABAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIACAFIgCABIgBgEIgBgDIgBAAIgBABIAAADIABAEg");
    this.shape_371.setTransform(350.375,204.95);
    this.shape_372 = new cjs.Shape();
    this.shape_372.graphics.f("#8B8B87").s().p("AgBAEQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIAAgDIADgBQAAgBAAAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAIAAABIgFABIABACIABABIADgCIAAABIgBABIgCAAIgBABIgBgBgAAAgDQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABIADgBIgBgBIgBgBIAAAAg");
    this.shape_372.setTransform(349.3375,205.2);
    this.shape_373 = new cjs.Shape();
    this.shape_373.graphics.f("#8B8B87").s().p("AABAFIgEgHIABAAIACADIABADIABgCIABgFIABgBIgBAJg");
    this.shape_373.setTransform(348.275,205.35);
    this.shape_374 = new cjs.Shape();
    this.shape_374.graphics.f("#8B8B87").s().p("AgEAGIgCgIIABAAIAAABIAAAAIABgBIACgBIACABIABgBIABgBQABgBAAAAQAAAAABAAQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIABAFIgBAAIgCgFIAAgBIgCAAIgBABIAAACIABAEIgCABIAAgFIgBgCIgCAAIgBABIAAACIABAFg");
    this.shape_374.setTransform(346.625,205.8417);
    this.shape_375 = new cjs.Shape();
    this.shape_375.graphics.f("#8B8B87").s().p("AABAGIgBgIIAAAAIACAIgAAAgDIgBAAIAAgBIAAgBIAAAAIABAAIAAABIAAABg");
    this.shape_375.setTransform(345.525,205.9);
    this.shape_376 = new cjs.Shape();
    this.shape_376.graphics.f("#8B8B87").s().p("AgCAFIgCgIIABAAIAAACIABAAIABgCIABgBIACABQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIACAFIgCAAIgBgFIgBgBIgBgBIgBACIAAABIABAFg");
    this.shape_376.setTransform(344.775,206.25);
    this.shape_377 = new cjs.Shape();
    this.shape_377.graphics.f("#8B8B87").s().p("AABAGIgBgIIAAAAIACAIgAAAgDIgBAAIAAgBIAAgBIAAAAIABAAIAAABIAAABg");
    this.shape_377.setTransform(343.975,206.25);
    this.shape_378 = new cjs.Shape();
    this.shape_378.graphics.f("#8B8B87").s().p("AgEAGIgCgIIABAAIAAABIAAAAIABgBIACgBIACABIABgBIABgBQABgBAAAAQAAAAABAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIABAFIgBAAIgCgFIAAgBIgCAAIgBABIAAACIABAEIgCABIAAgFIgBgCIgCAAIgBABIAAACIABAFg");
    this.shape_378.setTransform(342.975,206.6917);
    this.shape_379 = new cjs.Shape();
    this.shape_379.graphics.f("#8B8B87").s().p("AgBAGQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgDIACgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAABIAAgBIAAgBIgBgDIABgBIADAMIgBAAIAAgBIgDACIAAAAIgBgBgAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIAAADIABACIACABIABgBIAAgDIAAAAIgBgCIgBAAIAAAAg");
    this.shape_379.setTransform(416.1625,185.8833);
    this.shape_380 = new cjs.Shape();
    this.shape_380.graphics.f("#8B8B87").s().p("AgCAEQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBgDADAAIABgBIAAAAIgBgCIgBAAIgBACIgBgBIABgBIACgBIABAAIACACIABAGIgBAAIgBgBIgBABIgBAAIgBABIgBgBgAAAAAIgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIABABIABAAIABgBIAAgCIAAgBg");
    this.shape_380.setTransform(415.15,186.3);
    this.shape_381 = new cjs.Shape();
    this.shape_381.graphics.f("#8B8B87").s().p("AgEAGIgCgIIABAAIAAABIAAAAIABgBIACgBIACABIABgBIABgBQABgBAAAAQAAAAABAAQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIABAFIgBAAIgCgFIAAgBIgCAAIgBABIAAACIABAEIgCABIAAgFIgBgCIgCAAIgBABIAAACIABAFg");
    this.shape_381.setTransform(413.325,186.7417);
    this.shape_382 = new cjs.Shape();
    this.shape_382.graphics.f("#8B8B87").s().p("AABAGIgBgIIAAAAIACAIgAAAgDIgBAAIAAgCIAAAAIAAAAIABAAIAAAAIAAACg");
    this.shape_382.setTransform(412.275,186.8);
    this.shape_383 = new cjs.Shape();
    this.shape_383.graphics.f("#8B8B87").s().p("AgCAFIgCgIIABAAIAAACIABAAIABgCIABgBIACAAQAAABAAAAQABAAAAAAQAAABAAAAQAAAAAAABIACAEIgCABIgBgEIgBgCIgBgBIgBACIAAABIABAFg");
    this.shape_383.setTransform(411.525,187.15);
    this.shape_384 = new cjs.Shape();
    this.shape_384.graphics.f("#8B8B87").s().p("AgBAEQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIAAgDIADgCQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABIAAAAIgFABIABACIABAAIADgBIAAABIgBABIgCAAIgBABIgBgBgAAAgDQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABIADAAIgBgCIgBgBIAAAAg");
    this.shape_384.setTransform(410.4875,187.4);
    this.shape_385 = new cjs.Shape();
    this.shape_385.graphics.f("#8B8B87").s().p("AABAGIgBgIIAAAAIACAIgAAAgDIgBAAIAAgBIAAgBIAAAAIABAAIAAABIAAABg");
    this.shape_385.setTransform(409.175,187.55);
    this.shape_386 = new cjs.Shape();
    this.shape_386.graphics.f("#8B8B87").s().p("AgBAEIABAAIABgBIABAAIABgCIgBAAIgCgBIgBAAIgBAAIAAAAIAAgDIACgBIACAAIAAABIgCAAIgBABIAAABIAAABIABAAIABAAIACAAIABABIgBACIgCABIgCABg");
    this.shape_386.setTransform(408.5375,187.8625);
    this.shape_387 = new cjs.Shape();
    this.shape_387.graphics.f("#8B8B87").s().p("AABAGIgBgIIAAAAIACAIgAAAgEIgBAAIAAgBIAAAAIAAAAIABAAIAAAAIAAABg");
    this.shape_387.setTransform(407.825,187.85);
    this.shape_388 = new cjs.Shape();
    this.shape_388.graphics.f("#8B8B87").s().p("AgFgCIABAAIADAEIABACIAAgBIAAgCIAAgEIABAAIADADIABADIAAgBIAAgGIABgBIAAAJIgCAAIgCgEIgBgCIAAACIgBAFIgBABg");
    this.shape_388.setTransform(406.825,188.225);
    this.shape_389 = new cjs.Shape();
    this.shape_389.graphics.f("#8B8B87").s().p("AAAADIgBgEIgBAAIAAAAIABgBIAAgCIABAAIAAACIABgBIAAABIgBABIAAAEIAAABIACAAIABAAIAAAAIAAABIAAAAIgBAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
    this.shape_389.setTransform(405.4,188.4792);
    this.shape_390 = new cjs.Shape();
    this.shape_390.graphics.f("#8B8B87").s().p("AgBAGIgCgDIgCgHIACAAIACAHIABACIACAAIACgBIAAgCIgCgHIABgBIACAHIAAAEIgDABIgCABIgBgBg");
    this.shape_390.setTransform(404.3625,188.6125);
    this.shape_391 = new cjs.Shape();
    this.shape_391.graphics.f("#8B8B87").s().p("AAAABIAAAAIAAgBIAAAAIAAAAIABAAIAAAAIAAABIgBAAg");
    this.shape_391.setTransform(403.1375,189.5);
    this.shape_392 = new cjs.Shape();
    this.shape_392.graphics.f("#8B8B87").s().p("AAAADIgBgEIgBAAIAAAAIABgBIAAgCIAAAAIABACIABgBIAAABIgBABIAAAEIAAABIACAAIABAAIAAAAIABABIgBAAIgBAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
    this.shape_392.setTransform(402.45,189.1792);
    this.shape_393 = new cjs.Shape();
    this.shape_393.graphics.f("#8B8B87").s().p("AgCAEQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBgDADAAIABgBIAAAAIgBgCIgBAAIgBACIgBgBIABgBIACAAIABAAIACABIABAGIgBAAIgBgBIgBABIgBAAIgBABIgBgBgAAAAAIgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIABABIABAAIABgBIAAgCIAAgBg");
    this.shape_393.setTransform(401.65,189.45);
    this.shape_394 = new cjs.Shape();
    this.shape_394.graphics.f("#8B8B87").s().p("AAAAHIgDgMIABAAIAAABIAAAAIABgBIABgBIADABIABADIAAADQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgCABIAAgBIgBAAIABACIAAADgAAAgEQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIAAADIABACQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIABgBIAAgCIgBgCIgCgBIAAABg");
    this.shape_394.setTransform(400.5875,189.9);
    this.shape_395 = new cjs.Shape();
    this.shape_395.graphics.f("#8B8B87").s().p("AAAADIgCgEIgBAAIAAAAIABgBIAAgCIABAAIABACIACgBIAAABIgCABIABAEIAAABIACAAIAAAAIAAAAIAAABIAAAAIgBAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
    this.shape_395.setTransform(399.7,189.8292);
    this.shape_396 = new cjs.Shape();
    this.shape_396.graphics.f("#8B8B87").s().p("AgBAFIgBgDIgBgFIABAAIABAFIAAACIABAAIACgBIAAgDIgBgEIABAAIADAIIgBAAIgBgBIgBABIgCABIAAAAIgBAAg");
    this.shape_396.setTransform(398.85,190.1125);
    this.shape_397 = new cjs.Shape();
    this.shape_397.graphics.f("#8B8B87").s().p("AABAGIgCgLIABAAIACALg");
    this.shape_397.setTransform(398.025,190.125);
    this.shape_398 = new cjs.Shape();
    this.shape_398.graphics.f("#8B8B87").s().p("AAAAFIgCgCIgBgCIAAgDIADgBIACAAIACADIAAADIgDACIgBAAgAAAgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAACIABACIABABIABgCIAAgCIgBgCIgBgBIAAABg");
    this.shape_398.setTransform(397.3,190.4875);
    this.shape_399 = new cjs.Shape();
    this.shape_399.graphics.f("#8B8B87").s().p("AABAFIgEgHIABgBIACAFIABACIABgCIABgGIABAAIgBAJg");
    this.shape_399.setTransform(396.175,190.65);
    this.shape_400 = new cjs.Shape();
    this.shape_400.graphics.f("#8B8B87").s().p("AAAADIgCgEIgBAAIAAAAIABgBIAAgCIABAAIABACIACgBIAAABIgCABIAAAEIAAABIADAAIAAAAIAAAAIABABIgBAAIgBAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
    this.shape_400.setTransform(395,190.9292);
    this.shape_401 = new cjs.Shape();
    this.shape_401.graphics.f("#8B8B87").s().p("AgCAEQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAgDADAAIACAAIgBgBIAAgBIgCAAIgCABIAAgBIABgBIACgBIABAAIACADIABAEIgBABIgBgCIgBACIgBAAIgBABIgBgBgAAAAAIgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAIABABIABAAIACgBIAAgBIAAgBg");
    this.shape_401.setTransform(394.2,191.2);
    this.shape_402 = new cjs.Shape();
    this.shape_402.graphics.f("#8B8B87").s().p("AAAAFIgCgIIABAAIABACIAAgCIACgBIABAAIAAACIgBgBIgCACIAAABIABAFg");
    this.shape_402.setTransform(393.3,191.4);
    this.shape_403 = new cjs.Shape();
    this.shape_403.graphics.f("#8B8B87").s().p("AgBAEQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIAAgDIADgBQAAgBAAAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAABAAIAAABIgFABIABACIABABIADgCIAAABIgBABIgCABIgBAAIgBgBgAAAgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABIADgBIgBgBIgBgBIAAABg");
    this.shape_403.setTransform(392.4375,191.6);
    this.shape_404 = new cjs.Shape();
    this.shape_404.graphics.f("#8B8B87").s().p("AgEAGIgCgIIABAAIAAABIAAAAIABgBIACgBIACABIABgBIABgBQABgBAAAAQAAAAABAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIABAFIgBAAIgCgFIAAgBIgCAAIgBABIAAACIABAEIgCABIAAgFIgBgCIgCAAIgBABIAAACIABAFg");
    this.shape_404.setTransform(390.675,192.0417);
    this.shape_405 = new cjs.Shape();
    this.shape_405.graphics.f("#8B8B87").s().p("AgBAEQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBgDADAAIABAAIAAgBIgBgCIAAAAIgCACIgBgBIABgBIACgBIABAAIABACIACAFIgBABIgBgCIgBACIgBAAIAAABIgBgBgAAAAAIgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAABAAIAAABIABAAIABgBIAAgBIAAgBg");
    this.shape_405.setTransform(389.4,192.35);
    this.shape_406 = new cjs.Shape();
    this.shape_406.graphics.f("#8B8B87").s().p("AgBAFIgBgDIgCgFIABAAIACAFIAAACIACAAIACgBIAAgDIgBgEIABAAIABAIIAAAAIgBgBIgBABIgBABIgBAAIgBAAg");
    this.shape_406.setTransform(388.35,192.5625);
    this.shape_407 = new cjs.Shape();
    this.shape_407.graphics.f("#8B8B87").s().p("AADADIgBgBIgCABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAIAAgDIADgCQAAAAABAAQAAAAAAAAQAAAAAAABQABAAAAAAIAAgCIABAAIADAMIgBABgAgBgEQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIAAACIABACIABAAIABgBQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIAAgBIgCgCIAAgBIgBAAg");
    this.shape_407.setTransform(387.3125,192.975);
    this.shape_408 = new cjs.Shape();
    this.shape_408.graphics.f("#8B8B87").s().p("AABAGIgBgIIAAAAIACAIgAAAgDIgBAAIAAgBIAAgBIAAAAIABAAIAAABIAAABg");
    this.shape_408.setTransform(386.425,192.85);
    this.shape_409 = new cjs.Shape();
    this.shape_409.graphics.f("#8B8B87").s().p("AABAGIgCgLIABAAIACALg");
    this.shape_409.setTransform(385.975,192.925);
    this.shape_410 = new cjs.Shape();
    this.shape_410.graphics.f("#8B8B87").s().p("AgCAFQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAgCADgBIACgBIgBAAIAAgBIgCAAIgCABIAAgBIABgBIACAAIABAAIACACIABAFIgBAAIgBgBIgBACIgBAAIgBAAIgBAAgAAAAAIgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIABABIABAAIACgBIAAgDIAAAAg");
    this.shape_410.setTransform(385.3,193.3);
    this.shape_411 = new cjs.Shape();
    this.shape_411.graphics.f("#8B8B87").s().p("AgCAFQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAgCADgBIACgBIgBAAIAAgBIgCAAIgCABIAAgBIABgBIACAAIABAAIACACIABAFIgBAAIgBgCIgBADIgBAAIgBAAIgBAAgAAAAAIgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAIABACIABAAIACgCIAAgCIAAAAg");
    this.shape_411.setTransform(383.85,193.65);
    this.shape_412 = new cjs.Shape();
    this.shape_412.graphics.f("#8B8B87").s().p("AgCAFIgCgIIABAAIAAACIABAAIABgCIABgBIACAAQAAABAAAAQABAAAAAAQAAABAAAAQAAAAAAABIACAEIgCABIgBgEIgBgCIgBgBIgBACIAAABIABAFg");
    this.shape_412.setTransform(382.825,193.9);
    this.shape_413 = new cjs.Shape();
    this.shape_413.graphics.f("#8B8B87").s().p("AgBAHIgBgCIAAgBIABgBIgBgBIAAgBIAAgBIAAAAIgBAAIgBgBIABgDIACgBIABgBIACAAIAAABIgBAAIABABIAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAIgBABIgBAAIAAABIAAABIABgBIABAAIADAAIAAACQABAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgDACIgBAAIgBAAgAgBADIAAACIAAABIABAAIADgBIABgCIgBgBIgCABIgBAAIgBAAgAgBgEIgBABIAAABIABACIABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAAAIgBAAg");
    this.shape_413.setTransform(381.8083,194.2625);
    this.shape_414 = new cjs.Shape();
    this.shape_414.graphics.f("#8B8B87").s().p("AgBAEQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBgCADgBIABAAIAAgBIgBgBIgBAAIgBABIgBgBIABgBIACgBIABAAIABADIACAEIgBABIgBgCIgBACIgBAAIgBABIAAgBgAAAAAIgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAABAAIAAABIABAAIABgBIAAgCIAAAAg");
    this.shape_414.setTransform(380.85,194.35);
    this.shape_415 = new cjs.Shape();
    this.shape_415.graphics.f("#8B8B87").s().p("AgEAGIgCgIIABAAIAAABIAAAAIABgBIACgBIACABIABgBIABgBQABgBAAAAQAAAAABAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIABAFIgBAAIgCgFIAAgBIgCAAIgBABIAAACIABAEIgCABIAAgFIgBgCIgCAAIgBABIAAACIABAFg");
    this.shape_415.setTransform(379.525,194.6417);
    this.shape_416 = new cjs.Shape();
    this.shape_416.graphics.f("#8B8B87").s().p("AgBAEQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIAAgDIADgCQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABIAAAAIgFABIABACIABAAIADgBIAAABIgBABIgCAAIgBABIgBgBgAAAgDQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABIADAAIgBgCIgBgBIAAAAg");
    this.shape_416.setTransform(377.6875,195.05);
    this.shape_417 = new cjs.Shape();
    this.shape_417.graphics.f("#8B8B87").s().p("AAAAFIgBgIIAAAAIABACIAAgCIABgBIABAAIAAACIgBgBIgBACIAAABIABAFg");
    this.shape_417.setTransform(376.8,195.25);
    this.shape_418 = new cjs.Shape();
    this.shape_418.graphics.f("#8B8B87").s().p("AAAAFIgCgCIgBgCIAAgDIADgBIACAAIACADIAAADIgDACIgBAAgAAAgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAACIAAACIACABIABgCIAAgCIgBgCIgBgBIAAABg");
    this.shape_418.setTransform(375.9,195.4875);
    this.shape_419 = new cjs.Shape();
    this.shape_419.graphics.f("#8B8B87").s().p("AABAGIgCgLIABAAIACALg");
    this.shape_419.setTransform(375.125,195.475);
    this.shape_420 = new cjs.Shape();
    this.shape_420.graphics.f("#8B8B87").s().p("AAAAFIgCgCIgBgCIAAgDIADgBIACAAIACADIAAADIgDACIgBAAgAAAgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAACIABACIABABIABgCIAAgCIgBgCIgBgBIAAABg");
    this.shape_420.setTransform(374.35,195.8375);
    this.shape_421 = new cjs.Shape();
    this.shape_421.graphics.f("#8B8B87").s().p("AgBAGQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgDIACgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAABIAAgBIAAgBIgBgDIABgBIADAMIgBAAIAAgBIgDACIAAAAIgBgBgAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIAAADIABACIACABIABgBIAAgDIAAAAIgBgCIgBgBIAAABg");
    this.shape_421.setTransform(373.3125,195.8833);
    this.shape_422 = new cjs.Shape();
    this.shape_422.graphics.f("#8B8B87").s().p("AAAADIgCgEIgBAAIAAAAIABgBIAAgCIACAAIAAACIACgBIAAABIgCABIABAEIAAABIABAAIABAAIAAAAIAAABIAAAAIgBAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
    this.shape_422.setTransform(371.9,196.2792);
    this.shape_423 = new cjs.Shape();
    this.shape_423.graphics.f("#8B8B87").s().p("AgBAEQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIAAgDIADgCQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAABABIAAAAIgFABIABACIABAAIADgBIAAABIgBABIgCAAIgBABIgBgBgAAAgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABIADAAIgBgCIgBgBIAAABg");
    this.shape_423.setTransform(371.0875,196.6);
    this.shape_424 = new cjs.Shape();
    this.shape_424.graphics.f("#8B8B87").s().p("AgBAEQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIAAgDIADgCQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABIAAAAIgFABIABACIABAAIADgBIAAABIgBABIgCAAIgBABIgBgBgAAAgDQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABIADAAIgBgCIgBgBIAAAAg");
    this.shape_424.setTransform(370.0375,196.85);
    this.shape_425 = new cjs.Shape();
    this.shape_425.graphics.f("#8B8B87").s().p("AAAAFIgBgIIABAAIAAACIAAgCIABgBIABAAIAAABIgBAAIgBABIAAACIABAFg");
    this.shape_425.setTransform(369.15,197);
    this.shape_426 = new cjs.Shape();
    this.shape_426.graphics.f("#8B8B87").s().p("AAAAFIgCgCIgBgCIAAgDIADgBIACAAIACADIAAADIgDACIgBAAgAAAgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAACIABACIABABIABgCIAAgCIgBgCIgBgBIAAABg");
    this.shape_426.setTransform(368.25,197.2375);
    this.shape_427 = new cjs.Shape();
    this.shape_427.graphics.f("#8B8B87").s().p("AgCAEQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAgDADAAIACAAIgBgBIAAgBIgCAAIgCABIAAgBIABgBIACgBIABAAIACADIABAEIgBABIgBgCIgBACIgBAAIgBABIgBgBgAAAAAIgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAIABABIABAAIACgBIAAgBIAAgBg");
    this.shape_427.setTransform(367.3,197.5);
    this.shape_428 = new cjs.Shape();
    this.shape_428.graphics.f("#8B8B87").s().p("AABAGIgCgLIABAAIACALg");
    this.shape_428.setTransform(366.475,197.475);
    this.shape_429 = new cjs.Shape();
    this.shape_429.graphics.f("#8B8B87").s().p("AAAADIgBgEIgBAAIAAAAIABgBIAAgCIABAAIAAACIABgBIAAABIgBABIAAAEIAAABIACAAIABAAIAAAAIAAABIAAAAIgBAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
    this.shape_429.setTransform(365.45,197.8292);
    this.shape_430 = new cjs.Shape();
    this.shape_430.graphics.f("#8B8B87").s().p("AgBAFIgBgDIgBgFIABAAIABAFIABACIAAAAIACgBIAAgDIgBgEIABAAIADAIIgCAAIAAgBIgBABIgCABIAAAAIgBAAg");
    this.shape_430.setTransform(364.55,198.1125);
    this.shape_431 = new cjs.Shape();
    this.shape_431.graphics.f("#8B8B87").s().p("AAAADIgBgEIgBAAIAAAAIABgBIAAgCIABAAIAAACIABgBIAAABIgBABIAAAEIAAABIACAAIABAAIAAAAIAAABIAAAAIgBAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
    this.shape_431.setTransform(363.2,198.3292);
    this.shape_432 = new cjs.Shape();
    this.shape_432.graphics.f("#8B8B87").s().p("AgCAFIgCgIIABAAIAAABIABAAIABgBIABgBIACAAQAAABAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIACAFIgCABIgBgEIgBgDIgBAAIgBABIAAADIABAEg");
    this.shape_432.setTransform(362.375,198.65);
    this.shape_433 = new cjs.Shape();
    this.shape_433.graphics.f("#8B8B87").s().p("AgBAFIgBgDIgBgFIAAAAIACAFIAAACIABAAIADgBIAAgDIgBgEIABAAIACAIIgBAAIgBgBIgBABIgCABIAAAAIgBAAg");
    this.shape_433.setTransform(361.25,198.8625);
    this.shape_434 = new cjs.Shape();
    this.shape_434.graphics.f("#8B8B87").s().p("AgBAGQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgDIACgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABIAAgBIAAgBIgBgDIABgBIADAMIgBAAIAAgBIgDACIAAAAIgBgBgAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIAAADIABACIACABIABgBIAAgDIAAAAIgBgCIgBgBIAAABg");
    this.shape_434.setTransform(360.2125,198.9333);
    this.shape_435 = new cjs.Shape();
    this.shape_435.graphics.f("#8B8B87").s().p("AABAGIgBgIIAAAAIACAIgAAAgDIgBAAIAAgBIAAgBIAAAAIABAAIAAABIAAABg");
    this.shape_435.setTransform(359.375,199.15);
    this.shape_436 = new cjs.Shape();
    this.shape_436.graphics.f("#8B8B87").s().p("AAAAEQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDIACgBIABgBIABABIAAABIgBAAIgBAAQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIABACIACABIABgBIABABIgCABIgCAAIAAgBg");
    this.shape_436.setTransform(358.7375,199.4833);
    this.shape_437 = new cjs.Shape();
    this.shape_437.graphics.f("#8B8B87").s().p("AgCAFIgCgIIABAAIAAACIABAAIABgCIABgBIACAAQAAABAAAAQABAAAAAAQAAABAAAAQAAAAAAABIACAEIgCABIgBgEIgBgCIgBgBIgBACIAAACIABAEg");
    this.shape_437.setTransform(357.775,199.75);
    this.shape_438 = new cjs.Shape();
    this.shape_438.graphics.f("#8B8B87").s().p("AABAGIgBgIIAAAAIACAIgAAAgEIgBAAIAAgBIAAAAIAAAAIABAAIAAAAIAAABg");
    this.shape_438.setTransform(356.925,199.75);
    this.shape_439 = new cjs.Shape();
    this.shape_439.graphics.f("#8B8B87").s().p("AAAADIgCgEIgBAAIAAAAIABgBIAAgCIABAAIABACIACgBIAAABIgCABIABAEIAAABIACAAIAAAAIAAAAIABABIgBAAIgBAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
    this.shape_439.setTransform(356.4,199.9292);
    this.shape_440 = new cjs.Shape();
    this.shape_440.graphics.f("#8B8B87").s().p("AgBAGQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgDIACgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABIAAgBIAAgBIgBgDIABgBIADAMIgBAAIAAgBIgDACIAAAAIgBgBgAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIAAADIABACIACABIABgBIAAgDIAAAAIgBgCIgBgBIAAABg");
    this.shape_440.setTransform(355.0625,200.1333);
    this.shape_441 = new cjs.Shape();
    this.shape_441.graphics.f("#8B8B87").s().p("AAAAFIgCgCIgBgCIAAgDIADgBIACAAIACADIAAADIgDACIgBAAgAAAgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBABAAAAIAAACIABACIACABIACgCIAAgCIgCgCIgBgBIAAABg");
    this.shape_441.setTransform(353.95,200.5875);
    this.shape_442 = new cjs.Shape();
    this.shape_442.graphics.f("#8B8B87").s().p("AgEAGIgCgIIABAAIAAABIAAAAIABgBIACgBIACABIABgBIABgBQABgBAAAAQAAAAABAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIABAFIgBAAIgCgFIAAgBIgCAAIgBABIAAACIABAEIgCABIAAgFIgBgCIgCAAIgBABIAAACIABAFg");
    this.shape_442.setTransform(352.625,200.9417);
    this.shape_443 = new cjs.Shape();
    this.shape_443.graphics.f("#8B8B87").s().p("AgBAEIABAAIABgBIABAAIABgCIgBAAIgCgBIgBAAIgBAAIAAAAIAAgDIACgBIACAAIAAABIgCAAIgBABIAAABIAAABIABAAIABAAIACAAIABABIgBACQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgCABg");
    this.shape_443.setTransform(351.3375,201.2125);
    this.shape_444 = new cjs.Shape();
    this.shape_444.graphics.f("#8B8B87").s().p("AABAGIgBgIIAAAAIACAIgAAAgDIgBAAIAAgCIAAAAIAAAAIABAAIAAAAIAAACg");
    this.shape_444.setTransform(350.675,201.2);
    this.shape_445 = new cjs.Shape();
    this.shape_445.graphics.f("#8B8B87").s().p("AgBAFIgBgDIgBgFIABAAIABAFIAAACIABAAIADgBIAAgDIgCgEIACAAIACAIIgBAAIgBgBIgBABIgCABIAAAAIgBAAg");
    this.shape_445.setTransform(349.9,201.5125);
    this.shape_446 = new cjs.Shape();
    this.shape_446.graphics.f("#8B8B87").s().p("AgBAEQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIAAgDIADgCQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABIAAAAIgFABIABACIABAAIADgBIAAABIgBABIgCAAIgBABIgBgBgAAAgDQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABIADAAIgBgCIgBgBIAAAAg");
    this.shape_446.setTransform(348.8875,201.8);
    this.shape_447 = new cjs.Shape();
    this.shape_447.graphics.f("#8B8B87").s().p("AgBAGIgDgLIABAAIABADIAAACIAAAAIABgCIABgBIACABQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIABAFIgBAAIgCgFIAAgBIgCgBIgBACIAAACIABAEg");
    this.shape_447.setTransform(347.325,202.025);
    this.shape_448 = new cjs.Shape();
    this.shape_448.graphics.f("#8B8B87").s().p("AgBAGIgDgLIACAAIABADIgBACIABAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAIADABIACACIAAAEQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgBABIgBgBIAAAAIAAABgAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAACIAAACQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIABgBIABgDIgCgBIgBAAIgBAAg");
    this.shape_448.setTransform(346.1875,202.275);
    this.shape_449 = new cjs.Shape();
    this.shape_449.graphics.f("#8B8B87").s().p("AABAGIgBgIIAAAAIACAIgAAAgDIgBAAIAAgBIAAgBIAAAAIABAAIAAABIAAABg");
    this.shape_449.setTransform(345.475,202.4);
    this.shape_450 = new cjs.Shape();
    this.shape_450.graphics.f("#8B8B87").s().p("AgCAFIgCgIIABAAIAAABIABAAIABgBIABgBIACABQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIACAGIgCAAIgBgFIgBgBIgBgBIgBABIAAACIABAFg");
    this.shape_450.setTransform(344.725,202.75);
    this.shape_451 = new cjs.Shape();
    this.shape_451.graphics.f("#8B8B87").s().p("AgBAGIABAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAIAAgCIgEgHIABgBIACAEIABACIABgBIABgGIABAAIgBAKIgBACIgCABIAAAAg");
    this.shape_451.setTransform(343.125,203.3);
    this.shape_452 = new cjs.Shape();
    this.shape_452.graphics.f("#8B8B87").s().p("AgEAGIgCgIIABAAIAAABIAAAAIABgBIACgBIACABIABgBIABgBQABgBAAAAQAAAAABAAQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIABAFIgBAAIgCgFIAAgBIgCAAIgBABIAAACIABAEIgCABIAAgFIgBgCIgCAAIgBABIAAACIABAFg");
    this.shape_452.setTransform(341.975,203.4417);
    this.shape_453 = new cjs.Shape();
    this.shape_453.graphics.f("#8B8B87").s().p("AgEAGIgCgIIABAAIAAABIAAAAIABgBIACgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABIABgBIABgBQABgBAAAAQAAAAABAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIABAFIgBAAIgCgFIAAgBIgCAAIgBABIAAACIABAEIgCABIAAgFIgBgCIgCAAIgBABIAAACIABAFg");
    this.shape_453.setTransform(340.375,203.7917);
    this.shape_454 = new cjs.Shape();
    this.shape_454.graphics.f("#8B8B87").s().p("AgBAFIgBgDIgBgFIABAAIABAFIABACIAAAAIACgBIAAgDIgBgEIABAAIADAIIgBAAIgBgBIgBABIgCABIAAAAIgBAAg");
    this.shape_454.setTransform(339,204.0625);
    this.shape_455 = new cjs.Shape();
    this.shape_455.graphics.f("#8B8B87").s().p("AgCAFIgCgIIABAAIAAACIABAAIABgCIABgBIACABQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIACAEIgCABIgBgEIgBgCIgBgBIgBACIAAABIABAFg");
    this.shape_455.setTransform(337.975,204.35);
    this.shape_456 = new cjs.Shape();
    this.shape_456.graphics.f("#8B8B87").s().p("AAAAFIgCgCIgBgCIAAgDIADgBIACAAIACADIAAADIgDACIgBAAgAAAgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAACIAAACIACABIACgCIAAgCIgCgCIgBgBIAAABg");
    this.shape_456.setTransform(336.85,204.5875);
    this.shape_457 = new cjs.Shape();
    this.shape_457.graphics.f("#8B8B87").s().p("AgCAFIgCgIIABAAIAAABIABAAIABgBIABgBIACAAQAAABAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIACAFIgCABIgBgFIgBgCIgBAAIgBABIAAADIABAEg");
    this.shape_457.setTransform(335.825,204.85);
    this.shape_458 = new cjs.Shape();
    this.shape_458.graphics.f("#1D334B").s().p("AAAAKQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAgBAAAAIgDgJIgCAAIAAgCIACgBIgBgDIADgCIABAEIAEgBIAAADIgEABIACAIIABADQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIABAAIABgBIABACIgCABIgCABIgBAAIgCgBg");
    this.shape_458.setTransform(410.5,205.5313);
    this.shape_459 = new cjs.Shape();
    this.shape_459.graphics.f("#1D334B").s().p("AAAAJIgDgBIgCgDIgCgEQgBgDACgDQABgDAEAAIACgBIACABIACACIABADIABADIgLABIABADIACACIABAAIADAAIACgBIABgBIACACIgCACIgEABIgBABIgBgBgAAAgGIgEACIAAAEIAIgCQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBAAAAgBIgBAAIgBAAg");
    this.shape_459.setTransform(409.055,206.0625);
    this.shape_460 = new cjs.Shape();
    this.shape_460.graphics.f("#1D334B").s().p("AgNgFIACgBIABACIABAAIABgCIAEgCIACAAIACACIABgCIADgCIADAAIACAAIABADIABADIADAKIgDAAIgDgJIAAgCIgBgCIgBAAIgCAAIgDABIAAAEIADAKIgDABIgCgJIAAgDIgBgBIgBgBIgCAAIgDACIgBACIADALIgDABg");
    this.shape_460.setTransform(406.725,206.675);
    this.shape_461 = new cjs.Shape();
    this.shape_461.graphics.f("#1D334B").s().p("AgGgMIACgBIAOAWIgDABIgEgHIgIACIgBAIIgDABgAgEgEIgBAHIAHgCIgEgGIgCgDg");
    this.shape_461.setTransform(404.525,206.925);
    this.shape_462 = new cjs.Shape();
    this.shape_462.graphics.f("#1D334B").s().p("AAAAKQAAAAAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAIgDgJIgCAAIgBgCIADgBIgBgDIADgCIABAEIADgBIABADIgDABIABAIIABADQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIACAAIACgBIABACIgCABIgDABIgBAAIgCgBg");
    this.shape_462.setTransform(401.8,207.5813);
    this.shape_463 = new cjs.Shape();
    this.shape_463.graphics.f("#1D334B").s().p("AgBgEIACAAIADAQIgCABgAgDgIIgBgBIABgBIABgBIACAAIAAABIAAACIgBABIgCgBg");
    this.shape_463.setTransform(400.6,207.6417);
    this.shape_464 = new cjs.Shape();
    this.shape_464.graphics.f("#1D334B").s().p("AgEANIAAgCIADAAIACAAIACgBIACgBIABgCIAAgCIgCgCIgCgBIgCgBIgDAAIgDgCIgCgDQgBgDACgCQABgCAEgBIAEAAIACgBIAAAEIgCgBIgDAAIgDADIgBACIABACIADABIACABIADABIADABIACADIAAADIgBADIgDACIgDABIgDAAIgDAAg");
    this.shape_464.setTransform(399.2563,208);
    this.shape_465 = new cjs.Shape();
    this.shape_465.graphics.f("#1D334B").s().p("AgDgHIABAAIABACIABAAIAAgCQAAgBABAAQAAAAAAAAQAAAAABgBQAAAAABAAIACAAIAAADIgCAAIgDABIAAACIADAMIgDABg");
    this.shape_465.setTransform(396.8,208.9125);
    this.shape_466 = new cjs.Shape();
    this.shape_466.graphics.f("#1D334B").s().p("AAAAJIgDgBIgCgDIgCgEQgBgDACgDQABgDAEAAIADgBIACACIACACIACAEQABADgCADQgBADgEABIgCABIAAgBgAAAgGQgFABABAGIABADIABABIACACIACAAQAEgCgBgGIgBgCIgBgCIgCgBIgBAAIAAAAg");
    this.shape_466.setTransform(395.375,209.2625);
    this.shape_467 = new cjs.Shape();
    this.shape_467.graphics.f("#1D334B").s().p("AAAAMQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBIgEgUIADgBIADATIABACIABABIABgBIABAAIABACIgBAAIgCABIgBABIgCgBg");
    this.shape_467.setTransform(394.025,209.2583);
    this.shape_468 = new cjs.Shape();
    this.shape_468.graphics.f("#1D334B").s().p("AAAAJIgDgBIgCgDIgCgEQgBgDACgDQABgDAEAAIADgBIACACIACACIACAEQABADgCADQgBADgEABIgCABIAAgBgAAAgGQgFABABAGIABADIABABIACACIACAAQAEgCgBgGIgBgCIgBgCIgCgBIgBAAIAAAAg");
    this.shape_468.setTransform(392.525,209.9625);
    this.shape_469 = new cjs.Shape();
    this.shape_469.graphics.f("#1D334B").s().p("AgKgKIABAAIACgBIACgBIACAAIAEAAIAEACIADADIACAFIAAAEIgBAEIgCAEQgCACgEABIgBAAIgBAAIgCAAIgBABgAgBAKIAAAAIABAAIAAAAIABAAIAEgCIACgDIAAgDIAAgDIgBgEIgCgDIgEgBIgCAAIgBAAIgBAAIgCABIAAAAg");
    this.shape_469.setTransform(390.3,210.1417);
    this.shape_470 = new cjs.Shape();
    this.shape_470.graphics.f("#1D334B").s().p("AgCAGIgCgKIADAAQAAgBABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAABABQAAAAgBABQAAAAAAAAQAAABAAAAQgBAAAAAAIAEAEIgBABIgEgEIgCAAIABAFgAgBgDIgBAAIAAADIACAAIAAAAIACgCIgCgBIAAgBIgBABg");
    this.shape_470.setTransform(404.45,211.1417);
    this.shape_471 = new cjs.Shape();
    this.shape_471.graphics.f("#1D334B").s().p("AgCAFIgCgDQAAgBAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABIADADQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAIgBAAIgCAAgAgDgBIAAACIACADIACAAQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgDIgBgDIgCAAIgDACg");
    this.shape_471.setTransform(403.2063,211.3771);
    this.shape_472 = new cjs.Shape();
    this.shape_472.graphics.f("#1D334B").s().p("AACAGIgCgJIgDABIAAgBIAHgCIAAABIgDABIACAJg");
    this.shape_472.setTransform(402.075,211.575);
    this.shape_473 = new cjs.Shape();
    this.shape_473.graphics.f("#1D334B").s().p("AgBAFIgCgDIgBgDIABgCIADgBIACAAIAAABIgCAAIgCACIAAACIACADIACAAIACgBIAAABIgDABIgBAAIgBAAg");
    this.shape_473.setTransform(401.25,211.8208);
    this.shape_474 = new cjs.Shape();
    this.shape_474.graphics.f("#1D334B").s().p("AgDgEIAFgBIAAABIgEABIABADIAEAAIAAAAIgDABIAAAEIADgBIABABIgEABg");
    this.shape_474.setTransform(400.25,212.075);
    this.shape_475 = new cjs.Shape();
    this.shape_475.graphics.f("#1D334B").s().p("AgBAGIgDgKIADAAQAAgBABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIAEAEIgBABIgEgEIgBAAIAAAFgAgBgDIgBAAIAAADIACAAIAAAAIABgCIgBgBIAAgBIgBABg");
    this.shape_475.setTransform(399.3,212.3417);
    this.shape_476 = new cjs.Shape();
    this.shape_476.graphics.f("#1D334B").s().p("AABAFIgCgJIABAAIACAJg");
    this.shape_476.setTransform(398.475,212.475);
    this.shape_477 = new cjs.Shape();
    this.shape_477.graphics.f("#1D334B").s().p("AgEgEIADAAQABgBAAAAQAAAAABAAQAAABABAAQAAAAABAAIACADQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAIgCABgAAAgDIgCAAIACAIIAAgBIADgBQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgCgBIAAABg");
    this.shape_477.setTransform(397.5833,212.7417);
    this.shape_478 = new cjs.Shape();
    this.shape_478.graphics.f().ls(["#F6C961","#B07B29","#F6C961","#D0A449","#AD8334","#946C26","#845D1E","#7F581B","#8C6422","#AE8535","#E5B957","#F6C961"],[0,0.235,0.459,0.529,0.608,0.678,0.745,0.796,0.827,0.89,0.976,1],-9.8,-3.2,9.8,3.3).p("AhzAbIDmg1");
    this.shape_478.setTransform(400.85,210.5);
    this.shape_479 = new cjs.Shape();
    this.shape_479.graphics.f("#1D334B").s().p("AgNgFIACgBIABACIABAAIABgCIAEgCIACAAIACACIABgCIADgCIADAAIACAAIABADIABADIADAKIgDAAIgDgJIAAgCIgBgCIgBAAIgCAAIgDABIAAAEIADAKIgDABIgCgJIAAgDIgBgBIgBgBIgCAAIgDACIgBACIADALIgDABg");
    this.shape_479.setTransform(367.775,215.725);
    this.shape_480 = new cjs.Shape();
    this.shape_480.graphics.f("#1D334B").s().p("AgBAKIgCgBIgCgCIgBgDIgCgKIACAAIADAJIABACIABABIABABIAAAAIACgBIABAAIABgCIABgCIgDgKIADgBIADALIAAADIABACIgCABIgBgDIAAAAIgCADIgEACIAAAAIgBAAg");
    this.shape_480.setTransform(365.45,216.2125);
    this.shape_481 = new cjs.Shape();
    this.shape_481.graphics.f("#1D334B").s().p("AgBAKIgCgBIgBgDIADABIACAAIACgBIABgDIgBgBIgCgBIgCAAIgCAAIgCgBIgBgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAEgCIACAAIACAAIAAACIgCAAIgBAAIgDABIAAACIABABIACABIABABIACAAIACAAIABACIABACIgCADIgBABIgDACIgBAAIgBAAg");
    this.shape_481.setTransform(363.7667,216.65);
    this.shape_482 = new cjs.Shape();
    this.shape_482.graphics.f("#1D334B").s().p("AgIgKIADAAIABACIAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIACgBQADgBACACQACABABAFIAAAEIgBADIgBACIgEACIgCAAIgBgBIABAIIgCABgAgCgIIgBADIACAIIABAAIABAAQABAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBQABgBAAgDIgBgDIgBgCIgDgBIgBAAIgCACg");
    this.shape_482.setTransform(362.05,217.3938);
    this.shape_483 = new cjs.Shape();
    this.shape_483.graphics.f("#1D334B").s().p("AgDgLIADgBIAEAYIgDABg");
    this.shape_483.setTransform(360.625,217);
    this.shape_484 = new cjs.Shape();
    this.shape_484.graphics.f("#1D334B").s().p("AgNgFIACgBIABACIABAAIABgCIAEgCIACAAIACACIABgCIADgCIADAAIACAAIABADIABADIADAKIgDAAIgDgJIAAgCIgBgCIgBAAIgCAAIgDABIAAAEIADAKIgDABIgCgJIAAgDIgBgBIgBgBIgCAAIgDACIgBACIADALIgDABg");
    this.shape_484.setTransform(357.875,218.075);
    this.shape_485 = new cjs.Shape();
    this.shape_485.graphics.f("#1D334B").s().p("AAAAJIgDgBIgCgDIgCgEQgBgDACgDQABgDAEAAIACgBIACABIACACIABADIABADIgLABIABADIACACIABAAIADAAIACgBIABgBIACACIgCACIgEABIgBABIgBgBgAAAgGIgEACIAAAEIAIgCQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBAAAAgBIgBAAIgBAAg");
    this.shape_485.setTransform(355.605,218.5625);
    this.shape_486 = new cjs.Shape();
    this.shape_486.graphics.f("#1D334B").s().p("AgDgHIABAAIABACIABAAIAAgCQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAABAAIACAAIAAADIgCAAIgDABIAAACIADAMIgDABg");
    this.shape_486.setTransform(354.05,218.8625);
    this.shape_487 = new cjs.Shape();
    this.shape_487.graphics.f("#1D334B").s().p("AAAAJIgDgBIgCgDIgCgEQgBgDACgDQABgDAEAAIADgBIACACIACACIACAEQABADgCADQgBADgEABIgCABIAAgBgAAAgGQgFABABAGIABADIABABIACACIACAAQAEgCgBgGIgBgCIgBgCIgCgBIgBAAIAAAAg");
    this.shape_487.setTransform(352.625,219.2625);
    this.shape_488 = new cjs.Shape();
    this.shape_488.graphics.f("#1D334B").s().p("AgJgLIADgBIAFAVIAKgCIABACIgNAEg");
    this.shape_488.setTransform(351.05,219.375);
    this.shape_489 = new cjs.Shape();
    this.shape_489.graphics.f("#1D334B").s().p("AgCAGIgCgKIADAAQAAgBABAAQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAABABQAAAAgBABQAAAAAAAAQAAABAAAAQgBAAAAAAIAEAEIgBABIgEgEIgCAAIABAFgAgBgDIgCAAIABADIACAAIABAAIABgCIgCgBIAAgBIgBABg");
    this.shape_489.setTransform(364.05,220.5917);
    this.shape_490 = new cjs.Shape();
    this.shape_490.graphics.f("#1D334B").s().p("AgDgEIAEgBIABABIgDABIAAADIADAAIABAAIgDABIAAAEIADgBIABABIgEABg");
    this.shape_490.setTransform(363,220.775);
    this.shape_491 = new cjs.Shape();
    this.shape_491.graphics.f("#1D334B").s().p("AgCAFIgCgDIAAgDIABgCIADgBIADAAIAAABIgDAAIgDABIAAADIACADIADAAIABAAIAAgEIgCABIgBgBIADAAIACAEIgCABIgBAAIgCAAIgCAAg");
    this.shape_491.setTransform(362,221.0208);
    this.shape_492 = new cjs.Shape();
    this.shape_492.graphics.f("#1D334B").s().p("AgCgFIABAAIAGAJIgCAAIgCgDIgDABIAAADIgBABgAgBgCIAAADIACgBIgBgCIgBgBIAAABg");
    this.shape_492.setTransform(360.95,221.375);
    this.shape_493 = new cjs.Shape();
    this.shape_493.graphics.f("#1D334B").s().p("AgCAGIgCgJIABAAIAHAGIAAgCIgBgBIgBgFIABAAIACAKIgBAAIgHgGIABABIABAGg");
    this.shape_493.setTransform(359.725,221.55);
    this.shape_494 = new cjs.Shape();
    this.shape_494.graphics.f("#1D334B").s().p("AgCgFIABAAIAFAJIAAAAIgDgDIgDABIgBADIgBABgAgCgCIAAADIADgBIgCgCIAAgBIgBABg");
    this.shape_494.setTransform(358.75,221.875);
    this.shape_495 = new cjs.Shape();
    this.shape_495.graphics.f("#1D334B").s().p("AgDAGIgDgJIADgBIADAHIACgIIACAAIADAJIgCAAIgCgFIAAgDIgCAJIgBAAIgEgHIABACIABAGg");
    this.shape_495.setTransform(357.35,222.125);
    this.shape_496 = new cjs.Shape();
    this.shape_496.graphics.f().ls(["#F6C961","#B07B29","#F6C961","#D0A449","#AD8334","#946C26","#845D1E","#7F581B","#8C6422","#AE8535","#E5B957","#F6C961"],[0,0.235,0.459,0.529,0.608,0.678,0.745,0.796,0.827,0.89,0.976,1],-9.8,-3.2,9.8,3.3).p("AhyAbIDmg1");
    this.shape_496.setTransform(360.4,219.925);
    this.instance_3 = new lib.Ornaments();
    this.instance_3.setTransform(378.85,180.15,1,1,0,0,0,130.4,77.9);
    this.shape_497 = new cjs.Shape();
    this.shape_497.graphics.lf(["#DFE2EC","#E6E9F1","#F6F7FA","#FBFCFE"],[0.11,0.267,0.675,1],-70.5,16.5,70.6,-16.4).s().p("As1lNIWClKIDpPlI2CFKg");
    this.shape_497.setTransform(371.9,180.05);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_497},{t:this.instance_3},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.instance_2},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185}]},76).wait(825));
    // Body
    this.shape_498 = new cjs.Shape();
    this.shape_498.graphics.f("#1F2D34").s().p("AhWAVIAGgFIARgKQAbgPAhgHQAggGAgAEIATAEIAHACIgbgCQgigCgcAFQgeAGgeAOQgVAMgCAAIgBAAg");
    this.shape_498.setTransform(277.7,201.3365);
    this.shape_499 = new cjs.Shape();
    this.shape_499.graphics.f("#1F2D34").s().p("AhEFsIgFAAIAUgBQAggGAVgOQAggWASgvQATgxAAg8IhLhoIAAgBIAAgBIA2mmIAAACIgNB4IgjEkIgBAIIBLBoIAAABIAAABQgBA+gTAxQgUAwghAWQgOAJgPAEIgNAEIgMABg");
    this.shape_499.setTransform(286.525,193.75);
    this.shape_500 = new cjs.Shape();
    this.shape_500.graphics.f("#E1E1E1").s().p("AgKHoQhBgYgfgYQghgagFhMQgEg0AIhEIAelHQAakeAGgTQAHgVAsgmQAWgTAUgPICEEpIg0GWIA0BtIhjDLQgagIgggMg");
    this.shape_500.setTransform(276.636,180.075);
    this.shape_501 = new cjs.Shape();
    this.shape_501.graphics.f("#1F2D34").s().p("AgBAAQAOghACABQABAAgOAhQgOAggBAAQgCgBAOggg");
    this.shape_501.setTransform(334.2449,130.8746);
    this.shape_502 = new cjs.Shape();
    this.shape_502.graphics.f("#1F2D34").s().p("AgLAIQgCgDANgFQALgJABACQABACgMAGQgJAHgDAAIAAAAg");
    this.shape_502.setTransform(335.2,134.95);
    this.shape_503 = new cjs.Shape();
    this.shape_503.graphics.f("#1F2D34").s().p("AAMAyQABgdgFgWQgFgbgJgWIgJgUIAEAFIAIAOQAJAUAGAdQAFAbgDAZQAAAJgCAGIgCAGg");
    this.shape_503.setTransform(355.705,133.2977);
    this.shape_504 = new cjs.Shape();
    this.shape_504.graphics.f("#1F2D34").s().p("ACGBHIhWgtIiChFIg2gcIA4AaQAwAYBSAsIBUAsIAChlIABgIIAAByg");
    this.shape_504.setTransform(317.75,124.675);
    this.shape_505 = new cjs.Shape();
    this.shape_505.graphics.f("#1F2D34").s().p("AAFAkQgMgcgSgcIgNgXIAFAFIALAQQATAdALAbIABACQANgbAJgYIAIgYIgBAHIgFASQgIAagOAdIgCAEg");
    this.shape_505.setTransform(335.2304,124.3981);
    this.shape_506 = new cjs.Shape();
    this.shape_506.graphics.f("#1F2D34").s().p("AgBAAQAAkrABgJQACAJAAErQAAEsgCAJQgBgJAAksg");
    this.shape_506.setTransform(357.375,175.4);
    this.shape_507 = new cjs.Shape();
    this.shape_507.graphics.f("#3F5963").s().p("AgbAPIAFg6IAXgKIAXAnIAEA/IgfAFg");
    this.shape_507.setTransform(333.75,129.9);
    this.shape_508 = new cjs.Shape();
    this.shape_508.graphics.f("#1F2D34").s().p("AAjAxQgHgegOgaQgPgcgUgUIgSgSIAGAEIAOAMQAVAVAPAcQAQAdAFAcQACAKAAAIQABAHgBAAg");
    this.shape_508.setTransform(284.8993,135.975);
    this.shape_509 = new cjs.Shape();
    this.shape_509.graphics.f("#3F5963").s().p("AhJFnQAGllgFiAQgDhCAIihIAHiVIAjgFIAjCsQAmDUAQDIQAKCCAACXIhHCXg");
    this.shape_509.setTransform(338.8,185.65);
    this.instance_4 = new lib.Group();
    this.instance_4.setTransform(319.95,127.25,1,1,0,0,0,13.4,8.1);
    this.instance_4.alpha = 0.3008;
    this.shape_510 = new cjs.Shape();
    this.shape_510.graphics.f("#E1E1E1").s().p("AgkgeIA0g7IAVBGIgtBtg");
    this.shape_510.setTransform(335.3,123.2);
    this.shape_511 = new cjs.Shape();
    this.shape_511.graphics.f("#E1E1E1").s().p("AiIgRIAXhiIAXAJQAgANAtAYQBGAmBQAiIgGBxg");
    this.shape_511.setTransform(317.875,119.775);
    this.shape_512 = new cjs.Shape();
    this.shape_512.graphics.f("#E1E1E1").s().p("ABJKrInThNIgMiJIAyl7IgKpLIDXhfIAYhdID6B3IA1g6IAWBBIA3ASICBDjIgBHhIAaGgIgbBCIjnAiQgTADgTAAQgTAAgTgDg");
    this.shape_512.setTransform(319.225,176.7125);
    this.shape_513 = new cjs.Shape();
    this.shape_513.graphics.f("#E1E1E1").s().p("AouCrQAQjiAQhmQANhZBXg2QAsgaApgKQImgrA0ADQAtACAuAaQA4AfAbAyQAhA+BpEfIjZAOIh+C7IoGhzIghBRIj7CBIAOjPg");
    this.shape_513.setTransform(320.325,158.9903);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.instance_4},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498}]}).to({state:[{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.instance_4},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498}]},900).wait(1));
    // kas_1
    this.shape_514 = new cjs.Shape();
    this.shape_514.graphics.f("#1F2D34").s().p("AgjAIQgDgDAKgGQALgHARgBQASAAALAHQALAFgEAEQgCACgKAAIgYgBIgWACIgGAAQgGAAgBgCg");
    this.shape_514.setTransform(337.0427,68.3643);
    this.timeline.addTween(cjs.Tween.get(this.shape_514).wait(18).to({y:72.0643},0).wait(16).to({y:68.5143},0).wait(60).to({y:71.4143},0).wait(9).to({y:68.5143},0).wait(27).to({y:72.4143},0).wait(17).to({y:68.5143},0).wait(29).to({y:72.6143},0).wait(11).to({y:68.2143},0).wait(713).to({y:65.4143},0).wait(1));
    // kas_2
    this.shape_515 = new cjs.Shape();
    this.shape_515.graphics.f("#1F2D34").s().p("AgkAIQgBgFAKgFQANgHAOAAQARAAALAHQAKAGgBADQgCADgLgBIgYgBIgYACIgDAAQgIAAgBgCg");
    this.shape_515.setTransform(320.9752,69.9292);
    this.timeline.addTween(cjs.Tween.get(this.shape_515).wait(18).to({y:73.6292},0).wait(16).to({y:70.0792},0).wait(60).to({y:72.9792},0).wait(9).to({y:70.0792},0).wait(27).to({y:73.9792},0).wait(17).to({y:70.0792},0).wait(29).to({y:74.1792},0).wait(11).to({y:69.7792},0).wait(713).to({y:66.9792},0).wait(1));
    // burun
    this.shape_516 = new cjs.Shape();
    this.shape_516.graphics.f("#1F2D34").s().p("AgOBKQAAgBAcgGQAJgBAAgEQABgDgEgKIgPgiQgmhWAEgCQADgCAmBXIAOAiQAFANgBAFQgDAGgFABIgHABIgaACIgDAAg");
    this.shape_516.setTransform(332.0027,80.1962);
    this.timeline.addTween(cjs.Tween.get(this.shape_516).wait(901));
    // göz_1
    this.shape_517 = new cjs.Shape();
    this.shape_517.graphics.f("#1F2D34").s().p("AgKANQgFgFgBgGQAAgGAEgFQAFgFAGgBQAGAAAGAEQAFAEAAAGQABAGgEAFQgFAFgHABIgBAAQgGAAgEgDg");
    this.shape_517.setTransform(321.0566,78.9822);
    this.timeline.addTween(cjs.Tween.get(this.shape_517).wait(18).to({scaleY:0.1111,y:78.7761},0).wait(16).to({scaleY:1,y:78.9846},0).wait(44).to({y:78.9822},0).wait(16).to({scaleY:0.1111,y:78.7761},0).wait(9).to({scaleY:1.2214,x:321.0468,y:78.9669},0).wait(27).to({scaleY:0.1111,x:321.0566,y:78.7761},0).wait(17).to({scaleY:1.2493,x:321.0468,y:79.026},0).wait(29).to({scaleY:0.1106,skewX:180,x:321.0517,y:78.7625},0).wait(11).to({scaleY:1.0546,x:321.0566,y:78.6033},0).wait(713).to({scaleY:1,skewX:0,y:78.9822},0).wait(1));
    // göz_2
    this.shape_518 = new cjs.Shape();
    this.shape_518.graphics.f("#1F2D34").s().p("AgKANQgFgFgBgGQAAgGAEgFQAFgFAHgBQAFAAAFAEQAGAEABAGQAAAGgFAFQgEAFgHABIgCAAQgFAAgEgDg");
    this.shape_518.setTransform(337.35,78.5322);
    this.timeline.addTween(cjs.Tween.get(this.shape_518).wait(18).to({scaleY:0.1111,y:78.7261},0).wait(16).to({scaleY:1,y:78.5346},0).wait(44).to({y:78.5322},0).wait(16).to({scaleY:0.1111,y:78.7261},0).wait(9).to({scaleY:1.2214,x:337.3397,y:78.4173},0).wait(27).to({scaleY:0.1111,x:337.35,y:78.7261},0).wait(17).to({scaleY:1.2493,x:337.3397,y:78.4638},0).wait(29).to({scaleY:0.1106,skewX:180,x:337.3449,y:78.8123},0).wait(11).to({scaleY:1.0546,x:337.35,y:79.0778},0).wait(713).to({scaleY:1,skewX:0,y:78.5322},0).wait(1));
    // Layer_28
    this.shape_519 = new cjs.Shape();
    this.shape_519.graphics.f("#1F2D34").s().p("AgLARQgPgLgEgQQgDgNAEgCIAGAMQAHANALAIQAKAHAPACIAMACQABADgNADIgHABQgNAAgLgJg");
    this.shape_519.setTransform(327.2593,91.8083);
    this.timeline.addTween(cjs.Tween.get(this.shape_519).wait(9).to({scaleX:0.999,scaleY:0.999,rotation:-29.9994,x:326.944,y:91.8652},0).wait(62).to({rotation:-51.9954,x:329.6073,y:91.9708},0).wait(44).to({scaleX:0.9989,scaleY:0.9989,rotation:-21.9943,x:329.7009,y:92.0046},0).wait(80).to({rotation:-36.9935,x:330.1266,y:93.1945},0).wait(705).to({scaleX:1,scaleY:1,rotation:0,x:327.2593,y:91.8083},0).wait(1));
    // KULAK_YENİ
    this.instance_5 = new lib.Sembol3("synched",0);
    this.instance_5.setTransform(302.95,87.1,1,1,0,0,0,5,6.7);
    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(901));
    // Head
    this.shape_520 = new cjs.Shape();
    this.shape_520.graphics.f("#3F5963").s().p("AhDBZQgNgCgKgKQgJgIgDgKQgMAGgNgCQgMgCgIgGQgGgEgDgFIgCgEIACAEQAEAFAGADQAKAGAJABQAOABALgGIACgBIAAABQADALAJAIQAJAJANACQAMACAMgKQAMgKAFgOIAAgCIACABQAOAEAKAAQANgBAKgIQAVgPABgZIABgEIACADQAJAJAOgCQAHgBAEgEIAIgJQAKgLADgHQAEgLgEgJIAAgCIACAAQAQAAAOgKQALgHAGgLQAEgIACgHIABgGIAAABIgBAFQgBAIgEAHQgGAMgKAIQgOAKgRABQAEAKgFAKQgDAJgJAKIgJAKQgEADgIACQgOADgKgIQgCAYgUAPQgNAJgNAAQgJABgOgEQgHAOgLAJQgKAKgLAAIgGgBg");
    this.shape_520.setTransform(314.0458,60.555);
    this.shape_521 = new cjs.Shape();
    this.shape_521.graphics.f("#1F2D34").s().p("AhOCBQgNgBgUgMQgFAGgJADQgLADgKgFQgJgFgEgLQgEgKAEgKQgLADgLgJQgKgJgBgMQAAgMAHgLQAHgKALgHQgIgNABgPQAAgQAJgMQAIgMAPgGQAPgGAOADQAGgQANgMQANgMAQgFQAQgEASADQARAEANALQAIgTATgLQATgLAUABQAUABASAOQARANAHATQAQgHASAEQASAFAKAOQAFAIgBAHQgCAGgHADQgHADgIgBIgPgBQgIAAgFADQgJAGgCAXQgCAVgOACQgDABgFgCIgJgCQgOgBgNAQQgIAKgKAIQgHAFgIgCQgIgBgFgGQgEASgQAPQgQAQgRgBQgPgBgDAFQgCADgBAFIAAAIQgBAJgJAGQgHAFgJAAIgCAAg");
    this.shape_521.setTransform(316.5895,57.4729);
    this.shape_522 = new cjs.Shape();
    this.shape_522.graphics.f("#744538").s().p("AAEAiQgHgBgHgKQgGgJgCgMQgBgMAEgKQAFgMAJgBQAEgBADACQADACAAADQAAABABABQAAABAAABQgBAAAAAAQAAABgBAAIgBgEQgDgFgEACQgGABgEAKQgDAKABAJQABALAFAJQAGAIAFACQAFABAGgCIADgDQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgEAEgFAAIgEgBg");
    this.shape_522.setTransform(302.79,87.4795);
    this.shape_523 = new cjs.Shape();
    this.shape_523.graphics.f("#B77864").s().p("AACA7QgngIgEgyQgFg2AugGQAMgCALAJQAKAIACANIAHBWQgMAFgNAAIgPgBg");
    this.shape_523.setTransform(302.4005,87.5014);
    this.shape_524 = new cjs.Shape();
    this.shape_524.graphics.f("#1F2D34").s().p("AiQDQQgIgIgGgkIgSgSQgRgSgEgbQgSh2APg2QAGgaAQgVQAOgUAbgXQBAg1B5AGQAxADAzAnQA7AuAAA+QgIgSgNgTQgbgogWgJQgXgKgcAQQgfASgTgFQg3gMgFAAQgjgDgaAWQgbAXAAAbQAAAQAGAtQgBCUgUA0QgGARgGAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBgBg");
    this.shape_524.setTransform(321.0515,68.2929);
    this.shape_525 = new cjs.Shape();
    this.shape_525.graphics.f("#744538").s().p("AgqAFQgQgLgLgOIgIgNQAzAcA4AHQAcADATgCIABAdQgQACgOAAQg0AAgmgdg");
    this.shape_525.setTransform(327.425,108.8825);
    this.shape_526 = new cjs.Shape();
    this.shape_526.graphics.f("#F9AC9D").s().p("AjTiCQgNhdAqhEQAshIBYgJIALgBQBTgEBBA2QBBA2ALBUQAbDGADBNQADBIg5ApQgSANgVAIIgSAGIARCLIkaAFg");
    this.shape_526.setTransform(324.6289,86.2112);
    this.shape_527 = new cjs.Shape();
    this.shape_527.graphics.f("#1F2D34").s().p("ABwB8IkEiOQgMgLgEgRQgDgRAHgPQAHgOAPgJQAPgIAPACQASgQAaAAQAagBASAOQAOgJAQgBQARgBAPAHQAPAHAKAOQAJAOACARQAQgEAQAHQARAIAIAOQAIAOgCASQgBAQgLANQASAFALARQALARgDASQgDATgQANQgOALgRAAIgEAAg");
    this.shape_527.setTransform(331.1988,54.5548);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520}]}).to({state:[{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520}]},900).wait(1));
    // Layer_12
    this.shape_528 = new cjs.Shape();
    this.shape_528.graphics.f("#E1E1E1").s().p("ABfGlQkFgogpgPQg4gVg4hhIgthdIgWplIAnAkQAuA1AiBTQBpEDBCCLIHjCZIgnDCQh6gRiDgVg");
    this.shape_528.setTransform(394.4,171.1);
    this.shape_529 = new cjs.Shape();
    this.shape_529.graphics.f("#F9AC9D").s().p("AiJBhIAgiiIA/AUIByhAIBCC1IicAmg");
    this.shape_529.setTransform(440.075,204.925);
    this.shape_530 = new cjs.Shape();
    this.shape_530.graphics.f("#B77864").s().p("AiJBhIAgiiIA/AUIByhAIBCC1IicAmg");
    this.shape_530.setTransform(440.075,204.925);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_529},{t:this.shape_528}]}).to({state:[{t:this.shape_530},{t:this.shape_528}]},900).wait(1));
    // legs
    this.shape_531 = new cjs.Shape();
    this.shape_531.graphics.f("#3F5963").s().p("AAbA+QgagTgTgfQgUgdgIgfIgEgVQgBgHABAAQABAAAHAbQALAhASAZQAQAbAbAXIAVASIAAAAQgDAAgVgPg");
    this.shape_531.setTransform(350.125,253.5063);
    this.shape_532 = new cjs.Shape();
    this.shape_532.graphics.f("#3F5963").s().p("Ag8AnQgMgBgJgDIgIgCQAAgBAeADQAmABAggNQAggNAbgaQANgNAHgKIgEAIQgDAHgKALQgYAbglAOQgbAMgfAAIgOgBg");
    this.shape_532.setTransform(284.7,249.5765);
    this.shape_533 = new cjs.Shape();
    this.shape_533.graphics.f("#3F5963").s().p("AgVBqQgEAAgCgDIgCgCIAJADQAMACAKgJQANgJACgYIADgwIAGhWIAEglQABAAgBAlQgBAfgDA3IgEAwQgDAagOAKQgJAIgJAAIgIgCg");
    this.shape_533.setTransform(319.375,258.9071);
    this.shape_534 = new cjs.Shape();
    this.shape_534.graphics.f("#1F2D34").s().p("AmcBwIBeuGIAjkGILxA9IAPBTQAOBogIBiQgDAmhnNVIhnNPIkUAAIBN4pIgWAGIhMFeQhPFqgIBEQgLBih/LHIj9ADg");
    this.shape_534.setTransform(309.0339,334.3);
    this.shape_535 = new cjs.Shape();
    this.shape_535.graphics.f("#FFFFFF").s().p("AgDAbIgBAAIgEAAQgOgDgJgLQgJgMAAgMQAAgHAFgFQAGgFAHADQAHAEAGAMQAEAIABAJQAGgIAIgFQAMgHAGgBQAJgBADAIQACAFgEAHQgHALgMAGQgKAEgJAAIgDAAgAAMgBQgJAEgGAIIAAAHIAAADQAJABAKgEQALgGAGgJQADgEgBgDQgCgEgFAAQgGAAgKAHgAgFAVIAAgDIgBgEIgBACIgEAEIAEABIACAAIAAAAgAgfgTQgDADAAAFQgBALAIAJQAHAHAIADIADgFIADgDQgCgKgFgIQgGgLgFgCIgDgBIgEACg");
    this.shape_535.setTransform(276.807,436.5916);
    this.shape_536 = new cjs.Shape();
    this.shape_536.graphics.f("#FFFFFF").s().p("AAaAEQgNgEgMgBQgMgCgNADIgMACQAAgCAKgEQAOgFANACQAPABAMAHQAKAGgCACg");
    this.shape_536.setTransform(276.2098,441.1733);
    this.shape_537 = new cjs.Shape();
    this.shape_537.graphics.f("#FFFFFF").s().p("AAZAEQgOgDgLAAQgKgBgOADQgLACAAgBQgBgCALgCQANgFAMABQAOAAAMAEQALAEgCABIAAAAIgKgBg");
    this.shape_537.setTransform(275.65,448.9775);
    this.shape_538 = new cjs.Shape();
    this.shape_538.graphics.f("#FFFFFF").s().p("AgmAOQgCgBAKgIQAMgJAPgFQAOgFAQABQANABgBACIgMABQgQACgMAEQgNADgNAIIgLAGIAAAAg");
    this.shape_538.setTransform(275.9599,456.2935);
    this.shape_539 = new cjs.Shape();
    this.shape_539.graphics.f("#FFFFFF").s().p("AgZAJQgBgCAHgFQAIgGAKgCQAKgDAKADQAIACgBACIgIAAQgKgBgIACQgIABgJAFIgIAEIAAAAg");
    this.shape_539.setTransform(279.642,465.5403);
    this.shape_540 = new cjs.Shape();
    this.shape_540.graphics.f("#FFFFFF").s().p("AgYAFQAHgKANgFQALgFANACQALADgCACIgKAAQgMAAgJAEQgKAEgIAHIgHAHQgDAAAGgJg");
    this.shape_540.setTransform(278.1786,461.1714);
    this.instance_6 = new lib.Group_6();
    this.instance_6.setTransform(265.85,443.05,1,1,0,0,0,1.6,1.6);
    this.instance_6.alpha = 0.6016;
    this.shape_541 = new cjs.Shape();
    this.shape_541.graphics.f("#3F5963").s().p("ABNByQh2iCgzhEQgJgMABgPIABgMIDJD2IgEABQgOAAgHgKg");
    this.shape_541.setTransform(270.6987,462.6094);
    this.shape_542 = new cjs.Shape();
    this.shape_542.graphics.f("#1F2D34").s().p("ABBD+Qg2g6gyg8QhMhZACgNQADgXADkIIDIgJIgXEPIArDdQADAMgIAKQgHAKgMABIgDAAQgMAAgJgJg");
    this.shape_542.setTransform(271.9048,448.6344);
    this.shape_543 = new cjs.Shape();
    this.shape_543.graphics.f("#FFFFFF").s().p("AgWAFQgBgCAHgDQAHgEAJAAQAJgBAIAEQAHACgBABQgBABgGAAIgQgBIgPACIgFABIgCAAg");
    this.shape_543.setTransform(332.1246,442.3169);
    this.shape_544 = new cjs.Shape();
    this.shape_544.graphics.f("#FFFFFF").s().p("AgJAMQAAgIADgGQAEgIAFgFQAGgEABACQABACgLAPIgEANQgBAGgBAAIgBAAQgBAAgBgHg");
    this.shape_544.setTransform(342.726,453.2933);
    this.shape_545 = new cjs.Shape();
    this.shape_545.graphics.f("#FFFFFF").s().p("AgOAKQACgJAGgGQAGgHAHgDQAHgCABACIgFAFQgIAFgDAFQgEAEgDAHQgDAGgBAAIAAAAQgDAAABgHg");
    this.shape_545.setTransform(337.9107,451.2391);
    this.shape_546 = new cjs.Shape();
    this.shape_546.graphics.f("#FFFFFF").s().p("AgTANQABgNANgHQAIgFAJAAQAIgBAAADQAAABgHACQgJADgFADQgFADgHAHQgEAEgCAAIAAAAg");
    this.shape_546.setTransform(332.8265,448.8731);
    this.shape_547 = new cjs.Shape();
    this.shape_547.graphics.f("#3F5963").s().p("AjaARIABgiIGjAOIAJAFQAKAIgCAIg");
    this.shape_547.setTransform(335.0852,458.775);
    this.shape_548 = new cjs.Shape();
    this.shape_548.graphics.f("#E1E1E1").s().p("AgIAOQgGgDgCgHQgBgFADgGQADgGAGgCQAFgDAHAEQAHAEACAGQACAFgEAHQgEAHgHACIgDAAQgEAAgEgDg");
    this.shape_548.setTransform(320.9608,447.6312);
    this.shape_549 = new cjs.Shape();
    this.shape_549.graphics.f("#1F2D34").s().p("AjaCwIgBlgIDbABIgJDhIBxAwQByA1ACAag");
    this.shape_549.setTransform(335.025,442.925);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.instance_6},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531}]}).to({state:[{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.instance_6},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531}]},900).wait(1));
    // frane
    this.shape_550 = new cjs.Shape();
    this.shape_550.graphics.f("#1F2D34").s().p("AwfX6QgagEgTgUQgSgVAAgcMAAAgtLQAAgcABgGQADgSAKgOQAKgOARgIQAQgIARAAMAgtAAAQAgACAUAYQAUAXgCAhMgACAtgQgDAZgQAQQgMAOgPAFQgFADgJABIAOgEQAQgHALgMQAPgRADgYIgBkxMgABgovQACgggSgVQgUgXgdgBMggtAAAQgQAAgPAHQgPAIgKANQgJAMgDASQgCAKABAXMgABAtLQAAAaARAUQASATAYAEIAZABMAgaAACMggaAACQgUAAgFgBg");
    this.shape_550.setTransform(183.9639,178.025);
    this.shape_551 = new cjs.Shape();
    this.shape_551.graphics.f("#FFFFFF").s().p("AwUX5QgeAAgUgVQgWgWAAgdMAAAgthQAAgeAWgVQAUgVAeAAMAgoAAAQAfAAAUAVQAWAVgBAeMAAAAthQABAdgWAWQgUAVgfAAg");
    this.shape_551.setTransform(183.95,178.05);
    this.shape_552 = new cjs.Shape();
    this.shape_552.graphics.f("#F5F5F5").s().p("AwTX5QgfAAgVgVQgVgVABgeMAAAgthQgBgdAVgWQAVgVAfAAMAgoAAAQAeAAAUAVQAWAWAAAdMAAAAthQAAAegWAVQgUAVgeAAg");
    this.shape_552.setTransform(173.9,191.5);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_552},{t:this.shape_551},{t:this.shape_550}]}).to({state:[{t:this.shape_552},{t:this.shape_551},{t:this.shape_550}]},900).wait(1));
    // box_2
    this.shape_553 = new cjs.Shape();
    this.shape_553.graphics.f("#FFFFFF").s().p("AiZgCIAsgrIBTBJICMiMIAoAsIi6C0g");
    this.shape_553.setTransform(160.7,439.95);
    this.shape_554 = new cjs.Shape();
    this.shape_554.graphics.f("#3F5963").s().p("AiFDZQgiAAgZgZQgYgYAAgiIAAkLQAAgjAYgYQAZgXAiAAIELAAQAjAAAYAXQAYAYAAAjIAAELQAAAigYAYQgYAZgjAAg");
    this.shape_554.setTransform(160.2,439.05);
    this.shape_555 = new cjs.Shape();
    this.shape_555.graphics.f("#1F2D34").s().p("AiGDZQghAAgYgZQgZgYAAgiIAAkLQAAgiAZgZQAYgXAhAAIEMAAQAiAAAZAXQAXAYAAAjIAAELQAAAigXAYQgZAZgiAAg");
    this.shape_555.setTransform(168,439.05);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_555},{t:this.shape_554},{t:this.shape_553}]},42).to({state:[{t:this.shape_555},{t:this.shape_554},{t:this.shape_553}]},858).wait(1));
    // box_3
    this.shape_556 = new cjs.Shape();
    this.shape_556.graphics.f("#FFFFFF").s().p("AjwgEIBEhDICEB0IDajcIA/BEIkjEbg");
    this.shape_556.setTransform(113.925,428.25);
    this.shape_557 = new cjs.Shape();
    this.shape_557.graphics.f("#EE7B65").s().p("AjMFTQg3gBgngmQgngnAAg4IAAmaQAAg3AngnQAngmA3AAIGZAAQA3AAAnAmQAnAnAAA3IAAGaQAAA4gnAnQgnAmg3ABg");
    this.shape_557.setTransform(113.175,426.85);
    this.instance_7 = new lib.Group_2_1();
    this.instance_7.setTransform(125.4,426.9,1,1,0,0,0,33.9,33.9);
    this.instance_7.alpha = 0.3008;
    this.shape_558 = new cjs.Shape();
    this.shape_558.graphics.f("#EE7B65").s().p("AjNFTQg3gBgmgmQgngnAAg4IAAmaQAAg3AngnQAmgmA3AAIGaAAQA3AAAoAmQAmAnABA3IAAGaQgBA4gmAnQgoAmg3ABg");
    this.shape_558.setTransform(125.35,426.85);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_558},{t:this.instance_7},{t:this.shape_557},{t:this.shape_556}]},28).to({state:[{t:this.shape_558},{t:this.instance_7},{t:this.shape_557},{t:this.shape_556}]},872).wait(1));
    // flower
    this.shape_559 = new cjs.Shape();
    this.shape_559.graphics.f("#1F2D34").s().p("AjoAAQAJgBDfAAQDpAAAAABQAAACjpAAQjgAAgIgCg");
    this.shape_559.setTransform(410.1125,436.725);
    this.shape_560 = new cjs.Shape();
    this.shape_560.graphics.f("#EE7B65").s().p("AicB/Igoj9IGJAAIgvD9g");
    this.shape_560.setTransform(410.3,447.825);
    this.shape_561 = new cjs.Shape();
    this.shape_561.graphics.f("#EE7B65").s().p("AjmApIAAhRIHNAAIAABRg");
    this.shape_561.setTransform(410.3,432.6);
    this.shape_562 = new cjs.Shape();
    this.shape_562.graphics.f("#3F5963").s().p("ABNB6IjGkoQBEAOA4AqQA5ArAhA9QAZAxAEAvQADA4gXAlg");
    this.shape_562.setTransform(392.7231,361.875);
    this.shape_563 = new cjs.Shape();
    this.shape_563.graphics.f("#1F2D34").s().p("AAcBVIgEgUQgGgggLgiQgHgYgRgoIgJgTIgDgIIAOAaQAPAgAKAgQAKAfAGAjIAEAdIgCgIg");
    this.shape_563.setTransform(402.5714,381.025);
    this.shape_564 = new cjs.Shape();
    this.shape_564.graphics.f("#1F2D34").s().p("Ah0B/QACgRAJgXQAHgWARgjIARggQAHgOAQgRQAXgXAjgZQAZgTAbgOQASgLATgJIAKgFQABAAABgBQAAAAABAAQAAgBAAAAQAAAAAAABIgxAbQgcARgYARQgiAZgWAXQgQARgIAOIgQAfQgPAdgKAbQgJAYgDAQIgDAPg");
    this.shape_564.setTransform(418.55,377.4857);
    this.shape_565 = new cjs.Shape();
    this.shape_565.graphics.f("#1F2D34").s().p("AhGAiQAEgLAFgHQAGgLALgLQAOgOAPgHQAbgPAjADIALACIAPAEIgagDQgigDgbAPQgNAGgPAOQgKAKgHALQgJAOgEAKg");
    this.shape_565.setTransform(414.275,394.4919);
    this.shape_566 = new cjs.Shape();
    this.shape_566.graphics.f("#1F2D34").s().p("ACQB3IgfgrQgPgWgYgaQgZgcgdgYQgzgsg+geIgWgKIgbgLIgDgCIADABIAcAKIAWAKQA8AbA3AvQAgAcAWAYQAXAbAPAVIAXAjIAIANg");
    this.shape_566.setTransform(393.025,398);
    this.shape_567 = new cjs.Shape();
    this.shape_567.graphics.f("#1F2D34").s().p("AApAfQgMgVgUgSQgTgTgVgMIgUgJIAGABIAPAGQAWAMATATQAVASALAWIAHAOIACAGg");
    this.shape_567.setTransform(403.225,417.995);
    this.shape_568 = new cjs.Shape();
    this.shape_568.graphics.f("#1F2D34").s().p("AA1gGQghgOgVgFQghgIgYAGIgYAIQgKAEgJAGQgNAIgMALIgIAJIABgDIAGgHQALgMANgIQAOgIAGgDQALgEANgDQAagHAhAIQAVAFAhAOIAXAKIA4AfIACACg");
    this.shape_568.setTransform(421.15,414.0867);
    this.shape_569 = new cjs.Shape();
    this.shape_569.graphics.f("#3F5963").s().p("AivA2QAOgVAhgdQAYgUAjgTQAXgNAqgTQBBgdAegIQA6gQAtAKQgxAIhAAtIgyAnQgeAVgVAMQgMAGgfAUQgaARgRAHQggAPg2AjQgDggAUgdg");
    this.shape_569.setTransform(430.0361,368.1445);
    this.instance_8 = new lib.Group_8();
    this.instance_8.setTransform(385.05,392.5,1,1,0,0,0,16.6,10.5);
    this.instance_8.alpha = 0.3008;
    this.shape_570 = new cjs.Shape();
    this.shape_570.graphics.f("#3F5963").s().p("AimhnQBSgBAgAEQA/AIAlAfQA8AzAbAiQAhAsgCAkQiSh2i6hZg");
    this.shape_570.setTransform(385.1056,392.4545);
    this.shape_571 = new cjs.Shape();
    this.shape_571.graphics.f("#3F5963").s().p("AABAeQhRgMg7AWQAEgoAbgeQAOgQAUgKQATgKAVgBQAggCAiAVQAVANAjAeQAXATAKANQARAVADAUQhegfgugHg");
    this.shape_571.setTransform(422.25,392.0699);
    this.shape_572 = new cjs.Shape();
    this.shape_572.graphics.f("#3F5963").s().p("AAAAHQhcgngqgCQBJgYBPAVQBVAXAhA9QgugBhagng");
    this.shape_572.setTransform(391.15,412.71);
    this.shape_573 = new cjs.Shape();
    this.shape_573.graphics.f("#3F5963").s().p("ABnAqQgwgNgXgIQgcgKhFglQg8gigogIIACgDQAmgKA+AWQBeAgBVA0QAoAZAKAZQgXgUgogNg");
    this.shape_573.setTransform(431.55,418.0163);
    this.instance_9 = new lib.Group_13();
    this.instance_9.setTransform(403.85,348.25,1,1,0,0,0,8.9,18.9);
    this.instance_9.alpha = 0.3008;
    this.shape_574 = new cjs.Shape();
    this.shape_574.graphics.f("#1F2D34").s().p("AAZClIgBguQgDg7gLg8QgHgqgRhMIgLgyIABAEIADAKIAJAjQAPA8AKA6QAMBDABA1QABAXgBANIAAAKIgBAEg");
    this.shape_574.setTransform(404.325,350.4);
    this.shape_575 = new cjs.Shape();
    this.shape_575.graphics.f("#3F5963").s().p("Ag2BqQgfgzgDg+QgBgnAKgvQAIgiASgwQAFgKAEgCQAHgEAMAHQBHApAdBnQAUBBgIA2QgDAdgQAfQgQAdgWAVQg0gdggg2g");
    this.shape_575.setTransform(403.8448,348.3023);
    this.shape_576 = new cjs.Shape();
    this.shape_576.graphics.f("#1F2D34").s().p("AgnB1QAKg9AQg7QARg/AWg2IATgsIACgDIgCADIgRAtQgXA+gPA3QgQA7gLA8IgIAvIgBAEg");
    this.shape_576.setTransform(414.925,334.325);
    this.shape_577 = new cjs.Shape();
    this.shape_577.graphics.f("#3F5963").s().p("AhrgiQAag9AcgtQAphCAlgNQAcgKAOAKQAKAGAIATQAmBhgaBtQgdB5hiBcg");
    this.shape_577.setTransform(413.324,338.55);
    this.shape_578 = new cjs.Shape();
    this.shape_578.graphics.f("#1F2D34").s().p("AACGUQgJhIgKhcQgUi5AChoQAChogBiHIgBhzIATAAIgEC/QgDDWAIB9QAJB8AWBZQALAsAJAUg");
    this.shape_578.setTransform(409.1,391.675);
    this.shape_579 = new cjs.Shape();
    this.shape_579.graphics.f("#1F2D34").s().p("ACQB3IgfgrQgPgWgYgaQgZgcgdgYQgzgsg+geIgWgKIgbgLIgDgCIAfALIAWAKQA8AbA3AvQAgAcAWAYQAXAbAPAVIAXAjIAIANg");
    this.shape_579.setTransform(393.025,398);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.instance_9},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.instance_8},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559}]}).to({state:[{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.instance_9},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.instance_8},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_579},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559}]},900).wait(1));
    // floor
    this.shape_580 = new cjs.Shape();
    this.shape_580.graphics.f("#1F2D34").s().p("AzXAAQDcgBD7gBQfYABAAABQAAAD/YAAQj7AAjcgDg");
    this.shape_580.setTransform(325.65,460.7);
    this.timeline.addTween(cjs.Tween.get(this.shape_580).wait(901));
    // box_4
    this.shape_581 = new cjs.Shape();
    this.shape_581.graphics.f("#FFFFFF").s().p("AjPgCIA6g8IByBkIC8i9IA3A7Ij8D0g");
    this.shape_581.setTransform(68.1308,433.8796,0.6398,0.6398);
    this.shape_582 = new cjs.Shape();
    this.shape_582.graphics.f("#ECECEC").s().p("AieEkQg3AAgngnQgngnAAg3IAAk9QAAg3AngnQAngnA3AAIE9AAQA3AAAnAnQAnAnAAA3IAAE9QAAA3gnAnQgnAng3AAg");
    this.shape_582.setTransform(67.711,433.1911,0.64,0.64);
    this.shape_583 = new cjs.Shape();
    this.shape_583.graphics.f("#E1E1E1").s().p("AieEkQg3AAgngnQgngnAAg3IAAk9QAAg3AngnQAngnA3AAIE9AAQA3AAAnAnQAnAnAAA3IAAE9QAAA3gnAnQgnAng3AAg");
    this.shape_583.setTransform(74.4308,433.1911,0.64,0.64);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_583,p:{scaleX:0.64,scaleY:0.64,x:74.4308,y:433.1911}},{t:this.shape_582,p:{scaleX:0.64,scaleY:0.64,x:67.711,y:433.1911}},{t:this.shape_581,p:{scaleX:0.6398,scaleY:0.6398,x:68.1308,y:433.8796}}]}).to({state:[{t:this.shape_583,p:{scaleX:0.64,scaleY:0.64,x:74.4308,y:433.1911}},{t:this.shape_582,p:{scaleX:0.64,scaleY:0.64,x:67.711,y:433.1911}},{t:this.shape_581,p:{scaleX:0.6398,scaleY:0.6398,x:68.1308,y:433.8796}}]},9).to({state:[{t:this.shape_583,p:{scaleX:0.9832,scaleY:0.9832,x:76.217,y:433.2157}},{t:this.shape_582,p:{scaleX:0.9832,scaleY:0.9832,x:65.8936,y:433.2157}},{t:this.shape_581,p:{scaleX:0.9829,scaleY:0.9829,x:66.539,y:434.2762}}]},6).to({state:[{t:this.shape_583,p:{scaleX:0.9832,scaleY:0.9832,x:76.217,y:433.2157}},{t:this.shape_582,p:{scaleX:0.9832,scaleY:0.9832,x:65.8936,y:433.2157}},{t:this.shape_581,p:{scaleX:0.9829,scaleY:0.9829,x:66.539,y:434.2762}}]},885).wait(1));
    // box_1
    this.shape_584 = new cjs.Shape();
    this.shape_584.graphics.f("#FFFFFF").s().p("AkLgEIBLhLICTCBIDzj1IBGBMIlEE7g");
    this.shape_584.setTransform(229.05,427.025);
    this.shape_585 = new cjs.Shape();
    this.shape_585.graphics.f("#ECECEC").s().p("AjzF5Qg3AAgngnQgngnAAg3IAAnmQAAg3AngoQAngnA3AAIHmAAQA3AAAoAnQAnAoAAA3IAAHmQAAA3gnAnQgoAng3AAg");
    this.shape_585.setTransform(228.225,425.475);
    this.shape_586 = new cjs.Shape();
    this.shape_586.graphics.f("#E1E1E1").s().p("AjyF5Qg4AAgngnQgngnABg3IAAnmQgBg3AngoQAngnA4AAIHmAAQA2AAAnAnQAnAoAAA3IAAHmQAAA3gnAnQgnAng2AAg");
    this.shape_586.setTransform(241.75,425.475);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_586},{t:this.shape_585},{t:this.shape_584}]},55).to({state:[{t:this.shape_586},{t:this.shape_585},{t:this.shape_584}]},845).wait(1));
    // hand_2
    this.shape_587 = new cjs.Shape();
    this.shape_587.graphics.f("#FFFFFF").s().p("AADAMQgFgCgDgGQgDgEABgHIACgFIgBAFQAAAHACADQADAFAEADIAFABg");
    this.shape_587.setTransform(398.3625,287.65);
    this.shape_588 = new cjs.Shape();
    this.shape_588.graphics.f("#FFFFFF").s().p("AACAPIgDgFIgCgIIgBgHIABgHIACgEIABgCIgDANIABAHIACAHIACAGIADAEg");
    this.shape_588.setTransform(393.875,280.8);
    this.shape_589 = new cjs.Shape();
    this.shape_589.graphics.f("#FFFFFF").s().p("AgKAWQgJgEgEgKQgDgJAEgJQAFgJAJgDQAJgEAKAEQAJAEADALQAEAIgEAKQgFAJgKADIgIACQgEAAgGgDg");
    this.shape_589.setTransform(428.1051,265.05);
    this.shape_590 = new cjs.Shape();
    this.shape_590.graphics.f("#ECECEC").s().p("AhrhoIB9gtIBbD/Ih9Asg");
    this.shape_590.setTransform(430.05,272.15);
    this.shape_591 = new cjs.Shape();
    this.shape_591.graphics.f("#ECECEC").s().p("AgrBLQgOgRgKgPQgUgcgIghQgGgZANgVQALgTARgFQAGgCAHADQAHADACAHIAKAaIALARQAOAUANANQAVAQAjANQASAGAOADIiFA0g");
    this.shape_591.setTransform(407.2553,258.81);
    this.shape_592 = new cjs.Shape();
    this.shape_592.graphics.f("#ECECEC").s().p("AgzClQgRgFgIgYQgCgFgBgGQAAgLAJgHQgKACgLgCQgWgEgHgRQgHgQAHgLQADgGAFgDQgJADgKgCQgUgCgIgTQgIgSAFgMIAGgHQgKADgLgCQgWgDgFgWQgGgWAPgOQAHgGAJgDIDwhVQAUgHAUAFQAUAFAOAQIALANIA9CsQgSAqgsAQIi0BAIgHABIgJgBg");
    this.shape_592.setTransform(408.7494,279.1583);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587}]}).to({state:[{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587}]},900).wait(1));
    // hand__1
    this.shape_593 = new cjs.Shape();
    this.shape_593.graphics.f("#FFFFFF").s().p("AgHAiIgBgQIABgTQABgKADgJIAFgOIADgGIAEgHIgBADIgDAEIgHAVIgEATIgBASIADAeg");
    this.shape_593.setTransform(426.725,35.725);
    this.shape_594 = new cjs.Shape();
    this.shape_594.graphics.f("#FFFFFF").s().p("AAAANQgCgFAAgIQgBgGADgGQACgFACABIgEAFQAAAEgBAHQgBAFACAHIACAFg");
    this.shape_594.setTransform(405.15,48.1667);
    this.shape_595 = new cjs.Shape();
    this.shape_595.graphics.f("#FFFFFF").s().p("AgIAQIAAgIIACgJIAEgJIAFgHIAEgEIACgBIgGAGIgDAGIgFAJIgBAJIgBAIIABAHg");
    this.shape_595.setTransform(407,56.55);
    this.shape_596 = new cjs.Shape();
    this.shape_596.graphics.f("#E1E1E1").s().p("AAAABQglgGABgBIAkAGIAkAHIgBAAQgFAAgegGg");
    this.shape_596.setTransform(410.8536,53.6857);
    this.shape_597 = new cjs.Shape();
    this.shape_597.graphics.f("#E1E1E1").s().p("AAAABQgZgEAAgBIAZAEQAaAEAAABIAAAAIgagEg");
    this.shape_597.setTransform(410.8,62.825);
    this.shape_598 = new cjs.Shape();
    this.shape_598.graphics.f("#FFFFFF").s().p("AgFAfQgNgCgHgLQgIgLADgMQACgNALgHQALgIAMADQAMACAIALQAHALgCAMQgCANgLAHQgIAGgKAAIgFgBg");
    this.shape_598.setTransform(454.3,60.725);
    this.shape_599 = new cjs.Shape();
    this.shape_599.graphics.f("#E1E1E1").s().p("AAAAAIAQhTIgPBTIgQBUg");
    this.shape_599.setTransform(443.625,68.225);
    this.shape_600 = new cjs.Shape();
    this.shape_600.graphics.f("#ECECEC").s().p("AhxCaIA+lRIClAeIg+FRg");
    this.shape_600.setTransform(451.925,69.75);
    this.shape_601 = new cjs.Shape();
    this.shape_601.graphics.f("#ECECEC").s().p("AhUBcIgBgVQgEgbgCgWQgEgrAMgqQAKgfAbgQQAYgNAWAFQAIADAFAHQAFAHgCAJIgFAjIABAaQADAeAIAWQALAgAfAlQAPASANAMg");
    this.shape_601.setTransform(434.4355,39.0056);
    this.shape_602 = new cjs.Shape();
    this.shape_602.graphics.f("#ECECEC").s().p("ABODHIjtgsQgKgCgIgIQgQgRAGgeIAEgNQAHgOANgBQgLgEgLgKQgWgSADgWQADgVAPgJQAHgEAHAAQgLgDgKgIQgVgPADgZQADgZAMgKQAHgFAGAAQgNgDgLgJQgWgRAIgcQAIgcAZgFQAMgDALADIE8A6QAaAFATATQATASAFAaIAFAWIgrDiQgWARgcAGQgPAEgPAAQgMAAgMgDg");
    this.shape_602.setTransform(425.9451,64.1761);
    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593}]}).to({state:[{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593}]},225).to({state:[{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593}]},675).wait(1));
    this._renderFirstFrame();
}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(287.2,84.9,245.2,390.1);
// library properties:
lib.properties = {
    id: '92115BFE2BD84F438221EE916AC245BF',
    width: 500,
    height: 700,
    fps: 30,
    color: "#FFFFFF",
    opacity: 1.00,
    manifest: [],
    preloads: []
};
// bootstrap callback support:
(lib.Stage = function(canvas) {
    createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();
p.setAutoPlay = function(autoPlay) {
    this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
    an.bootstrapListeners=[];
}
an.bootstrapCallback=function(fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if(an.bootcompsLoaded.length > 0) {
        for(var i=0; i<an.bootcompsLoaded.length; ++i) {
            fnCallback(an.bootcompsLoaded[i]);
        }
    }
};
an.compositions = an.compositions || {};
an.compositions['92115BFE2BD84F438221EE916AC245BF'] = {
    getStage: function() { return exportRoot.stage; },
    getLibrary: function() { return lib; },
    getSpriteSheet: function() { return ss; },
    getImages: function() { return img; }
};
an.compositionLoaded = function(id) {
    an.bootcompsLoaded.push(id);
    for(var j=0; j<an.bootstrapListeners.length; j++) {
        an.bootstrapListeners[j](id);
    }
}
an.getComposition = function(id) {
    return an.compositions[id];
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
    var lastW, lastH, lastS=1;		
    window.addEventListener('resize', resizeCanvas);		
    resizeCanvas();		
    function resizeCanvas() {			
        var w = lib.properties.width, h = lib.properties.height;			
        var iw = window.innerWidth, ih=window.innerHeight;			
        var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
        if(isResp) {                
            if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
                sRatio = lastS;                
            }				
            else if(!isScale) {					
                if(iw<w || ih<h)						
                    sRatio = Math.min(xRatio, yRatio);				
            }				
            else if(scaleType==1) {					
                sRatio = Math.min(xRatio, yRatio);				
            }				
            else if(scaleType==2) {					
                sRatio = Math.max(xRatio, yRatio);				
            }			
        }
        domContainers[0].width = w * pRatio * sRatio;			
        domContainers[0].height = h * pRatio * sRatio;
        domContainers.forEach(function(container) {				
            container.style.width = w * sRatio + 'px';				
            container.style.height = h * sRatio + 'px';			
        });
        stage.scaleX = pRatio*sRatio;			
        stage.scaleY = pRatio*sRatio;
        lastW = iw; lastH = ih; lastS = sRatio;            
        stage.tickOnUpdate = false;            
        stage.update();            
        stage.tickOnUpdate = true;		
    }
}
an.handleSoundStreamOnTick = function(event) {
    if(!event.paused){
        var stageChild = stage.getChildAt(0);
        if(!stageChild.paused || stageChild.ignorePause){
            stageChild.syncStreamSounds();
        }
    }
}
an.handleFilterCache = function(event) {
    if(!event.paused){
        var target = event.target;
        if(target){
            if(target.filterCacheList){
                for(var index = 0; index < target.filterCacheList.length ; index++){
                    var cacheInst = target.filterCacheList[index];
                    if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
                        cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
                    }
                }
            }
        }
    }
}
})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;



var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    var comp=AdobeAn.getComposition("92115BFE2BD84F438221EE916AC245BF");
    var lib=comp.getLibrary();
    handleComplete({},comp);
}
function handleComplete(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    var preloaderDiv = document.getElementById("_preload_div_");
    preloaderDiv.style.display = 'none';
    canvas.style.display = 'block';
    exportRoot = new lib.AnimateİlkAdım();
    exportRoot.addEventListener("tick", AdobeAn.handleFilterCache);
    stage = new lib.Stage(canvas);	
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        stage.addChild(exportRoot);
        createjs.Ticker.framerate = lib.properties.fps;
        createjs.Ticker.addEventListener("tick", stage);
    }	    
    //Code to support hidpi screens and responsive scaling.
    AdobeAn.makeResponsive(true,'both',true,1,[canvas,preloaderDiv,anim_container,dom_overlay_container]);	
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}


/***Canvas JS Alanı Sonu***/





