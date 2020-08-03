import styled from 'styled-components';

export const Logo = styled.img`
  max-width: 168px;
  
  @media (max-width: 800px) {
    Logo {
      max-width: 105px;
    }
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 65px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;
  background: linear-gradient(180deg, #131212 83.33%, transparent 100%);

  @media (max-width: 800px) {
    Nav {
      height: 40px;
    }
  }
`;

export const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  color: white;
  position: absolute;
  left: calc(168px + (100% * (10/100)));

  li{
    padding-right: 10px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  input {
    height: 26px;
    border: 1px solid white;
    background-color: black;
  }

  svg {
    position: relative;
    left: -26px;
  }
`;

// @media (max-width: 800px) {
//   a.ButtonLink {
//     position: fixed;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: var(--primary);
//     border-radius: 0;
//     border: 0;
//     text-align: center;
//   }
// }
