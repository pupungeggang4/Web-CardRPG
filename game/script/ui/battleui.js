import {UI} from 'ui'

import {Render} from 'render'

export class BattleUI {
    constructor() {

    }

    render(gameVar) {
        let canvas = gameVar.canvas
        let ctx = gameVar.ctx
        let player = gameVar.battle.player

        Render.strokeRectUI(ctx, UI.battle.crystalArea)
    }
}
