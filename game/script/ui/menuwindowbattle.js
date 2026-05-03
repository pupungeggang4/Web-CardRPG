class MenuWindowBattle {
    constructor(game) {

    }

    render(game) {
        let ctx = game.ctx
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.menuBattle.rect)
        Render.strokeRectUI(ctx, UI.menuBattle.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, "Paused", UI.menuBattle.textPaused)
        Render.strokeRectUI(ctx, UI.menuBattle.buttonResume)
        Render.fillTextUI(ctx, "Resume", UI.menuBattle.textResume)
        Render.strokeRectUI(ctx, UI.menuBattle.buttonSurrender)
        Render.fillTextUI(ctx, "Surrender", UI.menuBattle.textSurrender)
        Render.strokeRectUI(ctx, UI.menuBattle.buttonExit)
        Render.fillTextUI(ctx, "Exit to Title", UI.menuBattle.textExit)
    }

    handlePointer(game, pos) {
        if (Util.pointInsideRectUI(pos, UI.menuBattle.buttonResume)) {
            game.menu = false
        } else if (Util.pointInsideRectUI(pos, UI.menuBattle.buttonSurrender)) {
            game.menu = false
            game.scene = new SceneField(game)
        } else if (Util.pointInsideRectUI(pos, UI.menuBattle.buttonExit)) {
            game.menu = false
            game.scene = new SceneTitle(game)
        }
    }
}
