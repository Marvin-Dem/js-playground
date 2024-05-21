export type Pokemon = {
    name: string;
    types: Type[];
    // dexnumber: string;
};
export type Type =
    | "water"
    | "fire"
    | "grass"
    | "normal"
    | "flying"
    | "poison"
    | "ghost"
    | "psychic"
    | "ground"
    | "dragon"
    | "ice"
    | "bug"
    | "fighting"
    | "rock"
    | "electric";

export function getPokemonByType(type: Type) {
    let pokemonList: Pokemon[] = [];
    for (let pokemon of pokedex) {
        for (let pokeType of pokemon.types) {
            if (type === pokeType) {
                pokemonList.push(pokemon);
            }
        }
    }
    return pokemonList;
}
export const pokedex: Pokemon[] = [
    {
        name: "Bulbasaur",
        types: ["grass", "poison"],
        // dexnumber: "#001",
    },
    {
        name: "Ivysaur",
        types: ["grass", "poison"],
        // dexnumber: "#002",
    },
    {
        name: "Venusaur",
        types: ["grass", "poison"],
        // dexnumber: "#003",
    },
    {
        name: "Charmander",
        types: ["fire"],
        // dexnumber: "#004",
    },
    {
        name: "Charmeleon",
        types: ["fire"],
        // dexnumber: "#005",
    },
    {
        name: "Charizard",
        types: ["fire", "flying"],
        // dexnumber: "#006",
    },
    {
        name: "Squirtle",
        types: ["water"],
        // dexnumber: "#007",
    },
    {
        name: "Wartortle",
        types: ["water"],
        // dexnumber: "#008",
    },
    {
        name: "Blastoise",
        types: ["water"],
        // dexnumber: "#009",
    },
    {
        name: "Caterpie",
        types: ["bug"],
        // dexnumber: "#010",
    },
    {
        name: "Metapod",
        types: ["bug"],
        // dexnumber: "#011",
    },
    {
        name: "Butterfree",
        types: ["bug", "flying"],
        // dexnumber: "#012",
    },
    {
        name: "Weedle",
        types: ["bug", "poison"],
        // dexnumber: "#013",
    },
    {
        name: "Kakuna",
        types: ["bug", "poison"],
        // dexnumber: "#014",
    },
    {
        name: "Beedrill",
        types: ["bug", "poison"],
        // dexnumber: "015",
    },
    {
        name: "Pidgey",
        types: ["normal", "flying"],
        // dexnumber: "#016",
    },
    {
        name: "Pidgeotto",
        types: ["normal", "flying"],
        // dexnumber: "#017",
    },
    {
        name: "Pidgeot",
        types: ["normal", "flying"],
        // dexnumber: "#018",
    },
    {
        name: "Rattata",
        types: ["normal"],
        // dexnumber: "#019",
    },
    {
        name: "Raticate",
        types: ["normal"],
        // dexnumber: "#020",
    },
    {
        name: "Spearow",
        types: ["normal", "flying"],
        // dexnumber: "#021",
    },
    {
        name: "Fearow",
        types: ["normal", "flying"],
        // dexnumber: "#022",
    },
    {
        name: "Ekans",
        types: ["poison"],
        // dexnumber: "#023",
    },
    {
        name: "Arbok",
        types: ["poison"],
        // dexnumber: "#024",
    },
    {
        name: "Pikachu",
        types: ["electric"],
        // dexnumber: "#025",
    },
    {
        name: "Raichu",
        types: ["electric"],
        // dexnumber: "#026",
    },
    {
        name: "Sandshrew",
        types: ["ground"],
        // dexnumber: "#027",
    },
    {
        name: "Sandslash",
        types: ["ground"],
        // dexnumber: "#028",
    },
    {
        name: "Nidoran♀",
        types: ["poison"],
        // dexnumber: "#029",
    },
    {
        name: "Nidorina",
        types: ["poison"],
        // dexnumber: "#030",
    },
    {
        name: "Nidoqueen",
        types: ["poison", "ground"],
        // dexnumber: "#031",
    },
    {
        name: "Nidoran♂",
        types: ["poison"],
        // dexnumber: "#032",
    },
    {
        name: "Nidorino",
        types: ["poison"],
        // dexnumber: "#033",
    },
    {
        name: "Nidoking",
        types: ["poison", "ground"],
        // dexnumber: "#034",
    },
    {
        name: "Clefairy",
        types: ["normal"],
        // dexnumber: "#035",
    },
    {
        name: "Clefable",
        types: ["normal"],
        // dexnumber: "#036",
    },
    {
        name: "Vulpix",
        types: ["fire"],
        // dexnumber: "#037",
    },
    {
        name: "Ninetales",
        types: ["fire"],
        // dexnumber: "038",
    },
    {
        name: "Jigglypuff",
        types: ["normal"],
        // dexnumber: "#039",
    },
    {
        name: "Wigglytuff",
        types: ["normal"],
        // dexnumber: "#040",
    },
    {
        name: "Zubat",
        types: ["poison", "flying"],
        // dexnumber: "#041",
    },
    {
        name: "Golbat",
        types: ["poison", "flying"],
        // dexnumber: "#042",
    },
    {
        name: "Oddish",
        types: ["grass", "poison"],
        // dexnumber: "#043",
    },
    {
        name: "Gloom",
        types: ["grass", "poison"],
        // dexnumber: "#044",
    },
    {
        name: "Vileplume",
        types: ["grass", "poison"],
        // dexnumber: "#045",
    },
    {
        name: "Paras",
        types: ["bug", "grass"],
        // dexnumber: "#046",
    },
    {
        name: "Parasect",
        types: ["bug", "grass"],
        // dexnumber: "#047",
    },
    {
        name: "Venonat",
        types: ["bug", "poison"],
        // dexnumber: "#048",
    },
    {
        name: "Venomoth",
        types: ["bug", "poison"],
        // dexnumber: "#049",
    },
    {
        name: "Diglett",
        types: ["ground"],
        // dexnumber: "#050",
    },
    {
        name: "Dugtrio",
        types: ["ground"],
        // dexnumber: "#051",
    },
    {
        name: "Meowth",
        types: ["normal"],
        // dexnumber: "#052",
    },
    {
        name: "Persian",
        types: ["normal"],
        // dexnumber: "#053",
    },
    {
        name: "Psyduck",
        types: ["water"],
        // dexnumber: "#054",
    },
    {
        name: "Golduck",
        types: ["water"],
        // dexnumber: "#055",
    },
    {
        name: "Mankey",
        types: ["fighting"],
        // dexnumber: "#056",
    },
    {
        name: "Primeape",
        types: ["fighting"],
        // dexnumber: "#057",
    },
    {
        name: "Growlithe",
        types: ["fire"],
        // dexnumber: "#058",
    },
    {
        name: "Arcanine",
        types: ["fire"],
        // dexnumber: "#059",
    },
    {
        name: "Poliwag",
        types: ["water"],
        // dexnumber: "#060",
    },
    {
        name: "Poliwhirl",
        types: ["water"],
        // dexnumber: "#061",
    },
    {
        name: "Poliwrath",
        types: ["water", "fighting"],
        // dexnumber: "#062",
    },
    {
        name: "Abra",
        types: ["psychic"],
        // dexnumber: "#063",
    },
    {
        name: "Kadabra",
        types: ["psychic"],
        // dexnumber: "#064",
    },
    {
        name: "Alakazam",
        types: ["psychic"],
        // dexnumber: "#065",
    },
    {
        name: "Machop",
        types: ["fighting"],
        // dexnumber: "#066",
    },
    {
        name: "Machoke",
        types: ["fighting"],
        // dexnumber: "#067",
    },
    {
        name: "Machamp",
        types: ["fighting"],
        // dexnumber: "#068",
    },
    {
        name: "Bellsprout",
        types: ["grass", "poison"],
        // dexnumber: "#069",
    },
    {
        name: "Weepinbell",
        types: ["grass", "poison"],
        // dexnumber: "#070",
    },
    {
        name: "Victreebel",
        types: ["grass", "poison"],
        // dexnumber: "#071",
    },
    {
        name: "Tentacool",
        types: ["water", "poison"],
        // dexnumber: "#072",
    },
    {
        name: "Tentacruel",
        types: ["water", "poison"],
        // dexnumber: "#073",
    },
    {
        name: "Geodude",
        types: ["rock", "ground"],
        // dexnumber: "#074",
    },
    {
        name: "Graveler",
        types: ["rock", "ground"],
        // dexnumber: "#075",
    },
    {
        name: "Golem",
        types: ["rock", "ground"],
        // dexnumber: "#076",
    },
    {
        name: "Ponyta",
        types: ["fire"],
        // dexnumber: "#077",
    },
    {
        name: "Rapidash",
        types: ["fire"],
        // dexnumber: "#078",
    },
    {
        name: "Slowpoke",
        types: ["water", "psychic"],
        // dexnumber: "#079",
    },
    {
        name: "Slowbro",
        types: ["water", "psychic"],
        // dexnumber: "#080",
    },
    {
        name: "Magnemite",
        types: ["electric"],
        // dexnumber: "#081",
    },
    {
        name: "Magneton",
        types: ["electric"],
        // dexnumber: "#082",
    },
    {
        name: "Farfetch'd",
        types: ["normal", "flying"],
        // dexnumber: "#083",
    },
    {
        name: "Doduo",
        types: ["normal", "flying"],
        // dexnumber: "#084",
    },
    {
        name: "Dodrio",
        types: ["normal", "flying"],
        // dexnumber: "#085",
    },
    {
        name: "Seel",
        types: ["water"],
        // dexnumber: "#086",
    },
    {
        name: "Dewgong",
        types: ["water", "ice"],
        // dexnumber: "#087",
    },
    {
        name: "Grimer",
        types: ["poison"],
        // dexnumber: "#088",
    },
    {
        name: "Muk",
        types: ["poison"],
        // dexnumber: "#089",
    },
    {
        name: "Shellder",
        types: ["water"],
        // dexnumber: "#090",
    },
    {
        name: "Cloyster",
        types: ["water", "ice"],
        // dexnumber: "#091",
    },
    {
        name: "Gastly",
        types: ["ghost", "poison"],
        // dexnumber: "#092",
    },
    {
        name: "Haunter",
        types: ["ghost", "poison"],
        // dexnumber: "#093",
    },
    {
        name: "Gengar",
        types: ["ghost", "poison"],
        // dexnumber: "#094",
    },
    {
        name: "Onix",
        types: ["rock", "ground"],
        // dexnumber: "#095",
    },
    {
        name: "Drowzee",
        types: ["psychic"],
        // dexnumber: "#096",
    },
    {
        name: "Hypno",
        types: ["psychic"],
        // dexnumber: "#097",
    },
    {
        name: "Krabby",
        types: ["water"],
        // dexnumber: "#098",
    },
    {
        name: "Kingler",
        types: ["water"],
        // dexnumber: "#099",
    },
    {
        name: "Voltorb",
        types: ["electric"],
        // dexnumber: "#100",
    },
    {
        name: "Electrode",
        types: ["electric"],
        // dexnumber: "#101",
    },
    {
        name: "Exeggcute",
        types: ["grass", "psychic"],
        // dexnumber: "#102",
    },
    {
        name: "Exeggutor",
        types: ["grass", "psychic"],
        // dexnumber: "#103",
    },
    {
        name: "Cubone",
        types: ["ground"],
        // dexnumber: "#104",
    },
    {
        name: "Marowak",
        types: ["ground"],
        // dexnumber: "#105",
    },
    {
        name: "Hitmonlee",
        types: ["fighting"],
        // dexnumber: "#106",
    },
    {
        name: "Hitmonchan",
        types: ["fighting"],
        // dexnumber: "#107",
    },
    {
        name: "Lickitung",
        types: ["normal"],
        // dexnumber: "#108",
    },
    {
        name: "Koffing",
        types: ["poison"],
        // dexnumber: "#109",
    },
    {
        name: "Weezing",
        types: ["poison"],
        // dexnumber: "#110",
    },
    {
        name: "Rhyhorn",
        types: ["ground", "rock"],
        // dexnumber: "#111",
    },
    {
        name: "Rhydon",
        types: ["ground", "rock"],
        // dexnumber: "#112",
    },
    {
        name: "Chansey",
        types: ["normal"],
        // dexnumber: "#113",
    },
    {
        name: "Tangela",
        types: ["grass"],
        // dexnumber: "#114",
    },
    {
        name: "Kangaskhan",
        types: ["normal"],
        // dexnumber: "#115",
    },
    {
        name: "Horsea",
        types: ["water"],
        // dexnumber: "#116",
    },
    {
        name: "Seadra",
        types: ["water"],
        // dexnumber: "#117",
    },
    {
        name: "Goldeen",
        types: ["water"],
        // dexnumber: "#118",
    },
    {
        name: "Seaking",
        types: ["water"],
        // dexnumber: "#119",
    },
    {
        name: "Staryu",
        types: ["water"],
        // dexnumber: "#120",
    },
    {
        name: "Starmie",
        types: ["water", "psychic"],
        // dexnumber: "#121",
    },
    {
        name: "Mr.Mime",
        types: ["psychic"],
        // dexnumber: "#122",
    },
    {
        name: "Scyther",
        types: ["bug", "flying"],
        // dexnumber: "#123",
    },
    {
        name: "Jynx",
        types: ["ice", "psychic"],
        // dexnumber: "#124",
    },
    {
        name: "Electabuzz",
        types: ["electric"],
        // dexnumber: "#125",
    },
    {
        name: "Magmar",
        types: ["fire"],
        // dexnumber: "#126",
    },
    {
        name: "Pinsir",
        types: ["bug"],
        // dexnumber: "#127",
    },
    {
        name: "Tauros",
        types: ["normal"],
        // dexnumber: "#128",
    },
    {
        name: "Magicarp",
        types: ["water"],
        // dexnumber: "#129",
    },
    {
        name: "Gyarados",
        types: ["water", "flying"],
        // dexnumber: "#130",
    },
    {
        name: "Lapras",
        types: ["water", "ice"],
        // dexnumber: "#131",
    },
    {
        name: "Ditto",
        types: ["normal"],
        // dexnumber: "#132",
    },
    {
        name: "Eevee",
        types: ["normal"],
        // dexnumber: "#133",
    },
    {
        name: "Vaporeon",
        types: ["water"],
        // dexnumber: "#134",
    },
    {
        name: "Jolteon",
        types: ["electric"],
        // dexnumber: "#135",
    },
    {
        name: "Flareon",
        types: ["fire"],
        // dexnumber: "#136",
    },
    {
        name: "Porygon",
        types: ["normal"],
        // dexnumber: "#137",
    },
    {
        name: "Omanyte",
        types: ["rock", "water"],
        // dexnumber: "#138",
    },
    {
        name: "Omastar",
        types: ["rock", "water"],
        // dexnumber: "#139",
    },
    {
        name: "Kabuto",
        types: ["rock", "water"],
        // dexnumber: "#140",
    },
    {
        name: "Kabutops",
        types: ["rock", "water"],
        // dexnumber: "#141",
    },
    {
        name: "Aerodactyl",
        types: ["rock", "flying"],
        // dexnumber: "#142",
    },
    {
        name: "Snorlax",
        types: ["normal"],
        // dexnumber: "#143",
    },
    {
        name: "Arcticuno",
        types: ["ice", "flying"],
        // dexnumber: "#144",
    },
    {
        name: "Zapdos",
        types: ["electric", "flying"],
        // dexnumber: "#145",
    },
    {
        name: "Moltres",
        types: ["fire", "flying"],
        // dexnumber: "#146",
    },
    {
        name: "Dratini",
        types: ["dragon"],
        // dexnumber: "#147",
    },
    {
        name: "Dragonair",
        types: ["dragon"],
        // dexnumber: "#148",
    },
    {
        name: "Dragonite",
        types: ["dragon", "flying"],
        // dexnumber: "#149",
    },
    {
        name: "Mewtwo",
        types: ["psychic"],
        // dexnumber: "#150",
    },
    {
        name: "Mew",
        types: ["psychic"],
        // dexnumber: "#151",
    },
];
