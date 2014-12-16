var makeMovingDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.step();
};

makeMovingDancer.prototype = Object.create(makeDancer.prototype);
makeMovingDancer.prototype.constructor = makeMovingDancer;

makeMovingDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //console.log(this);
  var top  = $("body").height() * Math.random();
  var left = $("body").width() * Math.random();
  this.$node.css('border-color','blue');
   var styleSettings = {
    top: top,
    left: left
  };
  var move = this.$node.attr('class').split(' ');
  if(move.indexOf('move') === -1){
    styleSettings.left = 0;
  }
  this.$node.animate(styleSettings, this.timeBetweenSteps);
};


