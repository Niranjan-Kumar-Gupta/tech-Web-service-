const canvas = document.getElementById('canvas2');
const ctx = canvas.getContext('2d');

const singin = document.getElementById('singin');

canvas.width = innerWidth;
canvas.height = innerHeight;

window.addEventListener('resize',function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight; 
});

let ball = [];

class Ball{
    constructor(){
        this.x = Math.random()*(canvas.width-300)+100;
        this.y = Math.random()*(canvas.height-200)+100;
        this.size = 7;
        this.speedX =  Math.random()*3 - 1.5;
        this.speedY =  Math.random()*3 - 1.5;
        this.speed = 1;

    }
    draw(){
        ctx.fillStyle = 'rgb(195, 0, 255)'
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.closePath();
        ctx.fill(); 
    }
    update(){
        this.y -= 0.5*this.speedY*this.speed;
        this.x += 0.5*this.speedX*this.speed;
       
        if (this.y < this.size +78|| this.y > 715) {
            this.speed *= -1;
        }
        if ( this.x > canvas.width-this.size || this.x < this.size) {
            this.speed *= -1;
        }
    }
}

for (let i = 0; i < 80; i++) {
   ball.push(new Ball())
}
function clear() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
function handleBall() {
    for (let i = 0; i < ball.length; i++) {
        ball[i].draw();
        ball[i].update();
    }
}

function connectLine() {
    clear();
    let opacity = 1;

    for (let i = 0; i < ball.length; i++) {
        for (let j = i; j < ball.length; j++) {
            let disx = ball[i].x - ball[j].x;
            let disy = ball[i].y - ball[j].y;
            let distance = Math.sqrt(disx*disx + disy*disy);
            opacity = 1 - (distance/120);
            ctx.strokeStyle = 'rgba(255,255,255,'+opacity+')';
            if (distance < 100) {
                //ctx.strokeStyle = 'white';
                ctx.beginPath();
                ctx.lineWidth = 1;
                ctx.moveTo(ball[i].x,ball[i].y);
                ctx.lineTo(ball[j].x,ball[j].y);
                ctx.closePath();
                ctx.stroke();  
            }         
        }       
    }
}
setInterval(()=>{
    connectLine();
    handleBall();
},1000/60)


