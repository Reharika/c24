class CannonBall {
    constructor(x,y){
        var options = {
            isStatic: true,
            restitution:0.8,
            friction:1,
            density:1,
        }
        this.radius = 40;
        this.body = Bodies.circle(x,y,this.radius);
        World.add(world,this.body)
        this.image=loadImage("./assets/cannonball.png")
    }
display(){
    var pos = this.body.position
    var angle = this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius)
    pop()
}
 shoot(){
     var velocity = p5.Vector.fromAngle(cannon.angle);
     velocity.mult(20)
     Matter.Body.setStatic(this.body,false)
     Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
}
}