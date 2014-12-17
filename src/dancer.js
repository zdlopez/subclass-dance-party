// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="move dancer"></span>');

  this.step();
  this.timeBetweenSteps = timeBetweenSteps;

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

  this.setPosition(top, left);
};

makeDancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var move = this.$node.attr('class').split(' ');

  if(move.indexOf('move') >= 0 ){
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  } else{
    this.$node.stop(true);
    setTimeout(this.pause.bind(this),this.timeBetweenSteps);
  }
};

makeDancer.prototype.pause = function(){
  var height = $("body").height()-100;
  var length = $("body").width()-100;
  var ul = {top:0, left:0};
  var ur = {top:0, left:length};
  var br = {top:height, left:length};
  var bl = {top:height, left:0};

  var move = this.$node.attr('class').split(' ');
  if(move.indexOf('move') === -1){
    this.$node.toggleClass('spin');
      this.$node.animate(ul,2000);
      this.$node.animate(ur,2000);
      this.$node.animate(br,2000);
      this.$node.animate(bl,2000);

      var stop = setTimeout(this.pause.bind(this), 2000);
    } else{
    this.$node.stop(true);
    clearTimeout(stop);
    this.$node.removeClass('spin');
    var top = $("body").height() * Math.random();
    var left = $("body").width() * Math.random();
    var styleAnimate = {
      top: top,
      left: left
    };
    this.$node.animate(styleAnimate, this.timeBetweenSteps);
    setTimeout(this.step.bind(this),this.timeBetweenSteps);

  }
};

makeDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineup = function(){


  this.$node.toggleClass('move');
  //console.log(this.$node.attr('class'));
  this.setPosition(0, 0);

};


