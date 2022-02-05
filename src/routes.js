import React from 'react';


const Home = React.lazy(() => import('./views/home/home'));
const History = React.lazy(() => import('./views/history'));
const Administration = React.lazy(() => import('./views/administration'));
const Festival = React.lazy(() => import('./views/festival'));
const Events = React.lazy(() => import('./views/events'));
const News = React.lazy(() => import('./views/news'));
const Attractions = React.lazy(() => import('./views/attractions'));
const Gallery = React.lazy(() => import('./views/gallery'));
const TokenBooking = React.lazy(() => import('./views/token-booking'));
const Donation = React.lazy(() => import('./views/donation'));
const PoojaBooking = React.lazy(() => import('./views/poojaBooking/poojaBooking'));
const Cart = React.lazy(() => import('./views/cart/cart'));
const Checkout = React.lazy(() => import('./views/checkout'));
const Contact = React.lazy(() => import('./views/contact'));

const routes = [
  { path: '/home', exact: true, name: 'Home', component:Home },
  { path: '/history', exact: true, name: 'History', component:History },
  { path: '/administration', exact: true, name: 'History', component:Administration },
  { path: '/festival', exact: true, name: 'History', component:Festival },
  { path: '/events', exact: true, name: 'History', component:Events },
  { path: '/news', exact: true, name: 'History', component:News },
  { path: '/attractions', exact: true, name: 'History', component:Attractions },
  { path: '/gallery', exact: true, name: 'History', component:Gallery },
  { path: '/token-booking', exact: true, name: 'History', component:TokenBooking },
  { path: '/donation', exact: true, name: 'History', component:Donation },
  { path: '/poojaBooking',exact: true, name: 'Pooja Booking', component: PoojaBooking },
  { path: '/cart',exact: true, name: 'Cart', component: Cart },
  { path: '/checkout',exact: true, name: 'Pooja Booking', component: Checkout },
  { path: '/contact',exact: true, name: 'Pooja Booking', component: Contact },
];

export default routes;
