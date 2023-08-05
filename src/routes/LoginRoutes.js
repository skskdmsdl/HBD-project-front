import AnimationRevealPage from "helpers/AnimationRevealPage";

import Login from "views/Login";

const MainRoutes = {
    path: '/login',
    element: (
        <AnimationRevealPage>
            <Login />
        </AnimationRevealPage>
    ),
};

export default MainRoutes;