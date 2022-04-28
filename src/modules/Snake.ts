/*
*   蛇类
*/
class Snake {
    //蛇头
    head: HTMLElement

    //蛇身
    bodies: HTMLCollection
    // bodies: NodeList

    snake: HTMLElement

    constructor(){
        //!表示一定存在
        this.snake = document.getElementById('snake')!
        this.head = document.querySelector('#snake>div') as HTMLElement
        this.bodies = this.snake.getElementsByTagName('div')
        // this.bodies = document.querySelectorAll('#snake > div');// nodeList
    }

    get x(){
        return this.head.offsetLeft
    }

    set x(value: number){
        if(this.x === value) return

        if(value<0 || value>290){
            throw new Error('蛇撞墙，游戏结束')
        }

        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            console.log('调头')
            if(value>this.x){
                console.log('向右调头le')
                value = this.x-10
            }else{
                console.log('向左调头le')
                value = this.x+10
            }
        }


        this.updateBodiesPosition()
        this.head.style.left = value + 'px'
        this.checkHeadBody()
    }

    get y(){
        return this.head.offsetTop
    }

    set y(value: number){
        if(this.y === value) return
        if(value<0 || value>290){
            throw new Error('蛇撞墙，游戏结束')
        }

        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            if(value>this.y){
                value = this.y-10
            }else{
                value = this.y+10
            }
        }

        this.updateBodiesPosition()
        this.head.style.top = value + 'px'
        this.checkHeadBody()
    }

    addBody(){
        this.snake.insertAdjacentHTML("beforeend", "<div></div>");
    }

    updateBodiesPosition(){
        for(let i = this.bodies.length-1;i>0;i--){
            (this.bodies[i] as HTMLElement).style.left = (this.bodies[i-1] as HTMLElement).offsetLeft+'px';
            (this.bodies[i] as HTMLElement).style.top = (this.bodies[i-1] as HTMLElement).offsetTop+'px';
        }
    }

    checkHeadBody(){
        // 获取所有的身体，检查是否和蛇头的坐标发生重叠
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            if (this.x === bd.offsetLeft && this.y === bd.offsetTop) {
                // 进入判断说明蛇头撞到了身体，游戏结束
                throw new Error("撞到自己了~~");
            }
        }
    }
}

export default Snake