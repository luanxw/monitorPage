// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '首页',
    path: '/home',
    icon: 'home',
  },
  {
    name: '帮助',
    path: 'http://zzuli.edu.cn',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
];

const asideMenuConfig = [
  {
    name: '首页',
    path: '/home',
    icon: 'home2',
  },
  {
    name: '事件',
    path: '/document',
    icon: 'copy',
  },
  {
    name: '任务',
    path: '/activities',
    icon: 'activity',
  },
  {
    name: '发送',
    path: '/sendNCN',
    icon: 'cascades',
  },
  {
    name: '查询',
    path: '/search',
    icon: 'cascades',
  },
  {
    name: '网关',
    path: '/gateway',
    icon: 'cascades',
  },
  {
    name: '端口',
    path: '/port',
    icon: 'cascades',
  },
  {
    name: '用户',
    path: '/member',
    icon: 'person',
  },
  {
    name: '设置',
    path: '/setting',
    icon: 'shezhi',
  },
  
];

export { headerMenuConfig, asideMenuConfig };
