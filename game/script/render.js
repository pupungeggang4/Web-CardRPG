class Render {
    static clearCanvas(canvas, ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    static fillCanvas(canvas, ctx) {
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    static init(ctx) {
        ctx.font = '32px neodgm'
        ctx.textAlign = 'left'
        ctx.textBaseline = 'top'
        ctx.fillStyle = 'black'
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
    }

    static fillTextUI(ctx, text, pos) {
        ctx.fillText(text, pos[0], pos[1])
    }

    static strokeRectUI(ctx, rect) {
        ctx.strokeRect(rect[0], rect[1], rect[2], rect[3])
    }
}
