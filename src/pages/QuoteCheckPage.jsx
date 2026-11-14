import ProductPage from "./ProductPage";
import { useProduct } from "../components/landing/productsData";

export default function QuoteCheckPage() {
  const product = useProduct(0);
  return <ProductPage product={product} />;
}
