import { IPokemon } from './../models/IPokemon.model';
import { PokemonService } from './../services/pokemon.service';
import { DadosService } from './../services/dados.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 // Criamos um array de pokemons
 // [] => representa um array (Lista)
 // {} => representa um objeto (Item)
  listaPokemon: IPokemon[] = [];

  listaPokemonFiltrada: IPokemon[] = [];
  totalPokemons = 0; // Guarda o total de pokemons
  offset = 0; // Utilizado para navegar entre as páginas


  constructor(
    private dadosService: DadosService,
    private router: Router,
    private pokemonService: PokemonService) {

      this.buscarPokemonAPI();
  }

  retornarPokemon(): void{
    // Ordenar os pokemons pelo ID
    this.listaPokemonFiltrada.sort((a , b) => {
      if(a.id > b.id) {
        return 1;
      }

      if(a.id < b.id) {
        return -1;
      }

      return 0;
    });

    this.listaPokemonFiltrada = this.listaPokemon;
  }

  buscarPokemon(evento): void{
    this.retornarPokemon(); // Coloca todos os pokemons na lista filtrada

    // Pega o valor digitado no campo de busca
    const busca: string = evento.target.value;

    if(busca && busca.trim() !== '') {
      this.listaPokemonFiltrada = this.listaPokemon.filter(pokemon =>
        pokemon.name.toLowerCase().includes(busca.trim().toLowerCase())
    );
   }
  }


  abrirPokemon(pokemon: any): void {
    // Salva o pokemon clicado no serviço de dados temporário.
    this.dadosService.setDados('pokemon', pokemon);

    // Navega até a página para exibir os dados.
    this.router.navigateByUrl('/dados-pokemon');
  }

  buscarPokemonAPI(offset = 0): void {
    this.offset = offset;
    this.listaPokemon = [];
    this.pokemonService.buscarPokemons(this.offset).subscribe(dadosRetorno =>{
      console.log(dadosRetorno); // Pega a lista de pokemons da API

      this.totalPokemons = dadosRetorno.count;

      // Percorre a lista de Pokemon para buscar os dados de cada pokemon.
      for(const item of dadosRetorno.results){

        // Busca na API os dados de cada pokemon
        this.pokemonService.buscarUmPokemon(item.url).subscribe(dadosPokemon => {
          this.listaPokemon.push(dadosPokemon); // Coloca os dados no Array
          this.retornarPokemon(); // Fim da busca de 1 pokemon
        });
      }// Fim do For
    });// Fim do Subscribe
  }// Fim do Método
}
