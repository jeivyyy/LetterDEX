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

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      return;
    }

    await this.getDetails(id);
  }

  async getDetails(id: number) {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}`;

    const pokemonResp = await fetch(pokemonUrl);
    const speciesResp = await fetch(speciesUrl);

    const pokemonData = await pokemonResp.json();
    const speciesData = await speciesResp.json();

    this.species = speciesData;

    this.pokemon = {
      id: pokemonData.id,
      displayId: pokemonData.id.toString().padStart(3, '0'),
      name: this.capitalize(pokemonData.name),
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonData.id}.png`,
      heightM: pokemonData.height / 10,
      weightKg: pokemonData.weight / 10,
     types: pokemonData.types.map((item: any) => item.type.name.toUpperCase()),
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
}
