import { Pokemon, Type } from "./poketypefilter";

export async function getAllPokemon() {
    const allPokemon: Pokemon[] = [];
    for (let pokeIndex = 1; pokeIndex <= 386; pokeIndex++) {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokeIndex}`
        );
        const pokedata = await response.json();
        const types: Type[] = [];
        for (let pokeType of pokedata.types) {
            const type = pokeType.type.name;
            types.push(type);
        }
        const pokemon: Pokemon = {
            name: pokedata.name,
            types: types,
            id: `#${pokedata.id}`,
        };
        allPokemon.push(pokemon);
    }

    return allPokemon;
}
