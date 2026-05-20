class CardFactory {
    static create(ID) {
        let data = JSON.parse(JSON.stringify(DataCard.data[ID]))
        let card = null

        if (data.type === 'unit') {
            card = new CardUnit()
        } else if (data.type === 'spell') {
            card = new CardSpell()
        } else {
            card = new Card()
        }

        card.setData(ID)
        return card
    }
}
