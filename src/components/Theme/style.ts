import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh + 50px);
  display: grid;
  grid-template-columns: 1fr;
  background-color: #fff;
  @media (min-width: 40rem) {
    grid-template-columns: 40% 60%;
  }
`;
export const BackButton = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 40rem) {
    grid-column: 2;
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
  a {
    text-align: right;
    text-decoration: none;
    font-weight: 300;
    letter-spacing: 1px;
    padding: 1rem 1rem 0 0;
    color: #b9b9b9;
    font-size: 20px;
  }
  @media (min-width: 40rem) {
    a {
      padding: 1rem 2rem 0 0;
    }
  }
`;
export const Area = styled.div`
  grid-column: 1;
  @media (min-width: 40rem) {
    background-color: #ffc973;
    grid-row: span 2/3;
  }
`;
export const Page = styled.div`
  @media (min-width: 40rem) {
    grid-column: 2;
  }
`;
