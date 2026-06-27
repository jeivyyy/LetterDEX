import { Routes } from '@angular/router';
import { Auth } from './components/auth/auth';
import { Header } from './components/header/header';
import { Pokemon } from './components/pokemon/pokemon';
import { PokemonDetails } from './components/pokemon-details/pokemon-details';
import { PokeMegas } from './components/poke-megas/poke-megas';
import { Gmax } from './components/poke-gmax/poke-gmax';



export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },

  {
    path: 'auth',
    component: Auth,
  },

  {
    path: 'header',
    component: Header,
  },

  {
    path: 'pokemon',
    component: Pokemon,
  },

  {
    path: 'pokemon/:id',
    component: PokemonDetails,
  },

  {
    path: 'megas',
    component: PokeMegas,
  },

  {
    path: 'megas/:name',
    component: PokemonDetails,
  },

  {
    path: 'gmax',
    component: Gmax
  },
  {
    path: 'gmax/:name',
    component: PokemonDetails,
  },

  {
    path: '**',
    redirectTo: 'header',
  },
];