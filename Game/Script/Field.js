class PlayerAdventure {
    constructor() {
        this.place = ''
        this.position = [0, 0]
        this.rect = new Rect2D(0, 0, 80, 80)
        
        this.canvas = document.createElement('canvas')
        this.canvas.width = 80
        this.canvas.height = 80
        this.ctx = this.canvas.getContext('2d')
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

    render(game) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillStyle = 'black'
        this.player.render(game, this)
        Render.renderImageCam(game.ctx, this.canvas, this.rect, this.camera)
    }
}
