import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  imports: [RouterLink],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css',
})
export class Pokemon implements OnInit {

  pokemons: any[] = [];
  pokemonCount = 151;

  async getPokemon(id: number) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const resp = await fetch(url);
    const pokemon = await resp.json();

    const pokemonTypes: string[] = pokemon.types.map((item: any) => item.type.name);

    this.pokemons.push({
      id: pokemon.id,
      displayId: pokemon.id.toString().padStart(3, '0'),
      name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`,
      type1: pokemonTypes[0],
      type2: pokemonTypes[1] ?? ''
    });
  }

  async fetchPokemon() {
    for (let i = 1; i <= this.pokemonCount; i++) {
      await this.getPokemon(i);
    }
  }

  ngOnInit() {
    this.fetchPokemon();
  }
}