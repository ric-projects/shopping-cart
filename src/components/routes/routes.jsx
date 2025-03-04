import Homepage from "../homepage/homepage";
import ShopPage from "../shoppage/shoppage";

const routes = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "shoppage",
    element: <ShopPage />,
  },
];

export default routes;
