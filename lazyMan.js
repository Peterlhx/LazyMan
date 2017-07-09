_LazyMan.prototype.sayHi = function(name) {
  var self = this
  this.tasks.push(setTimeout.bind(null, function() {
    console.log("Hi! This is " + name + "!")
    self.next()
  }))
  return this
}

_LazyMan.prototype.eat = function(thing) {
  var self = this
  this.tasks.push(setTimeout.bind(null, function() {
    console.log("eat " + thing + " ~")
    self.next()
  }))
  return this
}

_LazyMan.prototype.sleep = function(time) {
  var self = this
  this.tasks.push(setTimeout.bind(null, function() {
    console.log("Wake up after " + time + " second")
    self.next()
  }, time * 1000))
  return this
}

_LazyMan.prototype.sleepFirst = function(time) {
  var self = this
  this.tasks.unshift(setTimeout.bind(null, function() {
    console.log("Wake up after " + time + " second")
    self.next()
  }, time * 1000))
  return this
}

function _LazyMan(name) {
  this.tasks = [] // 任务列表

  // 调用任务列表中的任务
  this.next = function() {
    var fn = this.tasks.shift()
    fn && fn()
  }

  // 存入第一个任务
  this.sayHi(name) 

  // 开始执行任务列表中的任务
  setTimeout(this.next.bind(this))
}

function LazyMan (name) {
  return new _LazyMan(name)
}

LazyMan("Hank").sleepFirst(3).eat("dinner")
