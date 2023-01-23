/* import Link from "next/link";
import React from "react";
import Earrings from "./Earrings";

const Product_categories = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <span className="text-3xl font-extrabold ">Product Categories</span>
      </div>
      <a className="flex flex-col lg:flex-row gap-5 items-center justify-center mt-10">
        <Link href={"./earing"}>
          <div className="flex-col ">
            <div className="h-[280px] lg:h-[380px] w-[280px] lg:w-[380px] bg-white shadow-2xl flex items-center justify-center rounded-lg">
              <img
                alt="earing"
                src="../ear-rings/1.jpeg"
                className=" h-[240px] w-[240px] lg:h-[320px] lg:w-[320px] rounded-lg"
              />
            </div>
            <span className="flex items-center justify-center text-xl mt-5">
              Earing
            </span>
          </div>
        </Link>
        <Link href={""}>
          <div className="flex-col ">
            <div className="h-[280px] lg:h-[380px] w-[280px] lg:w-[380px] bg-white shadow-2xl flex items-center justify-center rounded-lg">
              <img
                alt="earing"
                src="../ear-rings/1.jpeg"
                className=" h-[240px] w-[240px] lg:h-[320px] lg:w-[320px] rounded-lg"
              />
            </div>
            <span className="flex items-center justify-center text-xl mt-5">
              Rings
            </span>
          </div>
        </Link>
        <Link href={""}>
          <div className="flex-col ">
            <div className="h-[280px] lg:h-[380px] w-[280px] lg:w-[380px] bg-white shadow-2xl flex items-center justify-center rounded-lg">
              <img
                alt="earing"
                src="../ear-rings/1.jpeg"
                className=" h-[240px] w-[240px] lg:h-[320px] lg:w-[320px] rounded-lg"
              />
            </div>
            <span className="flex items-center justify-center text-xl mt-5">
              Breslets
            </span>
          </div>
        </Link>
      </a>
    </>
  );
};

export default Product_categories;
 */

import React, { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface ProductCategoryProps {
  name: string;
  products: ProductProps[];
}

interface ProductProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCategory: FC<ProductCategoryProps> = ({ name, products }) => {
  const router = useRouter();

  return (
    <div className="px-4">
      <h1 className="text-2xl font-medium">{name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <div className="col-span-1 rounded-lg overflow-hidden">
              <img
                className="w-full"
                src={product.imageUrl}
                alt={product.name}
              />
              <div className="px-6 py-4">
                <h2 className="text-lg font-medium">{product.name}</h2>
                <p className="text-gray-600">Price: ${product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
