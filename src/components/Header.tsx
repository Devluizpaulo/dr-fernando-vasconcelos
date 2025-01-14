import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white py-1 shadow-xl">
      <div className="max-w-full mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        {/* Contêiner do logo e texto */}
        <div className="sm:block hidden">
          <Image
            src="/VASCONCELLOS.png" // Substitua pelo caminho correto da sua imagem
            alt="Logo da Vasconcellos Advocacia"
            width={280}
            height={280}
            className="px-1 py-2 shadow-md"
            priority // Otimiza o carregamento do logo
          />
        </div>

        <div className="flex space-x-4 mt-4 sm:mt-0">
          {[{
            href: "https://www.instagram.com",
            src: "/insta.png",
            alt: "Instagram",
            color: "#E4405F",
          }, {
            href: "https://www.facebook.com",
            src: "/Facebook.png",
            alt: "Facebook",
            color: "#1877F2",
          }, {
            href: "https://x.com",
            src: "/x.png",
            alt: "Twitter",
            color: "#1DA1F2",
          }].map((icon, index) => (
            <Link
              key={index}
              href={icon.href}
              target="_blank"
              aria-label={`Link para ${icon.alt}`}
            >
              <div
                className={`bg-white p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-xl hover:shadow-[${icon.color}] transition-all duration-300 ease-in-out`}
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={42}
                  height={42}
                  className="w-8 h-8"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
