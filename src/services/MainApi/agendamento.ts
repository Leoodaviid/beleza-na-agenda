import { AxiosResponse } from "axios";
import { AgendaAtualizarProps, AgendaCriarProps } from "../../models/models";
import baseApi from "./config";

export function ProfissionalServico() {
  return baseApi.get("/profissionalservico");
}

export function agendaCriar(payload: AgendaCriarProps): Promise<AxiosResponse> {
  return baseApi.post("/agenda", payload.payload, {
    headers: {
      Authorization: `Bearer ${payload.token}`,
    },
  });
}
export function agendaAtualizar(
  payload: AgendaAtualizarProps
): Promise<AxiosResponse> {
  return baseApi.put(`/agenda/${payload._id}`, payload.payload, {
    headers: {
      Authorization: `Bearer ${payload.token}`,
    },
  });
}
