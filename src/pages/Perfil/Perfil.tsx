import { useContext } from "react";
import Header from "../../components/Header/Header";
import { BoxStyle, ClienteStyle, TextoStyle } from "./Styles";
import { CiBellOn } from "react-icons/ci";
import { UserAgenda } from "../../components/Contexts/UserAgenda";
import { UserContext } from "../../components/Contexts/UserContext";
import Agenda from "../../components/Agenda/Agenda";
import AgendaVazia from "../../components/Agenda/AgendaVazia";

function Agendamento() {
  const { profissional, data, hora } = useContext(UserAgenda);
  const { user } = useContext(UserContext);

  return (
    <div>
      <div className="boxHome">
        <Header />
        <div className="conteinerBase">
          <section>
            <ClienteStyle>
              {" "}
              <span className="ajusteFonte">Agenda da(o),</span>{" "}
              <h1>{user?.data.nome}</h1>{" "}
            </ClienteStyle>
            <div>
              <ul className="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  href="."
                  className="nav-item active buttonTab1"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  Marcados
                </a>
                <a
                  href="."
                  className="nav-item buttonTab2"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="true"
                >
                  <CiBellOn />
                  Lembretes
                </a>
              </ul>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="d-flex justify-content-center flex-column align-items-center tab1Perfil">
                    {profissional ? (
                      <Agenda
                        servico={profissional.servico.servico}
                        profissional={profissional.profissional.nome}
                        data={data}
                        horario={hora}
                      />
                    ) : (
                      <AgendaVazia />
                    )}
                    {profissional ? (
                      <p>Você não tem mais horários marcados.</p>
                    ) : (
                      <p></p>
                    )}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile-tab-pane"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="d-flex flex-column align-items-center tab2Perfil">
                    <BoxStyle style={{ height: "146px" }}>
                      <div className="primeiraparte">
                        <TextoStyle>
                          <p>Retoque raz</p>
                          <span>Último Agendamento 19/11</span>
                        </TextoStyle>
                      </div>
                      <a href="/">
                        <div className="perfilButton">Agendar</div>
                      </a>
                    </BoxStyle>
                    <p>Você não tem mais lembretes.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Agendamento;
