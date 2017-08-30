$(document).ready(function() {
  window.dancers = [];
  window.dancerIDs = [];
  var idNum = 0;
  var autoShuffling = false;
  var shuffler;
  
  var shuffleArray = function(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  $('#lineUpButton').on('click', function(event) {
    var totalWidth = $('body').width() / window.dancers.length;
    window.dancerIDs = shuffleArray(window.dancerIDs);

    for (var i = 0; i < window.dancers.length; i++) {
      var xPos = totalWidth * window.dancerIDs[i] + (totalWidth / 2);
      window.dancers[i].lineUp($('body').height() * 0.75, xPos, Math.random() * 500);
    }
    
  });
  
  var randomize = function(speed = Math.random() * 500) {
    
    for (var i = 0; i < window.dancers.length; i++) {
      var x = $('body').height() * Math.random();
      var y = $('body').width() * Math.random();
      window.dancers[i].lineUp(x, y, speed);
    }
  };
  
  $('#randomizer').on('click', function(event) {
    randomize();
  });
  
  $('#autoShuffle').on('click', () => {
    if (autoShuffling) {
      clearInterval(shuffler);
      $('#autoShuffle').text('Enable Shuffle');
      autoShuffling = false;
    } else {
      shuffler = setInterval(randomize, 2000, 1990);
      $('#autoShuffle').text('Disable Shuffle');
      autoShuffling = true;
    }
  });
  
  $('body').on('mouseover', '.dancer', function(event) {
    var objIndex = $(this).attr('id');
    var object = window.dancers[objIndex];
    var thisX = object.x;
    var thisY = object.y;
    var closestDistance = 1000000;
    var closestDancer = null;
    
    for (var i = 0; i < window.dancers.length; i++) {
      var currDistance = Math.sqrt(Math.pow(window.dancers[i].x - thisX, 2) + Math.pow(window.dancers[i].y - thisY, 2));
      if (currDistance !== 0 && currDistance < closestDistance) {
        closestDistance = currDistance;
        closestDancer = window.dancers[i];
      }
    }
    console.log(closestDistance);
    
    object.lineUp(closestDancer.y, closestDancer.x);
    closestDancer.lineUp(thisY, thisX);
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

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000, idNum
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    window.dancerIDs.push(idNum);
    idNum++;
  });
});

