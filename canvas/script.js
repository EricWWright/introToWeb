const canvas = document.getElementById('demo');
const ctx = canvas.getContext('2d');

// ctx.fillStyle = '#00f';
// ctx.fillRect(150, 200, 50, 50);

class Box {
    constructor(x, y, size, r, g, b) {
        this.x = x - size / 2;
        this.y = y - size / 2;
        this.size = size;
        this.r = r;
        this.g = g;
        this.b = b;
        this.color = `rgb(${this.r}, ${this.g}, ${this.b})`;
    }

    draw() {
        this.color = `rgb(${this.r}, ${this.g}, ${this.b})`;
        ctx.fillStyle = this.color;
        ctx.fillRect(
            this.x,
            this.y,
            this.size,
            this.size
        );
    }
}

const bob = new Box(15, 15, 30, 0, 0, 255);
const sally = new Box(300, 200, 30, 255, 255, 0);

const loop = () => {
    ctx.clearRect(0, 0, 600, 400);
    bob.x += 1;
    if (bob.x > 600 + bob.size / 2) {
        bob.x = 0 - bob.size / 2;
    }
    sally.x -= 0.7;
    sally.y -= 0.5;
    sally.r -= 1;
    sally.b += 1;
    if (sally.r < 0) {
        sally.r = 0;
    }
    bob.draw();
    sally.draw();
}

setInterval(loop, 10);