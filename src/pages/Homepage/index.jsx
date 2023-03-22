import { Helmet } from "react-helmet-async"

export default function Homepage(){
  const content = {
    title : "Sophie Sara",
    desc : "Chanteuse, Comédienne, Auteur, Professeur de chant"
  }
  const {title , desc } = content
  return (
    <>
      <Helmet>
        <title>{title} | {desc}</title>
      </Helmet>
      <div className="page" >
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </>
  )    
}