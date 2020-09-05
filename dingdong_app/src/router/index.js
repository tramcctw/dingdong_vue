import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const Home = ()=>import('../views/home/Home')
const Category = ()=>import('../views/category/Category')
const Cart = ()=>import('../views/cart/Cart')
const Profile = ()=>import('../views/profile/Profile')
const Detail = ()=>import('../views/detail/Detail')
const Login = ()=>import('../views/login/Login')
const Address = ()=>import('components/content/address/Address')
const  AddSit = ()=>import('components/content/address/AddSit')
const Video = ()=>import('../views/video/Video')
const About = ()=>import('../views/about/About')
const MyCenter = ()=>import('../views/mycenter/MyCenter')
const OrderDetail = ()=>import('../views/orderdetail/OrderDetail')

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:id',
    component:Detail
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/address',
    component:Address
  },
  {
    path:'/editAddress',
    component:AddSit
  },
  {
    path:'/video',
    component:Video
  },
  {
    path:'/about',
    component:About
  },
  {
    path:'/mycenter',
    component:MyCenter
  },
  {
    path:'/orderDetail/:id',
    component:OrderDetail
  }
]


const router = new VueRouter({
  routes,
  mode:'history'
})
export default router

