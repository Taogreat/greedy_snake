/*
*   蛇类
*/
class Snake {
    //蛇头
    head: HTMLElement

    //蛇身
    bodies: HTMLCollection
    // bodies: NodeList

    constructor(){
        //!表示一定存在
        const snake = document.getElementById('snake')!
        this.head = document.querySelector('#snake>div') as HTMLElement
        this.bodies = snake.getElementsByTagName('div')
        // this.bodies = document.querySelectorAll('#snake > div');// nodeList
    }

    get x(){
        return this.head.offsetLeft
    }

    set x(value: number){
        this.head.style.left = value + 'px'
    }

    get y(){
        return this.head.offsetTop
    }

    set y(value: number){
        this.head.style.top = value + 'px'
    }

}

export default Snake