import styled from 'styled-components';

const StyledNav = styled.nav`
  max-width: 100%;
  box-sizing: border-box;

  > ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-right: 10px;
    }
  }

  a {
    color: rgb(125, 76, 219);
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .active {
    text-decoration: underline;
  }
`;

export default StyledNav;
