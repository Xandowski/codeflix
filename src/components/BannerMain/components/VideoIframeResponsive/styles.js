import styled from 'styled-components';

export const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  padding-top: 56.25%;
  @media (max-width: 800px) {
    /* display: none; */
  }
`;

export const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  max-height: 1080px;

  @media (max-width: 900px) {
    /* display: none; */
    max-height: 400px;
  }

  @media (max-height: 600px){
    max-height: 100vh;
  }
`;