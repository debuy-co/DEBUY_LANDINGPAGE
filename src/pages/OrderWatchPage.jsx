import ProductPage from "./ProductPage";
import { PRODUCTS } from "../components/landing/productsData";

const product = PRODUCTS[2];

export default function OrderWatchPage() {
  return <ProductPage product={product} />;
}
