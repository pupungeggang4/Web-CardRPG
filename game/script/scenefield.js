class SceneField {
    constructor(game) {
        this.menuWindowField = new MenuWindowField(game)
    }

    update(game) {
        
    }

    render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        game.ctx.fillStyle = 'white'
        Render.fillCanvas(game.canvas, game.ctx)
        game.ctx.fillStyle = 'black'

        Render.strokeRectUI(game.ctx, UI.field.buttonMenu)

        if (game.menu === true) {
            this.menuWindowField.render(game)
        }
    }

    pointerDown(game, pos, button) {
        if (button === 0) {
        }
    }

    pointerMove(game, pos) {

    }

    pointerUp(game, pos, button) {
        if (button === 0) {
            if (game.menu === false) {
                if (Util.pointInsideRectUI(pos, UI.field.buttonMenu)) {
                    game.menu = true
                }
            } else {
                this.menuWindowField.handlePointer(game, pos)
            }
        }
    }
}
