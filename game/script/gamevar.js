import {Field} from 'field'
import {Battle} from 'battle'
import {Player} from 'player'

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

        this.player = new Player()
        this.field = new Field()
        this.battle = new Battle()
        this.scene = 'title'

        this.selectedTitle = 0
        this.selectedMenuField = 0
        this.selectedMenuBattle = 0
        this.selectedSave = 0
    }
}
