
import ProductsAdmin from '../pages/admin/ProductsAdmin';
import DashBoardAdmin from './../pages/admin/DashBoardAdmin';
 const adminRoutes = [
    {index: true, element: <DashBoardAdmin/>},
    {path: "products", element: <ProductsAdmin/> }
 ]
 export default adminRoutes