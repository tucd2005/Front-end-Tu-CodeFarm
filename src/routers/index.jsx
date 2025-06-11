import { createBrowserRouter, RouterProvider } from "react-router-dom";
import adminRoutes from "./adminRouter";
import clientRoutes from './clientRouter';
import DashBoardAdmin from "../pages/admin/DashBoardAdmin";
import ClientLayout from "../layouts/ClientLayout";
import Page from "../pages/client/Page";
import AdminLayout from './../layouts/AdminLayout';
const router = createBrowserRouter([
    {
        path: '/admin', 
        element: <AdminLayout/>,
        children: adminRoutes   ,
    },

    {
		path: "/",
		element: <ClientLayout />,
		children: clientRoutes,
	},
    {
        path: "/page",
        element: <Page/>,
    }
]);

const AppRouter = () => {
    return <RouterProvider router={router}/>
}
export default AppRouter