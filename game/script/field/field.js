class Field {
    constructor(game) {
        this.player = new FieldPlayer(game)
        this.camera = new Rect2(0, 0, 1280, 720)
    }

    render(game) {
        let ctx = game.ctx
        this.player.render(game, this.camera)
    }
}
