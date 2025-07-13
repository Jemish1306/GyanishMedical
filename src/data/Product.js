// src/data/products.js

// 1) Import all product images
import add from '../assets/Products/AdobeStock_1076774569_Preview.jpeg'
import ventilatorImg      from '../assets/Products/—Pngtree—artificial lung ventilation devices kyiv_11713945.jpg';
import vitalMonitorImg    from '../assets/Products/AdobeStock_1502365220_Preview.jpeg';
import surgicalKitImg     from '../assets/Products/AdobeStock_1229295835_Preview.jpeg';
import xrayImg            from '../assets/Products/AdobeStock_1159648808_Preview.jpeg';
import infusionPumpImg    from '../assets/Products/AdobeStock_1182203564_Preview.jpeg';
import mobileEcgImg       from '../assets/Products/AdobeStock_1248090947_Preview.jpeg';
import hospitalBedImg     from '../assets/Products/AdobeStock_85885048_Preview.jpeg';
import syringePumpImg     from '../assets/Products/AdobeStock_1182203564_Preview.jpeg';
import patientMonitorImg  from '../assets/Products/—Pngtree—artificial lung ventilation devices kyiv_11713945.jpg';
import oxygenMachineImg   from '../assets/Products/AdobeStock_1280810097_Preview.jpeg';
import defibrillatorImg   from '../assets/Products/AdobeStock_281250815_Preview.jpeg';


export const allProducts = [
  {
    image: ventilatorImg,
    name: 'Smart Ventilator Pro',
    fullDesc:
      'A precision-driven ventilator offering multiple ventilation modes (VCV, PCV, SIMV) and real-time monitoring alarms to ensure optimal patient respiratory support in ICU settings.',
    slug: 'smart-ventilator-pro',
  },
  {
    image: vitalMonitorImg,
    name: 'Vital Signs Monitor',
    fullDesc:
      'A compact unit that continuously tracks heart rate, SpO₂, NIBP, and temperature, displaying all vitals on a high-contrast touchscreen for rapid clinical decision-making.',
    slug: 'vital-signs-monitor',
  },
  {
    image: surgicalKitImg,
    name: 'Surgical Toolkit Deluxe',
    fullDesc:
      'A 25-piece stainless-steel instrument set—scalpels, forceps, scissors, retractors—engineered for ergonomic handling and corrosion resistance in high-precision surgical procedures.',
    slug: 'surgical-toolkit-deluxe',
  },
 
  {
    image: infusionPumpImg,
    name: 'Infusion Pump Pro',
    fullDesc:
      'Programmable IV infusion pump with dual-channel precision, customizable flow rates, extensive safety checks, and built-in battery backup for uninterrupted therapy.',
    slug: 'infusion-pump-pro',
  },
  {
    image: mobileEcgImg,
    name: 'Mobile ECG Monitor',
    fullDesc:
      'Lightweight, battery-powered ECG recorder with Bluetooth connectivity and automated arrhythmia detection—ideal for point-of-care cardiac screening.',
    slug: 'mobile-ecg-monitor',
  },
  {
    image: hospitalBedImg,
    name: 'Hospital Bed Pro',
    fullDesc:
      'Fully motorized bed with 5-section articulation, nurse-call integration, under-bed lighting, and antimicrobial mattress covers for enhanced patient comfort and hygiene.',
    slug: 'hospital-bed-pro',
  },
  {
    image: syringePumpImg,
    name: 'Syringe Pump System',
    fullDesc:
      'Dual-syringe drive unit with microstep motor control, fine-tuned dosage accuracy, and occlusion detection for critical drug delivery applications.',
    slug: 'syringe-pump-system',
  },
  {
    image: patientMonitorImg,
    name: 'Patient Monitor Ultra',
    fullDesc:
      '15-inch touchscreen, multi-parameter monitoring (ECG, SpO₂, EtCO₂), and network integration for centralized station display in ICU environments.',
    slug: 'patient-monitor-ultra',
  },
  {
    image: oxygenMachineImg,
    name: 'Portable Oxygen Machine',
    fullDesc:
      'Compact oxygen concentrator delivering up to 5 L/min, whisper-quiet operation, and easy-carry handle—designed for home and emergency transport use.',
    slug: 'portable-oxygen-machine',
  },
  {
    image: defibrillatorImg,
    name: 'Defibrillator Elite',
    fullDesc:
      'Rugged AED with automatic shock analysis, voice prompts, pediatric/adult pads, and long-life battery—ready for hospital rapid-response teams.',
    slug: 'defibrillator-elite',
  },

];
