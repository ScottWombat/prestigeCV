import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    width:100%;
    //background-color: pink;  
    gap: 10px; 
    @media (max-width: 768px) {
        grid-template-columns:1fr;
    } 
    
`
/*
export const Container1 = styled.div`
    display: flex;
    width:100%;
`
*/
export const Left = styled.div`
    width:550px;
    font-size:1em;
    
    @media (max-width: 768px) {
        width:460px;
    }
   
`
export const Right = styled.div`
    
    //display:flex;
   //justify-content: center; 
   // background-color: maroon;
    margin-left:20px;
    
    @media (max-width: 768px) {
        width:380px;
        margin-top:20px;

    }

`
export const TopSection = styled.div`
   display: flex;
   margin-top:20px;
   margin-bottom:10px;
   width:100%;
  
   @media (max-width: 768px) {
       //transform: scale(0.5);
       //transform-origin: 0% 0%;
       @media (max-width: 768px) {
            justify-content: left; 
            margin-left:20px;
        }
    }
`
export const Section1 = styled.div`
    width:50%;
`
export const Section2= styled.div`
    width:50%;
    display: inline-flex;
    justify-content: flex-end; 
`
/*
export const ColorMenuSetion = styled.div`
   width:50%;
   background-color:#ccc;
   display: inline-flex;
   margin-top:0px;
   justify-content: flex-start; 
`
export const PrintButtonSetion = styled.div`
   width:50%;
   margin-top:0px;
  display: inline-flex;
  justify-content: flex-end; 
   background-color:yellow;
`;
*/
export const ContentSectionWrapper = styled.div`
  width: 100%;
  /*background-color:red;*/
  margin-left: 40px;
`
export const ContentSection = styled.div`
   /*width: 100%;*/
   /*margin-left: 50px;*/
   display: flex;
  /* margin-top:25px;*/
   color: #000;
   
   @media (max-width: 768px) {
       transform: scale(1);
       transform-origin: 0% 0%;

    }
   
`
export const StepsSection = styled.div`
   width: 100%;
   margin-left: 25px;
   display: flex;
   flex-direction: column; 
   margin-top:25px;
   color: #000;
   @media (max-width: 768px) {
        margin-top: 100px;
    }
  
`
export const PrintButton = styled.button`
    border: 4px solid #cccccc;
    background-color: #fff;
    margin-right: 0px;
    width:150px;
    height:30px;
    text-align: center;
    color:#000;
    &:hover{
     animation: 0.2s ease-out forwards;
     border: 5px solid orange;
    }
`;

export const Header = styled.div`
    display: flex;
    width: 300px;
    float:left;
    background-color:#fff;
    font-family: 'Anton';
    letter-spacing: 1px;
    margin-top: -25px;
`
export const Name = styled.div`
    float: left;
    margin-right:10px;
    @media (max-width: 768px) {
        font-size:0.8rem;
    }
`
export const StepName = styled.div`
    float: left;
    margin-left:10px;
    @media (max-width: 768px) {
        font-size:0.8rem;
    }
`

export const Circle = styled.div`
  width: 30px;             /* Set dimensions */
  height: 30px;
  background-color: #fff;
  border:  3px solid #ff6b6b;
  color: #000;
  border-radius: 50%;      /* Makes the box a perfect circle */
  display: flex;           /* Flexbox centers the number perfectly */
  justify-content: center;
  align-items: center;
  font-size: 18px;
  padding-top:0px;
  margin-top: -2px;
  @media (max-width: 768px) {
        font-size:0.8rem;
        width: 25px;             /* Set dimensions */
        height: 25px;
  }
`
export const FormSection = styled.div`
    float:left;
    width: 100%;
`
