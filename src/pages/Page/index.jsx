import { Helmet } from "react-helmet-async"
import "./index.scss"

export default function PageComponent({content}){  
  return (
    <>
    <Helmet>
      <title>{content.yoast_head_json.title}</title>
      <meta name="description" content={content.title.rendered}/>
    </Helmet>
    <div className="page" id={content.slug}>
      <h1 dangerouslySetInnerHTML={{__html: content.title.rendered}}></h1>
      <div dangerouslySetInnerHTML={{__html: content.content.rendered}}></div>
    </div>
    </>
  )    
}