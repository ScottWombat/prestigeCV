import styled, { keyframes } from 'styled-components';
import MainProps from '../styled-props';

export const LeftBG = styled.div<MainProps>`
    witdth: 100%;
    height:${(m: MainProps) => m.divHeight};
    position:absolute;
    top:0;
    
`
export const LeftRow= styled.div<MainProps>`
    witdth: 100%;
    height:${(m: MainProps) => m.divHeight};
    background-color:${(m: MainProps) => m.bgColor};
`;

export const RightRow= styled.div<MainProps>`
    witdth: 100%;
    background-color:${(m: MainProps) => m.bgColor};
   
`;

export const NextRightRow = styled.div<MainProps>`
    position:relative;

`;
export const LeftContent = styled.div<MainProps>`
    display:grid;
    grid-template-rows:1fr auto;

`;

export const Name = styled.div<MainProps>`
     text-align:center;
     white-space: pre-wrap;
     font-size:1.6rem;
     color:#000;
`;
export const Divider = styled.div<MainProps>`
    margin-left:-27px;
    margin-top:20px;
    overflow: hidden;
`;

export const Position = styled.div<MainProps>`
    margin-top:20px;
    text-align:center;
    font-size:0.8rem;
    color:#fff;
`;
export const Email = styled.div<MainProps>`
     margin-top:15px;
     text-align:center;
     white-space: pre-wrap;
     font-size:1rem;
     color:#fff;
`;

export const Mobile = styled.div<MainProps>`
     text-align:center;
     white-space: pre-wrap;
     font-size:1rem;
     color:#fff;
`;

export const Location = styled.div<MainProps>`
     text-align:center;
     white-space: pre-wrap;
     font-size:1rem;
     color:#fff;
`;

export const Summary = styled.div<MainProps>`
    
    /*font-family: 'Amatic SC';*/
    font-family:'WireOne';
    padding-top:30px;
    padding-left:50px;
    padding-right:50px;
    padding-bottom:30px;
    text-align:justify;
    font-weight:bold;
    letter-spacing:1px;
`;

export const ContentRow = styled.div`
    width:85%;
    display:flex;
    /*border-bottom: 0.1em solid rgba(114, 143, 206, 0.5);*/
    border-bottom: 0.1em solid rgba(201,201,201,0.5);
    padding-top:20px;
    margin-left:20px;
`

export const NextContentRow = styled.div<MainProps>`
    width:85%;
    display:flex;
    padding-top:0px;
    margin-left:20px;
    background-color: ${(m:MainProps)=> m.bgColor};
`
export const TopicWrapper = styled.div`
    display:flex;
    margin-left:25px;
    width:100%;
   
    font-family:'WireOne';
    font-size:1.4rem;
    font-weight:bold;
    letter-spacing:2px;
`;


export const FullName = styled.div`
    font-family:'WireOne';
    font-size:2.5rem;
    font-weight:bold;
    text-align:center;
    margin-top:30px;
`
export  const Role = styled.div`
    font-family:'Neuropol';
    font-size:1.4rem;
    font-weight:bold;
    text-align:center;
`
export const HeaderName = styled.div<MainProps>`
    color: ${(m:MainProps)=> m.fontColor };
    margin-left:5px;
    font-family='Anton';
`;
export const ContactWrapper =styled.div<MainProps>` 
    display: flex;
    position: relative;
    margin-top: 0px;
    margin-left: ${(m:MainProps)=>m.marginLeft || '35px'};
    margin-right: 35px;
    color: rgba(0, 0, 0, 1);
    font-size:0.8em;
    height:auto;
    width:85%;
`;

export const ContactWrapper1 =styled.div<MainProps>` 
   // display: flex;
    position: relative;
    //margin-top: 0px;
    margin-left: ${(m:MainProps)=>m.marginLeft || '35px'};
    //margin-right: 35px;
    color: rgba(0, 0, 0, 1);
    font-size:0.8em;
    height:auto;
    width:85%;
    text-align: justify;
    text-justify: inter-character;
`;

export const ContactWrapper2 =styled.div<MainProps>` 
    display: flex;
    flex-wrap: wrap;
    position: relative;
    //margin-top: 0px;
    margin-left: ${(m:MainProps)=>m.marginLeft || '35px'};
    //margin-right: 35px;
    color: rgba(0, 0, 0, 1);
    font-size:0.8em;
    height:auto;
    width:470px;
    
`;

export const ExperiencTitleWrapper = styled.div`
   width: 100%;
   margin-top:5px;
   display: inline-flex;
   @media (max-width: 768px) {
        font-size: 0.8rem;
        font-weight: 200;
        letter-spacing: 0px;
        margin-top:5px;
    }
`;

export const ExperienceCompany = styled.div`
  width: 100%;
   margin-top:0px;
   display: inline-flex;
   font-weight:bold;
`;

export const Experience = styled.div`
   margin-left: 20px;
   @media (max-width: 768px) {
        font-size: 0.8rem;
        font-weight: 200;
        letter-spacing: 0px;
        margin-top:5px;
    }
`;
export const WorkTag = styled.div<MainProps>`
  color: ${(m:MainProps)=> m.fontColor || '#000'};
  width:50%;
  font-weight: bold;
  font-size:1.2em;
  text-align: ${(p:MainProps)=> p.textAlign || 'left'};
`
