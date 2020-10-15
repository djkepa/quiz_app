import styled, { createGlobalStyle } from 'styled-components';

const BGImage = 'https://images.unsplash.com/photo-1522617889820-47708e025180';

export const GlobalStyles = createGlobalStyle`

  html {
    height: 100%;
    
  }
  body {
    background-image: linear-gradient(230deg, RGBA(15,12,41,0.95), RGBA(48,43,99,0.95),RGBA(36,36,62,0.95)), url(${BGImage});
    background-size: cover;

    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  

  * {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vh;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: Inter;
    font-weight: 700;
    font-size: 4.5rem;
    text-align: center;
    color: #fff;
    margin: 1.3rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 0px -3px 0 #0f0c29, 0px -3px 0 #0f0c29, 0px 3px 0 #0f0c29,
      0px 3px 0 #0f0c29, -3px 0px 0 #0f0c29, 3px 0px 0 #0f0c29,
      -3px 0px 0 #0f0c29, 3px 0px 0 #0f0c29, -3px -3px 0 #0f0c29,
      3px -3px 0 #0f0c29, -3px 3px 0 #0f0c29, 3px 3px 0 #0f0c29,
      -3px 3px 0 #0f0c29, 0px 3px 0 #0f0c29, 3px 3px 0 #0f0c29,
      0 8px 1px rgba(0, 0, 0, 0.1), 0 0 3px rgba(0, 0, 0, 0.1),
      0 2px 3px rgba(0, 0, 0, 0.3), 0 12px 2px rgba(0, 0, 0, 0.2),
      0 9px 9px rgba(0, 0, 0, 0.25), 0 12px 12px rgba(0, 0, 0, 0.2),
      0 35px 35px rgba(0, 0, 0, 0.15);
  }
  .start,
  .next {
    height: 50px;
    appearance: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-self: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    margin: 20px;
    padding: 0.7em 2em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;

    &:hover,
    &:focus {
      color: #fff;
      outline: 0;
    }
  }
  .start {
    max-width: 200px;
  }
  .next {
    font-size: 0.8rem;
  }

  .fifth {
    border-color: white;
    border-radius: 0;
    color: white;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: color 150ms ease-in-out;

    &:after {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 100%;
      background: white;
      z-index: -1;
      transition: width 150ms ease-in-out;
    }

    &:hover {
      color: #0f0c29;
      border-color: #0f0c29;
      &:after {
        width: 110%;
      }
    }
  }
`;
