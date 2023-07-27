import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./screens";
import {
  Details,
  Home,
  Products,
  Search,
  Services,
  Support,
  WishList,
} from "./screens/user";

// import ErrorPage from "./error-page";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <Products />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/services",
    element: <Services />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search",
    element: <Search />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/details",
    element: <Details />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/wishlist",
    element: <WishList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/support",
    element: <Support />,
    errorElement: <ErrorPage />,
  },
]);

export default App;
