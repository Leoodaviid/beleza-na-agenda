export interface CreateClientePayload {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
}
export interface LoginClientePayload {
  email: string;
  senha: string;
}

export interface ServicosProps {
  _id: string;
  servico: string;
  preco: string;
  duracao: string;
  descrcao: string;
}

export interface ProfissionalProps {
  nome: string;
  servico: string;
}

export interface ProfissionalServicoProps {
  _id: string;
  profissional: {
    _id: string;
    nome: string;
    email: string;
  };
  servico: {
    _id: string;
    servico: string;
  };
}
export interface AgendaProps {
  profissional: string;
  servico: string;
  data: Date;
  horario: string;
}
export interface AgendaCriarProps {
  payload: FormData;
  token: string;
}
export interface AgendaAtualizarProps {
  payload: FormData;
  token: string;
  _id?: string;
}
