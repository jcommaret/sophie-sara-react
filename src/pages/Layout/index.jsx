import Header from "../../components/header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="main-container">
        <Outlet />
      </main>
    </>
  )
}