import { getPages } from "../../services/services";
import { getPosts } from "../../services/services";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./index.scss";

export default function Navigation(){
  const [pages, setPages] = useState([])
  const [posts, setPosts] = useState([])
  

  useEffect(() => {
    getPages().then((pages) => {setPages(pages)})
    getPosts().then((posts) => {setPosts(posts)})
  }, [])
  
  return (
    <nav className="navigation">
      <ul>
        {pages.map((page, index) => (
          <li key={index}>
            <Link title={page.title.rendered} to={page.slug}>{page.title.rendered}</Link>
          </li>
        ))}
        {posts.map((post, index) => (
          <li key={index}>
            <Link dangerouslySetInnerHTML={{__html: post.title.rendered}} title={post.title.rendered} to={post.slug}></Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}