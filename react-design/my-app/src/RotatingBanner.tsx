type Props = {
  items: string[];
};

export default function RotatingBanner({ items }: Props) {
  return (
    <>
      <Banner item={items[0]} />
      <Button text="Prev" />
      <Indicators count={items.length} />
      <Button text="Next" />
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
};

function Button({ text }: ButtonProps) {
  return <button>{text}</button>;
}

type IndicatorProps = {
  count: number;
};

function Indicators({ count }: IndicatorProps) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(i);
  }
  return (
    <div>
      <button>{buttons}</button>
    </div>
  );
}
