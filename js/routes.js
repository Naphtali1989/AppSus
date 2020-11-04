// import bookApp from './apps/book-main/pages/book-app.cmp.js'
import keepApp from './apps/keep-main/pages/keep-app.cmp.js';
import mailApp from './apps/mail-main/pages/mail-app.cmp.js';
import homePage from './apps/main-cmps/home-page.cmp.js';

const myRoutes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/keep',
        component: keepApp,
        children: []
    },
    {
        path: '/mail',
        component: mailApp,
        children: []
    },
    // {
    //     path: '/about',
    //     component: aboutPage,
    //     children: []
    // },
    // {
    //     path: '/books',
    //     component: bookApp,
    //     children: [{
    //             path: '/books/adder',
    //             component: bookAdder
    //         },
    //         {
    //             path: '/books/edit/:bookId',
    //             component: bookEdit
    //         },
    //         {
    //             path: '/books/:bookId',
    //             component: bookDetails
    //         },
    //     ]
    // },
]

export const myRouter = new VueRouter({ routes: myRoutes })