import type { Pokemon } from "./utils/poketypefilter";

import type { Type } from "./utils/poketypefilter";

import { pokedex } from "./utils/poketypefilter";

import { Button } from "./utils/poketypefilter";

import { GetPokemonByType } from "./utils/poketypefilter";

const element = document.body;

const header = document.createElement("div");
header.innerText = "Show Pokemon with the following type:";
header.classList.add("header");
element.appendChild(header);

const buttonWrapper = document.createElement("div");
element.appendChild(buttonWrapper);

const button: Button = document.createElement("button");
button.label = "water";
button.classList.add("button");
button.onClick = GetPokemonByType("water");
buttonWrapper.appendChild(button);

const buttonTypes = [
    "water",
    "fire",
    "grass",
    "normal",
    "flying",
    "poison",
    "ghost",
    "psychic",
    "ground",
    "dragon",
    "ice",
    "bug",
    "fighting",
    "rock",
    "electric",
];

const pokemonListWrapper = document.createElement("div");
element.appendChild(pokemonListWrapper);
pokemonListWrapper.id = "pokemon-list-wrapper";

function PokemonCard(pokemon: Pokemon) {
    const completeCard = document.createElement("div");
    completeCard.classList.add("general");

    const pokeName = document.createElement("div");
    pokeName.innerText = pokemon.name;
    pokeName.classList.add("poke-name");
    completeCard.appendChild(pokeName);

    for (let type of pokemon.types) {
        const pokeType = document.createElement("p");
        pokeType.innerText = type;
        pokeType.classList.add("poke-type");
        completeCard.appendChild(pokeType);
        if (type === pokemon.types[0]) {
            completeCard.classList.add(type);
        }
    }

    return completeCard;
}

for (let loop of pokedex) {
    const completeCard = PokemonCard(loop);
    pokemonListWrapper.appendChild(completeCard);
}
