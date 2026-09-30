import styled, { keyframes } from 'styled-components';
import MainProps from '../styled-props';
const  br = "#feeaea";
const y = "#fdd7b6";
const T = "transparent";
const b = "#000000";
const w = "#fff";
const bl = "#01ABCE";
export const Info=styled.div`
    display: flex;
    font-family: 'WireOne';
    letter-spacing:3px;
    font-size:1.2em;
    justify-content: center;
`;
export const QuoteText = styled.p`
  font-size: 1.2rem;
  
  /* Using double quotes inside the CSS template literal */
  &::before {
    content: ""; 
  }
  &::after {
    content: "";
  }
`;
export const SquareIcon = styled.div<MainProps>`
  display: inline-block;
  width: 20px;
  height: 20px;
  //border: 3px solid rgba(37, 150, 190,0.5);/* Green */
  border: 4px solid ${(m:MainProps) => m.bgColor || '#ccc'};
  //border-radius: 4rem 4rem 0 4rem;
  opacity:0.4;
  vertical-align: middle;
  margin-right: 5px;
  margin-left:2px;
  margin-bottom:2px;
  transform: skewX(-20deg); 
`;
export const LineBreak = styled.div`
  width:100%;
  height:10px;
`;

export const Bullet1 = styled.div<MainProps>`
  width: 5px;
  height: 5px;
  background-color:#000;
  border-radius: 50%;
  border: 2px solid ${(m: MainProps) => m.fontColor};
  margin-top:5px;
  opacity:0.5;
`;
export const Bullet = styled.div`
  width: 10px;
  height:10px;
  background-color:#000;
  border-radius: 50%;
  border: 2px solid #ccc;
  margin-top:5px;
  opacity:0.5;

`


export const Container = styled.div<MainProps>`
  margin: 0px;
  width: 810px;
  background-color: #fff;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  padding: 30px 50px;
  height: 2244px;
  font-size: ${(m: MainProps) => m.fontSize || '1rem'};
  font-family: ${(m: MainProps) => m.fontFamily || 'Raleway'};
  padding: 0;
  position: relative;
  border: none;
  color:#000;
  
`;
export const MainHeader = styled.div<MainProps>`
    width:100%;
    text-align:center;
    //background-color: ${(m:MainProps) => m.bgColor || '#ffffff'};
`;
/*
export const Header2 =styled.div<MainProps>`
  //background-color:#e1d1d7;
  //background-color: ${(m:MainProps) => m.bgColor || '#ffffff'};
  padding-bottom:50px;  
  line-heigh:20px;
  position:relative;
  background-color:#f5f5f5;
  background-image:
  radial-gradient(circle at 100% 150%, #f5f5f5 24%, white 24%, white 28%, #f5f5f5 28%, #f5f5f5 36%, white 36%, white 40%, transparent 40%, transparent),
  radial-gradient(circle at 0    150%, #f5f5f5 24%, white 24%, white 28%, #f5f5f5 28%, #f5f5f5 36%, white 36%, white 40%, transparent 40%, transparent),
radial-gradient(circle at 50%  100%, white 10%, #f5f5f5 10%, #f5f5f5 23%, white 23%, white 30%, #f5f5f5 30%, #f5f5f5 43%, white 43%, white 50%, #f5f5f5 50%, #f5f5f5 63%, white 63%, white 71%, transparent 71%, transparent),
radial-gradient(circle at 100% 50%, white 5%, #f5f5f5 5%, #f5f5f5 15%, white 15%, white 20%, #f5f5f5 20%, #f5f5f5 29%, white 29%, white 34%, #f5f5f5 34%, #f5f5f5 44%, white 44%, white 49%, transparent 49%, transparent),
radial-gradient(circle at 0    50%, white 5%, #f5f5f5 5%, #f5f5f5 15%, white 15%, white 20%, #f5f5f5 20%, #f5f5f5 29%, white 29%, white 34%, #f5f5f5 34%, #f5f5f5 44%, white 44%, white 49%, transparent 49%, transparent);
background-size: 50px 25px;
`;

export const Header2_11 =styled.div<MainProps>`
  //background-color:#e1d1d7;
  //background-color: ${(m:MainProps) => m.bgColor || '#ffffff'};
  padding-bottom:50px;  
  line-heigh:20px;
  position:relative;
  background-color:#f5f5f5;
`;
*/
export const Header2Wrapper =styled.div<MainProps>`
    position:relative;
    margin-top:-75px;
    display: flex;
    justify-content: center;
`;

export const CircleContainer=styled.div<MainProps>`
   width: 150px;
  height: 150px;
  background-color: #fff;
  border-radius: 50%;
  overflow: hidden;
    
  padding:5px;
}
`;
export const CircleImage = styled.img<MainProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%; 
  //border: 3px solid ${(m:MainProps)=> m.bgColor};
  border: 3px solid #ccc;
`;
export const Row = styled.div<MainProps>`
  font-family: ${(m:MainProps) => m.fontFamily || 'Raleway'};
  font-size: ${(m:MainProps) => m.fontSize || '1rem'};
  text-align:center;
  font-weight:${(m:MainProps) => m.fontWeight || 'normal'};
`;

export const RowContentHeader = styled.div<MainProps>`
  margin-left: 50px;
  margin-right:50px;
  text-align:left;
  font-size:1rem;
  line-height:1;
  margin-top:10px;
  border-bottom: 0.1em solid #d98fad50;
  color: ${(m:MainProps) => m.bgColor || '#000'};
`;

export const RowContent = styled.div`
  margin-left: 50px;
  margin-right:50px;
  text-align:left;
  font-size:1rem;
  line-height:1;
  margin-top:10px;
  text-align: justify;
`;


export const ListWrapper = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    //grid-template-columns: auto auto auto auto;
`;
export const ListItem = styled.div`
    width:175px;
    display:flex;
   
`


export const Item = styled.div`
    margin-left:10px;
`;

export const WorkRowHeader = styled.div`
   display: flex;
   width:100%;
   font-weight:bold;
`
export const WorkLeft = styled.div`
  float:left;
  width:50%;
  color:#7b8c9d;
`

export const WorkRight = styled.div`
  text-align:right;
  width:50%;
  color:#7b8c9d;
`
export const WorkRowContent= styled.div`
   display: grid;
   grid-template-columns: auto;
   width:100%;
   padding-top:10px;
`;
export const WorkDetail = styled.div`
   display:flex;
`;
export const Paragraph = styled.div`
    padding-right: 0px;
    width: 100%;
    text-align: justify;
    text-justify: inter-character;
    
    font-weight: bold;
    border-top: 0px solid red;
    padding-top:15px;
`;
export const ReferenceContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns:1fr auto;
`;
export const Reference = styled.div`
   display: grid;
   grid-template-rows:1fr 1fr 1fr;
   margin-bottom:10px;
`;

export const EducationWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns:1fr auto;
  
`;

export const Education = styled.div`
  display: grid;
   grid-template-rows:1fr 1fr auto;
`;

export const Header1_1 =styled.div<MainProps>`
  //background-color:#e1d1d7;
  //background-color: ${(m:MainProps) => m.bgColor || '#ffffff'};
  padding-top:50px;
  padding-left:50px;  
  padding-right:50px;
  position:relative;
  font-size:1.6rem;
  padding-bottom:20px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-style: italic;
  //background-color:${(p:MainProps)=>p.bgColor};
background-image:
radial-gradient(circle at 100% 150%, ${(p:MainProps)=>p.bgColor} 24%, white 24%, white 28%, ${(p:MainProps)=>p.bgColor} 28%, ${(p:MainProps)=>p.bgColor} 36%, white 36%, white 40%, transparent 40%, transparent),
radial-gradient(circle at 0    150%, ${(p:MainProps)=>p.bgColor} 24%, white 24%, white 28%, ${(p:MainProps)=>p.bgColor} 28%, ${(p:MainProps)=>p.bgColor} 36%, white 36%, white 40%, transparent 40%, transparent),
radial-gradient(circle at 50%  100%, white 10%, ${(p:MainProps)=>p.bgColor} 10%, ${(p:MainProps)=>p.bgColor} 23%, white 23%, white 30%, ${(p:MainProps)=>p.bgColor} 30%, ${(p:MainProps)=>p.bgColor} 43%, white 43%, white 50%, ${(p:MainProps)=>p.bgColor} 50%, ${(p:MainProps)=>p.bgColor} 63%, white 63%, white 71%, transparent 71%, transparent),
radial-gradient(circle at 100% 50%, white 5%, ${(p:MainProps)=>p.bgColor} 5%, ${(p:MainProps)=>p.bgColor} 15%, white 15%, white 20%, ${(p:MainProps)=>p.bgColor} 20%, ${(p:MainProps)=>p.bgColor} 29%, white 29%, white 34%, ${(p:MainProps)=>p.bgColor} 34%, ${(p:MainProps)=>p.bgColor} 44%, white 44%, white 49%, transparent 49%, transparent),
radial-gradient(circle at 0    50%, white 5%, ${(p:MainProps)=>p.bgColor} 5%, ${(p:MainProps)=>p.bgColor} 15%, white 15%, white 20%, ${(p:MainProps)=>p.bgColor} 20%, ${(p:MainProps)=>p.bgColor} 29%, white 29%, white 34%, ${(p:MainProps)=>p.bgColor} 34%, ${(p:MainProps)=>p.bgColor} 44%, white 44%, white 49%, transparent 49%, transparent);
background-size: 50px 25px;
`;


export const Header1_2 =styled.div<MainProps>`
  //background-color:#e1d1d7;
  //background-color: ${(m:MainProps) => m.bgColor || '#ffffff'};
  padding-top:50px;
  padding-left:50px;  
  padding-right:50px;
  position:relative;
  font-size:1.6rem;
  padding-bottom:20px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-style: italic;
  background:
   radial-gradient(circle at 50% 80%,${T} 10%,${(p:MainProps)=>p.bgColor} 10% 15%, ${T} 15% 30%, ${(p:MainProps)=>p.bgColor} 30% 35%, ${w} 35% 60%, ${(p:MainProps)=>p.bgColor} 60% 65%, ${T} 65%)20px 19px / 20px 20px,
    radial-gradient(circle at 50% 80%,${T} 10%,${(p:MainProps)=>p.bgColor} 10% 15%, ${T} 15% 30%, ${(p:MainProps)=>p.bgColor} 30% 35%, ${T} 35% 60%, ${(p:MainProps)=>p.bgColor} 60% 65%, ${T} 65%)0 0 / 20px 20px;
   
  //background-size: 50px 25px;

`;

export const Header1_3 =styled.div<MainProps>`
  padding-top:50px;
  padding-left:50px;  
  padding-right:50px;
  position:relative;
  font-size:1.6rem;
  padding-bottom:4px;
  width:100%;
  font-family: 'Montserrat Alternates', sans-serif;
  font-style: italic;
  background:
    radial-gradient(${T} 10%,${(p:MainProps)=>p.bgColor} 10% 20%, ${T} 20% 30%, ${(p:MainProps)=>p.bgColor} 30% 40%, ${T} 40%  50%, ${(p:MainProps)=>p.bgColor} 50% 60%, ${T} 60% 70%, ${(p:MainProps)=>p.bgColor} 70% 80%);
  background-size: 20px 20px;

 
`;



export const Header2_1 =styled.div<MainProps>`
  //background-color:#e1d1d7;
  //background-color: ${(m:MainProps) => m.bgColor || '#ffffff'};
  padding-bottom:50px;  
  line-heigh:20px;
  position:relative;
  background-color:${(p:MainProps)=>p.bgColor};
  background-image:
  radial-gradient(circle at 100% 150%, ${(p:MainProps)=>p.bgColor} 24%, white 24%, white 28%, ${(p:MainProps)=>p.bgColor} 28%, ${(p:MainProps)=>p.bgColor} 36%, white 36%, white 40%, transparent 40%, transparent),
  radial-gradient(circle at 0    150%, ${(p:MainProps)=>p.bgColor} 24%, white 24%, white 28%, ${(p:MainProps)=>p.bgColor} 28%, ${(p:MainProps)=>p.bgColor} 36%, white 36%, white 40%, transparent 40%, transparent),
radial-gradient(circle at 50%  100%, white 10%, ${(p:MainProps)=>p.bgColor} 10%, ${(p:MainProps)=>p.bgColor} 23%, white 23%, white 30%, ${(p:MainProps)=>p.bgColor} 30%, ${(p:MainProps)=>p.bgColor} 43%, white 43%, white 50%, ${(p:MainProps)=>p.bgColor} 50%, ${(p:MainProps)=>p.bgColor} 63%, white 63%, white 71%, transparent 71%, transparent),
radial-gradient(circle at 100% 50%, white 5%, ${(p:MainProps)=>p.bgColor} 5%, ${(p:MainProps)=>p.bgColor} 15%, white 15%, white 20%, ${(p:MainProps)=>p.bgColor} 20%, ${(p:MainProps)=>p.bgColor} 29%, white 29%, white 34%, ${(p:MainProps)=>p.bgColor} 34%, ${(p:MainProps)=>p.bgColor} 44%, white 44%, white 49%, transparent 49%, transparent),
radial-gradient(circle at 0    50%, white 5%, ${(p:MainProps)=>p.bgColor} 5%, ${(p:MainProps)=>p.bgColor} 15%, white 15%, white 20%, ${(p:MainProps)=>p.bgColor} 20%, ${(p:MainProps)=>p.bgColor} 29%, white 29%, white 34%, ${(p:MainProps)=>p.bgColor} 34%, ${(p:MainProps)=>p.bgColor} 44%, white 44%, white 49%, transparent 49%, transparent);
background-size: 50px 25px;
`;

export const Header2_2 =styled.div<MainProps>`
  //background-color:#e1d1d7;
  //background-color: ${(m:MainProps) => m.bgColor || '#ffffff'};
  padding-bottom:50px;  
  line-heigh:20px;
  position:relative;
  background:    
    radial-gradient(circle at 50% 80%,${T} 10%,${(p:MainProps)=>p.bgColor} 10% 15%, ${T} 15% 30%, ${(p:MainProps)=>p.bgColor} 30% 35%, ${w} 35% 60%, ${(p:MainProps)=>p.bgColor} 60% 65%, ${T} 65%)20px 19px / 20px 20px,
    radial-gradient(circle at 50% 80%,${T} 10%,${(p:MainProps)=>p.bgColor} 10% 15%, ${T} 15% 30%, ${(p:MainProps)=>p.bgColor} 30% 35%, ${T} 35% 60%, ${(p:MainProps)=>p.bgColor} 60% 65%, ${T} 65%)0 0 / 20px 20px;
}
  
`;
export const Header2_3 =styled.div<MainProps>`
  padding-bottom:50px;  
  line-heigh:20px;
  position:relative;
   background:
    radial-gradient(${T} 10%,${(p:MainProps)=>p.bgColor} 10% 20%, ${T} 20% 30%, ${(p:MainProps)=>p.bgColor} 30% 40%, ${T} 40%  50%, ${(p:MainProps)=>p.bgColor} 50% 60%, ${T} 60% 70%, ${(p:MainProps)=>p.bgColor} 70% 80%);
  background-size: 20px 20px;

`;
