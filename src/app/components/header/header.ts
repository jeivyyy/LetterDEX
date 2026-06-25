import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  indexPokemon = 1;
  pokemonSprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';

changePokemonImg() {
  
  this.indexPokemon++;
  this.pokemonSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.indexPokemon}.png`;
  }


  
}
