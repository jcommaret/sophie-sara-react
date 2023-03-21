import React from "react";

export default function Footer({siteInfo}){
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>© {year} {siteInfo.name}</p>
    </footer>
  )
}