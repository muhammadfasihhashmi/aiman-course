import { Outlet } from "react-router";
import Header from "../components/sharedUI/Header";

function AppLayout() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
