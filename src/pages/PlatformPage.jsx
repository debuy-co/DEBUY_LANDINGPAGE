import ProductPage from "./ProductPage";
import { useProduct } from "../components/landing/productsData";

export default function PlatformPage() {
  const product = useProduct(1);
  return <ProductPage product={product} />;
}
