"use client";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading products...</p>;
  }

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {products.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-lg line-clamp-1">
                  {product.title}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  ₹{product.price}
                </p>

                <button className="mt-3 w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                  View Product
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}