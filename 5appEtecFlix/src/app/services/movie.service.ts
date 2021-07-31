import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  language = 'pt-BR';
  region = 'BR';
  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=bf3a03e95e114910c94b911c7381b9fc';

  constructor(private http: HttpClient) { }
   public obterFilmesMelhorClassificados(){
    return this.http.get(this.apiURL + 'movie/top_rated'+ this.key + '&language=' + this.language +'&page=1'+ '&region='+ this.region);
  }


}

