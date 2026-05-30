import {Img, Aud} from 'asset'
import {UI} from 'ui'
import {GameVar} from 'gamevar'

import {Util} from 'util'
import {Render} from 'render'

import {MenuWindowBattle} from 'menuwindowbattle'
import {BattleUI} from 'battleui'
import {Scene} from 'scene'

export class SceneBattle extends Scene {
    constructor() {
        super()
        this.menuWindowBattle = new MenuWindowBattle()
        this.battleUI = new BattleUI()
    }

    update(gameVar) {

    }

    render(gameVar) {
        let canvas = gameVar.canvas
        let ctx = gameVar.ctx

        ctx.setTransform(1, 0, 0, 1, 0, 0)
        Render.init(ctx)
        Render.clearCanvas(canvas, ctx)
        
        this.battleUI.render(gameVar)
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

    keyDown(gameVar, key) {
        if (gameVar.menu === false) {
            if (key === 'Escape' || key === 'q') {
                gameVar.menu = true
                gameVar.selectedMenuBattle = 0
            }
        } else if (gameVar.menu === true) {
            this.menuWindowBattle.handleKey(gameVar, key)
        }
    }
}
