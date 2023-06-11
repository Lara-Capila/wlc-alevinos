import { ReactNode } from 'react';
import Headdings from '../Typography/Headings';
import Text from '../Typography/Text';

export type CardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const Card = ({ description, icon, title }: CardProps) => (
  <div
    className="
        shadow-lg
        p-4 pt-0 w-96 h-auto
        flex flex-col justify-center items-center
        text-start
        bg-transparent
    "
  >
    <div className="w-full flex justify-between items-center mb-2 text-white">
      <Headdings text={title} size="text-xl" tag="h4" font="font-medium" />
      {icon}
    </div>
    <Text text={description} styleProps="text-white" />
  </div>
);

export default Card;
