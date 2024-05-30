import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  // URLs para obter informações sobre o Pokémon
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  // Variáveis para armazenar o Pokémon, controle de carregamento e erros da API
  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(

    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    // Quando o componente é inicializado, chama a função para obter o Pokémon
    this.getPokemon();
  }

  // Função para obter detalhes do Pokémon
  public getPokemon(){
    // Obtém o ID do Pokémon da rota atual
    const id = this.activatedRoute.snapshot.params['id'];

    // Faz duas requisições para a PokeAPI simultaneamente usando forkJoin
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);

    // Aguarda a conclusão de ambas as requisições
    return forkJoin([pokemon, name]).subscribe(
      res => {
        // Quando ambas as requisições são bem-sucedidas, armazena as respostas no objeto pokemon
        this.pokemon = res;

         // Define isLoading como true para indicar que o carregamento foi concluído
        this.isLoading = true;
      },
      error => {
        // Em caso de erro em qualquer uma das requisições, define apiError como true
        this.apiError = true;
      }
    );
  }
}



