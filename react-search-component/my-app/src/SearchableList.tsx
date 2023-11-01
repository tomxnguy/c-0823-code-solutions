import { useState } from 'react';

type Props = {
  list: string[];
};

export default function SearchableList({ list }: Props) {
  const [value, setValue] = useState('');
  const filtered = list.filter((item) =>
    item.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );

  return (
    <div className="wrapper">
      <SearchBar value={value} onChange={setValue} />
      <Items items={filtered} />
    </div>
  );
}

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
      className="search"
    />
  );
}

type ItemsProps = {
  items: Props['list'];
};

function Items({ items }: ItemsProps) {
  if (items.length === 0) {
    return <div>Nothing found!</div>;
  }
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
