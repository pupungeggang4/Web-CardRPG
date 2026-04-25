class Game {
    constructor() {
        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        this.targetRect = this.canvas.getBoundingClientRect()

        window.addEventListener('pointerdown', (event) => this.pointerDown(event), false)
        window.addEventListener('pointermove', (event) => this.pointerMove(event), false)
        window.addEventListener('pointerup', (event) => this.pointerUp(event), false)
        window.addEventListener('resize', (event) => {
            this.targetRect = this.canvas.getBoundingClientRect()
        })
        this.canvas.addEventListener('contextmenu', (event) => this.rightClick(event), false)

        this.save = Util.loadSaveData()

        this.scene = new SceneTitle(this)
        this.menu = false
        this.state = ''
        this.field = new Field(this)

        this.keyPressed = {
            'left': false, 'right': false, 'up': false, 'down': false
        }
    }

    run() {
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
        let pos = {
            x: (event.clientX - this.targetRect.left) / this.targetRect.width * this.canvas.width,
            y: (event.clientY - this.targetRect.top) / this.targetRect.height * this.canvas.height
        }
        let button = event.button

        this.scene.pointerDown(this, pos, button)
    }

    pointerMove(event) {
        let pos = {
            x: (event.clientX - this.targetRect.left) / this.targetRect.width * this.canvas.width,
            y: (event.clientY - this.targetRect.top) / this.targetRect.height * this.canvas.height
        }

        this.scene.pointerMove(this, pos)
    }

    pointerUp(event) {
        let pos = {
            x: (event.clientX - this.targetRect.left) / this.targetRect.width * this.canvas.width,
            y: (event.clientY - this.targetRect.top) / this.targetRect.height * this.canvas.height
        }
        let button = event.button

        this.scene.pointerUp(this, pos, button)

    }

    rightClick(event) {
        event.preventDefault();
        return false
    }
}
