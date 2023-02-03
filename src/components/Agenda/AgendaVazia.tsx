import agendaVazia from "../../assets/vazio.png";
import { CupomStyle, ImgAgendaVazia } from "./style";

const AgendaVazia = () => {
  return (
    <>
      <ImgAgendaVazia>
        <div className="image">
          <img src={agendaVazia} alt="Agenda Vazia" />
          <p>Nenhum horário marcado</p>
        </div>
      </ImgAgendaVazia>
      <CupomStyle className="pt-5">
        <div className="voucher">
          <div className="cupom">
            <p>Aproveite</p>
            <span>10%</span>
            <p>DESCONTO</p>
          </div>
          <div className="desconto">
            <p>
              Que tal um
              <br />
              desconto em
              <br />
              seu primeiro
              <br />
              atendimento?
            </p>
            <a href=".">Eu quero!</a>
          </div>
        </div>
      </CupomStyle>
    </>
  );
};

export default AgendaVazia;
