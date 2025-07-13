export default function TestimonialCard({ name, message, image }) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md text-center">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
        />
        <p className="text-text-subtle italic mb-2">“{message}”</p>
        <h4 className="text-primary font-bold">{name}</h4>
      </div>
    );
  }
  