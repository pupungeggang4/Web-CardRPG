import {FieldEntity} from 'fieldentity'
import {FieldSave} from 'fieldsave'

export class FieldEntityHandler {
    static updateEntity(gameVar, entity) {

    }

    static renderEntity(gameVar, entity) {
        let ctx = gameVar.ctx
        let camera = gameVar.field.camera

        if (entity.sprite != null) {
            ctx.drawImage(entity.sprite, entity.rect.pos.x - entity.rect.size.x / 2, entity.rect.pos.y - entity.rect.size.y / 2, entity.rect.size.x, entity.rect.size.y)
        } else {
            ctx.strokeRect(entity.rect.pos.x - entity.rect.size.x / 2, entity.rect.pos.y - entity.rect.size.y / 2, entity.rect.size.x, entity.rect.size.y)
        }
    }
}
