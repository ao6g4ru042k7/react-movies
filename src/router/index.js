import App from "../containers/App";
import Home from "../containers/Home/Home";
import Detail from "../containers/Detail/Detail";
import Favorite from "../containers/Favorite/Favorite";
import Login from "../containers/Login/Login";
import Search from "../containers/Search/Search";
const routers = [
    {
        component: App,
        routes: [
            {
                path: "/",
                exact: true,
                component: Home
            },
            {
                path: "/detail/:id",
                component: Detail
            },
            {
                path: "/favorite",
                component: Favorite
            },
            {
                path: "/login",
                component: Login
            },
            {
                path: "/signup",
                component: Login
            },
            {
                path: "/search",
                component: Search
            },
        ],
    },
];

export default routers