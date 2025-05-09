class PlayerAdventure {
    constructor() {
        this.place = ''
        this.position = [0, 0]
        this.rect = new Rect2D(0, 0, 80, 80)
        this.speed = 320.0
        this.facing = ''
        this.moving = false
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
        this.spawn = data['spawn']
        this.size = data['size']

        this.canvas.width = this.size[1] * 80
        this.canvas.height = this.size[0] * 80
        this.rect = new Rect2D(this.canvas.width / 2, this.canvas.height / 2, this.canvas.width, this.canvas.height)
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
        this.player.render(game, this)
        Render.renderImageCam(game.ctx, this.canvas, this.rect, this.camera)
    }
}
