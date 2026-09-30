import styled, { keyframes } from 'styled-components';

interface Props {
  color?: string
  fontFamily?: string
  bgColor?: string
  height?: string
  width?: string
}
export const TemplateContainer = styled.div<Props>`
  position:relative;
  margin: 0px;
  padding:0px;
  width: 810px;
  height: 2244px;
  background-color: #fff;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  
  font-family: ${(m: Props) => m.fontFamily || 'Raleway'};
`;


export const ImageWrapper = styled.img<Props>`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%; 
    border: 1px solid rgba(255,255,255,0.9);

`;


export const CircleLayer = styled.div`
  position: absolute /* Removes from normal flow */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color:black;
  z-index:3;
  overflow:hidden;
`;
export const BigCircle = styled.div<Props>`
  width: 500px;
  height: 500px;
  background-color: ${(p: Props) => p.bgColor};
  opacity:0.1;
  border-radius: 50%;
  margin-left: 500px;
  margin-top: 100px;
`
export const SmallCircle = styled.div<Props>`
width: 300px;
  height: 300px;
  background-color: ${(p: Props) => p.bgColor};
  opacity:0.1;
  border-radius: 50%;
  margin-left: -50px;
  margin-top: 150px;
`
export const ContentLayer = styled.div`
  position:absolute; /* Removes from normal flow */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color:black;
  z-index:4;
  text-align:center;
`;

export const FullName = styled.div<Props>`
    font-family:'WireOne';
    font-size:2.5rem;
    font-weight:bold;
    text-align:center;
    margin-top:0px;
     color: ${(p: Props) => p.color || '#ccc'};
`;
export const Role = styled.div<Props>`
    font-family:'Neuropol';
    font-size:1.4rem;
    font-weight:bold;
    text-align:center;
    margin-top:-10px;
     color: ${(p: Props) => p.color || '#ccc'};
`;
export const Info = styled.div`
    display: flex;
    font-family: 'WireOne';
    letter-spacing:3px;
    font-size:1.2em;
    justify-content: center;
`;
export const Row = styled.div`
  display: flex;
flex-wrap: wrap;
  justify-content: center; /* Centers horizontally */
  align-items: center;     /* Centers vertically */
 // height: 100vh;    
  
`
export const Header = styled.div<Props>`
    text-align:left;
    width:85%;
  
    font-family:'Unbounded';
    color: ${(p: Props) => p.color || '#ccc'};
`;
export const Content = styled.div`
  width:85%;
  text-align:left;
`;

export const Margin = styled.div<Props>`
     margin-top: ${(m: Props) => m.height || '50px'};
 `;

export const SkillGroup = styled.div`
    display:inline-flex;
    flex-wrap: wrap;
    width:100%;
    font-size:0.8rem;
    margin-top:10px;
 `;

export const SkillContent = styled.div<Props>`
    width:${(p:Props)=> p.width || '150px'};
    height:30px;
    margin-right:10px;
    
`;
export const Bullet = styled.div<Props>`

&:before {
content: '';
position: absolute;

//left: 100px;
margin-top:7px;
margin-right:0px;
width: 5px;
height: 5px;
color:#000;
background-color: ${(p:Props)=> p.color || '#fc9241'};
border-radius: 50%;
padding:0px;
}

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

