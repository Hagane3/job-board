import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div>NAVIGATION</div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
