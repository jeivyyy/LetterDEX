# LetterDEX

LetterDEX is a visual Pokédex built with **Angular**, focused on Pokémon forms, type identity, base stats, comments and special transformations such as **Mega Evolution** and **Gigantamax**.

The project uses data from the **PokeAPI** and displays Pokémon through a card-based interface with rounded layouts, soft shadows, animated assets, type backgrounds and interactive details pages.

---

## Preview

LetterDEX is organized into different pages:

* **Header**: main navigation page.
* **Pokédex**: displays the first 151 Pokémon.
* **Mega**: displays Mega Evolution forms.
* **G-Max**: displays Gigantamax forms.
* **Details**: displays Pokémon image, types, abilities, base stats and comments.
* **About**: explains the project purpose and technologies.

---

## Features

### Pokédex

The Pokédex page loads the first 151 Pokémon and displays each one in a card format with:

* Pokémon number
* Name
* Sprite
* Primary type
* Secondary type, when available

Each card redirects the user to a details page.

---

### Mega Evolution

The Mega page lists Mega Evolution forms using a custom card layout based on the main Pokédex style.

Each Mega card includes:

* Mega Pokémon sprite
* Name
* Types
* Mega Evolution symbol
* Route navigation to the details page

Example route:

```txt
/megas/charizard-mega-x
```

---

### Gigantamax

The G-Max page follows the same visual pattern as the Mega page, but displays Gigantamax forms.

Each G-Max card includes:

* Gigantamax Pokémon sprite
* Name
* Types
* Gigantamax/Dynamax symbol
* Route navigation to the details page

Example route:

```txt
/gmax/pikachu-gmax
```

---

### Pokémon Details

The details page is reused by different routes and can load Pokémon by ID or by form name.

Supported route examples:

```txt
/pokemon/6
/megas/charizard-mega-x
/gmax/pikachu-gmax
```

The details page displays:

* Pokémon image
* Name
* Types with individual background images
* Abilities
* Base stats with progress sliders
* Total base stats
* Comment section

---

### Comment Section

The comment section allows users to write comments directly inside the Pokémon details page.

Comments can be organized using tags:

```txt
#META
#LOVE
#HATE
#FUNFACT
```

A comment can have multiple tags, but each tag can only be selected once per comment.

The filter button allows users to filter visible comments by tag.

---

## Technologies

This project was built with:

* Angular
* TypeScript
* HTML
* CSS
* PokeAPI
* Vercel

---

## API

LetterDEX uses the PokeAPI to fetch Pokémon data.

Main endpoint pattern:

```txt
https://pokeapi.co/api/v2/pokemon/{pokemon}
```
---

## Deployment

The project can be deployed on Vercel.

Basic production flow:

```bash
ng build
```

Then deploy the generated build output according to the Vercel configuration.

---

## Visual Identity

LetterDEX uses a playful interface inspired by Pokémon UI elements.

The main visual choices include:

* Rounded cards
* 3D-style buttons
* Soft shadows
* Type-based backgrounds
* Animated visual assets
* Progress sliders for base stats
* Special icons for Mega and G-Max cards

---

## Credits

Pokémon data and sprites are provided by the PokeAPI and the official PokeAPI sprites repository.

LetterDEX is a personal study project built with Angular.

