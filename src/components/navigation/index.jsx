import { getPages } from "../../services/services";
import { useEffect, useState } from "react";

export default function Navigation(){
  const [pages, setPages] = useState([])
  
  useEffect(() => {
    getPages().then((pages) => {setPages(pages)})
  }, [])
  
  return (
  <ul>
    {pages.map((page, index) => (
      <li key={index}>
        <a href={page.link}>{page.title.rendered}</a>
      </li>
    ))}
  </ul>
  )
}