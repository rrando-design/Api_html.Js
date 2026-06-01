const boton = document.getElementById("buscar");
const pokemonDiv = document.getElementById("pokemon");


boton.addEventListener("click", () => {
    const nombrePokemon = document
        .getElementById("PonerPokemon")
        .value
        .toLowerCase();

    mostrarPokemon(nombrePokemon);
});
async function mostrarPokemon(nombrePokemon) {
    try {
        const respuesta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${nombre}`
        );

        if (!respuesta.ok) {
            throw new Error("Pokemon no encontrado");
        }

        const data = await respuesta.json();

        pokemonDiv.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}">
        `;
    } catch (error) {
        console.error(error);
    }
}

