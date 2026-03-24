import type { Metadata } from "next";
import Link from "next/link";
import ProductSlider from "../components/ProductSlider";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore our products",
  alternates: {
    canonical: "https://yourdomain.com/products",
  },
};

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });

  const data = await res.json();
  return data.products; // 🔥 IMPORTANT
}

export default async function ProductPage() {
  const products = await getProducts();

  return (
    <div className="pageWrapper">

      {/* 🔹 Hero */}
      <section className="pt-24 min-h-[300px] flex items-center bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">Products</h1>
        </div>
      </section>

      {/* 🔹 Product List */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.slice(0, 20).map((product: any) => (
              <Link
                key={product.id}
                href={`/allproducts/${product.id}`}
                className="block p-4 border rounded-lg hover:shadow"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-100 object-cover mb-3 rounded"
                />

                <h2 className="text-xl font-semibold mb-2">
                  {product.title}
                </h2>

                <p className="text-gray-600">
                  {product.description.substring(0, 80)}...
                </p>

                <p className="mt-2 font-bold text-blue-600">
                  ₹ {product.price}
                </p>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <ProductSlider />

    </div>
  );
}