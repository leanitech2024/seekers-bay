import SlideUp from '@/lib/animations/slideUp';
import Link from 'next/link';
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';

const ContactAddress = () => {
  return (
    <div className='pt-10 pb-10 lg:pb-15 lg:pt-15'>
      <div className='container'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5'>
          <SlideUp delay={2}>
            <div className='bg-background rounded-md shadow-3xl pt-5 pb-7.5 px-7.5 text-center flex flex-col items-center'>
              <div className='flex items-center justify-center w-16 h-16 rounded-full bg-green'>
                <span className='text-cream-foreground text-[28px]'>
                  <FaLocationDot />{' '}
                </span>
              </div>
              <h5 className='font-bold text-xl mt-5 pb-2.5'>Location</h5>
              <p>
                Rayasandra 3, Rayasandra Gattahalli Main Road, Bangalore (Near
                SJR Parkway Homes) - 560099
              </p>
            </div>
          </SlideUp>

          <SlideUp delay={3}>
            <div className='bg-background rounded-md shadow-3xl pt-5 pb-7.5 px-7.5 text-center flex flex-col items-center '>
              <div className='flex items-center justify-center w-16 h-16 rounded-full bg-green'>
                <span className='text-cream-foreground text-[28px]'>
                  <FaEnvelope />{' '}
                </span>
              </div>
              <h5 className='font-bold text-xl mt-5 pb-2.5'>Mail</h5>
              <p>
                <Link href='mailto:preethi@seekersbay.in'>
                  preethi@seekersbay.in
                </Link>
              </p>
            </div>
          </SlideUp>

          <SlideUp delay={4}>
            <div className='bg-background rounded-md shadow-3xl pt-5 pb-7.5 px-7.5 text-center flex flex-col items-center'>
              <div className='flex items-center justify-center w-16 h-16 rounded-full bg-green'>
                <span className='text-cream-foreground text-[28px]'>
                  <FaPhone />{' '}
                </span>
              </div>
              <h5 className='font-bold text-xl mt-5 pb-2.5'>Contact</h5>
              <p>
                <Link href='tel:+919008793838'>+91 9008793838</Link>
              </p>
            </div>
          </SlideUp>
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
