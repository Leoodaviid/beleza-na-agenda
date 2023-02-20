import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100%;
`;
export const Content = styled.div`
  align-items: center;
  padding: 0 1rem;
  width: 100%;
`;
export const ProgressBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  .circle {
    background-color: #eaeaea;
    color: #404040;
    font-weight: 300;
    font-size: 16px;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #eaeaea;
    transition: 0.4s ease;
  }
  .circleActive {
    background-color: #ffc973;
    color: #404040;
    font-weight: 300;
    font-size: 16px;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #ffc973;
    transition: 0.4s ease;
  }
  :before {
    content: "";
    position: absolute;
    background-color: #eaeaea;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-radius: 5px;
    height: 4px;
    width: 100%;
    z-index: -1;
    transition: 0.4s ease;
  }
`;
export const Progress = styled.div`
  position: absolute;
  background-color: #ffc973;
  top: 45%;
  left: 0;
  transform: translateY(-50%);
  border-radius: 5px;
  height: 4px;
  width: 100%;
  z-index: -1;
  transition: 0.4s ease;
`;
