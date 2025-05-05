class Game {
    constructor() {
        this.scene = 'title'
        this.state = ''
        this.menu = false

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')

        this.canvas.addEventListener('mouseup', (event) => this.mouseUp(event), false)
        window.addEventListener('keydown', (event) => this.keyDown(event), false)
        window.addEventListener('keyup', (event) => this.keyUp(event), false)

        this.frameCurrent = performance.now()
        this.framePrevious = performance.now()
        this.delta = 16
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.framePrevious = this.frameCurrent
        this.frameCurrent = performance.now()
        this.delta = this.frameCurrent - this.framePrevious
        
        if (game.scene === 'title') {
            SceneTitle.loop(game)
        } else if (game.scene === 'field') {
            SceneField.loop(game)
        } else if (game.scene === 'battle') {
            SceneBattle.loop(game)
        }

        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    mouseUp(event) {
        let targetRect = this.canvas.getBoundingClientRect()
        let pos = {
            x: (event.clientX - targetRect.left) / targetRect.width * this.canvas.width,
            y: (event.clientY - targetRect.top) / targetRect.height * this.canvas.height
        }
        let button = event.button

        if (this.scene === 'title') {
            SceneTitle.mouseUp(game, pos, button)
        } else if (this.scene === 'field') {
            SceneField.mouseUp(game, pos, button)
        } else if (this.scene === 'battle') {
            SceneBattle.mouseUp(game, pos, button)
        }
    }

    keyDown(event) {
        let key = event.key

        if (this.scene === 'title') {
            SceneTitle.keyDown(game, key)
        } else if (this.scene === 'field') {
            SceneField.keyDown(game, key)
        } else if (this.scene === 'battle') {
            SceneBattle.keyDown(game, key)
        }
    }

    keyUp(event) {
        let key = event.key

        if (this.scene === 'title') {
            SceneTitle.keyUp(game, key)
        } else if (this.scene === 'field') {
            SceneField.keyUp(game, key)
        } else if (this.scene === 'battle') {
            SceneBattle.keyUp(game, key)
        }
    }
}

function pointInsideRectUI(pos, rect) {
    return pos.x > rect[0] && pos.x < rect[0] + rect[2] && pos.y > rect[1] && pos.y < rect[1] + rect[3]
}
