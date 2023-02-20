import { useContext, useEffect, useState } from "react";
import { UserAgenda } from "../../components/Contexts/UserAgenda";
import { useNavigate } from "react-router-dom";
import HourPicker from "../../components/Horas/HourPicker";
import Theme from "../../components/Theme/Theme";
import Button from "../../components/Button/Button";
import Error from "../../components/Helper/Error";

function AgendaHorario() {
  const { hora } = useContext(UserAgenda);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (hora === null) {
      navigate("/data");
    }
  }, [hora, navigate]);

  function handleNextStep() {
    if (hora) {
      navigate("/profissional");
    } else {
      setError("Selecione uma hora válida.");
    }
  }

  return (
    <Theme>
      <HourPicker />
      <Button className="mt-2" onClick={handleNextStep}>
        Confirmar
      </Button>
      <Error error={error} />
    </Theme>
  );
}

export default AgendaHorario;
