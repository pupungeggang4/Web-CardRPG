class SceneCollection {
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

        Render.strokeRectUI(game.ctx, UI.collection.buttonBack)
    }

    pointerUp(game, pos, button) {
        if (button === 0) {
            if (Util.pointInsideRectUI(pos, UI.collection.buttonBack)) {
                game.scene = new SceneTitle(game)
            }
        }
    }

    pointerMove(game, pos) {

    }

    pointerDown(game, pos, button) {

    }
}
