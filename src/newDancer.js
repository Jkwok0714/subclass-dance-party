var newDancer = function(...args) {
  makeDancer.call(this, ...args);
  this.$node = $('<img src="src/bulbasaur.gif" class="dancer icon" id=' + args[3] + '></img>');
  this.setPosition(this.y, this.x);

  var oldStep = this.step;

  this.step = function() {
    oldStep();
  };
};