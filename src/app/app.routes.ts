import { Routes } from '@angular/router';
import { Pokemon } from './components/pokemon/pokemon';
import { PokemonDetails } from './components/pokemon-details/pokemon-details';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemon',
    pathMatch: 'full'
  },
  {
    path: 'pokemon',
    component: Pokemon
  },
  {
    path: 'pokemon/:id',
    component: PokemonDetails
  }
];