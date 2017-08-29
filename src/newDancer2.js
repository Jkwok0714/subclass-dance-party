var newDancer2 = function(...args) {
  makeDancer.call(this, ...args);
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  this.$node = $('<img src="src/Squirtle.gif" class="dancer icon" id=' + args[3] + '></img>');
  this.setPosition(this.y, this.x);
  this.state = 0;
  this.timeBetweenSteps += 200;
  this.stepSize = Math.random() * 20;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = this.step;
  
  this.miniLineUp = function(newTop, newLeft, speed = 500) {
    // this.setPosition(newTop, newLeft);
    //this.updatePositions(newTop, newLeft);
    var styleSettings = {
      top: newTop,
      left: newLeft
    };
    this.$node.animate(styleSettings, speed);
  };

  this.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    //oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    var pos = this.$node.position();
    // this.$node.toggleClass('yellow'); 
    if (this.state === 1) {
      this.miniLineUp(this.y, this.x + this.stepSize, this.timeBetweenSteps - 10);
      this.state = 0;
    } else {
      this.miniLineUp(this.y, this.x - this.stepSize, this.timeBetweenSteps - 10);
      this.state = 1;
    }
  };
  
  // return blinkyDancer;
};