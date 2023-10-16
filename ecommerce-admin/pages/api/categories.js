import { Category } from "@/models/Category";


export default async function handle(){
   const {method} = req;
   if(method === 'POST'){
    const {name} = req.body;
    const categoryDoc = await Category.create({name});
    res.json(categoryDoc);
   }
}
