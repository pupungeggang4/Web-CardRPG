class Game {
    constructor() {
        this.scene = 'title'
        this.state = ''
        this.menu = false

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')

        window.addEventListener('mouseup', (event) => this.mouseUp(event), false)
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
        }

        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    mouseUp(event) {

    }

    keyDown(event) {

    }

    keyUp(event) {

    }
}
