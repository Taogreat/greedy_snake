/*
*   游戏控制器
*/
import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'

class GameControl {
    snake: Snake
    food: Food
    scorePanel: ScorePanel
    direction: string = ''

    constructor(){
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
    }

    init(){
        document.addEventListener('keydown',this.keydownHandler.bind(this))
        this.run()
    }
    /*
        ArrowUp Up
        ArrowDown Down
        ArrowRight Right
        ArrowLeft Left
    */
    run(){
        let {x,y} = this.snake
        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                y -= 10
                break
            case 'ArrowDown':
            case 'Down':
                y += 10
                break
            case 'ArrowRight':
            case 'Right':
                x += 10
                break
            case 'ArrowLeft':
            case 'Left':
                x -= 10
                break
        }
        this.snake.x = x
        this.snake.y = y
        setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30)
    }

    keydownHandler(e: KeyboardEvent){
        this.direction = e.key
    }

}


export default GameControl