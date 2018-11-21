// http://www.codewars.com/kata/projectile-motion/javascript

--------------------------------------------------------------------

class Projectile {
  constructor(h, v0, a) {
    this.startHeight = h;
    this.startVelocity = v0;
    this.angle = a;
    this.horizVel = v0 * Math.cos((a * Math.PI) / 180.0);
    this.verticalVel = v0 * Math.sin((a * Math.PI) / 180.0);
  }
  heightEq() {
    var a = "";
    if(this.startHeight != 0) a = " + " + this.startHeight.toFixed(1);
    return "h(t) = -16.0t^2 + " + (+this.verticalVel.toFixed(3)) + "t" + a;
  }
  horizEq() {
    return "x(t) = " + +this.horizVel.toFixed(3) + "t";
  }
  height(time) {
    return +(-16 * Math.pow(time, 2) + (this.verticalVel * time) + this.startHeight).toFixed(3);
  }
  horiz(time) {
    return +(this.horizVel * time).toFixed(3);
  }
  landing() {
    var t = ((0-this.verticalVel - Math.sqrt(Math.pow(this.verticalVel,2)-(4*(-16)*this.startHeight)))/-32.0);
    return [+this.horiz(t).toFixed(3),0,+t.toFixed(3)];
  }
}