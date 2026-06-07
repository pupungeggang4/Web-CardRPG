export class UI {
    static title = {
        textTitle: [20, 20],
        buttonStart: [160, 160, 960, 80],
        textStart: [180, 180],
        buttonCollection: [160, 240, 960, 80],
        textCollection: [180, 260],
        buttonErase: [160, 320, 960, 80],
        textErase: [180, 340],
        arrow: [[80, 160, 80, 80], [80, 240, 80, 80], [80, 320, 80, 80]],
    }

    static field = {
        buttonMenu: [1180, 20, 80, 80],
        arrow: {
            left: [20, 520, 80, 80], right: [220, 520, 80, 80], up: [120, 420, 80, 80], down: [120, 620, 80, 80]
        },
        buttonInteract: [1080, 620, 80, 80],
        buttonInfo: [1180, 620, 80, 80]
    }

    static info = {
        rect: [160, 40, 960, 640],
        buttonClose: [1080, 40, 40, 40]
    }

    static battle = {
        buttonMenu: [1180, 20, 80, 80],
        enemyHero: [580, 20, 120, 120],
        enemyUnit: [280, 140, 120, 120],
        playerHero: [580, 380, 120, 120],
        playerUnit: [280, 260, 120, 120],
        crystalArea: [1100, 540, 160, 160],
    }

    static collection = {
        buttonBack: [1180, 20, 80, 80]
    }

    static menuField = {
        rect: [320, 240, 640, 240],
        textPaused: [340, 260],
        buttonResume: [320, 320, 640, 80],
        textResume: [340, 340],
        buttonExit: [320, 400, 640, 80],
        textExit: [340, 420],
        arrow: [[240, 320, 80, 80], [240, 400, 80, 80]]
    }

    static saveWindow = {
        rect: [320, 240, 640, 240],
        textSave: [340, 260],
        buttonYes: [420, 380, 160, 80],
        textYes: [440, 400],
        buttonNo: [780, 380, 160, 80],
        textNo: [800, 400],
        arrow: [[340, 380, 80, 80], [700, 380, 80, 80]],
    }

    static menuBattle = {
        rect: [320, 200, 640, 320],
        textPaused: [340, 220],
        buttonResume: [320, 280, 640, 80],
        textResume: [340, 300],
        buttonSurrender: [320, 360, 640, 80],
        textSurrender: [340, 380],
        buttonExit: [320, 440, 640, 80],
        textExit: [340, 460],
        arrow: [[240, 280, 80, 80], [240, 360, 80, 80], [240, 440, 80, 80]]
    }
}
