import { PokemonClient } from "pokenode-ts";

(async () => {
    const api = new PokemonClient();

    await api
        .getPokemonByName("gengar")
        .then((data) => console.log(data.name))
        .catch((error) => console.error(error));
})();
