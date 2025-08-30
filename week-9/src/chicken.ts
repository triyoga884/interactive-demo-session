class Chicken {
    constructor(public x: number, public y: number) {}

    moveUp(): void {
        this.y -= 50;
    }

    moveDown(): void {
        if (this.y < 550) this.y += 50;
    }

    moveLeft(): void {
        if (this.x > 0) this.x -= 50;
    }

    moveRight(): void {
        if (this.x < 750) this.x += 50;
    }

    reset(): void {
        this.y = 550;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, 30, 30);
    }
}

export default Chicken;