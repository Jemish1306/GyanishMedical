
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const images = [
  "/assets/kristine-wook-E1_RW3HIbUw-unsplash.jpg",
  "/assets/mateo-hernandez-reyes-G-1T9ECL5ic-unsplash.jpg",
  "/assets/immo-wegmann-f0h8EIdTXWo-unsplash.jpg",
  "/assets/pexels-fr3nks-287237.jpg"
];

export default function LightboxGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-text-main mb-6 text-center">Recent Deployments</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div key={i} className="cursor-zoom-in" onClick={() => { setIndex(i); setOpen(true); }}>
              <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-48 object-cover rounded shadow-md hover:shadow-xl transition" />
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((src) => ({ src }))}
        plugins={[Thumbnails]}
      />
    </section>
  );
}
