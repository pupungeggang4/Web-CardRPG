class SceneField {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.strokeRectUI(game.ctx, UI.field.buttonMenu)
        Render.strokeRectUI(game.ctx, UI.field.buttonInfo)

        if (game.menu === true) {
            Render.renderFieldMenu(game.ctx)
        }
    }

    static keyDown(game, key) {

    }

    static keyUp(game, key) {

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
