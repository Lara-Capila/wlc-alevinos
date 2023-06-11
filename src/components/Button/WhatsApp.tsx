import { BsWhatsapp } from 'react-icons/bs';
import Text from '../Typography/Text';

const WhatsApp = () => (
  <a
    href="https://api.whatsapp.com/send?phone=5531988374591&text=Ol%C3%A1!%20Visitei%20o%20site%20da%20Piscicultura%20WLC%20Alevinos%20e%20gostaria%20de%20saber%20mais."
    className="
      flex
      items-center
      gap-2
      bg-whatsapp
      p-2 px-3
      rounded-xl
      text-white
      w-max
    "
  >
    <BsWhatsapp className="w-4 h-4" />
    <Text
      text="Fazer orçamento pelo WhatsApp"
      font="font-semibold"
      styleProps="tracking-wide"
      size="text-sm"
    />
  </a>
);

export default WhatsApp;
