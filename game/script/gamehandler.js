import {GameVar} from 'gamevar'
import {Util} from 'util'
import {Scene} from 'scene'
import {SceneTitle} from 'scenetitle'
import {SceneCollection} from 'scenecollection'
import {SceneField} from 'scenefield'
import {SceneBattle} from 'scenebattle'

export class GameHandler {
    constructor() {
        this.scene = {
            'title': new SceneTitle(), 'collection': new SceneCollection(), 'field': new SceneField(), 'battle': new SceneBattle()
        }
    }

    run(gameVar) {
        window.addEventListener('pointerdown', (event) => this.pointerDown(event, gameVar), false)
        window.addEventListener('pointermove', (event) => this.pointerMove(event, gameVar), false)
        window.addEventListener('pointerup', (event) => this.pointerUp(event, gameVar), false)
        window.addEventListener('resize', (event) => {
            gameVar.targetRect = gameVar.canvas.getBoundingClientRect()
        })
        window.addEventListener('keydown', (event) => this.keyDown(event, gameVar), false)
        window.addEventListener('keyup', (event) => this.keyUp(event, gameVar), false)
        gameVar.canvas.addEventListener('contextmenu', (event) => this.rightClick(event, gameVar), false)

        gameVar.save = Util.loadSaveData(gameVar)

        gameVar.frameCurrent = performance.now()
        gameVar.framePrevious = performance.now()
        gameVar.dt = 0
        gameVar.gameLoop = requestAnimationFrame(() => this.loop(gameVar))
    }

    loop(gameVar) {
        gameVar.frameCurrent = performance.now()
        gameVar.dt = (gameVar.frameCurrent - gameVar.framePrevious) / 1000
        gameVar.framePrevious = gameVar.frameCurrent

        this.update(gameVar)
        this.render(gameVar)
        
        gameVar.gameLoop = requestAnimationFrame(() => this.loop(gameVar))
    }

    update(gameVar) {
        this.scene[gameVar.scene].update(gameVar)
    }

    render(gameVar) {
        this.scene[gameVar.scene].render(gameVar)
    }

    pointerDown(event, gameVar) {
        let pos = {
            x: (event.clientX - gameVar.targetRect.left) / gameVar.targetRect.width * gameVar.canvas.width,
            y: (event.clientY - gameVar.targetRect.top) / gameVar.targetRect.height * gameVar.canvas.height
        }
        let button = event.button
        gameVar.pointerPressed = true
        gameVar.pointerPos.x = pos.x
        gameVar.pointerPos.y = pos.y

        this.scene[gameVar.scene].pointerDown(gameVar, pos, button)
    }

    pointerMove(event, gameVar) {
        let pos = {
            x: (event.clientX - gameVar.targetRect.left) / gameVar.targetRect.width * gameVar.canvas.width,
            y: (event.clientY - gameVar.targetRect.top) / gameVar.targetRect.height * gameVar.canvas.height
        }

        gameVar.pointerPos.x = pos.x
        gameVar.pointerPos.y = pos.y

        this.scene[gameVar.scene].pointerMove(gameVar, pos)
    }

    pointerUp(event, gameVar) {
        let pos = {
            x: (event.clientX - gameVar.targetRect.left) / gameVar.targetRect.width * gameVar.canvas.width,
            y: (event.clientY - gameVar.targetRect.top) / gameVar.targetRect.height * gameVar.canvas.height
        }
        let button = event.button
        gameVar.pointerPressed = false

        this.scene[gameVar.scene].pointerUp(gameVar, pos, button)

    }

    keyDown(event, gameVar) {
        let key = event.key

        if (key === 'Enter' || key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight')
            event.preventDefault()
        for (const k in gameVar.keyPressed) {
            if (key === gameVar.keyMapping[k]) {
                gameVar.keyPressed[k] = true
            }
        }

        this.scene[gameVar.scene].keyDown(gameVar, key)
    }

    keyUp(event, gameVar) {
        let key = event.key
        for (const k in gameVar.keyPressed) {
            if (key === gameVar.keyMapping[k]) {
                gameVar.keyPressed[k] = false
            }
        }

        this.scene[gameVar.scene].keyUp(gameVar, key)
    }

    rightClick(event) {
        event.preventDefault()
        return false
    }
}
