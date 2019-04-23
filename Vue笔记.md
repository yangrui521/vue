## Vue的基本认识
  	 是一种渐进式JavaScript框架
   	 作用是动态构建用户页面
      两个问题： toc 是面向用户的 前后端分离的mvvm
				tob 面向企业的  服务端的渲染 mvc
## Vue的特点
   	1.遵循mvvm模式
   	2.编码简介，体积小，运行效率高，适合移动端/PC端开发
   	3.他本身只关注UI，可以轻松引入vue插件和其他第三方库开发项目
## Vue的编码格式
   	1.引入Vue.js
   	2.创建vue的实例对象的选项
       el :指定的根标签真是DOM元素的选择器,跟组件有，子组件没有
       data：初始化数据，页面可以访问的，根组件可以是对象，但是子组件一定是函数
            对象或函数类型
			指定初始化状态属性数据的对象
			vm也会自动拥有data中所有属性
			页面中可以直接访问使用
			数据代理: 由vm对象来代理对data中所有属性的操作(读/写)
       methods： 一般写监听事件的回调函数，
				 一般不能直接用箭头函数，因为this的指向会变成window，而想让他指向的是vue的实例对象
       			 包含多个方法的对象
				 供页面中的事件指令来绑定回调
				 回调函数默认有event参数, 但也可以指定自己的参数
				 所有的方法由vue对象来调用, 访问data中的属性直接使用this.xxx
		computed：包含多个方法的对象
				 对状态属性进行计算返回一个新的数据, 供页面获取显示
				 一般情况下是相当于是一个只读的属性
				 利用set/get方法来实现属性数据的计算读取, 同时监视属性数据的变化
				 如何给对象定义get/set属性
				 在创建对象时指定: get name () {return xxx} / set name (value) {}
				 对象创建之后指定: Object.defineProperty(obj, age, {get(){}, set(value){}})
		watch ：包含多个属性监视的对象
				分为一般监视和深度监视
	   			xxx: function(value){}
				xxx : {
				deep : true,
				handler : fun(value)
				}
				另一种添加监视方式: vm.$watch('xxx', function(value){})


   	3.双向数据绑定：input的value的值获取： v-model
   	4.显示数据：{{data里面的数据}}
  	5.理解vue的mvvm的实现
       m---指的是model 模板
       v---指的是dom元素
       vm---指的是model获取绑定dom元素的data数据，挂载生成到页面，页面时刻监听model模型的变化
## 过渡动画
     利用vue去操控css的transition/animation动画
	模板: 使用<transition name='xxx'>包含带动画的标签
	css样式
		.fade-enter-active: 进入过程, 指定进入的transition
		.fade-leave-active: 离开过程, 指定离开的transition
		.xxx-enter, .xxx-leave-to: 指定隐藏的样式
	编码例子
	    .xxx-enter-active, .xxx-leave-active {
	      transition: opacity .5s
	    }
	    .xxx-enter, .xxx-leave-to {
	      opacity: 0
	    }
	    
	    <transition name="xxx">
	      <p v-if="show">hello</p>
	    </transition>
## 生命周期： 
      vm/组件对象
	  生命周期图
       
	  主要的生命周期函数(钩子)
    	created() / mounted(): 启动异步任务(启动定时器,发送ajax请求, 绑定监听)
    	beforeDestroy(): 做一些收尾的工作
## 指令的使用：
   	1.强制数据绑定
      功能： 指定变化的属性值
      完整语法是： v-bind：xxx ='yyy' yyy会作为表达式解析执行
      简洁写法是：  ：xxx='yyy'
   	2.绑定事件监听
	  功能： 绑定指定事件名的回调函数
	  完整写法：v-on：click='xxx'
				v-on: click='xxx'(参数)
				v-on：click.enter='xxx'
      简洁写法：@click='xxx'
               @click.enter='xxx'
    3.v-text/v-html: 指定标签体
        	* v-text : 当作纯文本
    		* v-html : 将value作为html标签来解析
    4.v-if v-else v-show: 显示/隐藏元素
    		* v-if : 如果vlaue为true, 当前标签会输出在页面中
    		* v-else : 与v-if一起使用, 如果value为false, 将当前标签输出到页面中
    		* v-show: 就会在标签中添加display样式, 如果vlaue为true, display=block, 否则是none
    5.	v-for : 遍历
    		* 遍历数组 : v-for="(person, index) in persons"   
    		* 遍历对象 : v-for="value in person"   $key
    6.	v-on : 绑定事件监听
    		* v-on:事件名, 可以缩写为: @事件名
    		* 监视具体的按键: @keyup.keyCode   @keyup.enter
    		* 停止事件的冒泡和阻止事件默认行为: @click.stop   @click.prevent
    		* 隐含对象: $event
    7.	v-bind : 强制绑定解析表达式  
    		* html标签属性是不支持表达式的, 就可以使用v-bind
    		* 可以缩写为:  :id='name'
    8.	 :class
    		  * :class="a"
    			* :class="{classA : isA, classB : isB}"
    			* :class="[classA, classB]"
    		* :style
    			:style="{color : color}"
    9.	v-model
    		* 双向数据绑定
    		* 自动收集用户输入数据
    10.	ref : 标识某个标签
    		* ref='xxx'
    		* 读取得到标签对象: this.$refs.xxx
## 自定义指令
    注册全局指令
       Vue.directive('my-directive', function(el, binding){
             el.innerHTML = binding.value.toUpperCase()
           })
    注册局部指令
        directives : {
              'my-directive' : function(el, binding) {
                  el.innerHTML = binding.value.toUpperCase()
              }
            }
    使用指令
        <div v-my-directive='xxx'>
#   组件间传值
##  父向子
     父组件：需要将数据绑给子组件的一个自定义标签属性
     子组件：需要通过配置对象的props属性来接受父组件传递的数据
     props特性属性：最终都会被销毁
     非props属性：子组件可以继承非props属性（就是子组件中props里面没有写的属性）
##  子向父
     1.父发起的
       父组件通过props的形式向子组件传递函数
       子组件再一定条件下调用该函数
            子组件再调用函数时通过参数的形式向父组件传递数组
     2.子组件发起的
       子组件通过触发一个自定义vue事件
       父组件要在模板上为子组件去注册这个事件
            子组件再出发事件时通过参数的形式往父组件传递数据
       总结：子组件需要修改父组件的数据，要想方设法的调用父组件中的函数
##   非父子
     找一个第三方（总线）
        bus（Vue.prototype.bus=new Vue()）
        当组件每次被挂载时，
#    vue中的插槽
      在vue中，插槽就是定义的全局组件，任何地方都能使用
      一般保存于子组件中（必定是要被模板覆盖掉）而模板是从父组件来的
      父组件中的标签会覆盖模板中的solt标签
      就是让组件于组件之间传递html片段
      一般用<slot></slot>作为占位组件，对应的是组件内部的innerHtml
      会被组件内部的标签覆盖掉
      插槽实现了父组件向子组件传递html片段
      作用：让父组件去扩展子组件的内容
##   具名插槽
        <slot name='名字'></slot>
        通过name去模板中找具有同名的slot标签
##   <slot></slot>:占位组件   它的模板是对应组件的innerHTML
        插槽实现了 父组件向子组件传递html判断
        具名插槽   <slot name="名字"></slot>   通过name去模板中找具有同名slot的标签
        插槽的意义:  让父组件扩展子组件的内容
        作用域插槽:  让slot组件携带子组件的数据  当父组件的传过来的html片段覆盖slot组件时
        slot组件将数据通过slot-scope传给父组件的html判断
##   作用域插槽
      父组件有能力向子组件传递html片段
      子组件有能力向父组件传递数据 （作用域插槽）
          必须要有一个属性：slot-scope=‘obj’
          <span>{{obj.msg}}</span>
      slot中有默认值，而模板中没有对应标签替换的话显示默认值
# Vue-Router
## 介绍

Vue Router 是 [Vue.js](http://cn.vuejs.org) 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。包含的功能有：
 多页应用没有路由
      作用是让单页应用的构建比较简单

- 嵌套的路由/视图表
- 模块化的、基于组件的路由配置
- 路由参数、查询、通配符
- 基于 Vue.js 过渡系统的视图过渡效果
- 细粒度的导航控制
- 带有自动激活的 CSS class 的链接
- HTML5 历史模式或 hash 模式，在 IE9 中自动降级
- 自定义的滚动条行为


## npm安装
     bash
    npm install vue-router
##  基本使用
    如果在一个模块化工程中使用它，必须要通过 `Vue.use()` 明确地安装路由功能：
    1.定义组件
    2.定义路由（path和组件的一个映射关系）
    3.定义路由器（配置路由）
    ``` js
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    
    Vue.use(VueRouter)
    ```

## 起步
    
    用 Vue.js + Vue Router 创建单页应用，是非常简单的。使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，
    当你要把 Vue Router 添加进来，我们需要做的是，将组件 (components) 映射到路由 (routes)，
    然后告诉 Vue Router 在哪里渲染它们。下面是个基本例子：

## HTML
    
    ``` html
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
    
    <div id="app">
      <h1>Hello App!</h1>
      <p>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
      </p>
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </div>
    ```

## JavaScript

      ``` js
      // 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
      
      // 1. 定义 (路由) 组件。
      // 可以从其他文件 import 进来
      const Foo = { template: '<div>foo</div>' }
      const Bar = { template: '<div>bar</div>' }
      
      // 2. 定义路由
      const routes = [
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar }
      ]
      
      // 3. 创建 router 实例，然后传 `routes` 配置
      const router = new VueRouter({
        routes // (缩写) 相当于 routes: routes
      })
      
      // 4. 创建和挂载根实例。
      // 记得要通过 router 配置参数注入路由，
      // 从而让整个应用都有路由功能
      const app = new Vue({
        router
      }).$mount('#app')
      
      // 现在，应用已经启动了！
      ```

## 重定向
    重定向也是通过 routes 配置来完成，下面例子是从 /a 重定向到 /b：
    ```
    const router = new VueRouter({
      routes: [
        { path: '/a', redirect: '/b' }
      ]
    })
    ```

##  路由器的配置
    routes: 注册路由
    mode
        类型: string
        默认值: "hash" (浏览器环境) 
        可选值: "hash" | "history" 
        配置路由模式:
            hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。
            history: 依赖 HTML5 History API 和服务器配置。查看 HTML5 History 模式。
        
    linkActiveClass
        类型: string
        默认值: "router-link-active"
        全局配置 <router-link> 的默认“激活 class 类名”。
    
    linkExactActiveClass
        类型: string
        默认值: "router-link-exact-active"
        全局配置 <router-link> 精确激活的默认的 class。         
##  嵌套路由

    实际生活中的应用界面，通常由多层嵌套的组件组合而成。同样地，URL 中各段动态路径也按某种结构对应嵌套的各层组件，例如：
    
    ```
    /user/foo/profile                     /user/foo/posts
    +------------------+                  +-----------------+
    | User             |                  | User            |
    | +--------------+ |                  | +-------------+ |
    | | Profile      | |  +------------>  | | Posts       | |
    | |              | |                  | |             | |
    | +--------------+ |                  | +-------------+ |
    +------------------+                  +-----------------+
    ```
    
    借助 `vue-router`，使用嵌套路由配置，就可以很简单地表达这种关系。
    
    
    App.vue里的 `<router-view>` 是最顶层的出口，渲染最高级路由匹配到的组件。
    同样地，一个被渲染组件同样可以包含自己的嵌套 `<router-view>`。
    例如，在 `User` 组件的模板添加一个 `<router-view>`：
    
    ``` js
    const User = {
      template: `
        <div class="user">
          <router-view></router-view>
        </div>
      `
    }
    ```
    
    要在嵌套的出口中渲染组件，需要在 `VueRouter` 的参数中使用 `children` 配置：
    
    ``` js
    const router = new VueRouter({
      routes: [
        { path: '/user', component: User,
          children: [
            {
                // 当 /user/profile 匹配成功，
              // UserProfile 会被渲染在 User 的 <router-view> 中
              path: 'profile',
              component: UserProfile
            },
            {
                //  当 /user/posts 匹配成功
              // UserPosts 会被渲染在 User 的 <router-view> 中
              path: 'posts',
              component: UserPosts
            }
          ]
        }
      ]
    })
    ```
    
    **要注意，以 `/` 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。**
    
    如果没有匹配到合适的子路由。而你又想要渲染点什么，可以提供一个 空的 子路由：
    
    ``` js
    const router = new VueRouter({
      routes: [
        {
          path: '/user', component: User,
          children: [
            // "/user/xxx(不存在的名字)"
            // UserHome 会被渲染在 User 的 <router-view> 中
            { path: '', component: UserHome },
          ]
        }
      ]
    })      
##  路由组件传参
    
    在组件中使用 `$route` 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。
    
    使用 `props` 将组件和路由解耦：
    
    **取代与 `$route` 的耦合**
    
    ``` js
    const User = {
      template: '<div>User {{ $route.params.id }}</div>'
    }
    const router = new VueRouter({
      routes: [
        { path: '/user/:id', component: User }
      ]
    })
    ```
    
    **通过 `props` 解耦**
    
    ``` js
    const User = {
      props: ['id'],
      template: '<div>User {{ id }}</div>'
    }
    const router = new VueRouter({
      routes: [
        { path: '/user/:id', component: User, props: true },
      ]
    })
    ```
## 布尔模式

    如果 `props` 被设置为 `true`，`route.params` 将会被设置为组件属性。类似于父组件通过props进行数据传递

## 对象模式

    如果 `props` 是一个对象，它会被按原样设置为组件属性。
    
    ``` js
    const router = new VueRouter({
      routes: [
        { path: '/promotion/from-newsletter', component: Promotion, props: { id: 123 } }
      ]
    })
    ```

## 函数模式

    你可以创建一个函数返回 `props`。函数的参数是当前route对象
    
    ``` js
    const router = new VueRouter({
      routes: [
        { path: '/search', component: SearchUser, props: (route) => ({ query: route.query.q }) }
      ]
    })
# 编程式的导航

除了使用 `<router-link>` 创建 a 标签来定义导航链接，我们还可以借助 router 的实例方法，
通过编写代码来实现。

## `router.push(location, onComplete?, onAbort?)`

**注意：在 Vue 实例内部，你可以通过 `$router` 访问路由实例。因此你可以调用 `this.$router.push`。**

想要导航到不同的 URL，则使用 `router.push` 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。

当你点击 `<router-link>` 时，这个方法会在内部调用，所以说，点击 `<router-link :to="...">` 等同于调用 `router.push(...)`。

| 声明式 | 编程式 |
|-------------|--------------|
| `<router-link :to="...">` | `router.push(...)` |

该方法的参数可以是一个字符串路径，或者一个描述地址的对象。例如：

``` js
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
```


## `router.replace(location, onComplete?, onAbort?)`

跟 `router.push` 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

| 声明式 | 编程式 |
|-------------|--------------|
| `<router-link :to="..." replace>` | `router.replace(...)` |

## `router.go(n)`

这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 `window.history.go(n)`。

例子

``` js
// 在浏览器记录中前进一步，等同于 history.forward()
router.go(1)

// 后退一步记录，等同于 history.back()
router.go(-1)

// 前进 3 步记录
router.go(3)

// 如果 history 记录不够用，那就默默地失败呗
router.go(-100)
router.go(100)
```

    

