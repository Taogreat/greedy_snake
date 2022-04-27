/*
*   食物类
*/

class Food {
    el: HTMLElement

    constructor(){
        //!表示一定存在
        this.el = document.getElementById('food')!
    }

    get x(){
        return this.el.offsetLeft
    }

    get y(){
        return this.el.offsetTop
    }

}

export default Food