import { PokemonClient, type Pokemon } from "pokenode-ts";

const api = new PokemonClient({
    cacheOptions: {
        ttl: 1000 * 60 * 5,
    },
});
export async function getAllPokemon() {
    const promises: Promise<Pokemon>[] = [];
    for (let pokeIndex = 1; pokeIndex <= 386; pokeIndex++) {
        const promise = api.getPokemonById(pokeIndex);
        promises.push(promise);
    }
    const pokeDataList = await Promise.all(promises);
    return pokeDataList;
}
