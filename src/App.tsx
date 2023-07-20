import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./screens";
import { Home } from "./screens/user";

// import ErrorPage from "./error-page";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

export default App;
