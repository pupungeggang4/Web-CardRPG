class SceneField {
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

        Render.strokeRectUI(game.canvas, UI.field.buttonMenu)
    }

    pointerDown(game, pos, button) {

    }

    pointerMove(game, pos) {

    }

    pointerUp(game, pos, button) {

    }
}
