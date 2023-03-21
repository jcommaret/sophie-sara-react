import Navigation from "../navigation"
import "./index.scss"

export default function Header({siteInfo} ){
  const {name} = siteInfo
  return (
    <header className="header">
      <h1>{name}</h1>
      <Navigation />
    </header>
  )
}