
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: 'Dr. Aditi Shah',
    message: 'Medical Equipment Shop helped us equip our ICU with reliable ventilators. Excellent service!',
    image: 'https://i.pravatar.cc/150?img=31'
  },
  {
    name: 'Dr. Manoj Patel',
    message: 'The delivery was fast and installation was professional. Highly recommended!',
    image: 'https://i.pravatar.cc/150?img=32'
  },
  {
    name: "Dr. Lina D'Souza",
    message: 'Top quality surgical tools and genuine warranties. Our go-to supplier for hospital needs.',
    image: 'https://i.pravatar.cc/150?img=33'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
