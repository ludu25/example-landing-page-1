import React, { useState } from 'react';

const Carousel = ({ guests }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % guests.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + guests.length) % guests.length);
  };

  return (
    <section className="py-12 bg-gray-100" id="guests">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-100">
          <div className="text-left lg:col-span-1">
            <h2 className="text-4xl font-bold text-black-800">🍃 Nossos Convidados</h2>
            <h2 className="text-4xl font-bold text-black-800 mb-4 ml-14">Especiais</h2>
            <p className="text-2xl text-black-700">
              Conheça os palestrantes, ministrantes e convidados
            </p>
            <p className="text-2xl text-black-700">
              que trazem suas experiências e conhecimentos
            </p>
            <p className="text-2xl text-black-700">
              únicos para o evento.
            </p>
            <div className="mt-60 flex space-x-4">
              <button
                onClick={prevSlide}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
              >
                Anterior
              </button>
              <button
                onClick={nextSlide}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
              >
                Próximo
              </button>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="overflow-hidden scroll-smooth relative w-full">
              <div
                className="flex transition-transform duration-500 gap-x-6"
                style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
              >
                {guests.map((guest, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 bg-blue rounded-lg shadow-lg overflow-hidden w-1/3"
                  >
                    <div className="w-full h-100 bg-gray-200 overflow-hidden">
                      <img
                        src={guest.image}
                        alt={guest.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-gray-800">{guest.name}</h3>
                      <span className="text-gray-600 mb-6">{guest.title}</span>
                      <p className="text-gray-600">{guest.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
