import { getPages } from "../../services/services";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./index.scss";

export default function Navigation(){
  const [pages, setPages] = useState([])
  
  useEffect(() => {
    getPages().then((pages) => {setPages(pages)})
  }, [])
  
  return (
    <nav className="navigation">
      <ul>
        {pages.map((page, index) => (
          <li key={index}>
            <Link title={page.title.rendered} to={page.link}>{page.title.rendered}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}