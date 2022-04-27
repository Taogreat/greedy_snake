/*
*   数据面板
*/
class ScorePanel {

    score = 0
    level = 1
    maxLevel: number
    upScore: number
    scoreELe: HTMLElement
    levelELe: HTMLElement

    constructor(maxLevel: number = 10 , upScore: number = 10){
        this.upScore = upScore
        this.maxLevel = maxLevel
        this.scoreELe = document.getElementById('score')!
        this.levelELe = document.getElementById('level')!
    }

    addScore(){
        this.scoreELe.innerHTML = ++this.score + ''
        // if(Math.round(this.score/this.upScore)>this.level) this.upLevel()
        if(this.score%this.upScore === 0) this.upLevel()
    }

    upLevel(){
        if(this.level<this.maxLevel){
            this.levelELe.innerHTML = ++this.level + ''
        }
    }

}


export default ScorePanel