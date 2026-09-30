import styled from "styled-components";

interface ButtonProps {
  hidden?: boolean;
  onClick?: () => void;
}

export const Button = styled.button<ButtonProps>`
  width: 50%;
  height: 2rem;
  cursor: pointer;
  color: rgb(255, 255, 255);
  //background-color:rgba(0, 0, 0, 0.75);
  margin: 10px 0 0 0;
  color:black;
  margin-left:auto;
  /*
  &:hover {
    //background-color: rgba(0, 0, 0, 0.75);
    animation: 0.2s ease-out forwards;
    border: 5px solid #ccc;
  }
    */
`;