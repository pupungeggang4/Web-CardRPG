class FieldPlayer extends FieldEntity {
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

    update(game) {
        let movable = false
        if (this.moving === false) {
            for (const k in this.moveMap) {
                if (game.keyPressed[k]) {
                    let tempPosition = Vec2.add(this.gridPos, this.moveMap[k])
                    this.gridPos = tempPosition
                    this.movingDirection = this.moveMap[k]
                    movable = true
                    break
                }
            }

            if (game.pointerPressed) {
                for (const k in this.moveMap) {
                    if (Util.pointInsideRectUI(game.pointerPos, this.moveArea[k])) {
                        let tempPosition = Vec2.add(this.gridPos, this.moveMap[k])
                        this.gridPos = tempPosition
                        this.movingDirection = this.moveMap[k]
                        movable = true
                        break
                    }
                }
            }

            if (movable === true) {
                this.moving = true
                this.movedDistance = 0
            }
        } else {
            this.movedDistance += this.speed * game.dt
            if (this.movedDistance > 64) {
                this.rect.pos = new Vec2(this.gridPos.x * 64, this.gridPos.y * 64)
                this.moving = false
                this.enemyCollideCheck(game)
            } else {
                this.rect.pos.x += this.speed * this.movingDirection.x * game.dt
                this.rect.pos.y += this.speed * this.movingDirection.y * game.dt
            }
        }
    }

    enemyCollideCheck(game) {
        for (let i = 0; i < game.field.entityList.length; i++) {
            if (game.field.entityList[i] instanceof FieldEnemy) {
                if (Vec2.equals(this.gridPos, game.field.entityList[i].gridPos)) {
                    game.field.entityList.splice(i, 1)
                    game.scene = new SceneBattle(game)
                    break
                }
            }
        }
    }
}
