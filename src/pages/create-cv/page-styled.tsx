import styled, { keyframes } from 'styled-components';

export const totalSteps = 6;

interface PageProps{
    margin?: string;
}

export const SlidePage = styled.div<PageProps>`
   width: 600px;
   transition: margin-left 0.3s ease-in-out;
   margin-left: ${(p:PageProps) => p.margin}; 
   background-color:#ffffff;
`;
