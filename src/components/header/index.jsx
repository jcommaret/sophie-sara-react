import React from "react";
import { getSiteInfo, getPages } from "../../services/services";
import { useEffect, useState } from "react";

export default function Header(){
  const [siteInfo, setSiteInfo] = useState("")
  const [pages, setPages] = useState([])

  useEffect(() => {
    getSiteInfo().then((siteInfo) => {setSiteInfo(siteInfo)})
    getPages().then((pages) => {setPages(pages)})
  }, [])

  return (
    <header className="header">
      <h1>{siteInfo.name}</h1>
      <p>{siteInfo.description}</p>
      <ul>
        {pages.map((page, index) => (
          <li key={index}>
            <a href={page.link}>{page.title.rendered}</a>
          </li>
        ))}
      </ul>
    </header>
  )
}