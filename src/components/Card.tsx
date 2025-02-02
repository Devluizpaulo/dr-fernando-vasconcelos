'use client';

import Image from 'next/image'; // Importa o componente Image para otimização

// Defina os tipos das props do componente
interface CardProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, imageAlt, className }) => {
  return (
    <div
      className={`bg-white p-2 md:p-4 rounded-lg shadow-lg max-w-sm sm:max-w-sm lg:max-w-xl mx-auto transition-transform hover:scale-105 ${className}`}
    >
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Se houver uma imagem */}
        {imageSrc && (
          <div className="flex-shrink-0">
            <Image
              src={imageSrc}
              alt={imageAlt || 'Image'}
              width={150}
              height={150}
              className="rounded-md shadow-md object-cover"
            />
          </div>
        )}

        {/* Texto do card */}
        <div className="text-center sm:text-left">
          <h4 className="text-xl md:text-2xl font-semibold text-blue-800 mb-2">{title}</h4>
          <p className="text-sm md:text-base text-gray-700 text-justify">{description}</p> {/* Justificando o texto */}
        </div>
      </div>

      {/* Link para mais informações */}
      <div className="mt-4 text-right sm:text-right">
        <a
          href="https://wa.me/5511994825120"
          target="_blank"
          className="text-green-500 hover:text-green-600 font-semibold transition-all"
        >
          Saiba mais
        </a>
      </div>
    </div>
  );
};

export default Card;
