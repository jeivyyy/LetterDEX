import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';


@Component({
  selector: 'app-pokemon-details',
  imports: [Pokemon],
  templateUrl: './pokemon-details.html',
  styleUrl: './pokemon-details.css',
})
export class PokemonDetails {
}
