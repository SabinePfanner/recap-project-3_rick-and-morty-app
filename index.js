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
let maxPage = 42;
let searchQuery = "";
let page = 1;

async function fetchCharacters(pageIndex, searchQuery) {
  const url = `https://rickandmortyapi.com/api/character?page=${pageIndex}&name=${searchQuery}`;
  const response = await fetch(url);
  const data = await response.json();
  const characters = data.results;
  console.log(data.info);
  cardContainer.innerHTML = "";
  maxPage = data.info.pages;
  pagination.textContent = `${page}/${maxPage} `;

  characters.forEach((character) => {
    CharacterCard(
      character.image,
      character.name,
      character.status,
      character.species,
      character.episode.length
    );
  });
}
fetchCharacters(page, searchQuery);

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    pagination.textContent = `${page}/${maxPage}`;
    fetchCharacters(page, searchQuery);
  }
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    pagination.textContent = `${page}/${maxPage}`;
    fetchCharacters(page, searchQuery);
  }
});

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = event.target.query.value;
  page = 1;
  fetchCharacters(page, searchQuery);
});
