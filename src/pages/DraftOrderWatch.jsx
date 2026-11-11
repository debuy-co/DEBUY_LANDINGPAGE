import DraftProductPage from "./DraftProductPage";
import { PRODUCTS } from "../components/draft/productsData";

const product = PRODUCTS[2];

export default function DraftOrderWatch() {
  return <DraftProductPage product={product} />;
}
