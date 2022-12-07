import add from "./page/addfrom.vue";
import home from "./page/home.vue";
import update from "./page/update.vue"


export default [
    {
        path: "/",
        name: "home",
        component: home
    },
    {
        path: "/add",
        name: "add",
        component: add
    },
    {
        path: "/update/:id",
        name: "update",
        component: update
    }
];
