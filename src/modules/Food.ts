/*
*   食物类
*/

class Food {
    el: HTMLElement

    x: number

    y: number

    constructor(){
        //!表示一定存在
        this.el = document.getElementById('food')!
        this.x = Math.floor(Math.random()*30)*10
        this.y = Math.floor(Math.random()*30)*10
        this.el.style.left = this.x+'px'
        this.el.style.top = this.y+'px'
    }

    update(){
        this.x = Math.floor(Math.random()*30)*10
        this.y = Math.floor(Math.random()*30)*10
        this.el.style.left = this.x+'px'
        this.el.style.top = this.y+'px'
    }

}

export default Food