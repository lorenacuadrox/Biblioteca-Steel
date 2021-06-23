import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

// ROUTES

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: () => import("./pages/index.vue")
    },

    {
        path: "/author",
        component: () =>  import("./pages/author/listAuthor.vue")
    },

    {
        path: "/author/new",
        component: () =>  import("./pages/author/createAuthor.vue")
    },

    {
        path: "/book",
        component: () =>  import("./pages/book/listBook.vue")
    },

    {
        path: "/book/new",
        component: () =>  import("./pages/book/createBook.vue")
    },

    {
        path: "/editorial",
        component: () =>  import("./pages/editorial/listEditorial.vue")
    },

    {
        path: "/editorial/new",
        component: () =>  import("./pages/editorial/createEditorial.vue")
    },
    
    {
        path: "/:error(.*)",
        component: () => import("./pages/error.vue")
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

// GUARDS