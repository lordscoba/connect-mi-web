import { useState } from "react";
import { Cake, Shoe } from "../../images/products";
import {
  arrowLeftImage,
  arrowRightImage,
  carouselbg,
  watchImage,
} from "../../images/slider";

const Carousel = () => {
  const [image, setImage] = useState<ImageType>({
    name: "SMART WEARABLE",
    image: watchImage,
  });

  const [style, setStyle] = useState<string>(
    "animate__animated animate__fadeInRight"
  );

  let [N, setN] = useState<number>(1);

  const arrowRight = () => {
    if (N < images.length - 1) {
      setN(++N);
      setImage(images[N]);
    } else {
      setImage(images[0]);
      setN(0);
    }
    if (style === "animate__animated animate__fadeInRight") {
      setStyle("animate__animated animate__slideInRight");
    } else {
      setStyle("animate__animated animate__fadeInRight");
    }
  };

  const arrowleft = () => {
    if (N > 0) {
      setN(--N);
      setImage(images[N]);
    } else {
      setN(images.length - 1);
      setImage(images[images.length - 1]);
    }

    if (style === "animate__animated animate__fadeInLeft") {
      setStyle("animate__animated animate__slideInLeft");
    } else {
      setStyle("animate__animated animate__fadeInLeft");
    }
  };

  return (
    <div className="relative flex flex-row items-center bg-[#212844] justify-between text-white rounded-xl h-72 md:h-96">
      <div className="flex flex-col ps-12 py-10 space-y-4 self-stretch w-1/2">
        <div className="text-[1rem] md:text-[1.5rem]">
          Best Deal Online on smart watches
        </div>

        <div className={`text-[2rem] md:text-[4rem] font-bold ${style}`}>
          {image.name}.
        </div>
        <div className="">UP to 80% OFF</div>
      </div>
      <div
        className="flex justify-end bg-no-repeat bg-cover bg-center p-3 rounded-xl self-stretch w-1/2"
        style={{ backgroundImage: `url(${carouselbg})` }}
      >
        <img className={`object-contain ${style}`} src={image.image} alt="" />
      </div>
      <div className="">
        <div className="absolute -left-6 top-1/2 transform -translate-y-1/2  w-14 md:w-20">
          <img onClick={arrowleft} src={arrowLeftImage} alt="" />
        </div>
        <div className="absolute -right-6 top-1/2 transform -translate-y-1/2  w-14 md:w-20">
          <img onClick={arrowRight} src={arrowRightImage} alt="" />
        </div>
      </div>
    </div>
  );
};
type ImageType = {
  name: string;
  image: string;
};

const images: Array<ImageType> = [
  {
    name: "SMART WEARABLE",
    image: watchImage,
  },
  {
    name: "NIKE SHOE",
    image: Shoe,
  },
  {
    name: "NICE CAKE",
    image: Cake,
  },
];
export default Carousel;
