import { ctx } from "../script.js";

export default class Background {
    constructor(image) {
        this.image = image;
        this.speed = 0;
    }
    update() {
        if (this.speed >= 64) this.speed = 0;
        this.speed += 1;
    }
    draw() {
        const backgroundImg = new Image();
        backgroundImg.src = this.image;
        for (let i = -1; i < 9; i++) {
            for (let j = 0; j < 16; j++) {
                ctx.drawImage(backgroundImg, j * 64, i * 64 + this.speed, 64, 64);
            }
        };
    }
}