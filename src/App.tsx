import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CoctailsPage from "pages/CoctailsPage/CoctailsPage";
import ErrorPage from "pages/ErrorPage/ErrorPage";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <CoctailsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
