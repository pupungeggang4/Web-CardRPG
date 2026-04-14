window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

let game

function main() {
    game = new Game()
}

function errorHandle(msg, src, l, c, err) {
    if (err != null) {

    }
}

function rightClick() {
    return false;
}
