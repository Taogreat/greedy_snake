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
        this.scorePanel = new ScorePanel(10,2   )
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

        if(this.checkEat(x,y)){
            this.scorePanel.addScore()
            this.food.update()
            this.snake.addBody()
        }

        try{
            this.snake.x = x
            this.snake.y = y
        }catch (e: any) {
            alert(e.message)
            return
        }

        clearTimeout()
        setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30)
    }

    keydownHandler(e: KeyboardEvent){
        this.direction = e.key
    }

    //吃食检测
    checkEat(x: number,y: number){
        return x === this.food.x && y === this.food.y
    }
}


export default GameControl