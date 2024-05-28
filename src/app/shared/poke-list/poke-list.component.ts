import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  public getAllPokemons: any[] = [];
  public allPokemons: any[] = []; // Nova variável para armazenar todos os Pokémons
  public apiError: boolean = false;
  public offset: number = 0;
  public limit: number = 50;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.loadAllPokemons();
    this.loadPokemons();
  }

  private loadAllPokemons() {
    this.pokeApiService.getPokemons(0, 1000).subscribe( 
      res => {
        this.allPokemons = res.results;
      },
      error => {
        this.apiError = true;
      }
    );
  }

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

  public getSearch(value: string) {
    const filter = this.allPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });
    this.getAllPokemons = filter;
  }

  public getPrincipalType(list: any[]) {
    return list.filter(x => x.slot === 1)[0]?.type.name;
  }

  public nextPage() {
    this.offset += this.limit;
    this.loadPokemons();
  }

  public prevPage() {
    if (this.offset > 0) {
      this.offset -= this.limit;
      this.loadPokemons();
    }
  }
}
