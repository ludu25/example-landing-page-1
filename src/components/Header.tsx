// Header.tsx
import {QuestionMarkCircleIcon, UserCircleIcon } from '@heroicons/react/20/solid';

const Header = ({}: { isLoggedIn: boolean, hasPurchasedCourse: boolean }) => {

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center flex-col md:flex-row">
        {/* Logo and Navigation */}
        <div className="flex items-center justify-between w-full md:w-auto space-x-6 mb-4 md:mb-0">
          <a href="/" className="text-2xl font-bold text-yellow-500 hover:text-yellow-400">SIEGEPAN</a>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-auto md:space-x-6 mb-4 md:mb-0">
          <div className="flex items-center space-x-2 hover:bg-gray-700 p-3 rounded-lg transition-all ease-in-out duration-200">
            <UserCircleIcon className="w-6 h-6 text-green-500" />
            <div>
              <span className="text-lg font-semibold">
                <a href="#guests">Convidados Especiais</a>
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2 hover:bg-gray-700 p-3 rounded-lg transition-all ease-in-out duration-200">
            <QuestionMarkCircleIcon className="w-6 h-6 text-blue-500" />
            <div>
              <span className="text-lg font-semibold">
                <a href="#faq">Peguntas Frequentes (FAQ) </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;