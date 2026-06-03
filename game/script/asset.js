export class Img {
    static loadPair = [
        ['buttonMenu', 'asset/image/button_menu.png'],
        ['save', 'asset/image/save.png'],
        ['arrowLeft', 'asset/image/arrow_left.png'],
        ['arrowRight', 'asset/image/arrow_right.png'],
        ['arrowUp', 'asset/image/arrow_up.png'],
        ['arrowDown', 'asset/image/arrow_down.png'],
        ['info', 'asset/image/info.png'],
        ['interact', 'asset/image/interact.png'],
        ['buttonClose', 'asset/image/button_close.png'],
        ['enemy', 'asset/image/enemy.png']
    ]
}

export class Aud {
    static loadPair = []
}

export class AssetLoader {
    static loadImage() {
        const promises = Img.loadPair.map(pair => {
            return new Promise((resolve, reject) => {
                const img = new Image()
                Img[pair[0]] = img
                img.onload = () => resolve(img)
                img.onerror = () => reject(new Error('Failed to load image.'))
                img.src = pair[1]
            })
        })
        return Promise.all(promises)
    }

    static loadAudio() {
        const promises = Aud.loadPair.map(pair => {
            return new Promise((resolve, reject) => {
                const aud = new Audio()
                Aud[pair[0]] = aud
                aud.oncanplaythrough = () => resolve(aud)
                aud.onerror = () => reject(new Error('Failed to load audio.'))
                aud.src = pair[1]
            })
        })
        return Promise.all(promises)
    }
}
