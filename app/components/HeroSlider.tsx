"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Slide = {
  imgSrc: string;
  title: string;
  desc?: string;
  buttonText?: string;
};

type Props = {
  slides: Slide[];
};

export default function HeroSlider({ slides }: Props) {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          loop
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          pagination={{ 
            clickable: true,
            el: ".custom-pagination",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation!.nextEl = ".next-btn";
              swiper.params.navigation!.prevEl = ".prev-btn";
            }
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-xl overflow-hidden group">

                {/* Image */}
                <img
                  src={slide.imgSrc}
                  alt={slide.title}
                  className="w-full h-[400px] object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Text */}
                <div className="absolute inset-0 flex flex-col justify-center items-start p-6 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    {slide.title}
                  </h2>

                  {slide.desc && (
                    <p className="text-sm md:text-base mb-4">
                      {slide.desc}
                    </p>
                  )}

                  {slide.buttonText && (
                    <button className="px-5 py-2 bg-white text-black rounded-lg">
                      {slide.buttonText}
                    </button>
                  )}
                </div>

              </div>
            </SwiperSlide>

          ))}
        </Swiper>

        <div className="flex items-center justify-between gap-4 m-4">
          <div className="flex">
            <button className="prev-btn bg-black text-white px-4 py-2">
              Prev
            </button>
          </div>
          <div className="flex">
            <div className="custom-pagination mt-4 text-center"></div>
          </div>
          <div className="flex">
            <button className="next-btn bg-black text-white px-4 py-2">
              Next
            </button>
          </div>
        </div>

          

      </div>
    </section>
  );
}