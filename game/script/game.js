class Game {
    constructor() {
        this.scene = null
        this.menu = false
        this.state = ''

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')

        this.canvas.addEventListener('pointerdown', (event) => this.pointerDown(event), false)
        this.canvas.addEventListener('pointermove', (event) => this.pointerMove(event), false)
        this.canvas.addEventListener('pointerup', (event) => this.pointerUp(event), false)
    }

    run() {
        this.scene = new SceneTitle(this)

        this.frameCurrent = performance.now()
        this.framePrevious = performance.now()
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.frameCurrent = performance.now()
        this.dt = (this.frameCurrent - this.framePrevious) / 1000
        this.framePrevious = this.frameCurrent

        this.update()
        this.render()
        
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    update() {
        this.scene.update(this)
    }

    render() {
        this.scene.render(this)
    }

    pointerDown(event) {
        
    }

    pointerMove(event) {

    }

    pointerUp(event) {

    }
}
