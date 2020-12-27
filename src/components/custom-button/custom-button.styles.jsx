import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #000666;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: #000666;
    border: 1px solid #000666;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: #000666;
  border: 1px solid #000666;

  &:hover {
    background-color: #000666;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
