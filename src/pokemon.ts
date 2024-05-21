import type { Pokemon } from "./utils/poketypefilter";

import type { Type } from "./utils/poketypefilter";

import { pokedex } from "./utils/poketypefilter";

const pokemonCard = document.body;

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

const completeCard = PokemonCard(pokedex[0]);
pokemonCard.appendChild(completeCard);
