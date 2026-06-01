const boton= document.getElementById("buscar");
const pokemonDiv= document.getElementById("pokemon");


boton.addEventListener("click", async()=>{
    //esto llama al PonerPokemon, obtiene lo que tiene la caja de texto, y el lower lo convierte todo en minuscula
    const nombrePokemon=document.getElementById("PonerPokemon").value.toLowerCase();
   
    try{
        
    const respuesta=await fetch(`https://corsproxy.io/?https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
     if (respuesta.ok) {
     throw new Error("Usuario no encontrado 👤");
       
    console.log(respuesta);
    const data = await respuesta.json();
    console.log(data);
    pokemonDiv.innerHTML=` <h2>${data.name}</h2>
    <img src="${data.sprites.front_default}">
    `
    } catch(error){ 
        mostrarMensaje(error.message);
    }
}
    MostrarPokemon()
          
});
