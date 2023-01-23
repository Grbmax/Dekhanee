import ProductCard from "../components/ProductCard";

const product = {
  name: "Example Product",
  price: 19.99,
  imageUrl: "https://example.com/product.jpg"
};

const ProductPage = () => {
  return <ProductCard {...product} />;
};

export default ProductPage;

/* import { GetStaticProps } from "next";
import axios from "axios";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { pid } = context.params;
  const res = await axios.get(`https://example.com/api/products/${pid}`);
  const product = res.data;

  return {
    props: {
      product
    },
  };
};

const ProductPage = ({ product }: ProductProps) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <img src={product.imageUrl} alt={product.name} />
    </div>
  );
};

export default ProductPage;  */

/*import { useRouter } from "next/router";
import React, { FC } from "react";
import axios from "axios";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

interface ProductPageProps {
  product: ProductProps;
}

const ProductPage: FC<ProductPageProps> = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
    </div>
  );
};

const fetchProduct = async (pid: string): Promise<ProductProps> => {
  const res = await axios.get(`https://example.com/api/products/${pid}`);
  return res.data;
};

export const getStaticProps = async ({ params }: any) => {
  const product = await fetchProduct(params.pid);
  return {
    props: {
      product,
    },
  };
};*/

