class Car {
    public x: number;
    public y: number;
    private speed: number;
    private direction: number;

    constructor() {
        this.direction = Math.random() < 0.5 ? -1 : 1;
        // Adjust starting position to be more visible
        this.x = this.direction === 1 ? 0 : 800;
        // Adjust vertical position to be more spread out
        this.y = Math.floor(Math.random() * 5) * 70 + 150;
        // Increase speed range for better visibility
        this.speed = Math.random() * 5 + 3;
    }

    update(): void {
        this.x += this.speed * this.direction;
    }

    isVisible(): boolean {
        // Expand visible area
        return this.x > -100 && this.x < 900;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        // Make cars more visible with a border
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, 60, 30);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(this.x, this.y, 60, 30);
    }
}

export default Car;