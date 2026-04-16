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

        Render.fillTextUI(game.ctx, "Hello", [0, 0])
    }
}
