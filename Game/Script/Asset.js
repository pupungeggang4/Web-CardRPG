let img = {
    button: {
        left: new Image(),
        right: new Image(),
        up: new Image(),
        down: new Image(),
        interact: new Image(),
        info: new Image(),
        menu: new Image(),
    }
}

function imageLoad() {
    img.button.left.src = 'Image/ButtonLeft.png'
    img.button.right.src = 'Image/ButtonRight.png'
    img.button.up.src = 'Image/ButtonUp.png'
    img.button.down.src = 'Image/ButtonDown.png'
    img.button.interact.src = 'Image/ButtonInteract.png'
    img.button.info.src = 'Image/ButtonInfo.png'
    img.button.menu.src = 'Image/ButtonMenu.png'
}
