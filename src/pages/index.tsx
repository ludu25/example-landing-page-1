import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel'; // ajuste o caminho conforme sua estrutura

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dados dos convidados
  const guests = [
    { 
      name: 'Maria da Silva', 
      title: 'Especialista em Saúde Coletiva', 
      description: 'Palestra: O papel da Enfermagem na saúde infantil.',
      image: '/images/guests/woman1.jpg' 
    },
    { 
      name: 'João Carlos', 
      title: 'Especialista em Neonatal', 
      description: 'Minicurso: Enfermagem Neonatal e o Cuidado com o Bebê',
      image: '/images/guests/man1.jpg' },
    { 
      name: 'Karla Fonseca', 
      title: 'Especialista em Pediatria', 
      description: 'Parto Humanizado e o Cuidado no Nascimento',
      image: '/images/guests/woman2.jpg' 
    },
    {
      name: "Roberto Lima",
      title: "Especialista em Psicologia Infantil",
      description: "Palestra: Saúde mental infantil no século XXI.",
      image: "/images/guests/man2.jpg",
    },
  ];

  const nextSlide = () => {
    if (currentSlide < guests.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0); // Loop back to the first slide
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(guests.length - 1); // Loop to the last slide
    }
  };

  // Trocar de slide a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Home Section */}
      <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/home.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 flex items-center justify-center h-full text-center text-white relative z-10">
          <div className="animate__animated animate__fadeIn">
            <h2 data-aos="fade-up" className="text-4xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-3s">
              Participe do Evento de Programação!
            </h2>
            <p className="text-xl mb-6 text-xl mb-6 animate__animated animate__fadeIn animate__delay-2s">
              Aprenda novas tecnologias, pratique com especialistas e expanda suas habilidades.
            </p>
            <p className="text-lg mb-6"><span className="font-semibold">Data:</span> 20 de Janeiro, 2025</p>
            <p className="text-lg mb-6"><span className="font-semibold">Local:</span> Online (link será enviado após inscrição)</p>
            <a
              href="#inscricao"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full text-xl transition duration-300 transform hover:scale-105"
            >
              Inscreva-se Agora
            </a>
          </div>
        </div>
      </section>

      {/* Convidados Section */}
      <Carousel guests={guests} />

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-12 bg-gray-50 text-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">🌱 Perguntas Frequentes</h2>
          <p className="text-2x1 text-gray-600 mb-8">
            Precisa de informações? Encontre sua resposta sobre os detalhes do evento aqui! <br></br>
            Caso possua mais dúvidas, envie uma mensagem, estaremos prontos para ajudar!
          </p>
          <div className="space-y-6">
            <div className="border-b pb-4">
              <button
                className="flex items-center w-full justify-between"
                onClick={() =>
                  document.getElementById("faq-1").classList.toggle("hidden")
                }
              >
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500 text-lg">📍</span>
                  <h3 className="text-lg font-semibold">
                    Quando e onde acontecerá o evento?
                  </h3>
                </div>
                <span>+</span>
              </button>
              <p id="faq-1" className="hidden mt-2 ml-7 text-gray-700">
                O evento acontecerá dos dias 5 a 7 de dezembro, no auditório do Instituto de Computação (IC).
              </p>
            </div>
            <div className="border-b pb-4">
              <button
                className="flex items-center w-full justify-between"
                onClick={() =>
                  document.getElementById("faq-2").classList.toggle("hidden")
                }
              >
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500 text-lg">📝</span>
                  <h3 className="text-lg font-semibold">Como realizo minha inscrição?</h3>
                </div>
                <span>+</span>
              </button>
              <p id="faq-2" className="hidden mt-2 ml-10 text-gray-700">
                As inscrições podem ser realizadas através do site oficial do evento.
              </p>
            </div>
            <div className="border-b pb-4">
              <button
                className="flex items-center w-full justify-between"
                onClick={() =>
                  document.getElementById("faq-3").classList.toggle("hidden")
                }
              >
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500 text-lg">🎓</span>
                  <h3 className="text-lg font-semibold">
                    Haverá emissão de certificado para os participantes?
                  </h3>
                </div>
                <span>+</span>
              </button>
              <p id="faq-3" className="hidden mt-2 ml-10 text-gray-700">
                Sim, todos os participantes receberão certificado de participação.
              </p>
            </div>
            <div className="border-b pb-4">
              <button
                className="flex items-center w-full justify-between"
                onClick={() =>
                  document.getElementById("faq-4").classList.toggle("hidden")
                }
              >
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500 text-lg">💲</span>
                  <h3 className="text-lg font-semibold">
                    A participacao é gratuita?
                  </h3>
                </div>
                <span>+</span>
              </button>
              <p id="faq-4" className="hidden mt-2 ml-7 text-gray-700">
                Sim, o evento será totalmente grátis.
              </p>
            </div>
            <div className="border-b pb-4">
              <button
                className="flex items-center w-full justify-between"
                onClick={() =>
                  document.getElementById("faq-5").classList.toggle("hidden")
                }
              >
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500 text-lg">📊</span>
                  <h3 className="text-lg font-semibold">
                    Onde posso submeter meu trabalho?
                  </h3>
                </div>
                <span>+</span>
              </button>
              <p id="faq-5" className="hidden mt-2 ml-10 text-gray-700">
                Você pode subir o seu projeto no github e nos enviar o link do repositório.
              </p>
            </div>
            <div className="border-b pb-4">
              <button
                className="flex items-center w-full justify-between"
                onClick={() =>
                  document.getElementById("faq-6").classList.toggle("hidden")
                }
              >
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500 text-lg">📞</span>
                  <h3 className="text-lg font-semibold">
                    Como consigo entrar em contato com a organizacao?
                  </h3>
                </div>
                <span>+</span>
              </button>
              <p id="faq-6" className="hidden mt-2 ml-10 text-gray-700">
                Atráves do nosso site na área Fale Conosco, onde você encontrará nosso e-mail e whatsapp.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
