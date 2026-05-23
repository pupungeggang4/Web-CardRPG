import {Img, Aud, AssetLoader} from 'asset'

import {GameHandler} from "gamehandler"
import {GameVar} from "gamevar"

window.onload = main

async function main() {
    let gameVar
    let gameHandler

    try {
        const [image, audio] = await Promise.all([
            AssetLoader.loadImage(),
            AssetLoader.loadAudio()
        ])
        gameVar = new GameVar()
        gameHandler = new GameHandler()
        gameHandler.run(gameVar)
    } catch (error) {
        console.log(error)
        if (gameVar.gameLoop) {
            cancelAnimationFrame(gameVar.gameLoop)
        }
    }
}
