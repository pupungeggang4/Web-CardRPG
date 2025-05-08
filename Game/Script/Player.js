class Player {
    constructor() {
        this.level = 1
        this.gold = 0
        this.exp = 0
        this.expMax = 0
        this.item = {

        }
        this.equipment = {

        }
        this.starting = {

        }
        this.place = 'home_town'
    }

    loadFromSave(game) {
        let save = game.saveStatus
        this.level = save.level
        this.gold = save.gold
        this.exp = save.exp
        this.expMax = save.expMax
        this.item = JSON.parse(JSON.stringify(save.item))
        this.equipment = JSON.parse(JSON.stringify(save.equipment))
        this.starting = JSON.parse(JSON.stringify(save.starting))
        this.place = save.place
    }

    writeSave(game) {
        let save = game.saveStatus
        save.level = this.level
        save.gold = this.gold
        save.exp = this.exp
        save.expMax = this.expMax
        save.item = JSON.parse(JSON.stringify(this.item))
        save.equipment = JSON.parse(JSON.stringify(this.equipment))
        save.starting = JSON.parse(JSON.stringify(this.starting))
        save.place = this.place
    }
}
