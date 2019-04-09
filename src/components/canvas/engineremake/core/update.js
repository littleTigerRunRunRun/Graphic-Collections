import Stats from './stats.js'

let stats = null
if (process.env.NODE_ENV !== 'production') {
  stats = new Stats()
  stats.setMode(0) // 0: fps, 1: ms
  // Align top-left
  stats.domElement.style.position = 'absolute'
  stats.domElement.style.left = '0px'
  stats.domElement.style.top = '0px'
  document.body.appendChild(stats.domElement)
}

// 动画工具，提供便捷的动画处理，自动返回delt和total
let raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback, element) {
  var start,
    finish
  window.setTimeout(function() {
    start = +new Date()
    callback(start)
    finish = +new Date()
    self.timeout = 1000 / 60 - (finish - start)
  }, self.timeout)
}
let rafTimeStack = []
let rafFrameStack = []
let rafStackIndex = {}
let rafStackRenderFunc = function(delt) {}
let _instanceId = 0
// let rafTotal = 0
let rafCurrent = Date.now()
function animate() {
  if (stats) { stats.update() }
  let current = Date.now()
  let delt = current - rafCurrent
  rafCurrent = current
  // 间隔太大被视为不正常渲染帧（例如离开屏幕）
  if (delt > 200) {
    raf(animate)
    return false
  }
  let length = rafFrameStack.length
  for (let i = 0; i < length; i++) {
    let rafFrameStackItem = rafFrameStack[i]
    if (rafFrameStackItem.enabled) {
      rafFrameStackItem.func(delt, current - rafFrameStackItem.totalStart)
    }
  }
  // 最终的渲染函数
  if (rafStackRenderFunc.enabled) {
    rafStackRenderFunc.func(delt, current - rafStackRenderFunc.totalStart)
  }
  raf(animate)
}
animate()
// 保持50ms一次轮询的时间函数
// function timecount() {

// }
// setTimeout(timecount, 20);

// name func ,setting
// func, setting
// func
// name, func
// 四种传参都可以接受
// setting可选参数 enabled:true/false 该func是否在循环中启用
class rafStackObj {
  constructor(name, func, setting) {
    if (rafStackIndex[name] !== undefined) {
      console.log(`请勿赋值同名队列:${name}`)
      return false
    }
    if (typeof name === 'function') {
      setting = func
      func = name
    }
    this.instanceId = this.getInstanceId()
    this.totalStart = rafCurrent// 每一个stackObj都可以单独计算自己的total
    this.enabled = !(setting && !setting.enabled)// 是否启用
    this.func = func
    this.type = setting !== undefined && setting.type === 'time' ? 'time' : 'frame'
    if (!name) name = this.type + this.instanceId
    if (this.type === 'time') {
      rafStackIndex[name] = ['time', rafTimeStack.length]
      rafTimeStack.push(this)
    } else {
      rafStackIndex[name] = ['frame', rafFrameStack.length]
      rafFrameStack.push(this)
    }
  }
  // 设置最终的渲染函数
  setAsRenderFunc() {
    rafStackRenderFunc = this
    return this
  }
  getInstanceId() {
    return _instanceId++
  }
  // 某些raf队列中
  refreshStart() {
    return this
  }
  // 用名字获取
  getObj(name) {
    let index = rafStackIndex[name]
    return index[0] === 'time' ? rafTimeStack[index[1]] : rafFrameStack[index[1]]
  }
  activate() {
    this.enabled = true
    return this
  }
  deactivate() {
    this.enabled = false
    return this
  }
  destory() {
    // 后续再补上，暂时为暂停
    this.deactivate()
  }
}

export default rafStackObj
