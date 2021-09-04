const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/////////////////////////////////////////////////////
const canvas1 = document.getElementById('can1');
const ctx1 = canvas1.getContext('2d');

canvas1.width = 200;
canvas1.height = 200;

const canvas2 = document.getElementById('can2');
const ctx2 = canvas2.getContext('2d');

canvas2.width = 200;
canvas2.height = 200;

const canvas3 = document.getElementById('can3');
const ctx3 = canvas3.getContext('2d');

canvas3.width = 200;
canvas3.height = 200;

//////////////////////////////////////////////////

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas1.width = 200;
    canvas1.height = 200;

    canvas2.width = 200;
    canvas2.height = 200;
     
    canvas3.width = 200;
    canvas3.height = 200;
});

class Particle1 {
    constructor() {
        this.x =  Math.random() * canvas.width;
        this.y =  Math.random() * (canvas.height);
        this.size = Math.random() * 4 + 3;
        this.speedX = Math.random();
        this.speedY = -Math.random();
       // this.color = 'hsl(' + hue + ',100%,50%)';
    }
    update() {
      
        this.size -= 0.1;
    }
    draw() {
       
        ctx.font = this.size*5+'px verdana';
        ctx.fillStyle = 'red'; 
        ctx.fillText("\u{2728}",this.x,this.y);
    }
}

let ParticleArray1 = [];
for (let i = 0; i < 20; i++) {
  ParticleArray1.push(new Particle1())
}
function handleParticle1() {
    clear(ctx);
    for (let i = 0; i < ParticleArray1.length; i++) {
        ParticleArray1[i].update();
        ParticleArray1[i].draw();
        if (ParticleArray1[i].size <= 0.9) {
            ParticleArray1.splice(i, 1);
            i--;
            ParticleArray1.push(new Particle1);
        }
    }
}

function clear(ctx22) {
    ctx22.clearRect(0,0,canvas.width,canvas.height);
}
setInterval(()=>{
    
    //handleParticle1();
    handelButterfly();
},1000/60)









//////////////////////////////////////////

class Butterfly {
    constructor() {
        this.x =100;
        this.y = 80;
        this.size = 80;
        this.t = 0;
        this.height = this.size * 0.6;
        this.hue = Math.random() * 255;
        this.hue = Math.random() * 255;
        this.color = 'hsl(' + this.hue +100+ ',100%,50%)';
        this.speed = Math.random() * 4.5 + 2;
    }
    draw(ctx11) {
        ctx11.fillStyle = 'white'
        ctx11.strokeStyle = 'white'
        ctx11.beginPath();
        ctx11.arc(this.x + 2, this.y - this.height, 2, 0, Math.PI * 2);
        ctx11.arc(this.x - 2, this.y - this.height, 2, 0, Math.PI * 2);
        ctx11.closePath();
        ctx11.fill()
        ctx11.beginPath();
        ctx11.moveTo(this.x + 2, this.y - this.height);
        ctx11.lineTo(this.x + 2, this.y + this.height);
        ctx11.stroke();
        ctx11.beginPath();
        ctx11.moveTo(this.x - 2, this.y - this.height);
        ctx11.lineTo(this.x - 2, this.y + this.height);
        ctx11.stroke();
        let x;
        let y;
        let rad = this.size;
        ctx11.beginPath();
        ctx11.fillStyle = this.color;
        for (let a = -Math.PI / 2; a <= Math.PI / 2; a += 0.03) {
            x = this.x + rad * Math.sin(a) * Math.sin(2 * a) * (Math.abs(Math.sin(this.t)) + 0.03);
            y = this.y + rad * Math.cos(a) * Math.sin(2 * a);
            ctx11.lineTo(x, y);
            ctx11.fill();
        }
        for (let a = Math.PI / 2; a <= 3 * Math.PI / 2; a += 0.03) {
            x = this.x + rad * Math.sin(a) * Math.sin(2 * a) * (Math.abs(Math.sin(this.t)) + 0.03);
            y = this.y + rad * Math.cos(a) * Math.sin(2 * a);
            ctx11.lineTo(x, y);
            ctx11.fill();
        }
        ctx11.closePath();
    }
    update() {
        this.t += 0.08;
    }
}
let butterfly = [];
for (let i = 0; i < 3; i++) {
    butterfly.push(new Butterfly())
}

function handelButterfly() {
    clear(ctx1);
    clear(ctx2);
    clear(ctx3);

    butterfly[0].draw(ctx1);
    butterfly[0].update();
    butterfly[1].draw(ctx2);
    butterfly[1].update();
    butterfly[2].draw(ctx3);
    butterfly[2].update();
   
}