// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps, idNum) {
  
  this.x, this.y = 0;
  
  this.timeBetweenSteps = timeBetweenSteps;
  // var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer" id=' + idNum + '></span>');

  this.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // console.log('Step');
    // setTimeout(this.step, this.timeBetweenSteps);
  };
  // this.step();
  
  this.startStepping = function() {
    setInterval(() => {
      this.step();
    }, this.timeBetweenSteps);
  };
  
  this.updatePositions = function(t, l) {
    this.y = t;
    this.x = l;
  };

  this.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    this.updatePositions(top, left);
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  
  setTimeout(() => {
    this.startStepping();
  }, this.timeBetweenSteps);

  this.lineUp = function(newTop, newLeft, speed = 500) {
    // this.setPosition(newTop, newLeft);
    this.updatePositions(newTop, newLeft);
    var styleSettings = {
      top: newTop,
      left: newLeft
    };
    this.$node.animate(styleSettings, speed);
  };
  // return dancer;
};