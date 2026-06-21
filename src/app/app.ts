import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './components/pokemon/pokemon';
import { Header } from './components/header/header';
import { PokemonDetails } from './components/pokemon/pokemon-details/pokemon-details';
PokemonDetails

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Pokemon, Header, PokemonDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('LetterDEX');
}
