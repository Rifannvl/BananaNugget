import React, { useState } from "react";

const faqData = [
  {
    question: "Apa itu banana nugget?",
    answer:
      "Banana nugget adalah camilan lezat yang terbuat dari pisang matang, sering dinikmati oleh anak-anak dan dewasa!",
  },
  {
    question: "Bagaimana cara membuat banana nugget?",
    answer:
      "Untuk membuat banana nugget, haluskan pisang matang dan campurkan dengan oatmeal, lalu panggang hingga keemasan.",
  },
  {
    question: "Apakah banana nugget sehat?",
    answer:
      "Ya! Banana nugget adalah alternatif camilan yang sehat, kaya nutrisi dan rasa manis alami.",
  },
  {
    question: "Berapa lama banana nugget bisa disimpan?",
    answer:
      "Banana nugget dapat disimpan dalam wadah kedap udara di lemari es selama 3-5 hari.",
  },
  {
    question: "Bisakah banana nugget dibekukan?",
    answer:
      "Tentu! Anda dapat membekukan banana nugget dan mencairkannya sebelum dipanaskan.",
  },
  {
    question: "Apa variasi lain yang bisa dibuat dengan banana nugget?",
    answer:
      "Anda bisa menambahkan cokelat, kacang, atau rempah-rempah seperti kayu manis untuk variasi rasa.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-xl mx-auto p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div key={index} className="border-b py-4">
          <h2
            onClick={() => toggleAnswer(index)}
            className="text-lg text-blue-600 cursor-pointer hover:text-blue-500 transition duration-300"
          >
            {item.question}
          </h2>
          {activeIndex === index && (
            <p className="mt-2 text-gray-700 italic">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
