import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./layout/AppLayout";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Cart from "./components/cart/Cart";
import OrderForm from "./components/order/OrderForm";

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
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "/order/new",
        Component: OrderForm,
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
