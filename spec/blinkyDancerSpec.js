describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('newDancer2', function() {
  var newDancerInstance, clock;
  var timeBetweenSteps = 100;
  
  beforeEach(function() {
    newDancerInstance = new newDancer2(10, 20, timeBetweenSteps);
    
  });
  
  it('should have a step function that makes it toggle the yellow class', function() {
    sinon.spy(newDancerInstance.$node, 'toggleClass');
    newDancerInstance.step();
    expect(newDancerInstance.$node.toggleClass.called).to.be.true;
  });
  
});

describe('fadeDancer', function() {
  var fadeDancerInstance, clock;
  var timeBetweenSteps = 100;
  
  beforeEach(function() {
    fadeDancerInstance = new makeFadingDancer(10, 20, timeBetweenSteps);
    
  });
  
  it('should have a step function that makes it bigger', function() {
    sinon.spy(fadeDancerInstance.$node, 'toggleClass');
    fadeDancerInstance.step();
    expect(fadeDancerInstance.$node.toggleClass.called).to.be.true;
  });
});

