import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  // Arrays para armazenar os Pokémons e seus detalhes
  public getAllPokemons: any[] = [];
  public allPokemons: any[] = [];
  // Variável para controlar erros da API
  public apiError: boolean = false;
  // Variáveis para controle de paginação
  public offset: number = 0;
  public limit: number = 50;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    // Carrega todos os Pokémons e a página inicial de Pokémons
    this.loadAllPokemons();
    this.loadPokemons();
  }

  // Método para carregar todos os Pokémons disponíveis
  private loadAllPokemons() {
    this.pokeApiService.getPokemons(0, 1302).subscribe(
      res => {
        this.allPokemons = res.results;
      },
      error => {
        this.apiError = true;
      }
    );
  }

  // Método para carregar os Pokémons para a página atual
  private loadPokemons() {
    this.pokeApiService.getPokemons(this.offset, this.limit).subscribe(
      res => {
        this.getAllPokemons = res.results;
      },
      error => {
        this.apiError = true;
      }
    );
  }

  // Método para filtrar a lista de Pokémons com base na pesquisa
  public getSearch(value: string) {
    const filter = this.allPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });
    this.getAllPokemons = filter;
  }

  // Método para obter o tipo principal de um Pokémon
  public getPrincipalType(list: any[]) {
    return list.filter(x => x.slot === 1)[0]?.type.name;
  }

  // Método para avançar para a próxima página de Pokémons
  public nextPage() {
    this.offset += this.limit;
    this.loadPokemons();
  }

  // Método para retroceder para a página anterior de Pokémons
  public prevPage() {
    if (this.offset > 0) {
      this.offset -= this.limit;
      this.loadPokemons();
    }
  }
}
