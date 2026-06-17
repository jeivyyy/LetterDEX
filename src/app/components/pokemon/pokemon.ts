import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  imports: [],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css',
})


export class Pokemon implements OnInit {

  pokemons: any[] = []
  pokemonCount = 151

  colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
  }

  firstType = Object.keys(this.colors)
  secondType = Object.keys(this.colors)

  
  // confirms that the system is working and get the
  // especific value that it needs (.name)
  async getPokemon(id: number) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const resp = await fetch(url);
    const pokemon = await resp.json();

    const pokemonTypes: string[] = 
      pokemon.types.map((type: any) => type.type.name)

      this.pokemons.push({
        id: pokemon.id.toString().padStart(3, '0'),
        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`,
        type1: pokemonTypes[0],
        type2: pokemonTypes[1] ?? ''
      })
  } 

  // runs through the api's list and fetch the right data, based on the 'id'
  async fetchPokemon(){
    for (let i = 1; i <= this.pokemonCount; i++) {
      await this.getPokemon(i)
    }
  } 

  ngOnInit() {
    this.fetchPokemon();
  }
  
}