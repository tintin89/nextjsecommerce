import Layout from "@/components/Layout";
import { useState } from "react";
import axios from 'axios'
import { useRouter } from "next/router";


export default function NewProduct(){
    const [name,Setname] = useState("");
    const [description,Setdescription] = useState("");
    const [price, Setprice] = useState(0);
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();

    async function createProduct(e){
        e.preventDefault();
        const data = {name, description, price};
        await axios.post('/api/products',data);
       setGoToProducts(true);
    }

    if(goToProducts){
        router.push('/products');
    }
    return(
        <Layout>
            <form onSubmit={createProduct}>
            <h1>New Product</h1>
            <label>Product name</label>
            <input type="text" placeholder="product name" value={name} onChange={e=>Setname(e.target.value)}/>
            <label>Description</label>
            <textarea type="text" placeholder="description" value={description} onChange={e=>Setdescription(e.target.value)}/>
            <label>Price (in USD)</label>
            <input type="number" placeholder="price" value={price} onChange={e=>Setprice(e.target.value)}/>
            <button type="submit" className="btn-primary">Save</button>
            </form>
        </Layout>
    )
}