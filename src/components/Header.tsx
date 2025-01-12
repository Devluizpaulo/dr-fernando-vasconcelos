import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white py-6 shadow-xl">
      <div className="max-w-9xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        {/* Contêiner do logo e texto */}
        <div className="flex flex-col sm:flex-row items-center space-x-6 p-3 bg-white rounded-xl shadow-xl backdrop-blur-md">
          {/* Logo */}
          <Image
            src="/VASCONCELLOS.jpg" // Substitua pelo caminho da sua imagem de logo
            alt="Logo"
            width={140} // Tamanho fixo do logo
            height={140} // Tamanho fixo do logo
            className="rounded-full w-32 h-32 sm:w-24 sm:h-34 md:w-30 md:h-30" // Responsividade no tamanho do logo
          />
          {/* Título e subtítulo */}
          <div className="text-blue-950" style={{ fontFamily: 'Canto Brush' }}>
            <h1 className="text-4xl font-bold tracking-tight leading-tight sm:text-3xl md:text-2xl">
              FERNANDO <br /> VASCONCELLOS
            </h1>
            <p className="text-sm text-right font-serif tracking-wide mt-1 opacity-75 sm:text-xs md:text-xs">
              ADVOGADO
            </p>
          </div>
        </div>

        {/* Ícones de redes sociais */}
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram">
            <div className="bg-white p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl hover:shadow-[#E4405F] transition-all duration-300 ease-in-out">
              <Image
                src="/insta.png"
                alt="Instagram"
                width={42}
                height={42}
                className="w-8 h-8 text-[#E4405F]"
              />
            </div>
          </Link>

          <Link href="https://www.facebook.com" target="_blank" aria-label="Facebook">
            <div className="bg-white p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl hover:shadow-[#1877F2] transition-all duration-300 ease-in-out">
              <Image
                src="/Facebook.png"
                alt="Facebook"
                width={42}
                height={42}
                className="w-8 h-8 text-[#1877F2]"
              />
            </div>
          </Link>

          <Link href="https://x.com" target="_blank" aria-label="X (Twitter)">
            <div className="bg-white p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl hover:shadow-[#1DA1F2] transition-all duration-300 ease-in-out">
              <Image
                src="/x.png"
                alt="Twitter"
                width={42}
                height={42}
                className="w-8 h-8 text-[#1DA1F2]"
              />
            </div>
          </Link>
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
