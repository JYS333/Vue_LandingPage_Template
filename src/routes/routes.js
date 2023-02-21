import { Navigate, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react"; // 路由懒加载 lazy load
import { Space, Spin } from "antd";

// import Home from "../containers/home/home";
// import NotFound from "../containers/404/404";
// import DashBoard from "../containers/dashboard/dashboard";
// import Welcome from "../containers/welcome/welcome";
// import User from "../containers/user/user";
// import Detail from "../containers/detail/detail";

const Home = lazy(() => import('../containers/home/home'));
const Detail = lazy(() => import('../containers/detail/detail'));
const DashBoard = lazy(() => import('../containers/dashboard/dashboard'));
const Welcome = lazy(() => import('../containers/welcome/welcome'));
const User = lazy(() => import('../containers/user/user'));
const NotFound = lazy(() => import('../containers/404/404'));


const routes = [
    { path: '/', element: <Navigate to="/home" /> },
    // home
    {
        path: '/home',
        element: (
            <Suspense fallback={<Space><Spin size="large" /></Space>}>
                <Home />
            </Suspense>) // 注意写法，element内为标签格式
    },
    // 登录页
    {
        path: '/detail',
        element: (
            <Suspense fallback={<Space><Spin size="large" /></Space>}>
                <Detail />
            </Suspense>)
    },
    {
        path: '/dashboard',
        element:
            (
                <div>
                    <Suspense fallback={<Space><Spin size="large" /></Space>}>
                        <DashBoard />
                    </Suspense>
                    {/* Outlet 可以让父组件展示在子组件外层，且会让子组件渲染出来 */}
                    <Outlet />
                </div>
            ),
        children: [
            { index: true, element: <Navigate to="/dashboard/welcome" replace /> }, // 该路由下默认展示
            {
                path: 'welcome',
                element: (
                    <Suspense fallback={<Space><Spin size="large" /></Space>}>
                        <Welcome />
                    </Suspense>
                )
            },
            {
                path: 'user',
                element: (
                    <Suspense fallback={<Space><Spin size="large" /></Space>}>
                        <User />
                    </Suspense>
                )
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]

export default routes;