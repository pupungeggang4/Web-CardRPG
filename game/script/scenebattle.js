import {Img, Aud} from 'asset'
import {UI} from 'ui'
import {GameVar} from 'gamevar'

import {Util} from 'util'
import {Render} from 'render'

import {MenuWindowBattle} from 'menuwindowbattle'
import {Scene} from 'scene'

export class SceneBattle {
    constructor() {
        this.menuWindowBattle = new MenuWindowBattle()
    }

    update(gameVar) {

    }

    render(gameVar) {
        let canvas = gameVar.canvas
        let ctx = gameVar.ctx

        Render.init(ctx)
        Render.clearCanvas(canvas, ctx)
        gameVar.ctx.fillStyle = 'white'
        Render.fillCanvas(canvas, ctx)
        gameVar.ctx.fillStyle = 'black'

        Render.drawImageUI(ctx, Img.buttonMenu, UI.battle.buttonMenu)

        if (gameVar.menu === true) {
            this.menuWindowBattle.render(gameVar)
        }
    }

    pointerDown(gameVar, pos, button) {
        if (button === 0) {
            if (gameVar.menu === false) {
                if (Util.pointInsideRectUI(pos, UI.battle.buttonMenu)) {
                    gameVar.menu = true
                }
            } else if (gameVar.menu === true) {
                if (Util.pointInsideRectUI(pos, UI.battle.buttonMenu)) {
                    gameVar.menu = false
                }

                this.menuWindowBattle.handlePointer(gameVar, pos)
            }
        }
    }

    pointerMove(gameVar, pos) {

    }

    pointerUp(gameVar, pos, button) {

    }
}
