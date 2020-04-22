import HomePage from '../pages/home.vue';
import AboutPage from '../pages/about.vue';
import FormPage from '../pages/form.vue';


import DynamicRoutePage from '../pages/dynamic-route.vue';
import RequestAndLoad from '../pages/request-and-load.vue';
import NotFoundPage from '../pages/404.vue';

var routes = [{
    path: '/',
    component: HomePage,
    pushState: true,
  },
  {
    path: '/about/',
    component: AboutPage,
    pushState: true,
    options: {
      pushState: true,
      history: true,
      animate: false,
    },
    on: {
      pageBeforeIn: function (event, page) {
        console("pageBeforeIn");
      },
      pageAfterIn: function (event, page) {
        // do something after page gets into the view
      },
      pageInit: function (event, page) {
        // do something when page initialized
      },
      pageBeforeRemove: function (event, page) {
        // do something before page gets removed from DOM
      },
    }
  },
  {
    path: '/form/',
    component: FormPage,
    view: {
      pushState: true,
    },
  },


  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
    view: {
      pushState: true,
    },
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [{
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve({
          component: RequestAndLoad,
        }, {
          context: {
            user: user,
          }
        });
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
