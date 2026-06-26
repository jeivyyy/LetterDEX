import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-poke-megas',
  imports: [RouterLink],
  templateUrl: './poke-megas.html',
  styleUrl: './poke-megas.css',
})
export class PokeMegas implements OnInit {
  megas: any[] = [];
  megaEvolutionSymbol = 'https://raw.githubusercontent.com/jeivyyy/LetterDEX/master/src/app/components/poke-megas/icon/Mega_Evolution_symbol.png';

  megaForms = [
    // Debuted in: XY
    { apiName: 'venusaur-mega' },
    { apiName: 'charizard-mega-x' },
    { apiName: 'charizard-mega-y' },
    { apiName: 'blastoise-mega' },
    { apiName: 'alakazam-mega' },
    { apiName: 'gengar-mega' },
    { apiName: 'kangaskhan-mega' },
    { apiName: 'pinsir-mega' },
    { apiName: 'gyarados-mega' },
    { apiName: 'aerodactyl-mega' },
    { apiName: 'mewtwo-mega-x' },
    { apiName: 'mewtwo-mega-y' },
    { apiName: 'ampharos-mega' },
    { apiName: 'scizor-mega' },
    { apiName: 'heracross-mega' },
    { apiName: 'houndoom-mega' },
    { apiName: 'tyranitar-mega' },
    { apiName: 'blaziken-mega' },
    { apiName: 'gardevoir-mega' },
    { apiName: 'mawile-mega' },
    { apiName: 'aggron-mega' },
    { apiName: 'medicham-mega' },
    { apiName: 'manectric-mega' },
    { apiName: 'banette-mega' },
    { apiName: 'absol-mega' },
    { apiName: 'latias-mega' },
    { apiName: 'latios-mega' },
    { apiName: 'garchomp-mega' },
    { apiName: 'lucario-mega' },
    { apiName: 'abomasnow-mega' },

    // Debuted in: ORAS
    { apiName: 'beedrill-mega' },
    { apiName: 'pidgeot-mega' },
    { apiName: 'slowbro-mega' },
    { apiName: 'steelix-mega' },
    { apiName: 'sceptile-mega' },
    { apiName: 'swampert-mega' },
    { apiName: 'sableye-mega' },
    { apiName: 'sharpedo-mega' },
    { apiName: 'camerupt-mega' },
    { apiName: 'altaria-mega' },
    { apiName: 'glalie-mega' },
    { apiName: 'salamence-mega' },
    { apiName: 'metagross-mega' },
    { apiName: 'rayquaza-mega' },
    { apiName: 'lopunny-mega' },
    { apiName: 'gallade-mega' },
    { apiName: 'audino-mega' },
    { apiName: 'diancie-mega' },

    // Debuted in: Legends: Z-A
    { apiName: 'clefable-mega' },
    { apiName: 'victreebel-mega' },
    { apiName: 'starmie-mega' },
    { apiName: 'dragonite-mega' },
    { apiName: 'meganium-mega' },
    { apiName: 'feraligatr-mega' },
    { apiName: 'skarmory-mega' },
    { apiName: 'froslass-mega' },
    { apiName: 'emboar-mega' },
    { apiName: 'excadrill-mega' },
    { apiName: 'scolipede-mega' },
    { apiName: 'scrafty-mega' },
    { apiName: 'eelektross-mega' },
    { apiName: 'chandelure-mega' },
    { apiName: 'chesnaught-mega' },
    { apiName: 'delphox-mega' },
    { apiName: 'greninja-mega' },
    { apiName: 'pyroar-mega' },
    { apiName: 'floette-eternal-mega' },
    { apiName: 'malamar-mega' },
    { apiName: 'barbaracle-mega' },
    { apiName: 'dragalge-mega' },
    { apiName: 'hawlucha-mega' },
    { apiName: 'zygarde-complete-mega' },
    { apiName: 'drampa-mega' },
    { apiName: 'falinks-mega' },

    // Legends Z-A: Mega Dimension
    { apiName: 'raichu-mega-x' },
    { apiName: 'raichu-mega-y' },
    { apiName: 'chimecho-mega' },
    { apiName: 'absol-mega-z' },
    { apiName: 'staraptor-mega' },
    { apiName: 'garchomp-mega-z' },
    { apiName: 'lucario-mega-z' },
    { apiName: 'heatran-mega' },
    { apiName: 'darkrai-mega' },
    { apiName: 'golurk-mega' },
    { apiName: 'meowstic-mega' },
    { apiName: 'crabominable-mega' },
    { apiName: 'golisopod-mega' },
    { apiName: 'magearna-mega' },
    { apiName: 'magearna-original-mega' },
    { apiName: 'zeraora-mega' },
    { apiName: 'scovillain-mega' },
    { apiName: 'glimmora-mega' },
    { apiName: 'tatsugiri-curly-mega' },
    { apiName: 'tatsugiri-droopy-mega' },
    { apiName: 'tatsugiri-stretchy-mega' },
    { apiName: 'baxcalibur-mega' },
  ];

  async getMegaPokemon(apiName: string) {
    const url = `https://pokeapi.co/api/v2/pokemon/${apiName}`;
    const resp = await fetch(url);
    if (!resp.ok) {
      console.error(`Erro ao buscar Mega Pokémon: ${apiName}`);
      return;
    }
    const pokemon = await resp.json();

    const pokemonTypes: string[] = pokemon.types.map((item: any) => item.type.name);
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;
    

    this.megas.push({
      id: pokemon.id,
      routeName: pokemon.name,
      displayId: this.getSpeciesIdFromUrl(pokemon.species.url).toString().padStart(3, '0'),
      name: this.formatMegaName(pokemon.name),
      image: image,
      type1: pokemonTypes[0],
      type2: pokemonTypes[1] ?? '',
      megaIcon: this.megaEvolutionSymbol
    });
  }
  
  async fetchMegas() {
    const requests = this.megaForms.map((mega) => this.getMegaPokemon(mega.apiName));

    await Promise.all(requests);

    this.megas.sort((a, b) => Number(a.displayId) - Number(b.displayId));
  }

  getSpeciesIdFromUrl(url: string): number {
    const parts = url.split('/').filter(Boolean);
    return Number(parts[parts.length - 1]);
  }

  formatMegaName(name: string): string {
    return name
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  formatStoneName(stone: string): string {
    return stone
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  getStoneImage(stone: string): string {
    return `assets/mega-stones/${stone}.png`;
  }

  ngOnInit() { 
    this.fetchMegas();
  }
}
