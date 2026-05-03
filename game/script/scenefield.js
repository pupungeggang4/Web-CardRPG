class SceneField {
    constructor(game) {
        this.menuWindowField = new MenuWindowField(game)
        this.infoWindow = new InfoWindow(game)
    }

    update(game) {
        if (game.menu === false) {
            if (game.state === '') {
                game.field.update(game)
            }
        }
    }

    render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        game.ctx.fillStyle = 'white'
        Render.fillCanvas(game.canvas, game.ctx)
        game.ctx.fillStyle = 'black'

        game.field.render(game)

        game.ctx.setTransform(1, 0, 0, 1, 0, 0)
        Render.strokeRectUI(game.ctx, UI.field.arrow.left)
        Render.strokeRectUI(game.ctx, UI.field.arrow.right)
        Render.strokeRectUI(game.ctx, UI.field.arrow.up)
        Render.strokeRectUI(game.ctx, UI.field.arrow.down)

        Render.strokeRectUI(game.ctx, UI.field.buttonInfo)
        Render.drawImageUI(game.ctx, Img.buttonMenu, UI.field.buttonMenu)

        if (game.state === 'info') {
            this.infoWindow.render(game)
        }

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

                if (game.state === '') {
                    if (Util.pointInsideRectUI(pos, UI.field.buttonInfo)) {
                        game.state = 'info'
                    }
                } else if (game.state === 'info') {
                    this.infoWindow.handlePointer(game, pos)
                }
            } else {
                this.menuWindowField.handlePointer(game, pos)
            }
        }
    }
}
