import {BattlePlayer} from 'battleplayer'
import {BattleEnemy} from 'battleenemy'

export class Battle {
    constructor() {
        this.player = new BattlePlayer()
        this.enemy = new BattleEnemy()
        this.field = []
    }
}
