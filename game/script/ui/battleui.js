import {UI} from 'ui'

import {Render} from 'render'

export class BattleUI {
    constructor() {

    }

    render(gameVar) {
        let canvas = gameVar.canvas
        let ctx = gameVar.ctx
        let player = gameVar.battle.player

        Render.strokeRectUI(ctx, UI.battle.enemyHero)
        Render.strokeRectUI(ctx, UI.battle.playerHero)

        for (let i = 0; i < 6; i++) {
            let rect = [UI.battle.enemyUnit[0] + UI.battle.enemyUnit[2] * i, UI.battle.enemyUnit[1], UI.battle.enemyUnit[2], UI.battle.enemyUnit[3]]
            Render.strokeRectUI(ctx, rect)
            rect = [UI.battle.playerUnit[0] + UI.battle.playerUnit[2] * i, UI.battle.playerUnit[1], UI.battle.playerUnit[2], UI.battle.playerUnit[3]]
            Render.strokeRectUI(ctx, rect)
        }

        Render.strokeRectUI(ctx, UI.battle.crystalArea)
    }
}
