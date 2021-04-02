import { PokeDetail, PokeServiceRes } from './pokemon';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIServiceService {
  constructor( private http: HttpClient ) {}

  // tslint:disable-next-line: typedef
  getPokemons(): Observable<PokeServiceRes>{
    return this.http.get<PokeServiceRes>(url);
  }

  // tslint:disable-next-line: typedef
  getPokemonInfo(id: string): Observable<PokeDetail>{
    return this.http.get<PokeDetail>(url + (Number(id) + 1).toString() + '/');
  }
}
