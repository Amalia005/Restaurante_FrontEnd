import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Aquí se renderiza la página que corresponda a la ruta (Home en tu caso) */}
      <Outlet />
    </div>
  );
};

export default MainLayout;
