import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    title: "Success Stories",
    feedback:
      "Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.",
    name: "Marie Poirot",
    company: "Bigapp",
  },
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    title: "Success Stories",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet facilisis urna.",
    name: "John Doe",
    company: "TechX",
  },
  {
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    title: "Success Stories",
    feedback:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    name: "Emily Smith",
    company: "DesignPro",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-gray-100 py-12 px-4">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto items-center gap-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-40 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-700 text-base">"{item.feedback}"</p>
                <p className="mt-4 font-semibold text-gray-800">{item.name},</p>
                <p className="text-sm text-gray-500">{item.company}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
