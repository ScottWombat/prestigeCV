import styled, { keyframes } from 'styled-components';
import MainProps from './styled-props';
export const Container = styled.div<MainProps>`
  margin: 0px;
  width: 810px;
  background-color: #fff;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  padding: 30px 50px;
  height: 2244px;
  color: #000;
  font-family: ${(m: MainProps) => m.fontFamily || 'Raleway'};
  display: grid;
  grid-template-columns: ${(m: MainProps) => m.leftWidth || '230px'}  auto;

  padding: 0;
  position: relative;
  border: none;
  
`;

export const LeftContainer = styled.div<MainProps>`
   padding-top:20px;
   background-color:  ${(m: MainProps) => m.bgColor};
    
`;
export const RightContainer = styled.div<MainProps>`
   background-color:#fff;
   color:#000;
  
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
  border-color: ${(m: MainProps) => m.imgBorderColor};
  border-width: 2px;
  text-align: center;
  /*color: white;*/
  /*line-height: 170px;*/
  border-style: solid;
`;

export const DirectQuote = styled.blockquote`
  color:#000;
 
  quotes: "“" "”" "‘" "’";
  &::before {
    content: open-quote;
   
  }
  &::after {
    content: close-quote;
    
  }
`;