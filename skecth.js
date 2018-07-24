//Michael = Graphics
//Marvin = Player Controls
//Eric = Ememy Ships
//David = Allied Ships

// Setting up the Grid
function setup(){
    createCanvas(1001,501)
    
} 
let x = 900
let y = 300
let x1 = -5
let y1 = -5
function draw(){
    UI()
    fill("grey")
    triangle(30, 75, 58, 20, 86, 75);
    fill("orange")

    if (keyIsDown(LEFT_ARROW)) {
        x += -10
    }
    
    if(keyIsDown(RIGHT_ARROW)) {
        x += 10
    }
    
   
    //Designing Enemy Ship and Controls
    fill('yellow')
    rect(x,y,50,50);
    x--
    if(x<20);
        

    }

function UI(){
    background("black")
    skyTex = 0
    skyMove = 430
    for(i=0;i<300;i++){
        fill(76,236-skyTex,236-skyTex)
        rect(0,skyMove,1000,-2)
        skyTex = skyTex + .3
        skyMove = skyMove - 2
    }
    fill("green")
    for(i=0;i<100;i++){
        let treeGenScale = Math.random()
        treeGenScale = treeGenScale * 200
        let treeGen = Math.random()
        treeGen = treeGen * 1000
        ellipse(treeGen,430, treeGenScale, treeGenScale)
    }
    fill("grey")
    rect(0,430,1000,80)
}
