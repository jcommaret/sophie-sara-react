import { Routes, Route } from "react-router-dom"

import Layout from "../pages/Layout"

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      </Route>
    </Routes>
  )
}