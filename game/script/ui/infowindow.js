class InfoWindow {
    constructor(game) {

    }

    render(game) {
        let ctx = game.ctx
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.info.rect)
        Render.strokeRectUI(ctx, UI.info.rect)
        ctx.fillStyle = 'black'

        Render.strokeRectUI(ctx, UI.info.buttonClose)
    }

    handlePointer(game, pos) {
        if (Util.pointInsideRectUI(pos, UI.info.buttonClose)) {
            game.state = ''
        }
    }
}
