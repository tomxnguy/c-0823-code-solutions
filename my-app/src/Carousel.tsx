import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { BsCircleFill } from 'react-icons/bs';
import { BsCircle } from 'react-icons/bs';
import { useEffect, useState } from 'react';

type Props = {
  images: string[];
};

export default function Carousel({ images }: Props) {
  const [index, setIndex] = useState(0);

  function handlePrevClick() {
    setIndex((index - 1 + images.length) % images.length);
  }

  function handleNextClick() {
    setIndex((index + 1 + images.length) % images.length);
  }

  useEffect(() => {
    setInterval(handleNextClick, 3000);
  });

  return (
    <div>
      <div>
        <BsChevronLeft onClick={() => handlePrevClick()} />
        <Banner srcimg={images[index]} />
        <BsChevronRight onClick={() => handleNextClick()} />
      </div>
      <Indicators />
    </div>
  );
}

type BannerProp = {
  srcimg: string;
};

function Banner({ srcimg }: BannerProp) {
  return <img src={srcimg} />;
}

function Indicators() {
  return (
    <div>
      <BsCircleFill />
      <BsCircle />
      <BsCircle />
      <BsCircle />
      <BsCircle />
    </div>
  );
}
