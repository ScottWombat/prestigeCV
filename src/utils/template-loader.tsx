import { useState,useEffect } from 'react'
import PageNotFound from 'pages/page-notfound';
/* @vite-ignore */ 
const TemplateLoader = (props) =>{
  const [Component, setComponent] = useState(null);
 
  useEffect(() => {
    // Dynamic import inside useEffect
    /* @vite-ignore */
    import (/* @vite-ignore */`../components/templates1/${props.type}/template${props.templateId}`)
      .then((module) => {
        // Must wrap in a function to store the component itself in state
        setComponent(() => module.default);
      })
      .catch((err) => {
        console.error("Failed to load component", err);
      });
  }, []);

  if (!Component ) return <PageNotFound/>;

  return <Component id={props.id} colorScheme={props.colorScheme} lineBreak={props.lineBreak} bgImage={props.bgImage}/>;
    
}

export default TemplateLoader;