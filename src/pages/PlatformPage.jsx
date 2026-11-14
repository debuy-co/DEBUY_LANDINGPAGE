import ProductPage from "./ProductPage";
import { PRODUCTS } from "../components/landing/productsData";

const product = PRODUCTS[1];

export default function PlatformPage() {
  return <ProductPage product={product} />;
}
