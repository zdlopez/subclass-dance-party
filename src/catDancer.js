var makeCatDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);

  //this.$node = $('<span class="dancer"><img src="download.jpeg"></img></span>');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.step();
  //this.$node = $('<span class="move dancer cat"></span>');
};

makeCatDancer.prototype = Object.create(makeDancer.prototype);
makeCatDancer.prototype.constructor = makeCatDancer;

makeCatDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //console.log(this);
   var styleSettings = {
    'border' : 'none',
    'background-image': 'url("cat.jpeg")',
    'background-repeat': 'no-repeat',
    'background-size': 'contain',
    //'background-size' : '1000px 1000px',
    //'border-color': 'transparent',
    //'border-radius' : '0px',
    'height' : '50px',
    'width' : '50px'

  };


  this.$node.css(styleSettings);

  this.$node.toggleClass('rotateRight');
};


