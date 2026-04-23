window.onload = main
window.onerror = errorHandle

let game

async function main() {
    try {
        const [image, audio] = await Promise.all([
            AssetLoader.loadImage(),
            AssetLoader.loadAudio()
        ])
        game = new Game()
        game.run()
    } catch (error) {
        console.log(error);
    }
}

function errorHandle(msg, src, line, col, err) {
    if (err != null) {

    }
}
