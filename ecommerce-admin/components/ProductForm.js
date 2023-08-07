import React from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function ProductForm({
  _id,
  name: existingName,
  description: existingDescription,
  price: existingPrice,
}) {
  const [name, Setname] = useState(existingName || "");
  const [description, Setdescription] = useState(existingDescription || "");
  const [price, Setprice] = useState(existingPrice || 0);
  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();

  async function createProduct(e) {
    e.preventDefault();
    const data = { name, description, price };
    if (_id) {
      //update
      await axios.put("/api/products", { ...data, _id });
    } else {
      //create
      await axios.post("/api/products", data);
    }
    setGoToProducts(true);
  }

  if (goToProducts) {
    router.push("/products");
  }
  return (
    <form onSubmit={createProduct}>
      <label>Product name</label>
      <input
        type="text"
        placeholder="product name"
        value={name}
        onChange={(e) => Setname(e.target.value)}
      />
      <label>Description</label>
      <textarea
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => Setdescription(e.target.value)}
      />
      <label>Price (in USD)</label>
      <input
        type="number"
        placeholder="price"
        value={price}
        onChange={(e) => Setprice(e.target.value)}
      />
      <button type="submit" className="btn-primary">
        Save
      </button>
    </form>
  );
}

export default ProductForm;
