const boton = document.getElementById("buscar");
const pokemonDiv = document.getElementById("pokemon");

boton.addEventListener("click", async () => {
    const nombrePokemon = document
        .getElementById("PonerPokemon")
        .value
        .toLowerCase();

    const respuesta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`
    );

    const data = await respuesta.json();

    pokemonDiv.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}">
    `;
});
