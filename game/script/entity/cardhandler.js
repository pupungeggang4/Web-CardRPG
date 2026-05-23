import {Card} from 'card'
import {DataCard} from 'datacard'

export class CardHandler {
    static makeCard(ID) {
        let card = new Card()
        CardHandler.setData(catd, ID)
        return card
    }

    static setData(card, ID) {
        let data = JSON.parse(JSON.stringify(DataCard.data[ID]))

        card.ID = ID
        card.type = data['type']
        card.element = data['element']

        card.energy = data['energy']
        card.rarity = data['rarity']
        card.effect = data['effect']
        card.attack = data['stat'][0]
        card.life = data['stat'][1]

        card.name = data['name']
        card.description = data['description']
    }
}
