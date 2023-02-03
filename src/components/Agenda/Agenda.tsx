import { BoxStyle, ImgStyle, TextoStyle } from "../../pages/Perfil/Styles";
import { CiCalendarDate, CiAlarmOn } from "react-icons/ci";
import { AgendaProps } from "../../models/models";
import imgprofissional from "../../assets/imgprofissional.png";
import Button from "../Button/Button";

const formataData = (data: any) => {
  let dia = new Date(data);
  return `${dia.getDate()}/${dia.getMonth() + 1}`;
};

const Agenda: React.FC<AgendaProps> = ({
  servico,
  profissional,
  data,
  horario,
}) => {
  return (
    <BoxStyle>
      <div className="sectionOne">
        <div className="primeiraparte">
          <ImgStyle src={imgprofissional} alt="Imagem do Profissional" />
          <TextoStyle>
            <p>{servico}</p>
            <span>{profissional}</span>
          </TextoStyle>
        </div>
        <hr />
      </div>
      <div className="sectionTwo">
        <div className="agDia d-flex gap-2">
          <CiCalendarDate />
          <p className="m-0">
            DIA <br />
            {formataData(data)}
          </p>
        </div>
        <div className="agHorario d-flex gap-2">
          <CiAlarmOn />
          <p className="m-0">
            HORÁRIO <br />
            {horario}
          </p>
        </div>
      </div>
      <Button type="submit" className="m-3">
        Remarcar
      </Button>
      <div className="buttonCancel">
        <button>Cancelar</button>
      </div>
    </BoxStyle>
  );
};

export default Agenda;
