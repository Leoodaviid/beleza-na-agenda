import { Container, BackButton, Area, Page } from "./style";
import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import UserHeader from "../UserHeader/UserHeader";
import backarow from "../../assets/back.png";
import Header from "../Header/Header";
import Stepper from "../Stepper/Stepper";
import { Link } from "react-router-dom";

type PageProps = {
  children: ReactNode;
};
const Theme = ({ children }: PageProps) => {
  const location = useLocation();
  const [active, setActive] = useState<number>(0);
  const [back, setBack] = useState("");

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/data":
        setActive(1);
        setBack("/agenda");
        break;
      case "/horario":
        setActive(2);
        setBack("/data");
        break;
      case "/profissional":
        setActive(3);
        setBack("/horario");
        break;
      default:
    }
  }, [location]);

  return (
    <>
      <Header />
      <Container>
        <BackButton>
          <Link to={back}>
            <img src={backarow} alt="Voltar" className="m-2" />
            Voltar
          </Link>
          <Stepper active={active} />
        </BackButton>
        <Area>
          <UserHeader />
        </Area>
        <Page>{children}</Page>
      </Container>
    </>
  );
};

export default Theme;
