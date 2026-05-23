import {UI} from 'ui'
import {GameVar} from 'gamevar'

import {Render} from 'render'
import {Util} from 'util'

export class MenuWindowBattle {
    render(gameVar) {
        let ctx = gameVar.ctx
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.menuBattle.rect)
        Render.strokeRectUI(ctx, UI.menuBattle.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, "Paused", UI.menuBattle.textPaused)
        Render.strokeRectUI(ctx, UI.menuBattle.buttonResume)
        Render.fillTextUI(ctx, "Resume", UI.menuBattle.textResume)
        Render.strokeRectUI(ctx, UI.menuBattle.buttonSurrender)
        Render.fillTextUI(ctx, "Surrender", UI.menuBattle.textSurrender)
        Render.strokeRectUI(ctx, UI.menuBattle.buttonExit)
        Render.fillTextUI(ctx, "Exit to Title", UI.menuBattle.textExit)
    }

    handlePointer(gameVar, pos) {
        if (Util.pointInsideRectUI(pos, UI.menuBattle.buttonResume)) {
            gameVar.menu = false
        } else if (Util.pointInsideRectUI(pos, UI.menuBattle.buttonSurrender)) {
            gameVar.menu = false
            gameVar.scene = 'field'
        } else if (Util.pointInsideRectUI(pos, UI.menuBattle.buttonExit)) {
            gameVar.menu = false
            gameVar.scene = 'title'
        }
    }
}
