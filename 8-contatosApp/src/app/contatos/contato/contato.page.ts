import { StorageService } from './../../services/storage.service';
import { Usuario } from './../../models/Usuario';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})

export class ContatoPage implements OnInit {

  listaUsuarios: Usuario[] = [];

  constructor(
    public storageService: StorageService,
    public alertController: AlertController,
    ) { }

  ionViewDidEnter() {
    this.buscarUsuarios();
  }

  async buscarUsuarios() {
    this.listaUsuarios = await this.storageService.getAll();
  }

  async removerUsuario(key: string) {
    await this.storageService.remove(key);
    this.buscarUsuarios();
  }

  async exibirMensagem(key: string) {
    const alert = await this.alertController.create({
      header: 'Excluir',
      message: 'Deseja remover o contato?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('ação cancelada');
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.removerUsuario(key);
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
