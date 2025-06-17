import React, { useState } from "react";

const faqs = [
  {
    question: "Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim.",
  },
  {
    question: "Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?",
    answer: "Proin nec nunc vehicula, pretium nulla sed, fermentum enim.",
  },
  {
    question: "Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?",
    answer: "Ut consequat quam at tortor ultrices, sit amet fermentum elit sollicitudin.",
  },
  {
    question: "Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?",
    answer: "Fusce rutrum nisl non purus imperdiet, nec laoreet erat facilisis.",
  },
  {
    question: "Sagittis consectetur gravida nec turpis eros, id sit et, dictum?",
    answer: "Aliquam erat volutpat. Etiam vel justo nec augue efficitur volutpat.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Answers to your questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-3">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left flex justify-between items-center py-3 text-lg font-medium text-blue-700 hover:underline"
            >
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 text-base">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
