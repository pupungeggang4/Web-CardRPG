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
        Render.fillRectUI(game.ctx, UI.field.upperBox)
        Render.strokeRectUI(game.ctx, UI.field.upperBox)
        game.ctx.fillStyle = 'black'
        Render.fillTextUI(game.ctx, `${game.player.place}`, UI.field.upperText1)
        Render.fillTextUI(game.ctx, `[WASD] Move [E] Interact [R] Info`, UI.field.upperText2)

        Render.drawImageUI(game.ctx, img.button.menu, UI.field.buttonMenu)
        Render.drawImageUI(game.ctx, img.button.info, UI.field.buttonInfo)
        Render.drawImageUI(game.ctx, img.button.interact, UI.field.interact)
        Render.drawImageUI(game.ctx, img.button.left, UI.field.moveLeft)
        Render.drawImageUI(game.ctx, img.button.right, UI.field.moveRight)
        Render.drawImageUI(game.ctx, img.button.up, UI.field.moveUp)
        Render.drawImageUI(game.ctx, img.button.down, UI.field.moveDown)

        if (game.state === 'info') {
            if (game.field.player.adventureMode === false) {
                Render.renderInfo(game.ctx, game.player)
            } else {
                Render.renderInfoAdventure(game.ctx, game.player, game.field.player)
            }
        }
        if (game.state === 'adventure_start') {
            Render.renderAdventureStart(game.ctx)
        }
        if (game.state === 'adventure_end') {
            Render.renderAdventureEnd(game.ctx)
        }

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
            if (game.state === '') {
                if (key === 'e') {
                    game.field.player.interact(game, game.field)
                } else if (key === 'r') {
                    game.state = 'info'
                    game.stateInfo = 'profile'
                }
            } else if (game.state === 'info') {
                if (key === 'r') {
                    game.state = ''
                }
            } else if (game.state === 'adventure_start') {
                if (key === 'y') {
                    game.state = ''
                    game.field.adventureStart(game)
                    game.field.player.fieldMove(game, game.field)
                } else if (key === 'n') {
                    game.state = ''
                }
            } else if (game.state === 'adventure_end') {
                if (key === 'y') {
                    game.state = ''
                    game.field.player.fieldMove(game, game.field)
                    game.field.player.adventureEnd()
                } else if (key === 'n') {
                    game.state = ''
                }
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
                    } else if (pointInsideRectUI(pos, UI.field.interact)) {
                        game.field.player.interact(game, game.field)
                    } else if (pointInsideRectUI(pos, UI.field.buttonInfo)) {
                        game.state = 'info'
                        game.stateInfo = 'profile'
                    }
                } else if (game.state === 'info') {
                    if (pointInsideRectUI(pos, UI.info.buttonClose) || pointInsideRectUI(pos, UI.field.buttonInfo)) {
                        game.state = ''
                    }
                } else if (game.state === 'adventure_start') {
                    if (pointInsideRectUI(pos, UI.adventureWindow.buttonYes)) {
                        game.state = ''
                        game.field.adventureStart(game)
                        game.field.player.fieldMove(game, game.field)
                    } else if (pointInsideRectUI(pos, UI.adventureWindow.buttonNo)) {
                        game.state = ''
                    }
                } else if (game.state === 'adventure_end') {
                    if (pointInsideRectUI(pos, UI.adventureWindow.buttonYes)) {
                        game.state = ''
                        game.field.player.fieldMove(game, game.field)
                        game.field.player.adventureEnd()
                    } else if (pointInsideRectUI(pos, UI.adventureWindow.buttonNo)) {
                        game.state = ''
                    }
                }
            } else if (game.menu === true) {
                if (pointInsideRectUI(pos, UI.fieldMenu.buttonResume)) {
                    game.menu = false
                } else if (pointInsideRectUI(pos, UI.fieldMenu.buttonExit)) {
                    game.menu = false
                    game.scene = 'title'
                    game.state = ''
                }
            }
        }
    }
}
