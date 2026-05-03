class Field {
    constructor(game) {
        this.player = new FieldPlayer(game)
        this.camera = new Rect2(0, 0, 1280, 720)
        this.entityList = [new FieldEnemy(game), new FieldEnemy(game)]
        this.entityList[1].rect.pos.y = -320
    }

    update(game) {
        this.player.update(game)
        for (let i = 0; i < this.entityList.length; i++) {
            this.entityList[i].update(game)
        }
        this.camera.pos.x = this.player.rect.pos.x
        this.camera.pos.y = this.player.rect.pos.y
    }

    render(game) {
        let ctx = game.ctx
        for (let i = 0; i < this.entityList.length; i++) {
            this.entityList[i].render(game)
        }
        this.player.render(game)
    }
}
