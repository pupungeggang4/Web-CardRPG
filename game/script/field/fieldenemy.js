class FieldEnemy extends FieldEntity {
    constructor(game) {
        super(game)
        this.rect.pos.x = 320
    }

    update(game) {
        let field = game.field
        let player = field.player
        
        if (this.rect.pos.distance(player.rect.pos) < 80) {
            game.scene = new SceneBattle(game)
            game.field.entityList.splice(game.field.entityList.indexOf(this), 1)
        }
    }
}
