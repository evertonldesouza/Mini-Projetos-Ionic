import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private produtos;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.obterProdutos();
  }

  private obterProdutos() {
    this.produtos = this.produtoService.obterProdutos();
  }
}
