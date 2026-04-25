import styled, { keyframes } from 'styled-components';

const slideOutRight  = keyframes`
from {
    transform: translateX(0); /* Start at original position */
    opacity: 1; /* Start fully opaque */
  }
  to {
    transform: translateX(-100vw); /* Move 100% of the viewport width to the right */
    opacity: 0; /* Fade out as it moves */
  }
`;

interface CreateCVProps{
    name?: string;
    zIndex?: number;
}

export const EntrySection = styled.div<CreateCVProps>`
flex: 0 0 50%;
`;

export const TemplateSection = styled.div<CreateCVProps>`
flex: 0 0 50%;
height: 100%;
`;

export const EntryWrapper = styled.div<CreateCVProps>`
     position: relative; 
     width: 200px;
     height: 200px;
`;


export const PersonalDetailsWrapper = styled.div<CreateCVProps>`
   background-color: #0f0;
   opacity: 0.7; /* Added for visibility in the example */
   z-index: 3222; /* Higher z-index places it on top */

   /** animation: ${slideOutRight} 2s ease-in-out forwards; */
   anitmation: none; 
   position: relative; /* Removes divs from the normal document flow */
  top: 0;
  left: 0;
  z-index:1;
 
`;
export const EducationWrapper = styled.div<CreateCVProps>`
   background-color: #0f0;
   opacity: 0.7; /* Added for visibility in the example */
   z-index: 3222; /* Higher z-index places it on top */

   /** animation: ${slideOutRight} 2s ease-in-out forwards; */
   anitmation: none; 
   position: relative; /* Removes divs from the normal document flow */
  top: 0;
  left: 0;
  z-index:2;
`;

