import React, { useState } from 'react';
import Image from 'next/image';

// Definir o tipo do Guest
interface Guest {
  name: string;
  image: string;
  title: string;
  description: string;
}

// Definir as propriedades do componente, incluindo o tipo de guests
interface CarouselProps {
  guests: Guest[];
}

const Carousel: React.FC<CarouselProps> = ({ guests }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      const totalItems = Math.ceil(guests.length / 2); // Para telas pequenas, estamos considerando 3 itens visíveis
      return nextIndex >= totalItems ? 0 : nextIndex; // Volta para o início ao atingir o último item
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexVal = prevIndex - 1;
      const totalItems = Math.ceil(guests.length / 2); // Mesmo cálculo para garantir que o índice não ultrapasse
      return prevIndexVal < 0 ? totalItems - 1 : prevIndexVal; // Vai para o último item ao voltar
    });
  };

  return (
    <section className="py-12 bg-gray-100" id="guests">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informações sobre os convidados */}
          <div className="text-left lg:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">🍃 Nossos Convidados</h2>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 ml-6 sm:ml-14">Especiais</h2>
            <p className="text-lg sm:text-xl text-gray-700">
              Conheça os palestrantes, ministrantes e convidados que trazem suas experiências e conhecimentos únicos para o evento.
            </p>
            <div className="mt-6 flex space-x-4">
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

          {/* Carrossel de convidados */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden scroll-smooth relative w-full">
              <div
                className="flex transition-transform duration-500 gap-6"
                style={{ transform: `translateX(-${(currentIndex * (100 / 2))}%)` }}
              >
                {guests.map((guest, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 bg-white rounded-lg shadow-lg overflow-hidden sm:w-40 lg:w-1/3"
                  >
                    <div className="w-full h-48 sm:h-64 bg-gray-200 overflow-hidden flex justify-center items-center">
                      <Image
                        src={guest.image}
                        alt={guest.name}
                        width={225}
                        height={1000}
                        className="object-fit"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{guest.name}</h3>
                      <span className="text-gray-600 block mb-2">{guest.title}</span>
                      <p className="text-sm sm:text-base text-gray-600">{guest.description}</p>
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
