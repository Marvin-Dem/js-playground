import type { Type } from "./utils/poketypefilter";

import { buttonTypes } from "./utils/poketypefilter";

import { getAllPokemon } from "./utils/pokeAPI";

import type { Pokemon } from "pokenode-ts";

const pokedex = await getAllPokemon();
const element = document.body;

const header = document.createElement("div");
header.innerText = "Show Pokemon with the following type:";
header.classList.add("header");
element.appendChild(header);

const buttonWrapper = document.createElement("div");
buttonWrapper.classList.add("button-wrapper");
element.appendChild(buttonWrapper);

function FilterResetButton() {
    const resetButton = Button({
        label: "Reset Filter",
        onClick: function Reset() {
            pokemonListWrapper.innerHTML = "";
            for (let loop of pokedex) {
                const completeCard = PokemonCard({ pokemon: loop });
                pokemonListWrapper.appendChild(completeCard);
            }
        },
        className: "reset",
    });
    return resetButton;
}

header.appendChild(FilterResetButton());

type AudioButtonProps = {
    url: string;
};

function AudioButton({ url }: AudioButtonProps) {
    const playImage = document.createElement("img");
    playImage.src = "https://cdn-icons-png.flaticon.com/512/4028/4028535.png";
    playImage.classList.add("audio-button");
    const customAudioButton = document.createElement("button");
    customAudioButton.classList.add("audio-button");
    customAudioButton.appendChild(playImage);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.volume = 0.1;
    customAudioButton.onclick = () => {
        audio.play();
    };
    customAudioButton.appendChild(audio);
    return customAudioButton;
}

type TypeFilterButtonProps = {
    buttonType: Type;
};
function TypeFilterButton({ buttonType }: TypeFilterButtonProps) {
    const button = Button({
        label: buttonType,
        onClick: function buttonOnclick() {
            pokemonListWrapper.innerHTML = "";
            const array = getPokemonByType(buttonType);
            for (let loop of array) {
                const completeCard = PokemonCard({ pokemon: loop });
                pokemonListWrapper.appendChild(completeCard);
            }
        },
        className: `${buttonType} filter-button`,
    });
    return button;
}

for (let buttonString of buttonTypes) {
    buttonWrapper.appendChild(
        TypeFilterButton({
            buttonType: buttonString,
        })
    );
}

type ButtonProps = {
    label: string;
    onClick: () => void;
    className?: string;
};

function Button({ label, onClick, className }: ButtonProps) {
    const button = document.createElement("button");
    button.innerText = label;
    button.classList.add("button");
    if (className !== undefined) {
        button.classList.add(...className.split(" "));
    }
    button.onclick = onClick;
    return button;
}

const pokemonListWrapper = document.createElement("div");
element.appendChild(pokemonListWrapper);
pokemonListWrapper.id = "pokemon-list-wrapper";

type PokeSpriteProps = {
    url: string;
};

function PokeSprite({ url }: PokeSpriteProps) {
    const sprite = document.createElement("img");
    sprite.src = url;
    return sprite;
}

type PokemonCardProps = {
    pokemon: Pokemon;
};

function PokemonCard({ pokemon }: PokemonCardProps) {
    const completeCard = document.createElement("div");
    completeCard.classList.add("general");

    const pokeName = document.createElement("div");
    pokeName.innerText = pokemon.name;
    pokeName.classList.add("poke-name");
    completeCard.appendChild(pokeName);

    const pokeId = document.createElement("p");
    pokeId.classList.add("poke-number");
    pokeId.innerText = pokemon.id.toString();
    completeCard.appendChild(pokeId);

    const pokeAudio = AudioButton({ url: pokemon.cries.latest });
    completeCard.appendChild(pokeAudio);

    if (pokemon.sprites.front_default !== null) {
        const pokeSprite = PokeSprite({ url: pokemon.sprites.front_default });
        completeCard.appendChild(pokeSprite);
    }
    for (let type of pokemon.types) {
        const pokeType = document.createElement("p");
        pokeType.innerText = type.type.name;
        pokeType.classList.add("poke-type");
        completeCard.appendChild(pokeType);
        if (type === pokemon.types[0]) {
            completeCard.classList.add(type.type.name);
        }
    }

    return completeCard;
}

for (let loop of pokedex) {
    const completeCard = PokemonCard({ pokemon: loop });
    pokemonListWrapper.appendChild(completeCard);
}

function getPokemonByType(type: Type) {
    let pokemonList: Pokemon[] = [];
    for (let pokemon of pokedex) {
        for (let pokeType of pokemon.types) {
            if (type === pokeType.type.name) {
                pokemonList.push(pokemon);
            }
        }
    }
    return pokemonList;
}
