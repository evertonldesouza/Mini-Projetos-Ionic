import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-exercicio2',
  templateUrl: './exercicio2.page.html',
  styleUrls: ['./exercicio2.page.scss'],
})
export class Exercicio2Page {

  // Atributos
  private nota1:number;
  private nota2:number;
  private nota3:number;

  // Construtor
  constructor(private ctrlAlert:AlertController) { }

  // Métodos
  private calcularMedia():void {
    // Cálculo da média
    let media = (this.nota1 + this.nota2 + this.nota3) / 3;

    // Verificação do status
    if(media >= 7) {
      // Código para aprovado
      this.exibirMensagemComAlert("A média foi: " + media + " e a situação é: Aprovado");
    } else if(media < 4) {
      // Código para reprovado
      this.exibirMensagemComAlert("A média foi: " + media + " e a situação é: Reprovado");
    } else {
      // Código para recuperação
      this.exibirMensagemComAlert("A média foi: " + media + " e a situação é: Em recuperação");
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
