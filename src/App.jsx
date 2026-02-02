import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./layout/AppLayout";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";

const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/menu",
        Component: Menu,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
