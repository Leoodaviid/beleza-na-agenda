import styled from "styled-components";

export const ConfirmImgStyle = styled.img`
  margin: 20px 0;
  width: 150px;
`;

export const Sectionsucess = styled.section`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background-color: #742092;
  color: #fff;

  .container-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 865px;
  }
  .textStep {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #c858ba;
    min-height: 90%;
  }
  .sucess {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .agenda {
    color: #ffc973;
  }
  .agDia,
  .agHorario {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .agDia,
  .agHorario > svg {
    font-size: 30px;
  }
  .btnSucess {
    background-color: #c858ba;
    color: #fff;
  }
  .btnSucess:hover,
  .btnSucess:focus {
    outline: none;
    box-shadow: 0 0 0 3px #c59, 0 0 0 4px #c49;
  }

  @media (max-width: 40rem) {
    .container-grid {
      grid-template-columns: 1fr;
    }
    .textStep {
      background-color: transparent;
      /* position: relative;
      bottom: -90%;
      right: 21%; */
    }
  }
`;
