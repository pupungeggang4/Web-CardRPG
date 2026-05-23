import {UI} from 'ui'
import {GameVar} from 'gamevar'

import {Render} from 'render'
import {Util} from 'util'

export class MenuWindowField {
    constructor() {

    }

    render(gameVar) {
        let ctx = gameVar.ctx
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.menuField.rect)
        Render.strokeRectUI(ctx, UI.menuField.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, "Paused", UI.menuField.textPaused)
        Render.strokeRectUI(ctx, UI.menuField.buttonResume)
        Render.fillTextUI(ctx, "Resume", UI.menuField.textResume)
        Render.strokeRectUI(ctx, UI.menuField.buttonSave)
        Render.fillTextUI(ctx, "Save Data", UI.menuField.textSave)
        Render.strokeRectUI(ctx, UI.menuField.buttonExit)
        Render.fillTextUI(ctx, "Exit to Title", UI.menuField.textExit)
    }

    handlePointer(gameVar, pos) {
        if (Util.pointInsideRectUI(pos, UI.menuField.buttonResume)) {
            gameVar.menu = false
        } else if (Util.pointInsideRectUI(pos, UI.menuField.buttonSave)) {
            gameVar.menu = false
        } else if (Util.pointInsideRectUI(pos, UI.menuField.buttonExit)) {
            gameVar.menu = false
            gameVar.scene = 'title'
        }
    }
}
