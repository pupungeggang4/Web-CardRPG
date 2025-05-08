class SceneTitle {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.fillTextUI(game.ctx, 'Card RPG', UI.title.textTitle)
        Render.strokeRectUI(game.ctx, UI.title.buttonStart)
        Render.fillTextUI(game.ctx, 'Start Game [S]', UI.title.textStart)
        Render.strokeRectUI(game.ctx, UI.title.buttonErase)
        Render.fillTextUI(game.ctx, 'Erase [E]', UI.title.textErase)
    }

    static keyDown(game, key) {

    }

    static keyUp(game, key) {
        if (key === 's') {
            game.fieldTransition()
        }
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (pointInsideRectUI(pos, UI.title.buttonStart)) {
                game.fieldTransition()
            }
        }
    }
}
