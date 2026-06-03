import {Img} from 'asset'
import {FieldEntity} from 'fieldentity'

export class FieldSave extends FieldEntity {
    constructor(x, y) {
        super()
        this.sprite = Img.save
        this.gridPos.x = x
        this.gridPos.y = y
        this.rect.pos.x = this.gridPos.x * this.size
        this.rect.pos.y = this.gridPos.y * this.size
    }
}
