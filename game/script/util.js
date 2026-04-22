class Util {
    static pointInsideRectUI(point, rect) {
        return point.x > rect[0] && point.x < rect[0] + rect[2] && point.y > rect[1] && point.y < rect[1] + rect[3]
    }

    static loadSaveData() {
        if (!localStorage.getItem('pupungeggang4_cardrpg')) {
            localStorage.setItem('pupungeggang4_cardrpg', JSON.stringify({'new': true}))
            return JSON.parse(localStorage.getItem('pupungeggang4_cardrpg'))
        }

        return JSON.parse(localStorage.getItem('pupungeggang4_cardrpg'))
    }

    static eraseSaveData() {
        localStorage.setItem('pupungeggang4_cardrpg', JSON.stringify({'new': true}))
        return JSON.parse(localStorage.getItem('pupungeggang4_cardrpg'))
    }
}
