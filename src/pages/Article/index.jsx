import { Helmet } from "react-helmet-async"
import "./index.scss"

export default function ArticleComponent({content}){  
  return (
    <>
    <Helmet>
      <title>{content.yoast_head_json.title}</title>
    </Helmet>
    <div className="article" id={content.slug}>
      <h1 dangerouslySetInnerHTML={{__html: content.title.rendered}}></h1>
      <div dangerouslySetInnerHTML={{__html: content.content.rendered}}></div>
    </div>
    </>
  )    
}