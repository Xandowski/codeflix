import styled from 'styled-components';

const VideoCardContainer = styled.a`
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 300px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: 330px 260px;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  display: flex;
  align-items: center;

  transition: width 0.8s, linear 0.5s;
  &:hover,
  &:focus {
    width: 350px;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export default VideoCardContainer;
