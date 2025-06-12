import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Root from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetailPage";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home/>}/>
//   </Route>
// )
// const router = createBrowserRouter(routeDefinitions)

// ABOVE IS OLDER WAY OF DEFINING ROUTES

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {index:true, element: <Home /> },// by not putting slash here it becomes a relative path and adjoins the parent
      // by setting index to ture it is default page displayed 
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <ProductDetailPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
