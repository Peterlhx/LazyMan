# LazyMan
LazyMan，JavaScript流程控制的实现
```js
实现一个LazyMan，可以按照以下方式调用:
LazyMan("Hank")
输出:
Hi! This is Hank!

LazyMan("Hank").sleep(10).eat("dinner")
输出:
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~

LazyMan("Hank").eat("dinner").eat("supper")
输出:
Hi This is Hank!
Eat dinner~
Eat supper~

LazyMan("Hank").sleepFirst(5).eat("supper")
输出:
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper
```
>lazyMan实现的主要思想是，将各个任务存储在一个数组中，然后通过创建一个next()方法去执行任务列表中的每一个任务，并且返回this，实现链式调用

参考链接：
[lazyMan问题](http://www.qdfuns.com/notes/17398/a59c562b2d09616623015b9df58b067c.html)
