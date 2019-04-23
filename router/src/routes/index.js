/*
* 路由
* */

import user from "@/components/user"
import home from "@/components/home"
import about from "@/components/about"
import news from "@/components/home/news"
import message from "@/components/home/message"
import messageDetail from "@/components/home/message/messageDetail"



const routes =[
  {path:"/user",component:user,
    /*路径之后的符号是/的话可以用布尔值模式
    如果是？的话就可以用$route.query.params获取url的数据*/
    props(route){
      return{
        id:route.query.id
      }
    },
    children:[
      {path:":id",component:user,props:true}
    ]
  },
  /*用props：true来定义的话降低了与router的耦合度 */
  /*{path:"/user/:id",component:user},*/
  /*
  {path:"/user/:id",component:user,props:true,

  },*/
  {
    path:"/home",
    component:home,
    children:[
      {path:"news",component:news},
      {
        path:"message",
        component:message,
        children:[
          {
            path:"messageDetail",
            component:messageDetail,
            props(route) {
              return {
                id:route.query.id
              }
            }
          },
        ]
      },
      {path:"",redirect:"/home/news"}
    ]
  },
  {path:"/about",component:about},
  /*默认路由*/
  {path:"",redirect:"/user"}
]

export default routes
