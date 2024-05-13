import SiteRoot from "../pages/SiteRoot";
import Home from "../pages/site/Home/Home";
import Shop from "../pages/site/Shop/Shop"
import AdminRoot from "../pages/admin/AdminRoot";
import Product from "../pages/admin/Products/Product";
import Dashboard from "../pages/admin/DashBoard/Dashboard";
const ROUTES  = [
    {
        path : "/",
        element : <SiteRoot/>,
        children : [{
            path : "",
            element : <Home/>
        },{
            path : "shop",
            element : <Shop/>
        }]
    },{
        path:"/admin",
        element:<AdminRoot/>,
        children: [
            {
              path: "",
              element: <Dashboard/>,
            },
            {
              path: "product",
              element: <Product/>,
            }],
    }
];

export default ROUTES