import React from "react";

export default function Header({siteInfo}){
  return (
    <footer className="footer">
      <p>{siteInfo.name}</p>
    </footer>
  )
}