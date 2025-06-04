import { Outlet } from "react-router-dom";
import Header from "../components/layout/default/Header";
import Footer from "../components/layout/default/Footer";

export default function DefaultLayout() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
