import React from "react";

// Star Rating Component
const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-2xl ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Product Manager",
      company: "TechFlow Solutions",
      rating: 5,
      image: "https://loremfaces.net/96/id/1.jpg",
      review:
        "Mohammed delivered an exceptional React application that exceeded our expectations. His attention to detail and ability to translate complex requirements into clean, functional code is impressive. Highly recommend!",
    },
    {
      id: 2,
      name: "David Chen",
      position: "CTO",
      company: "StartupLab",
      rating: 5,
      image: "https://loremfaces.net/96/id/1.jpg",
      review:
        "Working with Mohammed was a game-changer for our project. His Django backend integration was flawless, and the API he built handles our growing user base perfectly. Professional and reliable!",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "UI/UX Designer",
      company: "Creative Minds Agency",
      rating: 5,
      image: "https://loremfaces.net/96/id/1.jpg",
      review:
        "Mohammed brought our designs to life beautifully! His CSS skills are top-notch, and he made sure every pixel was perfect. The responsive design works seamlessly across all devices.",
    },
    {
      id: 4,
      name: "Mark Thompson",
      position: "Founder",
      company: "Digital Ventures",
      rating: 4,
      image: "https://loremfaces.net/96/id/1.jpg",
      review:
        "Fast, efficient, and communicative. Mohammed understood our vision immediately and delivered a full-stack solution that our clients love. His JavaScript expertise really shows in the smooth user experience.",
    },
    {
      id: 5,
      name: "Lisa Park",
      position: "Lead Developer",
      company: "InnovateTech",
      rating: 5,
      image: "https://loremfaces.net/96/id/1.jpg",
      review:
        "Mohammed's Python skills are outstanding! He optimized our existing codebase and implemented new features that improved performance by 40%. Great problem-solver and team player.",
    },
    {
      id: 6,
      name: "Alex Kumar",
      position: "Business Owner",
      company: "LocalBiz Solutions",
      rating: 5,
      image: "https://loremfaces.net/96/id/1.jpg",
      review:
        "From concept to deployment, Mohammed handled everything professionally. His full-stack expertise saved us time and money. The web app he built has been running smoothly for months without any issues!",
    },
  ];

  return (
    <div id="testimonials" className="py-8 lg:py-16 px-3 sm:px-5">
      <div className="flex flex-col justify-center items-center gap-3 m-2 sm:m-5">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl text-blue-500 font-bold text-center">
          Testimonials
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-500 text-center">
          Reviews and testimonials from satisfied clients and users.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 m-2 sm:m-5">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col justify-center items-center gap-4 p-4 sm:p-6 lg:p-8 bg-blue-50 rounded-3xl shadow-lg transition-transform hover:scale-105"
          >
            <img
              src={testimonial.image}
              alt={`${testimonial.name} ${testimonial.position}`}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex-shrink-0"
            />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-center">
              {testimonial.name}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500 text-center">
              {testimonial.position}
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500 text-center">
              {testimonial.company}
            </p>
            <StarRating rating={testimonial.rating} />
            <p className="text-sm sm:text-base lg:text-lg text-gray-500 text-center leading-relaxed">
              {testimonial.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
