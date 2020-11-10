class Bob {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 1.0,
            friction: 0,
            frictionAir: 0.0,
            density: 1.2,
            slop: 1,
            inertia: Infinity

        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.diameter = radius * 2;
        World.add(world, this.body);
    }
    display() {

        var angle = this.body.angle;
        var pos = this.body.position;

        /*push();
        translate(pos.x, pos.y);
        rotate(angle);*/
        fill("red");
        stroke("yellow");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius);
        //pop();
    }
}