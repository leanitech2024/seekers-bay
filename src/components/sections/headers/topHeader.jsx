import SocalIcons from '@/components/ui/socalIcons';
import Link from 'next/link';
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { GiVineFlower } from 'react-icons/gi';

const TopHeader = () => {
  return (
    <div id='top-header' className='hidden bg-primary sm:block'>
      <div className='container'>
        <div className='flex lg:flex-row flex-col justify-between items-center gap-2 py-[13px]'>
          <div>
            <ul className='flex flex-wrap gap-7.5'>
              <li className='flex items-center gap-4 text-cream-foreground'>
                <FaPhone />{' '}
                <Link href={'tel:+919008793838'}>+91 9008793838</Link>
              </li>
              <li className='flex items-center gap-4 text-cream-foreground'>
                <FaEnvelope />{' '}
                <Link href={'mailto:preethi@seekersbay.in'}>
                  preethi@seekersbay.in
                </Link>
              </li>
              <li className='flex items-center gap-4 text-cream-foreground'>
                <FaLocationDot /> <span>6391 Elgin St. Celina, 10299</span>
              </li>
              <li className='flex items-center gap-4 text-cream-foreground animate-pulse'>
                <GiVineFlower />
                AY 2025 Admissions Open - Best Preschool in Bengaluru.
              </li>
            </ul>
          </div>
          <div>
            <SocalIcons className={'text-xs'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
