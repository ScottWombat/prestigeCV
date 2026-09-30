import {useState,useEffect} from 'react';
//import * as A from '../app.styled';
import * as T from './abstract.styled'
//import { BGContainer } from '@components/templates/dummy1.styled';
//import './abstract.css';
const Template1 = ({ colorScheme,bgImage }) => {
   
    const [image,setImage] = useState(null)
    useEffect(()=>{
        let temp = `/images/abstract/${bgImage}.png`;
        setImage(temp)
    },[])
    return (
        <T.TemplateContainer>
            <T.Header bgImage={image} imgBGAlign='center'>
                <T.NameWrapper>
                    <T.Name>Morgan</T.Name>
                    <T.LastName fontColor={colorScheme.hex5}>WALLEN</T.LastName>
                    <T.Position>Musical Artist</T.Position>
                    <T.Address>
                    <div>revit@gmail.com</div>|<div>0404 387 1209</div>|<div>Dallas,TX USA</div>
                </T.Address>
                </T.NameWrapper>
                
                <T.Objectives>
                    A passionate functional fitness and mobility instructor specialized in injury prevention and corrective exercise techniques. Looking to apply targeted coaching strategies to improve participant strength, flexibility, and overall physical wellness.
                </T.Objectives>
              
            </T.Header>
             <T.ContentHeader fontColor={colorScheme.hex5}>
                            <T.SquareWrapper>
                                <T.TinySquare fontColor={colorScheme.hex5}/>
                                <T.TinySquare fontColor={colorScheme.hex5}/><T.TinySquare fontColor={colorScheme.hex5}/>
                                <T.TinySquare fontColor={colorScheme.hex5}/><T.TinySquare fontColor={colorScheme.hex5}/>
                                <T.TinySquare fontColor={colorScheme.hex5}/><T.TinySquare fontColor={colorScheme.hex5}/>
                                <T.TinySquare fontColor={colorScheme.hex5}/><T.TinySquare fontColor={colorScheme.hex5}/>
                            </T.SquareWrapper>&nbsp;Prefessional Summary
            </T.ContentHeader>
            <T.Content>
                            A passionate functional fitness and mobility instructor specialized in injury prevention and corrective exercise techniques. Looking to apply targeted coaching strategies to improve participant strength, flexibility, and overall physical wellness.
            </T.Content>
        </T.TemplateContainer>
    )
}

export default Template1;