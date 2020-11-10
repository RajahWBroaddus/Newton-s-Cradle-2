/*class Rope {
    constructor(bodyA, pointB, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            pointB: { x: pointB.x + this.offsetX, y: pointB.y + this.offsetY }
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display() {
        var pointA = this.rope.bodyA.position
        var pointB = this.pointB
        strokeWeight(3);
        stroke("yellow");
        line(pointA.x, pointA.y, pointB + this.offsetX, pointB + this.offsetY);
    }
}*/
class Rope {
    constructor(body1, body2, offsetX, offsetY) {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
                bodyA: body1,
                bodyB: body2,
                pointB: { x: this.offsetX, y: this.offsetY }
            }
            //console.log(options);
        this.rope = Constraint.create(options)
        World.add(world, this.rope)
    }

    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(2);

        var Anchor1X = pointA.x
        var Anchor1Y = pointA.y

        var Anchor2X = pointB.x + this.offsetX
        var Anchor2Y = pointB.y + this.offsetY

        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    }

}