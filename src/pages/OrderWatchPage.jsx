import ProductPage from "./ProductPage";
import { useProduct } from "../components/landing/productsData";

export default function OrderWatchPage() {
  const product = useProduct(2);
  return <ProductPage product={product} />;
}
