import {UI} from 'ui'
import {Vec2, Rect2} from 'primitive'
import {FieldEntity} from 'fieldentity'

export class FieldPlayer extends FieldEntity {
    constructor(game) {
        super(game)
        this.moveMap = {
            'left': new Vec2(-1, 0), 'right': new Vec2(1, 0),
            'up': new Vec2(0, -1), 'down': new Vec2(0, 1)
        }
        this.moveArea = UI.field.arrow
        this.moving = false
        this.movedDistance = 0
        this.movingDirection = new Vec2(0, 0)
        this.speed = 300
    }
}
