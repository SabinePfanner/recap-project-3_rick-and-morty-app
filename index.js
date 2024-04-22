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
const maxPage = 1;
const page = 1;
const searchQuery = "";



const apiURL = "https://rickandmortyapi.com/api/character";

async function fetchDataRM() {
  const responseCharacters = await fetch(apiURL);
  const dataCharacters = await responseCharacters.json();
  console.log(dataCharacters);
  console.log(dataCharacters.results[1].episode.length)
  return dataCharacters.results;
}

fetchDataRM();

import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

function renderCharacterCard (characters) {
  characters.forEach((character) => {
    const liElement = CharacterCard(
      character.image,
      character.name,
      character.status,
      character.species,
      character.episode.length
    );
  const characters.forEach((character)=> {

  })
);
