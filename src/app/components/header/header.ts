import { Component } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';

@Component({
  selector: 'app-header',
  imports: [Pokemon],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
