class Chain {

    constructor(bodyA,pointB){

        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 10,
            stiffness : 0.5
        }

        this.pointB= pointB
        this.body = Constraint.create(options);
        World.add(world,this.body);

    }

    display(){

        strokeWeight(5);
        var posA = this.body.bodyA.position;
        var posB = this.pointB;
        line (posA.x,posA.y,posB.x,posB.y);

    }

}