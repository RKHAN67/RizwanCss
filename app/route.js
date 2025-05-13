import { RoutePaths } from "./constants/route-path";

export default [
    layout('./layout/main.jsx',
        index('/pages/home.jsx'),
        route(RoutePaths.ABOUT_US, '/pages/about-us.jsx')
    )
];