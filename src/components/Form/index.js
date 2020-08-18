import styled from 'styled-components';

const Form = styled.form`
  label {
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    padding: 10px 8px;
    border: 1px solid #888;
    transition: border 200ms ease-in-out;

    &.error {
      border-color: red;

      &:focus,
      &:hover,
      &:active {
        outline: none;
        border-color: red;
      }
    }
  }

  span.error {
    color: red;
    font-size: small;
  }
`;

export default Form;
