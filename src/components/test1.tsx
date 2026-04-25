import { PersonalDetails } from '@components/personal-details'

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

export interface CreateCVProps{
    name?: string;
    zIndex?: number;
    animation?: boolean ;
    isRight? : boolean ;
}
const Container = styled.div`
   position: relative; /* Establishes a positioning context for the children */
  width: 200px;
  height: 200px;
`;

const PersonalDetailsSection = styled.div`
position: absolute; /* Removes divs from the normal document flow */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color:red;
`;
const ExperienceSection = styled.div`
position: absolute; /* Removes divs from the normal document flow */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color:blue;
  animation: ${slideOutRight} 2s ease-in-out forwards;
`;
                             
export const Test1 = ({isRight,activeStep}) => {
    return (

        <Container>
            <PersonalDetailsSection>
                 <PersonalDetails isRight={isRight} step={activeStep}/>
            </PersonalDetailsSection>
               
         
            <ExperienceSection>
                ddddddddddd11
            </ExperienceSection>
        </Container>

    )
}
