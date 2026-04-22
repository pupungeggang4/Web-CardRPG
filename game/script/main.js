window.onload = main
window.onerror = errorHandle

let game

function main() {
    game = new Game()
    game.run()
}

function errorHandle(msg, src, line, col, err) {
    if (err != null) {

    }
}
