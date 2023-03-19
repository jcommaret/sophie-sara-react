import React from "react";
import { getPages } from "../../services/services";
import { useEffect, useState } from "react";

const pages = getPages();

console.log(pages)

export default function Header(){
  const [pages, setPages] = useState([])  
  useEffect(() => {
    getPages().then((pages) => {setPages(pages)})
  }, [])
  
  return (
    <header className="header">
      <h1>Sophie Sara</h1>
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