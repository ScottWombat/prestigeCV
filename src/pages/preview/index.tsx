import { useState } from 'react'
import { PreviewContainer,PrintToPDF } from './index.styled';
import  Template   from '@components/templates/template47';
import ColorMenu  from '@components/color-menu';
const Preview = (props) =>{
    const [currentColor,setCurrentColor] = useState('')
    const onSelectColor = (hexCode) =>{
        setCurrentColor(hexCode);
    }
    return (
        <PreviewContainer>
        <ColorMenu onSelect={onSelectColor}/>
        <Template {...props}/>
        <PrintToPDF>Print to PDF</PrintToPDF>
        </PreviewContainer>
    )
}
export default Preview;