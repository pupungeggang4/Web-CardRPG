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
        Render.fillTextUI(game.ctx, "Start Game", UI.title.textStart)
        Render.strokeRectUI(game.ctx, UI.title.buttonCollection)
        Render.fillTextUI(game.ctx, "Collection", UI.title.textCollection)
        Render.strokeRectUI(game.ctx, UI.title.buttonErase)
        Render.fillTextUI(game.ctx, "Erase Data", UI.title.textErase)
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
