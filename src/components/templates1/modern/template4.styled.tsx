import styled, { keyframes } from 'styled-components';
import MainProps from '../styled-props';
interface Props {
  fontFamily?: string
  fontColor?: string
  bgColor?: string
  bgImage?: string
  boxShadow?: string
  marginRight?: string
  marginLeft?:string
  textAlign?:string
}
const br = "#feeaea";
const T = "transparent";
const b = "#000000";
const w = "#fff";
const bl = "#01ABCE";
const r = "#D41E4E";
const y = "#FFCA08";
const o = "#F7941D";
const dg = "#00A65E";

const p = "#ED008C";
const v = "#5C2E91";
const lv = "#AC54A0";


export const LeftSection = styled.div<Props>`
    height: 100%;
    background-color: #f7f7f7;
    flex: 3; /* Takes up 30% of available space */
    display:grid;
`;

export const RightSection = styled.div<Props>`
    background-color: #ffffff;
    height: 100%;
    margin: 0;
    flex: 7; /* Takes up 70% of available space */
`;

export const RightCorner = styled.div<Props>`
  width: 245px;
  height: 245px;
  background-color: #f7f7f7; 
  background-image: linear-gradient(to bottom left, #ff4757 50%, transparent 50%);
  background-size: 245px 245px; /* Size of the triangle */
  background-repeat: no-repeat;
  background-position: top right;
  
`;
export const CenterSquare = styled.div<Props>`

  width: 245px;
  height: 125px;
  //background: blue;
  overflow: hidden;
  position: relative;
  grid-area: 1/1;
  //background-color: ${(p: MainProps) => p.bgColor};
  //background: linear-gradient(135deg,${T} 15px, ${(p: MainProps) => p.bgColor} 15px 16px, ${T} 16px 18px, ${(p: MainProps) => p.bgColor} 18px 19px, ${T} 19px 21px, ${(p: MainProps) => p.bgColor} 21px 22px, ${T} 22px 24px, ${(p: MainProps) => p.bgColor} 24px 25px, ${T} 25px),
  //  linear-gradient(-135deg,${T} 15px, ${(p: MainProps) => p.bgColor} 15px 16px, ${T} 16px 18px, ${(p: MainProps) => p.bgColor} 18px 19px, ${T} 19px 21px, ${(p: MainProps) => p.bgColor} 21px 22px, ${T} 22px 24px, ${(p: MainProps) => p.bgColor} 24px 25px, ${T} 25px);
 // background-size: 30px 30px;
  background-color: ${(p: MainProps) => p.bgColor};
 
`;

export const LeftAngle= styled.div<Props>`

  width: 245px;
  height: 245px;
  background: ${(p: MainProps) => p.bgColor};
  overflow: hidden;
  position: relative;
  clip-path: polygon(0 0, 0% 100%, 100% 0);
`;
export const RightAngle= styled.div<Props>`

  width: 245px;
  height: 245px;
  background: ${(p: MainProps) => p.bgColor};
  overflow: hidden;
  position: relative;
  clip-path: polygon(0 0, 100% 100%, 100% 0);
`;
export const RightAngle1 = styled.div<Props>`

  width: 245px;
  height: 245px;
  background: ${(p: MainProps) => p.bgColor};
  overflow: hidden;
  position: relative;
  grid-area: 1/1;
 
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    //width: 200%;
    width:100%;
    //transform: rotate(-45deg);
    //transform-origin: bottom left;
    clip-path: polygon(0 0, 0% 100%, 100% 0);
    background: ${(p: MainProps) => p.bgColor};
    //background:    
    //radial-gradient(${w} 5%,${b} 5% 10%, ${bl} 10% 15%, ${b} 15% 20%, ${o} 20% 25%, ${y} 25% 30%, ${r} 30% 35%, ${b} 35% 40%, ${v} 40% 45%, ${b} 45% 50%, ${(p: MainProps) => p.bgColor} 50% 55%, ${T} 55%),
    //radial-gradient(${w} 5%,${b} 5% 10%, ${bl} 10% 15%, ${b} 15% 20%, ${o} 20% 25%, ${y} 25% 30%, ${r} 30% 35%, ${b} 35% 40%, ${v} 40% 45%, ${b} 45% 50%, ${(p: MainProps) => p.bgColor} 50% 55%, ${T} 55%) 0 20px,
    //radial-gradient(${w} 5%,${b} 5% 10%, ${bl} 10% 15%, ${b} 15% 20%, ${o} 20% 25%, ${y} 25% 30%, ${r} 30% 35%, ${b} 35% 40%, ${v} 40% 45%, ${b} 45% 50%, ${(p: MainProps) => p.bgColor} 50% 55%, ${T} 55%) 20px 0,
    //radial-gradient(${w} 5%,${b} 5% 10%, ${bl} 10% 15%, ${b} 15% 20%, ${w} 20% 25%, ${y} 25% 30%, ${r} 30% 35%, ${b} 35% 40%, ${v} 40% 45%, ${b} 45% 50%, ${(p: MainProps) => p.bgColor} 50% 55%, ${T} 55%) 20px 20px;
    //background-size: 40px 40px;
}   
`;
export const LeftAngle1 = styled.div<Props>`

  width: 245px;
  height: 245px;
  background: red;
  overflow: hidden;
  position: relative;
  grid-area: 1/1;
 
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 200%;
    transform: rotate(-45deg);
    transform-origin: bottom left;
    background-image:
    r//adial-gradient(circle at 100% 150%, ${(p: MainProps) => p.bgColor} 24%, white 24%, white 28%, ${(p: MainProps) => p.bgColor} 28%, ${(p: MainProps) => p.bgColor} 36%, white 36%, white 40%, transparent 40%, transparent),
   //radial-gradient(circle at 0    150%, ${(p: MainProps) => p.bgColor} 24%, white 24%, white 28%, ${(p: MainProps) => p.bgColor} 28%, ${(p: MainProps) => p.bgColor} 36%, white 36%, white 40%, transparent 40%, transparent),
    //radial-gradient(circle at 50%  100%, white 10%, ${(p: MainProps) => p.bgColor} 10%, ${(p: MainProps) => p.bgColor} 23%, white 23%, white 30%, ${(p: MainProps) => p.bgColor} 30%, ${(p: MainProps) => p.bgColor} 43%, white 43%, white 50%, ${(p: MainProps) => p.bgColor} 50%, ${(p: MainProps) => p.bgColor} 63%, white 63%, white 71%, transparent 71%, transparent),
    //radial-gradient(circle at 100% 50%, white 5%, ${(p: MainProps) => p.bgColor} 5%, ${(p: MainProps) => p.bgColor} 15%, white 15%, white 20%, ${(p: MainProps) => p.bgColor} 20%, ${(p: MainProps) => p.bgColor} 29%, white 29%, white 34%, ${(p: MainProps) => p.bgColor} 34%, ${(p: MainProps) => p.bgColor} 44%, white 44%, white 49%, transparent 49%, transparent),
    radial-gradient(circle at 0    50%, white 5%, ${(p: MainProps) => p.bgColor} 5%, ${(p: MainProps) => p.bgColor} 15%, white 15%, white 20%, ${(p: MainProps) => p.bgColor} 20%, ${(p: MainProps) => p.bgColor} 29%, white 29%, white 34%, ${(p: MainProps) => p.bgColor} 34%, ${(p: MainProps) => p.bgColor} 44%, white 44%, white 49%, transparent 49%, transparent);
    background-size: 35px 10px;
}   
`;

export const OverLay = styled.div<Props>`
    grid-area: 1/1;
    color:#000;
    position:absolute;
    width: 245px;
   
`;

export const CircleContainer = styled.div<MainProps>`
   width: 150px;
  height: 150px;
  background-color: rgba(255,255,255,0.5);
  border-radius: 50%;
  overflow: hidden;
  padding:2px;
  display:absolute;
  margin-top:50px;
  margin-left:45px;
  //-webkit-box-shadow: 0px 3px 15px -1px #000000; 
  //box-shadow: 0px 3px 15px -1px #000000;
`;
export const CircleImage = styled.img<MainProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%; 
  border: 1px solid rgba(255,255,255,0.5);

}
`;
export const NameWrapper = styled.div<MainProps>`
  text-align:center;
  font-size:1.2em;
`;
export const FName = styled.div<MainProps>`
 font-family:'Unbounded';
`
export const LName = styled.div<MainProps>`
  font-family:'Philosopher';
  font-weight:bold;
`;
export const Position = styled.div<MainProps>`
   font-family:'Montserrat';
   font-size:1em;
`
export const HeaderWrapper = styled.div<Props>`
    display: flex;
    position: relative;
    margin-top: 30px;
    margin-left: 35px;
    margin-right: ${(m:Props)=>m.marginRight || '35px'};
    /*border-top: px solid #cccccc;*/
    border-bottom: 0.1em solid rgba(245, 245, 245, 1);
    padding-bottom: 0px;
    font-weight:bold;
    color:#728FCE;
   
`;

export const ContactWrapper =styled.div<Props>` 
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
export const ContactWrapper1 =styled.div<Props>` 
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
export const ContactWrapper2 =styled.div<Props>` 
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

export const ULContent = styled.div<Props>`
   display:inline-block;
   margin-top:0px;
`
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
export const WorkTag = styled.div<Props>`
  color: ${(m:Props)=> m.fontColor || '#000'};
  width:50%;
  font-weight: bold;
  font-size:1.2em;
  text-align: ${(p:Props)=> p.textAlign || 'left'};
`

export const TopicName = styled.div<Props>`
    color: ${(p:Props)=> p.fontColor || '#000' };
`