import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "pages/HomePage/HomePage";
import ErrorPage from "pages/ErrorPage/ErrorPage";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
