import { Routes } from '@angular/router';

import { Auth } from './components/auth/auth';
import { Header } from './components/header/header';
import { Pokemon } from './components/pokemon/pokemon';
import { PokemonDetails } from './components/pokemon-details/pokemon-details';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'header',
  //   pathMatch: 'full',
  // },

  // {
  //   path: 'auth',
  //   component: Auth,
  // },

  // {
  //   path: 'header',
  //   component: Header,
  // },

  {
    path: 'pokemon/:id',
    component: PokemonDetails,
  },

  {
    path: 'pokemon',
    component: Pokemon,
  },

  // {
  //   path: '**',
  //   redirectTo: 'header',
  // },
];