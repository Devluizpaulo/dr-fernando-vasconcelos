'use client';

import { useState } from 'react';
import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {
  const [contactMethod, setContactMethod] = useState<'whatsapp' | 'email' | 'address'>('email');

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <h3 className="text-4xl text-center mb-12 font-semibold text-blue-800">Entre em Contato</h3>

      {/* Container dos cards */}
      <div className="flex flex-wrap justify-center gap-12">
        {/* Card WhatsApp */}
        <div className="w-[400px] p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
          <div className="text-center">
            <FaWhatsapp className="w-16 h-16 mx-auto text-green-500" />
            <h4 className="text-2xl font-semibold text-green-800 mt-4">Atendimento pelo WhatsApp</h4>
            <p className="text-gray-700 mt-4">
              Entre em contato conosco pelo WhatsApp para tirar dúvidas, solicitar informações ou agendar uma consulta.
              Nosso atendimento é rápido, prático e personalizado.
            </p>
            <a
              href="https://wa.me/5511994825120"
              target="_blank"
              className="mt-6 inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95 duration-300"
              aria-label="Entrar em contato via WhatsApp"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        {/* Card Formulário de E-mail */}
        <div className="w-[400px] p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
          <div className="text-center">
            <FaEnvelope className="w-16 h-16 mx-auto text-blue-500" />
            <h4 className="text-2xl font-semibold text-blue-800 mt-4">Envie uma Mensagem</h4>
            <p className="text-gray-700 mt-4">
              Use o formulário abaixo para enviar uma mensagem diretamente para o nosso e-mail. Responderemos o mais
              rápido possível!
            </p>
            <form
              className="space-y-4 mt-6"
              action="mailto:adv.vasconcellos@outlook.com"
              method="POST"
              encType="text/plain"
            >
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Digite seu nome completo"
                  className="w-full p-3 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  className="w-full p-3 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Digite o Assunto"
                  className="w-full p-3 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Escreva sua mensagem"
                  className="w-full p-3 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 focus:outline-none transition-all duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
        <div className="w-[400px] p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
          <div className="text-center">
            <FaMapMarkerAlt className="w-16 h-16 mx-auto text-red-500" />
            <h4 className="text-2xl font-semibold text-red-800 mt-4">Nosso Endereço</h4>
            <p className="text-gray-700 mt-4">
              Venha nos visitar em nosso escritório. Estamos localizados em um ambiente acolhedor e de fácil acesso:
            </p>
            <p className="text-gray-800 font-semibold mt-2">
              R. Orense, 41, sala 304<br />
              Centro, Diadema - SP, 09920-650
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=R.+Orense,+41,+sala+304,+Diadema,+SP,+09920-650"
              target="_blank"
              className="mt-6 inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95 duration-300"
            >
              Faça uma visita
            </a>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.509682902484!2d-46.6187524!3d-23.6465651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b6ad7f791ad%3A0x265bbc6d6e376c7f!2sR.+Orense,+41,+sala+304,+Diadema,+SP,+09920-650!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
              width="100%"
              height="150"
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-md mt-4"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
