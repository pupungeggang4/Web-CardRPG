import {Rect2} from 'primitive'

import {FieldPlayer} from 'fieldplayer'
import {FieldEnemy} from 'fieldenemy'

export class Field {
    constructor() {
        this.player = new FieldPlayer()
        this.camera = new Rect2(0, 0, 1280, 720)
        this.entityList = [new FieldEnemy(2, 2), new FieldEnemy(2, -2)]
    }
}
