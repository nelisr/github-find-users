import { AxiosResponse } from 'axios';

export const handleResponse = (response: AxiosResponse) => {
  const { data: result } = response;

  if ([401, 403].find((status) => status === response.status)) {
    return Promise.reject(result);
  }

  return result;
};

export const handleErrorResponse = (error: any) => {
  const { response: { status } } = error;
  let message = '';


  if(status===404) {
    message = 'Recurso ou Url não encontrado'
  } else if (status===403) {
    message = 'Excedido o limite de requsição no GitHub'
  } else if (status===422) {
    message = 'Requisição incorreta'
  } else if (status===503) {
    message = 'Serviço indisponível no momento. Favor tentar novamente mais tarde'
  } else {
    message = 'Ocorreu um erro ao tentar buscar o recurso'
  }

  const err = {...error, message}

  return Promise.reject(err);
};
