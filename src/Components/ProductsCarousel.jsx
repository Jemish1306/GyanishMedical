// src/components/ProductsCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProductCard from './ProductCard';

export default function ProductsCarousel({ products }) {
  return (
    <div className="w-full py-12 bg-gray-50">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={24}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="max-w-screen-xl mx-auto"
      >
        {products.map((product) => (
          <SwiperSlide key={product.slug} className="flex justify-center">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
