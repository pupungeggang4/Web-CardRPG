class SceneBattle {
    constructor(game) {
        this.menuWindowBattle = new MenuWindowBattle(game)
    }

    update(game) {

    }

    render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        game.ctx.fillStyle = 'white'
        Render.fillCanvas(game.canvas, game.ctx)
        game.ctx.fillStyle = 'black'

        Render.drawImageUI(game.ctx, Img.buttonMenu, UI.battle.buttonMenu)

        if (game.menu === true) {
            this.menuWindowBattle.render(game)
        }
    }

    pointerDown(game, pos, button) {
        if (button === 0) {
            if (game.menu === false) {
                if (Util.pointInsideRectUI(pos, UI.battle.buttonMenu)) {
                    game.menu = true
                }
            } else if (game.menu === true) {
                if (Util.pointInsideRectUI(pos, UI.battle.buttonMenu)) {
                    game.menu = false
                }

                this.menuWindowBattle.handlePointer(game, pos)
            }
        }
    }

    pointerMove(game, pos) {

    }

    pointerUp(game, pos, button) {

    }
}
