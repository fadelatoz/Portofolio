import { Icon } from '@iconify/react';

import { SideNavItem } from '../types/SIdenav';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    // icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Experience',
    path: '/experience',
    // icon: <Icon icon="lucide:folder" width="24" height="24" />,
    // submenu: true,
    // subMenuItems: [
    //   { title: 'All', path: '/projects' },
    //   { title: 'Web Design', path: '/projects/web-design' },
    //   { title: 'Graphic Design', path: '/projects/graphic-design' },
    // ],
  },
  {
    title: 'Skills',
    path: '/my-skills',
    // icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: 'Projects',
    path: '/settings',
    // icon: <Icon icon="lucide:settings" width="24" height="24" />,
    // submenu: true,
    // subMenuItems: [
    //   { title: 'Account', path: '/settings/account' },
    //   { title: 'Privacy', path: '/settings/privacy' },
    // ],
  },
  // {
  //   title: 'Help',
  //   path: '/help',
  //   // icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  // },
];