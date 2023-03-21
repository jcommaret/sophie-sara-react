import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getSiteInfo } from "../../services/services";

import Header from "../../components/header";
import Footer from "../../components/footer";

import "./index.scss";

export default function Layout() {
  const [siteInfo, setSiteInfo] = useState("")
  useEffect(() => {
    getSiteInfo().then((siteInfo) => {setSiteInfo(siteInfo)})
  }, [])
  return (
    <>
      <Header siteInfo={siteInfo}/>
      <main className="main-container">
        <Outlet />
      </main>
      <Footer siteInfo={siteInfo}/>
    </>
  )
}