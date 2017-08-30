var newDancer2 = function(...args) {
  makeDancer.call(this, ...args);
  this.$node = $('<img src="src/Squirtle.gif" class="dancer icon" id=' + args[3] + '></img>');
  this.setPosition(this.y, this.x);
  this.state = 0;
  this.timeBetweenSteps += 200;
  this.stepSize = Math.random() * 20;
  
  this.miniLineUp = function(newTop, newLeft, speed = 500) {
    var styleSettings = {
      top: newTop,
      left: newLeft
    };
    this.$node.animate(styleSettings, speed);
  };

  this.step = function() {
    var pos = this.$node.position();
    if (this.state === 1) {
      this.miniLineUp(this.y, this.x + this.stepSize, this.timeBetweenSteps - 10);
      this.state = 0;
    } else {
      this.miniLineUp(this.y, this.x - this.stepSize, this.timeBetweenSteps - 10);
      this.state = 1;
    }
  };
};