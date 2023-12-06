/** @type {HTMLCanvasElement} */
import Background from "./objects/Background.js";

const canvas = document.getElementById('main-canvas');
export const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 64 * 16;
const CANVAS_HEIGHT = canvas.height = 64 * 9;

const background = new Background('/assets/background/gray.png');

(function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    background.update();
    background.draw();
    requestAnimationFrame(animate);
})();