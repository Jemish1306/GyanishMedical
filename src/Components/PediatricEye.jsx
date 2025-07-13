
import React from 'react';
import eye from '../assets/img/1500x1500_eye_health_hpt_toc_chapter_2_redesign.webp'; 
export default function PediatricEye() {
  return (
    <section className="py-16 bg-white px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* Left Column: Articles */}
        <div>
          <p className="text-sm font-semibold text-blue-800 mb-1">2 OF 9 / <span className="uppercase">Pediatric Eye Conditions</span></p>
          <hr className="border-blue-200 mb-4" />

          <div className="space-y-5">
            <div>
              <h3 className="font-bold text-lg">Eye Exams in Your Baby's First Year</h3>
              <p className="text-sm text-gray-600">Does your baby really need an eye exam in their first year? Absolutely.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Eye Problems in Premature Babies</h3>
              <p className="text-sm text-gray-600">Preemies are more likely to have health problems, including eye conditions.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">What Is Retinopathy of Prematurity?</h3>
              <p className="text-sm text-gray-600">The smaller and more pre-term a baby is at birth, the greater their chance of having ROP.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Why Does Your Newborn Have Eye Discharge?</h3>
              <p className="text-sm text-gray-600">Sticky discharge in newborns may signal blocked tear ducts — consult your pediatrician.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={eye}
            alt="Child Eye Exam"
            className="rounded-lg shadow-md w-full max-w-sm"
          />
        </div>

      </div>
    </section>
  );
}
