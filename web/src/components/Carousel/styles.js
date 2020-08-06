import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  background-color: rgba(220,26,40, 0.8);
  font-size: 30px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 12px 0;
  margin-top: 20px;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
  overflow-x: hidden;
`;

export const VideoCardGroupContainer = styled.section`
  @media (min-height: 600px) {
    color: white;
    min-height: 197px;
    margin-left: 5%;
    margin-bottom: 16px;
    position: relative;
    top: -40vh;
  }
  @media (min-height: 700px) {
    top: -30vh;
  }
`;
