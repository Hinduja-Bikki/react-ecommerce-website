import { useOutletContext } from "react-router-dom";

export default function ProductDetailStorage() {
  const products = useOutletContext();
  const storage = products.storage;

  return (
    <p>
      <strong>Storage instructions:</strong> {storage}
    </p>
  );
}
