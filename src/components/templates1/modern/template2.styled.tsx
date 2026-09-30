import styled, { keyframes } from 'styled-components';
import Keyframes from 'styled-components/dist/models/Keyframes';
interface FontProps {
    fontFamily: string
}
interface Props{
    hex1?: string;
    hex2?: string;
    hex3?: string;
    hex4?: string;
}
export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr ;
    width: 810px;
    height: 1143px;
    //background-color: blue;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    border-top: 1px solid #ccc;
    div{
        padding: 0px;
        grid-row-start: 1;
        grid-column-start: 1;
    }
      /* Tablet devices */
    @media (max-width: 768px) {
   
    }
`

export const BGLayer = styled.div`
  position: relative;
  display: inline-block;
  //overflow :hidden;
  //z-index:15;
  width:100%;
`

export const Header = styled.div`
    position:relative;
    top:20px;
    left:40px;
    color:#000;
    height:200px;
    width:100%;
    //display: flex;
    display: grid;
    grid-template-column: 1fr 1fr;
    z-index:25;
    @media only screen and (max-width: 768px) {
     top: 10px;
     left: 27px;
    }
`
export const Circle = styled.div<Props>`
  width: 150px;
  height: 150px;
  border-radius: 50%;     /* Creates the circle */
  //border-radius: 43% 55% 26% 50% / 55% 50% 49% 47%;
  overflow: hidden;        /* Hides image corners sticking out */
  
  /* Flexbox Centering */
  display: flex;
  justify-content: center; /* Horizontally centers the image */
  align-items: center;     /* Vertically centers the image */
  //border:3px solid rgba(0, 0, 0,0.2); 
  border: 3px solid #fff;
  /*outline: 2px solid #f7cccc;      The outer border color */
  /*outline: 2px solid #000;  ${(props:Props) => props.hex1};*/
  outline-offset: 2px;   
  flex-shrink: 0
  margin-top:50px;
  @media only screen and (max-width: 768px) {
     width: 75px;
    height: 75px;
  }
  
`
export const Image = styled.div`
  width: 150px;
  height: 150px;
  overflow:hidden;
  @media only screen and (max-width: 768px) {
     width: 75px;
     height: 75px;
  }
`


export const Overlay0 = styled.div`
  position: relative;
  top:0px;
  left:0;
  //background: linear-gradient(to right, #ccc 30%,#fff 70%);
  background-image: -webkit-linear-gradient(180deg, #fff 70%, #d9d9d9 30%);
  color: #000;
  height: 100%;
  z-index:5;
`
/*
interface Props{
    hex1?: string;
    hex2?: string;
    hex3?: string;
    hex4?: string;
}
*/
export const Overlay1 = styled.div<Props>`
  position: absolute;
  top:0;
  left:0;
  width:100%;
  /*background-color: #f6c9aa;*/
  background: ${(props:Props) => props.hex1};
  opacity:1;
  color: white;
  min-height: 200px;
  clip-path: polygon(0% 0%, 0% 100%, 100% 00%);
  z-index:7;
  @media only screen and (max-width: 768px) {
     min-height: 100px;
  }
`


export const Overlay2 = styled.div<Props>`
position:absolute;
top:0;
left:0;
min-height: 200px;
  /*background: #f2af7f;*/
  background: ${(props:Props) => props.hex2};
  width: 100%;
  /* may remove width:100%, as div is always 100% */
  /* transform-origin: bottom; */
  /* transform: skewX(-17deg); */
  -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 50%);
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 50%);
  z-index: 9;
  opacity:0.4;
  @media only screen and (max-width: 768px) {
     min-height: 100px;
  }
   
`
export const Overlay3 = styled.div`
    position:absolute;
    top:0;
    left:0;
    z-index: 11;
    width:90%;
`

export const ContentLayer = styled.div`
    font-family: 'Oswald';
    position: relative;
    width: 100%;
    z-index: 12;
    color:#000;
    margin-top:170px;
    display: inline-flex;
    gap:20px;
    @media (max-width: 768px) {
         width:450px;
    }
`
export const ContentLeft = styled.div`
   // flex:1;
    width:242px;
    margin-left:30px;
    @media (max-width: 768px) {
         width:100px;
         margin-left:15px;
    }
`
export const ContentRightHeader = styled.div`
    //flex:1;
    // background-color:red;
    width:100%;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    height:25px;
    
`
export const ContentRight = styled.div`
    //flex:1;
    width:80%;
    margin-left:25px;
    margin-right:25px;
    //border-bottom: 1px solid #000;
    display: block;
    //grid-template-columns: 1fr;
    
`

export const NameWrapper = styled.div`
    width:100%;
    flex:1;
    text-align:right;
    //margin-right:70px;
   
`
export const Name = styled.div`
    font-family: 'Cabin', cursive;
    font-size: 3rem;
    animation: slideIn 1s; 
    @media (max-width: 768px) {
        //font-size: 1.5rem;
    }
`

export const NameRow = styled.span`
    display: inline-flex;
    //grid-template-columns: 200px auto;
    //float:right;
    margin-top:15px;
`
export const Fname = styled.span`
    font-family: 'Montserrat';
    color: #000;
    font-weight: 100;
    font-size:2.5em;
    display:inline-block;
    @media (max-width: 768px) {
        font-size: 1rem;
        font-weight:200;
    }
`
export const Lname = styled.div`
    font-family: 'Anton';
    color: #000;
    font-size:2.5em;
    margin-left: 0px;
    margin-top:-15px;
    @media (max-width: 768px) {
        font-size: 1.0rem;
        margin-top:-5px;
    }
`
export const Position = styled.div`
   position:relative;
   //display:inline-flex;
   font-family: 'Montserrat';
   width:100%;
   font-size:1.5em;
   font-weight: 400;
   text-align:right;
   float:right;
   letter-spacing: 10px;
   
   @media (max-width: 768px) {
        font-size: 1rem;
        font-weight: 200;
        letter-spacing: 0px;
    }
`
export const Address = styled.div`
   position:relative;
   font-family: 'Oswald';
   font-size: 0.6em;
   letter-spacing: 2px;
   margin-top:10px;
`

export const Content = styled.div`
  color: #000;
`

export const Dot = styled.div<Props>`
    width:15px;
    height: 15px;
    //border-radius: 50%;
   //border: 3px solid rgba(247,204,204,0.9);
   border: 3px solid ${(props:Props) => props.hex1};
    margin-top:5px;
    @media (max-width: 768px) {
        margin-top:0px;
    }
`

export const HeaderTitle = styled.div`
    display:inline-flex; 
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


export const EmptyDiv = styled.div`
    height:30px; 
    width:100%; 
    clear:both;
`
export const ExperienceCompany = styled.div`
  width: 100%;
   margin-top:10px;
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

`
export const Bullet1 = styled.div`

&:before {
content: '';
position: absolute;

//left: 100px;
margin-top:7px;
margin-right:0px;
width: 5px;
height: 5px;
color:#000;
background-color: #000000;
border-radius: 50%;
padding:0px;
}

`

export const LeftHeaderName = styled.h3`
    text-decoration: underline;
    text-underline-offset: 5px;
    font-weight: 400;
    @media (max-width: 768px) {
        font-size:0.8rem;
    }
`
export const LeftHeaderName1 = styled.h3`
    text-decoration: underline;
    margin-top: 10px;
    text-underline-offset: 5px;
`
export const RightHeaderName = styled.h3`
  margin-left:5px;
  margin-top:-3px;
`

export const LeftHeader = styled.div`
    margin-top:10px;
    font-weight:400;
    font-size:0.8em;
    letter-spacing:1px;
    @media (max-width: 768px) {
        font-size:0.7rem;
    }
`
export const LeftHeader1 = styled.div`
    margin-top:0px;
    font-weight:400;
    font-size:0.8em;
    letter-spacing:1px;
    @media (max-width: 768px) {
        font-size:0.7rem;
    }
`

export const RightHeader = styled.div`
    margin-top:10px;
    font-weight:400;
    font-size:0.8em;
    letter-spacing:1px;
    margin-left:20px;
    @media (max-width: 768px) {
        font-size:0.7rem;
    }
`
export const LeftHeaderRow = styled.div`
    font-size: 0.8em;
    display:inline-flex;
    @media (max-width: 768px) {
        font-size:0.7rem;
    }
`
export const LeftEmptyRow = styled.div`
    line-height:10px;

`;
export const LeftHeaderRow1 = styled.div`
    font-size: 0.8em;
    margin-top:10px
`
export const Skills = styled.ul`
 display: inline-flex;            /* Aligns list items horizontally */
  list-style-type: none;    /* Removes default bullet points */
  padding: 0;               /* Removes default left padding */
  margin: 0;                /* Removes default margins */
  gap: 10px;    
  width: 200px;
  //justify-content: flex-end;
  position:relative;
  flex-wrap: wrap;
  margin-top:10px;
  @media (max-width: 768px) {
        font-size:0.7rem;
        width:100px;
        gap:5px;
        line-height:10px;
  }
`
export const SkillContent = styled.div`
    width:130px;
    height:30px;
    margin-right:10px;
    
`

export const SkillName = styled.div`
    margin-left:10px;
    @media (max-width: 768px) {
        margin-top:5px;
  }
`
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
 `
export const Gap = styled.div`
width:10px;

`
 export const SkillGroup = styled.div`
    display:inline-flex;
    flex-wrap: wrap;
    width:100%;
    font-size:0.8rem;
    margin-top:10px;
 `
