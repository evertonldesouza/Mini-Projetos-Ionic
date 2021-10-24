import { StorageService } from './../services/storage.service';
import { Usuario } from './../models/Usuario';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formCadastro: FormGroup;
  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome é Obrigatório!' },
      { tipo: 'minlength', mensagem: 'O Nome precisa ter pelo menos 3 caracteres!' }
    ],
    telefone: [
      { tipo: 'required', mensagem: 'O campo Telefone é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O Telefone precisa ter pelo menos 6 caracteres!' },
      { tipo: 'maxlength', mensagem: 'O Telefone deve ter no máximo 14 caracteres!' }
    ]
  };

  constructor(
    public formBuilder: FormBuilder,
    private storageService: StorageService,
    public alertController: AlertController,
    public route: Router
    ) {
    this.formCadastro = formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      telefone: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(14)])],
    });
  }

  salvarCadastro() {

    if(this.formCadastro.valid) {

      const user = new Usuario();

      user.nome = this.formCadastro.value.nome;
      user.telefone = this.formCadastro.value.telefone;

      this.storageService.set(user.telefone, user);
      console.log('User:', user);

      this.exibirMensagem(user.nome + ' salvo com sucesso!');

      this.route.navigateByUrl('/contato');

    }
    else {
      this.exibirMensagem('Formulário inválido!');
    }
  }

  async exibirMensagem(mensagem: string) {
    const alert = await this.alertController.create({
      header: 'SISTEMA',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();

  }

}
