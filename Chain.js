class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
      
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(Kworld, this.sling);
    }
    

    display(){
      line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.position.x,this.pointB.position.y);
    }
    
}