class Card {
    constructor() {
        this.ID = 0
        this.type = ''
        this.element = ''

        this.energy = []
        this.rarity = ''
        this.effect = []
        this.attack = 0
        this.life = 0

        this.name = ''
        this.description = []
    }

    setData(ID) {
        let data = JSON.parse(JSON.stringify(DataCard.data[ID]))

        this.ID = ID
        this.type = data['type']
        this.element = data['element']

        this.energy = data['energy']
        this.rarity = data['rarity']
        this.effect = data['effect']
        this.attack = data['stat'][0]
        this.life = data['stat'][1]

        this.name = data['name']
        this.description = data['description']
    }
}
