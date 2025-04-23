import Logo from '@/components/ui/logo';
import SocalIcons from '@/components/ui/socalIcons';
import SlideUp from '@/lib/animations/slideUp';
import Link from 'next/link';
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';
import CopyRight from './copyRight';
import ScrollUp from './scrollUp';

const FooterOne = () => {
  return (
    <footer className='pt-[70px] relative'>
      <div className='container'>
        <div className='grid lg:grid-cols-[370px_auto_auto] sm:grid-cols-2 grid-cols-1 justify-between gap-7.5'>
          <SlideUp delay={2}>
            <Logo />
            <p className='pt-4'>
              Better yet, see us in person!{' '}
              <strong>Seekers Bay Preschool</strong>
            </p>
            <SocalIcons
              prentClass={'gap-5 pt-7.5'}
              className={
                'w-9 h-9 bg-warm text-muted-foreground hover:text-warm hover:bg-primary'
              }
            />
          </SlideUp>

          <SlideUp delay={3}>
            <h3 className='text-2xl font-semibold'>Pages</h3>
            <ul className='flex flex-col gap-[15px] pt-5 min-w-[215px]'>
              <li>
                <Link
                  href='/about-us'
                  className='text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground'>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground'>
                  Latest Service
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground'>
                  Latest Blog And News
                </Link>
              </li>
              <li>
                <Link
                  href='/faq'
                  className='text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground'>
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground'>
                  Our Creative Team Member
                </Link>
              </li>
            </ul>
          </SlideUp>

          <SlideUp delay={4}>
            <h3 className='text-2xl font-semibold'>Contact</h3>
            <ul className='flex flex-col gap-[15px] pt-5'>
              <li>
                <p className='text-[#686868] flex items-center gap-4'>
                  <span className='flex items-center justify-center border border-gray-200 rounded-full w-11 h-11 text-primary-foreground'>
                    <FaLocationDot />
                  </span>{' '}
                  <span className='max-w-[168px]'>
                    Seekers Bay Rayasandra 3, Rayasandra Gattahalli Main Road,
                    Rayasandra, Bangalore (Near SJR Parkway Homes) Pin Code :
                    560099
                  </span>
                </p>
              </li>
              <li>
                <p className='text-[#686868] flex items-center gap-4'>
                  <span className='flex items-center justify-center border border-gray-200 rounded-full w-11 h-11 text-primary-foreground'>
                    <FaEnvelope />
                  </span>{' '}
                  <Link href='mailto:preethi@seekersbay.in'>
                    preethi@seekersbay.in
                  </Link>
                </p>
              </li>
              <li>
                <p className='text-[#686868] flex items-center gap-4'>
                  <span className='flex items-center justify-center border border-gray-200 rounded-full w-11 h-11 text-primary-foreground'>
                    <FaPhone />
                  </span>{' '}
                  <Link href='tel:+919008793838'>9008793838</Link>
                </p>
              </li>
            </ul>
          </SlideUp>
        </div>
        <CopyRight />
      </div>
      <ScrollUp />
    </footer>
  );
};

export default FooterOne;
