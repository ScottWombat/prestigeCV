
import { useState,useEffect } from 'react';
import * as T from './abstract.styled';

const Template2 = ({ colorScheme,bgImage }) => {
    const [image,setImage] = useState(null)
    useEffect(()=>{
            let temp = `/images/abstract/${bgImage}.png`;
            setImage(temp)
     },[])
    return (
        <T.TemplateContainer>
            <T.Header bgImage={image} imgBGAlign='right'>
                <T.NameWrapper>
                    <T.Name>Archie</T.Name><T.LastName fontColor={colorScheme.hex5}>ROBINSON</T.LastName>
                    <T.Position>Sale Representative</T.Position>
                    <T.Address>
                        <div>revit@gmail.com</div>|<div>0404 387 1209</div>|<div>Dallas,TX USA</div>
                    </T.Address>
                </T.NameWrapper>

                <T.Objectives>
                    A passionate functional fitness and mobility instructor specialized in injury prevention and corrective exercise techniques. Looking to apply targeted coaching strategies to improve participant strength, flexibility, and overall physical wellness.
                </T.Objectives>

            </T.Header>

            <T.ContentHeader fontColor={colorScheme.hex5} fontStyle={'italic'}>
                <T.Square /><T.Square1 />Prefessional Summary
            </T.ContentHeader>
            <T.Content>
                A passionate functional fitness and mobility instructor specialized in injury prevention and corrective exercise techniques. Looking to apply targeted coaching strategies to improve participant strength, flexibility, and overall physical wellness.
            </T.Content>
            <T.ContentHeader fontColor={colorScheme.hex5}>
                <T.Square /><T.Square1 />Personal Skills
            </T.ContentHeader>
            <T.Content>
                A passionate functional fitness and mobility instructor specialized in injury prevention and corrective exercise techniques. Looking to apply targeted coaching strategies to improve participant strength, flexibility, and overall physical wellness.
            </T.Content>
            <T.ContentHeader fontColor={colorScheme.hex5}>
                <T.Square /><T.Square1 />Technical Skills
            </T.ContentHeader>
            <T.Content>
                A passionate functional fitness and mobility instructor specialized in injury prevention and corrective exercise techniques. Looking to apply targeted coaching strategies to improve participant strength, flexibility, and overall physical wellness.
            </T.Content>
            <T.ContentHeader fontColor={colorScheme.hex5}>
                <T.Square /><T.Square1 />Programming Skills
            </T.ContentHeader>
            <T.Content>
                A passionate functional fitness and mobility instructor specialized in injury prevention and corrective exercise techniques. Looking to apply targeted coaching strategies to improve participant strength, flexibility, and overall physical wellness.
            </T.Content>
            <T.ContentHeader fontColor={colorScheme.hex5}>
                <T.Square /><T.Square1 />Database Skills
            </T.ContentHeader>
            <T.Content>
                A passionate functional fitness and mobility instructor specialized in injury prevention and corrective exercise techniques. Looking to apply targeted coaching strategies to improve participant strength, flexibility, and overall physical wellness.
            </T.Content>
            <T.ContentHeader fontColor={colorScheme.hex5}>
                <T.Square /><T.Square1 />Education
            </T.ContentHeader>
            <T.Content>
                A passionate functional fitness and mobility instructor specialized in injury prevention and corrective exercise techniques. Looking to apply targeted coaching strategies to improve participant strength, flexibility, and overall physical wellness.
            </T.Content>
            <T.ContentHeader fontColor={colorScheme.hex5}>
                <T.Square /><T.Square1 />Languages
            </T.ContentHeader>
            <T.Content>
            A passionate functional fitness and mobility instructor specialized in injury prevention and corrective exercise techniques. Looking to apply targeted coaching strategies to improve participant strength, flexibility, and overall physical wellness.
            </T.Content>
            <T.ContentHeader fontColor={colorScheme.hex5}>
                <T.Square /><T.Square1 />Work Experience
            </T.ContentHeader>
            <T.Content>
            A passionate functional fitness and mobility instructor specialized in injury prevention and corrective exercise techniques. Looking to apply targeted coaching strategies to improve participant strength, flexibility, and overall physical wellness.
            </T.Content>
            <T.ContentHeader fontColor={colorScheme.hex5}>
                <T.Square /><T.Square1 />References
            </T.ContentHeader>
            <T.Content>
            A passionate functional fitness and mobility instructor specialized in injury prevention and corrective exercise techniques. Looking to apply targeted coaching strategies to improve participant strength, flexibility, and overall physical wellness.
            </T.Content>
        </T.TemplateContainer>
    )
}

export default Template2;