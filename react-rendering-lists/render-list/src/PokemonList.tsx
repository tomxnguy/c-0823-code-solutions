type Pokemon = {
  number: string;
  name: string;
};

type Props = {
  pokedex: Pokemon[];
};

export default function PokemonList({ pokedex }: Props) {
  const pokemon = pokedex.map((pokedex) => (
    <li key={pokedex.number}>{pokedex.name}</li>
  ));
  return <ul>{pokemon}</ul>;
}
