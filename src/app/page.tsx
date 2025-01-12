import { FC } from 'react';
import { FaClipboardList, FaHandshake, FaBullhorn, FaClock, FaBuilding, FaExclamationTriangle, FaWhatsapp } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';

const Home: FC = () => {
  return (
    <div>
      <Header />

      <section
        id="Home"
        className="relative text-white text-center py-10 bg-gradient-to-b from-blue-900 to-blue-600 h-[70vh] flex flex-col justify-center items-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center backdrop-blur-3xl transition-all duration-500"
          style={{
            backgroundImage: 'url(/hero-image.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.5)'
          }}
        ></div>

        {/* Conteúdo do hero */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Direito Trabalhista
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 animate__animated animate__fadeIn animate__delay-2s">
            Defendemos seus direitos com experiência e dedicação. Agende uma consulta e tire suas dúvidas.
          </p>

          {/* Botão de ação */}
          <a
            href="#Contato"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-110 active:scale-95 duration-300"
          >
            Agende uma Consulta
          </a>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gray-100">
        <h3 className="text-4xl text-center mb-12 font-semibold text-blue-800">
          Nossas Especialidades
        </h3>
        <p className="text-lg sm:text-xl text-center mb-12 text-gray-600">
          Temos expertise nas principais áreas do Direito Trabalhista, garantindo que seus direitos sejam preservados e que você tenha o melhor suporte para cada situação.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Trabalho Sem Registro"
            description="Se você trabalha sem o devido registro em carteira, seus direitos estão sendo negligenciados. Lutamos pelo reconhecimento do seu vínculo empregatício, assegurando o registro em carteira e garantindo que você tenha todos os direitos trabalhistas que merece. Não aceite menos que o que é seu por direito."
            className="transition-all transform hover:scale-105 hover:shadow-lg animate__animated animate__fadeInUp animate__delay-1s"
            imageSrc="/ctps.png"
            imageAlt="Trabalho Sem Registro"
          />
          <Card
            title="Rescisão Indireta"
            description="Se o ambiente de trabalho se tornou insustentável e você está sendo tratado de forma abusiva, saiba que a rescisão indireta é uma solução legal que permite que você se desligue da empresa sem perder seus direitos. Não abra mão dos seus benefícios — a rescisão indireta garante que você saia da sua função com dignidade e respeito."
            className="transition-all transform hover:scale-105 hover:shadow-lg animate__animated animate__fadeInUp animate__delay-1s"
            imageSrc="/resc.jpg"
            imageAlt="Recisão Indireta"
          />
          <Card
            title="Assédio Moral"
            description="O assédio moral no ambiente de trabalho é uma violação grave dos seus direitos. Se você está sendo vítima de atitudes abusivas, nossa missão é ajudá-lo a buscar a reparação que você merece. Através de um processo adequado, buscamos uma indenização justa e a responsabilização dos envolvidos"
            className="transition-all transform hover:scale-105 hover:shadow-lg animate__animated animate__fadeInUp animate__delay-1s"
            imageSrc="/AssédioMoral.png"
            imageAlt="Assédio Moral"
          />
          <Card
            title="Horas Extras"
            description="Se você tem trabalhado além do horário regular e não está sendo remunerado corretamente pelas horas extras, é hora de garantir que seus direitos sejam respeitados. Atuamos para que você receba o pagamento justo por todo o tempo trabalhado, conforme a legislação trabalhista vigente."
            className="transition-all transform hover:scale-105 hover:shadow-lg animate__animated animate__fadeInUp animate__delay-1s"
            imageSrc="/HorasExtras.png"
            imageAlt="Horas Extras"
          />
          <Card
            title="FGTS"
            description="O Fundo de Garantia por Tempo de Serviço (FGTS) é um direito do trabalhador, e não recebê-lo corretamente pode prejudicar seu futuro. Caso sua empresa não esteja realizando o recolhimento adequado, estamos prontos para lutar pela regularização dos seus depósitos e garantir que você não seja prejudicado."
            className="transition-all transform hover:scale-105 hover:shadow-lg animate__animated animate__fadeInUp animate__delay-1s"
            imageSrc="/fgts-logo-01.png"
            imageAlt="FGTS"
          />
          <Card
            title="Acidente de Trabalho"
            description="Sofreu um acidente durante o trabalho? A indenização que você tem direito pode cobrir não apenas os danos imediatos, mas também custos de tratamentos prolongados, e em casos mais graves, pensões vitalícias. Nós estamos aqui para ajudar você a garantir uma compensação justa, proporcionando a segurança e apoio que você merece após um incidente dessa natureza."
            className="transition-all transform hover:scale-105 hover:shadow-lg animate__animated animate__fadeInUp animate__delay-1s"
            imageSrc="/cat.jpg"
            imageAlt="Acidente de Trabalho"
          />
        </div>
      </section>

      <section id="Sobre" className="bg-white py-20">
        <h3 className="text-4xl text-center mb-12 font-semibold text-blue-800">
          Dr. Fernando Vasconcellos
        </h3>
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-9xl mx-auto px-8">
          {/* Seção de Imagem */}
          <div className="p-2 rounded-xl shadow-lg mb-8 lg:mb-0">
            <Image
              src="/adv.png"
              alt="Dr. Fernando Vasconcellos"
              width={200}
              height={200}
              className="w-full h-auto rounded-full"
            />
          </div>

          {/* Seção de Texto */}
          <div className="lg:w-2/3 text-justify lg:text-left px-8">
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              Nosso escritório foi fundado com o objetivo de fornecer um atendimento jurídico personalizado e de excelência. Com mais de 15 anos de experiência, o escritório se destaca pela ética, transparência e dedicação incansável aos seus clientes, conquistando uma sólida reputação na áreas de Direito Trabalhista nas mais diversas situações.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Nossa missão é garantir que os direitos de nossos clientes sejam protegidos com eficiência e assertividade, oferecendo soluções personalizadas, seja através de acordos ou ações judiciais. Trabalhamos de forma estratégica e próxima, assegurando que cada caso receba atenção dedicada para alcançar o melhor resultado, sempre com o compromisso de buscar a justiça para nossos clientes.
            </p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 px-4 bg-blue-50">
        <h3 className="text-4xl text-center mb-8 font-semibold text-blue-800">
          Avaliações de nossos Clientes
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs mx-auto transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 duration-300">
            <p className="text-lg mb-4">
              "O Dr. Fernando me ajudou muito. Profissional e super dedicado durante todo o processo e sempre me dando retorno."
            </p>
            <p className="font-semibold text-right">- João da Silva</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs mx-auto transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 duration-300">
            <p className="text-lg mb-4">
              "Atendimento excelente! Ele explicou tudo direitinho. Recomendo"
            </p>
            <p className="font-semibold text-right">- Carlos Souza</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs mx-auto transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 duration-300">
            <p className="text-lg mb-4">
              "Profissional top, sempre disponível e super detalhista. Super recomendo o Dr. Fernando pra quem precisa de um excelente advogado."
            </p>
            <p className="font-semibold text-right">- Maria Oliveira</p>
          </div>
        </div>
      </section>

      <section id="Contato" className="py-16 px-4 bg-white">
        <ContactForm />
      </section>


      <a
        href="https://wa.me/5511994825120"
        target="_blank"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12 bg-green-700 hover:bg-green-800 text-white font-bold p-4 sm:p-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center space-x-2 sm:space-x-4 z-70"
        aria-label="Entrar em contato via WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8" />
        <span className="text-base sm:text-lg md:text-xl font-semibold hidden sm:block">Tire suas dúvidas</span>
      </a>
      <Footer />
    </div>
  );
};

export default Home;
