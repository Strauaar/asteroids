const MovingObject = require('./moving_object.js');
const Bullet = require('./bullet.js');
const Util = require('./utils.js');

const Ship = function Ship(options) {
  options.color = Ship.COLOR;
  options.radius = Ship.RADIUS;
  options.vel = [0,0];
  MovingObject.prototype.constructor.call(this, options);
};

Ship.COLOR = 'blue';
Ship.RADIUS = 14;

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function relocate() {
  this.pos = this.game.randomPosition();
  this.vel = [0, 0];
};

Ship.prototype.power = function power(impulse) {
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
};

Ship.prototype.fireBullet = function () {
  let bPosx = this.pos[0];
  let bPosy = this.pos[1];
  let bVelx = this.vel[0];
  let bVely = this.vel[1];
  let bullet = new Bullet ({vel: [(bVelx + 1) * 5, (bVely + 1) * 5] , pos: [bPosx, bPosy] });
  this.game.bullets.push(bullet);
};

module.exports = Ship;
