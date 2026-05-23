import {FieldEntity} from 'fieldentity'
import {FieldSave} from 'fieldsave'

export class FieldEntityHandler {
    static updateEntity(gameVar, entity) {

    }

    static renderEntity(gameVar, entity) {
        let ctx = gameVar.ctx
        let camera = gameVar.field.camera

        ctx.setTransform(1, 0, 0, 1, entity.rect.pos.x - camera.pos.x + camera.size.x / 2, entity.rect.pos.y - camera.pos.y + camera.size.y / 2)
        if (entity.sprite != null) {
            ctx.drawImage(entity.sprite, -entity.rect.pos.x / 2, -entity.rect.pos.y / 2, entity.rect.size.x, entity.rect.size.y)
        } else {
            ctx.strokeRect(-entity.rect.size.x / 2, -entity.rect.size.y / 2, entity.rect.size.x, entity.rect.size.y)
        }
    }
}
