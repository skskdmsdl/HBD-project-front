import AnimationRevealPage from "helpers/AnimationRevealPage";
import Login from "views/Login";
import Main from "views/main/Main";

const MainRoutes = {
    path: '/',
    element: (
        <AnimationRevealPage>
            <Login />
        </AnimationRevealPage>
    ),
    children: [
        { path: '/main', element: <Main /> },
    ]
};

export default MainRoutes;