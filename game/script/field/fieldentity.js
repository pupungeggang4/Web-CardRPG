class FieldEntity {
    constructor(game) {
        this.rect = new Rect2(0, 0, 64, 64)
        this.gridPos = new Vec2(0, 0)
        this.sprite = null
    }

    update(game) {

    }

    render(game) {
        let ctx = game.ctx
        let camera = game.field.camera
        ctx.setTransform(1, 0, 0, 1, this.rect.pos.x - camera.pos.x + camera.size.x / 2, this.rect.pos.y - camera.pos.y + camera.size.y / 2)
        if (this.sprite != null) {
            ctx.drawImage(this.sprite, -this.rect.pos.x / 2, -this.rect.pos.y / 2, this.rect.size.x, this.rect.size.y)
        } else {
            ctx.strokeRect(-this.rect.size.x / 2, -this.rect.size.y / 2, this.rect.size.x, this.rect.size.y)
        }
    }
}
