import {Img} from 'asset'

import {UI} from 'ui'
import {GameVar} from 'gamevar'

import {Render} from 'render'
import {Util} from 'util'

export class SaveWindow {
    constructor() {

    }

    render(gameVar) {
        let canvas = gameVar.canvas
        let ctx = gameVar.ctx
        
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.saveWindow.rect)
        Render.strokeRectUI(ctx, UI.saveWindow.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, 'Save?', UI.saveWindow.textSave)
        Render.strokeRectUI(ctx, UI.saveWindow.buttonYes)
        Render.fillTextUI(ctx, 'Yes', UI.saveWindow.textYes)
        Render.strokeRectUI(ctx, UI.saveWindow.buttonNo)
        Render.fillTextUI(ctx, 'No', UI.saveWindow.textNo)

        Render.drawImageUI(ctx, Img.arrowRight, UI.saveWindow.arrow[gameVar.selectedSave])
    }

    handlePointer(gameVar, pos) {
        if (Util.pointInsideRectUI(pos, UI.saveWindow.buttonYes)) {
            gameVar.state = ''
        } else if (Util.pointInsideRectUI(pos, UI.saveWindow.buttonNo)) {
            gameVar.state = ''
        }
    }

    handleKey(gameVar, key) {
        if (key === 'Escape') {
            gameVar.state = ''
        } else if (key === 'ArrowLeft' || key === 'a') {
            gameVar.selectedSave = (gameVar.selectedSave + 1) % 2
        } else if (key === 'ArrowRight' || key === 'd') {
            gameVar.selectedSave = (gameVar.selectedSave + 1) % 2
        } else if (key === 'Enter') {
            if (gameVar.selectedSave === 0) {
                gameVar.state = ''
            } else {
                gameVar.state = ''
            }
        }
    }
}
