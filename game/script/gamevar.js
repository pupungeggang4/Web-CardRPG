import {Field} from 'field'

export class GameVar {
    constructor() {
        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        this.targetRect = this.canvas.getBoundingClientRect()

        this.menu = false
        this.state = ''
        this.frameCurrent = 0
        this.framePrevious = 0
        this.delta = 0
        this.gameLoop = null

        this.keyMapping = {
            'left': 'a', 'right': 'd', 'up': 'w', 'down': 's'
        }
        this.keyPressed = {
            'left': false, 'right': false, 'up': false, 'down': false
        }
        this.pointerPos = {x: 0, y: 0}
        this.pointerPressed = false

        this.save = {}

        this.field = new Field()
        this.scene = 'title'

        this.selectedTitle = 0
    }
}
