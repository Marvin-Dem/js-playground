localStorage.setItem("myFavPoke", "Gengar");

const testObj = {
    name: "Gengar",
    pokeType: "Ghost,Poison",
};

const testObjString = JSON.stringify(testObj);
localStorage.setItem("testObj", testObjString);
