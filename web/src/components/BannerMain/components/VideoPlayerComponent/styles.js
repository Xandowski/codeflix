import styled from 'styled-components';

const VideoPlayer = styled.video`
  position: absolute;
  top: -60px;
  left: 0;
  bottom: 0;
  right: 0;
  min-width: 100%;
  max-height: 1080px;

  @media (max-width: 900px) {
    /* display: none; */
    max-height: 400px;
  }

  @media (max-height: 600px){
    max-height: 100vh;
  }
`;

export default VideoPlayer;
