import styled from 'styled-components';

const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid rgb(220,26,40);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;

  a:nth-child(1){
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin: 0 5px;
    }

    span{
      font-weight: bold;
      color: var(--primary);
    }
  }

  a:nth-child(2){
    display: flex;
    justify-content: center;
    align-items: center;
    span{
      margin-left: 5px;
    }
  }

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export default FooterBase;
