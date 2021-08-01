import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Atributos
  private idade:number;

  constructor(private alertController:AlertController) {}

  // Métodos
  private consultaCategoria() : void {
    let msg = "";

    if (this.idade >= 5 && this.idade <= 7 ) {
      msg = "Infantil A";
    } else if(this.idade >= 8 && this.idade <= 10) {
      msg = "Infantil B";
    } else if(this.idade >= 11 && this.idade <= 13) {
      msg = "Juvenil A";
    } else if(this.idade >= 14 && this.idade <= 17) {
      msg = "Juvenil B";
    } else if(this.idade >= 18) {
      msg = "Adulto";
    } else {
      msg = "Categoria indefinida";
    }
    this.exibeMensagem(msg);
  }

  async exibeMensagem(msg:string) {
    const alert = await this.alertController.create(
      {
        header: 'Informativo',
        message: msg,
        buttons: ['OK']
      }
    );
    await alert.present();
  }
}
