import { Header } from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
export const MainLayout = () => {
  function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
  }
  return (
    <div className="w-full flex flex-col justify-start items-center dark:bg-slate-500 dark:text-white">
      <Header toggleDarkMode={toggleDarkMode} />
      <Outlet />
      <Footer />
    </div>
  );
};
