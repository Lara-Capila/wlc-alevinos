import Image from 'next/image';
import { AiOutlineWechat } from 'react-icons/ai';
import { CiDeliveryTruck } from 'react-icons/ci';
import { MdPriceCheck } from 'react-icons/md';
import BGImage from '../../images/peixes-koi-na-agua.jpg';
import WhatsApp from '../Button/WhatsApp';
import Card, { CardProps } from '../Card';
import Headdings from '../Typography/Headings';

const services: CardProps[] = [
  {
    title: 'Entrega',
    icon: <CiDeliveryTruck fill="white" className="w-10 h-10" />,
    description: 'Desfrute da conveniência do nosso serviço de entrega, recebendo seus alevinos diretamente em sua casa! Nossa entrega é segura, rápida e cuidadosa, assegurando a qualidade e o sucesso da sua criação.',
  },
  {
    title: 'Orientação Técnica',
    icon: <AiOutlineWechat fill="white" className="w-10 h-10" />,
    description: 'Nossos profissionais altamente especializados e capacitados estão prontos para fornecer orientações técnicas sobre o cultivo de alevinos, tanto no pré-venda quanto no pós-venda, garantindo o sucesso e a excelência em sua criação.',
  },
  {
    title: 'Preço Justo',
    icon: <MdPriceCheck fill="white" className="w-10 h-10" />,
    description: 'Na WLC Alevinos presamos pelo preço justo e qualidade dos alevinos.Nossos alevinos são selecionados com cuidado, alimentados adequadamente e monitorados constantemente para garantir um crescimento saudável.',
  },
];

const Hero = () => (
  <section className="relative px-16 h-screen">
    <div className="flex items-center justify-start py-44">
      <div className="absolute inset-0 bg-black">
        <Image
          src={BGImage}
          alt="background image"
        />
      </div>
      <div className="w-7/12 relative z-10 text-white">
        <Headdings
          text="Peixes para lagos, açudes e caixas d'água"
          font="font-medium"
          size="text-5xl"
          tag="h1"
        />

        <Headdings
          text="Fornecimento de várias espécies de alevinos para entregas em toda BH e região metropolitana "
          styleProps="my-4"
          size="text-xl"
          tag="h2"
        />
        <WhatsApp />

      </div>
    </div>
    <div className="flex justify-center relative z-10 bottom-5 divide-x">
      {services.map((service) => (
        <Card
          icon={service.icon}
          description={service.description}
          title={service.title}
        />
      ))}
    </div>
  </section>
);

export default Hero;
