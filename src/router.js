import VueRouter from 'vue-router';
import Home from "./views/Home";
//import Hello from "./views/Hello";
import Albi from "./views/Albi";
import Serie from "./views/Serie";
import Collane from "./views/Collane";

const routes = [
    {path: "/", component: Home, name: "FUMETTI_HOME"},
    //{path: "/hello", component: Hello},
    {path: "/albi", component: Albi, name: "FUMETTI_ALBI"},
    {path: "/serie", component: Serie, name: "FUMETTI_SERIE"},
    {path: "/collane", component: Collane, name: "FUMETTI_COLLANE"},
];

const router = new VueRouter({
    routes
});

export default router;