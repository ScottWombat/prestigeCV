import styled, { keyframes } from 'styled-components';

interface AbstractProps {
  fontColor?: string
  fontFamily?: string
  fontSize?: string
  fontStyle?: string
  bgColor?: string
  bgImage?:string
  imgBGAlign?: string
  
}
export const TemplateContainer = styled.div<AbstractProps>`
  position:relative;
  margin: 0px;
  padding:0px;
  width: 810px;
  height: 2244px;
  background-color: #fff;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  font-family: ${(m:AbstractProps) => m.fontFamily || 'Raleway'};
  display: flex;
  flex-direction: column;
`;
export const Header = styled.div<AbstractProps>`
    width: 100%;
    margin-top: 0px;
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    background-image: url(${(m:AbstractProps)=>m.bgImage});
    background-position: ${(m:AbstractProps) => m.imgBGAlign};
    background-size: 300px;
    background-repeat: no-repeat;
    height: 300px;
    padding: 0;
    &::before {
        opacity:0.1;
   }
    &::after {
        opacity:0.1;
   }    
`;

export const NameWrapper =styled.div<AbstractProps>`
   display: flex;
   flex-direction: column;
   width: 70%;
   margin-top: 10%;
   margin-left: 50px;
   
`;
export const Name  =styled.div<AbstractProps>`
  margin-left:60px;
  font-family: 'Neuropol';
  font-size:2em;
  color:${(m:AbstractProps)=> m.fontColor || '#000'};
`;
export const LastName  =styled.div<AbstractProps>`
  margin-top:-10px;
  font-family: 'Neuropol';
  font-size:2em;
  color:${(m:AbstractProps)=> m.fontColor || '#000'};
`;

export const Position  =styled.div<AbstractProps>`
margin-top:10px;
color:#000;
font-family:'Oswald';
font-size:1.2em;
`

export const Address = styled.div<AbstractProps>`
  width: 100%; 
  text-align:left;
  display:flex;
  margin-top:10px;
  font-family:'Oswald';
  
`;

export const Objectives =styled.div<AbstractProps>`
    margin-top:25px;
    margin-left: 50px;
    width: 700px;
    text-align: justify;
    text-justify: inter-character;
    font-family: 'Lobster','Poppins','Lato';
    font-weight: 300;
`;


export const ContentHeader = styled.div<AbstractProps>`
    width:87%;
    color:#000;
    margin-top:30px;
    margin-left:50px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    display:flex;
    font-family: 'Neuropol';
    font-size:1em;
    font-style: ${(m:AbstractProps) => m.fontStyle || 'normal'};
    color: ${(m: AbstractProps) => m.fontColor || '#000'};
`;

export const Square = styled.div<AbstractProps>`
  width: 7px;
  height: 15px;
  //background-color: #000;
  // border: 1px solid #3498db;
  border: 1px solid ${(m: AbstractProps) => m.fontColor};
  display: line-block;
  transform: skew(-25deg);
  margin-right:2px;
`;
export const Square1 = styled.div<AbstractProps>`
  width: 15px;
  height: 15px;
  //background-color: #000;
  border: 1px solid ${(m: AbstractProps) => m.fontColor};
  display:inline-block;
  transform: skew(-25deg);
  margin-right:5px;
`;

export const Content = styled.div<AbstractProps>`
  width:87%;
  color:#000;
  margin-top:5px;
  margin-left:50px;
  color: ${(m: AbstractProps) => m.fontColor || '#000'};
  text-align: justify;
`;

export const SquareWrapper = styled.div<AbstractProps>`
 font-size: 0.1rem;
  color: #e8b633;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin:2px;
`;
export const TinySquare = styled.span<AbstractProps>`
  width: 4px;
  height:4px;
  transition: all 0.5s;
  background-color: ${(m:AbstractProps)=> m.fontColor};
  transform: rotate(0) scale(1);
`
