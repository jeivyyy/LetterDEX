import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './components/pokemon/pokemon';
import { Header } from './components/header/header';
import { PokemonDetails } from './components/pokemon-details/pokemon-details';
import { PokeMegas } from './components/poke-megas/poke-megas';
import { Gmax } from './components/poke-gmax/poke-gmax';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pokemon, Header, PokeMegas, PokemonDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('LetterDEX');
}
