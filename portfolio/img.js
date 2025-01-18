const canvasImg = document.querySelector(".img-profile");
console.log(canvas);
class Cell {
  constructor(classImg, x, y) {
    this.classImg = classImg;
    this.x = x;
    this.y = y;
    this.width = this.classImg.cellWidth;
    this.height = this.classImg.cellHeight;
    this.baseX = this.x;
    this.baseY = this.y;
    this.positionX = this.classImg.width / 2;
    this.positionY = 0;
    this.random = Math.random() * 35 + 5;
    this.classImg.canvas.addEventListener("mousemove", ({ clientX, clientY }) => {
      this.classImg.mouse.x = clientX - this.classImg.canvas.offsetLeft;
      this.classImg.mouse.y = clientY - this.classImg.canvas.offsetTop;
    });
  }
  createPartOfImg() {
    const sx = (this.x / this.classImg.width) * this.classImg.img.width;
    const sy = (this.y / this.classImg.height) * this.classImg.img.height;
    const sw = (this.width / this.classImg.height) * this.classImg.img.width;
    const sh = (this.height / this.classImg.height) * this.classImg.img.height;

    this.classImg.ctx.drawImage(
      this.classImg.img,
      sx,
      sy,
      sw,
      sh,
      this.positionX,
      this.positionY,
      this.width,
      this.height
    );
    this.positionX += (this.x - this.positionX) / this.random;
    this.positionY += (this.y - this.positionY) / this.random;
  }
}
class transformImageToCells {
  constructor(canvas, img) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.cellWidth = this.width / 50;
    this.cellHeight = this.height / 50;
    this.img = img;
    this.animationFrameId = null;
    this.mouse = {
      x: undefined,
      y: undefined,
      radius: 100,
    };
    this.arrCells = [];
    this.createCells();
    // this.classImg.addEventListener('mouseenter',() => {

    // });
  }
  createCells() {
    for (let y = 0; y < this.height; y += this.cellHeight) {
      for (let x = 0; x < this.width; x += this.cellWidth)
        this.arrCells.push(new Cell(this, y, x));
    }
    console.log(this.arrCells);
  }
  render() {
    this.arrCells.forEach((cell) => cell.createPartOfImg());
  }
  animate = () => {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.render();
    console.log("sqdq");
    this.animationFrameId = requestAnimationFrame(this.animate);
  };
  stopAnimation = () => {
    cancelAnimationFrame(this.animationFrameId);
  }
}
const img = new Image();
img.src = "./imgs/male.png";
const sperateImg = new transformImageToCells(canvasImg, img);
setTimeout(() => {

  sperateImg.animate();
},1000);
// setTimeout(() => {
//     sperateImg.stopAnimation();
// },1000);