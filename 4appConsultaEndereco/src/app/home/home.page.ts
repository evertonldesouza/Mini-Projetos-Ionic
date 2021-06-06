import { Component } from '@angular/core';
import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  private cep: string;
  private endereco: any = {};

  constructor(private enderecoService: EnderecoService) {}

  private consultaEndereco() {
    this.enderecoService.consultaEnderecoPorCep(this.cep)
      .subscribe(
        data => {
          this.endereco = data;
        }
      );
  }
}
