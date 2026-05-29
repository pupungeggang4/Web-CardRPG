import {UI} from 'ui'
import {GameVar} from 'gamevar'

import {Util} from 'util'
import {Render} from 'render'

import {Scene} from 'scene'

export class SceneCollection extends Scene {
    constructor() {
        super()
    }

    update(gameVar) {

    }

    render(gameVar) {
        let canvas = gameVar.canvas
        let ctx = gameVar.ctx

        Render.init(ctx)
        Render.clearCanvas(canvas, ctx)

        Render.strokeRectUI(ctx, UI.collection.buttonBack)
    }

    pointerUp(gameVar, pos, button) {
        if (button === 0) {
            if (Util.pointInsideRectUI(pos, UI.collection.buttonBack)) {
                gameVar.scene = 'title'
            }
        }
    }

    pointerMove(gameVar, pos) {

    }

    pointerDown(gameVar, pos, button) {

    }
}
