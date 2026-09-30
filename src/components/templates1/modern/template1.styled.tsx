import styled, { keyframes } from 'styled-components';
import MainProps from '../styled-props';
interface Props {
  fontFamily?: string
  fontColor?: string
  bgImage?: string
  boxShadow?: string
  width?:string
  height?:string
}
export const TemplateContainer = styled.div<Props>`
  position:relative;
  margin: 0px;
  padding:0px;
  width: 810px;
  height: 2244px;
  background-color: #fff;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  display: grid;
  grid-template-rows:310px 1fr;
  font-family: ${(m: Props) => m.fontFamily || 'Raleway'};
`;
/*
250px: modern_wave7.png
*/
export const Header = styled.div<Props>`
    width:100%;
    height:310px;
    //background-image: url("/images/modern/modern_wave4.png");
    background-image: url(${(p: Props) => p.bgImage});
    display: flex;
    justify-content: center;
    align-items: center;  
    background-repeat: no-repeat;
    background-position: cover;
    //background-color:red;
`;

export const ImageWrapper = styled.div<Props>`
    width: 100%;
    display: grid;
    place-items: center;
    bottom: 1px solid #000;
`;
export const ImageCover = styled.img<Props>`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center right;
    border: 5px solid #fff;
    margin-top: 20px;
    margin-left: 0px;
    //box-shadow: 0 0 0 2px ${(p:Props) => p.boxShadow}; 
`;


export const NameWrapper = styled.div`
   display:flex;
   font-size:1.2em;
   margin-top:10px;
`;
export const FirstName = styled.div`
    text-transform: capitalize;
    font-family:'Neuropol';
   
`;
export const LastName = styled.div<Props>`
    text-transform: uppercase;
    font-family:'Neuropol';
    font-weight:bold;
    margin-left:4px;
    color:${(p:Props)=> p.fontColor};
`;

export const Info=styled.div`
    display: flex;
    font-family: 'WireOne';
    letter-spacing:3px;
    font-size:1.2em;
 
`;
export const Email = styled.div`
    
`;
export const Mobile = styled.div`

`
export const Location = styled.div`

`

export const Bar = styled.div`
  margin-left:5px;
  margin-right:5px;
`;

export const Position = styled.div`

`
export const Content = styled.div`
    width:100;
`;
export const Topic = styled.div<Props>`
    width:87%;
    margin-left:50px;
    margin-left:50px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    font-family:'QuickSilver';
    color:${(p:Props)=>p.fontColor};
    font-size:0.8em;
`;    
export const Row = styled.div`
   width:87%;
    margin-left:50px;
    margin-right:50px;
    //margin-top:25px;
   text-align:justify;
`;
export const Paragraph = styled.div`
    margin-top: 10px;
    width:100%;
    text-align:justify;
    font-weight: 100;
    font-size:0.9em;
    @media (max-width: 768px) {
        font-size: 0.8rem;
        font-weight: 200;
        letter-spacing: 0px;
        margin-top:5px;
    }
`;
export const SkillGroup = styled.div`
    display:flex;
    flex-wrap: wrap;
    width:100%;
    font-size:0.8rem;
    margin-top:0px;
    align-content: stretch;
 `;

export const SkillContent = styled.div<Props>`
    width:${(p:Props)=> p.width || '150px'};
    height: $((p:Props)=> p.height || '20px'};
    margin-right:10px;
`;

export const Bullet = styled.div`
&:before {
content: '';
position: absolute;
//left: 100px;
margin-top:7px;
margin-right:0px;
width: 5px;
height: 5px;
color:#000;
background-color: #fc9241;
border-radius: 50%;
padding:0px;
}
`;

 export const Empty = styled.div<Props>`
     height: ${(m:Props)=>m.height || '0px'};
  
 `;
 export const ExperienceCompany = styled.div`
  width: 100%;
   margin-top:0px;
   display: inline-flex;
   font-weight:bold;
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
export const Experience = styled.div`
   margin-left: 20px;
   @media (max-width: 768px) {
        font-size: 0.8rem;
        font-weight: 200;
        letter-spacing: 0px;
        margin-top:5px;
    }
`;

