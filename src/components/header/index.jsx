import Navigation from "../navigation"

export default function Header({siteInfo}){
  const {name, description} = siteInfo
  return (
    <header className="header">
      <h1>{name}</h1>
      <p>{description}</p>
      <Navigation />
    </header>
  )
}