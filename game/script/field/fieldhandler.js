import {Field} from 'field'
import {FieldPlayerHandler} from 'fieldplayerhandler'
import {FieldEntityHandler} from 'fieldentityhandler'

export class FieldHandler {
    static update(gameVar, field) {
        FieldPlayerHandler.update(gameVar, field.player)

        for (let i = 0 ; i < field.entityList.length; i++) {
            FieldEntityHandler.updateEntity(gameVar, field.entityList[i])
        }

        field.camera.pos.x = field.player.rect.pos.x
        field.camera.pos.y = field.player.rect.pos.y
    }

    static render(gameVar, field) {
        let ctx = gameVar.ctx
        let camera = field.camera

        ctx.setTransform(1, 0, 0, 1, -camera.pos.x + camera.size.x / 2, -camera.pos.y + camera.size.y / 2)

        for (let i = 0; i < field.wall.length; i++) {
            ctx.fillRect(field.wall[i][0] * 64 - 32, field.wall[i][1] * 64 - 32, 64, 64)
        }

        for (let i = 0; i < field.entityList.length; i++) {
            FieldEntityHandler.renderEntity(gameVar, field.entityList[i])
        }

        FieldPlayerHandler.render(gameVar, field.player)
    }
}

