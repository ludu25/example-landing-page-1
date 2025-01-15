import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sobre o Evento</h3>
            <p className="text-sm text-gray-400">
              Um evento para programadores de todos os níveis aprenderem, se conectarem e crescerem juntos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#section1" className="text-gray-400 hover:underline">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#guests" className="text-gray-400 hover:underline">
                  Convidados
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="text-sm text-gray-400">
              <span className="font-semibold">Email:</span> contato@meuevento.com
            </p>
            <p className="text-sm text-gray-400">
              <span className="font-semibold">Telefone:</span> +55 (11) 1234-5678
            </p>
            <p className="text-sm text-gray-400">
              <span className="font-semibold">Endereço:</span> Online
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Meu Evento. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
