import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import DatePicker from "../../components/Calendario/Calendario";
import { UserAgenda } from "../../components/Contexts/UserAgenda";
import Error from "../../components/Helper/Error";
import Theme from "../../components/Theme/Theme";

function AgendaData() {
  const { data } = useContext(UserAgenda);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleNextStep() {
    if (data) {
      navigate("/horario");
    } else {
      setError("Selecione uma data no calendário.");
    }
  }
  return (
    <Theme>
      <DatePicker />
      <Button className="mt-2" onClick={handleNextStep}>
        Confirmar
      </Button>
      <Error error={error} />
    </Theme>
  );
}
export default AgendaData;
