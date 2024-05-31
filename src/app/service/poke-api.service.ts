import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  // URL base da PokeAPI
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  // Método para obter uma lista de Pokémons da API
  // Parâmetros opcionais: offset (deslocamento) e limit (limite)
  getPokemons(offset: number = 0, limit: number = 1302): Observable<any> {
    const url = `${this.baseUrl}?offset=${offset}&limit=${limit}`;
    // Faz a requisição GET para a API
    return this.http.get<any>(url).pipe(
      // Tap permite realizar operações secundárias sem modificar o fluxo principal
      tap(res => res),
      tap(res => {
        // Para cada resultado, faz uma nova requisição para obter informações detalhadas sobre cada Pokémon
        res.results.map((resPokemons: any) => {
          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          );
        });
      })
    );
  }

  // Método para fazer uma requisição à API para obter detalhes de um Pokémon específico
  public apiGetPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(res => res)
    );
  }
}
