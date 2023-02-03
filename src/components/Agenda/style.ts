import styled from "styled-components";

const CupomStyle = styled.div`
  .voucher {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 19.4rem;
    height: 7.1rem;
    border-radius: 1.25rem;
    background-color: #ffffff;
    margin-bottom: 1rem;
  }
  .cupom {
    width: 10.5rem;
    height: 7.1rem;
    background-color: #742092;
    border-radius: 1.25rem 0 0 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cupom p {
    color: #ffffff;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 0;
  }
  .cupom p:nth-child(3) {
    font-weight: 700;
  }
  .cupom span {
    color: #ffc973;
    font-size: 40px;
    font-weight: 700;
  }
  .desconto {
    width: 8.9rem;
    height: 7.1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1px;
    color: #742092;
  }
  .desconto p {
    margin-bottom: 0.5rem;
  }
  .desconto a {
    text-decoration: none;
    padding: 0.1rem 1.25rem;
    border: 1px solid #404040;
    border-radius: 1.25rem;
    color: #404040;
  }
`;

const ImgAgendaVazia = styled.div`
  .image {
    width: 10.25rem;
    height: 11.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .image img {
    width: 8.5rem;
    height: 8.5rem;
  }
  .image p {
    font-size: 12px;
    font-weight: 300;
    color: #404040;
    margin-top: 1rem;
  }
`;
export { CupomStyle, ImgAgendaVazia };
