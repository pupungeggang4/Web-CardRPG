class FieldEnemy extends FieldEntity {
    constructor(game, x, y) {
        super(game)
        this.gridPos.x = x
        this.gridPos.y = y
        this.rect.pos.x = this.gridPos.x * 64
        this.rect.pos.y = this.gridPos.y * 64
    }

    update(game) {
    }
}
