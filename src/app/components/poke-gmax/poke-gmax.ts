import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-poke-gmax',
  imports: [RouterLink],
  templateUrl: './poke-gmax.html',
  styleUrl: './poke-gmax.css',
})
export class Gmax implements OnInit {
  gmaxPokemons: any[] = [];

  gmaxIcon =
    'https://raw.githubusercontent.com/jeivyyy/LetterDEX/master/src/app/components/poke-gmax/icon/Mezastar_Dynamax_icon.png';

  gmaxForms = [
    { apiName: 'venusaur-gmax' },
    { apiName: 'charizard-gmax' },
    { apiName: 'blastoise-gmax' },
    { apiName: 'butterfree-gmax' },
    { apiName: 'pikachu-gmax' },
    { apiName: 'meowth-gmax' },
    { apiName: 'machamp-gmax' },
    { apiName: 'gengar-gmax' },
    { apiName: 'kingler-gmax' },
    { apiName: 'lapras-gmax' },
    { apiName: 'eevee-gmax' },
    { apiName: 'snorlax-gmax' },
    { apiName: 'garbodor-gmax' },
    { apiName: 'melmetal-gmax' },
    { apiName: 'rillaboom-gmax' },
    { apiName: 'cinderace-gmax' },
    { apiName: 'inteleon-gmax' },
    { apiName: 'corviknight-gmax' },
    { apiName: 'orbeetle-gmax' },
    { apiName: 'drednaw-gmax' },
    { apiName: 'coalossal-gmax' },
    { apiName: 'flapple-gmax' },
    { apiName: 'appletun-gmax' },
    { apiName: 'sandaconda-gmax' },
    { apiName: 'toxtricity-amped-gmax' },
    { apiName: 'toxtricity-low-key-gmax' },
    { apiName: 'centiskorch-gmax' },
    { apiName: 'hatterene-gmax' },
    { apiName: 'grimmsnarl-gmax' },
    { apiName: 'alcremie-gmax' },
    { apiName: 'copperajah-gmax' },
    { apiName: 'duraludon-gmax' },
    { apiName: 'urshifu-single-strike-gmax' },
    { apiName: 'urshifu-rapid-strike-gmax' },
  ];

  async ngOnInit() {
    await this.fetchGmaxPokemons();
  }

  async fetchGmaxPokemons() {
    const requests = this.gmaxForms.map((gmax) =>
      this.getGmaxPokemon(gmax.apiName)
    );

    await Promise.all(requests);

    this.gmaxPokemons.sort((a, b) => Number(a.displayId) - Number(b.displayId));
  }

  async getGmaxPokemon(apiName: string) {
    const url = `https://pokeapi.co/api/v2/pokemon/${apiName}`;
    const resp = await fetch(url);

    if (!resp.ok) {
      console.error(`Erro ao buscar Gigantamax: ${apiName}`);
      return;
    }

    const pokemon = await resp.json();

    const pokemonTypes: string[] = pokemon.types.map(
      (item: any) => item.type.name
    );

    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

    this.gmaxPokemons.push({
      id: pokemon.id,
      routeName: pokemon.name,
      displayId: this.getSpeciesIdFromUrl(pokemon.species.url)
        .toString()
        .padStart(3, '0'),
      name: this.formatGmaxName(pokemon.name),
      image: image,
      type1: pokemonTypes[0],
      type2: pokemonTypes[1] ?? '',
      gmaxIcon: this.gmaxIcon,
    });
  }

  getSpeciesIdFromUrl(url: string): number {
    const parts = url.split('/').filter(Boolean);
    return Number(parts[parts.length - 1]);
  }

  formatGmaxName(name: string): string {
    return name
      .replace('-gmax', ' G-Max')
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}