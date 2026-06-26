import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  imports: [RouterLink],
  templateUrl: './pokemon-details.html',
  styleUrl: './pokemon-details.css',
})
export class PokemonDetails implements OnInit {
  pokemon: any = null;
  species: any = null;

  stats: any[] = [];
  totalStats = 0;
  
  typeImages: Record<string, string> = {
    normal:
      'https://raw.githubusercontent.com/jeivyyy/LetterDEX/master/src/app/assets/types-imgs/normal-type.png',
    fire: 
      'https://raw.githubusercontent.com/jeivyyy/LetterDEX/master/src/app/assets/types-imgs/fire-type.png',
    water:
      'https://raw.githubusercontent.com/jeivyyy/LetterDEX/master/src/app/assets/types-imgs/water-type.png',
    electric:
      'https://raw.githubusercontent.com/jeivyyy/LetterDEX/master/src/app/assets/types-imgs/electric-type.png',
    grass:
      'https://raw.githubusercontent.com/jeivyyy/LetterDEX/master/src/app/assets/types-imgs/grass-type.png',
    ice: 
      'https://raw.githubusercontent.com/jeivyyy/LetterDEX/master/src/app/assets/types-imgs/ice-type.png',
    fighting:
      'https://raw.githubusercontent.com/jeivyyy/LetterDEX/master/src/app/assets/types-imgs/fighting-type.png',
    poison:
      'https://raw.githubusercontent.com/jeivyyy/LetterDEX/master/src/app/assets/types-imgs/poison-type.png',
    ground:
      'https://raw.githubusercontent.com/jeivyyy/LetterDEX/master/src/app/assets/types-imgs/ground-type.png',
    flying:
      'https://raw.githubusercontent.com/jeivyyy/LetterDEX/master/src/app/assets/types-imgs/flying-type.png',
    psychic:
      'https://raw.githubusercontent.com/jeivyyy/LetterDEX/master/src/app/assets/types-imgs/psychic-type.png',
    bug:
      'https://raw.githubusercontent.com/jeivyyy/LetterDEX/master/src/app/assets/types-imgs/bug-type.png',
    rock: 
      'https://raw.githubusercontent.com/jeivyyy/LetterDEX/master/src/app/assets/types-imgs/rock-type.png',
    ghost:
      'https://raw.githubusercontent.com/jeivyyy/LetterDEX/master/src/app/assets/types-imgs/ghost-type.png',
    dragon:
      'https://raw.githubusercontent.com/jeivyyy/LetterDEX/master/src/app/assets/types-imgs/dragon-type.png',
    dark: 
      'https://raw.githubusercontent.com/jeivyyy/LetterDEX/master/src/app/assets/types-imgs/dark-type.png',
    steel:
      'https://raw.githubusercontent.com/jeivyyy/LetterDEX/master/src/app/assets/types-imgs/metal-type.png',
    fairy:
      'https://raw.githubusercontent.com/jeivyyy/LetterDEX/master/src/app/assets/types-imgs/fairy-type.png',
  };

  constructor(private route: ActivatedRoute) {}

  

  async getDetails(pokemonKey: string | number) {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonKey}`;

    const pokemonResp = await fetch(pokemonUrl);

    if (!pokemonResp.ok) {
      console.error(`Pokémon não encontrado: ${pokemonKey}`);
      return;
    }

    const pokemonData = await pokemonResp.json();

    const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonData.species.name}`;
    const speciesResp = await fetch(speciesUrl);
    const speciesData = await speciesResp.json();

    this.species = speciesData;

    this.pokemon = {
      id: pokemonData.id,
      displayId: pokemonData.id.toString().padStart(3, '0'),
      name: this.capitalize(pokemonData.name),
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonData.id}.png`,
      types: pokemonData.types.map((item: any) => item.type.name),
      abilities: pokemonData.abilities.map((item: any) => ({
        name: this.capitalize(item.ability.name),
        hidden: item.is_hidden,
      })),
    };

    this.stats = pokemonData.stats.map((item: any) => ({
      name: item.stat.name,
      label: this.getStatLabel(item.stat.name),
      value: item.base_stat,
    }));

    this.totalStats = this.stats.reduce((total, stat) => total + stat.value, 0);
  }

  getStatLabel(statName: string) {
    const labels: any = {
      hp: 'HP',
      attack: 'Atk',
      defense: 'Def',
      'special-attack': 'Sp-Atk',
      'special-defense': 'Sp-Def',
      speed: 'Spd',
    };

    return labels[statName] ?? statName;
  }

  statPercent(value: number) {
    return Math.min((value / 255) * 100, 100);
  }

  capitalize(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  getTypeBackground(type: string): string {
    const imageUrl = this.typeImages[type];

    if (!imageUrl) {
      return 'none';
    }

    return `url("${imageUrl}")`;
  }
  async ngOnInit() {
    const pokemonKey =
      this.route.snapshot.paramMap.get('id') ?? this.route.snapshot.paramMap.get('name');

    if (!pokemonKey) {
      return;
    }

    await this.getDetails(pokemonKey);
  }

}
