// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为检测关键字，请不要修改名称
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import home from './pages/home';
import Document from './pages/Document';
import Services from './pages/Services';
import Member from './pages/Member';
import Setting from './pages/Setting';
import AddDocument from './pages/AddDocument';
import AddMember from './pages/AddMember';

import SendNcn from './pages/SendNcn';
import Gateway from './pages/Gateway';

import Port from './pages/Port';

import Activities from './pages/Activities';

const routerConfig = [
  {
    path: '/member',
    component: Member,
  },
  {
    path: '/add/document',
    component: AddDocument,
  },
  {
    path: '/home',
    component: home,
  },
  {
    path: '/document',
    component: Document,
  },
  {
    path: '/services',
    component: Services,
  },
  {
    path: '/user/register',
    component: UserRegister,
  },
  {
    path: '/activities',
    component: Activities,
  },
  {
    path: '/user/login',
    component: UserLogin,
  },
  {
    path: '/add/member',
    component: AddMember,
  },
  {
    path: '/setting',
    component: Setting,
  },
  {
    path: '/sendNCN',
    component: SendNcn,
  },
  {
    path: '/gateway',
    component: Gateway,
  },
  {
    path: '/port',
    component: Port,
  },
];

export default routerConfig;
