import Navigation from "../navigation"
import { Link } from "react-router-dom"
import "./index.scss"
import { Helmet } from "react-helmet-async"

export default function Header({siteInfo} ){
  const {name} = siteInfo
  return (
    <>
    <Helmet>
      <title>Sophie Sara | Chanteuse, auteur, comédienne</title>
      <meta name="description" content="Sophie Sara | Chanteuse, auteur, comédienne"/>
    </Helmet>
    
    <header className="header">
      <Link to="/">
        <h1>{name}</h1>
      </Link>
      <Navigation />
    </header>
    </>
  )
}