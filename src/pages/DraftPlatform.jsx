import DraftProductPage from "./DraftProductPage";
import { PRODUCTS } from "../components/draft/productsData";

const product = PRODUCTS[1];

export default function DraftPlatform() {
  return <DraftProductPage product={product} />;
}
