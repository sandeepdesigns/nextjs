"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export default function ProductSlider() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Featured Products
        </h2>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={12}
          slidesPerView={6}
          loop={true}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {products.slice(0, 10).map((product) => (
            <SwiperSlide key={product.id}>
              
              <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">

                {/* Image */}
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold line-clamp-1">
                    {product.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    ₹ {product.price}
                  </p>

                  <button className="mt-3 w-full py-2 bg-black text-white rounded-lg">
                    View Product
                  </button>
                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}