function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener("DOMContentLoaded", () => {
  const ramdom = getRandomInt(1, 152);
  fetchData(ramdom);
});

const paintCard = (pokemon) => {
  const flex = document.querySelector(".flex");
  const template = document.getElementById("card").content;
  const clone = template.cloneNode(true);
  const fragment = document.createDocumentFragment();

  clone.querySelector(".card-body-img").setAttribute("src", pokemon.imgCvg);
  clone.querySelector(
    ".card-body-title"
  ).innerHTML = `${pokemon.name} <span>${pokemon.hp}hp</span>`;
  clone.querySelector(".card-body-text").textContent =
    pokemon.experience + " exp";
  clone.querySelectorAll(".card-footer-social h3")[0].textContent =
    pokemon.attack + "K";
  clone.querySelectorAll(".card-footer-social h3")[1].textContent =
    pokemon.special + "K";
  clone.querySelectorAll(".card-footer-social h3")[2].textContent =
    pokemon.defense + "K";

  fragment.appendChild(clone);
  flex.appendChild(fragment);
};

const fetchData = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    const pokemon = {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      imgJuego: data.sprites.front_default,
      imgCvg: data.sprites.other.dream_world.front_default,
      name: data.name,
      experience: data.base_experience,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      special: data.stats[3].base_stat,
    };

    paintCard(pokemon);
  } catch (error) {
    console.log(error);
  }
};
