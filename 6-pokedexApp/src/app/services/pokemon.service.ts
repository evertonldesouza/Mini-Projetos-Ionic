import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from '../models/IPokemon.model';


export interface IItemPokemon {
  name: string;
  url: string;
}
export interface IListaPokemon {
  count: number;
  next: string;
  previous: string;
  results: IItemPokemon[];
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(public http: HttpClient) { }

  buscarPokemons(offset = 0, limit = 10): Observable<IListaPokemon> {
    const urlConsulta = `${this.url}?Limit=${limit}&offset=${offset}`;
   // const urlNormal = this.url + '?limit=' + limit + '&offset=' + offset;

    return this.http.get<IListaPokemon>(urlConsulta);
  }

  buscarUmPokemon(url: string): Observable<IPokemon> {
    return this.http.get<IPokemon>(url);
  }
}
