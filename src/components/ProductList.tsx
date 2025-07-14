import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/text"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/29342338/pexels-photo-29342338.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="aboslute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/5877641/pexels-photo-5877641.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="aboslute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama bg-white text-xs w-max py-2 px-4 hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>

      <Link
        href="/text"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/31325352/pexels-photo-31325352.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="aboslute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/5877641/pexels-photo-5877641.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="aboslute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama bg-white text-xs w-max py-2 px-4 hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>

      <Link
        href="/text"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/2258240/pexels-photo-2258240.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="aboslute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/5877641/pexels-photo-5877641.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="aboslute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama bg-white text-xs w-max py-2 px-4 hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>

      <Link
        href="/text"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/29391633/pexels-photo-29391633.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="aboslute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/5877641/pexels-photo-5877641.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="aboslute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama bg-white text-xs w-max py-2 px-4 hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
