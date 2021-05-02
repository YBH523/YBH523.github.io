let that
class Tab {
    constructor(id) {
        that = this
        this.main = document.getElementById('main')
        this.addbtn = document.getElementById('addbtn')
        this.nav = document.getElementsByTagName('nav')
        this.init()
    }
    //清除classname
    clearclass() {
        for (let i = 0; i < this.divs.length; i++) {
            this.divs[i].className = ""
            this.areas[i].className = ""
            console.log("清除类名了")
        }
    }
    // 获取元素
    getele() {
        that.delbtns = document.getElementsByClassName('delbtn')
        that.divs = document.getElementsByTagName('div')
        that.areas = document.getElementsByTagName('textarea')
    }
    //点击样式
    tclick() {
        that.getele()
        for (let i = 0; i < that.divs.length; i++) {
            that.divs[i].onclick = function () {
                that.clearclass()
                this.className = "now"
                that.areas[i].className = "present"
                console.log("添加类名了")
            }
        }
    }
    //初始化
    init() {
        that.tclick()
        that.del()
        // 添加按钮的绑定事件
        this.addbtn.onclick = function () {
            console.log('aaa')
            let d = '<div><input type="text" class="input"><button class="delbtn">×</button></div>'
            let text = '<textarea cols="30" rows="10">aaaaaa</textarea>'
            //向nav元素的子元素末尾添加字符串
            that.nav[0].insertAdjacentHTML('beforeEnd', d)
            that.main.insertAdjacentHTML('beforeEnd', text)
            // 重新绑定点击事件
            that.tclick()
            that.del()
        }
    }
    //删除元素
    del() {
        that.getele()
        for (let i = 0; i < that.delbtns.length; i++) {
            that.delbtns[i].onclick = function (e) {
                e.stopPropagation()
                console.log(i)
                // 移除元素
                that.divs[i].remove()
                that.areas[i].remove()
                // 重新绑定点击事件
                that.del()
                that.tclick()
            }
        }
    }
}
let ta = new Tab()