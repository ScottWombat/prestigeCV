import styled, { keyframes } from 'styled-components';

export const ResumeStyle = styled.div`
    padding-left:50px;
    color: rgba(0,0,0,0.8)
    font-family: 'Oswald';
    width:100%;
    background-color: #2a0d0d;
    z-index:201;
`
/* Redio Buttons */
export const Wrapper = styled.div`
  width:100%;
  display: grid;
  grid-template-columns: 100%;
  font-family: 'Oswald';
  margin-top:10px;
  background-color:#fff;
  @media (max-width: 768px) {
    margin-top:-5px;
    text-align:center;
    width:100%;
    //line-height:15px;
  }
`

export const FormContainer = styled.div`
  font-family: 'Oswald',sans-serif;
  //padding-left: 20px;
  //max-width: 600px;
  //width:600px;
  display: flex;
  flex-direction: row;
  //background-color:blue;
  width:100%;
  margin-left:10px;
  @media (max-width: 768px) {
    width:100%;
    font-size:0.6rem;
    margin-top:-15px;
    margin-left:15px;
  }
`;

export const Title = styled.div`
  color: #333;
  margin-top: 0px;
  float:left;
  text-align:left;
  width:150px;
  //background-color:red;
  @media (max-width: 768px) {
    width:26%;
    font-size:0.6rem;
    margin-left:-10px;
    font-size:1rem;
    @media (max-width: 768px) {
      margin-top:10px;
    }
  }
  
`;

// 2. Styled Radio Group Wrapper
export const RadioGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  float:left;
  margin-left:0px;
  @media (max-width: 768px) {
    
    margin-top:5px;
  }
`;

// 3. Custom Visual Radio Circle
export const CustomRadio = styled.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  transition: all 0.2s ease-in-out;

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    background: #007bff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.2s ease-in-out;
  }
`;

// 4. Hidden Native Input (Keeps keyboard navigation and accessibility intact)
export const HiddenInput = styled.input.attrs({ type: "radio" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked + ${CustomRadio} {
    border-color: #007bff;
  }

  &:checked + ${CustomRadio}::after {
    transform: translate(-50%, -50%) scale(1);
  }

  &:focus + ${CustomRadio} {
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;

// 5. Label Wrapper acting as the click target
export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 16px;
  color: #444;
  user-select: none;

  &:hover ${CustomRadio} {
    border-color: #007bff;
  }
`;