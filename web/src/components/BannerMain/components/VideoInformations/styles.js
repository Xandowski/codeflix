import styled from 'styled-components';

export const Section = styled.section`
  width: 30vw;
  position: absolute;
  top: 25%;
  left: 5%;
  
  padding: 15px;

  h1 {
    font-size: 30px;
    text-shadow: 7px 7px 18px black;
  }

  p{
    text-justify: newspaper;
    font-size: 17px;
    font-weight: bold;
    text-shadow: 7px 7px 18px black;
  }

`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
`;

export const Button = styled.a`
  background-color: rgba(17, 17, 17, 0.8);
  width: 100px;
  height: 40px;
  border: none;
  color: white;
  border-radius: 3px;
  margin-right: 10px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
