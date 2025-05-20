class Card {
    constructor() {
        this.ID = 0
        this.element = ''
        this.rarity = ''
        this.type = ''
        this.energy = []
        this.stat = [0, 0]
        this.ability = []

        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
    }

    setData(ID) {
        this.ID = ID
        let data = JSON.parse(JSON.stringify(dataCard[ID]))
        this.element = data['element']
        this.rarity = data['rarity']
        this.type = data['type']
        this.energy = data['energy']
        this.stat = data['stat']
        this.ability = data['ability']
    }

    clone() {
        let card = new Card()
        let cardData = JSON.parse(JSON.stringify(card))
        card.ID = cardData.ID
        card.element = cardData.element
        card.rarity = cardData.rarity
        card.type = cardData.type
        card.energy = cardData.energy
        card.stat = cardData.stat
        card.ability = cardData.ability
        return card
    }
}
