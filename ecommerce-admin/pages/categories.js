import React, { useState } from "react";
import Layout from "@/components/Layout";
import axios from "axios";

const Categories = () => {
  const [name, setName] = useState("");

  async function saveCategory(e) {
    e.preventDefault();
    await axios.post("/api/categories", { name });
    setName('');
  }
  return (
    <Layout>
      <h1>Categories</h1>
      <label>New Categories</label>
      <form onSubmit={saveCategory} className="flex gap-1">
        <input
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          className="mb-0"
          type="text"
          placeholder="Category name"
        />
        <button type="submit" className="btn-primary py-1">
          Save
        </button>
      </form>
    </Layout>
  );
};

export default Categories;
