"use client";
import Image from "next/image";
import { useState } from "react";

const ProductImages = () => {
  const [index, setIndex] = useState(0);
  const image = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/29391633/pexels-photo-29391633.jpeg",
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/17435117/pexels-photo-17435117.jpeg",
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/30349296/pexels-photo-30349296.jpeg",
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/10355659/pexels-photo-10355659.jpeg",
    },
  ];
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={image[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between mt-8 gap-4 cursor-pointer">
        {image.map((img, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8"
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
