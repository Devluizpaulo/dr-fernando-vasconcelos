import { FC } from 'react';
import { FaClipboardList, FaHandshake, FaBullhorn, FaClock, FaBuilding, FaExclamationTriangle, FaWhatsapp, FaBriefcase, FaInstagram } from 'react-icons/fa';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';

const Home: FC = () => {
  return (
    <div>
      <section
        id="Home"
        className="relative py-8 bg-gradient-to-r from-gray-50 via-white to-gray-100 min-h-[60vh] flex items-center 
  shadow-[0px_4px_10px_rgba(0,0,0,0.1)] border border-gray-200 rounded-2xl"
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-12 w-full gap-8">

          {/* Logo à esquerda */}
          <div className="lg:w-1/2 flex justify-center lg:justify-start mb-6 lg:mb-0">
            <Image
              src="/VASCONCELLOS.png"
              alt="Logo Vasconcellos"
              width={600}
              height={600}
              className="w-auto sm:w-96 lg:w-[500px] object-contain transition-all duration-500 ease-in-out transform hover:scale-110"
            />
          </div>

          {/* Texto à direita */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-3xl sm:text-3xl font-semibold text-blue-700 mb-4 text-justify leading-tight">
              Soluções Jurídicas para Você
            </h2>
            <p className="text-base sm:text-base text-gray-700 leading-relaxed mb-6 text-justify">
              Com expertise em diversas áreas do direito, oferecemos a você o suporte necessário para resolver suas questões jurídicas com eficiência e compromisso.
            </p>

            {/* Botão de ação */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="https://wa.me/5511994825120"
                className="inline-flex items-center bg-white text-green-600 border-2 border-green-500 text-lg sm:text-xl font-semibold py-3 px-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <FaWhatsapp className="text-2xl sm:text-3xl mr-3" />
                <div className="flex flex-col text-left">
                  <span className="text-base sm:text-lg">Agende uma Consulta</span>
                  <span className="text-lg sm:text-xl font-bold text-green-700">11 99482-5120</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Ícone do Instagram no canto superior esquerdo */}
        <div className="absolute top-3 left-4 z-40">
          <a href="https://www.instagram.com/adv.vasconcellos" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-600 text-3xl sm:text-3xl lg:text-4xl hover:text-pink-800 transition-transform duration-300 transform hover:scale-110" />
          </a>
        </div>
      </section>


      <section id="OutrasAreas" className="py-20 px-6 bg-gray-100">
        <h3 className="text-4xl text-center mb-12 font-semibold text-blue-800">
          Áreas de Atuação
        </h3>
        <p className="text-lg sm:text-xl text-center mb-12 text-gray-600">
          Com ampla experiência nas principais áreas do Direito, oferecemos um suporte jurídico completo, assegurando a proteção dos seus direitos e a melhor solução para cada necessidade.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {[
            {
              imageSrc: "/direito-penal.jpg",
              title: "Direito Penal",
              description:
                "Seu aliado em momentos desafiadores. Estaremos ao seu lado nas audiências de custódia, flagrante e andamentos processuais de alta complexidade, além de recursos criminais.\n\nAtuação em processos de roubo, furto, tráfico e lavagem de dinheiro, sempre com compromisso e ética para melhor atendê-los.",
              bgColor: "bg-blue-600",
              hoverBg: "hover:bg-blue-700",
              href: "https://wa.me/5511994825120",
            },
            {
              imageSrc: "/direito-tributario.jpg",
              title: "Direito Tributário",
              description:
                "Reduza custos e elimine riscos fiscais. Nossa consultoria oferece soluções inteligentes para garantir compliance e maximizar sua economia.",
              bgColor: "bg-green-600",
              hoverBg: "hover:bg-green-700",
              href: "https://wa.me/5511994825120",
            },
            {
              imageSrc: "/direito-civil.jpg",
              title: "Direito Cível",
              description:
                "De contratos a indenizações, resolvemos suas disputas com rapidez e eficiência, sempre priorizando os melhores resultados para você.",
              bgColor: "bg-purple-600",
              hoverBg: "hover:bg-purple-700",
              href: "https://wa.me/5511994825120",
            },
            {
              imageSrc: "/direito-familia.jpg",
              title: "Direito de Família",
              description:
                "Cuidamos do que mais importa: sua família. Com sensibilidade e expertise, tratamos de questões como divórcios, guarda e pensão alimentícia.",
              bgColor: "bg-red-600",
              hoverBg: "hover:bg-red-700",
              href: "https://wa.me/5511994825120",
            },
            {
              imageSrc: "/direito-consumidor.jpg",
              title: "Direito do Consumidor",
              description:
                "Você não está sozinho. Protegemos seus direitos contra negativação indevida no Serasa e SCPC, contratos irregulares e empréstimos fraudulentos não reconhecidos em seu benefício de aposentadoria.",
              bgColor: "bg-orange-600",
              hoverBg: "hover:bg-orange-700",
              href: "https://wa.me/5511994825120",
            },
            {
              imageSrc: "/direito-empresarial.jpg",
              title: "Direito Empresarial",
              description:
                "Cresça com segurança. Nossa equipe garante a proteção jurídica da sua empresa, oferecendo suporte estratégico em todas as etapas do negócio.",
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
                <p className="text-gray-600 mb-6 whitespace-pre-line">{area.description}</p>
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

      <section id="services" className="py-24 px-6 bg-gray-100">
        <h3 className="text-3xl font-semibold text-blue-800 text-center mb-6">
          Protegendo seus direitos, garantindo seu futuro
        </h3>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-12 text-justify">
          No mundo do trabalho, cada detalhe faz a diferença. Se você enfrenta problemas como
          <strong> trabalho sem registro, assédio moral, falta de pagamento de horas extras ou FGTS</strong>,
          saiba que a lei está ao seu lado — e nós também.
        </p>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-12 text-justify">
          Atuamos com <strong>compromisso e dedicação</strong> para assegurar que seus direitos sejam respeitados
          e que você receba tudo o que lhe é devido. Seja para corrigir uma irregularidade ou buscar uma indenização justa,
          estamos aqui para <strong>orientar, representar e lutar por você</strong>.
        </p>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-12 text-center">
          Confira abaixo nossas principais áreas de atuação e descubra como podemos ajudar.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <Card
            title="Trabalho Sem Registro"
            description="Se você trabalha sem o devido registro em carteira, seus direitos estão sendo negligenciados. Lutamos pelo reconhecimento do seu vínculo empregatício, assegurando o registro em carteira e garantindo que você tenha todos os direitos trabalhistas que merece. Não aceite menos que o que é seu por direito."
            className="transition-all transform hover:scale-105 hover:shadow-lg animate__animated animate__fadeInUp animate__delay-1s text-justify"
            imageSrc="/ctps.png"
            imageAlt="Trabalho Sem Registro"
          />
          <Card
            title="Rescisão Indireta"
            description="Se o ambiente de trabalho se tornou insustentável e você está sendo tratado de forma abusiva, saiba que a rescisão indireta é uma solução legal que permite que você se desligue da empresa sem perder seus direitos. Não abra mão dos seus benefícios — a rescisão indireta garante que você saia da sua função com dignidade e respeito."
            className="transition-all transform hover:scale-105 hover:shadow-lg animate__animated animate__fadeInUp animate__delay-1s text-justify"
            imageSrc="/resc.jpg"
            imageAlt="Rescisão Indireta"
          />
          <Card
            title="Assédio Moral"
            description="O assédio moral no ambiente de trabalho é uma violação grave dos seus direitos. Se você está sendo vítima de atitudes abusivas, nossa missão é ajudá-lo a buscar a reparação que você merece. Através de um processo adequado, buscamos uma indenização justa e a responsabilização dos envolvidos."
            className="transition-all transform hover:scale-105 hover:shadow-lg animate__animated animate__fadeInUp animate__delay-1s text-justify"
            imageSrc="/AssédioMoral.png"
            imageAlt="Assédio Moral"
          />
          <Card
            title="Horas Extras"
            description="Se você tem trabalhado além do horário regular e não está sendo remunerado corretamente pelas horas extras, é hora de garantir que seus direitos sejam respeitados. Atuamos para que você receba o pagamento justo por todo o tempo trabalhado, conforme a legislação trabalhista vigente."
            className="transition-all transform hover:scale-105 hover:shadow-lg animate__animated animate__fadeInUp animate__delay-1s text-justify"
            imageSrc="/HorasExtras.png"
            imageAlt="Horas Extras"
          />
          <Card
            title="Ausência de Depósito do FGTS"
            description="O Fundo de Garantia por Tempo de Serviço (FGTS) é um direito do trabalhador, e não recebê-lo corretamente pode prejudicar seu futuro. Caso sua empresa não esteja realizando o recolhimento adequado, estamos prontos para lutar pela regularização dos seus depósitos e garantir que você não seja prejudicado."
            className="transition-all transform hover:scale-105 hover:shadow-lg animate__animated animate__fadeInUp animate__delay-1s text-justify"
            imageSrc="/fgts-logo-01.png"
            imageAlt="FGTS"
          />
          <Card
            title="Acidente de Trabalho"
            description="Sofreu um acidente durante o trabalho? A indenização que você tem direito pode cobrir não apenas os danos imediatos, mas também custos de tratamentos prolongados, e em casos mais graves, pensões vitalícias. Nós estamos aqui para ajudar você a garantir uma compensação justa, proporcionando a segurança e apoio que você merece após um incidente dessa natureza."
            className="transition-all transform hover:scale-105 hover:shadow-lg animate__animated animate__fadeInUp animate__delay-1s text-justify"
            imageSrc="/cat.jpg"
            imageAlt="Acidente de Trabalho"
          />
        </div>
      </section>
      <section id="Sobre" className="bg-white py-24">
        <h3 className="text-4xl text-center mb-12 font-semibold text-blue-800">
          Sobre Nós
        </h3>

        {/* Seção de Advogados - Descrição Geral */}
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-6 space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-full text-justify lg:text-left space-y-6">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Nosso time é composto por profissionais especializados nas áreas de{" "}
              <strong>Direito Trabalhista</strong>, <strong>Direito Civil</strong>,{" "}
              <strong>Direito Contratual</strong> e outras áreas essenciais. Cada
              membro de nossa equipe traz uma experiência sólida e um compromisso
              profundo em oferecer soluções jurídicas personalizadas para cada
              cliente.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Trabalhamos com um objetivo comum: proporcionar um atendimento jurídico
              de excelência, sempre com ética, transparência e dedicação,
              independentemente da complexidade de cada caso.
            </p>
          </div>
        </div>

        {/* Separador entre os advogados */}
        <div className="border-t-2 border-gray-300 my-12"></div>

        {/* Seção Dr. Fernando Vasconcellos */}
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-6 space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="p-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-500 ease-in-out">
            <Image
              src="/fernando.png"
              alt="Dr. Fernando Vasconcellos"
              width={130}
              height={130}
              className="w-full h-auto rounded-2xl transform transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="lg:w-2/3 text-justify lg:text-left space-y-6">
            <p className="text-lg sm:text-xl text-justify text-gray-700 leading-relaxed">
              O <strong>Dr. Fernando Vasconcellos</strong> é especialista em{" "}
              <strong>Direito Penal, Direito Penal Econômico e Direito Tributário</strong>.
              Com uma atuação estratégica e comprometida, ele busca soluções eficientes para
              proteger os interesses de seus clientes, seja na esfera empresarial ou na defesa
              penal. Sua experiência permite um olhar analítico e preventivo, auxiliando tanto
              na resolução de litígios quanto na mitigação de riscos legais.
            </p>
            <p className="text-lg sm:text-xl text-justify text-gray-700 leading-relaxed">
              Atento às constantes mudanças na legislação e na jurisprudência, o Dr. Fernando
              oferece assessoria especializada, garantindo a melhor orientação jurídica para
              seus clientes.
            </p>
          </div>
        </div>


        {/* Separador entre os advogados */}
        <div className="border-t-2 border-gray-300 my-12"></div>

        {/* Seção Dra. Mariana Soares Silva */}
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-6 space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="p-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-500 ease-in-out">
            <Image
              src="/mariana.png"
              alt="Dra. Mariana Soares Silva"
              width={250}
              height={200}
              className="w-full h-auto rounded-2xl transform transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="lg:w-2/3 text-justify lg:text-left space-y-6">
            <p className="text-lg sm:text-xl text-justify text-gray-700 leading-relaxed">
              A <strong>Dra. Mariana Soares Silva</strong> possui ampla experiência em{" "}
              <strong>Direito Civil, Direito do Consumidor e Direito Trabalhista</strong>. Seu
              foco está na defesa dos direitos de seus clientes, tanto em questões contratuais
              quanto em litígios de consumo e relações de trabalho. Com um olhar atento aos
              detalhes, ela atua para garantir segurança jurídica e soluções eficazes.
            </p>
            <p className="text-lg text-justify sm:text-xl text-gray-700 leading-relaxed">
              Seu trabalho é pautado pela ética e transparência, sempre buscando estratégias
              que promovam a melhor proteção e o melhor resultado possível para seus clientes.
              Seja na resolução de conflitos ou na assessoria preventiva, a Dra. Mariana se
              dedica a proporcionar um atendimento próximo e personalizado.
            </p>
          </div>
        </div>


        {/* Descrição final - Compromisso do Escritório */}
        <div className="flex flex-col items-center max-w-7xl mx-auto px-6 mt-12 space-y-6">
          <p className="text-lg sm:text-xl text-justify text-gray-700 leading-relaxed">
            Nossa missão é proporcionar um atendimento jurídico que se destaca pela
            competência, empatia e compromisso com a justiça. Nossa equipe está sempre
            pronta para oferecer soluções eficazes e personalizadas, com o foco em
            garantir os melhores resultados para nossos clientes.
          </p>
        </div>
      </section>
      {/* Seção de Avaliações de Clientes */}
      <section id="testimonials" className="py-16 px-4 bg-white">
        <h3 className="text-5xl text-center mb-8 font-semibold text-blue-800">
          O que nossos clientes dizem
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Avaliação do Dr. Fernando Vasconcellos */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-all hover:scale-105 hover:shadow-blue-500/50 duration-300">
            <p className="text-xl text-black mb-6 leading-relaxed">
              "O Dr. Fernando foi ótimo! Sempre disponível, respondeu todas as minhas dúvidas e me deixou tranquilo durante o processo. Super recomendo!"
            </p>
            <p className="font-semibold text-right text-lg text-blue-800">- João da Silva</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-all hover:scale-105 hover:shadow-blue-500/50 duration-300">
            <p className="text-xl text-black mb-6 leading-relaxed">
              "A Dra. Mariana é excelente! Ela realmente se importa em entender a situação do cliente e me ajudou a resolver tudo de forma simples e objetiva. Fiquei bem tranquilo com o atendimento."
            </p>
            <p className="font-semibold text-right text-lg text-blue-800">- Larissa Pereira</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-all hover:scale-105 hover:shadow-blue-500/50 duration-300">
            <p className="text-xl text-black mb-6 leading-relaxed">
              "Ele é muito atencioso e esclarece tudo direitinho. O processo foi mais tranquilo do que eu imaginava, graças a ele. Nota 10!"
            </p>
            <p className="font-semibold text-right text-lg text-blue-800">- Carlos Souza</p>
          </div>

          {/* Avaliação da Dra. Mariana Soares Silva */}

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-all hover:scale-105 hover:shadow-blue-500/50 duration-300">
            <p className="text-xl text-black mb-6 leading-relaxed">
              "Eu estava um pouco perdido com um contrato, mas a Dra. Mariana explicou tudo de forma clara e me ajudou a entender tudo. Ela é super profissional!"
            </p>
            <p className="font-semibold text-right text-lg text-blue-800">- Roberto Almeida</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-all hover:scale-105 hover:shadow-blue-500/50 duration-300">
            <p className="text-xl text-black mb-6 leading-relaxed">
              "Tive um problema com um contrato e a Dra. Mariana resolveu tudo com muita paciência e dedicação. Fiquei muito satisfeito com o trabalho dela!"
            </p>
            <p className="font-semibold text-right text-lg text-blue-800">- Ana Costa</p>
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
