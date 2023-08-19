import { Outlet } from 'react-router-dom';
import Header from '../../views/Header';

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
};

export default MainLayout;