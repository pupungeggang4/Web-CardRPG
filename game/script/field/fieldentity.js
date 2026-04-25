class FieldEntity {
    constructor(game) {
        this.rect = new Rect2(0, 0, 80, 80)
    }

    render(game, camera) {
        let ctx = game.ctx
        ctx.setTransform(1, 0, 0, 1, this.rect.pos.x - camera.pos.x + camera.size.x / 2, this.rect.pos.y - camera.pos.y + camera.size.y / 2)
        ctx.strokeRect(-this.rect.size.x / 2, -this.rect.size.y / 2, this.rect.size.x, this.rect.size.y)
    }
}
