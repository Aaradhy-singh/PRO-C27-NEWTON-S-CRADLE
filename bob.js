class Bob{

    constructor(x,y ){
var Option = {

restitution:1,
friction:0.3,
density:0.8,

}
        this.body = Bodies.circle(x,y,25,Option)
World.add(world,this.body)
    }
display(){
    fill("pink")
circle(this.body.position.x,this.body.position.y,50)

}
}