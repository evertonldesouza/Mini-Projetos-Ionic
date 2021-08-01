import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Atributos 
  private anoNascimento:number;

  // Construtor
  constructor(private ctrlAlert:AlertController) {}

  // Métodos
  private exibirIdade():void{
    let idade = new Date().getFullYear() - this.anoNascimento;
    // console.log(new Date()); // Tue May 04 2021 21:39:22 GMT-0300 (Horário Padrão de Brasília)
    this.exibirMensagemComAlert("Sua idade é " + idade + " anos");
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
