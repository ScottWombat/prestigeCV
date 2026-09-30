import styled, { keyframes } from 'styled-components';
import MainProps from '../styled-props';

export const ResumeContainer = styled.div<MainProps>`
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
export const Left = styled.div<MainProps>`
  width: 530px;
  background: ${(m:MainProps) => m.bgColor || '#fff'};
`;
export const Right = styled.div<MainProps>`
  width: 280px;
  background: #fff;
  padding: 25px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center; /* Centers items horizontally (main axis) */
  align-items: center;   
  margin-top:20px;
`
export const Image = styled.img<MainProps>`
 width:150px;
  height:150px;
  border: 3px solid ${(m: MainProps) => m.fontColor};
`
export const Name = styled.div`
  text-align:center;
  font-family:'Neuropol';
  font-size:1.2em;
  letter-spacing:1px;
  margin-top:20px;
`;
export const Position = styled.div`
  text-align:center;
  font-family:'Unbounded';
  font-size:1.0em;
  letter-spacing:1px;
  margin-top:0px;
`;

export const RowRightHeader = styled.div<MainProps>`
  margin-left: 0px;
  margin-right:5px;
  text-align:left;
  font-size:1rem;
  line-height:1;
  margin-top:15px;
  border-bottom: 1px solid ${(m:MainProps) => m.borderColor || '#ff0000'};
  color: ${(m:MainProps) => m.bgColor || '#000'};
  display:flex;
`;
export const RowLeftHeader = styled.div<MainProps>`
  margin-left: 50px;
  margin-right:50px;
  text-align:left;
  font-size:1rem;
  line-height:1;
  margin-top:35px;
  border-bottom: 1px solid ${(m:MainProps) => m.borderColor || '#ff0000'};
  color: ${(m:MainProps) => m.bgColor || '#000'};
  display:flex;
`;
export const SquareIcon = styled.div<MainProps>`
  display: inline-block;
  width: 15px;
  height: 15px;
  //border: 3px solid rgba(37, 150, 190,0.5);/* Green */
  border: 4px solid ${(m: MainProps) => m.fontColor};
  //border-radius: 4rem 4rem 0 4rem;
  opacity:0.4;
  vertical-align: middle;
  margin-right: 5px;
  margin-left:2px;
  margin-bottom:2px;
  transform: skewX(-20deg); 
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
export const RightRow = styled.div<MainProps>`
   display: flex;
   width:100%;
`;
export const Header  = styled.div<MainProps>`
  font-family:'QuickSilver';
  font-size:1rem;
  letter-spacing:2px;
  color:${(m: MainProps) => m.fontColor || '#000'};
`;
export const UL = styled.ul`
  margin-top:5px;
  margin-left:15px;
`;