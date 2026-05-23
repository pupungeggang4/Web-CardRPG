export class Img {
    static loadPair = [['buttonMenu', 'asset/image/button_menu.png']]
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
