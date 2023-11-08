import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
// import { BsCircleFill } from 'react-icons/bs';
import { BsCircle } from 'react-icons/bs';
import { useEffect, useState } from 'react';

type Props = {
  images: string[];
};

export default function Carousel({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handlePrevClick() {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  }

  function handleNextClick() {
    setActiveIndex((activeIndex + 1 + images.length) % images.length);
  }

  useEffect(() => {
    setInterval(handleNextClick, 3000);
  });

  return (
    <div>
      <div>
        <BsChevronLeft onClick={() => handlePrevClick()} />
        <Banner srcimg={images[activeIndex]} />
        <BsChevronRight onClick={() => handleNextClick()} />
      </div>
      <Indicators
        images={images}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
      />
    </div>
  );
}

type BannerProp = {
  srcimg: string;
};

function Banner({ srcimg }: BannerProp) {
  return <img src={srcimg} />;
}

type IndicatorProps = {
  images: Props['images'];
  activeIndex: number;
  onSelect: (index: number) => void;
};

function Indicators({ images, activeIndex, onSelect }: IndicatorProps) {
  const buttons = images.map((_, index) => (
    <BsCircle
      key={index}
      style={{ backgroundColor: activeIndex === index ? 'white' : '' }}
      onClick={() => onSelect(index)}
    />
  ));
  return <div>{buttons}</div>;
}
