var makeBlinkyDancer = function(...args) {
  makeDancer.call(this, ...args);

  this.$node = $('<img src="src/Charmander.gif" class="dancer icon" id=' + args[3] + '></img>');
  this.setPosition(this.y, this.x);

  this.step = function() {
    this.$node.toggleClass('RedRing');
  };
};