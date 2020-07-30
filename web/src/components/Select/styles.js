import styled from 'styled-components';

export const Div = styled.div`
  position: relative;
  width: 80px;
  height: 70px;
`;

export const NewDiv = styled.div`
  background-color: black;
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
  user-select: none;

  &:after{
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: white transparent transparent transparent;
  }
`;

export const SelectItems = styled.div`
  position: absolute;
  background-color: black;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;

  div {
    color: #ffffff;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;
    user-select: none;

    &:after{
      background-color: gray;
    }
  }

  &:hover{
    background-color: gray;
  }
`;

export const DivOptions = styled.div`

`;

export const SelectOptions = styled.select`
  display: none;

  option {

  }
`;