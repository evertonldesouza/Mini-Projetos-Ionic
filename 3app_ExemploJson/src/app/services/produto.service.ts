import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  // Métodos
  public obterProdutos() {
    return [
      { id: 1, descricao: "Produto 1", preco: "R$ 10,00" },
      { id: 2, descricao: "Produto 2", preco: "R$ 20,00" },
      { id: 3, descricao: "Produto 3", preco: "R$ 30,00" },
      { id: 4, descricao: "Produto 4", preco: "R$ 40,00" },
      { id: 5, descricao: "Produto 5", preco: "R$ 50,00" }
    ];
  }
}
