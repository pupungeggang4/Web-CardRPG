import {GameHandler} from "gamehandler"
import {GameVar} from "gamevar"

window.onload = main
window.onerror = errorHandle

async function main() {
    try {
        const [image, audio] = await Promise.all([
            AssetLoader.loadImage(),
            AssetLoader.loadAudio()
        ])
        gameVar = new GameVar()
        gameHandler = new GameHandler()
        gameHandler.run(gameVar)
    } catch (error) {
        console.log(error);
    }
}

function errorHandle(msg, src, line, col, err) {
    if (err != null) {

    }
}
