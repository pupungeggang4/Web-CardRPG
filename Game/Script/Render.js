class Render {
    static init(ctx) {
        ctx.font = '32px neodgm'
        ctx.textAlign = 'left'
        ctx.textBaseline = 'top'
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, 1280, 720)
        ctx.strokeRect(0, 0, 1280, 720)
        ctx.fillStyle = 'black'
    }

    static renderFieldMenu(ctx) {
        ctx.fillStyle = 'white'
        this.fillRectUI(ctx, UI.fieldMenu.rect)
        this.strokeRectUI(ctx, UI.fieldMenu.rect)
        ctx.fillStyle = 'black'

        this.fillTextUI(ctx, 'Paused', UI.fieldMenu.textPaused)
        this.strokeRectUI(ctx, UI.fieldMenu.buttonResume)
        this.fillTextUI(ctx, 'Resume', UI.fieldMenu.textResume)
        this.strokeRectUI(ctx, UI.fieldMenu.buttonExit)
        this.fillTextUI(ctx, 'Exit', UI.fieldMenu.textExit)
    }

    static strokeRectUI(ctx, rect) {
        ctx.strokeRect(rect[0], rect[1], rect[2], rect[3])
    }

    static fillRectUI(ctx, rect) {
        ctx.fillRect(rect[0], rect[1], rect[2], rect[3])
    }

    static fillTextUI(ctx, text, pos) {
        ctx.fillText(text, pos[0], pos[1])
    }

    static drawImageUI(ctx, img, pos) {
        ctx.drawImage(img, pos[0], pos[1])
    }
}
