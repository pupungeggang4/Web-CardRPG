import {UI} from 'ui'
import {GameVar} from 'gamevar'

import {Render} from 'render'
import {Util} from 'util'

export class InfoWindow {
    constructor() {

    }

    render(gameVar) {
        let ctx = gameVar.ctx
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.info.rect)
        Render.strokeRectUI(ctx, UI.info.rect)
        ctx.fillStyle = 'black'

        Render.strokeRectUI(ctx, UI.info.buttonClose)
    }

    handlePointer(gameVar, pos) {
        if (Util.pointInsideRectUI(pos, UI.info.buttonClose)) {
            gameVar.state = ''
        }
    }
}
