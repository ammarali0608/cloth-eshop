import { Outlet } from "react-router-dom";

import CategoryMenu from "../../components/categories-menu/categories-menu.component";
function Home() {
  return (
    <div>
      <CategoryMenu />;
      <Outlet />
    </div>
  );
}

export default Home;
