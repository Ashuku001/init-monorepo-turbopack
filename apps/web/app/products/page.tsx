"use client";
import { useEffect, useState } from "react";
import type {Product} from "@repo/types";

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, );
            const data = await res.json();
            console.log(data);
            setProducts(data);
        }
        fetchData();
    }, []);
  return (
    <div>
        {JSON.stringify(products)}
    </div>
  );
}
