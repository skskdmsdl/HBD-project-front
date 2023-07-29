import { createBrowserRouter } from 'react-router-dom';

import MainRoutes from './MainRoutes';

export default function IndexRoutes() {
    return createBrowserRouter([MainRoutes]);
}