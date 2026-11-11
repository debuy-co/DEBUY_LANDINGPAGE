import DraftProductPage from "./DraftProductPage";
import { PRODUCTS } from "../components/draft/productsData";

const product = PRODUCTS[0];

export default function DraftQuoteCheck() {
  return <DraftProductPage product={product} />;
}
