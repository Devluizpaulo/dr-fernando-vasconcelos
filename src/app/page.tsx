import { FC } from 'react';
import { FaClipboardList, FaHandshake, FaBullhorn, FaClock, FaBuilding, FaExclamationTriangle, FaWhatsapp, FaBriefcase } from 'react-icons/fa';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';

const Home: FC = () => {
  return (
    <div>
      <section
        id="Home"
        className="relative text-white text-center py-10 bg-gradient-to-b from-blue-900 to-blue-600 h-[70vh] flex flex-col justify-center items-center"
      >
        {/* Imagem de fundo */}
        <div
          className="absolute inset-0 bg-cover bg-center backdrop-blur-3xl transition-all duration-500"
          style={{
            backgroundImage: "url(/hero-image.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.5)",
          }}
        ></div>

        {/* Conteúdo principal do hero */}
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

        <div className="absolute bg-white opacity-85 rounded-md p-3 shadow-lg top-4 right-4 z-40">
          <Image
            src="/VASCONCELLOS.png" // Verifique o caminho do arquivo
            alt="Logo"
            width={200} // Tamanho base da imagem
            height={200}
            className="w-36 sm:w-36 lg:w-56 object-contain" // Adiciona responsividade e mantém as proporções
          />
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
      <section id="OutrasAreas" className="py-20 px-6 bg-gray-100">
        <h3 className="text-4xl text-center mb-12 font-bold text-blue-800">
          Soluções Jurídicas Personalizadas
        </h3>
        <p className="text-lg sm:text-xl text-center mb-12 text-gray-600">
          Mais do que especialistas em Direito Trabalhista, nossa equipe está pronta para oferecer suporte completo em diversas áreas. Veja como podemos ajudá-lo a resolver seus desafios jurídicos com eficiência e estratégia.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              imageSrc: "/direito-penal.jpg",
              title: "Direito Penal",
              description: "Seu aliado nos momentos mais desafiadores. Atuamos com ética e compromisso em sua defesa, garantindo proteção legal em processos criminais.",
              bgColor: "bg-blue-600",
              hoverBg: "hover:bg-blue-700",
              href: "https://wa.me/5511994825120",
            },
            {
              imageSrc: "/direito-tributario.jpg",
              title: "Direito Tributário",
              description: "Reduza custos e elimine riscos fiscais. Nossa consultoria oferece soluções inteligentes para garantir compliance e maximizar sua economia.",
              bgColor: "bg-green-600",
              hoverBg: "hover:bg-green-700",
              href: "https://wa.me/5511994825120",
            },
            {
              imageSrc: "/direito-civil.jpg",
              title: "Direito Cível",
              description: "De contratos a indenizações, resolvemos suas disputas com rapidez e eficiência, sempre priorizando os melhores resultados para você.",
              bgColor: "bg-purple-600",
              hoverBg: "hover:bg-purple-700",
              href: "https://wa.me/5511994825120",
            },
            {
              imageSrc: "/direito-familia.jpg",
              title: "Direito de Família",
              description: "Cuidamos do que mais importa: sua família. Com sensibilidade e expertise, tratamos de questões como divórcios, guarda e pensão alimentícia.",
              bgColor: "bg-red-600",
              hoverBg: "hover:bg-red-700",
              href: "https://wa.me/5511994825120",
            },
            {
              imageSrc: "/direito-consumidor.jpg",
              title: "Direito do Consumidor",
              description: "Você não está sozinho. Protegemos seus direitos contra práticas abusivas, cobranças indevidas e contratos irregulares.",
              bgColor: "bg-orange-600",
              hoverBg: "hover:bg-orange-700",
              href: "https://wa.me/5511994825120",
            },
            {
              imageSrc: "/direito-empresarial.jpg",
              title: "Direito Empresarial",
              description: "Cresça com segurança. Nossa equipe garante a proteção jurídica da sua empresa, oferecendo suporte estratégico em todas as etapas do negócio.",
              bgColor: "bg-teal-600",
              hoverBg: "hover:bg-teal-700",
              href: "https://wa.me/5511994825120",
            },
          ].map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col sm:flex-row items-center justify-between transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex-shrink-0 mb-6 sm:mb-0 sm:w-1/3">
                <img
                  src={area.imageSrc}
                  alt={area.title}
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
              <div className="sm:w-2/3 sm:pl-6">
                <h4 className="text-xl font-bold mb-4 text-gray-800">{area.title}</h4>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <a
                  href={area.href}
                  className={`inline-block py-2 px-6 rounded-lg text-white font-bold transition-colors ${area.bgColor} ${area.hoverBg}`}
                >
                  Fale com um especialista
                </a>
              </div>
            </div>
          ))}
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
              width={150}
              height={150}
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div className="lg:w-2/3 text-justify lg:text-left px-8">
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              Nosso escritório foi fundado com o objetivo de fornecer um atendimento jurídico personalizado e de excelência.
              Com foco em ética, transparência e dedicação, nos destacamos na área de Direito Trabalhista, lidando com as mais
              diversas situações e conquistando uma sólida reputação entre nossos clientes.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Nossa missão é garantir que os direitos de nossos clientes sejam protegidos com eficiência e assertividade.
              Oferecemos soluções personalizadas, seja por meio de acordos ou ações judiciais, trabalhando sempre de forma estratégica
              e próxima ao cliente. Nos comprometemos a dedicar atenção exclusiva a cada caso, com o objetivo de alcançar o melhor resultado
              e garantir que a justiça seja feita de maneira plena e eficaz.
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
