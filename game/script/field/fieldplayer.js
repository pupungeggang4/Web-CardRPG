class FieldPlayer extends FieldEntity {
    constructor(game) {
        super(game)
        this.speed = 300
    }

    update(game) {
        if (game.keyPressed['left'] === true) {
            this.rect.pos.x -= this.speed * game.dt
        }
        if (game.keyPressed['right'] === true) {
            this.rect.pos.x += this.speed * game.dt
        }
        if (game.keyPressed['up'] === true) {
            this.rect.pos.y -= this.speed * game.dt
        }
        if (game.keyPressed['down'] === true) {
            this.rect.pos.y += this.speed * game.dt
        }
    }
}
