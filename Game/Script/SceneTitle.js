class SceneTitle {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.fillTextUI(game.ctx, 'Card RPG', UI.title.textTitle)
        Render.strokeRectUI(game.ctx, UI.title.buttonStart)
        Render.fillTextUI(game.ctx, 'Start Game', UI.title.textStart)
        Render.strokeRectUI(game.ctx, UI.title.buttonErase)
        Render.fillTextUI(game.ctx, 'Erase', UI.title.textErase)
    }

    static keyDown(game, key) {

    }

    static keyUp(game, key) {

    }

    static mouseUp(game, pos, button) {

    }
}
