class SceneField {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        game.ctx.fillStyle = 'black'
        game.ctx.fillRect(0, 0, 1280, 720)
        game.ctx.fillStyle = 'white'

        game.field.render(game)

        Render.strokeRectUI(game.ctx, UI.field.buttonMenu)
        Render.strokeRectUI(game.ctx, UI.field.buttonInfo)

        if (game.menu === true) {
            Render.renderFieldMenu(game.ctx)
        }
    }

    static keyDown(game, key) {

    }

    static keyUp(game, key) {
        if (game.menu === false) {
            if (key === 'Escape') {
                game.menu = true
            }
        } else if (game.menu === true) {
            if (key === 'Escape') {
                game.menu = false
            } else if (key === 'r') {
                game.menu = false
            } else if (key === 'e') {
                game.menu = false
                game.scene = 'title'
                game.state = ''
            }
        }
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (game.menu === false) {
                if (pointInsideRectUI(pos, UI.field.buttonMenu)) {
                    game.menu = true
                }
            } else if (game.menu === true) {
                if (pointInsideRectUI(pos, UI.fieldMenu.buttonResume)) {
                    game.menu = false
                } else if (pointInsideRectUI(pos, UI.fieldMenu.buttonExit)) {
                    game.menu = false
                    game.scene = 'title'
                    game.statae = ''
                }
            }
        }
    }
}
