// import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ className }) => {
  return (
    <Link href='/' className='flex items-center gap-1'>
      <Image
        src={'/logo.webp'}
        width={150}
        height={60}
        alt='logo'
        className={'w-full h-full'}
        priority={true}
      />
      {/* <span className={cn('font-bold text-3xl', className)}>Ascent</span> */}
    </Link>
  );
};

export default Logo;
