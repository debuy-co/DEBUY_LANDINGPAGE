import ProductPage from "./ProductPage";
import { PRODUCTS } from "../components/landing/productsData";

const product = PRODUCTS[0];

export default function QuoteCheckPage() {
  return <ProductPage product={product} />;
}
