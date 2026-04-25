import { lazy,Suspense } from 'react'
const TemplateLoader = ({index}) =>{
    const template_name = `template${index}`
    console.log('templae')
    console.log({template_name}) 
    const DynamicTemplate = lazy(() => import (`../components/templates/${template_name}`))
      
    
    return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicTemplate/>
    </Suspense>
    )
}

export default TemplateLoader;