export class GameVar {
    constructor() {
        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')

        this.frameCurrent = 0
        this.framePrevious = 0
        this.delta = 0
        this.gameLoop = null
    }
}
