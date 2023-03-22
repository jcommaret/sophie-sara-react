import { Routes, Route } from "react-router-dom"
import { useEffect, useState} from "react"
import { getPages } from "../services/services"
import { getPosts } from "../services/services"
import Layout from "../pages/Layout"
import PageComponent from "../pages/Page"
import Homepage from "../pages/Homepage"

export default function Routers() {
  const [ pages, setPages ] = useState([])
  const [ posts, setPosts] = useState([])
  useEffect(() => {
    getPages().then((pages) => {setPages(pages)})
    getPosts().then((posts) => {setPosts(posts)})
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" home element={<Homepage />} />
        {pages.map((page, index) => (
          <Route key={index} path={page.slug} element={<PageComponent content={ page } />} />
        ))}
        {posts.map((post, index) => (
          <Route key={index} path={post.slug} element={<PageComponent content={ post } />} />
        ))}
      </Route>
    </Routes>
  )
}