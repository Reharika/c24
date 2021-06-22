class Tower{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body)
        this.width=width;
        this.height= height;
        this.img = loadImage("assets/tower.png")
    }
    display(){

        push();

        imageMode(CENTER)
        image(this.img,this.body.position.x,this.body.position.y,this.width,this.height)
        pop();

    }
}