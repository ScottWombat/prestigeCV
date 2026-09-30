import styled, { keyframes } from 'styled-components';
import MainProps from '@components/templates1/styled-props';
export const TemplateContainer = styled.div<MainProps>`
  position:relative;
  margin: 0px;
  padding:0px;
  width: 810px;
  height: 2244px;
  background-color: #fff;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  display: flex;
  font-family: ${(m:MainProps) => m.fontFamily || 'Raleway'};
`;

export const LeftSection = styled.div<MainProps>`
    
    background-color: ${(m:MainProps)=>m.bgColor};
    flex: 3; /* Takes up 30% of available space */
    
`;
export const LeftRow = styled.div<MainProps>`
    display: flex;
    position: relative;
    margin-top: 30px;
    margin-left: 35px;
    margin-right: ${(m:MainProps)=>m.marginRight || '35px'};
    /*border-top: px solid #cccccc;*/
    border-bottom: 0.1em solid rgba(245, 245, 245, 1);
    padding-bottom: 0px;
    font-weight:bold;
    color:#728FCE;
    width:100%;
`;

export const RightSection = styled.div<MainProps>`
    background-color: #ffffff;
    height: 100%;
    margin: 0;
    flex: 7; /* Takes up 70% of available space */
`;

export const Bar = styled.div<MainProps>`
  margin-left:5px;
  margin-right:5px;
  color: ${(m:MainProps)=> m.fontColor || '#000'}
`;

export const StyledIcon = styled.i<MainProps>`
  color: ${(m:MainProps)=>m.fontColor || '#212121'};
  font-size: ${(m:MainProps)=>m.fontSize || '1em'};
  margin-right: 10px;
  transition: transform 0.2s;
`;

export const StyledList = styled.ul<MainProps>`
  list-style-type: ${(m:MainProps)=> m.ulStyle || 'none'};
  list-style-position: inside;
  padding: 0;
  margin: 0;
  background-color: ${(m:MainProps)=> m.bgColor};
  display: inline;
  margin-left:8px;
`;

export const StyledItem = styled.li<MainProps>`
  padding: 0px 0px;
  border-bottom: 1px solid #eee;
  color: #333;
  
`;
export const YAxisStyledItem = styled.li<MainProps>`
  padding: 0px 0px;
  border-bottom: 0px solid #eee;
  color: ${(m:MainProps)=>m.fontColor || '#000'};
  position: relative; 
  height:auto;
  vertical-align:top;
  &:before{
    content: "\25A0"; 
  }
`;

export const RowWrapper = styled.div`
  display:flex;
  margin-left:20px;
  flex-wrap:wrap;
 
`;

export const DivBullet = styled.li<MainProps>`
   height: auto;
   &:before{
    content: "\25A0"; 
  }
`;
export const RowContent = styled.div<MainProps>`
   margin-top:0px;
   height:auto;
   width:${(m:MainProps)=>m.width || '160px'};
   text-align:justify;
`;

export const SquareContainer = styled.div`
  margin-top:4px;
`
export const SquareWrapper = styled.div<MainProps>`
 font-size: 0.1rem;
  color: #e8b633;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin:2px;
`;
export const TinySquare = styled.span<MainProps>`
  width: 4px;
  height:4px;
  transition: all 0.5s;
  background-color: ${(m:MainProps)=> m.fontColor};
  transform: rotate(0) scale(1);
`;

export const Frame = styled.div`
  box-sizing: border-box;
  /*display: inline-block;   */
   display: flex;
  justify-content: center;
  width: 170px;
  height: 170px;  
  
  border-color: white;
  border-width: 4px;
  margin-top:6px;
  margin-left:28px;
  color: white;
  /*line-height: 180px;*/
  border-style: solid;
`;
export const InnerFrame = styled.div<MainProps>`
  box-sizing: border-box;
  display: inline-block;   
  width: 150px;
  height: 150px;  
  margin-top:6px;
  /*border-color: #de9eb6;*/
  border-color: rgba(62,62,62,0.6); //${(m: MainProps) => m.imgBorderColor};
  border-width: 2px;
  text-align: center;
  /*color: white;*/
  /*line-height: 170px;*/
  border-style: solid;
`;
 export const Empty = styled.div<MainProps>`
     height: ${(m:MainProps)=>m.height || '10px'};
  
 `;

