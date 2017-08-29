var makeBlinkyDancer = function(...args) {
  makeDancer.call(this, ...args);
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = this.step;
  this.$node = $('<img src="src/Charmander.gif" class="dancer icon" id=' + args[3] + '></img>');
  this.setPosition(this.y, this.x);

  this.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    //oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggleClass('RedRing');
  };

  // return blinkyDancer;
};