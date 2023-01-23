import ProductCategory from "../components/ProductCategory";
import img1 from "../public/img/3.jpg";
const products = [
  {
    id: "1",
    name: "Example Product 1",
    price: 19.99,
    imageUrl: "../public/img/3.jpg"
  },
  {
    id: "2",
    name: "Example Product 2",
    price: 29.99,
    imageUrl: "https://example.com/product2.jpg"
  },
  {
    id: "3",
    name: "Example Product 3",
    price: 39.99,
    imageUrl: "https://example.com/product3.jpg"
  }
];

const ProductCategoryPage = () => {
  return <ProductCategory name="Example Category" products={products} />;
};

export default ProductCategoryPage;
