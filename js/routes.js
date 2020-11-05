// import bookApp from './apps/book/pages/book-app.cmp.js'
import noteApp from './apps/note/pages/note-app.cmp.js';
import emailApp from './apps/email/pages/email-app.cmp.js';
import emailDetails from './apps/email/pages/email-details.cmp.js';
import emailBoard from './apps/email/pages/email-board.cmp.js';
import homePage from './apps/cmps/home-page.cmp.js';

const myRoutes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/note',
        component: noteApp,
        children: []
    },
    {
        path: '/email',
        component: emailApp,
        children: [{
            path: '/email/board/:details?',
            component: emailBoard,
        }, {
            path: '/email/:emailId',
            component: emailDetails,
        }]
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