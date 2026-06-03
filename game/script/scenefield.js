import {Img, Aud} from 'asset'
import {UI} from 'ui'
import {GameVar} from 'gamevar'

import {FieldHandler} from 'fieldhandler'
import {FieldPlayerHandler} from 'fieldplayerhandler'

import {Util} from 'util'
import {Render} from 'render'

import {InfoWindow} from 'infowindow'
import {MenuWindowField} from 'menuwindowfield'
import {SaveWindow} from 'savewindow'
import {Scene} from 'scene'

export class SceneField extends Scene {
    constructor() {
        super()
        this.infoWindow = new InfoWindow()
        this.menuWindowField = new MenuWindowField()
        this.saveWindow = new SaveWindow()
    }

    update(gameVar) {
        if (gameVar.menu === false) {
            if (gameVar.state === '') {
                FieldHandler.update(gameVar, gameVar.field)
            }
        }
    }

    render(gameVar) {
        let canvas = gameVar.canvas
        let ctx = gameVar.ctx

        Render.init(ctx)
        Render.clearCanvas(canvas, ctx)

        FieldHandler.render(gameVar, gameVar.field)

        ctx.setTransform(1, 0, 0, 1, 0, 0)
        Render.drawImageUI(ctx, Img.arrowLeft, UI.field.arrow.left)
        Render.drawImageUI(ctx, Img.arrowRight, UI.field.arrow.right)
        Render.drawImageUI(ctx, Img.arrowUp, UI.field.arrow.up)
        Render.drawImageUI(ctx, Img.arrowDown, UI.field.arrow.down)

        Render.drawImageUI(ctx, Img.interact, UI.field.buttonInteract)
        Render.drawImageUI(ctx, Img.info, UI.field.buttonInfo)
        Render.drawImageUI(ctx, Img.buttonMenu, UI.field.buttonMenu)

        if (gameVar.state === 'save') {
            this.saveWindow.render(gameVar)
        }

        if (gameVar.state === 'info') {
            this.infoWindow.render(gameVar)
        }

        if (gameVar.menu === true) {
            this.menuWindowField.render(gameVar)
        }
    }

    pointerDown(gameVar, pos, button) {
        if (button === 0) {
        }
    }

    pointerMove(gameVar, pos) {

    }

    pointerUp(gameVar, pos, button) {
        if (button === 0) {
            if (gameVar.menu === false) {
                if (Util.pointInsideRectUI(pos, UI.field.buttonMenu)) {
                    gameVar.menu = true
                    gameVar.selectedMenuField = 0
                }

                if (gameVar.state === '') {
                    if (Util.pointInsideRectUI(pos, UI.field.buttonInfo)) {
                        gameVar.state = 'info'
                    } else if (Util.pointInsideRectUI(pos, UI.field.buttonInteract)) {
                        FieldPlayerHandler.interact(gameVar, gameVar.field.player)
                    }
                } else if (gameVar.state === 'info') {
                    this.infoWindow.handlePointer(gameVar, pos)
                } else if (gameVar.state === 'save') {
                    this.saveWindow.handlePointer(gameVar, pos)
                }
            } else {
                this.menuWindowField.handlePointer(gameVar, pos)
            }
        }
    }

    keyDown(gameVar, key) {
        if (gameVar.menu === false) {
            if (key === 'Escape' || key === 'q') {
                gameVar.menu = true
                gameVar.selectedMenuField = 0
            }
            if (gameVar.state === '') {
                if (key === 'i') {
                    gameVar.state = 'info'
                } else if (key === 'e') {
                    FieldPlayerHandler.interact(gameVar, gameVar.field.player)
                }
            } else if (gameVar.state === 'info') {
                if (key === 'i') {
                    gameVar.state = ''
                }
            } else if (gameVar.state === 'save') {
                this.saveWindow.handleKey(gameVar, key)
            }
        } else {
            this.menuWindowField.handleKey(gameVar, key)
        }
    }
}
