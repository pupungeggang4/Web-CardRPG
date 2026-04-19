class MenuWindowField {
    constructor(game) {

    }

    render(game) {
        let ctx = game.ctx
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.menuField.rect)
        Render.strokeRectUI(ctx, UI.menuField.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, "Paused", UI.menuField.textPaused)
        Render.strokeRectUI(ctx, UI.menuField.buttonResume)
        Render.fillTextUI(ctx, "Resume", UI.menuField.textResume)
        Render.strokeRectUI(ctx, UI.menuField.buttonSave)
        Render.fillTextUI(ctx, "Save Data", UI.menuField.textSave)
        Render.strokeRectUI(ctx, UI.menuField.buttonExit)
        Render.fillTextUI(ctx, "Exit to Title", UI.menuField.textExit)
    }

    handlePointer(game, pos) {
        if (Util.pointInsideRectUI(pos, UI.menuField.buttonResume)) {
            game.menu = false
        } else if (Util.pointInsideRectUI(pos, UI.menuField.buttonSave)) {
            game.menu = false
        } else if (Util.pointInsideRectUI(pos, UI.menuField.buttonExit)) {
            game.menu = false
            game.scene = new SceneTitle(game)
        }
    }
}
