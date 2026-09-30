import styled, { keyframes } from 'styled-components';
import MainProps  from '../styled-props'
export const LeftContainer = styled.div<MainProps>`
   background-color:#ccc;
`;
export const RightContainer = styled.div<MainProps>`
   background-color:#fff;
`;
export const LeftCornerBG = styled.div<MainProps>`
  position:absolute;
  top:0;
  left:0;
  width:${(m:MainProps) => m.leftWidth};
  height:200px;
  background-color:blue;
  clip-path: polygon(0 0, 100% 0%, 100% 59%, 54% 100%, 0 62%);
`;
export const LeftContentWrapper = styled.div<MainProps>`
  position:relative;
  color:#fff;
`;
export const LeftContentHeader = styled.div<MainProps>`
  position:relative;
  height:230px;
  
`;
export const LeftContentSection = styled.div`
 
  display:flex;

`
export const LeftContentSquare = styled.div<MainProps>`
  margin-left:20px;
  height:50px;
  width:50px;
  background-color:red;
  clip-path: polygon(0 0, 50% 0, 100% 50%, 50% 100%, 0 100%);
  z-index:1;
`;
export const LeftContentTitle = styled.div<MainProps>`
  margin-left:-20px;
  margin-top:15px;
  height:30px;
  width:50px;
  z-index:2;
  font-weight:bold;
  letter-spacing:2px;
  font-size:1.2rem;
`;

export const HeaderWrapper = styled.div<MainProps>`
  position:absolute;
  top: 0;
  left: 0;
  height: 240px;
  width: 810px;
  background-color:${(m: MainProps) => m.headerBGColor};
 opacity:0.3;
`
export const Test = styled.div<MainProps>`
  position: absolute;
  top: 0;
  left: 0;
  background-color:${(m: MainProps) => m.headerBGColor};
  height: 100px;
  width: 810px;
  opacity:0.5;
  padding:0;
  margin:0;
  border:0 none !important;
  @media print {
      border:0 none !important;
      box-shadow: none !important;
      
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    
`;
export const Image = styled.img<MainProps>`
  opacity:1;
  @media print {
      border:0 none !important;
      box-shadow: none !important;
      background-color: rgba(${(m: MainProps) => m.r}, ${(m: MainProps) => m.g}, ${(m: MainProps) => m.b},1);
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
  

  }
`
export const HeaderBGContainer = styled.div<MainProps>`
  position: absolute;
  bottom:0;
  left: 0;
  background-color: #fff;
  height: 140px;
  width: 810px;
  outline: none;
  border:0 none !important;
  padding:0;
  margin:0;
  margin-top:-25px;
  
`;
/*
export const HeaderBGContainer1 = styled.div<MainProps>`
  position: absolute;
  bottom:0;
  left: 0;
  background-color: ${(m: MainProps) => m.headerBGColor};
  height: 140px;
  width: 810px;
  opacity: 0.5;
  background-image: url(${(m: MainProps) => m.imgSrc});
  ackground-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  outline: none;
  border:0 none !important;
  padding:0;
  margin:0;
  @media print {
      border:0 none !important;
      box-shadow: none !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      zoom: 80%; 
    
   
    transform: scale(0.8);
    transform-origin: top left;
    width: 125%;  
  }
`;
*/
export const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-top:50px;
  width:95%;
  padding-left:25px;
  padding-right:30px;
  left: 50%; transform: translateX(-50%);
 
`;
export const PersonInfo = styled.div`

`;
export const Title = styled.div<MainProps>`
  text-align:center;
  font-family:'Unbounded';
  font-size:1.2rem;
  color:${(m: MainProps) => m.fontColor};
`;
export const Position = styled.div<MainProps>`
  text-align:center;
  font-family:'Philosopher','Aisling','Montserrat';
  font-size:1.2rem;
  letter-spacing:3px;
  color:${(m: MainProps) => m.fontColor};
`;
export const AddressBar = styled.div<MainProps>`
  margin-top:4px;
  font-family:'Unbounded';
  font-size:0.6rem;
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: center;  
  color:${(m: MainProps) => m.fontColor};
  letter-spacing:2px;
  border:0;
  backgroun-color:red;
`;

export const Address = styled.div<MainProps>`
 color: ${(m: MainProps) => m.fontColor};
`;

export const Email = styled.div<MainProps>`
color: ${(m: MainProps) => m.fontColor};
`;


export const Mobile = styled.div<MainProps>`
color: ${(m: MainProps) => m.fontColor};
`;
export const ContentFirstRow = styled.div`
  margin-top:130px;
`;

export const ContentRow = styled.div<MainProps>`
  text-align: justify;
  margin-top:${(m:MainProps)=>m.marginTop || '0'};
`;
export const Subject = styled.div<MainProps>`
 width:100%;
 border-bottom: 0.1em solid rgba(225, 225, 225, 0.5);
 display:inline-flex;
 height:2.5rem;
`
export const SubjectName = styled.div<MainProps>`
  margin-left:5px;
  margin-top:15px;
  font-weight:bold;
  color: ${(m: MainProps) => m.fontColor};
`
export const StyledIcon = styled.i<MainProps>`
  color: ${(m: MainProps) => m.fontColor};
  font-size: 24px;
  padding: 10px;
  
`;
export const Icon = styled.div<MainProps>`
    font-size:0.7rem;
    ${(m: MainProps) => m.fontColor ? m.fontColor : '#000'}
`;

export const TopicWrapper = styled.div<MainProps>`
  display: grid;
  grid-template-columns: 10px 25px 1fr;
  margin-top:5px;
  margin-left:0px;
  border-bottom: 1px solid rgba(97, 98, 99, 0.2);
  width: 100%;
  color: ${(m: MainProps) => m.fontColor};
`;
export const Square = styled.div<MainProps>`
  width: 7px;
  height: 15px;
  //background-color: #000;
  // border: 1px solid #3498db;
  border: 1px solid ${(m: MainProps) => m.fontColor};
  display: line-block;
  transform: skew(-25deg);
  
`;
export const Square1 = styled.div<MainProps>`
  width: 15px;
  height: 15px;
  //background-color: #000;
  border: 1px solid ${(m: MainProps) => m.fontColor};
  display:inline-block;
  transform: skew(-25deg);
`;
export const TopicTitle = styled.div<MainProps>`
  margin-left:0;
 font-weight:bold;
 color:${(m: MainProps) => m.fontColor};
`;
export const Bullet = styled.div<MainProps>`
  width: 5px;
  height: 5px;
  background-color:#000;
  border-radius: 50%;
  border: 2px solid ${(m: MainProps) => m.fontColor};
  margin-top:5px;
  opacity:0.5;
`

export const TopicContent = styled.div`
  margin-left:0px;
  margin-top: 15px;
  justify-content: space-between;
   display: flex;
`;

export const LanguageWrapper = styled.div`
     display:grid;
     grid-template-columns: auto auto auto auto auto auto;
`;
export const LanguageItem = styled.div`
  width:120px;
  display:flex;
`
export const SkillsWrapper = styled.div`
     display:grid;
     grid-template-columns: auto auto auto ;
    
`;

export const EducationWrapper = styled.div`
     display:grid;
     grid-template-columns: auto;
`
export const Education = styled.div`
  width:100%;
  display: grid;
  grid-template-columns: auto auto auto;
`
export const EducationItem1 = styled.div`
  width:330px;
  display:flex;
`


export const EducationItem2 = styled.div`
  width:300px;
`
export const EducationItem3 = styled.div`
  width:100px;
`

export const ExperienceWrapper = styled.div`
   width:100%;
   display:grid;
   grid-template-rows: auto auto auto;
`;

export const ExperienceRow1 = styled.div`
   display: flex;
   width:100%;
   font-weight:bold;
`

export const ExperienceRow2 = styled.div`
   display: grid;
   grid-template-columns: auto;
   width:100%;
`
export const ExperienceRow3 = styled.div`
   display: grid;
   grid-template-columns: auto;
   width:100%;
`
export const ExperienceColumn1 = styled.div`
  float:left;
  width:50%;
  
`

export const ExperienceColumn2 = styled.div`
  text-align:right;
  width:50%;
  font-weight:bold;
`

export const ExperienceDetail = styled.div`
   display:flex;
`
export const SkillItem = styled.div`
  width:250px;
  display:flex;
`
export const DutyItem = styled.div`
  margin: 0px;
  width:100%;
  backgroud-color:red;
  text-align:justify;
  display:flex;
`
export const RefereeWraper = styled.div`
  display:grid;
  grid-template-columns: auto auto auto;
`;
export const RefereeItem = styled.div`
  width:150px;
  display:flex;
`
export const Paragraph = styled.div`
    padding-right: 0px;
    width: 100%;
    text-align: justify;
    text-justify: inter-character;
    font-family: 'Raleway','Poppins','Lato';
    font-weight: 400;
    border-top: 0px solid red;
    padding-top:15px;
`;

export const Circle = styled.div<MainProps>`
   width:15px;
   height:15px;
 
   background-color: #fff;
   border: 3px solid ${(m: MainProps) => m.fontColor};
`;