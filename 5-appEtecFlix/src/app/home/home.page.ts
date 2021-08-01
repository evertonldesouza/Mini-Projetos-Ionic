import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public filmes: any;

  constructor(private movieService: MovieService) {}

  ngOnInit(){
    this.obterFilmesMelhorClassificados();
  }

  private obterFilmesMelhorClassificados(){
    this.movieService.obterFilmesMelhorClassificados()
    .subscribe(
      data=>{
        this.filmes=(data as any).results;
        console.log(data);

      }, error=>{
        console.error('Erro');
      }
    );
  }
}
