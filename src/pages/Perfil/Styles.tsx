import styled from "styled-components";

export const ConfirmImgStyle = styled.img`
  margin: 20px 0;
  width: 250px;
`;

export const ClienteStyle = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  margin: 46px 0 0 20px;
`;

export const CaminhoStyle = styled.p`
  font-size: 14px;
  margin: 20px;
  text-align: left;
`;

export const BoxStyle = styled.div`
  border-radius: 1.25rem;
  padding: 21px;
  background-color: #ffffff;
  width: 330px;
  margin-bottom: 40px;
  .sectionOne {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .sectionTwo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .agDia,
  .agHorario {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .agDia,
  .agHorario p {
    font-size: 16px;
    font-weight: 400;
  }
  svg,
  path {
    font-size: 30px;
    color: #404040;
  }
  hr {
    width: 11.18rem;
    color: #ffc973;
    border: 1px solid;
  }

  .primeiraparte {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .primeiraparte p {
    margin: 0;
    padding-bottom: 0.5rem;
  }

  .buttonCancel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .buttonCancel button {
    width: 16.4rem;
    height: 3rem;
    border: 1px solid #404040;
    background-color: #ffffff;
    border-radius: 1.25rem;
    padding: 0.5rem 6rem 0.5rem 6rem;
    color: #404040;
    font-size: 14px;
    font-weight: 700;
  }
`;

export const ImgStyle = styled.img`
  height: 58px;
`;

export const TextoStyle = styled.div`
  p {
    font-weight: bold;
    line-height: 10px;
  }

  span {
    color: #626060;
  }
`;
