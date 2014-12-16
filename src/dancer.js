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

    setTimeout(this.pause.bind(this),this.timeBetweenSteps);

  }
};

makeDancer.prototype.pause = function(){
  var move = this.$node.attr('class').split(' ');
  if(move.indexOf('move') === -1){
    setTimeout(this.pause.bind(this), this.timeBetweenSteps);
  } else{
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
  this.setPosition(this.$node.css('top'), 0);

};


