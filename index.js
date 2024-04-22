import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 42;
let page = 1;
const searchQuery = "";
pagination.textContent = `${page} / ${maxPage}`;

async function fetchDataRM(pageIndex) {
  const apiURL = `https://rickandmortyapi.com/api/character?page=${pageIndex}`;
  const responseCharacters = await fetch(apiURL);
  const dataCharacters = await responseCharacters.json();
  // console.log(dataCharacters);
  // console.log(dataCharacters.results[1].episode.length)
  // return dataCharacters.results;
  renderCharacterCard(dataCharacters.results);
}

fetchDataRM();

function renderCharacterCard(characters) {
  cardContainer.innerHTML = "";
  characters.forEach((character) => {
    const liElement = CharacterCard(
      character.image,
      character.name,
      character.status,
      character.species,
      character.episode.length
    );
  });
}

nextButton.addEventListener("click", () => {
  if (page < 42) {
    page++;
    pagination.textContent = `${page}/${maxPage}`;
    fetchDataRM(page);
  }
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    pagination.textContent = `${page}/${maxPage}`;
    fetchDataRM(page);
  }
});
