import styled, { css } from 'styled-components';

export const BaseButton = css`
  display: inline-block;
  height: 40px;
  min-height: 40px;
  line-height: 40px;
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  border-radius: 5px;
  padding: 0 40px;
  text-transform: uppercase;
  cursor: pointer;
  outline: 0;
  border: 0;
  color: rgba(125, 76, 219, 1);
  background: rgba(255, 255, 255, 1);
  transition: background 200ms ease-in-out;

  &.active,
  :active {
    background: rgba(255, 255, 255, 0.8);
  }

  :hover {
    background: rgba(255, 255, 255, 0.6);
  }

  :disabled {
    cursor: not-allowed;
    background: rgb(222, 222, 226);

    :hover {
      background: rgb(222, 222, 226);
    }
  }

  &.btn-primary {
    background: rgba(125, 76, 219, 1);
    color: #fff;

    &.active,
    :active {
      background: rgba(125, 76, 219, 0.8);
    }

    :hover {
      background: rgba(125, 76, 219, 0.8);
    }
  }
`;

const classTypes = {
  primary: 'btn-primary',
  default: '',
};

const StyledButton = styled.button.attrs(props => ({
  type: props.htmlType || 'button', // set original html type of button
  className: `btn ${classTypes[props.type || 'default'] || ''} ${
    props.active ? 'active' : ''
  }`,
}))`
  ${BaseButton}
`;

export default StyledButton;
