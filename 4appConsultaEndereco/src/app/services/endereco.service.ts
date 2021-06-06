import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private urlBase: string = 'https://viacep.com.br/ws/';
  private tipoRetorno: string = '/json/';

  constructor(private http: HttpClient) { }

  public consultaEnderecoPorCep(cep: string) {
    return this.http.get(this.urlBase + cep + this.tipoRetorno);
  }

}
