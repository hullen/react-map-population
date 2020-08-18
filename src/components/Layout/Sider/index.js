import styled from 'styled-components';

const Sider = styled.aside`
  display: flex;
  box-sizing: border-box;
  min-width: 230px;
  max-width: 100%;
  background-color: rgb(61, 19, 141);
  color: #fff;
  flex-direction: column;
  min-height: 0;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 48px;

  nav {
    ul {
      flex-direction: column;
    }

    li {
      margin-right: 0;
      margin-bottom: 10px;

      > a {
        color: #fff;
      }
    }
  }
`;

export default Sider;
