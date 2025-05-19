class PlayerAdventure {
    constructor() {
        this.place = ''
        this.position = [0, 0]
        this.facing = ''
        this.moving = false
        this.tempPlace = ''
        this.tempCoord = [0, 0]
        this.adventureMode = false

        this.rect = new Rect2D(0, 0, 80, 80)
        this.speed = 320.0
        this.moveset = {'up': [-1, 0], 'left': [0, -1], 'down': [1, 0], 'right': [0, 1]}
        this.moveVector = new Vector2D(0, 0)

        this.canvas = document.createElement('canvas')
        this.canvas.width = 80
        this.canvas.height = 80
        this.ctx = this.canvas.getContext('2d')
    }

    handleTick(game, field) {
        this.move(game, field)
    }

    move(game, field) {
        if (this.moving === false) {
            for (let k in game.keyPressed) {
                if (game.keyPressed[k] === true) {
                    let tempPosition = [this.position[0] + this.moveset[k][0], this.position[1] + this.moveset[k][1]]
                    if (cellInsideArray(tempPosition[0], tempPosition[1], field.size[0], field.size[1])) {
                        if (field.wall[tempPosition[0]][tempPosition[1]] === 0) {
                            this.position = tempPosition
                            this.moveVector = new Vector2D(this.position[1] * 80 + 40, this.position[0] * 80 + 40)
                            this.moving = true
                            break
                        }
                    }
                }
            }
        } else {
            let diff = Vector2D.VecSub(this.moveVector, this.rect.position)
            if (Vector2D.VecNorm(diff) < 10) {
                this.rect.position.x = this.moveVector.x
                this.rect.position.y = this.moveVector.y
                this.moving = false
            } else {
                let diffN = Vector2D.VecNormalize(diff)
                this.rect.position.x += diffN.x * this.speed * game.delta / 1000
                this.rect.position.y += diffN.y * this.speed * game.delta / 1000
            }
        }
    }

    moveDirection(game, field, direction) {
        if (this.moving === false) {
            let tempPosition = [this.position[0] + this.moveset[direction][0], this.position[1] + this.moveset[direction][1]]
            if (cellInsideArray(tempPosition[0], tempPosition[1], field.size[0], field.size[1])) {
                if (field.wall[tempPosition[0]][tempPosition[1]] === 0) {
                    this.position = tempPosition
                    this.moveVector = new Vector2D(this.position[1] * 80 + 40, this.position[0] * 80 + 40)
                    this.moving = true
                }
            }
        }
    }

    interact(game, field) {
        let thing = field.tile[this.position[0]][this.position[1]]
        if (thing.constructor === Portal) {
            this.tempPlace = thing.destination
            this.tempCoord = JSON.parse(JSON.stringify(thing.destCoord))

            if (this.adventureMode === false && dataField[this.tempPlace]['village'] === false) {
                game.state = 'adventure_start'
            } else if (this.adventureMode === true && dataField[this.tempPlace]['village'] === true) {
                game.state = 'adventure_end'
            } else {
                this.fieldMove(game, field)
            }
        } else if (thing.constructor === Monster) {
            field.tile[this.position[0]][this.position[1]] = new Empty()
            let s = field.spawned[this.place]['monster']
            for (let i in s) {
                if (s[i][0] === this.position[0] && s[i][1] === this.position[1]) {
                    s.splice(i, 1)
                    break
                }
            }
            game.scene = 'battle'
            game.state = ''
        }
    }

    fieldMove(game, field) {
        field.loadFromData(this.tempPlace)
        this.place = this.tempPlace
        game.player.place = this.place
        this.position = JSON.parse(JSON.stringify(this.tempCoord))
        this.rect.position = new Vector2D(this.position[1] * 80 + 40, this.position[0] * 80 + 40)
    }

    render(game, field) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        Render.renderImage(field.ctx, this.canvas, this.rect)
    }
}

class Field {
    constructor() {
        this.player = new PlayerAdventure()
        this.tile = []
        this.wall = []
        this.spawn = [0, 0]
        this.size = [0, 0]
        this.thing = []
        this.spawned = {}

        this.camera = new Rect2D(40, 40, 1280, 720)
        this.rect = new Rect2D(0, 0, 0, 0)
        this.canvas = document.createElement('canvas')
        this.canvas.width = 0
        this.canvas.height = 0
        this.ctx = this.canvas.getContext('2d')
    }

    setPlayer(player) {
        this.player.place = player.place
        this.player.position[0] = this.spawn[0]
        this.player.position[1] = this.spawn[1]
        this.player.rect.position.x = this.player.position[1] * 80 + 40
        this.player.rect.position.y = this.player.position[0] * 80 + 40
    }

    loadFromData(place) {
        let data = JSON.parse(JSON.stringify(dataField[place]))
        this.wall = data['wall']
        this.tile = []
        this.size = data['size']
        
        for (let i = 0; i < data['size'][0]; i++) {
            let temp = []
            for (let j = 0; j < data['size'][1]; j++) {
                temp.push(new Empty())
            }
            this.tile.push(temp)
        }
        
        for (let i = 0; i < data['thing'].length; i++) {
            let t = data['thing'][i]
            if (t[0] === 'portal') {
                let thing = new Portal()
                thing.setData(t[2], t[3])
                this.tile[t[1][0]][t[1][1]] = thing
                thing.rect.position = new Vector2D(t[1][1] * 80 + 40, t[1][0] * 80 + 40)
            }
        }

        if (data['village'] === false) {
            for (let i = 0; i < this.spawned[place]['monster'].length; i++) {
                let pos = this.spawned[place]['monster'][i]
                console.log(pos)
                let thing = new Monster()
                let index = Math.floor()
                thing.ID = 1
                this.tile[pos[0]][pos[1]] = thing
                thing.rect.position = new Vector2D(pos[1] * 80 + 40, pos[0] * 80 + 40)
            }
        }

        this.canvas.width = this.size[1] * 80
        this.canvas.height = this.size[0] * 80
        this.rect = new Rect2D(this.canvas.width / 2, this.canvas.height / 2, this.canvas.width, this.canvas.height)
    }

    adventureStart() {
        this.spawned = {}
        for (let place in dataField) {
            console.log(place)
            if (dataField[place]['village'] === false) {
                this.spawned[place] = {}
                this.spawned[place]['monster'] = JSON.parse(JSON.stringify(dataField[place]['spawn']))
            }
        }
    }

    handleTick(game, field) {
        this.player.handleTick(game, this)
        this.cameraAdjust()
    }

    cameraAdjust() {
        this.camera.position.x = this.player.rect.position.x
        this.camera.position.y = this.player.rect.position.y
    }

    render(game) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillStyle = 'black'
        for (let i = 0; i < this.size[0]; i++) {
            for (let j = 0; j < this.size[1]; j++) {
                this.tile[i][j].render(game, this)
            }
        }
        this.player.render(game, this)
        Render.renderImageCam(game.ctx, this.canvas, this.rect, this.camera)
    }
}

class Thing {
    constructor() {

    }

    render() {

    }
}

class Empty extends Thing {
    constructor() {
        super()
    }
}

class Portal extends Thing {
    constructor() {
        super()
        this.destination = ''
        this.destCoord = [0, 0]
        this.rect = new Rect2D(0, 0, 80, 80)
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx = this.canvas.getContext('2d')
    }

    setData(dest, coord) {
        this.destination = dest
        this.destCoord = JSON.parse(JSON.stringify(coord))
    }

    render(game, field) {
        this.ctx.fillStyle = 'Blue'
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        Render.renderImage(field.ctx, this.canvas, this.rect)
    }
}

class Monster extends Thing {
    constructor() {
        super()
        this.rect = new Rect2D(0, 0, 80, 80)
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx = this.canvas.getContext('2d')
        this.ID = 0
    }

    setData(ID) {
        this.ID = ID
    }

    render(game, field) {
        this.ctx.fillStyle = 'Green'
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        Render.renderImage(field.ctx, this.canvas, this.rect)
    }
}
