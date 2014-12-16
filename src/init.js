$(document).ready(function(){
  window.dancers = [];
  window.allDogs = [];
  window.allCats = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $(".dancefloor").append(dancer.$node);

    if(dancer instanceof makeDogDancer){
      window.allDogs.push(dancer);
    }
    if(dancer instanceof makeCatDancer){
      window.allCats.push(dancer);
    }
    runAway();
  });

  $(".lineup").on("click", function(event){
    var msg = $('.lineup').text();
    if(msg === 'line everyone up'){
      $('.lineup').text('make them dance');
    } else {
      $('.lineup').text('line everyone up');
    }
    for(var i = 0; i<window.dancers.length; i++){
      window.dancers[i].lineup();
    }
    console.log('test');
    setTimeout(runAway,1000);
  });

  $(".dancefloor").on("mouseover",'span',function(event){
    // console.log(event);
    console.log(this);
    var transform = {'transform':'rotate(360deg)'};
    $(this).fadeOut();//{'transform':'rotate(360deg)'});

  });

  $(".dancefloor").on("mouseleave",'span',function(event){
    // console.log(event);
    console.log(this);
    var transform = {'transform':'rotate(360deg)'};
    $(this).fadeIn();//{'transform':'rotate(360deg)'});

  });


  var runAway = function(){
    for(var i=0;i<window.allCats.length;i++){
      var catPosition = window.allCats[i].$node.offset();
      var closestDogs = [];
      for(var j=0;j<window.allDogs.length;j++){
        var dogPosition = window.allDogs[j].$node.offset();
        var distance = Math.sqrt(Math.pow(catPosition.left - dogPosition.left, 2)+(catPosition.top - dogPosition.top,2));

        var tuple = [distance,allDogs[j].$node.offset()];
        if(closestDogs[0]===undefined){
          closestDogs.push(tuple);
        } else if(closestDogs[1]===undefined){
          closestDogs.push(tuple);
        } else if(closestDogs[0][0]>distance){
          closestDogs[0]=tuple;
        } else if(closestDogs[1][0]>distance){
          closestDogs[1]=tuple;
        }
      }
      var midPoint = [((closestDogs[0][1].left + closestDogs[1][1].left)/2), ((closestDogs[0][1].top + closestDogs[1][1].top)/2)];
      var styleSettings = {
        top: midPoint[1],
        left: midPoint[0]
      };
      window.allCats[i].$node.animate(styleSettings, window.allCats[i].timeBetweenSteps);
    }

  };



});

