import bookApp from './apps/book-main/book-app.cmp.js'
import bookApp from './apps/keep-main/keep-app.cmp.js'
import bookApp from './apps/mail-main/mail-app.cmp.js'

const myRoutes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/books',
        component: bookApp,
        children: [{
                path: '/books/adder',
                component: bookAdder
            },
            {
                path: '/books/edit/:bookId',
                component: bookEdit
            },
            {
                path: '/books/:bookId',
                component: bookDetails
            },
        ]
    },
    {
        path: '/keep',
        component: keepApp,
        children: []
    }, {
        path: '/mail',
        component: mailApp,
        children: []
    },
    {
        path: '/about',
        component: aboutPage,
        children: []
    },


]

export const myRouter = new VueRouter({ routes: myRoutes })