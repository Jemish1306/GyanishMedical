
import React from 'react';
import  Ambulance  from '../assets/icon/free-delivery.mp4'; 
import tolk from '../assets/icon/medical-consultation.mp4'
import warranty from '../assets/icon/warranty.mp4'
const services = [
  {
    title: 'Fast Delivery',
    description: 'Timely and safe delivery of equipment to your location.',
    video: Ambulance
  },
  {
    title: 'Expert Installation',
    description: 'Technician-assisted installation & setup at site.',
    video: tolk
  },
  {
    title: 'Product Warranty',
    description: 'All products come with service guarantee & warranty.',
    video: warranty
  }
];

export default function ServicesSection() {
  return (
    <section className="bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-text-main">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
              <video autoPlay loop muted className="w-24 h-24 mx-auto mb-4">
                <source src={service.video} type="video/mp4" />
              </video>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
