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

    static renderAdventureStart(ctx) {
        ctx.fillStyle = 'white'
        this.fillRectUI(ctx, UI.adventureWindow.rect)
        this.strokeRectUI(ctx, UI.adventureWindow.rect)
        ctx.fillStyle = 'black'
        
        this.fillTextUI(ctx, 'Start Adventure?', UI.adventureWindow.textTitle)
        this.strokeRectUI(ctx, UI.adventureWindow.buttonYes)
        this.fillTextUI(ctx, 'Yes [Y]', UI.adventureWindow.textYes)
        this.strokeRectUI(ctx, UI.adventureWindow.buttonNo)
        this.fillTextUI(ctx, 'No [N]', UI.adventureWindow.textNo)
    }

    static renderAdventureEnd(ctx) {
        ctx.fillStyle = 'white'
        this.fillRectUI(ctx, UI.adventureWindow.rect)
        this.strokeRectUI(ctx, UI.adventureWindow.rect)
        ctx.fillStyle = 'black'
        
        this.fillTextUI(ctx, 'End Adventure?', UI.adventureWindow.textTitle)
        this.strokeRectUI(ctx, UI.adventureWindow.buttonYes)
        this.fillTextUI(ctx, 'Yes [Y]', UI.adventureWindow.textYes)
        this.strokeRectUI(ctx, UI.adventureWindow.buttonNo)
        this.fillTextUI(ctx, 'No [N]', UI.adventureWindow.textNo)
    }

    static renderFieldMenu(ctx) {
        ctx.fillStyle = 'white'
        this.fillRectUI(ctx, UI.fieldMenu.rect)
        this.strokeRectUI(ctx, UI.fieldMenu.rect)
        ctx.fillStyle = 'black'

        this.fillTextUI(ctx, 'Paused', UI.fieldMenu.textPaused)
        this.strokeRectUI(ctx, UI.fieldMenu.buttonResume)
        this.fillTextUI(ctx, 'Resume [R]', UI.fieldMenu.textResume)
        this.strokeRectUI(ctx, UI.fieldMenu.buttonExit)
        this.fillTextUI(ctx, 'Exit [E]', UI.fieldMenu.textExit)
    }

    static renderImage(ctx, img, rect) {
        ctx.drawImage(img, rect.position.x - rect.size.x / 2, rect.position.y - rect.size.y / 2, rect.size.x, rect.size.y)
    }

    static renderImageCam(ctx, img, rect, cam) {
        ctx.drawImage(img, rect.position.x - cam.position.x - rect.size.x / 2 + cam.size.x / 2, rect.position.y - cam.position.y - rect.size.y / 2 + cam.size.y / 2, rect.size.x, rect.size.y)
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
