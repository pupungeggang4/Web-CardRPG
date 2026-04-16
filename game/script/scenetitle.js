class SceneTitle {
    constructor(game) {

    }

    update(game) {
        
    }

    render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        game.ctx.fillStyle = 'white'
        Render.fillCanvas(game.canvas, game.ctx)
        game.ctx.fillStyle = 'black'

        Render.fillTextUI(game.ctx, "Card RPG", UI.title.textTitle)
        Render.strokeRectUI(game.ctx, UI.title.buttonStart)
    }

    pointerDown(game, pos, button) {

    }

    pointerMove(game, pos) {

    }

    pointerUp(game, pos, button) {
        if (Util.pointInsideRectUI(pos, UI.title.buttonStart)) {
            game.scene = new SceneField(game)
        }
    }
}
