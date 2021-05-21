class Roof{
    constructor(){
        var options = {
            isStatic : true,
            'restitution' : 0,
            'friction' : 0,
            'density' : 1,
        }
        this.body = Bodies.rectangle(width/2,height/2-150,width/2,20, options);
        this.width = width/2;
        this.height = 20;

        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("magenta");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }

    
}