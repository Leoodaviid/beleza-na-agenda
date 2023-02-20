import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserHeaderStyle } from "./style";

const UserHeader = () => {
  const [title, setTitle] = useState("");
  const [span, setSpan] = useState("");
  const [p, setP] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/data":
        setTitle("1º PASSO");
        setSpan("Escolha o dia");

        break;
      case "/horario":
        setTitle("2º PASSO");
        setSpan("Escolha o");
        setP("horário");

        break;
      case "/profissional":
        setTitle("3º PASSO");
        setSpan("Escolha o");
        setP("profissional");
        break;
      default:
        setTitle("");
        setSpan("");
    }
  }, [location]);

  return (
    <UserHeaderStyle>
      <div className="title-step animeLeft ">
        <h1 className="title">{title}</h1>
        <span className="span">
          {span}
          <br />
          {p}
        </span>
      </div>
    </UserHeaderStyle>
  );
};

export default UserHeader;
