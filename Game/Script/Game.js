class Game {
    constructor() {
        this.scene = 'title'
        this.state = ''
        this.menu = false

        this.canvas = document.getElementById('screen')
        this.ctx = this.cavnas.getContext('2d')

        loop() {

        }
    }
}
