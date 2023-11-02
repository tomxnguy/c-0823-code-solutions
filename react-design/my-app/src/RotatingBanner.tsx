import { CSSProperties, useState } from 'react';

type Props = {
  items: string[];
};

export default function RotatingBanner({ items }: Props) {
  const [showing, setShowing] = useState(0);

  function handlePrevClick() {
    setShowing((showing - 1 + items.length) % items.length);
  }

  function handleNextClick() {
    setShowing((showing + 1 + items.length) % items.length);
  }

  return (
    <>
      <Banner item={items[showing]} />
      <Button text="Prev" onClick={handlePrevClick} />
      <Indicators items={items} showing={showing} onSelect={setShowing} />
      <Button text="Next" onClick={handleNextClick} />
    </>
  );
}

type BannerProps = {
  item: string;
};

function Banner({ item }: BannerProps) {
  return <h1>{item}</h1>;
}

type ButtonProps = {
  text: string;
  style: CSSProperties;
  onClick: () => void;
};

function Button({ text, style, onClick }: ButtonProps) {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
}

type IndicatorProps = {
  items: Props['items'];
  showing: number;
  onSelect: (index: number) => void;
};

function Indicators({ items, showing, onSelect }: IndicatorProps) {
  const buttons = items.map((_, index) => (
    <Button
      key={index}
      text={String(index)}
      style={{
        color: 'black',
        backgroundColor: showing === index ? 'blue' : 'white',
      }}
      onClick={() => onSelect(index)}
    />
  ));
  return <div>{buttons}</div>;
}
