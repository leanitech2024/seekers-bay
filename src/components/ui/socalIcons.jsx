import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';

const icons = [
  {
    id: 1,
    link: 'https://www.facebook.com/SeekersBayPreschool',
    icon: <FaFacebookF />,
  },
  // {
  //   id: 2,
  //   link: '',
  //   icon: <FaXTwitter />,
  // },
  // {
  //   id: 3,
  //   link: '',
  //   icon: <FaLinkedin />,
  // },
  {
    id: 2,
    link: 'https://www.instagram.com/seekersbaypreschool/',
    icon: <FaInstagram />,
  },
];
const SocalIcons = ({ className, prentClass }) => {
  return (
    <ul className={cn('flex items-center gap-[14px]', prentClass)}>
      {icons.map(({ icon, id, link }) => {
        return (
          <li key={id}>
            <Link
              href={link}
              target={'_blank'}
              rel='noopener noreferrer'
              className={cn(
                'rounded-md w-6 h-6 flex items-center justify-center border border-white border-opacity-20 text-cream-foreground hover:bg-primary transition-all duration-500',
                className
              )}>
              {icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SocalIcons;
