class Rope{

constructor(body1,body2,xoff){

var Option = {

bodyA:body1,
bodyB:body2,
pointB:{x:xoff,y:0}
}
this.rope = Constraint.create(Option)
this.xoff = xoff
World.add(world,this.rope)
}
display(){
    stroke("white")
    strokeWeight(4)
var pointA = this.rope.bodyA.position
var pointB = this.rope.bodyB.position
line(pointA.x,pointA.y,pointB.x+this.xoff,pointB.y)

}
}