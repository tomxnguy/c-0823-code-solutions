import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { BsCircle } from 'react-icons/bs';
import { useCallback, useEffect, useState } from 'react';

type Props = {
  images: string[];
};

export default function Carousel({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextClick = useCallback(() => {
    const nextIndex = (activeIndex + 1) % images.length;
    setActiveIndex(nextIndex);
  }, [images, activeIndex]);

  const prevClick = useCallback(() => {
    const prevIndex = (activeIndex - 1 + images.length) % images.length;
    setActiveIndex(prevIndex);
  }, [images, activeIndex]);

  useEffect(() => {
    const timeoutHandle = setTimeout(nextClick, 3000);
    return () => clearTimeout(timeoutHandle);
  }, [nextClick]);

  return (
    <div>
      <div>
        <BsChevronLeft onClick={() => prevClick()} />
        <Banner srcimg={images[activeIndex]} />
        <BsChevronRight onClick={() => nextClick()} />
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
