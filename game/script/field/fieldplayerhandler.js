import {Vec2, Rect2} from 'primitive'

import {FieldPlayer} from 'fieldplayer'
import {FieldEnemy} from 'fieldenemy'

import {Util} from 'util'

export class FieldPlayerHandler {
    static update(gameVar, player) {
        let movable = false
        if (player.moving === false) {
            for (const k in player.moveMap) {
                if (gameVar.keyPressed[k]) {
                    let tempPosition = Vec2.add(player.gridPos, player.moveMap[k])
                    player.gridPos = tempPosition
                    player.movingDirection = player.moveMap[k]
                    movable = true
                    break
                }
            }

            if (gameVar.pointerPressed) {
                for (const k in player.moveMap) {
                    if (Util.pointInsideRectUI(gameVar.pointerPos, player.moveArea[k])) {
                        let tempPosition = Vec2.add(player.gridPos, player.moveMap[k])
                        player.gridPos = tempPosition
                        player.movingDirection = player.moveMap[k]
                        movable = true
                        break
                    }
                }
            }

            if (movable === true) {
                player.moving = true
                player.movedDistance = 0
            }
        } else {
            player.movedDistance += player.speed * gameVar.dt
            if (player.movedDistance > 64) {
                player.rect.pos = new Vec2(player.gridPos.x * 64, player.gridPos.y * 64)
                player.moving = false
                this.enemyCollideCheck(gameVar, player)
            } else {
                player.rect.pos.x += player.speed * player.movingDirection.x * gameVar.dt
                player.rect.pos.y += player.speed * player.movingDirection.y * gameVar.dt
            }
        }
    }

    static render(gameVar, player) {
        let ctx = gameVar.ctx
        let camera = gameVar.field.camera

        ctx.setTransform(1, 0, 0, 1, player.rect.pos.x - camera.pos.x + camera.size.x / 2, player.rect.pos.y - camera.pos.y + camera.size.y / 2)
        if (player.sprite != null) {
            ctx.drawImage(player.sprite, -player.rect.pos.x / 2, -player.rect.pos.y / 2, player.rect.size.x, player.rect.size.y)
        } else {
            ctx.strokeRect(-player.rect.size.x / 2, -player.rect.size.y / 2, player.rect.size.x, player.rect.size.y)
        }
    }

    static enemyCollideCheck(gameVar, player) {
        for (let i = 0; i < gameVar.field.entityList.length; i++) {
            if (gameVar.field.entityList[i] instanceof FieldEnemy) {
                if (Vec2.equals(player.gridPos, gameVar.field.entityList[i].gridPos)) {
                    gameVar.field.entityList.splice(i, 1)
                    gameVar.scene = 'battle'
                    break
                }
            }
        }
    }
}
