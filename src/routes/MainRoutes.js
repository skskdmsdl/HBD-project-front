import MainLayout from "components/layout/MainLayout";
import Album from "views/album/Album";

const MainRoutes = {
    path: '/',
    element: (
        <MainLayout />
    ),
    children: [
        { path: '/album', element: <Album /> },

    ]
};

export default MainRoutes;