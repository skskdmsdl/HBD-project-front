import { createBrowserRouter } from 'react-router-dom';

import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';

export default function IndexRoutes() {
    return createBrowserRouter([LoginRoutes, MainRoutes]);
}