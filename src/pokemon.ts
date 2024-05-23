import type { Pokemon } from "./utils/poketypefilter";

import type { Type } from "./utils/poketypefilter";

import { pokedex } from "./utils/poketypefilter";

import { getPokemonByType } from "./utils/poketypefilter";

import { buttonTypes } from "./utils/poketypefilter";

const element = document.body;

const header = document.createElement("div");
header.innerText = "Show Pokemon with the following type:";
header.classList.add("header");
element.appendChild(header);

const buttonWrapper = document.createElement("div");
buttonWrapper.classList.add("button-wrapper");
element.appendChild(buttonWrapper);

type Button = {
    buttonType: Type;
    // onClick: () => void;
};

function TypeFilterButton(props: Button) {
    const button = document.createElement("button");
    button.innerText = props.buttonType;
    button.classList.add("button");
    button.classList.add(props.buttonType);
    button.onclick = function buttonOnclick() {
        pokemonListWrapper.innerHTML = "";
        const array = getPokemonByType(props.buttonType);
        for (let loop of array) {
            const completeCard = PokemonCard(loop);
            pokemonListWrapper.appendChild(completeCard);
        }
    };
    return button;
}

for (let buttonString of buttonTypes) {
    buttonWrapper.appendChild(
        TypeFilterButton({
            buttonType: buttonString,
        })
    );
}

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
