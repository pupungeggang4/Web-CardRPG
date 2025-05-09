class SceneField {
    static loop(game) {
        if (game.menu === false) {
            if (game.state === '') {
                game.field.handleTick(game)
            }
        }
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        game.ctx.fillStyle = 'black'
        game.ctx.fillRect(0, 0, 1280, 720)
        game.ctx.fillStyle = 'white'

        game.field.render(game)

        game.ctx.fillStyle = 'white'
        Render.fillRectUI(game.ctx, UI.field.buttonMenu)
        Render.fillRectUI(game.ctx, UI.field.buttonInfo)
        Render.fillRectUI(game.ctx, UI.field.moveLeft)
        Render.fillRectUI(game.ctx, UI.field.moveRight)
        Render.fillRectUI(game.ctx, UI.field.moveUp)
        Render.fillRectUI(game.ctx, UI.field.moveDown)
        game.ctx.fillStyle = 'black'
        Render.strokeRectUI(game.ctx, UI.field.buttonMenu)
        Render.strokeRectUI(game.ctx, UI.field.buttonInfo)
        Render.strokeRectUI(game.ctx, UI.field.moveLeft)
        Render.strokeRectUI(game.ctx, UI.field.moveRight)
        Render.strokeRectUI(game.ctx, UI.field.moveUp)
        Render.strokeRectUI(game.ctx, UI.field.moveDown)

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
                if (game.state === '') {
                    if (pointInsideRectUI(pos, UI.field.moveLeft)) {
                        game.field.player.moveDirection(game, game.field, 'left')
                    } else if (pointInsideRectUI(pos, UI.field.moveRight)) {
                        game.field.player.moveDirection(game, game.field, 'right')
                    } else if (pointInsideRectUI(pos, UI.field.moveUp)) {
                        game.field.player.moveDirection(game, game.field, 'up')
                    } else if (pointInsideRectUI(pos, UI.field.moveDown)) {
                        game.field.player.moveDirection(game, game.field, 'down')
                    }
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
