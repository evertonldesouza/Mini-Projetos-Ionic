import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.page.html',
  styleUrls: ['./exercicio3.page.scss'],
})
export class Exercicio3Page {

  // Atributos
  private valorVendas:number;

  // Construtor
  constructor(private ctrlAlert:AlertController) { }

  // Métodos
  private executarCalculoComissao():void{
    let comissao = this.calcularComissao();
    this.exibirMensagemComAlert("A comissão é: " + comissao);
  }

  private calcularComissao():number {
    if(this.valorVendas >= 1000){
      return this.valorVendas * 0.1;
    } else {
      return this.valorVendas * 0.05;
    }
  }

  async exibirMensagemComAlert(msg:string) {
    const mensagem = await this.ctrlAlert.create(
      {
        header: 'Informação',
        message: msg,
        buttons: ['OK']
      }
    );
    await mensagem.present();
  }
}
