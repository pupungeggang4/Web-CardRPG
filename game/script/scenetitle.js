import {UI} from 'ui'
import {GameVar} from 'gamevar'

import {Util} from 'util'
import {Render} from 'render'

import {Scene} from 'scene'

export class SceneTitle extends Scene {
    static update(gameVar) {
        
    }

    static render(gameVar) {
        let canvas = gameVar.canvas
        let ctx = gameVar.ctx
        
        Render.init(ctx)
        Render.clearCanvas(canvas, ctx)
        gameVar.ctx.fillStyle = 'white'
        Render.fillCanvas(canvas, ctx)
        gameVar.ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, "Card RPG", UI.title.textTitle)
        Render.strokeRectUI(ctx, UI.title.buttonStart)
        Render.fillTextUI(ctx, "Start Game", UI.title.textStart)
        Render.strokeRectUI(ctx, UI.title.buttonCollection)
        Render.fillTextUI(ctx, "Collection", UI.title.textCollection)
        Render.strokeRectUI(ctx, UI.title.buttonErase)
        Render.fillTextUI(ctx, "Erase Data", UI.title.textErase)

        Render.strokeRectUI(ctx, UI.title.arrow[gameVar.selectedTitle])
    }

    static pointerDown(gameVar, pos, button) {

    }

    static pointerMove(gameVar, pos) {

    }

    static pointerUp(gameVar, pos, button) {
        if (button === 0) {
            if (Util.pointInsideRectUI(pos, UI.title.buttonStart)) {
                gameVar.scene = 'field'
            } else if (Util.pointInsideRectUI(pos, UI.title.buttonCollection)) {
                gameVar.scene = 'collection'
            } else if (Util.pointInsideRectUI(pos, UI.title.buttonErase)) {
                gameVar.save = Util.eraseSaveData()
            }
        }
    }

    static keyDown(gameVar, key) {
        if (key === 'w' || key === 'ArrowUp') {
            gameVar.selectedTitle = (gameVar.selectedTitle + 2) % 3
        } else if (key === 's' || key === 'ArrowDown') {
            gameVar.selectedTitle = (gameVar.selectedTitle + 1) % 3
        }
        if (key === 'Enter') {
            if (gameVar.selectedTitle === 0)
                gameVar.scene = 'field'
            else if (gameVar.selectedTitle === 1)
                gameVar.scene = 'collection'
            else if (gameVar.selectedTitle === 2)
                gameVar.save = Util.eraseSaveData()
        }
    }
}
