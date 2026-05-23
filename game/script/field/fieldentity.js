import {Vec2, Rect2} from 'primitive'

export class FieldEntity {
    constructor() {
        this.rect = new Rect2(0, 0, 64, 64)
        this.gridPos = new Vec2(0, 0)
        this.sprite = null
    }
}
