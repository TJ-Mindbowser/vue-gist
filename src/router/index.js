import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import TodoList from "@/components/TodoList.vue";
import Login from "@/components/Login.vue";
import AddUser from "@/components/User/add.vue";
import User from "@/components/User/list.vue";
import EditUser from "@/components/User/edit.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
    {
        path: "/todo-list",
        name: "todo-list",
        component: TodoList,
    },
    {
        path: "/users",
        name: "users",
        component: User,
    },
    {
        path: "/add-user",
        name: "add-user",
        component: AddUser,
    },
    {
        path: "/users:id",
        name: "edit",
        component: EditUser,
    },
    {
        path: "/auth",
        name: "login",
        component: Login,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from) => {
    let isAuthenticated = !false
    if (
        // make sure the user is authenticated
        !isAuthenticated &&
        // ❗️ Avoid an infinite redirect
        to.name !== 'login'
    ) {
        // redirect the user to the login page
        return { name: 'login' }
    }
})

export default router;