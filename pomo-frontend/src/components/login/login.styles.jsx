import styled,{css} from 'styled-components';


export const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
    margin: 10px 50px;
    text-align: left;
    font-weight: bolder;

    h1 {
        font-size: 48px; 
        border-bottom: 5px solid black; 
        margin-bottom: 100px; 
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;

`;

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 40px;
    letter-spacing: 0.5px;
    line-height: 20px;
    padding: 0 35px 0 35px;
    font-size: 20px;
    background-color: #06d6a0;
    color: blue;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center; 
    text-align: center; 
  
    &:hover {
      background-color: black;
      color: white; 
    }
`; 

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 20px;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }
`;