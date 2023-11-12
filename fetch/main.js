async function fetchUsers() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error(`fetch Error ${res.status}`);
    const users = await res.json();
    console.log(users);
  } catch (err) {
    console.error('fetch failed', err);
  }
}

async function fetchPokemon() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    if (!res.ok) throw new Error(`fetch Error ${res.status}`);
    const bulbasaur = await res.json();
    console.log(bulbasaur);
  } catch (err) {
    console.error('fetch failed', err);
  }
}

fetchUsers();
fetchPokemon();
