import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #ebfeff;
  width: 80vh;
  border-radius: 5px;
  border: 3px solid #0f0c29;
  padding: 20px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
  text-align: center;
  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(185deg, #337E55, #59BC86)'
        : !correct && userClicked
        ? 'linear-gradient(185deg, #A04141, #C16868)'
        : 'linear-gradient(185deg,#292170,#968ede)'};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
