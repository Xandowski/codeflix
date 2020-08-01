import styled from 'styled-components';

export const Form = styled.form`
width: 25vw;
height: 70px;
display: flex;
align-items: center;
justify-content: space-between;
position: absolute;
margin-left: 5%;
top: 70px;
font-weight: bold;
z-index: 10;
`;

export const H1 = styled.h1`
  color: white;
  font-size: 25px;
  text-shadow: 4px 4px 18px black;
`;

export const Select = styled.div`
  color: white;
  background: black;
  width: 205px;
  font-size: 16px;
  height: 30px;
  opacity: 0.8;
  `;


export const Ul = styled.ul`
  /* border: 1px solid white; */
  position: absolute;
  background: black;
  width: 205px;
  margin-top: 2px;
  box-sizing: border-box;
  li{
    padding: 3px;
    cursor: pointer;

    &:nth-child(n + 2):hover{
      background-color: #111111;
    }
  }
`;

export const Arrow = styled.div`
  position: absolute;
  left: calc(25vw - 15px);
  top: calc(50% - 3px);
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
  cursor: pointer;
`;