import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

function DeleteProductPage() {
  const router = useRouter();
  const { id } = router.query;

  function goBack() {
    router.push("/products");
  }
  async function deleteProduct() {
    await axios.delete("/api/products?id=" + id);
    goBack();
  }
  return (
    <Layout>
      <h1 className="text-center">
        Do you really want to delete this product?
      </h1>
      <div className="flex gap-2 justify-center">
        <button onClick={deleteProduct} className="btn-red">
          Yes
        </button>
        <button className="btn-default" onClick={goBack}>
          No
        </button>
      </div>
    </Layout>
  );
}

export default DeleteProductPage;
