$(document).ready(function() {
  window.dancers = [];
  var idNum = 0;
  
  $('#lineUpButton').on('click', function(event) {
    var totalWidth = $('body').width() / window.dancers.length;
    for (var i = 0; i < window.dancers.length; i++) {
      var xPos = totalWidth * i + (totalWidth / 2);
      window.dancers[i].lineUp($('body').height() / 2, xPos);
    }
    
  });
  
  $('#randomizer').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var x = $('body').height() * Math.random();
      var y = $('body').width() * Math.random();
      window.dancers[i].lineUp(x, y);
    }
  });
  
  $('body').on('mouseover', '.dancer', function(event) {
    var objIndex = $(this).attr('id');
    var object = window.dancers[objIndex];
    var thisX = object.x;
    var thisY = object.y;
    var closestDistance = 1000000;
    
    for (var i = 0; i < window.dancers.length; i++) {
      var currDistance = Math.sqrt(Math.pow(window.dancers[i].x - thisX, 2) + Math.pow(window.dancers[i].y - thisY, 2));
      // console.log(currDistance);
    }
    
    
    // window.dancers[objIndex].lineUp(20, 20);
  });
  


  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
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
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000, idNum
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    idNum++;
  });
});

