import styled from "styled-components";

const UserHeaderStyle = styled.div`
  height: 100px;
  h1 {
    color: #b9b9b9;
    font-size: 30px;
    font-weight: 300;
    letter-spacing: 1px;
  }
  span {
    color: #742092;
    font-size: 24px;
    font-weight: 700;
  }
  .title-step {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 2rem;
  }

  @media (min-width: 40rem) {
    .title-step {
      height: 90vh;
      align-items: center;
      justify-content: center;
    }
  }
`;
export { UserHeaderStyle };
