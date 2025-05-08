class PlayerBattle {
    constructor() {
        this.item = []
        this.equipment = []
        this.card = []
        this.energy = []
    }

    battleInit(playerAdventure) {

    }
}

class Battle {
    constructor() {
        this.player = new PlayerBattle()
    }

    battleInit(playerAdventure) {
        this.player.battleInit(playerAdventure)
    }
}
