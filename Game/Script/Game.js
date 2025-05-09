class Game {
    constructor() {
        this.saveStatus = {}
        this.loadData()

        this.scene = 'title'
        this.state = ''
        this.menu = false

        this.keyMap = {
            'left': 'a', 'right': 'd', 'up': 'w', 'down': 's'
        }

        this.keyPressed = {
            'left': false, 'right': false, 'up': false, 'down': false
        }

        this.player = new Player()
        this.field = new Field()

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

    loadData() {
        let temp = localStorage.getItem('pupungeggang4-CardRPG')
        if (temp === null) {
            localStorage.setItem('pupungeggang4-CardRPG', JSON.stringify(emptySave))
        }
        this.saveStatus = JSON.parse(localStorage.getItem('pupungeggang4-CardRPG'))
    }

    saveData() {
        localStorage.setItem('pupungeggang4-CardRPG', JSON.stringify(this.saveStatus))
    }

    eraseData() {
        localStorage.setItem('pupungeggang4-CardRPG', JSON.stringify(emptySave))
        this.saveStatus = JSON.parse(localStorage.getItem('pupungeggang4-CardRPG'))
    }

    fieldTransition() {
        this.scene = 'field'
        this.state = ''
        this.player = new Player()
        this.player.loadFromSave(this)
        this.field = new Field()
        this.field.loadFromData(this.player.place)
        this.field.setPlayer(this.player)
    }

    loop() {
        this.framePrevious = this.frameCurrent
        this.frameCurrent = performance.now()
        this.delta = this.frameCurrent - this.framePrevious
        
        if (this.scene === 'title') {
            SceneTitle.loop(this)
        } else if (this.scene === 'field') {
            SceneField.loop(this)
        } else if (this.scene === 'battle') {
            SceneBattle.loop(this)
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
            SceneTitle.mouseUp(this, pos, button)
        } else if (this.scene === 'field') {
            SceneField.mouseUp(this, pos, button)
        } else if (this.scene === 'battle') {
            SceneBattle.mouseUp(this, pos, button)
        }
    }

    keyDown(event) {
        let key = event.key

        for (let k in this.keyPressed) {
            if (key === this.keyMap[k]) {
                this.keyPressed[k] = true
            }
        }

        if (this.scene === 'title') {
            SceneTitle.keyDown(this, key)
        } else if (this.scene === 'field') {
            SceneField.keyDown(this, key)
        } else if (this.scene === 'battle') {
            SceneBattle.keyDown(this, key)
        }
    }

    keyUp(event) {
        let key = event.key

        for (let k in this.keyPressed) {
            if (key === this.keyMap[k]) {
                this.keyPressed[k] = false
            }
        }

        if (this.scene === 'title') {
            SceneTitle.keyUp(this, key)
        } else if (this.scene === 'field') {
            SceneField.keyUp(this, key)
        } else if (this.scene === 'battle') {
            SceneBattle.keyUp(this, key)
        }
    }
}

function pointInsideRectUI(pos, rect) {
    return pos.x > rect[0] && pos.x < rect[0] + rect[2] && pos.y > rect[1] && pos.y < rect[1] + rect[3]
}

function cellInsideArray(row, col, aRow, aCol) {
    return row >= 0 && col >= 0 && row < aRow && col < aCol
}
