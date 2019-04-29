import seller from '../pages/eml-seller'
import goods from '../pages/eml-goods'
import ratings from '../pages/eml-ratings'

const routes = [
  {path:'/seller',component:seller},
  {path:'/goods',component:goods},
  {path:'/ratings',component:ratings},
  {path:'',redirect:'/seller'}
]

export default routes


