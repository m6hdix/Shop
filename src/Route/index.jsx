import ProductDetails from "../Components/ProductDetails";
import StorePage from "../Components/store";


const routes = [
  {
    path: "/",
    element: <StorePage />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
];

export default routes;