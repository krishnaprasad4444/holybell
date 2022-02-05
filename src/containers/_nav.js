export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Favorites']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Items',
    to: '/items/itemList',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Inventory Adjustments',
    to: '/stockList',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'POS',
    to: '/pos',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Menu']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Items',
    route: '/item',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Item Groups',
        to: '/items/itemGroups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Items',
        to: '/items/itemList',
      }
    ],
  }
  
]

