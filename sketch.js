//const Body = require("./matter");

var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var string1, string2, string3, string4, string5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine, world;
var mConstraint;

function setup() {
    //createCanvas(800, 400);

    canvas = createCanvas(windowWidth / 2, windowHeight / 1.5)
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine)
    let canvasmouse = Mouse.create(canvas.elt)
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse: canvasmouse
    }
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, this.mConstraint);


    roof = new Roof(400, 25, 600, 50);
    //bobs
    bobObject1 = new Bob(230, 350, 40);
    bobObject2 = new Bob(320, 350, 40)
    bobObject3 = new Bob(400, 350, 40);
    bobObject4 = new Bob(480, 350, 40);
    bobObject5 = new Bob(560, 350, 40);
    //strings
    string1 = new Rope(bobObject1.body, roof.body, -160, 0);
    string2 = new Rope(bobObject2.body, roof.body, -80, 0);
    string3 = new Rope(bobObject3.body, roof.body, 0, 0);
    string4 = new Rope(bobObject4.body, roof.body, 80, 0);
    string5 = new Rope(bobObject5.body, roof.body, 160, 0);
    Engine.run(engine);
}

function draw() {
    background(0, 130, 10);
    Engine.update(engine)
    roof.display();
    //strings
    string1.display();
    string2.display();
    string3.display();
    string4.display();
    string5.display();
    //bobs
    bobObject1.display();
    bobObject2.display();
    bobObject3.display();
    bobObject4.display();
    bobObject5.display();


    if (keyDown(UP_ARROW)) {
        Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, { x: -50, y: -45 });
    }
}

function mouseDragged() {
    Body.setPosition(bob1, { x: mouseX, y: mouseY })
}