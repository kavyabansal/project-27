class Rope {
    constructor(bodyA,pointB) {

        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:350,
        }
        this.rope=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.rope);
    }
    display() {
        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
//stiffness:0.04,
//length:10,
//pointA.x,pointA.y,pointB.x,pointB.y